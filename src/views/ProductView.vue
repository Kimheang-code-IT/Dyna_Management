<template>
  <div :class="['mx-auto transition-all duration-300', isSidebarCollapsed ? 'max-w-full px-2' : 'max-w-7xl']">
    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
      <!-- Total Products Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('totalProducts') }}</h3>
            <p class="text-3xl font-bold text-gray-800 dark:text-white">{{ totalProducts }}</p>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Stock Units Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('totalStockUnits') }}</h3>
            <p class="text-3xl font-bold text-gray-800 dark:text-white">{{ totalStockUnits }}</p>
            <p class="text-xs text-red-600 dark:text-red-400 mt-1">{{ t('lowStockItems') }} {{ lowStockCount }}</p>
          </div>
          <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Categories Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('categories') }}</h3>
            <p class="text-3xl font-bold text-gray-800 dark:text-white">{{ totalCategories }}</p>
          </div>
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Top Category Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('topCategory') }}</h3>
            <p class="text-xl font-bold text-gray-800 dark:text-white">{{ topCategory.name }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ t('stockUnits') }} {{ topCategory.stock }}</p>
          </div>
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
   
    
    
    <!-- Product Table -->
    <div class="bg-white dark:bg-gray-700 dark:bg-gray-800 rounded-sm shadow p-3">
      <div class="p-0 mb-3">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div class="relative w-[400px]">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400 dark:text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="t('search')"
            class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div class="flex items-center gap-4">
          <div class="relative">
            <select
              v-model="selectedCategory"
              class="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-sm px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">{{ t('categories') }}</option>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400 dark:text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <button
            @click="openAddDrawer"
            class="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            {{ t('addProduct') }}
          </button>
        </div>
      </div>
    </div>
      <!-- Scrollable table container with sticky header -->
      <div class="max-h-[500px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm">
        <table class="w-full">
          <!-- Sticky Header -->
          <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
            <tr>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b">{{ t('no') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b">{{ t('products') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b">{{ t('category') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b">{{ t('price') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b">{{ t('totalStock') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b">{{ t('inStock') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b">{{ t('added') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b">{{ t('sold') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b">{{ t('damaged') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b">{{ t('status') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b"></th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
            <tr
              v-for="(product, index) in filteredProducts"
              :key="product.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-700 transition-colors"
            >
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{{ index + 1 }}</td>
              <td class="px-4 py-3 text-sm">
                <div class="flex items-center gap-2">
                  <div :class="['w-10 h-10 rounded flex items-center justify-center overflow-hidden flex-shrink-0 relative', (!product.image || hasImageFailed(product.id)) ? 'border border-gray-300 dark:border-gray-600 bg-blue-100' : '']">
                    <img 
                      v-if="product.image && !hasImageFailed(product.id)" 
                      :src="product.image" 
                      :alt="product.name"
                      class="w-full h-full object-cover"
                      @error="handleProductImageError($event, product.id)"
                    />
                    <svg 
                      v-if="!product.image || hasImageFailed(product.id)"
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5 text-blue-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">{{ product.name }}</div>
                    <div class="text-xs text-gray-500 dark:text-gray-400">{{ t('sku') }}: {{ product.sku }}</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium rounded-full"
                      :class="getCategoryColorClass(product.category)">
                  {{ product.category }}
                </span>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">${{ product.price.toFixed(2) }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{{ product.totalStock }} {{ t('items') }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-sm">
                <div class="flex items-center gap-1">
                  <span>{{ product.inStock }} {{ t('items') }}</span>
                  <span :class="product.stockStatus === 'Healthy' ? 'text-green-600' : 'text-red-600 dark:text-red-400'"
                        class="text-xs font-medium">
                    {{ product.stockStatus === 'Healthy' ? t('healthy') : t('low') }}
                  </span>
                  <svg v-if="product.stockStatus === 'Low'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-green-600 font-medium">
                <button
                  @click="openAddStockDrawer(product)"
                  class="hover:underline cursor-pointer"
                  :title="t('addStock')"
                >
                  +{{ product.added }}
                </button>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{{ product.sold }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                <button
                  @click="openAddDamagedDrawer(product)"
                  class="hover:underline cursor-pointer text-red-600 dark:text-red-400"
                  :title="t('addDamaged')"
                >
                  {{ product.damaged }}
                </button>
              </td>
              <td class="px-4 py-3 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium rounded-full"
                      :class="product.status === 'Active' ? 'bg-green-100 dark:bg-green-900 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                  {{ product.status === 'Active' ? t('active') : product.status }}
                </span>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-sm font-medium">
                <div class="relative">
                  <button
                    @click="toggleActionMenu(product.id)"
                    class="text-gray-400 dark:text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 dark:text-gray-400 dark:text-gray-500 dark:text-gray-400 transition-colors"
                    title="Actions"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </button>
                  
                  <!-- Dropdown Menu -->
                  <div
                    v-if="activeActionMenu === product.id"
                    class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
                  >
                    <button
                      @click="handleEdit(product)"
                      class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </button>
                    <button
                      @click="handleDelete(product)"
                      class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition-colors flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Right Side Drawer for Add/Edit Product -->
    <Transition name="drawer">
      <div
        v-if="showDrawer"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click.self="closeDrawer"
      >
        <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-700 shadow-xl overflow-y-auto">
          <div class="sticky top-0 bg-white dark:bg-gray-700 text-black dark:text-white px-6 py-5 flex items-center justify-between z-10  border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white">
                {{ editingProduct ? t('editProduct') : t('addProduct') }}
              </h2>
            </div>
            <button
              @click="closeDrawer"
              class="text-black dark:text-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
            <!-- Product Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('productName') }} <span class="text-red-500">*</span>
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :placeholder="t('productName')"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.name }}</p>
            </div>
            
            <!-- Image Upload -->
            <div>
              <label for="image" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('productImage') }} <span class="text-red-500">*</span>
              </label>
              
              <!-- File Input for Browsing with Preview -->
              <div class="relative">
                <label for="imageFile" class="block w-full h-48 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-sm cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors overflow-hidden">
                  <input
                    id="imageFile"
                    ref="imageFileInput"
                    type="file"
                    accept="image/*"
                    @change="handleImageFileSelect"
                    class="hidden"
                  />
                  
                  <!-- Show preview if image exists -->
                  <div v-if="form.image" class="w-full h-full relative flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                    <img :src="form.image" alt="Preview" class="max-w-full max-h-full object-contain" @error="handleImageError" />
                    <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all flex items-center justify-center">
                      <div class="opacity-0 hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p class="text-white text-sm mt-1">{{ t('clickToChange') }}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      @click.stop="clearImage"
                      class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors z-10"
                      :title="t('removeImage')"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <!-- Show placeholder if no image -->
                  <div v-else class="w-full h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="text-sm font-medium">{{ t('clickToBrowse') }}</p>
                    <p class="text-xs mt-1">{{ t('pngJpgGif') }}</p>
                  </div>
                </label>
              </div>
              
              <p v-if="errors.image" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.image }}</p>
            </div>
            
            <!-- Category -->
            <div>
              <label for="category" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('category') }} <span class="text-red-500">*</span>
              </label>
              <select
                id="category"
                v-model="form.category"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">{{ t('category') }}</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
              </select>
              <p v-if="errors.category" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.category }}</p>
            </div>
            
            <!-- Price -->
            <div>
              <label for="price" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('price') }} <span class="text-red-500">*</span>
              </label>
              <input
                id="price"
                v-model.number="form.price"
                type="number"
                step="0.01"
                min="0"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
              />
              <p v-if="errors.price" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.price }}</p>
            </div>
            
            <!-- In Stock -->
            <div>
              <label for="inStock" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('inStock') }} <span class="text-red-500">*</span>
              </label>
              <input
                id="inStock"
                v-model.number="form.inStock"
                type="number"
                min="0"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
              <p v-if="errors.inStock" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.inStock }}</p>
            </div>
            
            <!-- Buttons -->
            <div class="flex gap-3 pt-4">
              <button
                type="submit"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
              >
                {{ editingProduct ? t('update') + ' ' + t('products') : t('addProduct') }}
              </button>
              <button
                type="button"
                @click="closeDrawer"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                {{ t('cancel') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
    
    <!-- Success Message Toast -->
    <Transition name="toast">
      <div
        v-if="showSuccessMessage"
        class="fixed top-4 right-4 bg-green-500 text-white rounded-sm shadow-lg p-4 flex items-center gap-3 z-50 min-w-[300px]"
      >
        <div class="w-8 h-8 bg-white dark:bg-gray-700 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="flex-1">
          <p class="font-semibold">{{ successMessageTitle }}</p>
          <p class="text-sm text-green-50">{{ successMessageText }}</p>
        </div>
        <button
          @click="showSuccessMessage = false"
          class="text-white hover:text-green-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>
    
    <!-- Error Message Toast -->
    <Transition name="toast">
      <div
        v-if="showErrorMessage"
        class="fixed top-4 right-4 bg-red-500 text-white rounded-sm shadow-lg p-4 flex items-center gap-3 z-50 min-w-[300px]"
      >
        <div class="w-8 h-8 bg-white dark:bg-gray-700 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div class="flex-1">
          <p class="font-semibold">{{ errorMessageTitle }}</p>
          <p class="text-sm text-red-50">{{ errorMessageText }}</p>
        </div>
        <button
          @click="showErrorMessage = false"
          class="text-white hover:text-red-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>
    
    <!-- Add Confirmation Dialog -->
    <div
      v-if="showAddConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showAddConfirmDialog = false"
    >
      <div class="bg-white dark:bg-gray-700 dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('addProduct') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 dark:text-gray-500 dark:text-gray-400">{{ t('areYouSure') }} {{ t('add') }} {{ t('products') }}?</p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('products') }}: <span class="font-semibold">{{ form.name }}</span>
        </p>
        <div class="flex gap-3 justify-end">
          <button
            @click="showAddConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {{ t('cancel') }}
          </button>
          <button
            @click="confirmAdd"
            class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
          >
            {{ t('yes') }}, {{ t('add') }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Edit Confirmation Dialog -->
    <div
      v-if="showEditConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showEditConfirmDialog = false"
    >
      <div class="bg-white dark:bg-gray-700 dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('update') }} {{ t('products') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 dark:text-gray-500 dark:text-gray-400">{{ t('areYouSure') }} {{ t('update') }} {{ t('products') }}?</p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('products') }}: <span class="font-semibold">{{ form.name }}</span>
        </p>
        <div class="flex gap-3 justify-end">
          <button
            @click="showEditConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {{ t('cancel') }}
          </button>
          <button
            @click="confirmEdit"
            class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium"
          >
            {{ t('yes') }}, {{ t('update') }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Delete Confirmation Dialog -->
    <div
      v-if="showDeleteDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showDeleteDialog = false"
    >
      <div class="bg-white dark:bg-gray-700 dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('deleteProduct') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 dark:text-gray-500 dark:text-gray-400">{{ t('areYouSure') }} {{ t('delete') }} {{ t('products') }}?</p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          Product: <span class="font-semibold">{{ productToDelete?.name }}</span>
        </p>
        <div class="flex gap-3 justify-end">
          <button
            @click="showDeleteDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {{ t('no') }}
          </button>
          <button
            @click="confirmDelete"
            class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium"
          >
            {{ t('yes') }}, {{ t('delete') }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Add Stock/Damaged Drawer (Top Center) -->
    <Transition name="drawer-top">
      <div
        v-if="showStockDrawer"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center "
        @click.self="closeStockDrawer"
      >
        <div class="bg-white dark:bg-gray-700  shadow-xl w-[400px]">
          <div class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              {{ stockDrawerType === 'add' ? t('addStock') : t('addDamaged') }}
            </h3>
            <button
              @click="closeStockDrawer"
              class="text-gray-400 dark:text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 dark:text-gray-400 dark:text-gray-500 dark:text-gray-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form @submit.prevent="handleStockSubmit" class="p-6 space-y-6">
            <!-- Product Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">{{ t('productName') }}</label>
              <p class="text-sm text-gray-900 dark:text-white font-medium bg-slate-100 dark:bg-slate-700 p-3 rounded-md">{{ selectedProduct?.name }}</p>
            </div>
            
            <!-- Quantity Input -->
            <div>
              <label for="quantity" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ stockDrawerType === 'add' ? t('addQuantity') : t('damagedQuantity') }} <span class="text-red-500">*</span>
              </label>
              <input
                id="quantity"
                v-model.number="stockForm.quantity"
                type="number"
                min="1"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :placeholder="stockDrawerType === 'add' ? t('enterQuantityToAdd') : t('enterDamagedQuantity')"
              />
              <p v-if="stockForm.errors.quantity" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ stockForm.errors.quantity }}</p>
            </div>
            
            <!-- Buttons -->
            <div class="flex gap-3 pt-2">
              <button
                type="submit"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
              >
                {{ t('submit') }}
              </button>
              <button
                type="button"
                @click="closeStockDrawer"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                {{ t('cancel') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
    
    <!-- Stock/Damaged Confirmation Dialog -->
    <div
      v-if="showStockConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showStockConfirmDialog = false"
    >
      <div class="bg-white dark:bg-gray-700 dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ stockDrawerType === 'add' ? t('addStock') : t('addDamaged') }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 dark:text-gray-500 dark:text-gray-400">
              {{ t('areYouSure') }} {{ stockDrawerType === 'add' ? t('areYouSureAddStock') : t('areYouSureAddDamaged') }} {{ stockForm.quantity }} {{ stockForm.quantity === 1 ? t('item') : t('items') }}?
            </p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('products') }}: <span class="font-semibold">{{ selectedProduct?.name }}</span>
        </p>
        <div class="flex gap-3 justify-end">
          <button
            @click="showStockConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {{ t('cancel') }}
          </button>
          <button
            @click="confirmStockAction"
            class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
          >
            {{ t('yes') }}, {{ t('confirm') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject, onMounted, onUnmounted } from 'vue'
import { addHistory } from '../utils/history'
import { useI18n } from '../composables/useI18n'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
import productsData from '../data/products.json'

// Load products from JSON file
const products = ref(productsData)

const searchQuery = ref('')
const selectedCategory = ref('')

// Action menu state
const activeActionMenu = ref(null)

// Drawer state
const showDrawer = ref(false)
const editingProduct = ref(null)

// Image file input ref
const imageFileInput = ref(null)

// Track failed product images
const failedImages = ref(new Set())

// Form state
const form = reactive({
  name: '',
  image: '', // Will store base64 data URL
  category: '',
  price: 0,
  inStock: 0
})

// Form validation errors
const errors = reactive({
  name: '',
  image: '',
  category: '',
  price: '',
  inStock: ''
})

// Confirmation dialogs state
const showAddConfirmDialog = ref(false)
const showEditConfirmDialog = ref(false)
const showDeleteDialog = ref(false)
const productToDelete = ref(null)

// Success/Error message state
const showSuccessMessage = ref(false)
const successMessageTitle = ref('')
const successMessageText = ref('')
const showErrorMessage = ref(false)
const errorMessageTitle = ref('')
const errorMessageText = ref('')

// Stock/Damaged drawer state
const showStockDrawer = ref(false)
const stockDrawerType = ref('add') // 'add' or 'damaged'
const selectedProduct = ref(null)
const stockForm = reactive({
  quantity: 1,
  errors: {
    quantity: ''
  }
})
const showStockConfirmDialog = ref(false)

// Get unique categories from products
const categories = computed(() => {
  const unique = new Set(products.value.map(p => p.category))
  return Array.from(unique).sort()
})

const filteredProducts = computed(() => {
  let filtered = products.value
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.sku.toLowerCase().includes(query)
    )
  }
  
  if (selectedCategory.value) {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  }
  
  return filtered
})

