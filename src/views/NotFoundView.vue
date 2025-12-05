<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-gray-900 dark:via-blue-900 dark:to-blue-800 p-4">
    <div class="max-w-2xl w-full text-center">
      <!-- Big Animated Icon -->
      <div class="mb-8 flex justify-center">
        <div class="relative">
          <!-- Outer Glow Effect -->
          <div class="absolute inset-0 bg-blue-400 dark:bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          <!-- Main Icon Container -->
          <div class="relative bg-white dark:bg-gray-800 rounded-full p-8 shadow-2xl border-4 border-blue-200 dark:border-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-32 w-32 text-blue-500 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 dark:bg-blue-500 rounded-full opacity-70 animate-bounce" style="animation-delay: 0.2s;"></div>
          <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-300 dark:bg-blue-600 rounded-full opacity-70 animate-bounce" style="animation-delay: 0.4s;"></div>
        </div>
      </div>

      <!-- Error Code -->
      <h1 class="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 mb-4 animate-pulse">
        404
      </h1>
      <!-- Main Title -->
      <h2 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
 {{ t('pageNotFound') || 'Oops! Page Not Found' }}
      </h2>

      <!-- Interesting Description -->
      <div class="space-y-3 mb-8">
        <p class="text-xl text-gray-600 dark:text-gray-300 font-medium">
          Brother Dyna {{ t('pageNotFoundMessage') || "Looks like you've wandered into the digital wilderness!" }}
        </p>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          Brother Dyna {{ t('pageNotFoundDescription') || "The page you're looking for has gone on an adventure and couldn't be found." }}
        </p>
      </div>

<!-- Action Button -->
      <div class="flex justify-center items-center">
        <router-link
          to="/"
          class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          {{ t('backToHome') || 'Back to Home' }}
        </router-link>
      </div>

      <!-- Fun Animation -->
      <div class="mt-12 flex justify-center gap-2">
        <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
        <div class="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
        <div class="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

// Set page title
onMounted(() => {
  document.title = 'Brother Dyna Page Not Found Brother Dyna'
})
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>

