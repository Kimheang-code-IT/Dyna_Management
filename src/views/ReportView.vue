<template>
  <div :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Revenue Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('totalRevenue') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">${{ totalRevenue.toFixed(2) }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2">{{ t('avgOrder') }} ${{ avgOrder.toFixed(2) }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Orders Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('orders') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">{{ totalOrders }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2">{{ t('itemsSold') }} {{ totalItemsSold }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Best Sale Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('bestSale') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">${{ bestSale.total ? bestSale.total.toFixed(2) : '0.00' }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2">{{ t('saleId') }} {{ bestSale.id }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Reporting Range Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('reportingRange') }}</h3>
            <p class="text-2xl font-bold text-gray-800 dark:text-white">{{ reportingRange }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Sales Table -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
      <!-- Search and Filter Bar -->
      <div class="p-0 mb-2 sm:mb-3">
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center justify-between flex-wrap">
          <div class="relative w-full sm:w-[400px]">
            <div class="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="t('searchBySaleId')"
              class="w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]"
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
          
          <!-- Quick Filter Buttons and Date Picker -->
          <div class="flex items-center gap-2 flex-wrap">
            <!-- Quick Filter Buttons -->
            <div class="flex items-center gap-2">
              <button
                @click="setPeriodFilter('today')"
                :class="[
                  'px-4 py-2 rounded-sm text-xs font-medium transition-colors',
                  selectedPeriod === 'today'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                ]"
              >
                {{ t('today') || 'Today' }}
              </button>
              <button
                @click="setPeriodFilter('7days')"
                :class="[
                  'px-4 py-2 rounded-sm text-xs font-medium transition-colors',
                  selectedPeriod === '7days'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                ]"
              >
                {{ t('last7Days') || '7 Days' }}
              </button>
              <button
                @click="setPeriodFilter('3months')"
                :class="[
                  'px-4 py-2 rounded-sm text-xs font-medium transition-colors',
                  selectedPeriod === '3months'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                ]"
              >
                {{ t('last3Months') || '3 Months' }}
              </button>
            </div>
            
            <!-- Date Range Picker -->
            <div class="flex items-center gap-2">
              <label class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{{ t('dateBetween') }}:</label>
              <input
                v-model="filterDateFrom"
                type="date"
                @change="handleDatePickerChange"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]"
              />
              <span class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ t('to') }}</span>
              <input
                v-model="filterDateTo"
                type="date"
                @change="handleDatePickerChange"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]"
              />
              <button
                v-if="filterDateFrom || filterDateTo || selectedPeriod"
                @click="clearDateFilter"
                class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                :title="t('clear')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
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
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('no') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('saleId') || 'Sale ID' }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('date') || 'Date' }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('time') || 'Time' }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('products') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('itemsSoldCol') }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('topProducts') }}</th>
              <th class="px-4 py-3 text-right text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('revenue') || 'Revenue' }}</th>
              <th class="px-4 py-3 text-right text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('cumulativeTotal') || 'Cumulative Total' }}</th>
              <th class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600"></th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <!-- No Results Found -->
            <tr v-if="filteredSales.length === 0 && (searchQuery || selectedPeriod || filterDateFrom || filterDateTo)">
              <td colspan="10" class="px-4 py-12 text-center">
                <div class="flex flex-col items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ t('noResults') }}</p>
                </div>
              </td>
            </tr>
            <!-- Sale Rows -->
            <tr
              v-for="(sale, index) in filteredSales"
              :key="sale.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ index + 1 }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs font-bold text-gray-900 dark:text-white">{{ sale.id }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ sale.date }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ sale.time }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ sale.products }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs font-bold text-gray-900 dark:text-white">{{ sale.itemsSold }} {{ t('pcs') }}</td>
              <td class="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">
                <div class="flex flex-wrap gap-1">
                  <span v-for="(product, idx) in sale.topProducts" :key="idx" class="text-xs">
                    {{ product }}<span v-if="idx < sale.topProducts.length - 1">,</span>
                  </span>
                </div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-xs font-bold text-green-600 dark:text-green-400 text-right">${{ sale.total.toFixed(2) }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs font-bold text-blue-600 dark:text-blue-400 text-right">${{ getCumulativeTotal(index).toFixed(2) }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs font-medium">
                <button
                  @click="viewSale(sale)"
                  class="px-3 py-1 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors flex items-center gap-1 text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {{ t('view') }}
                </button>
              </td>
            </tr>
            <!-- Total Row -->
            <tr v-if="filteredSales.length > 0" class="bg-gray-50 dark:bg-gray-700 font-semibold">
              <td colspan="6" class="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">{{ t('total') || 'Total' }}</td>
              <td class="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">{{ totalItemsSold }} {{ t('pcs') }}</td>
              <td class="px-4 py-3 text-xs font-bold text-green-600 dark:text-green-400 text-right">${{ totalRevenue.toFixed(2) }}</td>
              <td class="px-4 py-3 text-xs font-bold text-blue-600 dark:text-blue-400 text-right">${{ totalRevenue.toFixed(2) }}</td>
              <td class="px-4 py-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Sale Details Drawer -->
    <Transition name="drawer">
      <div
        v-if="showDrawer"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
        @click.self="closeDrawer"
      >
        <div class="bg-white dark:bg-gray-800 w-full max-w-lg h-full shadow-2xl overflow-y-auto">
          <!-- Drawer Header -->
          <div class="sticky top-0 bg-white dark:bg-gray-800 px-6 py-4 flex items-center justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ t('saleDetails') }}</h2>
            </div>
            <button
              @click="closeDrawer"
              class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors"
              :title="t('close') || 'Close'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Drawer Content -->
          <div class="p-6" v-if="selectedSale">
            <!-- Summary Card -->
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 mb-6 border border-blue-100 dark:border-blue-800/50">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">{{ t('saleId') || 'Sale ID' }}</p>
                  <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ selectedSale.id }}</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">{{ t('totalAmount') }}</p>
                  <p class="text-3xl font-bold text-blue-600 dark:text-blue-400">${{ selectedSale.total.toFixed(2) }}</p>
                </div>
              </div>
            </div>
            
            <!-- Quick Info Grid -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <!-- Date -->
              <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div class="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">{{ t('date') || 'Date' }}</p>
                </div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ selectedSale.date }}</p>
              </div>
              
              <!-- Time -->
              <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div class="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">{{ t('time') || 'Time' }}</p>
                </div>
                <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ selectedSale.time }}</p>
              </div>
              
              <!-- Items Sold -->
              <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div class="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">{{ t('itemsSoldCol') }}</p>
                </div>
                <p class="text-lg font-bold text-gray-900 dark:text-white">{{ selectedSale.itemsSold }} {{ t('pcs') }}</p>
              </div>
              
              <!-- Products Count -->
              <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <div class="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">{{ t('products') }}</p>
                </div>
                <p class="text-lg font-bold text-gray-900 dark:text-white">{{ selectedSale.products }}</p>
              </div>
            </div>
            
            <!-- Sold By -->
            <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">{{ t('whoSale') || 'Sold By' }}</p>
                  <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ selectedSale.soldBy || t('admin') || 'Admin' }}</p>
                </div>
              </div>
            </div>
            
            <!-- Products List -->
            <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div class="bg-gray-50 dark:bg-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    {{ t('productName') || 'Products' }}
                  </h3>
                  <span class="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-full">{{ selectedSale.topProducts.length }}</span>
                </div>
              </div>
              <div class="divide-y divide-gray-200 dark:divide-gray-700 max-h-[300px] overflow-y-auto">
                <div
                  v-for="(product, index) in selectedSale.topProducts"
                  :key="index"
                  class="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span class="text-xs font-bold text-blue-600 dark:text-blue-400">{{ index + 1 }}</span>
                    </div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white flex-1">{{ product }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useI18n } from '../composables/useI18n'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