const totalProducts = computed(() => products.value.length)

const totalStockUnits = computed(() => {
  return products.value.reduce((sum, p) => sum + p.totalStock, 0)
})

const lowStockCount = computed(() => {
  return products.value.filter(p => p.stockStatus === 'Low').length
})

const totalCategories = computed(() => {
  const unique = new Set(products.value.map(p => p.category))
  return unique.size
})

const topCategory = computed(() => {
  const categoryStock = {}
  products.value.forEach(p => {
    categoryStock[p.category] = (categoryStock[p.category] || 0) + p.totalStock
  })
  const sorted = Object.entries(categoryStock).sort((a, b) => b[1] - a[1])
  return { name: sorted[0]?.[0] || 'N/A', stock: sorted[0]?.[1] || 0 }
})

const getCategoryColorClass = (category) => {
  const colors = {
    'Laptops': 'bg-purple-100 text-purple-800',
    'Accessories': 'bg-blue-100 text-blue-800',
    'Courses': 'bg-green-100 dark:bg-green-900 text-green-800',
    'Electronics': 'bg-yellow-100 text-yellow-800',
    'Office': 'bg-pink-100 text-pink-800'
  }
  return colors[category] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
}

// Helper function to check if image has failed
const hasImageFailed = (productId) => {
  return failedImages.value && failedImages.value.has(productId)
}

