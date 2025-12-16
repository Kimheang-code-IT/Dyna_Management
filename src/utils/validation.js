/**
 * Validation utility functions for form inputs
 * Provides validation logic for all input types across the application
 */

/**
 * Validates a name field (English or Khmer names)
 * @param {string} value - The name value to validate
 * @param {boolean} required - Whether the field is required
 * @returns {string} Error message or empty string if valid
 */
export const validateName = (value, required = true) => {
  const trimmed = value?.trim() || ''
  
  if (required && !trimmed) {
    return 'Name is required'
  }
  
  if (trimmed && !/^[a-zA-Z\s'-]+$/.test(trimmed)) {
    return 'Name can only contain letters, spaces, hyphens, and apostrophes'
  }
  
  if (trimmed && trimmed.length < 2) {
    return 'Name must be at least 2 characters'
  }
  
  if (trimmed && trimmed.length > 100) {
    return 'Name must not exceed 100 characters'
  }
  
  return ''
}

/**
 * Validates a Khmer name field (allows Khmer characters)
 * @param {string} value - The Khmer name value to validate
 * @param {boolean} required - Whether the field is required
 * @returns {string} Error message or empty string if valid
 */
export const validateKhmerName = (value, required = false) => {
  const trimmed = value?.trim() || ''
  
  if (required && !trimmed) {
    return 'Khmer name is required'
  }
  
  if (trimmed && trimmed.length < 2) {
    return 'Khmer name must be at least 2 characters'
  }
  
  if (trimmed && trimmed.length > 100) {
    return 'Khmer name must not exceed 100 characters'
  }
  
  return ''
}

/**
 * Validates an email address
 * @param {string} value - The email value to validate
 * @param {boolean} required - Whether the field is required
 * @returns {string} Error message or empty string if valid
 */
export const validateEmail = (value, required = true) => {
  const trimmed = value?.trim() || ''
  
  if (required && !trimmed) {
    return 'Email is required'
  }
  
  if (trimmed) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) {
      return 'Please enter a valid email address'
    }
    
    if (trimmed.length > 255) {
      return 'Email must not exceed 255 characters'
    }
  }
  
  return ''
}

/**
 * Validates a phone number
 * @param {string} value - The phone value to validate
 * @param {boolean} required - Whether the field is required
 * @returns {string} Error message or empty string if valid
 */
export const validatePhone = (value, required = true) => {
  const trimmed = value?.trim() || ''
  
  if (required && !trimmed) {
    return 'Phone is required'
  }
  
  if (trimmed) {
    // Allow numbers, spaces, hyphens, parentheses, and plus sign
    if (!/^[\d\s\-\+\(\)]+$/.test(trimmed)) {
      return 'Phone can only contain numbers and valid phone characters'
    }
    
    // Remove formatting to check minimum length
    const digitsOnly = trimmed.replace(/\D/g, '')
    if (digitsOnly.length < 7) {
      return 'Phone number must have at least 7 digits'
    }
    
    if (trimmed.length > 20) {
      return 'Phone number must not exceed 20 characters'
    }
  }
  
  return ''
}

/**
 * Validates a number field (amount, price, quantity)
 * @param {number|string} value - The number value to validate
 * @param {object} options - Validation options
 * @param {boolean} options.required - Whether the field is required
 * @param {number} options.min - Minimum value
 * @param {number} options.max - Maximum value
 * @param {boolean} options.allowDecimals - Whether decimals are allowed
 * @returns {string} Error message or empty string if valid
 */
export const validateNumber = (value, options = {}) => {
  const { required = true, min = 0, max = null, allowDecimals = true } = options
  
  if (required && (value === null || value === undefined || value === '')) {
    return 'This field is required'
  }
  
  if (value !== null && value !== undefined && value !== '') {
    const numValue = typeof value === 'string' ? parseFloat(value) : value
    
    if (isNaN(numValue)) {
      return 'Please enter a valid number'
    }
    
    if (numValue < min) {
      return `Value must be at least ${min}`
    }
    
    if (max !== null && numValue > max) {
      return `Value must not exceed ${max}`
    }
    
    if (!allowDecimals && !Number.isInteger(numValue)) {
      return 'Please enter a whole number'
    }
  }
  
  return ''
}

/**
 * Validates a date field
 * @param {string} value - The date value to validate (YYYY-MM-DD format)
 * @param {object} options - Validation options
 * @param {boolean} options.required - Whether the field is required
 * @param {boolean} options.notFuture - Whether the date cannot be in the future
 * @param {string} options.minDate - Minimum date (YYYY-MM-DD)
 * @param {string} options.maxDate - Maximum date (YYYY-MM-DD)
 * @returns {string} Error message or empty string if valid
 */
export const validateDate = (value, options = {}) => {
  const { required = true, notFuture = false, minDate = null, maxDate = null } = options
  
  if (required && !value) {
    return 'Date is required'
  }
  
  if (value) {
    const date = new Date(value)
    
    if (isNaN(date.getTime())) {
      return 'Please enter a valid date'
    }
    
    if (notFuture) {
      const today = new Date()
      today.setHours(23, 59, 59, 999)
      if (date > today) {
        return 'Date cannot be in the future'
      }
    }
    
    if (minDate) {
      const min = new Date(minDate)
      if (date < min) {
        return `Date must be after ${minDate}`
      }
    }
    
    if (maxDate) {
      const max = new Date(maxDate)
      max.setHours(23, 59, 59, 999)
      if (date > max) {
        return `Date must be before ${maxDate}`
      }
    }
  }
  
  return ''
}

