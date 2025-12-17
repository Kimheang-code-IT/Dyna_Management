<template>
  <nav
    class="sticky top-0 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2 z-40">
    <div class="flex items-center justify-between gap-2">
      <!-- Left: Sidebar Toggle + Search Bar -->
      <div class="flex items-center gap-2 flex-1 min-w-0">
        <!-- Sidebar Toggle Icon Button -->
        <button @click="toggleSidebar"
          class="p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
          title="Toggle Sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Search Bar -->
        <div class="relative min-w-0 max-w-[1000px]" ref="searchContainer">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input v-model="searchQuery" @input="handleSearch" @focus="showSearchResults = true" type="text"
              :placeholder="t('search')"
              class="w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-1.5 sm:py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400" />
            <button v-if="searchQuery" @click="clearSearch"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Search Results Dropdown -->
          <div v-if="showSearchResults && searchQuery && searchResults.length > 0"
            class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50">
            <div class="p-2">
              <div v-for="result in searchResults" :key="`${result.type}-${result.id}`"
                @click="navigateToResult(result)"
                class="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-sm cursor-pointer transition-colors">
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
          <div v-if="showSearchResults && searchQuery && searchResults.length === 0"
            class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
            <div class="flex flex-col items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ t('noResults') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Language, Fullscreen, Profile, Logout -->
      <div class="flex items-center gap-1  flex-shrink-0">
        <!-- Language Dropdown -->
        <div class="relative" data-language-dropdown>
          <button @click="toggleLanguageDropdown"
            class="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Change Language">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span class="hidden sm:inline text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{{
              currentLanguage === 'en' ? 'English' : 'ខ្មែរ' }}</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform"
              :class="{ 'rotate-180': showLanguageDropdown }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Language Dropdown Menu -->
          <div v-if="showLanguageDropdown"
            class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
            <button @click="selectLanguage('en')"
              class="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
              <span class="font-medium"
                :class="currentLanguage === 'en' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'">
                English
              </span>
              <svg v-if="currentLanguage === 'en'" xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button @click="selectLanguage('km')"
              class="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
              <span class="font-medium"
                :class="currentLanguage === 'km' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'">
                ភាសាខ្មែរ
              </span>
              <svg v-if="currentLanguage === 'km'" xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Notifications -->
        <div class="relative" data-notification-dropdown>
          <button @click="toggleNotificationDropdown"
            class="p-1.5 sm:p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center relative"
            title="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  text-gray-600 dark:text-gray-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span v-if="unreadCount > 0"
              class="absolute top-1 right-1 min-w-[14px] h-[14px] px-1 rounded-full bg-red-600 text-white text-[10px] leading-[16px] flex items-center justify-center">
              {{ unreadCount }}
            </span>
          </button>
          <div v-if="showNotificationDropdown"
            class="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 z-50">
            <!-- Header -->
            <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('notifications') || 'Notifications' }}
              </p>
              <button v-if="unreadCount > 0" @click="markAllNotificationsRead"
                class="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium">
                {{ t('markAllAsRead') || 'Mark all as read' }}
              </button>
            </div>
            <!-- Notifications List -->
            <div class="max-h-96 overflow-y-auto">
              <div v-for="notif in notifications" :key="notif.id"
                @click="markNotificationRead(notif.id)"
                :class="[
                  'px-4 py-3 flex gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer border-b border-gray-100 dark:border-gray-700/50',
                  notif.unread ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''
                ]">
                <!-- Icon -->
                <div class="flex-shrink-0 mt-0.5">
                  <div :class="[
                    'w-10 h-10 rounded-full flex items-center justify-center',
                    getNotificationIconBg(notif.type)
                  ]">
                    <component :is="getNotificationIcon(notif.type)" :class="getNotificationIconColor(notif.type)" class="w-5 h-5" />
                  </div>
                </div>
                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-start justify-between gap-2">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 dark:text-white">{{ notif.title }}</p>
                      <p class="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{{ notif.subtitle }}</p>
                    </div>
                    <span v-if="notif.unread" class="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1"></span>
                  </div>
                  <p class="text-[11px] text-gray-500 dark:text-gray-400 mt-1.5">{{ formatRelativeTime(notif.timestamp) }}</p>
                </div>
              </div>
              <div v-if="notifications.length === 0" class="px-4 py-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('noNotifications') || 'No notifications' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Dark Mode Toggle Button -->
        <button @click="handleToggleDarkMode"
          class="p-1.5 sm:p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          :title="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
          <!-- Moon Icon - Show when in DARK mode (dark mode is active) -->
          <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <!-- Sun Icon - Show when in LIGHT mode (light mode is active) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>

        <!-- Fullscreen Icon Button (hidden on mobile) -->
        <button @click="toggleFullScreen"
          class="hidden sm:flex p-1.5 sm:p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors min-w-[44px] min-h-[44px] items-center justify-center"
          title="Toggle Fullscreen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>

        <!-- Profile Section with Dropdown -->
        <div class="relative" data-profile-dropdown>
          <button @click="toggleProfileDropdown"
            class="flex items-center gap-1 sm:gap-2 lg:gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-sm px-1 sm:px-2 py-1 transition-colors min-h-[44px]">
            <div
              class="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0">
              AD
            </div>
            <span class="hidden sm:inline text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">{{
              t('admin') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform"
              :class="{ 'rotate-180': showProfileDropdown }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <div v-if="showProfileDropdown"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
            <div class="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('admin') }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
            </div>

            <!-- Report Menu Item -->
            <router-link :to="'/report'" @click="showProfileDropdown = false"
              class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {{ getTranslation('report') }}
            </router-link>

            <!-- User Menu Item -->
            <router-link :to="'/user'" @click="showProfileDropdown = false"
              class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {{ getTranslation('user') }}
            </router-link>

            <!-- History Menu Item -->
            <router-link :to="'/history'" @click="showProfileDropdown = false"
              class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ getTranslation('history') }}
            </router-link>

            <!-- Backup Menu Item -->
            <router-link :to="'/backup'" @click="showProfileDropdown = false"
              class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {{ getTranslation('backup') }}
            </router-link>

            <div class="border-t border-gray-200 dark:border-gray-700 my-2"></div>

            <button @click="handleLogout"
              class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
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
import { textContains } from '../utils/search'
import categoriesData from '../data/categories.json'
import productsData from '../data/products.json'
import usersData from '../data/users.json'
import salesData from '../data/sales.json'