// Drawer functions
const openAddDrawer = () => {
  editingProduct.value = null
  resetForm()
  showDrawer.value = true
}

const closeDrawer = () => {
  showDrawer.value = false
  editingProduct.value = null
  resetForm()
}

const resetForm = () => {
  form.name = ''
  form.image = ''
  form.category = ''
  form.price = 0
  form.inStock = 0
  Object.keys(errors).forEach(key => errors[key] = '')
  // Reset file input
  if (imageFileInput.value) {
    imageFileInput.value.value = ''
  }
}

// Action menu functions
const toggleActionMenu = (productId) => {
  activeActionMenu.value = activeActionMenu.value === productId ? null : productId
}

const handleEdit = (product) => {
  editingProduct.value = product
  form.name = product.name
  form.image = product.image || ''
  form.category = product.category
  form.price = product.price
  form.inStock = product.inStock
  activeActionMenu.value = null
  showDrawer.value = true
}

const handleDelete = (product) => {
  productToDelete.value = product
  showDeleteDialog.value = true
  activeActionMenu.value = null
}

// Generate SKU automatically
const generateSKU = (category, productName) => {
  const categoryPrefix = category.substring(0, 3).toUpperCase()
  const productInitials = productName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 3)
  const timestamp = Date.now().toString().slice(-4)
  return `${categoryPrefix}-${productInitials}-${timestamp}`
}

