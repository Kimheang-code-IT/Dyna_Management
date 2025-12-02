import { ref, watch, nextTick } from 'vue'

// Create a singleton instance
let isDark = null
let toggleDarkModeFn = null
let setDarkModeFn = null

const STORAGE_KEY = 'darkMode'

// Apply dark mode class to html element
const applyDarkMode = (value) => {
  if (typeof document === 'undefined') return
  
  const html = document.documentElement
  if (value) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

// Load saved preference from localStorage
const loadDarkMode = () => {
  if (typeof window === 'undefined') return false
  
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved !== null) {
      return saved === 'true'
    } else {
      // Default to system preference if no saved preference
      if (window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      return false
    }
  } catch (e) {
    return false
  }
}

// Export composable
export function useDarkMode() {
  // Create ref only once (singleton pattern)
  if (!isDark) {
    const initialValue = loadDarkMode()
    isDark = ref(initialValue)
    
    // Apply initial dark mode - use nextTick to ensure DOM is ready
    nextTick(() => {
      applyDarkMode(initialValue)
    })
    
    // Also try immediately in case DOM is already ready
    if (typeof document !== 'undefined') {
      applyDarkMode(initialValue)
    }
    
    // Watch for changes and apply them
    watch(isDark, (newValue) => {
      // Apply immediately
      applyDarkMode(newValue)
      
      // Save to localStorage
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(STORAGE_KEY, String(newValue))
        }
      } catch (e) {
        console.error('Error saving dark mode preference:', e)
      }
    }, { immediate: false })
    
    // Toggle dark mode function
    toggleDarkModeFn = () => {
      if (isDark && typeof isDark.value !== 'undefined') {
        isDark.value = !isDark.value
      }
    }
    
    // Set dark mode explicitly
    setDarkModeFn = (value) => {
      if (isDark) {
        isDark.value = Boolean(value)
      }
    }
    
    // Watch for system preference changes (only if no user preference)
    if (typeof window !== 'undefined' && window.matchMedia) {
      try {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleSystemChange = (e) => {
          // Only update if user hasn't set a preference
          try {
            if (!localStorage.getItem(STORAGE_KEY)) {
              if (isDark) {
                isDark.value = e.matches
              }
            }
          } catch (err) {
            // Ignore localStorage errors
          }
        }
        mediaQuery.addEventListener('change', handleSystemChange)
      } catch (e) {
        // Ignore if matchMedia is not supported
      }
    }
  }
  
  return {
    isDark,
    toggleDarkMode: toggleDarkModeFn,
    setDarkMode: setDarkModeFn
  }
}

