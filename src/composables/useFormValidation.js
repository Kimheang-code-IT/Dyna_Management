import { ref, computed } from 'vue'
import { useToast } from './useToast'

/**
 * Composable for form validation
 * @param {Object} initialValues - Initial form values
 * @param {Object} validationRules - Validation rules object
 * @returns {Object} Validation state and methods
 */
export function useFormValidation(initialValues = {}, validationRules = {}) {
  const { error: showErrorToast } = useToast()
  const formData = ref({ ...initialValues })
  const errors = ref({})
  const touched = ref({})

  /**
   * Validation rule functions
   */
  const validators = {
    required: (value) => {
      if (value === null || value === undefined || value === '') {
        return 'This field is required'
      }
      if (Array.isArray(value) && value.length === 0) {
        return 'This field is required'
      }
      return null
    },
    email: (value) => {
      if (!value) return null
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value) ? null : 'Please enter a valid email address'
    },
    phone: (value) => {
      if (!value) return null
      const phoneRegex = /^[\d\s\-\+\(\)]+$/
      return phoneRegex.test(value) ? null : 'Please enter a valid phone number'
    },
    minLength: (min) => (value) => {
      if (!value) return null
      return value.length >= min ? null : `Must be at least ${min} characters`
    },
    maxLength: (max) => (value) => {
      if (!value) return null
      return value.length <= max ? null : `Must be no more than ${max} characters`
    },
    min: (min) => (value) => {
      if (value === null || value === undefined || value === '') return null
      const num = Number(value)
      return !isNaN(num) && num >= min ? null : `Must be at least ${min}`
    },
    max: (max) => (value) => {
      if (value === null || value === undefined || value === '') return null
      const num = Number(value)
      return !isNaN(num) && num <= max ? null : `Must be no more than ${max}`
    },
    pattern: (regex, message) => (value) => {
      if (!value) return null
      return regex.test(value) ? null : (message || 'Invalid format')
    },
    custom: (validatorFn) => (value, formData) => {
      return validatorFn(value, formData)
    }
  }

  /**
   * Validate a single field
   * @param {string} fieldName - Field name to validate
   * @param {*} value - Field value
   * @returns {string|null} Error message or null if valid
   */
  const validateField = (fieldName, value) => {
    const rules = validationRules[fieldName]
    if (!rules || !Array.isArray(rules)) {
      return null
    }

    for (const rule of rules) {
      let validator
      let errorMessage = null

      if (typeof rule === 'string') {
        // Simple string rule (e.g., 'required', 'email')
        validator = validators[rule]
        if (!validator) continue
        errorMessage = validator(value)
      } else if (typeof rule === 'function') {
        // Custom validator function
        errorMessage = rule(value, formData.value)
      } else if (typeof rule === 'object' && rule.validator) {
        // Object with validator property
        if (typeof rule.validator === 'string') {
          validator = validators[rule.validator]
          if (validator) {
            if (typeof validator === 'function') {
              errorMessage = validator(value)
            } else {
              errorMessage = validator(rule.params)(value)
            }
          }
        } else if (typeof rule.validator === 'function') {
          errorMessage = rule.validator(value, formData.value)
        }
        // Use custom message if provided
        if (errorMessage && rule.message) {
          errorMessage = rule.message
        }
      }

      if (errorMessage) {
        return errorMessage
      }
    }

    return null
  }

  /**
   * Validate all fields
   * @returns {boolean} True if form is valid
   */
  const validate = () => {
    const newErrors = {}
    let isValid = true

    for (const fieldName in validationRules) {
      const error = validateField(fieldName, formData.value[fieldName])
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    }

    errors.value = newErrors
    return isValid
  }

  /**
   * Validate a specific field
   * @param {string} fieldName - Field name to validate
   */
  const validateSingle = (fieldName) => {
    const error = validateField(fieldName, formData.value[fieldName])
    if (error) {
      errors.value[fieldName] = error
    } else {
      delete errors.value[fieldName]
    }
  }

  /**
   * Mark field as touched
   * @param {string} fieldName - Field name
   */
  const touchField = (fieldName) => {
    touched.value[fieldName] = true
    validateSingle(fieldName)
  }

  /**
   * Mark all fields as touched
   */
  const touchAll = () => {
    for (const fieldName in validationRules) {
      touched.value[fieldName] = true
    }
    validate()
  }

  /**
   * Clear all errors
   */
  const clearErrors = () => {
    errors.value = {}
    touched.value = {}
  }

  /**
   * Reset form to initial values
   */
  const reset = () => {
    formData.value = { ...initialValues }
    clearErrors()
  }

  /**
   * Check if field has error
   * @param {string} fieldName - Field name
   * @returns {boolean} True if field has error
   */
  const hasError = (fieldName) => {
    return !!errors.value[fieldName]
  }

  /**
   * Check if field is touched
   * @param {string} fieldName - Field name
   * @returns {boolean} True if field is touched
   */
  const isTouched = (fieldName) => {
    return !!touched.value[fieldName]
  }

  /**
   * Check if field should show error
   * @param {string} fieldName - Field name
   * @returns {boolean} True if error should be shown
   */
  const shouldShowError = (fieldName) => {
    return isTouched(fieldName) && hasError(fieldName)
  }

  /**
   * Get error message for field
   * @param {string} fieldName - Field name
   * @returns {string|null} Error message or null
   */
  const getError = (fieldName) => {
    return errors.value[fieldName] || null
  }

  /**
   * Check if form is valid
   */
  const isValid = computed(() => {
    return Object.keys(errors.value).length === 0
  })

  /**
   * Validate and submit form
   * @param {Function} onSubmit - Submit handler function
   * @returns {Promise} Promise from submit handler
   */
  const handleSubmit = async (onSubmit) => {
    touchAll()
    
    if (!validate()) {
      showErrorToast('Please fix the errors in the form')
      return Promise.reject(new Error('Form validation failed'))
    }

    try {
      return await onSubmit(formData.value)
    } catch (err) {
      // Handle submission errors
      throw err
    }
  }

  return {
    formData,
    errors,
    touched,
    isValid,
    validate,
    validateSingle,
    touchField,
    touchAll,
    clearErrors,
    reset,
    hasError,
    isTouched,
    shouldShowError,
    getError,
    handleSubmit
  }
}