// Additional data will be loaded dynamically in the search function

const router = useRouter()

// Inject sidebar toggle function from App.vue
const toggleSidebar = inject('toggleSidebar', () => { })

// Inject language state from App.vue
const currentLanguage = inject('currentLanguage', ref('en'))
const changeLanguage = inject('changeLanguage', () => { })

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
        history: 'History',
        backup: 'Backup'
      },
      km: {
        report: 'របាយការណ៍',
        user: 'អ្នកប្រើ',
        history: 'ប្រវត្តិ',
        backup: 'បម្រុងទុក'
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
const showNotificationDropdown = ref(false)

// Language dropdown state
const showLanguageDropdown = ref(false)
const notifications = ref([
  { 
    id: 1, 
    type: 'student',
    title: t('newStudentRegistered') || 'New student registered', 
    subtitle: 'John Doe enrolled', 
    timestamp: Date.now() - 2 * 60 * 1000, // 2 minutes ago
    unread: true 
  },
  { 
    id: 2, 
    type: 'payment',
    title: t('paymentReceived') || 'Payment received', 
    subtitle: 'Invoice ORD-20251210', 
    timestamp: Date.now() - 15 * 60 * 1000, // 15 minutes ago
    unread: true 
  },
  { 
    id: 3, 
    type: 'inventory',
    title: t('inventoryLow') || 'Inventory low', 
    subtitle: 'Product ABC stock is low', 
    timestamp: Date.now() - 60 * 60 * 1000, // 1 hour ago
    unread: false 
  }
])

const unreadCount = computed(() => notifications.value.filter(n => n.unread).length)

// Toggle profile dropdown
const toggleProfileDropdown = () => {
  showProfileDropdown.value = !showProfileDropdown.value
  showLanguageDropdown.value = false // Close language dropdown when opening profile
  showNotificationDropdown.value = false
}

// Toggle language dropdown
const toggleLanguageDropdown = () => {
  showLanguageDropdown.value = !showLanguageDropdown.value
  showProfileDropdown.value = false // Close profile dropdown when opening language
  showNotificationDropdown.value = false
}

const toggleNotificationDropdown = () => {
  showNotificationDropdown.value = !showNotificationDropdown.value
  showProfileDropdown.value = false
  showLanguageDropdown.value = false
}

const markAllNotificationsRead = () => {
  notifications.value = notifications.value.map(n => ({ ...n, unread: false }))
  // Save to localStorage
  try {
    localStorage.setItem('notifications', JSON.stringify(notifications.value))
  } catch (e) {
    console.error('Error saving notifications:', e)
  }
}

const markNotificationRead = (id) => {
  const notification = notifications.value.find(n => n.id === id)
  if (notification) {
    notification.unread = false
    // Save to localStorage
    try {
      localStorage.setItem('notifications', JSON.stringify(notifications.value))
    } catch (e) {
      console.error('Error saving notifications:', e)
    }
  }
}

// Format relative time (e.g., "2m ago", "15m ago", "1h ago")
const formatRelativeTime = (timestamp) => {
  if (!timestamp) return ''
  const now = Date.now()
  const diff = now - timestamp
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) {
    return t('justNow') || 'Just now'
  } else if (minutes < 60) {
    return `${minutes}${t('m') || 'm'} ${t('ago') || 'ago'}`
  } else if (hours < 24) {
    return `${hours}${t('h') || 'h'} ${t('ago') || 'ago'}`
  } else if (days < 7) {
    return `${days}${t('d') || 'd'} ${t('ago') || 'ago'}`
  } else {
    return new Date(timestamp).toLocaleDateString()
  }
}