// Form validation
const validateForm = () => {
  Object.keys(errors).forEach(key => errors[key] = '')
  let hasErrors = false
  
  if (!form.name.trim()) {
    errors.name = 'Product name is required'
    hasErrors = true
  }
  
  if (!form.image.trim()) {
    errors.image = 'Product image is required'
    hasErrors = true
  }
  
  if (!form.category) {
    errors.category = 'Category is required'
    hasErrors = true
  }
  
  if (!form.price || form.price <= 0) {
    errors.price = 'Price must be greater than 0'
    hasErrors = true
  }
  
  if (form.inStock < 0) {
    errors.inStock = 'In stock cannot be negative'
    hasErrors = true
  }
  
  return !hasErrors
}

// Handle image error
const handleImageError = (event) => {
  event.target.style.display = 'none'
}

// Handle product image error in table
const handleProductImageError = (event, productId) => {
  // Hide the image and track the failure
  event.target.style.display = 'none'
  if (failedImages.value) {
    failedImages.value.add(productId)
  }
}

// Handle image file selection
const handleImageFileSelect = (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  // Validate file type
  if (!file.type.startsWith('image/')) {
    errors.image = 'Please select a valid image file'
    showErrorToast('Invalid File', 'Please select a valid image file')
    return
  }
  
  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    errors.image = 'Image size must be less than 5MB'
    showErrorToast('File Too Large', 'Image size must be less than 5MB')
    return
  }
  
  // Read file as base64
  const reader = new FileReader()
  reader.onload = (e) => {
    form.image = e.target.result
    errors.image = ''
  }
  reader.onerror = () => {
    errors.image = 'Failed to read image file'
    showErrorToast('Error', 'Failed to read image file')
  }
  reader.readAsDataURL(file)
}

