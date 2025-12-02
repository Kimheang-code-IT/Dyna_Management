<template>
  <div :class="['mx-auto transition-all duration-300', isSidebarCollapsed ? 'max-w-full px-2' : 'max-w-7xl']">
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-6">
      <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Employee</h1>
      <p class="text-gray-600 dark:text-gray-400">Employee management page coming soon...</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const isSidebarCollapsed = inject('isSidebarCollapsed', false)
</script>