// Get notification icon component
const getNotificationIcon = (type) => {
  const icons = {
    student: 'StudentIcon',
    payment: 'PaymentIcon',
    inventory: 'InventoryIcon',
    backup: 'BackupIcon',
    deadline: 'DeadlineIcon'
  }
  return icons[type] || 'InfoIcon'
}

// Get notification icon background
const getNotificationIconBg = (type) => {
  const classes = {
    student: 'bg-blue-100 dark:bg-blue-900/30',
    payment: 'bg-green-100 dark:bg-green-900/30',
    inventory: 'bg-yellow-100 dark:bg-yellow-900/30',
    backup: 'bg-purple-100 dark:bg-purple-900/30',
    deadline: 'bg-red-100 dark:bg-red-900/30'
  }
  return classes[type] || 'bg-gray-100 dark:bg-gray-700'
}

// Get notification icon color
const getNotificationIconColor = (type) => {
  const classes = {
    student: 'text-blue-600 dark:text-blue-400',
    payment: 'text-green-600 dark:text-green-400',
    inventory: 'text-yellow-600 dark:text-yellow-400',
    backup: 'text-purple-600 dark:text-purple-400',
    deadline: 'text-red-600 dark:text-red-400'
  }
  return classes[type] || 'text-gray-600 dark:text-gray-400'
}

// Select language
const selectLanguage = (lang) => {
  changeLanguage(lang)
  showLanguageDropdown.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  const profileSection = event.target.closest('[data-profile-dropdown]')
  const languageSection = event.target.closest('[data-language-dropdown]')
  const notificationSection = event.target.closest('[data-notification-dropdown]')

  if (!profileSection) {
    showProfileDropdown.value = false
  }
  if (!languageSection) {
    showLanguageDropdown.value = false
  }
  if (!notificationSection) {
    showNotificationDropdown.value = false
  }
}

// Force reactivity update when language changes
const languageKey = ref(0)

