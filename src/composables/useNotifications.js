import { ref } from 'vue'
import { useToast, TOAST_TYPES } from './useToast'
import productsData from '../data/products.json'

// Notification state
const notificationsEnabled = ref(true)
const lastCheckedProducts = ref(new Set())
const lastCheckedDeadlines = ref(new Set())
let checkInterval = null

/**
 * Composable for system-wide notifications
 * @returns {Object} Notification methods
 */
export function useNotifications() {
  const { showToast, warning, error, success } = useToast()

  /**
   * Check for low stock products
   */
  const checkLowStock = () => {
    try {
      const stored = localStorage.getItem('products_data')
      const products = stored ? JSON.parse(stored) : productsData

      products.forEach(product => {
        const inStock = product.inStock || 0
        const productId = product.id

        // Check for out of stock (not already notified)
        if (inStock <= 0 && !lastCheckedProducts.value.has(`out_${productId}`)) {
          error(`Product "${product.name}" is out of stock!`, 5000)
          lastCheckedProducts.value.add(`out_${productId}`)
          // Add to navbar notifications
          addNotification({
            type: 'inventory',
            title: 'Inventory low',
            subtitle: `Product "${product.name}" is out of stock!`,
            timestamp: Date.now(),
            unread: true
          })
        }
        // Check for low stock (not already notified)
        else if (inStock > 0 && inStock <= 15 && !lastCheckedProducts.value.has(`low_${productId}`)) {
          warning(`Product "${product.name}" is running low on stock (${inStock} items remaining)`, 5000)
          lastCheckedProducts.value.add(`low_${productId}`)
          // Add to navbar notifications
          addNotification({
            type: 'inventory',
            title: 'Inventory low',
            subtitle: `Product "${product.name}" stock is low (${inStock} items remaining)`,
            timestamp: Date.now(),
            unread: true
          })
        }
      })

      // Clean up checked products that are no longer low/out of stock
      const currentProducts = products.map(p => ({
        id: p.id,
        inStock: p.inStock || 0
      }))

      lastCheckedProducts.value.forEach(key => {
        const [type, productId] = key.split('_')
        const product = currentProducts.find(p => p.id === productId)
        
        if (product) {
          if (type === 'out' && product.inStock > 0) {
            lastCheckedProducts.value.delete(key)
          } else if (type === 'low' && (product.inStock > 15 || product.inStock <= 0)) {
            lastCheckedProducts.value.delete(key)
          }
        }
      })
    } catch (e) {
      console.error('Error checking low stock:', e)
    }
  }

  /**
   * Check for student deadlines
   */
  const checkStudentDeadlines = () => {
    try {
      const enrollments = JSON.parse(localStorage.getItem('enrollments_data') || '[]')
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      enrollments.forEach(enrollment => {
        if (!enrollment.deadline || enrollment.status === 'Confirmed') return

        const deadline = new Date(enrollment.deadline)
        deadline.setHours(0, 0, 0, 0)
        const diffTime = deadline - today
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        const enrollmentId = enrollment.id

        // Check for overdue deadlines (not already notified)
        if (diffDays < 0 && !lastCheckedDeadlines.value.has(`overdue_${enrollmentId}`)) {
          const studentName = enrollment.student?.name || enrollment.student?.nameEnglish || 'Student'
          error(`Student deadline overdue: ${studentName} - ${Math.abs(diffDays)} day(s) overdue`, 5000)
          lastCheckedDeadlines.value.add(`overdue_${enrollmentId}`)
          // Add to navbar notifications
          addNotification({
            type: 'deadline',
            title: 'Student deadline overdue',
            subtitle: `${studentName} - ${Math.abs(diffDays)} day(s) overdue`,
            timestamp: Date.now(),
            unread: true
          })
        }
        // Check for upcoming deadlines within 7 days (not already notified)
        else if (diffDays >= 0 && diffDays <= 7 && !lastCheckedDeadlines.value.has(`upcoming_${enrollmentId}`)) {
          const studentName = enrollment.student?.name || enrollment.student?.nameEnglish || 'Student'
          warning(`Student deadline approaching: ${studentName} - ${diffDays} day(s) remaining`, 5000)
          lastCheckedDeadlines.value.add(`upcoming_${enrollmentId}`)
          // Add to navbar notifications
          addNotification({
            type: 'deadline',
            title: 'Student deadline approaching',
            subtitle: `${studentName} - ${diffDays} day(s) remaining`,
            timestamp: Date.now(),
            unread: true
          })
        }
      })

      // Clean up checked deadlines that are no longer relevant
      enrollments.forEach(enrollment => {
        if (!enrollment.deadline) return

        const deadline = new Date(enrollment.deadline)
        deadline.setHours(0, 0, 0, 0)
        const diffTime = deadline - today
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        const enrollmentId = enrollment.id

        if (diffDays > 7 && enrollment.status === 'Confirmed') {
          lastCheckedDeadlines.value.delete(`overdue_${enrollmentId}`)
          lastCheckedDeadlines.value.delete(`upcoming_${enrollmentId}`)
        }
      })
    } catch (e) {
      console.error('Error checking student deadlines:', e)
    }
  }

  /**
   * Start monitoring notifications
   */
  const startMonitoring = () => {
    if (checkInterval) return

    // Check immediately
    checkLowStock()
    checkStudentDeadlines()

    // Check every 30 seconds
    checkInterval = setInterval(() => {
      if (notificationsEnabled.value) {
        checkLowStock()
        checkStudentDeadlines()
      }
    }, 30000) // 30 seconds
  }

  /**
   * Stop monitoring notifications
   */
  const stopMonitoring = () => {
    if (checkInterval) {
      clearInterval(checkInterval)
      checkInterval = null
    }
  }

  /**
   * Enable notifications
   */
  const enableNotifications = () => {
    notificationsEnabled.value = true
  }

  /**
   * Disable notifications
   */
  const disableNotifications = () => {
    notificationsEnabled.value = false
  }

  /**
   * Show backup success notification
   */
  const notifyBackupSuccess = (moduleName, recordCount) => {
    success(`Backup successful: ${moduleName} - ${recordCount} records backed up`, 4000)
    
    // Add to navbar notifications
    addNotification({
      type: 'backup',
      title: 'Backup complete',
      subtitle: `${moduleName} - ${recordCount} records backed up`,
      timestamp: Date.now(),
      unread: true
    })
  }
  
  /**
   * Add notification to navbar
   */
  const addNotification = (notification) => {
    // Dispatch custom event to add notification
    window.dispatchEvent(new CustomEvent('add-notification', { detail: notification }))
  }

  return {
    startMonitoring,
    stopMonitoring,
    enableNotifications,
    disableNotifications,
    checkLowStock,
    checkStudentDeadlines,
    notifyBackupSuccess,
    notificationsEnabled
  }
}

