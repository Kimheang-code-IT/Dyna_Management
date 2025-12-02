<template>
  <div class="h-screen bg-gray-50 dark:bg-gray-900 flex overflow-hidden">
    <!-- Show Sidebar and Navbar only when not on login page -->
    <template v-if="!isLoginPage">
      <!-- Left Sidebar - Fixed -->
      <Sidebar />
      
      <!-- Main Content Area -->
      <div 
        :class="[
          'flex-1 flex flex-col overflow-hidden transition-all duration-300',
          isSidebarCollapsed ? 'ml-20' : 'ml-[280px]'
        ]"
      >
        <!-- Top Navbar - Fixed -->
        <Navbar />
        
        <!-- Router View for Main Content - Scrollable -->
        <main 
          :class="[
            'flex-1 overflow-y-auto transition-all duration-300',
            isSidebarCollapsed ? 'p-1' : 'p-2'
          ]"
        >
          <router-view />
        </main>
      </div>
    </template>
    
    <!-- Show only router view on login page -->
    <template v-else>
      <div class="w-full h-screen">
        <router-view />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, provide, computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import { getCurrentLanguage, setCurrentLanguage } from './utils/i18n'
import { useDarkMode } from './composables/useDarkMode'

const route = useRoute()

// Dark mode - initialize early
const { isDark, toggleDarkMode } = useDarkMode()

// Check if current route is login page
const isLoginPage = computed(() => route.path === '/login')

// Sidebar collapse state
const isSidebarCollapsed = ref(false)

// Language state
const currentLanguage = ref(getCurrentLanguage())

// Function to change language
const changeLanguage = (lang) => {
  currentLanguage.value = lang
  setCurrentLanguage(lang)
  // Update HTML lang attribute and class for font switching
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.classList.remove('lang-en', 'lang-km')
    document.documentElement.classList.add(`lang-${lang}`)
    document.body.classList.remove('lang-en', 'lang-km')
    document.body.classList.add(`lang-${lang}`)
  }
  // Trigger reactivity update
  window.dispatchEvent(new Event('languagechange'))
}

// Initialize on mount: dark mode and language
onMounted(() => {
  nextTick(() => {
    if (typeof document !== 'undefined') {
      // Apply dark mode
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      // Apply language class and font
      const lang = currentLanguage.value || 'en'
      document.documentElement.setAttribute('lang', lang)
      document.documentElement.classList.add(`lang-${lang}`)
      document.body.classList.add(`lang-${lang}`)
    }
  })
})

// Provide sidebar state to child components
provide('isSidebarCollapsed', isSidebarCollapsed)
provide('toggleSidebar', () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
})

// Provide language state to child components
provide('currentLanguage', currentLanguage)
provide('changeLanguage', changeLanguage)

// Provide dark mode state to child components
provide('isDark', isDark)
provide('toggleDarkMode', toggleDarkMode)
</script>

