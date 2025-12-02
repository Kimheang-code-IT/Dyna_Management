<template>
  <nav class="sticky top-0 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-4 py-2 z-40">
    <div class="flex items-center justify-between">
      <!-- Left: Sidebar Toggle + Search Bar -->
      <div class="flex items-center gap-2 flex-1 max-w-md">
        <!-- Sidebar Toggle Icon Button -->
        <button
          @click="toggleSidebar"
          class="p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
          title="Toggle Sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        
        <!-- Search Bar -->
        <div class="flex-1 relative" ref="searchContainer">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              @input="handleSearch"
              @focus="showSearchResults = true"
              type="text"
              :placeholder="t('search')"
              class="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
            />
            <button
              v-if="searchQuery"
              @click="clearSearch"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Search Results Dropdown -->
        <div
          v-if="showSearchResults && searchQuery && searchResults.length > 0"
          class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50"
        >
          <div class="p-2">
            <div
              v-for="result in searchResults"
              :key="`${result.type}-${result.id}`"
              @click="navigateToResult(result)"
              class="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-sm cursor-pointer transition-colors"
            >
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                     :class="getResultIconClass(result.type)">
                  <span v-html="getResultIcon(result.type)"></span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <p class="font-medium text-gray-900 dark:text-white">{{ result.title }}</p>
                    <span class="px-2 py-0.5 text-xs font-medium rounded-full"
                          :class="getResultTypeClass(result.type)">
                      {{ result.type }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">{{ result.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <!-- No Results Message -->
          <div
            v-if="showSearchResults && searchQuery && searchResults.length === 0"
            class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50"
          >
            <div class="flex flex-col items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ t('noResults') }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right: Language, Fullscreen, Profile, Logout -->
      <div class="flex items-center gap-4 ml-6">
        <!-- Language Dropdown -->
        <div class="relative">
          <button
            @click="toggleLanguageDropdown"
            class="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Change Language"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ currentLanguage === 'en' ? 'English' : 'ខ្មែរ' }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform"
              :class="{ 'rotate-180': showLanguageDropdown }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <!-- Language Dropdown Menu -->
          <div
            v-if="showLanguageDropdown"
            class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
          >
            <button
              @click="selectLanguage('en')"
              class="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
            >
              <span class="font-medium" :class="currentLanguage === 'en' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'">
                English
              </span>
              <svg v-if="currentLanguage === 'en'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button
              @click="selectLanguage('km')"
              class="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
            >
              <span class="font-medium" :class="currentLanguage === 'km' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'">
                ភាសាខ្មែរ
              </span>
              <svg v-if="currentLanguage === 'km'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Dark Mode Toggle Button -->
        <button
          @click="handleToggleDarkMode"
          class="p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <!-- Moon Icon - Show when in DARK mode (dark mode is active) -->
          <svg
            v-if="isDarkMode"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <!-- Sun Icon - Show when in LIGHT mode (light mode is active) -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        
        <!-- Fullscreen Icon Button -->
        <button
          @click="toggleFullScreen"
          class="p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          title="Toggle Fullscreen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </button>
        
        <!-- Profile Section with Dropdown -->
        <div class="relative">
          <button
            @click="toggleProfileDropdown"
            class="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-sm px-2 py-1 transition-colors"
          >
            <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
              AD
            </div>
            <span class="text-gray-700 dark:text-gray-300 font-medium">{{ t('admin') }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform"
              :class="{ 'rotate-180': showProfileDropdown }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <!-- Dropdown Menu -->
          <div
            v-if="showProfileDropdown"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
          >
            <div class="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('admin') }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
            </div>
            
            <!-- Report Menu Item -->
            <router-link
              :to="'/report'"
              @click="showProfileDropdown = false"
              class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {{ getTranslation('report') }}
            </router-link>
            
            <!-- User Menu Item -->
            <router-link
              :to="'/user'"
              @click="showProfileDropdown = false"
              class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {{ getTranslation('user') }}
            </router-link>
            
            <!-- History Menu Item -->
            <router-link
              :to="'/history'"
              @click="showProfileDropdown = false"
              class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ getTranslation('history') }}
            </router-link>
            
            <div class="border-t border-gray-200 dark:border-gray-700 my-2"></div>
            
            <button
              @click="handleLogout"
              class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              {{ t('logout') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { addHistory } from '../utils/history'
import { useDarkMode } from '../composables/useDarkMode'
import categoriesData from '../data/categories.json'
import productsData from '../data/products.json'
import usersData from '../data/users.json'
import salesData from '../data/sales.json'

const router = useRouter()

// Inject sidebar toggle function from App.vue
const toggleSidebar = inject('toggleSidebar', () => {})

// Inject language state from App.vue
const currentLanguage = inject('currentLanguage', ref('en'))
const changeLanguage = inject('changeLanguage', () => {})

// Use dark mode composable directly (singleton pattern ensures shared state)
const { isDark, toggleDarkMode } = useDarkMode()

// Computed property to ensure reactivity in template
const isDarkMode = computed(() => {
  return Boolean(isDark?.value)
})

// Handle dark mode toggle
const handleToggleDarkMode = () => {
  toggleDarkMode()
}

// Create reactive translation function
const t = (key) => {
  // Use the current language from the injected ref
  const lang = currentLanguage.value || 'en'
  const keys = key.split('.')
  const translations = {
    en: {
      search: 'Search everything...',
      logout: 'Log Out',
      admin: 'Admin',
      noResults: 'No results found',
    },
    km: {
      search: 'ស្វែងរកទាំងអស់...',
      logout: 'ចេញ',
      admin: 'អ្នកគ្រប់គ្រង',
      noResults: 'រកមិនឃើញលទ្ធផល',
    }
  }
  
  let value = translations[lang]
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key
    }
  }
  return value || key
}

