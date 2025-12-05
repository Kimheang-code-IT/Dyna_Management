<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-red-100 dark:from-gray-900 dark:via-red-900 dark:to-red-800 p-4">
    <div class="max-w-2xl w-full text-center">
      <!-- Big Animated Icon -->
      <div class="mb-8 flex justify-center">
        <div class="relative">
          <!-- Outer Glow Effect -->
          <div class="absolute inset-0 bg-red-400 dark:bg-red-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          <!-- Main Icon Container -->
          <div class="relative bg-white dark:bg-gray-800 rounded-full p-8 shadow-2xl border-4 border-red-200 dark:border-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-32 w-32 text-red-500 dark:text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 dark:bg-orange-500 rounded-full opacity-70 animate-bounce" style="animation-delay: 0.2s;"></div>
          <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-red-300 dark:bg-red-600 rounded-full opacity-70 animate-bounce" style="animation-delay: 0.4s;"></div>
        </div>
      </div>



      <!-- Error Code -->
      <h2 class="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 dark:from-red-400 dark:via-orange-400 dark:to-red-500 mb-4">
        {{ errorCode || 'ERROR' }}
      </h2>

      <!-- Main Title -->
      <h3 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
        Brother Dyna {{ errorTitle }}
      </h3>



      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          @click="handleRetry"
          class="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ t('tryAgain') || 'Try Again' }}
        </button>
        
        <router-link
          to="/"
          class="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-300 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-400 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {{ t('backToHome') || 'Back to Home' }}
        </router-link>
      </div>

      <!-- Error Animation -->
      <div class="mt-12 flex justify-center gap-2">
        <div class="w-3 h-3 bg-red-500 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
        <div class="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
        <div class="w-3 h-3 bg-red-600 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

// Set page title
onMounted(() => {
  document.title = 'Brother Dyna System Error Brother Dyna'
})

// Get error type from route params or query
const errorType = computed(() => route.params.type || route.query.type || 'server')
const errorCode = computed(() => route.params.code || route.query.code || '500')

// Error configurations based on type
const errorConfigs = {
  network: {
    title: t('networkError') || 'Network Error',
    message: t('networkErrorMessage') || 'Unable to connect to the server',
    description: t('networkErrorDescription') || 'Please check your internet connection and try again.',
    details: t('networkErrorDetails') || 'The system could not establish a connection with the server. This may be due to network issues or the server being temporarily unavailable.'
  },
  server: {
    title: t('serverError') || 'Server Error',
    message: t('serverErrorMessage') || 'An error occurred on the server',
    description: t('serverErrorDescription') || 'Our servers encountered an unexpected error. Our team has been notified.',
    details: t('serverErrorDetails') || 'The server encountered an internal error while processing your request. Please try again in a few moments.'
  },
  timeout: {
    title: t('timeoutError') || 'Request Timeout',
    message: t('timeoutErrorMessage') || 'The request took too long to complete',
    description: t('timeoutErrorDescription') || 'The server did not respond in time. Please try again.',
    details: t('timeoutErrorDetails') || 'The request exceeded the maximum allowed time. This may be due to high server load or network congestion.'
  },
  serviceUnavailable: {
    title: t('serviceUnavailable') || 'Service Unavailable',
    message: t('serviceUnavailableMessage') || 'The service is temporarily unavailable',
    description: t('serviceUnavailableDescription') || 'The service is currently down for maintenance or experiencing issues.',
    details: t('serviceUnavailableDetails') || 'The requested service is temporarily unavailable. Please try again later or contact support if the problem persists.'
  }
}

const errorConfig = computed(() => {
  return errorConfigs[errorType.value] || errorConfigs.server
})

const errorTitle = computed(() => errorConfig.value.title)
const errorMessage = computed(() => errorConfig.value.message)
const errorDescription = computed(() => errorConfig.value.description)
const errorDetails = computed(() => errorConfig.value.details)

const handleRetry = () => {
  // Try to go back or reload
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    window.location.reload()
  }
}
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

