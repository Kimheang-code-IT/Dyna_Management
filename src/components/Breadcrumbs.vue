<template>
  <nav :class="['flex items-center space-x-2', containerClass]" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center"
      >
        <router-link
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          :class="[
            'text-sm font-medium transition-colors',
            linkClass
          ]"
        >
          {{ item.label }}
        </router-link>
        <span
          v-else
          :class="[
            'text-sm font-medium',
            index === items.length - 1 ? currentClass : linkClass
          ]"
        >
          {{ item.label }}
        </span>
        <svg
          v-if="index < items.length - 1"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-2 h-4 w-4 text-gray-400 dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  autoGenerate: {
    type: Boolean,
    default: false
  },
  containerClass: {
    type: String,
    default: ''
  },
  linkClass: {
    type: String,
    default: 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
  },
  currentClass: {
    type: String,
    default: 'text-gray-900 dark:text-white'
  }
})

const route = useRoute()

const items = computed(() => {
  if (props.autoGenerate && props.items.length === 0) {
    const routes = route.path.split('/').filter(Boolean)
    const breadcrumbItems = [
      { label: 'Home', to: '/' }
    ]
    
    let path = ''
    routes.forEach((routeName, index) => {
      path += `/${routeName}`
      const label = routeName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      breadcrumbItems.push({
        label,
        to: index === routes.length - 1 ? null : path
      })
    })
    
    return breadcrumbItems
  }
  
  return props.items
})
</script>

