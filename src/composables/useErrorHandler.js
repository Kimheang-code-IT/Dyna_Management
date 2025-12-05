import { ref } from 'vue'
import { useToast } from './useToast'
import { useSystemError } from './useSystemError'

// Global error state
const errors = ref([])
let errorIdCounter = 0

/**
 * Composable for centralized error handling
 * @returns {Object} Error handling methods
 */
export function useErrorHandler() {
  const { error: showErrorToast } = useToast()
  const { handleSystemError, detectErrorType } = useSystemError()

  /**
   * Handle and display an error
   * @param {Error|string} err - Error object or error message
   * @param {Object} options - Error handling options
   * @param {boolean} options.showToast - Show toast notification (default: true)
   * @param {boolean} options.logToConsole - Log to console (default: true)
   * @param {string} options.userMessage - Custom user-friendly message
   * @returns {string} Error ID
   */
  const handleError = (err, options = {}) => {
    const {
      showToast: shouldShowToast = true,
      logToConsole: shouldLog = true,
      userMessage = null,
      redirectToErrorPage = true
    } = options

    const id = `error-${++errorIdCounter}`
    const errorMessage = err instanceof Error ? err.message : String(err)
    const errorStack = err instanceof Error ? err.stack : null

    // Detect error type and handle system-level errors
    const errorType = detectErrorType(err)
    const isSystemError = ['maintenance', 'server', 'network', 'timeout', 'serviceUnavailable'].includes(errorType)

    // Handle system-level errors (redirect to error/maintenance page)
    if (isSystemError && redirectToErrorPage) {
      handleSystemError(err, { redirect: true })
      return id
    }

    const error = {
      id,
      message: errorMessage,
      stack: errorStack,
      timestamp: Date.now(),
      userMessage: userMessage || getErrorMessage(errorMessage),
      type: errorType
    }

    errors.value.push(error)

    // Log to console if enabled
    if (shouldLog) {
      console.error('Error handled:', error)
      if (errorStack) {
        console.error('Stack trace:', errorStack)
      }
    }

    // Show toast if enabled (only for non-system errors or when not redirecting)
    if (shouldShowToast && (!isSystemError || !redirectToErrorPage)) {
      showErrorToast(error.userMessage)
    }

    return id
  }

  /**
   * Get user-friendly error message
   * @param {string} errorMessage - Original error message
   * @returns {string} User-friendly message
   */
  const getErrorMessage = (errorMessage) => {
    const message = errorMessage.toLowerCase()

    // Network errors
    if (message.includes('network') || message.includes('fetch')) {
      return 'Network error. Please check your connection and try again.'
    }
    if (message.includes('timeout')) {
      return 'Request timed out. Please try again.'
    }

    // Validation errors
    if (message.includes('validation') || message.includes('invalid')) {
      return 'Invalid data provided. Please check your input.'
    }

    // Permission errors
    if (message.includes('permission') || message.includes('unauthorized') || message.includes('403')) {
      return 'You do not have permission to perform this action.'
    }

    // Not found errors
    if (message.includes('not found') || message.includes('404')) {
      return 'The requested resource was not found.'
    }

    // Server errors
    if (message.includes('server') || message.includes('500')) {
      return 'Server error. Please try again later.'
    }

    // Default message
    return errorMessage || 'An unexpected error occurred. Please try again.'
  }

  /**
   * Handle network errors with retry mechanism
   * @param {Function} asyncFn - Async function to retry
   * @param {number} maxRetries - Maximum number of retries (default: 3)
   * @param {number} delay - Delay between retries in ms (default: 1000)
   * @returns {Promise} Promise from async function
   */
  const withRetry = async (asyncFn, maxRetries = 3, delay = 1000) => {
    let lastError = null

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await asyncFn()
      } catch (err) {
        lastError = err
        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, delay * attempt))
        }
      }
    }

    throw lastError
  }

  /**
   * Clear error by ID
   * @param {string} id - Error ID
   */
  const clearError = (id) => {
    const index = errors.value.findIndex(error => error.id === id)
    if (index > -1) {
      errors.value.splice(index, 1)
    }
  }

  /**
   * Clear all errors
   */
  const clearAll = () => {
    errors.value = []
  }

  /**
   * Get recent errors
   * @param {number} count - Number of recent errors to return
   * @returns {Array} Array of recent errors
   */
  const getRecentErrors = (count = 10) => {
    return errors.value
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, count)
  }

  return {
    errors,
    handleError,
    getErrorMessage,
    withRetry,
    clearError,
    clearAll,
    getRecentErrors
  }
}

// Export global errors for use in components
export { errors }