import salesData from '../data/sales.json'

// Load sales from JSON file
const sales = ref(salesData)

const searchQuery = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')
const selectedPeriod = ref(null)
const showDrawer = ref(false)
const selectedSale = ref(null)

// Reporting range display
const reportingRange = computed(() => {
  if (selectedPeriod.value === 'today') {
    return t('today') || 'Today'
  } else if (selectedPeriod.value === '7days') {
    return t('last7Days') || 'Last 7 Days'
  } else if (selectedPeriod.value === '3months') {
    return t('last3Months') || 'Last 3 Months'
  } else if (filterDateFrom.value && filterDateTo.value) {
    return `${formatDateDisplay(filterDateFrom.value)} - ${formatDateDisplay(filterDateTo.value)}`
  } else if (filterDateFrom.value) {
    return `${formatDateDisplay(filterDateFrom.value)} ${t('to')} ...`
  } else if (filterDateTo.value) {
    return `... ${t('to')} ${formatDateDisplay(filterDateTo.value)}`
  }
  return t('allTime') || 'All Time'
})

// Format date for display
const formatDateDisplay = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

// Date calculation functions
const getTodayDateRange = () => {
  const today = new Date()
  const dateStr = today.toISOString().split('T')[0]
  return { from: dateStr, to: dateStr }
}

