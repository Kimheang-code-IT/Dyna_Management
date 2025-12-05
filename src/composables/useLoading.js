import { ref } from 'vue'

// Global loading state
const isLoading = ref(false)
const loadingMessage = ref('')
const loadingStack = ref([])

/**
 * Composable for managing loading states
 * @returns {Object} Loading state and methods
 */
export function useLoading() {
  /**
   * Start loading with optional message
   * @param {string} message - Optional loading message
   * @returns {string} Loading ID for tracking
   */
  const startLoading = (message = '') => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9)
    loadingStack.value.push({ id, message })
    isLoading.value = true
    loadingMessage.value = message || loadingStack.value[loadingStack.value.length - 1]?.message || ''
    return id
  }

  /**
   * Stop loading by ID or stop all
   * @param {string} id - Optional loading ID to stop
   */
  const stopLoading = (id = null) => {
    if (id) {
      loadingStack.value = loadingStack.value.filter(item => item.id !== id)
    } else {
      loadingStack.value = []
    }
    
    if (loadingStack.value.length === 0) {
      isLoading.value = false
      loadingMessage.value = ''
    } else {
      loadingMessage.value = loadingStack.value[loadingStack.value.length - 1]?.message || ''
    }
  }

  /**
   * Execute async function with loading state
   * @param {Function} asyncFn - Async function to execute
   * @param {string} message - Optional loading message
   * @returns {Promise} Promise from async function
   */
  const withLoading = async (asyncFn, message = '') => {
    const id = startLoading(message)
    try {
      const result = await asyncFn()
      return result
    } finally {
      stopLoading(id)
    }
  }

  /**
   * Clear all loading states
   */
  const clearLoading = () => {
    loadingStack.value = []
    isLoading.value = false
    loadingMessage.value = ''
  }

  return {
    isLoading,
    loadingMessage,
    startLoading,
    stopLoading,
    withLoading,
    clearLoading
  }
}

// Export global loading state for use in components
export { isLoading, loadingMessage }