// Clear image
const clearImage = () => {
  form.image = ''
  if (imageFileInput.value) {
    imageFileInput.value.value = ''
  }
  errors.image = ''
}

// Handle form submit
const handleSubmit = () => {
  if (!validateForm()) {
    showErrorToast('Validation Error', 'Please fix the errors in the form')
    return
  }
  
  // Show confirmation dialog
  if (editingProduct.value) {
    showEditConfirmDialog.value = true
  } else {
    showAddConfirmDialog.value = true
  }
}

// Confirm Add
const confirmAdd = () => {
  try {
    // Auto-generate SKU
    const sku = generateSKU(form.category, form.name)
    
    // For new products, sold and damaged are 0, so totalStock = inStock
    const sold = 0
    const damaged = 0
    const totalStock = form.inStock + sold + damaged
    
    // Calculate stock status
    const stockStatus = form.inStock <= 5 ? 'Low' : 'Healthy'
    
    const newProduct = {
      id: products.value.length + 1,
      name: form.name,
      sku: sku,
      image: form.image,
      category: form.category,
      price: form.price,
      totalStock: totalStock, // totalStock = inStock + sold + damaged
      inStock: form.inStock,
      stockStatus: stockStatus,
      added: 0,
      sold: sold,
      damaged: damaged,
      status: 'Active'
    }
    
    products.value.push(newProduct)
    // Log add history
    addHistory('add', {
      type: 'product',
      itemName: form.name,
      itemId: newProduct.id,
      description: `Product "${form.name}" (SKU: ${sku}) added`,
      user: 'Admin'
    })
    showAddConfirmDialog.value = false
    closeDrawer()
    showSuccessToast(t('productAdded'), `"${form.name}" ${t('productAddedSuccess')}`)
  } catch (error) {
    showAddConfirmDialog.value = false
    showErrorToast('Error', 'Failed to add product. Please try again.')
  }
}

