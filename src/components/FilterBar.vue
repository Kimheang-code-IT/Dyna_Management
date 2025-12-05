<template>
  <div :class="['flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3', containerClass]">
    <slot name="before" />
    
    <div
      v-for="filter in filters"
      :key="filter.key"
      class="flex flex-col sm:flex-row items-stretch sm:items-center gap-1 sm:gap-2 w-full sm:w-auto"
    >
      <label
        v-if="filter.label"
        :for="filter.key"
        :class="['text-xs sm:text-sm font-medium whitespace-nowrap', labelClass]"
      >
        {{ filter.label }}
      </label>
      <select
        :id="filter.key"
        :value="filterValues[filter.key]"
        @change="handleFilterChange(filter.key, $event.target.value)"
        :class="[
          'px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-md',
          'bg-white dark:bg-gray-800 text-gray-900 dark:text-white',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
          'transition-colors text-xs sm:text-sm min-h-[44px]',
          selectClass
        ]"
      >
        <option value="">{{ filter.placeholder || 'All' }}</option>
        <option
          v-for="option in filter.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>

    <button
      v-if="showClear && hasActiveFilters"
      @click="handleClear"
      :class="[
        'px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors min-h-[44px] w-full sm:w-auto',
        clearButtonClass
      ]"
    >
      {{ clearLabel }}
    </button>

    <slot name="after" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  filters: {
    type: Array,
    required: true,
    validator: (filters) => {
      return filters.every(filter => 
        filter.key && 
        Array.isArray(filter.options) &&
        filter.options.every(opt => opt.value !== undefined && opt.label)
      )
    }
  },
  modelValue: {
    type: Object,
    default: () => ({})
  },
  showClear: {
    type: Boolean,
    default: true
  },
  clearLabel: {
    type: String,
    default: 'Clear Filters'
  },
  containerClass: {
    type: String,
    default: ''
  },
  labelClass: {
    type: String,
    default: 'text-gray-700 dark:text-gray-300'
  },
  selectClass: {
    type: String,
    default: ''
  },
  clearButtonClass: {
    type: String,
    default: 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
  }
})

const emit = defineEmits(['update:modelValue', 'change', 'clear'])

const filterValues = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const hasActiveFilters = computed(() => {
  return Object.values(filterValues.value).some(value => value !== '' && value !== null && value !== undefined)
})

const handleFilterChange = (key, value) => {
  const newFilters = {
    ...filterValues.value,
    [key]: value
  }
  emit('update:modelValue', newFilters)
  emit('change', { key, value, filters: newFilters })
}

const handleClear = () => {
  const clearedFilters = {}
  props.filters.forEach(filter => {
    clearedFilters[filter.key] = ''
  })
  emit('update:modelValue', clearedFilters)
  emit('clear')
}
</script>

