<template>
  <div :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Income Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('totalIncome') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">${{ totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Records Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('totalRecords') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">{{ totalRecords }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Categories Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('totalCategories') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">{{ totalCategories }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Average Income Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('averageIncome') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">${{ averageIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Income Table -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
      <!-- Search and Filter Bar -->
      <div class="p-0 mb-2 sm:mb-3">
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center justify-between">
          <div class="relative w-full sm:w-[230px]">
            <div class="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="t('search')"
              class="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]"
            />
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex items-center gap-4 flex-wrap">
            <!-- Date Range Picker -->
            <div class="flex items-center gap-2">
              <label class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{{ t('dateBetween') }}:</label>
              <input
                v-model="filterDateFrom"
                type="date"
                class="px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]"
              />
              <span class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ t('to') }}</span>
              <input
                v-model="filterDateTo"
                type="date"
                class="px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]"
              />
              <button
                v-if="filterDateFrom || filterDateTo"
                @click="clearDateFilter"
                class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                :title="t('clear')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <!-- Category Filter -->
            <div class="relative">
              <select
                v-model="filterCategory"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white"
              >
                <option value="">{{ t('allCategories') }}</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scrollable table container with sticky header -->
    <div class="max-h-[500px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm">
      <table class="w-full">
        <!-- Sticky Header -->
        <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
          <tr>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('no') }}</th>
            <th class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('nameIncome') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('description') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('created') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('category') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('paymentDate') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('paymentPrice') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('method') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600"></th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <!-- No Results Found -->
          <tr v-if="filteredIncomes.length === 0 && (searchQuery || filterDateFrom || filterDateTo || filterCategory)">
            <td colspan="9" class="px-4 py-12 text-center">
              <div class="flex flex-col items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('noResultsFound') }}</p>
              </div>
            </td>
          </tr>
          
          <!-- Table Rows -->
          <tr
            v-for="(income, index) in filteredIncomes"
            :key="income.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <td class="py-3 text-center text-xs text-gray-900 dark:text-white">{{ index + 1 }}</td>
            <td class="px-2 py-3 text-center text-xs text-gray-900 dark:text-white">{{ income.nameIncome }}</td>
            <td class="py-3 text-center text-xs text-gray-900 dark:text-white max-w-xs truncate" :title="income.description">{{ income.description }}</td>
            <td class="py-3 text-center text-xs text-gray-900 dark:text-white">{{ formatDate(income.created) }}</td>
            <td class="py-3 text-center text-xs text-gray-900 dark:text-white">{{ income.category }}</td>
            <td class="py-3 text-center text-xs text-gray-900 dark:text-white">{{ formatDate(income.paymentDate) }}</td>
            <td class="py-3 text-center text-xs text-gray-900 dark:text-white">${{ income.paymentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</td>
            <td class="py-3 text-center text-xs text-gray-900 dark:text-white">{{ income.method }}</td>
            <td class="py-3 text-center relative">
              <div class="flex items-center justify-center">
                <button
                  @click="toggleActionMenu(income.id)"
                  class="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
                <div
                  v-if="activeActionMenu === income.id"
                  class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
                >
                  <button
                    @click="handleView(income)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {{ t('view') }}
                  </button>
                  <button
                    @click="handleEdit(income)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    {{ t('edit') }}
                  </button>
                  <button
                    @click="handleDelete(income)"
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
    
    <!-- Right Side Drawer for View/Add/Edit Income -->
    <Transition name="drawer">
      <div
        v-if="showDrawer"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click.self="closeDrawer"
      >
        <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white">
                {{ isViewMode ? t('viewIncome') : editingIncome ? t('editIncome') : t('add') }}
              </h2>
            </div>
            <button
              @click="closeDrawer"
              class="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
            <!-- Name Income -->
            <div>
              <label for="nameIncome" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('nameIncome') }} <span class="text-red-500">*</span>
              </label>
              <input
                id="nameIncome"
                v-model="form.nameIncome"
                type="text"
                required
                :disabled="isViewMode"
                class="w-full px-3 py-2  border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                :placeholder="t('nameIncome')"
              />
            </div>
            
            <!-- Description -->
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('description') }} <span class="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                v-model="form.description"
                rows="3"
                required
                :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed resize-y"
                :placeholder="t('description')"
              ></textarea>
            </div>
            
            <!-- Created Date -->
            <div>
              <label for="created" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('created') }} <span class="text-red-500">*</span>
              </label>
              <input
                id="created"
                v-model="form.created"
                type="date"
                required
                :disabled="isViewMode"
                class="w-full px-3 py-2  border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed w-[115px] h-[37px]"
              />
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
                :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
              >
                <option value="">{{ t('selectCategory') }}</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
              </select>
            </div>
            
            <!-- Payment Date -->
            <div>
              <label for="paymentDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('paymentDate') }} <span class="text-red-500">*</span>
              </label>
              <input
                id="paymentDate"
                v-model="form.paymentDate"
                type="date"
                required
                :disabled="isViewMode"
                class="w-full px-3 py-2  border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed w-[115px] h-[37px]"
              />
            </div>
            
            <!-- Payment Price -->
            <div>
              <label for="paymentPrice" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('paymentPrice') }} <span class="text-red-500">*</span>
              </label>
              <input
                id="paymentPrice"
                v-model.number="form.paymentPrice"
                type="number"
                step="0.01"
                min="0"
                required
                :disabled="isViewMode"
                class="w-full px-3 py-2  border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                :placeholder="t('paymentPrice')"
              />
            </div>
            
            <!-- Method -->
            <div>
              <label for="method" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('method') }} <span class="text-red-500">*</span>
              </label>
              <select
                id="method"
                v-model="form.method"
                required
                :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
              >
                <option value="">{{ t('selectMethod') }}</option>
                <option value="Cash">{{ t('cash') }}</option>
                <option value="Bank Transfer">{{ t('bankTransfer') }}</option>
                <option value="Credit Card">{{ t('creditCard') }}</option>
                <option value="Check">{{ t('check') }}</option>
              </select>
            </div>
            
            <!-- Action Buttons -->
            <div v-if="!isViewMode" class="flex gap-3 pt-4">
              <button
                type="submit"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
              >
                {{ editingIncome ? t('update') : t('add') }}
              </button>
              <button
                type="button"
                @click="closeDrawer"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                {{ t('cancel') }}
              </button>
            </div>
            <div v-else class="pt-4">
              <button
                type="button"
                @click="closeDrawer"
                class="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                {{ t('close') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
    
    <!-- Confirmation Dialog -->
    <Transition name="fade">
      <div
        v-if="showConfirmDialog"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="showConfirmDialog = false"
      >
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
          <div class="flex items-center gap-4 mb-4">
            <div
              class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ confirmDialogTitle }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ confirmDialogMessage }}</p>
            </div>
          </div>
          <div class="flex gap-3">
            <button
              @click="confirmActionFn"
              class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
            >
              {{ t('confirm') }}
            </button>
            <button
              @click="showConfirmDialog = false"
              class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              {{ t('cancel') }}
            </button>
          </div>
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
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'
import { addHistory } from '../utils/history'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

