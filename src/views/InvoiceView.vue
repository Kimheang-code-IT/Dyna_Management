<template>
  <div class="max-w-[700px] mx-auto bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 w-full">
    <!-- Header Section -->
    <div class="flex justify-between items-start mb-8">
      <!-- Left: Company Info -->
      <div>
        <div class="flex items-center gap-3 ">
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-sm flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white">{{ t('companyName') }}</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">{{ t('companyTagline') }}</p>
          </div>
        </div>
      </div>
      
      <!-- Right: Invoice Title -->
      <div>
        <h2 class="text-3xl font-bold text-gray-800 dark:text-white">{{ t('invoice') }}</h2>
      </div>
    </div>

    <hr class="border-gray-200 dark:border-gray-700 my-4">
    
    <!-- Invoice Info and Customer Info -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-[150px] items-end mb-6 sm:mb-8">
      <!-- Invoice Info -->
      <div>
        <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">{{ t('invoiceInfo') }}</h3>
        <div class="space-y-2">
          <p class="text-sm text-gray-700 dark:text-gray-300"><span class="font-medium">{{ t('invoiceNo') }}</span> {{ invoiceNumber }}</p>
          <p class="text-sm text-gray-700 dark:text-gray-300"><span class="font-medium">{{ t('date') }}:</span> {{ invoiceDate }}</p>
        </div>
      </div>
      
      <!-- Customer Info -->
      <div>
        <div class="space-y-2 ">
          <p class="text-sm text-gray-700 dark:text-gray-300"><span class="font-medium">{{ t('email') }}</span> {{ customerInfo.email || t('defaultEmail') }}</p>
          <p class="text-sm text-gray-700 dark:text-gray-300"><span class="font-medium">{{ t('phone') }}</span> {{ customerInfo.phone || t('defaultPhone') }}</p>
          <p class="text-sm text-gray-700 dark:text-gray-300"><span class="font-medium">{{ t('address') }}</span> {{ customerInfo.address || t('unknownAddress') }}</p>
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
        <div
          v-for="(item, index) in cartItems"
          :key="item.id"
          class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
        >
          <div class="grid grid-cols-12 gap-4 text-sm">
            <div class="col-span-1 text-gray-700 dark:text-gray-300">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="col-span-5 text-gray-900 dark:text-white font-medium">{{ item.name }}</div>
            <div class="col-span-2 text-center text-gray-700 dark:text-gray-300">${{ item.price.toFixed(2) }}</div>
            <div class="col-span-2 text-center text-gray-700 dark:text-gray-300">{{ item.quantity }}</div>
            <div class="col-span-2 text-right text-gray-900 dark:text-white font-medium">${{ (item.price * item.quantity).toFixed(2) }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Terms & Conditions and Payment Summary -->
    <div class="grid grid-cols-2 gap-8 mb-8">
      <!-- Terms & Conditions -->
      <div>
        <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">{{ t('termsAndConditions') }}</h3>
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
    
   
    
    <!-- Action Buttons -->
    <div class="mt-8 flex gap-4 justify-end">
      <button
        @click="takeScreenshot"
        class="px-6 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {{ t('screenshot') }}
      </button>
      <button
        @click="printInvoice"
        class="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
        {{ t('print') }}
      </button>
      <button
        @click="goBack"
        class="px-6 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        {{ t('close') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { addHistory } from '../utils/history'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

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
  // Log sale completion when invoice is printed
  const itemsCount = cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  const productsList = cartItems.value.map(item => `${item.name} (x${item.quantity})`).join(', ')
  addHistory('add', {
    type: 'pos',
    itemName: invoiceNumber.value,
    itemId: invoiceNumber.value,
    description: `Sale completed - Invoice: ${invoiceNumber.value}, Items: ${itemsCount}, Total: $${grandTotal.value.toFixed(2)}, Products: ${productsList}`,
    user: 'Admin'
  })
  window.print()
}

const takeScreenshot = () => {
  // Using html2canvas library would be ideal, but for now we'll use a simple approach
  // You can install html2canvas: npm install html2canvas
  alert('Screenshot feature - You can implement using html2canvas library')
  // Example implementation with html2canvas:
  // import html2canvas from 'html2canvas'
  // html2canvas(document.querySelector('.max-w-4xl')).then(canvas => {
  //   const link = document.createElement('a')
  //   link.download = `invoice-${invoiceNumber.value}.png`
  //   link.href = canvas.toDataURL()
  //   link.click()
  // })
}

const goBack = () => {
  router.push('/pos')
}
</script>

<style scoped>
@media print {
  .max-w-4xl {
    max-width: 100%;
  }
  
  button {
    display: none;
  }
}
</style>

