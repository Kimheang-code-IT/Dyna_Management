<template>
  <div
    class="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none"
    aria-live="polite"
    aria-atomic="true"
  >
    <TransitionGroup
      name="toast"
      tag="div"
      class="flex flex-col gap-2"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'pointer-events-auto min-w-[300px] max-w-md rounded-lg shadow-lg p-4 flex items-start gap-3',
          getToastClasses(toast.type)
        ]"
        role="alert"
      >
        <!-- Icon -->
        <div class="flex-shrink-0 mt-0.5">
          <component :is="getIcon(toast.type)" class="w-5 h-5" />
        </div>

        <!-- Message -->
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium" :class="getTextClasses(toast.type)">
            {{ toast.message }}
          </p>
        </div>

        <!-- Close Button -->
        <button
          @click="removeToast(toast.id)"
          class="flex-shrink-0 rounded-md p-1 transition-colors"
          :class="getCloseButtonClasses(toast.type)"
          aria-label="Close notification"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { toasts, useToast, TOAST_TYPES } from '../composables/useToast'

const { removeToast } = useToast()

const getToastClasses = (type) => {
  const baseClasses = 'border'
  const typeClasses = {
    [TOAST_TYPES.SUCCESS]: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    [TOAST_TYPES.ERROR]: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    [TOAST_TYPES.WARNING]: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    [TOAST_TYPES.INFO]: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
  }
  return `${baseClasses} ${typeClasses[type] || typeClasses[TOAST_TYPES.INFO]}`
}

const getTextClasses = (type) => {
  const typeClasses = {
    [TOAST_TYPES.SUCCESS]: 'text-green-800 dark:text-green-200',
    [TOAST_TYPES.ERROR]: 'text-red-800 dark:text-red-200',
    [TOAST_TYPES.WARNING]: 'text-yellow-800 dark:text-yellow-200',
    [TOAST_TYPES.INFO]: 'text-blue-800 dark:text-blue-200'
  }
  return typeClasses[type] || typeClasses[TOAST_TYPES.INFO]
}

const getCloseButtonClasses = (type) => {
  const typeClasses = {
    [TOAST_TYPES.SUCCESS]: 'text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-800/30',
    [TOAST_TYPES.ERROR]: 'text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-800/30',
    [TOAST_TYPES.WARNING]: 'text-yellow-600 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-800/30',
    [TOAST_TYPES.INFO]: 'text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/30'
  }
  return typeClasses[type] || typeClasses[TOAST_TYPES.INFO]
}

const getIcon = (type) => {
  const icons = {
    [TOAST_TYPES.SUCCESS]: 'SuccessIcon',
    [TOAST_TYPES.ERROR]: 'ErrorIcon',
    [TOAST_TYPES.WARNING]: 'WarningIcon',
    [TOAST_TYPES.INFO]: 'InfoIcon'
  }
  return icons[type] || 'InfoIcon'
}
</script>

<script>
// Icon components
export default {
  components: {
    SuccessIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `
    },
    ErrorIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `
    },
    WarningIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      `
    },
    InfoIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `
    }
  }
}
</script>

<style scoped>
.toast-enter-active {
  transition: all 0.3s ease-out;
}

.toast-leave-active {
  transition: all 0.3s ease-in;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-move {
  transition: transform 0.3s ease;
}
</style>

