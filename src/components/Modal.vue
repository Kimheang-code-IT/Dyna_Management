<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        @click.self="handleBackdropClick"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/50 dark:bg-black/70 transition-opacity"
          @click="handleBackdropClick"
        ></div>

        <!-- Modal Content -->
        <div
          :class="[
            'relative bg-white dark:bg-gray-800 rounded-lg sm:rounded-lg shadow-xl max-w-full w-full sm:w-auto max-h-[90vh] sm:max-h-[90vh] overflow-hidden flex flex-col',
            sizeClasses,
            containerClass
          ]"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
        >
          <!-- Header -->
          <div
            v-if="title || $slots.header || showClose"
            :class="[
              'flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700',
              headerClass
            ]"
          >
            <slot name="header">
              <h2
                v-if="title"
                :id="titleId"
                :class="['text-base sm:text-lg font-semibold', titleClass]"
              >
                {{ title }}
              </h2>
            </slot>
            <button
              v-if="showClose"
              @click="handleClose"
              :class="[
                'ml-4 p-1 rounded-md transition-colors',
                closeButtonClass
              ]"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
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

          <!-- Body -->
          <div
            :class="[
              'flex-1 overflow-y-auto px-4 sm:px-6 py-3 sm:py-4',
              bodyClass
            ]"
          >
            <slot />
          </div>

          <!-- Footer -->
          <div
            v-if="$slots.footer"
            :class="[
              'px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3',
              footerClass
            ]"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, onUnmounted, useId } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true
  },
  closeOnEscape: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  containerClass: {
    type: String,
    default: ''
  },
  headerClass: {
    type: String,
    default: ''
  },
  bodyClass: {
    type: String,
    default: ''
  },
  footerClass: {
    type: String,
    default: ''
  },
  titleClass: {
    type: String,
    default: 'text-gray-900 dark:text-white'
  },
  closeButtonClass: {
    type: String,
    default: 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const titleId = useId()

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'sm:max-w-sm',
    md: 'sm:max-w-md',
    lg: 'sm:max-w-lg',
    xl: 'sm:max-w-xl',
    full: 'sm:max-w-4xl'
  }
  return sizes[props.size] || sizes.md
})

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    handleClose()
  }
}

const handleEscape = (event) => {
  if (event.key === 'Escape' && props.modelValue && props.closeOnEscape) {
    handleClose()
  }
}

onMounted(() => {
  if (props.closeOnEscape) {
    document.addEventListener('keydown', handleEscape)
  }
})

onUnmounted(() => {
  if (props.closeOnEscape) {
    document.removeEventListener('keydown', handleEscape)
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.95);
  opacity: 0;
}
</style>