// Get translation for menu items
const getTranslation = (key) => {
  const lang = currentLanguage.value || 'en'
  const translations = {
    en: {
      report: 'Report',
      user: 'User',
      history: 'History'
    },
    km: {
      report: 'របាយការណ៍',
      user: 'អ្នកប្រើ',
      history: 'ប្រវត្តិ'
    }
  }
  return translations[lang]?.[key] || key
}

// Search state
const searchQuery = ref('')
const searchResults = ref([])
const showSearchResults = ref(false)
const searchContainer = ref(null)

// Profile dropdown state
const showProfileDropdown = ref(false)

// Language dropdown state
const showLanguageDropdown = ref(false)

// Toggle profile dropdown
const toggleProfileDropdown = () => {
  showProfileDropdown.value = !showProfileDropdown.value
  showLanguageDropdown.value = false // Close language dropdown when opening profile
}

// Toggle language dropdown
const toggleLanguageDropdown = () => {
  showLanguageDropdown.value = !showLanguageDropdown.value
  showProfileDropdown.value = false // Close profile dropdown when opening language
}

// Select language
const selectLanguage = (lang) => {
  changeLanguage(lang)
  showLanguageDropdown.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  const profileSection = event.target.closest('.relative')
  if (!profileSection) {
    if (showProfileDropdown.value) {
      showProfileDropdown.value = false
    }
    if (showLanguageDropdown.value) {
      showLanguageDropdown.value = false
    }
  }
}

// Force reactivity update when language changes
const languageKey = ref(0)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  // Listen for language change events
  window.addEventListener('languagechange', () => {
    languageKey.value++
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('languagechange', () => {})
})

// Fullscreen toggle method
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    // Attempt to enter fullscreen
    document.documentElement.requestFullscreen().catch((err) => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`)
    })
  } else {
    // Exit fullscreen
    document.exitFullscreen().catch((err) => {
      console.log(`Error attempting to exit fullscreen: ${err.message}`)
    })
  }
}

// Logout handler
const handleLogout = () => {
  console.log('Logging out...')
  showProfileDropdown.value = false
  
  // Log logout history
  addHistory('logout', {
    type: 'system',
    itemName: 'Admin',
    description: 'User logged out successfully',
    user: 'Admin'
  })
  
  // In a real app, you would:
  // - Clear authentication tokens
  // - Clear user state
  // - Clear any stored data
  
  // Navigate to login page
  router.push('/login')
}

// Global search functionality
const handleSearch = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }

  const query = searchQuery.value.toLowerCase().trim()
  const results = []

  // Search Categories
  categoriesData.forEach(category => {
    if (
      category.name.toLowerCase().includes(query) ||
      (category.description && category.description.toLowerCase().includes(query))
    ) {
      results.push({
        type: 'Category',
        id: category.id,
        title: category.name,
        subtitle: category.description || 'No description',
        route: '/category'
      })
    }
  })

  // Search Products
  productsData.forEach(product => {
    if (
      product.name.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    ) {
      results.push({
        type: 'Product',
        id: product.id,
        title: product.name,
        subtitle: `${product.category} - SKU: ${product.sku} - $${product.price.toFixed(2)}`,
        route: '/product'
      })
    }
  })

  // Search Users
  usersData.forEach(user => {
    if (
      user.name.toLowerCase().includes(query) ||
      (user.email && user.email.toLowerCase().includes(query))
    ) {
      results.push({
        type: 'User',
        id: user.id,
        title: user.name,
        subtitle: user.email || 'No email',
        route: '/user'
      })
    }
  })

  // Search Sales
  salesData.forEach(sale => {
    if (
      sale.id.toLowerCase().includes(query) ||
      sale.topProducts.some(p => p.toLowerCase().includes(query))
    ) {
      results.push({
        type: 'Sale',
        id: sale.id,
        title: `Sale ${sale.id}`,
        subtitle: `${sale.itemsSold} items - $${sale.total.toFixed(2)} - ${sale.date}`,
        route: '/report'
      })
    }
  })

  // Limit results to 10
  searchResults.value = results.slice(0, 10)
}

// Clear search
const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
  showSearchResults.value = false
}

// Navigate to search result
const navigateToResult = (result) => {
  router.push(result.route)
  searchQuery.value = ''
  showSearchResults.value = false
}

// Get result icon
const getResultIcon = (type) => {
  const icons = {
    'Category': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>',
    'Product': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>',
    'User': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>',
    'Sale': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
  }
  return icons[type] || ''
}

// Get result icon background class
const getResultIconClass = (type) => {
  const classes = {
    'Category': 'bg-blue-100 text-blue-600',
    'Product': 'bg-green-100 text-green-600',
    'User': 'bg-purple-100 text-purple-600',
    'Sale': 'bg-orange-100 text-orange-600'
  }
  return classes[type] || 'bg-gray-100 text-gray-600'
}

// Get result type badge class
const getResultTypeClass = (type) => {
  const classes = {
    'Category': 'bg-blue-100 text-blue-800',
    'Product': 'bg-green-100 text-green-800',
    'User': 'bg-purple-100 text-purple-800',
    'Sale': 'bg-orange-100 text-orange-800'
  }
  return classes[type] || 'bg-gray-100 text-gray-800'
}

// Close search results when clicking outside
const handleSearchClickOutside = (event) => {
  if (searchContainer.value && !searchContainer.value.contains(event.target) && showSearchResults.value) {
    showSearchResults.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('click', handleSearchClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('click', handleSearchClickOutside)
})
</script>

