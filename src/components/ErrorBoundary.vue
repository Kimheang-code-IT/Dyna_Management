<template>
  <div v-if="hasError" class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
    <div class="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
      <!-- Error Icon -->
      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-red-600 dark:text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <!-- Error Title -->
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {{ t('somethingWentWrong') || 'Something went wrong' }}
      </h2>

      <!-- Error Message -->
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        {{ errorMessage || 'An unexpected error occurred. Please try refreshing the page.' }}
      </p>

      <!-- Error Details (Development only) -->
      <details v-if="error && isDevelopment" class="mb-6 text-left">
        <summary class="cursor-pointer text-sm text-gray-500 dark:text-gray-400 mb-2">
          Error Details
        </summary>
        <pre class="text-xs bg-gray-100 dark:bg-gray-900 p-3 rounded overflow-auto text-red-600 dark:text-red-400">{{ errorStack }}</pre>
      </details>

      <!-- Action Buttons -->
      <div class="flex gap-3 justify-center">
        <button
          @click="handleRetry"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          {{ t('tryAgain') || 'Try Again' }}
        </button>
        <button
          @click="handleReset"
          class="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md transition-colors"
        >
          {{ t('reset') || 'Reset' }}
        </button>
      </div>
    </div>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useSystemError } from '../composables/useSystemError'

const { t } = useI18n()
const router = useRouter()
const { handleSystemError, detectErrorType } = useSystemError()

const props = defineProps({
  fallback: {
    type: String,
    default: null
  },
  onError: {
    type: Function,
    default: null
  }
})

const emit = defineEmits(['error', 'reset'])

const hasError = ref(false)
const error = ref(null)
const errorMessage = ref('')
const errorStack = ref('')

const isDevelopment = computed(() => {
  return import.meta.env.DEV || import.meta.env.MODE === 'development'
})

onErrorCaptured((err, instance, info) => {
  // Don't show error UI - just log it silently
  error.value = err
  errorMessage.value = err.message || 'An unexpected error occurred'
  errorStack.value = err.stack || info || 'No stack trace available'

  // Detect if this is a system-level error
  const errorType = detectErrorType(err)
  const isSystemError = ['maintenance', 'server', 'network', 'timeout', 'serviceUnavailable'].includes(errorType)

  // Only redirect for maintenance mode if explicitly needed
  if (isSystemError && errorType === 'maintenance') {
    handleSystemError(err, { redirect: true })
    return false
  }

  // Call custom error handler if provided
  if (props.onError) {
    props.onError(err, instance, info)
  }

  // Emit error event
  emit('error', err, instance, info)

  // Log error silently (always log, not just in development)
  console.error('ErrorBoundary caught error:', err)
  console.error('Component info:', info)

  // Don't show error UI - just continue normally
  hasError.value = false

  // Return false to prevent the error from propagating
  return false
})

const handleRetry = () => {
  hasError.value = false
  error.value = null
  errorMessage.value = ''
  errorStack.value = ''
}

const handleReset = () => {
  handleRetry()
  emit('reset')
  
  // Reload page as last resort
  if (typeof window !== 'undefined') {
    window.location.reload()
  }
}
</script>