// Confirm Edit
const confirmEdit = () => {
  try {
    const index = products.value.findIndex(p => p.id === editingProduct.value.id)
    if (index !== -1) {
      // Keep existing sold and damaged values
      const sold = products.value[index].sold || 0
      const damaged = products.value[index].damaged || 0
      // Calculate totalStock = inStock + sold + damaged
      const totalStock = form.inStock + sold + damaged
      
      // Calculate stock status
      const stockStatus = form.inStock <= 5 ? 'Low' : 'Healthy'
      
      products.value[index] = {
        ...products.value[index],
        name: form.name,
        image: form.image,
        category: form.category,
        price: form.price,
        totalStock: totalStock, // totalStock = inStock + sold + damaged
        inStock: form.inStock,
        stockStatus: stockStatus,
        status: 'Active'
      }
      
      // Log update history
      addHistory('update', {
        type: 'product',
        itemName: form.name,
        itemId: editingProduct.value.id,
        description: `Product "${form.name}" updated`,
        user: 'Admin'
      })
      showEditConfirmDialog.value = false
      closeDrawer()
      showSuccessToast(t('productUpdated'), `"${form.name}" ${t('productUpdatedSuccess')}`)
    }
  } catch (error) {
    showEditConfirmDialog.value = false
    showErrorToast('Error', 'Failed to update product. Please try again.')
  }
}

// Confirm Delete
const confirmDelete = () => {
  try {
    if (productToDelete.value) {
      const productName = productToDelete.value.name
      const index = products.value.findIndex(p => p.id === productToDelete.value.id)
      if (index !== -1) {
        products.value.splice(index, 1)
        // Log delete history
        addHistory('delete', {
          type: 'product',
          itemName: productName,
          itemId: productToDelete.value.id,
          description: `Product "${productName}" deleted`,
          user: 'Admin'
        })
        showDeleteDialog.value = false
        productToDelete.value = null
        showSuccessToast(t('productDeleted'), `"${productName}" ${t('productDeletedSuccess')}`)
      }
    }
  } catch (error) {
    showDeleteDialog.value = false
    showErrorToast('Error', 'Failed to delete product. Please try again.')
  }
}

// Stock/Damaged drawer functions
const openAddStockDrawer = (product) => {
  selectedProduct.value = product
  stockDrawerType.value = 'add'
  stockForm.quantity = 1
  stockForm.errors.quantity = ''
  showStockDrawer.value = true
}

const openAddDamagedDrawer = (product) => {
  selectedProduct.value = product
  stockDrawerType.value = 'damaged'
  stockForm.quantity = 1
  stockForm.errors.quantity = ''
  showStockDrawer.value = true
}

const closeStockDrawer = () => {
  showStockDrawer.value = false
  selectedProduct.value = null
  stockForm.quantity = 1
  stockForm.errors.quantity = ''
}