// Load incomes from JSON file or localStorage
const loadIncomes = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')
    const data = await loadDataFromJSON('../data/incomes.json', 'incomes_data')
    incomes.value = data
    saveIncomes()
  } catch (error) {
    console.error('Error loading incomes:', error)
    const saved = localStorage.getItem('incomes_data')
    if (saved) {
      incomes.value = JSON.parse(saved)
    } else {
      incomes.value = []
    }
  }
}

// Save incomes to localStorage
const saveIncomes = () => {
  try {
    localStorage.setItem('incomes_data', JSON.stringify(incomes.value))
  } catch (error) {
    console.error('Error saving incomes:', error)
  }
}

const incomes = ref([])
const searchQuery = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')
const filterCategory = ref('')
const activeActionMenu = ref(null)
const showDrawer = ref(false)
const isViewMode = ref(false)
const editingIncome = ref(null)
const showConfirmDialog = ref(false)
const confirmDialogTitle = ref('')
const confirmDialogMessage = ref('')
const confirmAction = ref(null)
const showSuccessMessage = ref(false)
const successMessageTitle = ref('')
const successMessageText = ref('')

// Form data
const form = ref({
  nameIncome: '',
  description: '',
  created: '',
  category: '',
  paymentDate: '',
  paymentPrice: 0,
  method: ''
})

// Computed properties
const totalIncome = computed(() => {
  return incomes.value.reduce((sum, inc) => sum + (inc.paymentPrice || 0), 0)
})

const totalRecords = computed(() => {
  return incomes.value.length
})

const totalCategories = computed(() => {
  const cats = new Set(incomes.value.map(inc => inc.category))
  return cats.size
})

const averageIncome = computed(() => {
  if (incomes.value.length === 0) return 0
  return totalIncome.value / incomes.value.length
})

const categories = computed(() => {
  const cats = new Set(incomes.value.map(inc => inc.category))
  return Array.from(cats).sort()
})

