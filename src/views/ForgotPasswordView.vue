<template>
  <div class="h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
    <div class="max-w-md w-full bg-white dark:bg-gray-800 rounded-sm shadow-lg p-8">
      <div class="text-center mb-8">
        <!-- Logo -->
        <div class="flex flex-col items-center">
          <div class="w-24 h-24">
            <svg 
              viewBox="0 0 120 120" 
              class="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Lightbulb with Brain -->
              <g transform="translate(62, 14)">
                <!-- White background circle -->
                <circle cx="0" cy="0" r="16" fill="white" class="dark:fill-gray-800 bg-white"/>
                <!-- Lightbulb outer shape (light blue) -->
                <path d="M0,-11 Q-6.5,-11 -8.5,-4.5 Q-8.5,2 -6.5,6.5 Q-4.5,10.5 0,12.5 Q4.5,10.5 6.5,6.5 Q8.5,2 8.5,-4.5 Q6.5,-11 0,-11" 
                      fill="#87CEEB" stroke="#1e40af" stroke-width="2.2" class="dark:stroke-blue-50"/>
                <!-- Brain inside (yellow with detailed convolutions) -->
                <g transform="translate(0, 0)">
                  <!-- Brain main shape -->
                  <path d="M-5.5,-2.5 Q-5.5,-5.5 -2.8,-5.5 Q0,-5.5 0,-2.8 Q0,-5.5 2.8,-5.5 Q5.5,-5.5 5.5,-2.8 Q5.5,0 2.8,2.8 Q0,5.5 -2.8,2.8 Q-5.5,0 -5.5,-2.8" 
                        fill="#FFD700" stroke="#1e40af" stroke-width="1.8" class="dark:stroke-blue-50"/>
                  <!-- Brain convolutions/ridges -->
                  <path d="M-3.5,-4 Q-1.5,-4 0,-3 Q1.5,-4 3.5,-4" stroke="#1e40af" stroke-width="1.2" fill="none" class="dark:stroke-blue-50"/>
                  <path d="M-4,-1.5 Q-2,-1.5 0,-0.5 Q2,-1.5 4,-1.5" stroke="#1e40af" stroke-width="1.2" fill="none" class="dark:stroke-blue-50"/>
                  <path d="M-3.5,1 Q-1.5,1 0,2 Q1.5,1 3.5,1" stroke="#1e40af" stroke-width="1.2" fill="none" class="dark:stroke-blue-50"/>
                  <!-- Brain hemispheres division -->
                  <line x1="0" y1="-5.5" x2="0" y2="2.8" stroke="#1e40af" stroke-width="1" class="dark:stroke-blue-50"/>
                </g>
                <!-- Lightbulb base -->
                <rect x="-3.5" y="12.5" width="7" height="2.5" rx="1.2" fill="#1e40af" class="dark:fill-blue-50"/>
                <rect x="-2.5" y="15" width="5" height="1.2" rx="0.6" fill="#1e40af" class="dark:fill-blue-50"/>
                <!-- Light rays from top and sides (centered) -->
                <line x1="1" y1="-11" x2="0" y2="-18" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round" class="dark:stroke-blue-50"/>
                <line x1="-6.5" y1="-7" x2="-11" y2="-12" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round" class="dark:stroke-blue-50"/>
                <line x1="6.5" y1="-7" x2="11" y2="-12" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round" class="dark:stroke-blue-50"/>
                <line x1="-8.5" y1="0" x2="-13" y2="0" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round" class="dark:stroke-blue-50"/>
                <line x1="8.5" y1="0" x2="13" y2="0" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round" class="dark:stroke-blue-50"/>
                <line x1="-7" y1="5" x2="-11" y2="9" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round" class="dark:stroke-blue-50"/>
                <line x1="7" y1="5" x2="11" y2="9" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round" class="dark:stroke-blue-50"/>
              </g>
              
              <!-- Top-left circle - Yellow with Laptop -->
              <g transform="translate(30, 50)">
                <circle cx="13" cy="-7.5" r="13" fill="#FFD700" stroke="#1e293b" stroke-width="1.8" class="dark:stroke-gray-50"/>
                <rect x="6.5" y="-13.5" width="14" height="10" rx="0.6" fill="#1e293b" class="dark:fill-gray-600"/>
                <rect x="7.5" y="-4" width="12" height="2.4" rx="0.4" fill="#1e293b" class="dark:fill-gray-600"/>
              </g>
              
              <!-- Top-right circle - Blue with A -->
              <g transform="translate(90, 50)">
                <circle cx="-8" cy="-8" r="13" fill="#3b82f6" stroke="#1e293b" stroke-width="1.8" class="dark:stroke-gray-50"/>
                <text x="-8" y="-3" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle">A</text>
              </g>
              
              <!-- Bottom-left circle - Red with 文 -->
              <g transform="translate(30, 80)">
                <circle cx="13" cy="-4" r="13" fill="#ef4444" stroke="#1e293b" stroke-width="1.8" class="dark:stroke-gray-50"/>
                <text x="13" y="3" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle">文</text>
              </g>
              
              <!-- Bottom-right circle - Green with Music Note -->
              <g transform="translate(90, 80)">
                <circle cx="-8" cy="-4" r="13" fill="#22c55e" stroke="#1e293b" stroke-width="1.8" class="dark:stroke-gray-50"/>
                <!-- Music note centered in circle -->
                <g transform="translate(-10, -4)">
                  <path d="M-3,-4 L-3,4 M-3,-4 L3,-4 L3,4" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                  <circle cx="4.5" cy="3" r="2" fill="white"/>
                </g>
              </g>
              
              <!-- Horizontal connections between circles -->
              <line x1="55" y1="42" x2="70" y2="42" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50"/>
              <line x1="55" y1="76" x2="70" y2="76" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50"/>
              <line x1="43" y1="54" x2="43" y2="64" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50"/>
              <line x1="81" y1="54" x2="81" y2="64" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50"/>
            </svg>
          </div>
          <!-- Logo Text -->
          <div class="flex flex-col items-center mt-[-10px]">
            <span class="text-xl font-bold text-blue-900 dark:text-white" style="font-family: 'Moul', sans-serif; line-height: 1.2;">
              ដំណាក់សិក្សា
            </span>
            <span class="text-xs font-semibold text-blue-800 dark:text-blue-400 leading-tight uppercase tracking-wider mt-1">
              LEARNING FOR GROWING
            </span>
          </div>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mt-4">{{ t('forgotPassword') }}</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">{{ t('forgotPasswordDescription') }}</p>
      </div>
      
      <!-- Success Message -->
      <div v-if="emailSent" class="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-sm">
        <div class="flex items-start gap-3">
          <div class="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium text-green-800 dark:text-green-200">{{ t('resetEmailSent') }}</p>
            <p class="text-sm text-green-700 dark:text-green-300 mt-1">{{ t('checkEmailInstructions') }}</p>
          </div>
        </div>
      </div>
      
      <!-- Form -->
      <form v-if="!emailSent" @submit.prevent="handleSendResetEmail" class="space-y-6">
        <div>
          <label for="resetEmail" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ t('emailAddress') }}
          </label>
          <input
            id="resetEmail"
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
            :placeholder="t('enterEmailAddress')"
          />
        </div>
        
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <svg
            v-if="isLoading"
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{{ isLoading ? t('sending') : t('sendResetLink') }}</span>
        </button>
      </form>
      
      <!-- Back to Login -->
      <div class="mt-6 text-center">
        <button
          @click="goToLogin"
          class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center justify-center gap-2 mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {{ t('backToLogin') }}
        </button>
      </div>
      
      <div v-if="error" class="mt-4 p-3 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-sm">
        <p class="text-sm text-red-600 dark:text-red-400">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const router = useRouter()
const { t } = useI18n()

const email = ref('')
const emailSent = ref(false)
const error = ref('')
const isLoading = ref(false)

const handleSendResetEmail = async () => {
  error.value = ''
  isLoading.value = true
  
  try {
    // Simulate API call - In a real app, this would call your backend API
    // Example: await api.post('/auth/forgot-password', { email: email.value })
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In a real application, you would:
    // 1. Send the email to your backend
    // 2. Backend would validate the email
    // 3. Backend would send a password reset email to the user's Gmail
    // 4. Backend would return success/error response
    
    // For demo purposes, we'll just show success
    emailSent.value = true
    
    // Log this action (optional)
    console.log(`Password reset email requested for: ${email.value}`)
    
  } catch (err) {
    error.value = t('resetEmailError') || 'Failed to send reset email. Please try again.'
  } finally {
    isLoading.value = false
  }
}

const goToLogin = () => {
  router.push('/login')
}
</script>

