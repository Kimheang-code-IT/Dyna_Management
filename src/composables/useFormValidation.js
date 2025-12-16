import { ref, reactive, computed } from 'vue'
import {
  validateName,
  validateKhmerName,
  validateEmail,
  validatePhone,
  validateNumber,
  validateDate,
  validateDateRange,
  validateAddress,
  validateText,
  validateFile,
  validateSelect,
  preventNonNameChars,
  preventNonPhoneChars,
  preventNonNumeric
} from '../utils/validation'

/**
 * Composable for form validation
 * Provides validation functions, error management, and keypress prevention
 * 
 * @param {object} initialErrors - Initial error state object
 * @returns {object} Validation utilities and state
 */
export function useFormValidation(initialErrors = {}) {
  // Error state
  const errors = reactive({ ...initialErrors })
  
  /**
   * Clear all errors
   */
  const clearErrors = () => {
    Object.keys(errors).forEach(key => {
      errors[key] = ''
    })
  }
  
  /**
   * Clear a specific error
   * @param {string} field - Field name to clear
   */
  const clearError = (field) => {
    if (errors[field] !== undefined) {
      errors[field] = ''
    }
  }
  
  /**
   * Set an error for a specific field
   * @param {string} field - Field name
   * @param {string} message - Error message
   */
  const setError = (field, message) => {
    if (errors[field] !== undefined) {
      errors[field] = message
    }
  }
  
  /**
   * Validate name field
   * @param {string} field - Field name in errors object
   * @param {string} value - Value to validate
   * @param {boolean} required - Whether field is required
   */
  const validateNameField = (field, value, required = true) => {
    const error = validateName(value, required)
    errors[field] = error
    return error === ''
  }
  
  /**
   * Validate Khmer name field
   * @param {string} field - Field name in errors object
   * @param {string} value - Value to validate
   * @param {boolean} required - Whether field is required
   */
  const validateKhmerNameField = (field, value, required = false) => {
    const error = validateKhmerName(value, required)
    errors[field] = error
    return error === ''
  }
  
  /**
   * Validate email field
   * @param {string} field - Field name in errors object
   * @param {string} value - Value to validate
   * @param {boolean} required - Whether field is required
   */
  const validateEmailField = (field, value, required = true) => {
    const error = validateEmail(value, required)
    errors[field] = error
    return error === ''
  }
  
  /**
   * Validate phone field
   * @param {string} field - Field name in errors object
   * @param {string} value - Value to validate
   * @param {boolean} required - Whether field is required
   */
  const validatePhoneField = (field, value, required = true) => {
    const error = validatePhone(value, required)
    errors[field] = error
    return error === ''
  }
  
  /**
   * Validate number field
   * @param {string} field - Field name in errors object
   * @param {number|string} value - Value to validate
   * @param {object} options - Validation options
   */
  const validateNumberField = (field, value, options = {}) => {
    const error = validateNumber(value, options)
    errors[field] = error
    return error === ''
  }
  
  /**
   * Validate date field
   * @param {string} field - Field name in errors object
   * @param {string} value - Value to validate
   * @param {object} options - Validation options
   */
  const validateDateField = (field, value, options = {}) => {
    const error = validateDate(value, options)
    errors[field] = error
    return error === ''
  }
  
  /**
   * Validate date range
   * @param {string} startField - Start date field name
   * @param {string} endField - End date field name
   * @param {string} startDate - Start date value
   * @param {string} endDate - End date value
   */
  const validateDateRangeFields = (startField, endField, startDate, endDate) => {
    const error = validateDateRange(startDate, endDate)
    if (error) {
      errors[endField] = error
    } else {
      clearError(endField)
    }
    return error === ''
  }
  
  /**
   * Validate address field
   * @param {string} field - Field name in errors object
   * @param {string} value - Value to validate
   * @param {boolean} required - Whether field is required
   */
  const validateAddressField = (field, value, required = false) => {
    const error = validateAddress(value, required)
    errors[field] = error
    return error === ''
  }
  
  /**
   * Validate text field
   * @param {string} field - Field name in errors object
   * @param {string} value - Value to validate
   * @param {object} options - Validation options
   */
  const validateTextField = (field, value, options = {}) => {
    const error = validateText(value, options)
    errors[field] = error
    return error === ''
  }
  
  /**
   * Validate file field
   * @param {string} field - Field name in errors object
   * @param {File} file - File to validate
   * @param {object} options - Validation options
   */
  const validateFileField = (field, file, options = {}) => {
    const error = validateFile(file, options)
    errors[field] = error
    return error === ''
  }
  
  /**
   * Validate select field
   * @param {string} field - Field name in errors object
   * @param {string} value - Value to validate
   * @param {boolean} required - Whether field is required
   */
  const validateSelectField = (field, value, required = true) => {
    const error = validateSelect(value, required)
    errors[field] = error
    return error === ''
  }
  
  /**
   * Check if form is valid
   * @param {object} fields - Object with field names as keys and validation functions as values
   * @returns {boolean} Whether form is valid
   */
  const isFormValid = (fields = {}) => {
    return Object.values(errors).every(error => error === '')
  }
  
  /**
   * Validate all fields in a form
   * @param {object} validators - Object with field names as keys and validation functions as values
   * @returns {boolean} Whether all fields are valid
   */
  const validateAll = (validators) => {
    let isValid = true
    Object.entries(validators).forEach(([field, validator]) => {
      if (typeof validator === 'function') {
        const fieldValid = validator()
        if (!fieldValid) {
          isValid = false
        }
      }
    })
    return isValid
  }
  
  return {
    errors,
    clearErrors,
    clearError,
    setError,
    validateNameField,
    validateKhmerNameField,
    validateEmailField,
    validatePhoneField,
    validateNumberField,
    validateDateField,
    validateDateRangeFields,
    validateAddressField,
    validateTextField,
    validateFileField,
    validateSelectField,
    isFormValid,
    validateAll,
    // Keypress prevention handlers
    preventNonNameChars,
    preventNonPhoneChars,
    preventNonNumeric
  }
}