/**
 * Validates that end date is after start date
 * @param {string} startDate - Start date (YYYY-MM-DD)
 * @param {string} endDate - End date (YYYY-MM-DD)
 * @returns {string} Error message or empty string if valid
 */
export const validateDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return ''
  }
  
  const start = new Date(startDate)
  const end = new Date(endDate)
  
  if (end <= start) {
    return 'End date must be after start date'
  }
  
  return ''
}

/**
 * Validates an address/location field
 * @param {string} value - The address value to validate
 * @param {boolean} required - Whether the field is required
 * @returns {string} Error message or empty string if valid
 */
export const validateAddress = (value, required = false) => {
  const trimmed = value?.trim() || ''
  
  if (required && !trimmed) {
    return 'Address is required'
  }
  
  if (trimmed && trimmed.length < 5) {
    return 'Address must be at least 5 characters'
  }
  
  if (trimmed && trimmed.length > 500) {
    return 'Address must not exceed 500 characters'
  }
  
  return ''
}

/**
 * Validates a text/description field
 * @param {string} value - The text value to validate
 * @param {object} options - Validation options
 * @param {boolean} options.required - Whether the field is required
 * @param {number} options.minLength - Minimum length
 * @param {number} options.maxLength - Maximum length
 * @returns {string} Error message or empty string if valid
 */
export const validateText = (value, options = {}) => {
  const { required = true, minLength = 1, maxLength = 1000 } = options
  const trimmed = value?.trim() || ''
  
  if (required && !trimmed) {
    return 'This field is required'
  }
  
  if (trimmed && trimmed.length < minLength) {
    return `Text must be at least ${minLength} character${minLength > 1 ? 's' : ''}`
  }
  
  if (trimmed && trimmed.length > maxLength) {
    return `Text must not exceed ${maxLength} characters`
  }
  
  return ''
}

/**
 * Validates a file/image upload
 * @param {File} file - The file to validate
 * @param {object} options - Validation options
 * @param {boolean} options.required - Whether the file is required
 * @param {number} options.maxSizeMB - Maximum file size in MB
 * @param {string[]} options.allowedTypes - Allowed MIME types
 * @returns {string} Error message or empty string if valid
 */
export const validateFile = (file, options = {}) => {
  const { required = false, maxSizeMB = 20, allowedTypes = ['image/*'] } = options
  
  if (required && !file) {
    return 'File is required'
  }
  
  if (file) {
    // Check file size
    const maxSizeBytes = maxSizeMB * 1024 * 1024
    if (file.size > maxSizeBytes) {
      return `File size must not exceed ${maxSizeMB}MB`
    }
    
    // Check file type
    if (allowedTypes.length > 0) {
      const isValidType = allowedTypes.some(type => {
        if (type === 'image/*') {
          return file.type.startsWith('image/')
        }
        return file.type === type
      })
      
      if (!isValidType) {
        return 'Please upload a valid image file'
      }
    }
  }
  
  return ''
}

/**
 * Validates a select/dropdown field
 * @param {string} value - The selected value
 * @param {boolean} required - Whether the field is required
 * @returns {string} Error message or empty string if valid
 */
export const validateSelect = (value, required = true) => {
  if (required && (!value || value === '')) {
    return 'Please select an option'
  }
  
  return ''
}

/**
 * Prevents non-name characters on keypress
 * @param {KeyboardEvent} event - The keypress event
 */
export const preventNonNameChars = (event) => {
  const char = String.fromCharCode(event.which)
  // Allow letters, spaces, hyphens, apostrophes, and control keys
  if (!/^[a-zA-Z\s'-]$/.test(char) && event.which !== 8 && event.which !== 46 && event.which !== 9) {
    event.preventDefault()
  }
}

/**
 * Prevents non-numeric characters on keypress (for phone)
 * @param {KeyboardEvent} event - The keypress event
 */
export const preventNonPhoneChars = (event) => {
  const char = String.fromCharCode(event.which)
  // Allow numbers, spaces, hyphens, parentheses, plus sign, and control keys
  if (!/^[\d\s\-\+\(\)]$/.test(char) && event.which !== 8 && event.which !== 46 && event.which !== 9) {
    event.preventDefault()
  }
}

/**
 * Prevents non-numeric characters on keypress (for numbers)
 * @param {KeyboardEvent} event - The keypress event
 * @param {boolean} allowDecimals - Whether to allow decimal point
 */
export const preventNonNumeric = (event, allowDecimals = true) => {
  const char = String.fromCharCode(event.which)
  // Allow numbers, decimal point (if allowed), and control keys
  const pattern = allowDecimals ? /^[\d.]$/ : /^\d$/
  if (!pattern.test(char) && event.which !== 8 && event.which !== 46 && event.which !== 9 && event.which !== 37 && event.which !== 39) {
    event.preventDefault()
  }
  
  // Prevent multiple decimal points
  if (allowDecimals && char === '.' && event.target.value.includes('.')) {
    event.preventDefault()
  }
}

