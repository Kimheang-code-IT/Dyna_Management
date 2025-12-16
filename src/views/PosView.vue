<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full capitalize', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-3">
      <!-- Left Panel: Product Listing -->
      <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-sm shadow px-3">
        <!-- Category Filters and Search -->
        <div class=" rounded-sm  p-3 mb-3 sticky top-0 z-10">
          <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
            <!-- Category Filters -->
            <div class="flex gap-2 overflow-x-auto max-w-full category-scroll"
              style="scrollbar-width: none; -ms-overflow-style: none;">
              <button v-for="cat in categoryFilters" :key="cat"
                @click="selectedCategory = cat === t('all') ? null : cat" :class="[
                  'px-4 py-2 rounded-sm font-medium transition-colors flex-shrink-0',
                  (selectedCategory === cat || (!selectedCategory && cat === t('all')))
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                ]">
                {{ cat }}
              </button>
            </div>

            <!-- Search Bar -->
            <div class="relative w-full sm:w-[300px]">
              <div class="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                <svg class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input v-model="searchQuery" type="text" :placeholder="t('searchProducts')"
                class="w-full pl-10 pr-10 py-2 h-[37px] border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400" />
              <button v-if="searchQuery" @click="searchQuery = ''"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                type="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[530px] overflow-y-auto">
          <!-- No Results Found -->
          <div v-if="filteredProducts.length === 0 && searchQuery"
            class="col-span-full flex flex-col items-center justify-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mt-3">{{ t('noResults') }}</p>
          </div>
          <!-- Product Cards -->
          <div v-for="product in filteredProducts" :key="product.id"
            class="bg-white dark:bg-gray-800 rounded-sm shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
            <!-- Product Image -->
            <div
              class="w-full h-36 bg-blue-50 dark:bg-blue-900 rounded-t-lg flex items-center justify-center relative group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <!-- Search Icon Overlay -->
              <button @click="showProductDetails(product)"
                class="absolute top-2 right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-50 dark:hover:bg-gray-700 z-10"
                :title="t('viewDetails')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <!-- Product Info -->
            <div class="p-4">
              <h3 class="font-bold text-gray-900 dark:text-white text-sm md:text-xs mb-1 truncate"
                :title="product.name">{{ product.name }}</h3>
              <p class="text-xs md:text-[10px] text-gray-500 dark:text-gray-400 mb-2">{{ t('sku') }}: {{ product.sku }}
              </p>
              <div class="flex items-center justify-between mb-4">
                <p class="text-lg md:text-base font-bold text-gray-900 dark:text-white">${{ product.price.toFixed(2) }}
                </p>
                <p class="text-sm md:text-[10px] text-gray-600 dark:text-gray-400">{{ product.inStock }} {{ t('inStock')
                }}</p>
              </div>

              <!-- Add to Cart Button -->
              <button @click="addToCart(product)"
                class="w-full px-3 py-2.5 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium text-sm md:text-xs flex items-center justify-center gap-2 h-[37px]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-3 md:w-3" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
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
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2 capitalize">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {{ t('cart') }}
            </h2>
            <button v-if="cart.length > 0" @click="showCustomerInfoDialog = true"
              class="text-sm text-blue-400 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-md flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {{ t('customerInfo') }}
            </button>
            <button v-if="cart.length > 0" @click="showClearCartDialog = true"
              class="text-sm text-red-400 dark:text-red-500 hover:text-red-600 dark:hover:text-red-400 font-medium bg-red-100 px-2 py-1 rounded-md flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              {{ t('clearAll') }}
            </button>
          </div>

          <!-- Cart Items -->
          <div class="space-y-2 mb-3  overflow-y-auto h-[300px]">
            <div v-for="item in cart" :key="item.id"
              class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-sm">
              <div class="flex-1">
                <p class="font-medium text-sm md:text-xs text-gray-900 dark:text-white">{{ item.name }}</p>
                <p class="text-xs md:text-[10px] text-gray-500 dark:text-gray-400">${{ item.price.toFixed(2) }}</p>
              </div>
              <div class="flex items-center gap-2">
                <button @click="decreaseQuantity(item.id)"
                  class="w-7 h-7 md:w-6 md:h-6 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white transition-colors text-sm md:text-xs">
                  -
                </button>
                <span class="w-3 text-center text-sm md:text-xs font-medium text-gray-900 dark:text-white">{{
                  item.quantity }}</span>
                <button @click="increaseQuantity(item.id)"
                  class="w-7 h-7 md:w-6 md:h-6 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-white transition-colors text-sm md:text-xs">
                  +
                </button>
              </div>
              <div class="text-right min-w-[70px]">
                <p class="font-medium text-sm md:text-xs text-gray-900 dark:text-white">${{ (item.price *
                  item.quantity).toFixed(2) }}</p>
              </div>
              <button @click="removeFromCart(item.id)"
                class="text-red-400 dark:text-red-500 hover:text-red-600 dark:hover:text-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <div v-if="cart.length === 0"
              class="text-center text-gray-500 dark:text-gray-400 text-sm md:text-xs py-8 flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 md:h-10 md:w-10 text-gray-400 dark:text-gray-500"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p class="text-gray-500 dark:text-gray-400">{{ t('cartIsEmpty') }}</p>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="border-t pt-3 space-y-2 mb-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400">{{ t('items') }}</span>
              <span class="text-gray-900 dark:text-white font-medium">{{ totalItems }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600 dark:text-gray-400">{{ t('subtotal') }}</span>
              <span class="text-gray-900 dark:text-white font-medium">${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-sm items-center">
              <span class="text-gray-600 dark:text-gray-400">{{ t('discount') }}</span>
              <div class="flex items-center gap-2">
                <input v-model.number="discount" type="number" min="0"
                  class="w-16 px-3 py-2  h-[37px] border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white" />
                <span class="text-gray-900 dark:text-white font-medium">${{ discountAmount.toFixed(2) }}</span>
              </div>
            </div>
            <div class="flex justify-between text-lg font-bold pt-2 border-t border-gray-200 dark:border-gray-700">
              <span class="text-gray-900 dark:text-white">{{ t('total') }}</span>
              <span class="text-gray-900 dark:text-white">${{ total.toFixed(2) }}</span>
            </div>
          </div>

          <!-- Checkout Button -->
          <button @click="handleCheckout" :disabled="cart.length === 0"
            class="w-full px-4 py-3 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ t('checkout') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Product Details Modal -->
    <Transition name="modal">
      <div v-if="showDetailsModal && selectedProduct"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        @click.self="closeProductDetails">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <!-- Modal Header -->
          <div
            class="sticky top-0 bg-white dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between z-10">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white capitalize">{{ t('productDetails') }}
            </h2>
            <button @click="closeProductDetails"
              class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal Content -->
          <div class="px-6 py-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Left Column: Product Name, SKU, and Image -->
              <div class="space-y-4">
                <!-- Product Name and SKU -->
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1 capitalize">{{ selectedProduct.name }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('sku') }}: {{ selectedProduct.sku }}</p>
                </div>

                <!-- Product Image -->
                <div class="w-full h-64 bg-blue-50 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-blue-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>

              <!-- Right Column: All Product Details -->
              <div class="space-y-3">
                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{{ t('category') }}</p>
                  <p class="text-base text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md p-2">{{
                    selectedProduct.category }}</p>
                </div>

                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{{ t('price') }}</p>
                  <p
                    class="text-2xl font-bold text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-700 rounded-md p-2">
                    ${{ selectedProduct.price.toFixed(2) }}</p>
                </div>

                <div>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{{ t('inStock') }}</p>
                  <p class="text-base text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md p-2">{{
                    selectedProduct.inStock }} {{ t('items') }}</p>
                </div>

                <div v-if="fullProductData">
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{{ t('totalStock') }}</p>
                  <p class="text-base text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md p-2">{{
                    fullProductData.totalStock }} {{ t('items') }}</p>
                </div>

                <div v-if="fullProductData">
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{{ t('status') }}</p>
                  <span class="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 rounded-md p-2"
                    :class="fullProductData.status === 'Active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'">
                    {{ fullProductData.status === 'Active' ? t('active') : fullProductData.status }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div
            class="sticky bottom-0 bg-gray-50 dark:bg-gray-700 px-6 py-4 border-t border-gray-200 dark:border-gray-600 flex justify-end gap-3">
            <button @click="closeProductDetails"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors font-medium">
              {{ t('close') }}
            </button>
            <button @click="addToCartFromDetails"
              class="px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium h-[37px]">
              {{ t('addToCart') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Customer Information Dialog -->
    <Transition name="modal">
      <div v-if="showCustomerInfoDialog"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        @click.self="showCustomerInfoDialog = false">
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl max-w-md w-full">
          <!-- Dialog Header -->
          <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('customerInfo') }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('enterCustomerDetails') }}</p>
              </div>
            </div>
          </div>

          <!-- Dialog Body -->
          <div class="px-6 py-4 space-y-4">
            <!-- Tabs -->
            <div class="flex gap-2 flex-wrap">
              <button
                @click="activeCustomerTab = 'customer'"
                :class="[
                  'px-3 py-2 text-sm font-medium rounded-sm border transition-colors',
                  activeCustomerTab === 'customer'
                    ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-400 dark:border-blue-600 text-blue-700 dark:text-blue-200'
                    : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200'
                ]"
              >
                {{ t('customer') }}
              </button>
              <button
                @click="activeCustomerTab = 'student'"
                :class="[
                  'px-3 py-2 text-sm font-medium rounded-sm border transition-colors',
                  activeCustomerTab === 'student'
                    ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-400 dark:border-blue-600 text-blue-700 dark:text-blue-200'
                    : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200'
                ]"
              >
                {{ t('student') }}
              </button>
              <button
                @click="setWalkInCustomer"
                class="px-3 py-2 text-sm font-medium rounded-sm border transition-colors bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
              >
                {{ t('walkIn') }}
              </button>
            </div>

            <!-- Student Tab -->
            <div v-if="activeCustomerTab === 'student'" class="space-y-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('search') }}
                </label>
                <input
                  v-model="studentSearchQuery"
                  type="text"
                  :placeholder="t('searchByNamePhoneId')"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]"
                />
              </div>

              <div class="max-h-40 overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm divide-y divide-gray-200 dark:divide-gray-700">
                <div
                  v-for="student in filteredStudentsList"
                  :key="student.id"
                  class="p-2 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                  @click="selectStudent(student)"
                >
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">
                      {{ student.nameEnglish || student.nameKhmer || student.name || student.id }}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      {{ student.phone || student.contact || '-' }}
                    </p>
                  </div>
                  <span class="text-[11px] px-2 py-1 rounded-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200">
                    {{ t('select') }}
                  </span>
                </div>
              </div>

              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ t('selectStudentHint') }}
              </p>
            </div>

            <!-- Customer Tab -->
            <div v-else class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('name') }} <span class="text-red-500">*</span>
              </label>
              <input v-model="customerInfo.name" type="text" :placeholder="t('enterName')"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('phone') }} <span class="text-red-500">*</span>
              </label>
              <input v-model="customerInfo.phone" type="tel" :placeholder="t('enterPhone')"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('address') }}
              </label>
              <textarea v-model="customerInfo.address" rows="3"
                :placeholder="t('enterAddress')"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 resize-y"></textarea>
            </div>
            </div>
          </div>

          <!-- Dialog Footer -->
          <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
            <button @click="showCustomerInfoDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('cancel') }}
            </button>
            <button @click="saveCustomerInfo"
              class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
              {{ t('save') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Clear Cart Confirmation Dialog -->
    <Transition name="modal">
      <div v-if="showClearCartDialog"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        @click.self="showClearCartDialog = false">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full">
          <!-- Dialog Header -->
          <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('clearCart') }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('clearCartConfirm') }}</p>
              </div>
            </div>
          </div>

          <!-- Dialog Footer -->
          <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-3">
            <button @click="showClearCartDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors font-medium">
              {{ t('cancel') }}
            </button>
            <button @click="confirmClearCart"
              class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium">
              {{ t('clearAll') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Success Message Toast -->
    <Transition name="toast">
      <div v-if="showSuccessMessage"
        class="fixed top-4 right-4 bg-green-500 text-white rounded-sm shadow-lg p-4 flex items-center gap-3 z-50 min-w-[300px]">
        <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="flex-1">
          <p class="font-semibold text-white">{{ successMessageTitle }}</p>
          <p class="text-sm text-white">{{ successMessageText }}</p>
        </div>
        <button @click="showSuccessMessage = false" class="text-white hover:text-green-100 transition-colors flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>

    <!-- Error Message Toast -->
    <Transition name="toast">
      <div v-if="showErrorMessage"
        class="fixed top-4 right-4 bg-red-500 text-white rounded-sm shadow-lg p-4 flex items-center gap-3 z-50 min-w-[300px]">
        <div class="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div class="flex-1">
          <p class="font-semibold text-white">{{ errorMessageTitle }}</p>
          <p class="text-sm text-white">{{ errorMessageText }}</p>
        </div>
        <button @click="showErrorMessage = false" class="text-white hover:text-red-100 transition-colors flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'
import { textContains } from '../utils/search'
import { addHistory } from '../utils/history'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

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
const showDetailsModal = ref(false)
const selectedProduct = ref(null)
const fullProductData = ref(null)
const showClearCartDialog = ref(false)
const showCustomerInfoDialog = ref(false)
const customerInfo = ref({
  name: '',
  phone: '',
  address: ''
})

// Success/Error message state
const showSuccessMessage = ref(false)
const successMessageTitle = ref('')
const successMessageText = ref('')
const showErrorMessage = ref(false)
const errorMessageTitle = ref('')
const errorMessageText = ref('')

// Customer tabs (customer / student)
const activeCustomerTab = ref('customer')
import studentsData from '../data/students.json'
const studentSearchQuery = ref('')
const selectedStudentId = ref('')

const filteredStudentsList = computed(() => {
  if (!studentSearchQuery.value || !studentSearchQuery.value.trim()) return studentsData
  return studentsData.filter(s =>
    textContains(s.nameEnglish || '', studentSearchQuery.value) ||
    textContains(s.nameKhmer || '', studentSearchQuery.value) ||
    textContains(s.phone || '', studentSearchQuery.value) ||
    textContains(s.id || '', studentSearchQuery.value)
  )
})

const selectStudent = (student) => {
  selectedStudentId.value = student.id
  customerInfo.value.name = student.nameEnglish || student.nameKhmer || student.name || ''
  customerInfo.value.phone = student.phone || student.contact || ''
  customerInfo.value.address = student.address || student.province || ''
  activeCustomerTab.value = 'customer' // switch back to customer tab after selection
  showSuccessMessage.value = true
  successMessageTitle.value = t('customerInfoSaved') || 'Customer Info Saved'
  successMessageText.value = t('customerInfoSaved') || 'Customer information has been saved successfully!'
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}

const setWalkInCustomer = () => {
  customerInfo.value.name = t('walkInCustomer')
  customerInfo.value.phone = '+00000000'
  customerInfo.value.address = 'no'
  activeCustomerTab.value = 'customer'
  showSuccessMessage.value = true
  successMessageTitle.value = t('customerInfoSaved') || 'Customer Info Saved'
  successMessageText.value = t('customerInfoSaved') || 'Customer information has been saved successfully!'
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}

const filteredProducts = computed(() => {
  let filtered = products.value

  if (selectedCategory.value && selectedCategory.value !== t('all')) {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  } else if (!selectedCategory.value) {
    // Show all products when "All" is selected or no category selected
  }

  if (searchQuery.value) {
    filtered = filtered.filter(p =>
      textContains(p.name, searchQuery.value) ||
      textContains(p.sku, searchQuery.value)
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
  cart.value = []
}

const confirmClearCart = () => {
  clearCart()
  showClearCartDialog.value = false
  showSuccessMessage.value = true
  successMessageTitle.value = t('cartCleared') || 'Cart Cleared'
  successMessageText.value = t('cartClearedSuccess') || 'Cart has been cleared successfully!'
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}

// Toast functions - now using composable (already defined above)

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

const saveCustomerInfo = () => {
  if (!customerInfo.value.name || !customerInfo.value.phone) {
    showErrorMessage.value = true
    errorMessageTitle.value = t('error') || 'Error'
    errorMessageText.value = t('pleaseFillRequiredFields') || 'Please fill in all required fields'
    setTimeout(() => {
      showErrorMessage.value = false
    }, 3000)
    return
  }
  showCustomerInfoDialog.value = false
  showSuccessMessage.value = true
  successMessageTitle.value = t('customerInfoSaved') || 'Customer Info Saved'
  successMessageText.value = t('customerInfoSaved') || 'Customer information has been saved successfully!'
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}

// Check if customer info is complete
const isCustomerInfoComplete = computed(() => {
  return customerInfo.value.name && customerInfo.value.phone
})

const handleCheckout = () => {
  // Validate stock availability before checkout
  const insufficient = cart.value.find(item => {
    const product = products.value.find(p => p.id === item.id)
    return !product || item.quantity > product.inStock
  })

  if (insufficient) {
    showErrorMessage.value = true
    errorMessageTitle.value = t('insufficientStock') || 'Insufficient Stock'
    errorMessageText.value = `${insufficient.name} (${t('inStock')}: ${products.value.find(p => p.id === insufficient.id)?.inStock || 0})`
    setTimeout(() => {
      showErrorMessage.value = false
    }, 3000)
    return
  }

  if (cart.value.length === 0) {
    showErrorMessage.value = true
    errorMessageTitle.value = t('error') || 'Error'
    errorMessageText.value = t('cartIsEmptyAlert') || 'Cart is empty. Please add items to cart.'
    setTimeout(() => {
      showErrorMessage.value = false
    }, 3000)
    return
  }

  // Check if customer info is complete
  if (!customerInfo.value.name || !customerInfo.value.phone) {
    // Show customer info dialog to complete the information
    showCustomerInfoDialog.value = true
    showErrorMessage.value = true
    errorMessageTitle.value = t('error') || 'Error'
    errorMessageText.value = t('pleaseCompleteCustomerInfo') || 'Please complete customer information'
    setTimeout(() => {
      showErrorMessage.value = false
    }, 3000)
    return
  }

  // Prepare data for invoice
  const checkoutData = {
    cart: cart.value,
    discount: discount.value,
    total: total.value,
    customerInfo: customerInfo.value
  }

  // Deduct stock and update sold counts locally
  cart.value.forEach(item => {
    const index = products.value.findIndex(p => p.id === item.id)
    if (index !== -1) {
      const product = { ...products.value[index] }
      product.inStock = Math.max(0, product.inStock - item.quantity)
      product.sold = (product.sold || 0) + item.quantity
      products.value.splice(index, 1, product)
    }
  })

  // Generate unique transaction ID and invoice number
  const transactionId = `POS-${Date.now()}`
  const invoiceNo = `INV-POS-${String(Date.now()).slice(-8)}`
  const now = new Date()
  const date = now.toISOString().split('T')[0]
  const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })

  // Create transaction record
  const transaction = {
    id: transactionId,
    invoiceNo: invoiceNo,
    date: date,
    time: time,
    customerInfo: { ...customerInfo.value },
    cart: cart.value.map(item => ({ ...item })),
    total: total.value,
    discount: discount.value,
    created: now.toISOString()
  }

  // Save transaction to permanent storage
  const existingTransactions = JSON.parse(localStorage.getItem('pos_transactions_data') || '[]')
  existingTransactions.push(transaction)
  localStorage.setItem('pos_transactions_data', JSON.stringify(existingTransactions))

  // Save checkout data for income generation
  localStorage.setItem('last_checkout_data', JSON.stringify(checkoutData))
  
  // Dispatch event for income generation
  window.dispatchEvent(new CustomEvent('checkoutCompleted', { detail: checkoutData }))
  
  // Dispatch event for transaction saved
  window.dispatchEvent(new CustomEvent('posTransactionSaved', { detail: transaction }))

  // Add history entry for checkout
  addHistory('checkout', {
    type: 'pos',
    itemName: `POS Sale to ${customerInfo.value.name || 'Guest'}`,
    itemId: transactionId,
    description: `Checkout completed - Invoice: ${invoiceNo}, Total: $${total.value.toFixed(2)}, Items: ${cart.value.length}`,
    user: 'Admin'
  })

  // Clear cart and notify
  cart.value = []
  showSuccessMessage.value = true
  successMessageTitle.value = t('checkoutSuccess') || 'Checkout Successful'
  successMessageText.value = t('checkoutSuccess') || 'Checkout has been completed successfully!'
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)

  // Encode data for URL
  const encodedData = encodeURIComponent(JSON.stringify(checkoutData))

  // Navigate to invoice page using Vue Router
  router.push({
    name: 'Invoice',
    params: { cartData: encodedData }
  })
}

// Show product details
const showProductDetails = (product) => {
  selectedProduct.value = product
  // Get full product data from original productsData
  fullProductData.value = productsData.find(p => p.id === product.id) || product
  showDetailsModal.value = true
}

// Close product details
const closeProductDetails = () => {
  showDetailsModal.value = false
  selectedProduct.value = null
  fullProductData.value = null
}

// Add to cart from details modal
const addToCartFromDetails = () => {
  if (selectedProduct.value) {
    addToCart(selectedProduct.value)
    closeProductDetails()
  }
}
</script>

<style scoped>
/* Modal Animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.95);
  opacity: 0;
}

/* Toast Animation */
.toast-enter-active {
  transition: all 0.3s ease-out;
}

.toast-leave-active {
  transition: all 0.3s ease-in;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.category-scroll {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
}

.category-scroll::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}
</style>