const filteredIncomes = computed(() => {
  let filtered = incomes.value

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(inc =>
      inc.nameIncome?.toLowerCase().includes(query) ||
      inc.description?.toLowerCase().includes(query) ||
      inc.category?.toLowerCase().includes(query) ||
      inc.method?.toLowerCase().includes(query)
    )
  }

  // Date filter
  if (filterDateFrom.value) {
    filtered = filtered.filter(inc => inc.created >= filterDateFrom.value || inc.paymentDate >= filterDateFrom.value)
  }
  if (filterDateTo.value) {
    filtered = filtered.filter(inc => inc.created <= filterDateTo.value || inc.paymentDate <= filterDateTo.value)
  }

  // Category filter
  if (filterCategory.value) {
    filtered = filtered.filter(inc => inc.category === filterCategory.value)
  }

  return filtered
})

// Format date
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

// Toggle action menu
const toggleActionMenu = (id) => {
  activeActionMenu.value = activeActionMenu.value === id ? null : id
}

// Close action menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    activeActionMenu.value = null
  }
}

// Handle view
const handleView = (income) => {
  editingIncome.value = income
  isViewMode.value = true
  form.value = { ...income }
  showDrawer.value = true
  activeActionMenu.value = null
}

// Handle edit
const handleEdit = (income) => {
  editingIncome.value = income
  isViewMode.value = false
  form.value = { ...income }
  showDrawer.value = true
  activeActionMenu.value = null
}

// Handle delete
const handleDelete = (income) => {
  confirmDialogTitle.value = t('deleteIncome')
  confirmDialogMessage.value = t('confirmDeleteIncome', { name: income.nameIncome })
  confirmAction.value = () => {
    const index = incomes.value.findIndex(inc => inc.id === income.id)
    if (index !== -1) {
      const incomeName = income.nameIncome
      const incomeId = income.id
      incomes.value.splice(index, 1)
      saveIncomes()
      addHistory('delete', {
        type: 'income',
        itemName: incomeName,
        itemId: incomeId,
        description: `Income "${incomeName}" deleted`,
        user: 'Admin'
      })
      showSuccessMessage.value = true
      successMessageTitle.value = t('incomeDeleted')
      successMessageText.value = t('incomeDeletedSuccess')
      setTimeout(() => {
        showSuccessMessage.value = false
      }, 3000)
    }
    showConfirmDialog.value = false
    activeActionMenu.value = null
  }
  showConfirmDialog.value = true
}

// Handle submit
const handleSubmit = () => {
  if (editingIncome.value) {
    // Update existing
    const index = incomes.value.findIndex(inc => inc.id === editingIncome.value.id)
    if (index !== -1) {
      incomes.value[index] = { ...form.value, id: editingIncome.value.id }
      saveIncomes()
      addHistory('update', {
        type: 'income',
        itemName: form.value.nameIncome,
        itemId: editingIncome.value.id,
        description: `Income "${form.value.nameIncome}" updated - Amount: ${form.value.paymentPrice}`,
        user: 'Admin'
      })
      showSuccessMessage.value = true
      successMessageTitle.value = t('incomeUpdated')
      successMessageText.value = t('incomeUpdatedSuccess')
      setTimeout(() => {
        showSuccessMessage.value = false
      }, 3000)
    }
  } else {
    // Add new
    const newIncome = {
      ...form.value,
      id: `INC${Date.now()}`
    }
    incomes.value.push(newIncome)
    saveIncomes()
    addHistory('add', {
      type: 'income',
      itemName: form.value.nameIncome,
      itemId: newIncome.id,
      description: `Income "${form.value.nameIncome}" added - Amount: ${form.value.paymentPrice}`,
      user: 'Admin'
    })
    showSuccessMessage.value = true
    successMessageTitle.value = t('incomeAdded')
    successMessageText.value = t('incomeAddedSuccess')
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 3000)
  }
  closeDrawer()
}

// Close drawer
const closeDrawer = () => {
  showDrawer.value = false
  isViewMode.value = false
  editingIncome.value = null
  form.value = {
    nameIncome: '',
    description: '',
    created: '',
    category: '',
    paymentDate: '',
    paymentPrice: 0,
    method: ''
  }
}

// Clear date filter
const clearDateFilter = () => {
  filterDateFrom.value = ''
  filterDateTo.value = ''
}

// Confirm action
const confirmActionFn = () => {
  if (confirmAction.value) {
    confirmAction.value()
  }
}

onMounted(() => {
  loadIncomes()
  document.addEventListener('click', handleClickOutside)
  
  // Listen for storage events
  window.addEventListener('storage', (e) => {
    if (e.key === 'incomes_data') {
      loadIncomes()
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('storage', loadIncomes)
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

/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
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
</style>
