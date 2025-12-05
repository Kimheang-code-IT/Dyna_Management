<template>
  <ErrorBoundary>
    <div class="h-screen bg-gray-50 dark:bg-gray-900 flex overflow-hidden">
      <!-- Global Loading Overlay -->
      <Transition name="fade">
        <div
          v-if="isLoading"
          class="fixed inset-0 bg-black/50 dark:bg-black/70 z-[9998] flex items-center justify-center"
          role="status"
          aria-live="polite"
        >
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center gap-4 min-w-[200px]">
            <!-- Spinner -->
            <div class="relative w-12 h-12">
              <div class="absolute inset-0 border-4 border-blue-200 dark:border-blue-800 rounded-full"></div>
              <div class="absolute inset-0 border-4 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <!-- Loading Message -->
            <p v-if="loadingMessage" class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {{ loadingMessage }}
            </p>
            <p v-else class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              Loading...
            </p>
          </div>
        </div>
      </Transition>

      <!-- Show Sidebar and Navbar only when not on login page -->
      <template v-if="!isLoginPage">
        <!-- Left Sidebar - Fixed (hidden on mobile, overlay when open) -->
        <Sidebar />
        
        <!-- Backdrop for mobile sidebar -->
        <Transition name="fade">
          <div
            v-if="isMobileSidebarOpen && isMobile"
            @click="closeMobileSidebar"
            class="fixed inset-0 bg-black/50 z-40 lg:hidden"
          ></div>
        </Transition>
        
        <!-- Main Content Area -->
        <div 
          :class="[
            'flex-1 flex flex-col overflow-hidden transition-all duration-300',
            // Desktop: margin for sidebar
            'lg:ml-[255px]',
            // Mobile: no margin (sidebar is overlay)
            'ml-0',
            // Collapsed desktop state
            isSidebarCollapsed && !isMobile ? 'lg:ml-[75px]' : ''
          ]"
        >
          <!-- Top Navbar - Fixed -->
          <Navbar />
          
          <!-- Router View for Main Content - Scrollable -->
          <main 
            :class="[
              'flex-1 overflow-y-auto transition-all duration-300',
              'p-1 sm:p-2 '
            ]"
          >
            <router-view v-slot="{ Component }">
              <Transition name="page" mode="out-in">
                <component :is="Component" />
              </Transition>
            </router-view>
          </main>
        </div>
      </template>
      
      <!-- Show only router view on login page -->
      <template v-else>
        <div class="w-full h-screen">
          <router-view v-slot="{ Component }">
            <Transition name="page" mode="out-in">
              <component :is="Component" />
            </Transition>
          </router-view>
        </div>
      </template>

      <!-- Global Toast Container -->
      <ToastContainer />
    </div>
  </ErrorBoundary>
</template>

<script setup>
import { ref, provide, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import ToastContainer from './components/ToastContainer.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import { getCurrentLanguage, setCurrentLanguage } from './utils/i18n'
import { useDarkMode } from './composables/useDarkMode'
import { isLoading, loadingMessage } from './composables/useLoading'

const route = useRoute()

// Dark mode - initialize early
const { isDark, toggleDarkMode } = useDarkMode()

// Check if current route is login, forgot password, 404, maintenance, or error page
const isLoginPage = computed(() => {
  return route.path === '/login' || 
         route.path === '/forgot-password' || 
         route.name === 'NotFound' ||
         route.name === 'SystemMaintenance' ||
         route.name === 'SystemError'
})

// Sidebar collapse state
const isSidebarCollapsed = ref(false)

// Mobile sidebar state
const isMobileSidebarOpen = ref(false)
const isMobile = ref(false)

// Check if mobile on mount and resize
const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
  if (!isMobile.value) {
    isMobileSidebarOpen.value = false
  }
}

// Close mobile sidebar
const closeMobileSidebar = () => {
  isMobileSidebarOpen.value = false
}

// Toggle sidebar (handles both desktop collapse and mobile open)
const toggleSidebar = () => {
  if (isMobile.value) {
    isMobileSidebarOpen.value = !isMobileSidebarOpen.value
  } else {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
  }
}

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
  checkMobile()
  window.addEventListener('resize', checkMobile)
  
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

  // Cleanup resize listener
  onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// Provide sidebar state to child components
provide('isSidebarCollapsed', isSidebarCollapsed)
provide('isMobileSidebarOpen', isMobileSidebarOpen)
provide('isMobile', isMobile)
provide('toggleSidebar', toggleSidebar)
provide('closeMobileSidebar', closeMobileSidebar)

// Provide language state to child components
provide('currentLanguage', currentLanguage)
provide('changeLanguage', changeLanguage)

// Provide dark mode state to child components
provide('isDark', isDark)
provide('toggleDarkMode', toggleDarkMode)
</script>

<style scoped>
/* Page Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

