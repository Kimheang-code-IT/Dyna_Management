<template>
  <div :class="['mx-auto transition-all duration-300', isSidebarCollapsed ? 'max-w-full px-2' : 'max-w-7xl']">
    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
      <!-- Total Categories Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('totalCategories') }}</h3>
            <p class="text-3xl font-bold text-gray-800 dark:text-white">{{ totalCategories }}</p>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Products Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('totalProducts') }}</h3>
            <p class="text-3xl font-bold text-gray-800 dark:text-white">{{ totalProducts }}</p>
          </div>
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Top Category Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('topCategory') }}</h3>
            <p class="text-xl font-bold text-gray-800 dark:text-white">{{ topCategory.name }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-right">{{ t('products') }} {{ topCategory.products }}</p>
          </div>
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Two-column layout: Form (left) and Table (right) -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <!-- Left Panel: Add New Category Form -->
      <div class="lg:col-span-1 bg-white dark:bg-gray-800 shadow rounded-sm p-3">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-6 p-3 border-b border-gray-300 ">
          {{ editingCategory ? t('editCategory') : t('addNewCategory') }}
        </h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Category Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('categoryName') }} <span class="text-red-500">*</span>
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
              :placeholder="t('categoryPlaceholder')"
            />
            <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
          </div>
          
          <!-- Description Field -->
          <div>
            <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('description') }}
            </label>
            <textarea
              id="description"
              v-model="form.description"
              rows="8"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
              :placeholder="t('descriptionPlaceholder')"
            ></textarea>
            <p v-if="errors.description" class="mt-1 text-sm text-red-600">{{ errors.description }}</p>
          </div>
          
          <!-- Add/Update Category Button -->
          <div class="flex gap-2">
            <button
              type="submit"
              class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
            >
              {{ editingCategory ? t('updateCategory') : t('addCategory') }}
            </button>
            <button
              v-if="editingCategory"
              @click="cancelEdit"
              type="button"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              {{ t('cancel') }}
            </button>
          </div>
        </form>
      </div>
      
      <!-- Right Panel: Category List Table -->
      <div class="lg:col-span-2 bg-white dark:bg-gray-700 dark:bg-gray-800 rounded-sm shadow p-3">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">{{ t('categories') }}</h2>
        
        <!-- Search Bar and Date Picker -->
        <div class="p-0 mb-3 flex items-center gap-3">
          <div class="relative flex-1 max-w-[400px]">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="t('search')"
              class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
            />
          </div>
          
          <!-- Date Picker -->
          <div class="flex items-center gap-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{{ t('dateBetween') }}:</label>
            <input
              v-model="filterDateFrom"
              type="date"
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <span class="text-gray-500 dark:text-gray-400">{{ t('to') }}</span>
            <input
              v-model="filterDateTo"
              type="date"
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              v-if="filterDateFrom || filterDateTo"
              @click="clearDateFilter"
              class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              :title="t('clear')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Scrollable table container with sticky header -->
        <div class="max-h-[500px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm">
          <table class="w-full">
            <!-- Sticky Header -->
            <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
              <tr>
                <th class="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('no') }}
                </th>
                <th class="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('name') }}
                </th>
                <th class="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('description') }}
                </th>
                <th class="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  <div class="flex flex-col items-center">
                    <span>{{ t('total') }}</span>
                 
                  </div>
                </th>
                <th class="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  <div class="flex flex-col items-center">
                    <span>{{ t('created') }}</span>
                 
                  </div>
                </th>
                <th class="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                </th>
              </tr>
            </thead>
            
            <!-- Scrollable Body -->
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr
                v-for="(category, index) in filteredCategories"
                :key="category.id"
                class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {{ index + 1 }}
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs"
                         :style="{ backgroundColor: getCategoryColor(category.name) }">
                      {{ category.name.charAt(0).toUpperCase() }}
                    </div>
                    <span>{{ category.name }}</span>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                  {{ category.description || '-' }}
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {{ getProductCount(category.name) }} {{ t('items') }}
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {{ formatDate(category.created) }}
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm font-medium">
                  <div class="relative">
                    <button
                      @click="toggleActionMenu(category.id)"
                      class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      title="Actions"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    </button>
                    
                    <!-- Dropdown Menu -->
                    <div
                      v-if="activeActionMenu === category.id"
                      class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
                    >
                      <button
                        @click="handleEdit(category)"
                        class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        {{ t('edit') }}
                      </button>
                      <button
                        @click="handleDelete(category)"
                        class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition-colors flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {{ t('delete') }}
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <!-- Success Message Toast -->
    <Transition name="toast">
      <div
        v-if="showSuccessMessage"
        class="fixed top-4 right-4 bg-green-500 dark:bg-green-600 text-white rounded-sm shadow-lg p-4 flex items-center gap-3 z-50 min-w-[300px]"
      >
        <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
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
    
    <!-- Update Success Dialog -->
    <div
      v-if="showUpdateDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showUpdateDialog = false"
    >
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('categoryUpdated') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('categoryUpdatedSuccess') }}</p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('category') }}: <span class="font-semibold">{{ updatedCategoryName }}</span>
        </p>
        <div class="flex gap-3 justify-end">
          <button
            @click="closeUpdateDialog"
            class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
          >
            OK
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
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('deleteCategory') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureDelete') }}</p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('category') }}: <span class="font-semibold">{{ categoryToDelete?.name }}</span>
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
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject, onMounted, onUnmounted } from 'vue'
import { addHistory } from '../utils/history'
import { useI18n } from '../composables/useI18n'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
import categoriesData from '../data/categories.json'
import productsData from '../data/products.json'

// Load categories from JSON file
const categories = ref(categoriesData)

// Form state
const form = reactive({
  name: '',
  description: ''
})

