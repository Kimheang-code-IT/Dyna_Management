<template>
  <div class="flex gap-4 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
    <!-- Invoice Content -->
    <div class="flex-1 max-w-[700px] mx-auto bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 w-full" id="invoice-content">
      <!-- Header Section -->
      <div class="flex justify-between items-start mb-8">
        <!-- Left: Company Info -->
        <div>
          <div class="flex items-center gap-3 ">
            <img :src="logoImage" alt="Company Logo" class="h-12 w-auto object-contain" />
          </div>
        </div>

        <!-- Right: Invoice Title -->
        <div>
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white capitalize">{{ t('invoice') }}</h2>
        </div>
      </div>

      <hr class="border-gray-200 dark:border-gray-700 my-4">

      <!-- Invoice Info and Customer Info -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
        <!-- Invoice Info -->
        <div>
          <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
            {{ t('invoiceInfo') }}
          </h3>
          <div class="space-y-2.5">
            <div class="flex items-start gap-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('invoiceNo')
              }}:</span>
              <span class="text-sm text-gray-900 dark:text-white font-semibold">{{ invoiceNumber }}</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('date') }}:</span>
              <span class="text-sm text-gray-900 dark:text-white">{{ invoiceDate }}</span>
            </div>
          </div>
        </div>

        <!-- Customer Info -->
        <div>

          <div class="space-y-2.5">
            <div class="flex items-start gap-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('name') }}:</span>
              <span class="text-sm text-gray-900 dark:text-white">{{ customerInfo.name || t('defaultName') || 'N/A'
              }}</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('Phone Customer')
              }}:</span>
              <span class="text-sm text-gray-900 dark:text-white">{{ customerInfo.phone || t('defaultPhone') || 'N/A'
              }}</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('Phone saler') ||
                'Saler'
              }}:</span>
              <span class="text-sm text-gray-900 dark:text-white">099999999</span>
            </div>
            <div class="flex items-start gap-2">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('address') }}</span>
              <span class="text-sm text-gray-900 dark:text-white flex-1">{{ customerInfo.address || t('unknownAddress')
                ||
                'N/A' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Itemized List -->
      <div class="mb-8">
        <div class="bg-blue-600 text-white px-4 py-3 ">
          <div class="grid grid-cols-12 gap-4 text-sm font-semibold">
            <div class="col-span-1">{{ t('no') }}</div>
            <div class="col-span-5">{{ t('description') }}</div>
            <div class="col-span-2 text-center">{{ t('price') }}</div>
            <div class="col-span-2 text-center">{{ t('qty') }}</div>
            <div class="col-span-2 text-right">{{ t('total') }}</div>
          </div>
        </div>
        <div class="border border-gray-200 dark:border-gray-700 border-t-0 ">
          <div v-for="(item, index) in cartItems" :key="item.id"
            class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <div class="grid grid-cols-12 gap-4 text-sm">
              <div class="col-span-1 text-gray-700 dark:text-gray-300">{{ String(index + 1).padStart(2, '0') }}</div>
              <div class="col-span-5 text-gray-900 dark:text-white font-medium">{{ item.name }}</div>
              <div class="col-span-2 text-center text-gray-700 dark:text-gray-300">${{ item.price.toFixed(2) }}</div>
              <div class="col-span-2 text-center text-gray-700 dark:text-gray-300">{{ item.quantity }}</div>
              <div class="col-span-2 text-right text-gray-900 dark:text-white font-medium">${{ (item.price *
                item.quantity).toFixed(2) }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Terms & Conditions and Payment Summary -->
      <div class="grid grid-cols-2 gap-8 mb-8">
        <!-- Terms & Conditions -->
        <div>
          <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">{{
            t('termsAndConditions') }}</h3>
          <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {{ t('thankYouMessage') }}
          </p>
        </div>

        <!-- Payment Summary -->
        <div>
          <div class="space-y-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span class="text-gray-900 dark:text-white">${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400">Discount</span>
              <span class="text-gray-900 dark:text-white">${{ discountAmount.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-lg font-bold pt-2 border-t border-gray-300 dark:border-gray-600">
              <span class="text-gray-900 dark:text-white">{{ t('grandTotal') }}</span>
              <span class="text-gray-900 dark:text-white">${{ grandTotal.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-blue-600 text-white py-4 px-6 rounded-sm mt-8">
        <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
          <!-- Facebook -->
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>{{ schoolInfo.facebook || 'Your Facebook Page' }}</span>
          </div>

          <!-- Location -->
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{{ schoolInfo.location || 'Your School Address' }}</span>
          </div>

          <!-- Phone -->
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{{ schoolInfo.phone || '099999999' }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->


    <!-- Sticky Action Buttons Sidebar -->
    <div class="hidden lg:block w-32 flex-shrink-0">
      <div class="sticky top-4 space-y-3">
        <button @click="takeScreenshot"
          class="w-full px-6 py-3 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {{ t('screenshot') }}
        </button>
        <button @click="printInvoice"
          class="w-full px-6 py-3 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          {{ t('print') }}
        </button>
        <button @click="goBack"
          class="w-full px-6 py-3 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          {{ t('close') }}
        </button>
      </div>
    </div>

    <!-- Mobile Action Buttons (shown on small screens) -->
    <div class="lg:hidden fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <button @click="takeScreenshot"
        class="px-4 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
      <button @click="printInvoice"
        class="px-4 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      </button>
      <button @click="goBack"
        class="px-4 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { addHistory } from '../utils/history'
import html2canvas from 'html2canvas'
import logoImage from '../assets/logo.png'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { success, error } = useToast()

const cartItems = ref([])
const customerInfo = ref({
  name: '',
  email: '',
  phone: '',
  address: ''
})
const discount = ref(0)
const invoiceNumber = ref('')
const invoiceDate = ref('')
const schoolInfo = ref({
  facebook: 'Your Facebook Page',
  location: 'Your School Address',
  telegram: 'Your Telegram',
  phone: '099999999'
})

// Generate invoice number and date
const generateInvoiceNumber = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  return `ORD-${year}${month}${day}${hours}${minutes}${seconds}`
}

const formatDate = (date) => {
  const d = new Date(date)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const year = d.getFullYear()
  return `${month}/${day}/${year}`
}

onMounted(() => {
  // Get data from route params or query
  if (route.params.cartData) {
    try {
      const data = JSON.parse(decodeURIComponent(route.params.cartData))
      cartItems.value = data.cart || []
      customerInfo.value = data.customerInfo || {}
      discount.value = data.discount || 0
    } catch (e) {
      console.error('Error parsing cart data:', e)
    }
  }

  // Generate invoice number and date
  invoiceNumber.value = generateInvoiceNumber()
  invoiceDate.value = formatDate(new Date())
})

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

const discountAmount = computed(() => {
  return discount.value || 0
})

const grandTotal = computed(() => {
  return Math.max(0, subtotal.value - discountAmount.value)
})

const printInvoice = () => {
  // Log invoice print
  const itemsCount = cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  const productsList = cartItems.value.map(item => `${item.name} (x${item.quantity})`).join(', ')
  addHistory('print', {
    type: 'pos',
    itemName: `Invoice ${invoiceNumber.value}`,
    itemId: invoiceNumber.value,
    description: `Invoice printed - Invoice: ${invoiceNumber.value}, Items: ${itemsCount}, Total: $${grandTotal.value.toFixed(2)}`,
    user: 'Admin'
  })
  window.print()
}

const takeScreenshot = async () => {
  try {
    const invoiceElement = document.getElementById('invoice-content')
    if (!invoiceElement) {
      error(t('invoiceElementNotFound') || 'Invoice element not found')
      return
    }

    // Show loading state
    const loadingMessage = t('generatingScreenshot') || 'Generating screenshot...'

    // Generate screenshot
    const canvas = await html2canvas(invoiceElement, {
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: false
    })

    // Convert canvas to blob and download
    canvas.toBlob((blob) => {
      if (!blob) {
        error(t('screenshotFailed') || 'Failed to generate screenshot')
        return
      }

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = `invoice-${invoiceNumber.value}.png`
      link.href = url
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      success(t('screenshotSaved') || 'Screenshot saved successfully')
    }, 'image/png')
  } catch (err) {
    console.error('Error taking screenshot:', err)
    error(t('screenshotError') || 'Error generating screenshot. Please try again.')
  }
}

const goBack = () => {
  router.push('/pos')
}
</script>

<style scoped>
@media print {
  .max-w-7xl {
    max-width: 100%;
  }

  button {
    display: none !important;
  }

  #invoice-content {
    max-width: 100%;
    margin: 0 auto;
  }
}
</style>
