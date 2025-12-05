<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-blue-900 dark:to-blue-800 p-4">
    <div class="max-w-2xl w-full text-center">
      <!-- Big Animated Icon -->
      <div class="mb-8 flex justify-center">
        <div class="relative">
          <!-- Outer Glow Effect -->
          <div class="absolute inset-0 bg-blue-400 dark:bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          <!-- Main Icon Container with Spinning Gear -->
          <div class="relative bg-white dark:bg-gray-800 rounded-full p-8 shadow-2xl border-4 border-blue-200 dark:border-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-32 w-32 text-blue-500 dark:text-blue-400 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 dark:bg-blue-500 rounded-full opacity-70 animate-bounce" style="animation-delay: 0.2s;"></div>
          <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-300 dark:bg-blue-600 rounded-full opacity-70 animate-bounce" style="animation-delay: 0.4s;"></div>
        </div>
      </div>

      <!-- Main Title -->
      <h2 class="text-2xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
        Brother Dyna {{ t('systemMaintenance') || 'System Maintenance' }}
      </h2>

      <!-- Status Message -->
      <div class="space-y-4 mb-8">
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Brother Dyna {{ t('maintenanceMessage') || 'We are currently performing scheduled maintenance to improve our services. Please check back shortly.' }}
        </p>
      </div>

      <!-- Progress Indicator -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <span class="text-sm font-medium text-gray-600 dark:text-gray-400">
            Brother Dyna {{ t('checkingStatus') || 'Checking system status...' }}
          </span>
        </div>
        
        <!-- Progress Bar -->
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4 overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 h-3 rounded-full progress-animation" style="width: 60%"></div>
        </div>
        
        <p class="text-xs text-center text-gray-500 dark:text-gray-400">
          Brother Dyna {{ t('autoRefresh') || 'This page will automatically refresh every 30 seconds' }}
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          @click="checkStatus"
          class="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {{ t('checkStatus') || 'Check Status' }}
        </button>
        
        <router-link
          to="/"
          class="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {{ t('backToHome') || 'Back to Home' }}
        </router-link>
      </div>

      <!-- Auto-refresh Indicator -->
      <div class="mt-8 flex justify-center gap-2">
        <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
        <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
        <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const router = useRouter()

let refreshInterval = null

const checkStatus = () => {
  // Try to reload the page to check if system is back online
  window.location.reload()
}

onMounted(() => {
  // Set page title
  document.title = 'System Maintenance Brother Dyna'
  
  // Auto-refresh every 30 seconds
  refreshInterval = setInterval(() => {
    checkStatus()
  }, 30000)
})

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes progress {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.animate-spin {
  animation: spin 3s linear infinite;
}

.progress-animation {
  background-size: 200% 100%;
  animation: progress 2s ease-in-out infinite;
}
</style>

