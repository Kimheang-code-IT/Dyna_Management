<template>
  <div :class="['relative', containerClass]">
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        :value="modelValue"
        @input="handleInput"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        :type="type"
        :placeholder="placeholder"
        :class="[
          'block w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-md',
          'bg-white dark:bg-gray-800 text-gray-900 dark:text-white',
          'placeholder-gray-400 dark:placeholder-gray-500',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          'transition-colors min-h-[44px]',
          inputClass
        ]"
        :disabled="disabled"
      />
      <button
        v-if="modelValue && showClear"
        @click="handleClear"
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
        aria-label="Clear search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
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
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Search...'
  },
  type: {
    type: String,
    default: 'text'
  },
  debounce: {
    type: Number,
    default: 300
  },
  showClear: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  containerClass: {
    type: String,
    default: ''
  },
  inputClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'search', 'focus', 'blur', 'clear'])

let debounceTimer = null

const handleInput = (event) => {
  const value = event.target.value
  emit('update:modelValue', value)

  // Debounce search
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }

  debounceTimer = setTimeout(() => {
    emit('search', value)
  }, props.debounce)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('search', '')
  emit('clear')
}

watch(() => props.modelValue, (newValue) => {
  if (!newValue && debounceTimer) {
    clearTimeout(debounceTimer)
  }
})
</script>

