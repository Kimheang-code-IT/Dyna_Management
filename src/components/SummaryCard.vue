<template>
  <div
    :class="[
      'bg-white dark:bg-gray-800 rounded-lg shadow-sm p-3 sm:p-4 border border-gray-200 dark:border-gray-700',
      'transition-all duration-200 hover:shadow-md',
      containerClass
    ]"
  >
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
      <div class="flex-1 min-w-0">
        <h3
          :class="[
            'text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium mb-1 sm:mb-2',
            titleClass
          ]"
        >
          {{ title }}
        </h3>
        <p
          :class="[
            'text-2xl sm:text-3xl font-bold',
            valueClass
          ]"
        >
          <LoadingSkeleton v-if="loading" type="custom" custom-class="h-6 sm:h-8 w-20 sm:w-24" />
          <span v-else>{{ formattedValue }}</span>
        </p>
        <p
          v-if="subtitle"
          :class="[
            'text-[10px] sm:text-xs mt-1',
            subtitleClass
          ]"
        >
          {{ subtitle }}
        </p>
      </div>
      <div
        v-if="icon || $slots.icon"
        :class="[
          'flex-shrink-0 rounded-full flex items-center justify-center',
          'w-10 h-10 sm:w-12 sm:h-12',
          iconContainerClass
        ]"
      >
        <slot name="icon">
          <component v-if="icon" :is="icon" :class="['h-5 w-5 sm:h-6 sm:w-6', iconClass]" />
        </slot>
      </div>
    </div>
    <div v-if="$slots.footer" class="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-200 dark:border-gray-700">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import LoadingSkeleton from './LoadingSkeleton.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    default: null
  },
  subtitle: {
    type: String,
    default: null
  },
  icon: {
    type: [String, Object],
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  formatValue: {
    type: Function,
    default: null
  },
  containerClass: {
    type: String,
    default: ''
  },
  titleClass: {
    type: String,
    default: ''
  },
  valueClass: {
    type: String,
    default: 'text-gray-800 dark:text-white'
  },
  subtitleClass: {
    type: String,
    default: 'text-gray-500 dark:text-gray-400'
  },
  iconContainerClass: {
    type: String,
    default: 'w-12 h-12 bg-blue-100 dark:bg-blue-900'
  },
  iconClass: {
    type: String,
    default: 'text-blue-600 dark:text-blue-400'
  }
})

const formattedValue = computed(() => {
  if (props.value === null || props.value === undefined) {
    return '—'
  }
  
  if (props.formatValue) {
    return props.formatValue(props.value)
  }
  
  if (typeof props.value === 'number') {
    return props.value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    })
  }
  
  return props.value
})
</script>