// Form validation errors
const errors = reactive({
  name: '',
  description: ''
})

// Search
const searchQuery = ref('')

// Date filter
const filterDateFrom = ref('')
const filterDateTo = ref('')

// Action menu state
const activeActionMenu = ref(null)

// Edit state
const editingCategory = ref(null)

// Success message state
const showSuccessMessage = ref(false)
const successMessageTitle = ref('')
const successMessageText = ref('')

// Update dialog state
const showUpdateDialog = ref(false)
const updatedCategoryName = ref('')

// Delete dialog state
const showDeleteDialog = ref(false)
const categoryToDelete = ref(null)

// Computed properties
const totalCategories = computed(() => categories.value.length)

const totalProducts = computed(() => {
  // Calculate total products that are in stock (inStock > 0)
  return productsData.filter(p => p.inStock > 0).length
})

const topCategory = computed(() => {
  const sorted = [...categories.value].sort((a, b) => b.totalProduct - a.totalProduct)
  return sorted[0] || { name: 'N/A', products: 0 }
})

const filteredCategories = computed(() => {
  let filtered = categories.value
  
  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(cat => 
      cat.name.toLowerCase().includes(query) ||
      (cat.description && cat.description.toLowerCase().includes(query))
    )
  }
  
  // Date range filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(cat => {
      if (!cat.created) return false
      
      const categoryDate = new Date(cat.created)
      categoryDate.setHours(0, 0, 0, 0)
      
      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return categoryDate >= fromDate && categoryDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return categoryDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return categoryDate <= toDate
      }
      return true
    })
  }
  
  return filtered
})

// Methods
const getCategoryColor = (name) => {
  const colors = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
    '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

// Get product count for a category from products data
const getProductCount = (categoryName) => {
  return productsData.filter(p => p.category === categoryName).length
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) {
    // If no created date, use a default or current date
    const now = new Date()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const year = now.getFullYear()
    return `${month}/${day}/${year}`
  }
  const date = new Date(dateString)
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const year = date.getFullYear()
  return `${month}/${day}/${year}`
}

const handleSubmit = () => {
  // Clear previous errors
  Object.keys(errors).forEach(key => errors[key] = '')
  
  // Simple validation
  let hasErrors = false
  
  if (!form.name.trim()) {
    errors.name = t('name') + ' ' + t('isRequired')
    hasErrors = true
  }
  
  if (hasErrors) {
    return
  }
  
  if (editingCategory.value) {
    // Update existing category
    const index = categories.value.findIndex(cat => cat.id === editingCategory.value.id)
    if (index !== -1) {
      categories.value[index] = {
        ...categories.value[index],
        name: form.name,
        description: form.description || ''
      }
      // Log update history
      addHistory('update', {
        type: 'category',
        itemName: form.name,
        itemId: editingCategory.value.id,
        description: `Category "${form.name}" updated`,
        user: 'Admin'
      })
      // Show update success dialog
      updatedCategoryName.value = form.name
      showUpdateDialog.value = true
    }
    // Reset edit state
    editingCategory.value = null
  } else {
    // Add new category
    const newCategory = {
      id: categories.value.length + 1,
      name: form.name,
      description: form.description || '',
      totalProduct: 0,
      created: new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
    }
    categories.value.push(newCategory)
    // Log add history
    addHistory('add', {
      type: 'category',
      itemName: form.name,
      itemId: newCategory.id,
      description: `Category "${form.name}" added`,
      user: 'Admin'
    })
    // Show success message
    showSuccessToast(t('categoryAdded'), `"${form.name}" ${t('categoryAddedSuccess')}`)
  }
  
  // Clear form
  form.name = ''
  form.description = ''
  Object.keys(errors).forEach(key => errors[key] = '')
  activeActionMenu.value = null
}

const toggleActionMenu = (categoryId) => {
  activeActionMenu.value = activeActionMenu.value === categoryId ? null : categoryId
}

const handleEdit = (category) => {
  editingCategory.value = category
  form.name = category.name
  form.description = category.description || ''
  activeActionMenu.value = null
}

const cancelEdit = () => {
  editingCategory.value = null
  form.name = ''
  form.description = ''
  Object.keys(errors).forEach(key => errors[key] = '')
}

const handleDelete = (category) => {
  categoryToDelete.value = category
  showDeleteDialog.value = true
  activeActionMenu.value = null
}

const showSuccessToast = (title, text) => {
  successMessageTitle.value = title
  successMessageText.value = text
  showSuccessMessage.value = true
  // Auto-hide after 3 seconds
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}

const closeUpdateDialog = () => {
  // Show success message after closing the dialog
  if (updatedCategoryName.value) {
    showSuccessToast(t('categoryUpdated'), `"${updatedCategoryName.value}" ${t('categoryUpdatedSuccess')}`)
  }
  showUpdateDialog.value = false
  updatedCategoryName.value = ''
}

const confirmDelete = () => {
  if (categoryToDelete.value) {
    const categoryName = categoryToDelete.value.name
    const categoryId = categoryToDelete.value.id
    const index = categories.value.findIndex(cat => cat.id === categoryToDelete.value.id)
    if (index !== -1) {
      categories.value.splice(index, 1)
      // Log delete history
      addHistory('delete', {
        type: 'category',
        itemName: categoryName,
        itemId: categoryId,
        description: `Category "${categoryName}" deleted`,
        user: 'Admin'
      })
      // Show success message after deletion
      showSuccessToast(t('categoryDeleted'), `"${categoryName}" ${t('categoryDeletedSuccess')}`)
    }
  }
  showDeleteDialog.value = false
  categoryToDelete.value = null
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

// Clear date filter
const clearDateFilter = () => {
  filterDateFrom.value = ''
  filterDateTo.value = ''
}
</script>

<style scoped>
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
</style>
