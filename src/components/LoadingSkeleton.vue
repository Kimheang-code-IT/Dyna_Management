<template>
  <div :class="['animate-pulse', containerClass]">
    <!-- Card Skeleton -->
    <div v-if="type === 'card'" class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div class="flex items-center gap-4">
        <div :class="['bg-gray-200 dark:bg-gray-700 rounded', iconClass]"></div>
        <div class="flex-1 space-y-2">
          <div :class="['bg-gray-200 dark:bg-gray-700 rounded', titleClass]"></div>
          <div :class="['bg-gray-200 dark:bg-gray-700 rounded', subtitleClass]"></div>
        </div>
      </div>
    </div>

    <!-- Table Row Skeleton -->
    <div v-else-if="type === 'table-row'" class="flex items-center gap-4 py-3 border-b border-gray-200 dark:border-gray-700">
      <div v-for="i in columns" :key="i" :class="['bg-gray-200 dark:bg-gray-700 rounded', getColumnClass(i)]"></div>
    </div>

    <!-- Table Skeleton -->
    <div v-else-if="type === 'table'" class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <!-- Table Header -->
      <div class="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center gap-4">
          <div v-for="i in columns" :key="i" :class="['bg-gray-200 dark:bg-gray-700 rounded h-4', getColumnClass(i)]"></div>
        </div>
      </div>
      <!-- Table Rows -->
      <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div v-for="i in rows" :key="i" class="flex items-center gap-4 px-4 py-3">
          <div v-for="j in columns" :key="j" :class="['bg-gray-200 dark:bg-gray-700 rounded h-4', getColumnClass(j)]"></div>
        </div>
      </div>
    </div>

    <!-- Text Skeleton -->
    <div v-else-if="type === 'text'" class="space-y-2">
      <div v-for="i in lines" :key="i" :class="['bg-gray-200 dark:bg-gray-700 rounded', getTextLineClass(i)]"></div>
    </div>

    <!-- Custom Skeleton -->
    <div v-else :class="['bg-gray-200 dark:bg-gray-700 rounded', customClass]"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['card', 'table', 'table-row', 'text', 'custom'].includes(value)
  },
  columns: {
    type: Number,
    default: 4
  },
  rows: {
    type: Number,
    default: 5
  },
  lines: {
    type: Number,
    default: 3
  },
  containerClass: {
    type: String,
    default: ''
  },
  iconClass: {
    type: String,
    default: 'w-12 h-12'
  },
  titleClass: {
    type: String,
    default: 'h-4 w-3/4'
  },
  subtitleClass: {
    type: String,
    default: 'h-3 w-1/2'
  },
  customClass: {
    type: String,
    default: 'h-4 w-full'
  }
})

const getColumnClass = (index) => {
  const widths = ['w-1/6', 'w-1/4', 'w-1/3', 'w-1/5', 'w-1/6', 'w-1/4']
  return widths[index % widths.length] || 'w-1/4'
}

const getTextLineClass = (index) => {
  if (index === props.lines) {
    return 'h-3 w-3/4' // Last line is shorter
  }
  return 'h-4 w-full'
}
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