const handleStockSubmit = () => {
  // Validate
  stockForm.errors.quantity = ''
  
  if (!stockForm.quantity || stockForm.quantity < 1) {
    stockForm.errors.quantity = 'Quantity must be at least 1'
    return
  }
  
  if (stockDrawerType.value === 'damaged' && stockForm.quantity > selectedProduct.value.inStock) {
    stockForm.errors.quantity = 'Damaged quantity cannot exceed in stock quantity'
    return
  }
  
  // Show confirmation dialog
  showStockConfirmDialog.value = true
}

const confirmStockAction = () => {
  try {
    const index = products.value.findIndex(p => p.id === selectedProduct.value.id)
    if (index !== -1) {
      const product = products.value[index]
      
      if (stockDrawerType.value === 'add') {
        // Add stock logic
        const newInStock = product.inStock + stockForm.quantity
        const newTotalStock = newInStock + product.sold + product.damaged
        const newStockStatus = newInStock <= 5 ? 'Low' : 'Healthy'
        
        products.value[index] = {
          ...product,
          inStock: newInStock,
          totalStock: newTotalStock,
          added: product.added + stockForm.quantity,
          stockStatus: newStockStatus
        }
        
        // Log stock history
        addHistory('stock', {
          type: 'product',
          itemName: product.name,
          itemId: product.id,
          description: `${stockForm.quantity} ${stockForm.quantity === 1 ? 'item' : 'items'} added to stock`,
          user: 'Admin'
        })
        showSuccessToast(t('stockAdded'), `${stockForm.quantity} ${stockForm.quantity === 1 ? t('item') : t('items')} ${t('stockAddedSuccess')} "${product.name}" ${t('successfully')}`)
      } else {
        // Add damaged logic
        if (stockForm.quantity > product.inStock) {
          showErrorToast('Error', 'Damaged quantity cannot exceed in stock quantity')
          showStockConfirmDialog.value = false
          return
        }
        
        const newInStock = product.inStock - stockForm.quantity
        const newTotalStock = newInStock + product.sold + (product.damaged + stockForm.quantity)
        const newStockStatus = newInStock <= 5 ? 'Low' : 'Healthy'
        
        products.value[index] = {
          ...product,
          inStock: newInStock,
          totalStock: newTotalStock,
          damaged: product.damaged + stockForm.quantity,
          stockStatus: newStockStatus
        }
        
        // Log damaged history
        addHistory('damaged', {
          type: 'product',
          itemName: product.name,
          itemId: product.id,
          description: `${stockForm.quantity} ${stockForm.quantity === 1 ? 'item' : 'items'} marked as damaged`,
          user: 'Admin'
        })
        showSuccessToast(t('damagedItemsAdded'), `${stockForm.quantity} ${stockForm.quantity === 1 ? t('item') : t('items')} ${t('damagedItemsSuccess')} "${product.name}"`)
      }
      
      showStockConfirmDialog.value = false
      closeStockDrawer()
    }
  } catch (error) {
    showStockConfirmDialog.value = false
    showErrorToast('Error', `Failed to ${stockDrawerType.value === 'add' ? 'add stock' : 'add damaged items'}. Please try again.`)
  }
}

// Toast functions
const showSuccessToast = (title, text) => {
  successMessageTitle.value = title
  successMessageText.value = text
  showSuccessMessage.value = true
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}

const showErrorToast = (title, text) => {
  errorMessageTitle.value = title
  errorMessageText.value = text
  showErrorMessage.value = true
  setTimeout(() => {
    showErrorMessage.value = false
  }, 3000)
}

// Close action menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    activeActionMenu.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Drawer Animation */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-active .absolute,
.drawer-leave-active .absolute {
  transition: transform 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .absolute,
.drawer-leave-to .absolute {
  transform: translateX(100%);
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

/* Top Drawer Animation */
.drawer-top-enter-active,
.drawer-top-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-top-enter-active .bg-white dark:bg-gray-700,
.drawer-top-leave-active .bg-white dark:bg-gray-700 {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.drawer-top-enter-from,
.drawer-top-leave-to {
  opacity: 0;
}

.drawer-top-enter-from .bg-white dark:bg-gray-700,
.drawer-top-leave-to .bg-white dark:bg-gray-700 {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
