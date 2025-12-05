<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[9999] flex"
        @click.self="handleBackdropClick"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/50 dark:bg-black/70 transition-opacity"
          @click="handleBackdropClick"
        ></div>

        <!-- Drawer Content -->
        <div
          :class="[
            'relative bg-white dark:bg-gray-800 shadow-xl flex flex-col',
            positionClasses,
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
              aria-label="Close drawer"
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
  position: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right', 'top', 'bottom'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
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

const positionClasses = computed(() => {
  const positions = {
    left: 'h-full',
    right: 'h-full ml-auto',
    top: 'w-full',
    bottom: 'w-full mt-auto'
  }
  return positions[props.position] || positions.right
})

const sizeClasses = computed(() => {
  if (props.position === 'left' || props.position === 'right') {
    const widths = {
      sm: 'w-full sm:max-w-sm',
      md: 'w-full sm:max-w-md',
      lg: 'w-full sm:max-w-lg lg:max-w-lg',
      xl: 'w-full sm:max-w-xl lg:max-w-xl'
    }
    return widths[props.size] || widths.md
  } else {
    const heights = {
      sm: 'h-1/3',
      md: 'h-1/2',
      lg: 'h-2/3',
      xl: 'h-3/4'
    }
    return heights[props.size] || heights.md
  }
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
  // Prevent body scroll when drawer is open
  if (props.modelValue) {
    document.body.style.overflow = 'hidden'
  }
})

onUnmounted(() => {
  if (props.closeOnEscape) {
    document.removeEventListener('keydown', handleEscape)
  }
  document.body.style.overflow = ''
})
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-active .bg-white,
.drawer-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .bg-white[class*="right"],
.drawer-leave-to .bg-white[class*="right"] {
  transform: translateX(100%);
}

.drawer-enter-from .bg-white[class*="left"],
.drawer-leave-to .bg-white[class*="left"] {
  transform: translateX(-100%);
}

.drawer-enter-from .bg-white[class*="top"],
.drawer-leave-to .bg-white[class*="top"] {
  transform: translateY(-100%);
}

.drawer-enter-from .bg-white[class*="bottom"],
.drawer-leave-to .bg-white[class*="bottom"] {
  transform: translateY(100%);
}
</style>