const getLast7DaysRange = () => {
  const today = new Date()
  const sevenDaysAgo = new Date(today)
  sevenDaysAgo.setDate(today.getDate() - 6) // Include today, so 6 days ago + today = 7 days
  
  return {
    from: sevenDaysAgo.toISOString().split('T')[0],
    to: today.toISOString().split('T')[0]
  }
}

const getLast3MonthsRange = () => {
  const today = new Date()
  const threeMonthsAgo = new Date(today)
  threeMonthsAgo.setMonth(today.getMonth() - 3)
  
  return {
    from: threeMonthsAgo.toISOString().split('T')[0],
    to: today.toISOString().split('T')[0]
  }
}

// Set period filter
const setPeriodFilter = (period) => {
  selectedPeriod.value = period
  
  let dateRange
  if (period === 'today') {
    dateRange = getTodayDateRange()
  } else if (period === '7days') {
    dateRange = getLast7DaysRange()
  } else if (period === '3months') {
    dateRange = getLast3MonthsRange()
  } else {
    filterDateFrom.value = ''
    filterDateTo.value = ''
    return
  }
  
  filterDateFrom.value = dateRange.from
  filterDateTo.value = dateRange.to
}

// Handle date picker change - clear quick filter when using date picker
const handleDatePickerChange = () => {
  selectedPeriod.value = null
}

// Clear date filter
const clearDateFilter = () => {
  selectedPeriod.value = null
  filterDateFrom.value = ''
  filterDateTo.value = ''
}

const filteredSales = computed(() => {
  let filtered = sales.value
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(sale => 
      sale.id.toLowerCase().includes(query) ||
      sale.topProducts.some(p => p.toLowerCase().includes(query))
    )
  }
  
  // Date range filtering
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(sale => {
      // Parse sale date (format: "8/16/2024")
      const [month, day, year] = sale.date.split('/')
      const saleDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
      saleDate.setHours(0, 0, 0, 0) // Reset time to start of day
      
      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999) // End of day
        return saleDate >= fromDate && saleDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return saleDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return saleDate <= toDate
      }
      return true
    })
  }
  
  return filtered
})

const totalRevenue = computed(() => {
  return filteredSales.value.reduce((sum, sale) => sum + sale.total, 0)
})

const totalOrders = computed(() => filteredSales.value.length)

const totalItemsSold = computed(() => {
  return filteredSales.value.reduce((sum, sale) => sum + sale.itemsSold, 0)
})

const avgOrder = computed(() => {
  return totalOrders.value > 0 ? totalRevenue.value / totalOrders.value : 0
})

const bestSale = computed(() => {
  const sorted = [...filteredSales.value].sort((a, b) => b.total - a.total)
  return sorted[0] || { id: 'N/A', total: 0 }
})

const viewSale = (sale) => {
  selectedSale.value = sale
  showDrawer.value = true
}

const closeDrawer = () => {
  showDrawer.value = false
  selectedSale.value = null
}

// Get cumulative total up to a specific index
const getCumulativeTotal = (index) => {
  let cumulative = 0
  for (let i = 0; i <= index; i++) {
    cumulative += filteredSales.value[i].total
  }
  return cumulative
}
</script>

<style scoped>
/* Drawer Transition */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-active > div,
.drawer-leave-active > div {
  transition: transform 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from > div,
.drawer-leave-to > div {
  transform: translateX(100%);
}
</style>
