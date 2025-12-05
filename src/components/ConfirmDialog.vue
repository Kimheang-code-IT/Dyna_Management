<template>
  <Modal
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    size="sm"
    :close-on-backdrop="false"
    :container-class="containerClass"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <div
          :class="[
            'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center',
            iconContainerClass
          ]"
        >
          <component :is="iconComponent" :class="['w-6 h-6', iconClass]" />
        </div>
        <h3 :class="['text-lg font-semibold', titleClass]">
          {{ title }}
        </h3>
      </div>
    </template>

    <div :class="['py-4', bodyClass]">
      <p :class="['text-sm', messageClass]">
        {{ message }}
      </p>
    </div>

    <template #footer>
      <button
        @click="handleCancel"
        :class="[
          'px-4 py-2 rounded-md font-medium transition-colors',
          cancelButtonClass
        ]"
      >
        {{ cancelLabel }}
      </button>
      <button
        @click="handleConfirm"
        :class="[
          'px-4 py-2 rounded-md font-medium transition-colors',
          confirmButtonClass
        ]"
      >
        {{ confirmLabel }}
      </button>
    </template>
  </Modal>
</template>

<script setup>
import { computed } from 'vue'
import Modal from './Modal.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'Confirm Action'
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'warning',
    validator: (value) => ['warning', 'danger', 'info', 'success'].includes(value)
  },
  confirmLabel: {
    type: String,
    default: 'Confirm'
  },
  cancelLabel: {
    type: String,
    default: 'Cancel'
  },
  containerClass: {
    type: String,
    default: ''
  },
  bodyClass: {
    type: String,
    default: ''
  },
  titleClass: {
    type: String,
    default: 'text-gray-900 dark:text-white'
  },
  messageClass: {
    type: String,
    default: 'text-gray-600 dark:text-gray-400'
  },
  iconContainerClass: {
    type: String,
    default: ''
  },
  iconClass: {
    type: String,
    default: ''
  },
  confirmButtonClass: {
    type: String,
    default: ''
  },
  cancelButtonClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])

const iconComponent = computed(() => {
  const icons = {
    warning: 'WarningIcon',
    danger: 'DangerIcon',
    info: 'InfoIcon',
    success: 'SuccessIcon'
  }
  return icons[props.type] || 'WarningIcon'
})

const iconContainerClass = computed(() => {
  const base = props.iconContainerClass
  const typeClasses = {
    warning: 'bg-yellow-100 dark:bg-yellow-900/20',
    danger: 'bg-red-100 dark:bg-red-900/20',
    info: 'bg-blue-100 dark:bg-blue-900/20',
    success: 'bg-green-100 dark:bg-green-900/20'
  }
  return `${base} ${typeClasses[props.type] || typeClasses.warning}`
})

const iconClass = computed(() => {
  const base = props.iconClass
  const typeClasses = {
    warning: 'text-yellow-600 dark:text-yellow-400',
    danger: 'text-red-600 dark:text-red-400',
    info: 'text-blue-600 dark:text-blue-400',
    success: 'text-green-600 dark:text-green-400'
  }
  return `${base} ${typeClasses[props.type] || typeClasses.warning}`
})

const confirmButtonClass = computed(() => {
  const base = props.confirmButtonClass
  const typeClasses = {
    warning: 'bg-yellow-600 hover:bg-yellow-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    info: 'bg-blue-600 hover:bg-blue-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white'
  }
  return base || typeClasses[props.type] || typeClasses.warning
})

const cancelButtonClass = computed(() => {
  return props.cancelButtonClass || 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
})

const handleConfirm = () => {
  emit('confirm')
  emit('update:modelValue', false)
}

const handleCancel = () => {
  emit('cancel')
  emit('update:modelValue', false)
}
</script>

<script>
// Icon components
export default {
  components: {
    WarningIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      `
    },
    DangerIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `
    },
    InfoIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `
    },
    SuccessIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `
    }
  }
}
</script>

