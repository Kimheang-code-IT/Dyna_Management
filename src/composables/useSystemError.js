import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// Global system error state
const systemError = ref(null)
const isMaintenanceMode = ref(false)
const errorType = ref(null)
const errorCode = ref(null)

/**
 * Composable for system error detection and management
 * @returns {Object} Error detection and management methods
 */
export function useSystemError() {
  const router = useRouter()

  /**
   * Detect error type from error object or response
   * @param {Error|Response|Object} error - Error to analyze
   * @returns {string} Error type ('network', 'server', 'timeout', 'maintenance', etc.)
   */
  const detectErrorType = (error) => {
    // Check if it's a network error
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return 'network'
    }

    // Check if it's a timeout
    if (error?.message?.toLowerCase().includes('timeout')) {
      return 'timeout'
    }

    // Check HTTP status codes
    const status = error?.status || error?.response?.status || error?.code

    if (status === 503) {
      // Check if it's maintenance mode
      const headers = error?.response?.headers || error?.headers || {}
      if (headers['x-maintenance-mode'] === 'true' || headers['Retry-After']) {
        return 'maintenance'
      }
      return 'serviceUnavailable'
    }

    if (status === 500 || status === 502) {
      return 'server'
    }

    if (status === 504 || status === 408) {
      return 'timeout'
    }

    if (status === 404) {
      return 'notFound'
    }

    if (status === 403 || status === 401) {
      return 'unauthorized'
    }

    // Default to server error
    return 'server'
  }

  /**
   * Handle system error and redirect to appropriate page
   * @param {Error|Response|Object} error - Error to handle
   * @param {Object} options - Options for error handling
   */
  const handleSystemError = (error, options = {}) => {
    const { redirect = true } = options

    const type = detectErrorType(error)
    const code = error?.status || error?.response?.status || error?.code || '500'

    systemError.value = error
    errorType.value = type
    errorCode.value = code

    if (type === 'maintenance') {
      isMaintenanceMode.value = true
      if (redirect) {
        router.push({ name: 'SystemMaintenance' })
      }
    } else if (redirect && type !== 'notFound' && type !== 'unauthorized') {
      router.push({
        name: 'SystemError',
        params: { type, code: String(code) }
      })
    }
  }

  /**
   * Check if system is in maintenance mode
   * @returns {Promise<boolean>} True if in maintenance mode
   */
  const checkSystemStatus = async () => {
    try {
      // Try to make a simple request to check system status
      const response = await fetch('/api/health', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 503) {
        isMaintenanceMode.value = true
        return true
      }

      isMaintenanceMode.value = false
      return false
    } catch (error) {
      // Network error - can't determine status
      return null
    }
  }

  /**
   * Clear system error state
   */
  const clearSystemError = () => {
    systemError.value = null
    isMaintenanceMode.value = false
    errorType.value = null
    errorCode.value = null
  }

  /**
   * Retry last failed operation
   * @param {Function} retryFn - Function to retry
   * @returns {Promise} Result of retry function
   */
  const retryOperation = async (retryFn) => {
    clearSystemError()
    try {
      return await retryFn()
    } catch (error) {
      handleSystemError(error)
      throw error
    }
  }

  return {
    systemError: computed(() => systemError.value),
    isMaintenanceMode: computed(() => isMaintenanceMode.value),
    errorType: computed(() => errorType.value),
    errorCode: computed(() => errorCode.value),
    detectErrorType,
    handleSystemError,
    checkSystemStatus,
    clearSystemError,
    retryOperation
  }
}