// Update notification titles based on current language
const updateNotificationTitles = () => {
  notifications.value = notifications.value.map(notif => {
    const titles = {
      student: t('newStudentRegistered') || 'New student registered',
      payment: t('paymentReceived') || 'Payment received',
      inventory: t('inventoryLow') || 'Inventory low',
      backup: t('backupComplete') || 'Backup complete',
      deadline: t('deadlineApproaching') || 'Deadline approaching'
    }
    return {
      ...notif,
      title: titles[notif.type] || notif.title
    }
  })
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('click', handleSearchClickOutside)
  
  // Listen for language change events
  window.addEventListener('languagechange', () => {
    languageKey.value++
    updateNotificationTitles()
  })
  
  // Listen for new notifications
  window.addEventListener('add-notification', handleAddNotification)
  
  // Load notifications from localStorage
  try {
    const saved = localStorage.getItem('notifications')
    if (saved) {
      const savedNotifications = JSON.parse(saved)
      if (Array.isArray(savedNotifications) && savedNotifications.length > 0) {
        notifications.value = savedNotifications
      }
    }
  } catch (e) {
    console.error('Error loading notifications:', e)
  }
  
  // Update notification titles on mount
  updateNotificationTitles()
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('click', handleSearchClickOutside)
  window.removeEventListener('languagechange', () => { })
  window.removeEventListener('add-notification', handleAddNotification)
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

// Define all available pages/routes for search
const pageRoutes = [
  { name: 'Dashboard', route: '/', keywords: ['dashboard', 'home', 'overview', 'main'] },
  { name: 'Category', route: '/category', keywords: ['category', 'categories', 'product type'] },
  { name: 'Product', route: '/product', keywords: ['product', 'products', 'items', 'inventory'] },
  { name: 'POS', route: '/pos', keywords: ['pos', 'point of sale', 'checkout', 'register'] },
  { name: 'Report', route: '/report', keywords: ['report', 'reports', 'analytics', 'statistics'] },
  { name: 'User', route: '/user', keywords: ['user', 'users', 'account', 'accounts'] },
  { name: 'History', route: '/history', keywords: ['history', 'log', 'activity', 'audit'] },
  { name: 'Students', route: '/students', keywords: ['student', 'students', 'learner', 'learners'] },
  { name: 'Student Register', route: '/student-register', keywords: ['student register', 'register student', 'enroll'] },
  { name: 'Class Management', route: '/class-management', keywords: ['class', 'classes', 'course', 'courses', 'management'] },
  { name: 'Student Deadline', route: '/student-deadline', keywords: ['deadline', 'deadlines', 'due date'] },
  { name: 'Student Payment', route: '/student-payment', keywords: ['payment', 'payments', 'tuition', 'fee'] },
  { name: 'Student Book', route: '/student-book', keywords: ['book', 'books', 'textbook', 'material'] },
  { name: 'Student Graduated', route: '/student-graduated', keywords: ['graduated', 'graduate', 'alumni', 'completed'] },
  { name: 'Employee', route: '/employee', keywords: ['employee', 'employees', 'staff', 'worker'] },
  { name: 'Employee Register', route: '/employee-register', keywords: ['employee register', 'register employee', 'hire'] },
  { name: 'Employee Attendance', route: '/employee-attendance', keywords: ['attendance', 'time', 'clock', 'check in'] },
  { name: 'Employee Salary', route: '/employee-salary', keywords: ['salary', 'salaries', 'payroll', 'wage'] },
  { name: 'Employee Schedule', route: '/employee-schedule', keywords: ['schedule', 'schedules', 'shift', 'roster'] },
  { name: 'Financial', route: '/financial', keywords: ['financial', 'finance', 'money', 'budget'] },
  { name: 'Investment', route: '/investment', keywords: ['investment', 'investments', 'invest'] },
  { name: 'Expense', route: '/expense', keywords: ['expense', 'expenses', 'cost', 'spending'] },
  { name: 'Income', route: '/income', keywords: ['income', 'revenue', 'earning', 'profit'] }
]

// Global search functionality
const handleSearch = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }

  const query = searchQuery.value.trim()
  const results = []

  // Search Pages/Routes
  pageRoutes.forEach(page => {
    if (
      textContains(page.name, query) ||
      page.keywords.some(keyword => textContains(keyword, query))
    ) {
      results.push({
        type: 'Page',
        id: page.route,
        title: page.name,
        subtitle: `Navigate to ${page.name} page`,
        route: page.route
      })
    }
  })

  // Search Categories
  categoriesData.forEach(category => {
    if (
      textContains(category.name, query) ||
      textContains(category.description || '', query)
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
      textContains(product.name, query) ||
      textContains(product.sku, query) ||
      textContains(product.category, query)
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
      textContains(user.name, query) ||
      textContains(user.email || '', query)
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
      textContains(sale.id, query) ||
      sale.topProducts.some(p => textContains(p, query))
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

  // Search Students (load from localStorage if available)
  let studentsData = []
  try {
    const saved = localStorage.getItem('students_data')
    if (saved) studentsData = JSON.parse(saved)
  } catch (e) {
    // Ignore errors
  }

  if (studentsData && Array.isArray(studentsData)) {
    studentsData.forEach(student => {
      if (
        textContains(student.name || '', query) ||
        textContains(student.contact || '', query) ||
        textContains(student.province || '', query) ||
        textContains(student.course || '', query)
      ) {
        results.push({
          type: 'Student',
          id: student.id || student.name,
          title: student.name || 'Unknown Student',
          subtitle: `${student.course || 'N/A'} - ${student.province || 'N/A'} - ${student.contact || 'No contact'}`,
          route: '/students'
        })
      }
    })
  }

  // Search Employees (load from localStorage if available)
  let employeesData = []
  try {
    const saved = localStorage.getItem('employees_data')
    if (saved) employeesData = JSON.parse(saved)
  } catch (e) {
    // Ignore errors
  }

  if (employeesData && Array.isArray(employeesData)) {
    employeesData.forEach(employee => {
      if (
        textContains(employee.name || '', query) ||
        textContains(employee.email || '', query) ||
        textContains(employee.role || '', query) ||
        textContains(employee.department || '', query) ||
        textContains(employee.phone || '', query)
      ) {
        results.push({
          type: 'Employee',
          id: employee.id || employee.name,
          title: employee.name || 'Unknown Employee',
          subtitle: `${employee.role || 'N/A'} - ${employee.department || 'N/A'} - ${employee.phone || employee.email || 'No contact'}`,
          route: '/employee'
        })
      }
    })
  }

  // Search Incomes (load from localStorage if available)
  let incomesData = []
  try {
    const saved = localStorage.getItem('incomes_data')
    if (saved) incomesData = JSON.parse(saved)
  } catch (e) {
    // Ignore errors
  }

  if (incomesData && Array.isArray(incomesData)) {
    incomesData.forEach(income => {
      if (
        textContains(income.name || '', query) ||
        textContains(income.description || '', query) ||
        textContains(income.category || '', query)
      ) {
        results.push({
          type: 'Income',
          id: income.id || income.name,
          title: income.name || 'Income',
          subtitle: `${income.category || 'N/A'} - $${(income.price || income.amount || 0).toFixed(2)} - ${income.paymentDate || income.created || 'N/A'}`,
          route: '/income'
        })
      }
    })
  }

  // Search Expenses (load from localStorage if available)
  let expensesData = []
  try {
    const saved = localStorage.getItem('expenses_data')
    if (saved) expensesData = JSON.parse(saved)
  } catch (e) {
    // Ignore errors
  }

  if (expensesData && Array.isArray(expensesData)) {
    expensesData.forEach(expense => {
      if (
        textContains(expense.expenseName || '', query) ||
        textContains(expense.description || '', query) ||
        textContains(expense.supplier || '', query)
      ) {
        results.push({
          type: 'Expense',
          id: expense.id || expense.expenseName,
          title: expense.expenseName || 'Expense',
          subtitle: `$${(expense.amount || 0).toFixed(2)} - ${expense.supplier || 'N/A'} - ${expense.created || 'N/A'}`,
          route: '/expense'
        })
      }
    })
  }

  // Search Investments (load from localStorage if available)
  let investmentsData = []
  try {
    const saved = localStorage.getItem('investments_data')
    if (saved) investmentsData = JSON.parse(saved)
  } catch (e) {
    // Ignore errors
  }

  if (investmentsData && Array.isArray(investmentsData)) {
    investmentsData.forEach(investment => {
      if (
        textContains(investment.expenseName || '', query) ||
        textContains(investment.description || '', query) ||
        textContains(investment.supplier || '', query)
      ) {
        results.push({
          type: 'Investment',
          id: investment.id || investment.expenseName,
          title: investment.expenseName || 'Investment',
          subtitle: `$${(investment.amount || 0).toFixed(2)} - ${investment.supplier || 'N/A'} - ${investment.created || 'N/A'}`,
          route: '/investment'
        })
      }
    })
  }

  // Limit results to 15 (increased from 10 to show more results)
  searchResults.value = results.slice(0, 15)
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
    'Page': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>',
    'Category': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>',
    'Product': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>',
    'User': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>',
    'Sale': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
    'Student': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>',
    'Employee': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
    'Income': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    'Expense': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
    'Investment': '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>'
  }
  return icons[type] || '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>'
}

// Get result icon background class
const getResultIconClass = (type) => {
  const classes = {
    'Page': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    'Category': 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    'Product': 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    'User': 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    'Sale': 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    'Student': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
    'Employee': 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
    'Income': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    'Expense': 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    'Investment': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
  }
  return classes[type] || 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
}

// Get result type badge class
const getResultTypeClass = (type) => {
  const classes = {
    'Page': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300',
    'Category': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
    'Product': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
    'User': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
    'Sale': 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300',
    'Student': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300',
    'Employee': 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300',
    'Income': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300',
    'Expense': 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
    'Investment': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
  }
  return classes[type] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
}

// Close search results when clicking outside
const handleSearchClickOutside = (event) => {
  if (searchContainer.value && !searchContainer.value.contains(event.target) && showSearchResults.value) {
    showSearchResults.value = false
  }
}

</script>
