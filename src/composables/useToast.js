import { ref } from 'vue'

// Toast types
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
}

// Global toast state
const toasts = ref([])
let toastIdCounter = 0

/**
 * Composable for managing toast notifications
 * @returns {Object} Toast methods
 */
export function useToast() {
  /**
   * Show a toast notification
   * @param {string} message - Toast message
   * @param {string} type - Toast type (success, error, warning, info)
   * @param {number} duration - Duration in milliseconds (0 = no auto-dismiss)
   * @returns {string} Toast ID
   */
  const showToast = (message, type = TOAST_TYPES.INFO, duration = 3000) => {
    const id = `toast-${++toastIdCounter}`
    const toast = {
      id,
      message,
      type,
      duration,
      timestamp: Date.now()
    }

    toasts.value.push(toast)

    // Auto-dismiss if duration is set
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }

    return id
  }

  /**
   * Show success toast
   * @param {string} message - Success message
   * @param {number} duration - Duration in milliseconds
   */
  const success = (message, duration = 3000) => {
    return showToast(message, TOAST_TYPES.SUCCESS, duration)
  }

  /**
   * Show error toast
   * @param {string} message - Error message
   * @param {number} duration - Duration in milliseconds
   */
  const error = (message, duration = 4000) => {
    return showToast(message, TOAST_TYPES.ERROR, duration)
  }

  /**
   * Show warning toast
   * @param {string} message - Warning message
   * @param {number} duration - Duration in milliseconds
   */
  const warning = (message, duration = 3000) => {
    return showToast(message, TOAST_TYPES.WARNING, duration)
  }

  /**
   * Show info toast
   * @param {string} message - Info message
   * @param {number} duration - Duration in milliseconds
   */
  const info = (message, duration = 3000) => {
    return showToast(message, TOAST_TYPES.INFO, duration)
  }

  /**
   * Remove toast by ID
   * @param {string} id - Toast ID
   */
  const removeToast = (id) => {
    const index = toasts.value.findIndex(toast => toast.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  /**
   * Clear all toasts
   */
  const clearAll = () => {
    toasts.value = []
  }

  return {
    toasts,
    showToast,
    success,
    error,
    warning,
    info,
    removeToast,
    clearAll
  }
}

// Export global toasts for use in components
export { toasts }

