<template>
  <div :class="['mx-auto transition-all duration-300', isSidebarCollapsed ? 'max-w-full px-2' : 'max-w-7xl']">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <!-- Left Panel: Product Listing -->
      <div class="lg:col-span-2">
        <!-- Category Filters and Search -->
        <div class=" rounded-sm  p-3 mb-3 sticky top-0 z-10">
          <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
            <!-- Category Filters -->
            <div class="flex gap-2 overflow-x-auto max-w-full category-scroll" style="scrollbar-width: none; -ms-overflow-style: none;">
              <button
                v-for="cat in categoryFilters"
                :key="cat"
                @click="selectedCategory = cat === t('all') ? null : cat"
                :class="[
                  'px-4 py-2 rounded-sm font-medium transition-colors flex-shrink-0',
                  (selectedCategory === cat || (!selectedCategory && cat === t('all')))
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                ]"
              >
                {{ cat }}
              </button>
            </div>
            
            <!-- Search Bar -->
            <div class="relative w-[300px]">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                v-model="searchQuery"
                type="text"
                :placeholder="t('searchProducts')"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        
        <!-- Product Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[530px] overflow-y-auto">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white dark:bg-gray-800 rounded-sm shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
          >
            <!-- Product Image -->
            <div class="w-full h-48 bg-blue-50 dark:bg-blue-900 rounded-t-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            
            <!-- Product Info -->
            <div class="p-4">
              <h3 class="font-bold text-gray-900 dark:text-white text-base mb-1">{{ product.name }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">{{ t('sku') }}: {{ product.sku }}</p>
              <p class="text-lg font-bold text-gray-900 dark:text-white mb-1">${{ product.price.toFixed(2) }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400 dark:text-gray-500 dark:text-gray-400 mb-4">{{ product.inStock }} {{ t('inStock') }}</p>
              
              <!-- Add to Cart Button -->
              <button
                @click="addToCart(product)"
                class="w-full px-4 py-2.5 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                {{ t('addToCart') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Panel: Shopping Cart -->
      <div class="lg:col-span-1">
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3 sticky top-0 ">
          <!-- Cart Header -->
          <div class="flex items-center justify-between mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {{ t('cart') }}
            </h2>
            <button
              v-if="cart.length > 0"
              @click="clearCart"
              class="text-sm text-red-400 dark:text-red-500 hover:text-red-600 dark:hover:text-red-400 font-medium bg-red-100 px-2 py-1 rounded-md flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              {{ t('clearAll') }}
            </button>
          </div>
          
          <!-- Cart Items -->
          <div class="space-y-2 mb-3  overflow-y-auto h-[300px]">
            <div
              v-for="item in cart"
              :key="item.id"
              class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-sm"
            >
              <div class="flex-1">
                <p class="font-medium text-[13px] text-gray-900 dark:text-white text-sm">{{ item.name }}</p>
                <p class="text-xs text-[13px] text-gray-500 dark:text-gray-400">${{ item.price.toFixed(2) }}</p>
              </div>
              <div class="flex items-center gap-2">
                <button
                  @click="decreaseQuantity(item.id)"
                  class="w-7 h-7 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  -
                </button>
                <span class="w-3 text-center text-[13px] text-sm font-medium">{{ item.quantity }}</span>
                <button
                  @click="increaseQuantity(item.id)"
                  class="w-7 h-7 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  +
                </button>
              </div>
              <div class="text-right min-w-[70px]">
                <p class="font-medium text-[14px] text-gray-900 dark:text-white">${{ (item.price * item.quantity).toFixed(2) }}</p>
              </div>
              <button
                @click="removeFromCart(item.id)"
                class="text-red-400 dark:text-red-500 hover:text-red-600 dark:hover:text-red-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <div v-if="cart.length === 0" class="text-center text-gray-500 dark:text-gray-400 text-sm py-8 flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p>{{ t('cartIsEmpty') }}</p>
            </div>
          </div>
          
          <!-- Order Summary -->
          <div class="border-t pt-3 space-y-2 mb-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400 dark:text-gray-500 dark:text-gray-400">{{ t('items') }}</span>
              <span class="text-gray-900 dark:text-white font-medium">{{ totalItems }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400 dark:text-gray-500 dark:text-gray-400">{{ t('subtotal') }}</span>
              <span class="text-gray-900 dark:text-white font-medium">${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-sm items-center">
              <span class="text-gray-600 dark:text-gray-400 dark:text-gray-500 dark:text-gray-400">{{ t('discount') }}</span>
              <div class="flex items-center gap-2">
                <input
                  v-model.number="discount"
                  type="number"
                  min="0"
                  class="w-16 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm"
                />
                <span class="text-gray-900 dark:text-white font-medium">${{ discountAmount.toFixed(2) }}</span>
              </div>
            </div>
            <div class="flex justify-between text-lg font-bold pt-2 border-t">
              <span>{{ t('total') }}</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>
          </div>
          
          <!-- Checkout Button -->
          <button
            @click="handleCheckout"
            :disabled="cart.length === 0"
            class="w-full px-4 py-3 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ t('checkout') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()

const router = useRouter()
import productsData from '../data/products.json'

// Load products from JSON file and map to POS format
const products = ref(productsData.map(p => ({
  id: p.id,
  name: p.name,
  sku: p.sku,
  category: p.category,
  price: p.price,
  inStock: p.inStock
})))

// Get unique categories from products
const categoryFilters = computed(() => {
  const unique = new Set(products.value.map(p => p.category))
  return [t('all'), ...Array.from(unique).sort()]
})

const selectedCategory = ref(null)
const searchQuery = ref('')
const cart = ref([])
const discount = ref(0)

const filteredProducts = computed(() => {
  let filtered = products.value

  if (selectedCategory.value && selectedCategory.value !== t('all')) {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  } else if (!selectedCategory.value) {
    // Show all products when "All" is selected or no category selected
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.sku.toLowerCase().includes(query)
    )
  }

  return filtered
})

const getCartButtonText = (productId) => {
  const item = cart.value.find(i => i.id === productId)
  if (item) {
    return `${t('addMore')} (${t('inCart')}: ${item.quantity})`
  }
  return t('addToCart')
}

const addToCart = (product) => {
  const existingItem = cart.value.find(item => item.id === product.id)
  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.value.push({
      ...product,
      quantity: 1
    })
  }
}

const removeFromCart = (productId) => {
  const index = cart.value.findIndex(item => item.id === productId)
  if (index !== -1) {
    cart.value.splice(index, 1)
  }
}

const increaseQuantity = (productId) => {
  const item = cart.value.find(i => i.id === productId)
  if (item) {
    item.quantity++
  }
}

const decreaseQuantity = (productId) => {
  const item = cart.value.find(i => i.id === productId)
  if (item && item.quantity > 1) {
    item.quantity--
  } else if (item) {
    removeFromCart(productId)
  }
}

const clearCart = () => {
  if (confirm(t('clearCartConfirm'))) {
    cart.value = []
  }
}

const totalItems = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.quantity, 0)
})

const subtotal = computed(() => {
  return cart.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

const discountAmount = computed(() => {
  return discount.value || 0
})

const total = computed(() => {
  return Math.max(0, subtotal.value - discountAmount.value)
})

const handleCheckout = () => {
  if (cart.value.length === 0) {
    alert(t('cartIsEmptyAlert'))
    return
  }

  // Prepare data for invoice
  const checkoutData = {
    cart: cart.value,
    discount: discount.value,
    total: total.value
  }

  // Encode data for URL
  const encodedData = encodeURIComponent(JSON.stringify(checkoutData))

  // Navigate to invoice page using Vue Router
  router.push({
    name: 'Invoice',
    params: { cartData: encodedData }
  })
}
</script>

<style scoped>
.category-scroll {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.category-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
