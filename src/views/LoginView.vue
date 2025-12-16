<template>
  <div class="h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
    <div class="max-w-md w-full bg-white dark:bg-gray-800 rounded-sm shadow-lg p-4 sm:p-6 lg:p-8">
      <div class="text-center mb-8">
        <!-- Logo -->
        <div class="flex flex-col items-center">
          <div class="w-24 h-24">
            <svg viewBox="0 0 120 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <!-- Lightbulb with Brain -->
              <g transform="translate(62, 14)">
                <!-- White background circle -->
                <circle cx="0" cy="0" r="16" fill="white" class="dark:fill-gray-800 bg-white" />
                <!-- Lightbulb outer shape (light blue) -->
                <path
                  d="M0,-11 Q-6.5,-11 -8.5,-4.5 Q-8.5,2 -6.5,6.5 Q-4.5,10.5 0,12.5 Q4.5,10.5 6.5,6.5 Q8.5,2 8.5,-4.5 Q6.5,-11 0,-11"
                  fill="#87CEEB" stroke="#1e40af" stroke-width="2.2" class="dark:stroke-blue-50" />
                <!-- Brain inside (yellow with detailed convolutions) -->
                <g transform="translate(0, 0)">
                  <!-- Brain main shape -->
                  <path
                    d="M-5.5,-2.5 Q-5.5,-5.5 -2.8,-5.5 Q0,-5.5 0,-2.8 Q0,-5.5 2.8,-5.5 Q5.5,-5.5 5.5,-2.8 Q5.5,0 2.8,2.8 Q0,5.5 -2.8,2.8 Q-5.5,0 -5.5,-2.8"
                    fill="#FFD700" stroke="#1e40af" stroke-width="1.8" class="dark:stroke-blue-50" />
                  <!-- Brain convolutions/ridges -->
                  <path d="M-3.5,-4 Q-1.5,-4 0,-3 Q1.5,-4 3.5,-4" stroke="#1e40af" stroke-width="1.2" fill="none"
                    class="dark:stroke-blue-50" />
                  <path d="M-4,-1.5 Q-2,-1.5 0,-0.5 Q2,-1.5 4,-1.5" stroke="#1e40af" stroke-width="1.2" fill="none"
                    class="dark:stroke-blue-50" />
                  <path d="M-3.5,1 Q-1.5,1 0,2 Q1.5,1 3.5,1" stroke="#1e40af" stroke-width="1.2" fill="none"
                    class="dark:stroke-blue-50" />
                  <!-- Brain hemispheres division -->
                  <line x1="0" y1="-5.5" x2="0" y2="2.8" stroke="#1e40af" stroke-width="1"
                    class="dark:stroke-blue-50" />
                </g>
                <!-- Lightbulb base -->
                <rect x="-3.5" y="12.5" width="7" height="2.5" rx="1.2" fill="#1e40af" class="dark:fill-blue-50" />
                <rect x="-2.5" y="15" width="5" height="1.2" rx="0.6" fill="#1e40af" class="dark:fill-blue-50" />
                <!-- Light rays from top and sides (centered) -->
                <line x1="1" y1="-11" x2="0" y2="-18" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                  class="dark:stroke-blue-50" />
                <line x1="-6.5" y1="-7" x2="-11" y2="-12" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                  class="dark:stroke-blue-50" />
                <line x1="6.5" y1="-7" x2="11" y2="-12" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                  class="dark:stroke-blue-50" />
                <line x1="-8.5" y1="0" x2="-13" y2="0" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                  class="dark:stroke-blue-50" />
                <line x1="8.5" y1="0" x2="13" y2="0" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                  class="dark:stroke-blue-50" />
                <line x1="-7" y1="5" x2="-11" y2="9" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                  class="dark:stroke-blue-50" />
                <line x1="7" y1="5" x2="11" y2="9" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                  class="dark:stroke-blue-50" />
              </g>

              <!-- Top-left circle - Yellow with Laptop -->
              <g transform="translate(30, 50)">
                <circle cx="13" cy="-7.5" r="13" fill="#FFD700" stroke="#1e293b" stroke-width="1.8"
                  class="dark:stroke-gray-50" />
                <rect x="6.5" y="-13.5" width="14" height="10" rx="0.6" fill="#1e293b" class="dark:fill-gray-600" />
                <rect x="7.5" y="-4" width="12" height="2.4" rx="0.4" fill="#1e293b" class="dark:fill-gray-600" />
              </g>

              <!-- Top-right circle - Blue with A -->
              <g transform="translate(90, 50)">
                <circle cx="-8" cy="-8" r="13" fill="#3b82f6" stroke="#1e293b" stroke-width="1.8"
                  class="dark:stroke-gray-50" />
                <text x="-8" y="-3" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white"
                  text-anchor="middle">A</text>
              </g>

              <!-- Bottom-left circle - Red with 文 -->
              <g transform="translate(30, 80)">
                <circle cx="13" cy="-4" r="13" fill="#ef4444" stroke="#1e293b" stroke-width="1.8"
                  class="dark:stroke-gray-50" />
                <text x="13" y="3" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white"
                  text-anchor="middle">文</text>
              </g>

              <!-- Bottom-right circle - Green with Music Note -->
              <g transform="translate(90, 80)">
                <circle cx="-8" cy="-4" r="13" fill="#22c55e" stroke="#1e293b" stroke-width="1.8"
                  class="dark:stroke-gray-50" />
                <!-- Music note centered in circle -->
                <g transform="translate(-10, -4)">
                  <path d="M-3,-4 L-3,4 M-3,-4 L3,-4 L3,4" stroke="white" stroke-width="2.5" fill="none"
                    stroke-linecap="round" />
                  <circle cx="4.5" cy="3" r="2" fill="white" />
                </g>
              </g>

              <!-- Horizontal connections between circles -->
              <line x1="55" y1="42" x2="70" y2="42" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50" />
              <line x1="55" y1="76" x2="70" y2="76" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50" />
              <line x1="43" y1="54" x2="43" y2="64" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50" />
              <line x1="81" y1="54" x2="81" y2="64" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50" />
            </svg>
          </div>
          <!-- Logo Text -->
          <div class="flex flex-col items-center mt-[-10px]">
            <span class="text-xl font-bold text-blue-900 dark:text-white"
              style="font-family: 'Moul', sans-serif; line-height: 1.2;">
              ដំណាក់សិក្សា
            </span>
            <span
              class="text-xs font-semibold text-blue-800 dark:text-blue-400 leading-tight uppercase tracking-wider mt-1">
              LEARNING FOR GROWING
            </span>
          </div>
        </div>
        <p class="text-gray-600 text-[20px] dark:text-gray-400 mt-2">{{ t('signInToAccount') }}</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ t('emailAddress') }}
          </label>
          <input id="email" v-model="email" type="email" required @input="validateEmailField('email', email, true)"
            placeholder="admin@example.com" :class="[
              'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]',
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
            ]" />
          <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.email }}</p>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {{ t('password') }}
          </label>
          <div class="relative">
            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" required
              @input="validateTextField('password', password, { required: true, minLength: 6, maxLength: 100 })"
              :placeholder="t('passwordPlaceholder')" :class="[
                'w-full px-4 py-2 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400',
                errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              ]" />
            <button type="button" @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
              <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0A9.973 9.973 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
          <p v-if="errors.password" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.password }}</p>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember" v-model="rememberMe" type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              {{ t('rememberMe') }}
            </label>
          </div>
          <router-link to="/forgot-password"
            class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            {{ t('forgotPassword') }}
          </router-link>
        </div>

        <button type="submit"
          class="w-full px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
          {{ t('signIn') }}
        </button>
      </form>

      <div v-if="error" class="mt-4 p-3 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-sm">
        <p class="text-sm text-red-600 dark:text-red-400">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addHistory } from '../utils/history'
import { useI18n } from '../composables/useI18n'
import { useFormValidation } from '../composables/useFormValidation'

const router = useRouter()
const { t } = useI18n()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

// Form validation
const {
  errors,
  validateEmailField,
  validateTextField
} = useFormValidation({
  email: '',
  password: ''
})

// Validate form
const validateForm = () => {
  let isValid = true

  if (!validateEmailField('email', email.value, true)) {
    isValid = false
  }

  if (!validateTextField('password', password.value, { required: true, minLength: 6, maxLength: 100 })) {
    isValid = false
  }

  return isValid
}

const handleLogin = () => {
  if (!validateForm()) {
    return
  }

  // Simple validation - in a real app, this would call an API
  if (email.value && password.value) {
    // Log login history
    addHistory('login', {
      type: 'system',
      itemName: email.value,
      description: `User logged in successfully`,
      user: email.value
    })

    // Simulate successful login
    // In a real app, you would:
    // - Call authentication API
    // - Store authentication token
    // - Set user state

    // Navigate to dashboard
    router.push('/')
  }
}
</script>
