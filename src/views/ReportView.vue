<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full capitalize', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Revenue Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('totalRevenue') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              ${{ totalRevenue.toFixed(2) }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2">{{ t('netProfit') || 'Net Profit' }}
              ${{ (totalRevenue - totalExpenses).toFixed(2) }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Orders Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('orders') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalOrders }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2">{{ t('totalExpenses') ||
              'TotalExpenses' }} ${{ totalExpenses.toFixed(2) }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Best Sale Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('bestSale') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              ${{ bestSale.amount ? bestSale.amount.toFixed(2) : '0.00' }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2">{{ t('saleId') }} {{ bestSale.source
              || bestSale.id }}
            </p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Reporting Range Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('reportingRange') }}</h3>
            <p class="text-2xl font-bold text-gray-800 dark:text-white">{{ reportingRange }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Transactions Table with Tabs -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
      <!-- Tabs Navigation -->
      <div class="mb-2 sm:mb-3">
        <div class="flex gap-2 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
            'px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 border-b-2',
            activeTab === tab.id
              ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
          ]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tab.iconPath" />
            </svg>
            {{ tab.label }}
          </button>
        </div>
      </div>
      <!-- Search and Filter Bar -->
      <div class="p-0 mb-2 sm:mb-3">
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center justify-between flex-wrap">
          <div class="relative w-full sm:w-[300px]">
            <div class="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input v-model="searchQuery" type="text" :placeholder="t('search')"
              class="w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]" />
            <button v-if="searchQuery" @click="searchQuery = ''"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Quick Filter Buttons and Date Picker -->
          <div class="flex items-center gap-2 flex-wrap">
            <!-- Quick Filter Buttons -->
            <div class="flex items-center gap-2">
              <button @click="setPeriodFilter('today')" :class="[
                'px-4 py-2 rounded-sm text-xs font-medium transition-colors',
                selectedPeriod === 'today'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              ]">
                {{ t('today') || 'Today' }}
              </button>
              <button @click="setPeriodFilter('7days')" :class="[
                'px-4 py-2 rounded-sm text-xs font-medium transition-colors',
                selectedPeriod === '7days'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              ]">
                {{ t('last7Days') || '7 Days' }}
              </button>
              <button @click="setPeriodFilter('3months')" :class="[
                'px-4 py-2 rounded-sm text-xs font-medium transition-colors',
                selectedPeriod === '3months'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              ]">
                {{ t('last3Months') || '3 Months' }}
              </button>
            </div>

            <!-- Date Range Picker -->
            <div class="flex items-center gap-2">
              <label class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{{ t('dateBetween')
              }}:</label>
              <input v-model="filterDateFrom" type="date" @change="handleDatePickerChange"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]" />
              <span class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ t('to') }}</span>
              <input v-model="filterDateTo" type="date" @change="handleDatePickerChange"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]" />
              <button v-if="filterDateFrom || filterDateTo || selectedPeriod" @click="clearDateFilter"
                class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                :title="t('clear')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Print Selected Button -->
            <button v-if="selectedTransactions.size > 0" @click="printSelected"
              class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              {{ t('printSelected') || 'Print Selected' }} ({{ selectedTransactions.size }})
            </button>
          </div>
        </div>
      </div>
      <!-- Scrollable table container with sticky header -->
      <div class="max-h-[600px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm">
        <table class="w-full">
          <!-- Sticky Header -->
          <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
            <tr>
              <th
                class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                <input type="checkbox" :checked="selectAllChecked" @change="toggleSelectAll"
                  class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700" />
              </th>
              <!-- Student Payment Tab Headers -->
              <template v-if="activeTab === 'student_payment'">
                <th
                  class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('no') }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('student') }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('contact') }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('className') }}</th>
                <th
                  class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('invoiceNo') }}</th>
                <th
                  class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('amountDue') }}</th>
                <th
                  class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('method') || 'Method' }}</th>
                <th
                  class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('startDate') || 'Start Date' }}</th>
                <th
                  class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('endDate') || 'End Date' }}</th>
                <th
                  class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                </th>
              </template>
              <!-- Expense Tab Headers -->
              <template v-else-if="activeTab === 'expense'">
                <th
                  class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('no') }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('expenseName') }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('description') }}</th>
                <th
                  class="px-3 py-3 text-right text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('amount') || 'Amount' }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('saler') }}</th>
                <th
                  class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('created') || 'Created' }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('supplier') }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('contact') }}</th>
                <th
                  class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                </th>
              </template>
              <!-- Income Tab Headers -->
              <template v-else-if="activeTab === 'income'">
                <th
                  class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('no') }}</th>
                <th
                  class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('nameIncome') }}</th>
                <th
                  class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('description') }}</th>
                <th
                  class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('created') }}</th>
                <th
                  class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('category') }}</th>
                <th
                  class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('paymentDate') }}</th>
                <th
                  class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('paymentPrice') }}</th>
                <th
                  class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('method') }}</th>
                <th
                  class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                </th>
              </template>
              <!-- POS Tab Headers -->
              <template v-else-if="activeTab === 'pos'">
                <th
                  class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('no') }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('invoiceNo') }}</th>
                <th
                  class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('date') || 'Date' }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('customer') || 'Customer' }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('phoneCustomer') || 'Phone Customer' }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('phoneSaler') || 'Phone Saler' }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('address') || 'Address' }}</th>
                <th
                  class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('items') || 'Items' }}</th>
                <th
                  class="px-3 py-3 text-right text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('amount') || 'Amount' }}</th>
                <th
                  class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                </th>
              </template>
              <!-- Employee Salary Tab Headers -->
              <template v-else-if="activeTab === 'employee_salary'">
                <th
                  class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('no') }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('employee') || 'Employee' }}</th>
                <th
                  class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('department') || 'Department' }}</th>
                <th
                  class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('hours') || 'Hours' }}</th>
                <th
                  class="px-3 py-3 text-right text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('rate') || 'Rate' }}</th>
                <th
                  class="px-3 py-3 text-right text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('totalPayout') || 'Total Payout' }}</th>
                <th
                  class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                </th>
              </template>
              <!-- Other Tabs Headers -->
              <template v-else>
                <th
                  class="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('no') }}</th>
                <th
                  class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('date') || 'Date' }}</th>
                <th
                  class="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ getTabColumnHeader() }}</th>
                <th
                  class="px-4 py-3 text-right text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('amount') || 'Amount' }}</th>
                <th
                  class="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('status') || 'Status' }}</th>
                <th
                  class="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('invoice') || 'Invoice' }}</th>
              </template>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <!-- No Results Found -->
            <tr v-if="filteredTransactions.length === 0">
              <td :colspan="getTableColspan()" class="px-4 py-12 text-center">
                <div class="flex flex-col items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {{ (searchQuery || selectedPeriod || filterDateFrom || filterDateTo) ? t('noResults') :
                      t('noTransactions') ||
                      'No transactions found' }}
                  </p>
                </div>
              </td>
            </tr>
            <!-- Transaction Rows -->
            <tr v-for="(transaction, index) in filteredTransactions" :key="transaction.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <td class="px-2 py-3 text-center">
                <input type="checkbox" :checked="selectedTransactions.has(transaction.id)"
                  @change="toggleSelection(transaction.id)"
                  class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700" />
              </td>
              <!-- Student Payment Tab Rows -->
              <template v-if="activeTab === 'student_payment'">
                <td class="px-2 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ index +
                  1 }}</td>
                <!-- Student Column: Image, Khmer, English, ID -->
                <td class="px-3 py-3 text-xs">
                  <div class="flex items-center gap-2">
                    <!-- Student Image -->
                    <div
                      class="w-10 h-10 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                      <img v-if="transaction.data?.student?.profileImage" :src="transaction.data.student.profileImage"
                        :alt="transaction.data.student.nameEnglish || transaction.data.student.name"
                        class="w-full h-full object-cover" />
                      <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                        {{ getInitials(transaction.data?.student?.nameEnglish || transaction.data?.student?.nameKhmer ||
                          transaction.data?.student?.name || 'N/A') }}
                      </span>
                    </div>
                    <!-- Student Info -->
                    <div class="flex-1 min-w-0">
                      <div class="font-medium text-gray-900 dark:text-white">
                        {{ transaction.data?.student?.nameKhmer || transaction.data?.student?.nameEnglish ||
                          transaction.data?.student?.name || 'N/A' }}
                      </div>
                      <div class="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">
                        {{ transaction.data?.student?.nameEnglish || transaction.data?.student?.name || 'N/A' }}
                      </div>
                      <div class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                        {{ transaction.data?.student?.id || 'N/A' }}
                      </div>
                    </div>
                  </div>
                </td>
                <!-- Contact Column: Phone, Email -->
                <td class="px-3 py-3 text-xs">
                  <div class="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 flex-shrink-0" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{{ transaction.data?.student?.contact || transaction.data?.student?.phone || 'N/A' }}</span>
                  </div>
                  <div class="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 flex-shrink-0" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="truncate">{{ transaction.data?.student?.email || 'N/A' }}</span>
                  </div>
                </td>
                <!-- Class Name Column: ClassName, Teacher -->
                <td class="px-3 py-3 text-xs">
                  <div class="font-medium text-gray-900 dark:text-white">{{ transaction.data?.className || 'N/A' }}
                  </div>
                  <div class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                    {{ getClassTeacher(transaction.data?.classId) || 'N/A' }}
                  </div>
                </td>
                <!-- Invoice No -->
                <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
                  transaction.source }}</td>
                <!-- Amount Due -->
                <td
                  class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center font-semibold">
                  ${{ transaction.amount.toFixed(2) }}</td>
                <!-- Method -->
                <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
                  <span class="px-2 py-1 text-[10px] font-medium rounded-full"
                    :class="transaction.data?.method === 'Bank' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'">
                    {{ transaction.data?.method || 'N/A' }}
                  </span>
                </td>
                <!-- Start Date -->
                <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
                  formatDateOnly(transaction.data?.startDate || transaction.data?.created) }}</td>
                <!-- End Date -->
                <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
                  formatDateOnly(transaction.data?.endDate || transaction.data?.dueDate) }}</td>
                <!-- Action Column: Invoice Icon -->
                <td class="px-2 py-3 whitespace-nowrap text-xs font-medium">
                  <button @click="openInvoice(transaction)"
                    class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    :title="t('invoice')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </td>
              </template>
              <!-- Expense Tab Rows -->
              <template v-else-if="activeTab === 'expense'">
                <td class="px-2 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ index +
                  1 }}</td>
                <td class="px-3 py-3 text-xs text-gray-900 dark:text-white">{{ transaction.data?.expenseName ||
                  transaction.source || 'N/A' }}</td>
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300 max-w-xs truncate"
                  :title="transaction.data?.description">{{ transaction.data?.description || 'N/A' }}</td>
                <td class="px-3 py-3 whitespace-nowrap text-xs font-bold text-red-600 dark:text-red-400 text-right">${{
                  transaction.amount.toFixed(2) }}</td>
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300">{{ transaction.data?.saler || 'N/A' }}
                </td>
                <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
                  formatDateOnly(transaction.data?.created || transaction.date) }}</td>
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300">{{ transaction.data?.supplier || 'N/A' }}
                </td>
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300">{{ transaction.data?.contact || 'N/A' }}
                </td>
                <!-- Action Column: Invoice Icon -->
                <td class="px-2 py-3 whitespace-nowrap text-xs font-medium">
                  <button @click="openInvoice(transaction)"
                    class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    :title="t('invoice')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </td>
              </template>
              <!-- Income Tab Rows -->
              <template v-else-if="activeTab === 'income'">
                <td class="py-3 text-center text-xs text-gray-900 dark:text-white">{{ index + 1 }}</td>
                <td class="px-2 py-3 text-center text-xs text-gray-900 dark:text-white">{{ transaction.data?.nameIncome
                  || transaction.source || 'N/A' }}</td>
                <td class="py-3 text-center text-xs text-gray-900 dark:text-white max-w-xs truncate"
                  :title="transaction.data?.description">{{ transaction.data?.description || 'N/A' }}</td>
                <td class="py-3 text-center text-xs text-gray-900 dark:text-white">{{
                  formatDate(transaction.data?.created || transaction.date) }}</td>
                <td class="py-3 text-center text-xs text-gray-900 dark:text-white">{{ transaction.data?.category ||
                  'N/A' }}</td>
                <td class="py-3 text-center text-xs text-gray-900 dark:text-white">{{
                  formatDate(transaction.data?.paymentDate || transaction.date) }}</td>
                <td class="py-3 text-center text-xs text-gray-900 dark:text-white">${{
                  transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
                </td>
                <td class="py-3 text-center text-xs text-gray-900 dark:text-white">{{ transaction.data?.method || 'N/A'
                }}</td>
                <!-- Action Column: Invoice Icon -->
                <td class="py-3 text-center relative">
                  <div class="flex items-center justify-center">
                    <button @click="openInvoice(transaction)"
                      class="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      :title="t('invoice')">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                </td>
              </template>
              <!-- POS Tab Rows -->
              <template v-else-if="activeTab === 'pos'">
                <td class="px-2 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ index +
                  1 }}</td>
                <td class="px-3 py-3 text-xs text-gray-900 dark:text-white font-medium">{{ transaction.data?.invoiceNo
                  || transaction.source || 'N/A' }}</td>
                <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
                  formatDateOnly(transaction.data?.date || transaction.date) }}</td>
                <td class="px-3 py-3 text-xs text-gray-900 dark:text-white">{{ transaction.data?.customerInfo?.name ||
                  'Walk-in Customer' }}</td>
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300">{{ transaction.data?.customerInfo?.phone
                  || transaction.data?.customerInfo?.phoneCustomer || '+00000000' }}</td>
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300">{{
                  transaction.data?.customerInfo?.phoneSaler || transaction.data?.phoneSaler || '099999999' }}</td>
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300">{{
                  transaction.data?.customerInfo?.address || 'no' }}</td>
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300 text-center">{{
                  transaction.data?.cart?.length || 0 }} {{ t('items') || 'items' }}</td>
                <td class="px-3 py-3 whitespace-nowrap text-xs font-bold text-green-600 dark:text-green-400 text-right">
                  ${{ transaction.amount.toFixed(2) }}</td>
                <!-- Action Column: Invoice Icon -->
                <td class="px-2 py-3 whitespace-nowrap text-xs font-medium">
                  <button @click="openInvoice(transaction)"
                    class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    :title="t('invoice')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </td>
              </template>
              <!-- Employee Salary Tab Rows -->
              <template v-else-if="activeTab === 'employee_salary'">
                <td class="px-2 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ index +
                  1 }}</td>
                <!-- Employee Column: Image, Name -->
                <td class="px-3 py-3 text-xs">
                  <div class="flex items-center gap-2">
                    <!-- Employee Image -->
                    <div
                      class="w-10 h-10 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                      <img v-if="transaction.data?.employee?.profileImage" :src="transaction.data.employee.profileImage"
                        :alt="transaction.data.employee.nameEnglish || transaction.data.employee.nameKhmer || transaction.data.employee.name"
                        class="w-full h-full object-cover" />
                      <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                        {{ getInitials(transaction.data?.employee?.nameEnglish || transaction.data?.employee?.nameKhmer
                          || transaction.data?.employee?.name || 'N/A') }}
                      </span>
                    </div>
                    <!-- Employee Info -->
                    <div class="flex-1 min-w-0">
                      <div class="font-medium text-gray-900 dark:text-white">
                        {{ transaction.data?.employee?.nameKhmer || transaction.data?.employee?.nameEnglish ||
                          transaction.data?.employee?.name || 'N/A' }}
                      </div>
                      <div class="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">
                        {{ transaction.data?.employee?.nameEnglish || transaction.data?.employee?.name || 'N/A' }}
                      </div>
                    </div>
                  </div>
                </td>
                <!-- Department Column -->
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300">{{
                  getEmployeeDepartment(transaction.data?.employee) || 'N/A' }}</td>
                <!-- Hours Column -->
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300 text-center">{{
                  transaction.data?.hoursWorked || 0 }} {{ t('hrs') || 'hrs' }}</td>
                <!-- Rate Column -->
                <td class="px-3 py-3 text-xs text-gray-700 dark:text-gray-300 text-right">${{ (transaction.data?.rate ||
                  0).toFixed(2) }}</td>
                <!-- Total Payout Column -->
                <td class="px-3 py-3 whitespace-nowrap text-xs font-bold text-green-600 dark:text-green-400 text-right">
                  ${{ transaction.amount.toFixed(2) }}</td>
                <!-- Action Column: Invoice Icon -->
                <td class="px-2 py-3 whitespace-nowrap text-xs font-medium">
                  <button @click="openInvoice(transaction)"
                    class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    :title="t('invoice')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </td>
              </template>
              <!-- Other Tabs Rows -->
              <template v-else>
                <td class="px-4 py-3 text-center text-xs text-gray-700 dark:text-gray-300">{{ index + 1 }}</td>
                <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{
                  formatDateOnly(transaction.date) }}</td>
                <td class="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">
                  <div class="flex flex-col">
                    <span class="font-medium">{{ getTransactionDisplayName(transaction) }}</span>
                    <span class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">{{ transaction.source }}</span>
                  </div>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-xs font-bold text-green-600 dark:text-green-400 text-right">
                  ${{ transaction.amount.toFixed(2) }}</td>
                <td class="px-4 py-3 whitespace-nowrap text-center">
                  <span v-if="transaction.status" :class="getStatusClass(transaction.status)"
                    class="px-2 py-1 text-[10px] font-medium rounded-full">
                    {{ transaction.status }}
                  </span>
                  <span v-else class="text-xs text-gray-500 dark:text-gray-400">-</span>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-center">
                  <button @click="openInvoice(transaction)"
                    class="p-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
                    :title="t('viewInvoice') || 'View Invoice'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </td>
              </template>
            </tr>
            <!-- Total Row -->
            <tr v-if="filteredTransactions.length > 0" class="bg-gray-50 dark:bg-gray-700 font-semibold">
              <td
                :colspan="activeTab === 'student_payment' ? 9 : activeTab === 'expense' ? 7 : activeTab === 'income' ? 7 : activeTab === 'pos' ? 9 : activeTab === 'employee_salary' ? 6 : getTableColspan() - 1"
                class="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">{{ t('total') || 'Total' }}</td>
              <td v-if="activeTab === 'student_payment'"
                class="px-3 py-3 text-xs font-bold text-green-600 dark:text-green-400 text-center">${{
                  totalAmount.toFixed(2) }}
              </td>
              <td v-else-if="activeTab === 'expense'"
                class="px-3 py-3 text-xs font-bold text-red-600 dark:text-red-400 text-right">${{ totalAmount.toFixed(2)
                }}</td>
              <td v-else-if="activeTab === 'income'"
                class="px-3 py-3 text-xs font-bold text-green-600 dark:text-green-400 text-right">${{
                  totalAmount.toFixed(2) }}
              </td>
              <td v-else-if="activeTab === 'pos'"
                class="px-3 py-3 text-xs font-bold text-green-600 dark:text-green-400 text-right">${{
                  totalAmount.toFixed(2) }}
              </td>
              <td v-else-if="activeTab === 'employee_salary'"
                class="px-3 py-3 text-xs font-bold text-green-600 dark:text-green-400 text-right">${{
                  totalAmount.toFixed(2) }}
              </td>
              <td v-else class="px-4 py-3 text-xs font-bold text-green-600 dark:text-green-400 text-right">${{
                totalAmount.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Invoice Drawer -->
    <Transition name="drawer">
      <div v-if="showInvoiceDrawer" class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click.self="showInvoiceDrawer = false">
        <div class="absolute right-0 top-0 h-full w-full max-w-3xl bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div
            class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex items-center justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-bold text-black dark:text-white capitalize">{{ t('invoice') }}</h2>
            <div class="flex items-center gap-2">
              <button @click="downloadInvoice"
                class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ t('download') || 'Download' }}
              </button>
              <button @click="printInvoice"
                class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                {{ t('print') }}
              </button>
              <button @click="showInvoiceDrawer = false"
                class="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div v-if="selectedTransaction" class="p-4 sm:p-6 lg:p-8 bg-white" id="invoice-content">
            <!-- Student Payment Invoice -->
            <template v-if="selectedTransaction.type === 'student_payment'">
              <!-- Header Section -->
              <div class="flex justify-between items-start mb-8">
                <div>
                  <div class="flex items-center gap-3">
                    <img :src="logoImage" alt="Company Logo" class="h-12 w-auto object-contain" />
                  </div>
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-gray-900 capitalize">{{ t('invoice') }}</h2>
                </div>
              </div>
              <hr class="border-gray-300 my-4">
              <!-- Invoice Info and Student Info -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
                <div>
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{{ t('invoiceInfo') }}
                  </h3>
                  <div class="space-y-2.5">
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('invoiceNo') }}:</span>
                      <span class="text-sm text-gray-900 font-semibold">{{ selectedTransaction.data?.invoiceNo ||
                        selectedTransaction.source }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('startDate') || 'Start Date'
                      }}:</span>
                      <span class="text-sm text-gray-900">{{ formatDateOnly(selectedTransaction.data?.startDate ||
                        selectedTransaction.data?.created) }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('endDate') || 'End Date'
                      }}:</span>
                      <span class="text-sm text-gray-900">{{ formatDateOnly(selectedTransaction.data?.endDate ||
                        selectedTransaction.data?.dueDate) }}</span>
                    </div>
                    <div v-if="selectedTransaction.data?.paidDate" class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('paymentDate') }}:</span>
                      <span class="text-sm text-gray-900">{{ formatDateOnly(selectedTransaction.data.paidDate) }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('method') || 'Method' }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.method || 'N/A' }}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="space-y-2.5">
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('name') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.student?.nameKhmer ||
                        selectedTransaction.data?.student?.nameEnglish || selectedTransaction.data?.student?.name ||
                        'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('phone') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.student?.contact ||
                        selectedTransaction.data?.student?.phone || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('registered') || 'Registered'
                      }}:</span>
                      <span class="text-sm text-gray-900">{{
                        formatDateOnly(selectedTransaction.data?.student?.registered) || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('session') || 'Session'
                      }}:</span>
                      <span class="text-sm text-gray-900">{{ getStudentSession(selectedTransaction.data?.student?.id) ||
                        'N/A' }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Itemized List -->
              <div class="mb-8">
                <div class="bg-blue-600 text-white px-4 py-3">
                  <div class="grid grid-cols-12 gap-4 text-sm font-semibold">
                    <div class="col-span-1">{{ t('no') }}</div>
                    <div class="col-span-5">{{ t('description') }}</div>
                    <div class="col-span-2 text-center">{{ t('price') }}</div>
                    <div class="col-span-2 text-center">{{ t('qty') }}</div>
                    <div class="col-span-2 text-right">{{ t('total') }}</div>
                  </div>
                </div>
                <div class="border border-gray-200 border-t-0">
                  <div class="px-4 py-3 border-b border-gray-200 last:border-b-0">
                    <div class="grid grid-cols-12 gap-4 text-sm">
                      <div class="col-span-1 text-gray-700">01</div>
                      <div class="col-span-5 text-gray-900 font-medium">{{ t('payment') || 'Payment' }}</div>
                      <div class="col-span-2 text-center text-gray-700">${{ selectedTransaction.amount.toFixed(2) }}
                      </div>
                      <div class="col-span-2 text-center text-gray-700">1</div>
                      <div class="col-span-2 text-right text-gray-900 font-medium">${{
                        selectedTransaction.amount.toFixed(2) }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Terms & Conditions and Payment Summary -->
              <div class="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{{
                    t('termsAndConditions') }}</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ t('thankYouMessage') }}</p>
                </div>
                <div>
                  <div class="space-y-3">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">{{ t('subtotal') || 'Subtotal' }}</span>
                      <span class="text-gray-900">${{ selectedTransaction.amount.toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">{{ t('discount') || 'Discount' }}</span>
                      <span class="text-gray-900">$0.00</span>
                    </div>
                    <div class="flex justify-between text-lg font-bold pt-2 border-t border-gray-300">
                      <span class="text-gray-900">{{ t('grandTotal') }}</span>
                      <span class="text-gray-900">${{ selectedTransaction.amount.toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Footer -->
              <div class="bg-blue-600 text-white py-4 px-6 rounded-sm mt-8">
                <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>{{ schoolInfo.facebook || 'Your Facebook Page' }}</span>
                  </div>
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
            </template>

            <!-- POS Invoice -->
            <template v-else-if="selectedTransaction.type === 'pos'">
              <!-- Header Section -->
              <div class="flex justify-between items-start mb-8">
                <div>
                  <div class="flex items-center gap-3">
                    <img :src="logoImage" alt="Company Logo" class="h-12 w-auto object-contain" />
                  </div>
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-gray-900 capitalize">{{ t('invoice') }}</h2>
                </div>
              </div>
              <hr class="border-gray-300 my-4">
              <!-- Invoice Info and Customer Info -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
                <div>
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{{ t('invoiceInfo') }}
                  </h3>
                  <div class="space-y-2.5">
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('invoiceNo') }}:</span>
                      <span class="text-sm text-gray-900 font-semibold">{{ selectedTransaction.data?.invoiceNo ||
                        selectedTransaction.source }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('date') }}:</span>
                      <span class="text-sm text-gray-900">{{ formatDateOnly(selectedTransaction.data?.date ||
                        selectedTransaction.date) }}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="space-y-2.5">
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('name') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.customerInfo?.name }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('phoneCustomer') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.customerInfo?.phone ||
                        selectedTransaction.data?.customerInfo?.phoneCustomer || '+00000000' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('phoneSaler') || 'Phone Saler'
                      }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.customerInfo?.phoneSaler ||
                        selectedTransaction.data?.phoneSaler || '099999999' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('address') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.customerInfo?.address || 'no'
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Itemized List -->
              <div class="mb-8">
                <div class="bg-blue-600 text-white px-4 py-3">
                  <div class="grid grid-cols-12 gap-4 text-sm font-semibold">
                    <div class="col-span-1">{{ t('no') }}</div>
                    <div class="col-span-5">{{ t('description') }}</div>
                    <div class="col-span-2 text-center">{{ t('price') }}</div>
                    <div class="col-span-2 text-center">{{ t('qty') }}</div>
                    <div class="col-span-2 text-right">{{ t('total') }}</div>
                  </div>
                </div>
                <div class="border border-gray-200 border-t-0">
                  <div v-for="(item, index) in (selectedTransaction.data?.cart || [])" :key="item.id || index"
                    class="px-4 py-3 border-b border-gray-200 last:border-b-0">
                    <div class="grid grid-cols-12 gap-4 text-sm">
                      <div class="col-span-1 text-gray-700">{{ String(index + 1).padStart(2, '0') }}</div>
                      <div class="col-span-5 text-gray-900 font-medium">{{ item.name || item.productName || 'N/A' }}
                      </div>
                      <div class="col-span-2 text-center text-gray-700">${{ (item.price || 0).toFixed(2) }}</div>
                      <div class="col-span-2 text-center text-gray-700">{{ item.quantity || 0 }}</div>
                      <div class="col-span-2 text-right text-gray-900 font-medium">${{ ((item.price || 0) *
                        (item.quantity || 0)).toFixed(2) }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Terms & Conditions and Payment Summary -->
              <div class="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{{
                    t('termsAndConditions') }}</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ t('thankYouMessage') }}</p>
                </div>
                <div>
                  <div class="space-y-3">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">{{ t('subtotal') || 'Subtotal' }}</span>
                      <span class="text-gray-900">${{ selectedTransaction.amount.toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">{{ t('discount') || 'Discount' }}</span>
                      <span class="text-gray-900">${{ (selectedTransaction.data?.discount || 0).toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-lg font-bold pt-2 border-t border-gray-300">
                      <span class="text-gray-900">{{ t('grandTotal') }}</span>
                      <span class="text-gray-900">${{ selectedTransaction.amount.toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Footer -->
              <div class="bg-blue-600 text-white py-4 px-6 rounded-sm mt-8">
                <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>{{ schoolInfo.facebook || 'Your Facebook Page' }}</span>
                  </div>
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
            </template>

            <!-- Employee Salary Invoice -->
            <template v-else-if="selectedTransaction.type === 'employee_salary'">
              <!-- Header Section -->
              <div class="flex justify-between items-start mb-8">
                <div>
                  <div class="flex items-center gap-3">
                    <img :src="logoImage" alt="Company Logo" class="h-12 w-auto object-contain" />
                  </div>
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-gray-900 capitalize">{{ t('invoice') }}</h2>
                </div>
              </div>
              <hr class="border-gray-300 my-4">
              <!-- Invoice Info and Employee Info -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
                <div>
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{{ t('invoiceInfo') }}
                  </h3>
                  <div class="space-y-2.5">
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('invoiceNo') }}:</span>
                      <span class="text-sm text-gray-900 font-semibold">{{ selectedTransaction.source }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('date') }}:</span>
                      <span class="text-sm text-gray-900">{{ formatDateOnly(selectedTransaction.data?.paidDate ||
                        selectedTransaction.date) }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('method') || 'Method' }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.method || 'Bank Transfer'
                      }}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="space-y-2.5">
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('employee') || 'Employee'
                      }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.employee?.nameKhmer ||
                        selectedTransaction.data?.employee?.nameEnglish || selectedTransaction.data?.employee?.name ||
                        'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('department') || 'Department'
                      }}:</span>
                      <span class="text-sm text-gray-900">{{ getEmployeeDepartment(selectedTransaction.data?.employee)
                        || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('phone') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.employee?.phone || 'N/A'
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Itemized List -->
              <div class="mb-8">
                <div class="bg-blue-600 text-white px-4 py-3">
                  <div class="grid grid-cols-12 gap-4 text-sm font-semibold">
                    <div class="col-span-1">{{ t('no') }}</div>
                    <div class="col-span-5">{{ t('description') }}</div>
                    <div class="col-span-2 text-center">{{ t('hours') || 'Hours' }}</div>
                    <div class="col-span-2 text-center">{{ t('rate') || 'Rate' }}</div>
                    <div class="col-span-2 text-right">{{ t('total') }}</div>
                  </div>
                </div>
                <div class="border border-gray-200 border-t-0">
                  <div class="px-4 py-3 border-b border-gray-200 last:border-b-0">
                    <div class="grid grid-cols-12 gap-4 text-sm">
                      <div class="col-span-1 text-gray-700">01</div>
                      <div class="col-span-5 text-gray-900 font-medium">{{ t('salaryPayment') || 'Salary Payment' }}
                      </div>
                      <div class="col-span-2 text-center text-gray-700">{{ selectedTransaction.data?.hoursWorked || 0 }}
                        {{ t('hrs') || 'hrs' }}</div>
                      <div class="col-span-2 text-center text-gray-700">${{ (selectedTransaction.data?.rate ||
                        0).toFixed(2) }}</div>
                      <div class="col-span-2 text-right text-gray-900 font-medium">${{
                        selectedTransaction.amount.toFixed(2) }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Terms & Conditions and Payment Summary -->
              <div class="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{{
                    t('termsAndConditions') }}</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ t('thankYouMessage') }}</p>
                </div>
                <div>
                  <div class="space-y-3">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">{{ t('subtotal') || 'Subtotal' }}</span>
                      <span class="text-gray-900">${{ selectedTransaction.amount.toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">{{ t('discount') || 'Discount' }}</span>
                      <span class="text-gray-900">$0.00</span>
                    </div>
                    <div class="flex justify-between text-lg font-bold pt-2 border-t border-gray-300">
                      <span class="text-gray-900">{{ t('grandTotal') }}</span>
                      <span class="text-gray-900">${{ selectedTransaction.amount.toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Footer -->
              <div class="bg-blue-600 text-white py-4 px-6 rounded-sm mt-8">
                <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>{{ schoolInfo.facebook || 'Your Facebook Page' }}</span>
                  </div>
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
            </template>

            <!-- Income Invoice -->
            <template v-else-if="selectedTransaction.type === 'income'">
              <!-- Header Section -->
              <div class="flex justify-between items-start mb-8">
                <div>
                  <div class="flex items-center gap-3">
                    <img :src="logoImage" alt="Company Logo" class="h-12 w-auto object-contain" />
                  </div>
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-gray-900 capitalize">{{ t('invoice') }}</h2>
                </div>
              </div>
              <hr class="border-gray-300 my-4">
              <!-- Invoice Info and Income Info -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
                <div>
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{{ t('invoiceInfo') }}
                  </h3>
                  <div class="space-y-2.5">
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('invoiceNo') }}:</span>
                      <span class="text-sm text-gray-900 font-semibold">{{ selectedTransaction.source || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('date') }}:</span>
                      <span class="text-sm text-gray-900">{{ formatDateOnly(selectedTransaction.data?.paymentDate ||
                        selectedTransaction.data?.created || selectedTransaction.date) }}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="space-y-2.5">
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('nameIncome') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.nameIncome ||
                        selectedTransaction.source || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('category') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.category || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('method') || 'Method' }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.method || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('description') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.description || 'N/A' }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Itemized List -->
              <div class="mb-8">
                <div class="bg-blue-600 text-white px-4 py-3">
                  <div class="grid grid-cols-12 gap-4 text-sm font-semibold">
                    <div class="col-span-1">{{ t('no') }}</div>
                    <div class="col-span-5">{{ t('description') }}</div>
                    <div class="col-span-2 text-center">{{ t('price') }}</div>
                    <div class="col-span-2 text-center">{{ t('qty') }}</div>
                    <div class="col-span-2 text-right">{{ t('total') }}</div>
                  </div>
                </div>
                <div class="border border-gray-200 border-t-0">
                  <div class="px-4 py-3 border-b border-gray-200 last:border-b-0">
                    <div class="grid grid-cols-12 gap-4 text-sm">
                      <div class="col-span-1 text-gray-700">01</div>
                      <div class="col-span-5 text-gray-900 font-medium">{{ selectedTransaction.data?.nameIncome ||
                        selectedTransaction.source }}</div>
                      <div class="col-span-2 text-center text-gray-700">${{ selectedTransaction.amount.toFixed(2) }}
                      </div>
                      <div class="col-span-2 text-center text-gray-700">1</div>
                      <div class="col-span-2 text-right text-gray-900 font-medium">${{
                        selectedTransaction.amount.toFixed(2) }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Terms & Conditions and Payment Summary -->
              <div class="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{{
                    t('termsAndConditions') }}</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ t('thankYouMessage') }}</p>
                </div>
                <div>
                  <div class="space-y-3">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">{{ t('subtotal') || 'Subtotal' }}</span>
                      <span class="text-gray-900">${{ selectedTransaction.amount.toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">{{ t('discount') || 'Discount' }}</span>
                      <span class="text-gray-900">$0.00</span>
                    </div>
                    <div class="flex justify-between text-lg font-bold pt-2 border-t border-gray-300">
                      <span class="text-gray-900">{{ t('grandTotal') }}</span>
                      <span class="text-gray-900">${{ selectedTransaction.amount.toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Footer -->
              <div class="bg-blue-600 text-white py-4 px-6 rounded-sm mt-8">
                <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>{{ schoolInfo.facebook || 'Your Facebook Page' }}</span>
                  </div>
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
            </template>

            <!-- Expense Invoice -->
            <template v-else-if="selectedTransaction.type === 'expense'">
              <!-- Header Section -->
              <div class="flex justify-between items-start mb-8">
                <div>
                  <div class="flex items-center gap-3">
                    <img :src="logoImage" alt="Company Logo" class="h-12 w-auto object-contain" />
                  </div>
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-gray-900 capitalize">{{ t('invoice') }}</h2>
                </div>
              </div>
              <hr class="border-gray-300 my-4">
              <!-- Invoice Info and Supplier Info -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
                <div>
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{{ t('invoiceInfo') }}
                  </h3>
                  <div class="space-y-2.5">
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('invoiceNo') }}:</span>
                      <span class="text-sm text-gray-900 font-semibold">{{ selectedTransaction.source || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('date') }}:</span>
                      <span class="text-sm text-gray-900">{{ formatDateOnly(selectedTransaction.data?.created ||
                        selectedTransaction.date) }}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="space-y-2.5">
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('expenseName') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.expenseName ||
                        selectedTransaction.source || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('supplier') || 'Supplier'
                      }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.supplier || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('contact') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.contact || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('saler') || 'Saler' }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.saler || 'N/A' }}</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('description') }}:</span>
                      <span class="text-sm text-gray-900">{{ selectedTransaction.data?.description || 'N/A' }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Itemized List -->
              <div class="mb-8">
                <div class="bg-blue-600 text-white px-4 py-3">
                  <div class="grid grid-cols-12 gap-4 text-sm font-semibold">
                    <div class="col-span-1">{{ t('no') }}</div>
                    <div class="col-span-5">{{ t('description') }}</div>
                    <div class="col-span-2 text-center">{{ t('price') }}</div>
                    <div class="col-span-2 text-center">{{ t('qty') }}</div>
                    <div class="col-span-2 text-right">{{ t('total') }}</div>
                  </div>
                </div>
                <div class="border border-gray-200 border-t-0">
                  <div class="px-4 py-3 border-b border-gray-200 last:border-b-0">
                    <div class="grid grid-cols-12 gap-4 text-sm">
                      <div class="col-span-1 text-gray-700">01</div>
                      <div class="col-span-5 text-gray-900 font-medium">{{ selectedTransaction.data?.expenseName ||
                        selectedTransaction.source }}</div>
                      <div class="col-span-2 text-center text-gray-700">${{ selectedTransaction.amount.toFixed(2) }}
                      </div>
                      <div class="col-span-2 text-center text-gray-700">1</div>
                      <div class="col-span-2 text-right text-gray-900 font-medium">${{
                        selectedTransaction.amount.toFixed(2) }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Terms & Conditions and Payment Summary -->
              <div class="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{{
                    t('termsAndConditions') }}</h3>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ t('thankYouMessage') }}</p>
                </div>
                <div>
                  <div class="space-y-3">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">{{ t('subtotal') || 'Subtotal' }}</span>
                      <span class="text-gray-900">${{ selectedTransaction.amount.toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-600">{{ t('discount') || 'Discount' }}</span>
                      <span class="text-gray-900">$0.00</span>
                    </div>
                    <div class="flex justify-between text-lg font-bold pt-2 border-t border-gray-300">
                      <span class="text-gray-900">{{ t('grandTotal') }}</span>
                      <span class="text-gray-900">${{ selectedTransaction.amount.toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Footer -->
              <div class="bg-blue-600 text-white py-4 px-6 rounded-sm mt-8">
                <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>{{ schoolInfo.facebook || 'Your Facebook Page' }}</span>
                  </div>
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
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, onUnmounted, watch, h } from 'vue'
import { useI18n } from '../composables/useI18n'
import { textContains } from '../utils/search'
import html2canvas from 'html2canvas'
import logoImage from '../assets/logo.png'
import { addHistory } from '../utils/history'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()

// Tabs configuration
const tabs = [
  {
    id: 'student_payment',
    label: t('studentPayment') || 'Student Payment',
    icon: 'svg',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    id: 'pos',
    label: t('pos') || 'POS',
    icon: 'svg',
    iconPath: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
  },
  {
    id: 'employee_salary',
    label: t('employeeSalary') || 'Employee Salary',
    icon: 'svg',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    id: 'income',
    label: t('income') || 'Income',
    icon: 'svg',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    id: 'expense',
    label: t('expense') || 'Expense',
    icon: 'svg',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]

const activeTab = ref('student_payment')
const searchQuery = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')
const selectedPeriod = ref(null)
const showInvoiceDrawer = ref(false)
const selectedTransaction = ref(null)
const selectedTransactions = ref(new Set())

// Transaction data
const allTransactions = ref([])

// Load all transaction data
const loadStudentPayments = () => {
  try {
    const payments = JSON.parse(localStorage.getItem('payments_data') || '[]')
    const students = JSON.parse(localStorage.getItem('students_data') || '[]')

    return payments
      .filter(p => p.status === 'Paid')
      .map(payment => {
        const student = students.find(s => s.id === payment.studentId)
        return {
          id: payment.id,
          type: 'student_payment',
          date: payment.paidDate || payment.created,
          amount: payment.amountDue,
          source: payment.invoiceNo,
          status: payment.status,
          data: { ...payment, student }
        }
      })
  } catch (error) {
    console.error('Error loading student payments:', error)
    return []
  }
}

const loadPOSTransactions = () => {
  try {
    const transactions = JSON.parse(localStorage.getItem('pos_transactions_data') || '[]')
    return transactions.map(trans => ({
      id: trans.id,
      type: 'pos',
      date: trans.date,
      amount: trans.total,
      source: trans.invoiceNo,
      status: 'Completed',
      data: trans
    }))
  } catch (error) {
    console.error('Error loading POS transactions:', error)
    return []
  }
}

const loadEmployeeSalaries = () => {
  try {
    const payroll = JSON.parse(localStorage.getItem('employee_payroll_data') || '[]')
    const employees = JSON.parse(localStorage.getItem('employees_data') || '[]')

    return payroll
      .filter(p => p.status === 'Paid')
      .map(pay => {
        const employee = employees.find(e => e.id === pay.employeeId)
        return {
          id: pay.id,
          type: 'employee_salary',
          date: pay.paidDate || pay.created,
          amount: pay.totalPayout,
          source: `SAL-${pay.id}`,
          status: pay.status,
          data: { ...pay, employee }
        }
      })
  } catch (error) {
    console.error('Error loading employee salaries:', error)
    return []
  }
}

const loadIncomes = () => {
  try {
    const incomes = JSON.parse(localStorage.getItem('incomes_data') || '[]')
    return incomes.map(income => ({
      id: income.id,
      type: 'income',
      date: income.paymentDate || income.created,
      amount: income.paymentPrice,
      source: income.nameIncome,
      status: 'Active',
      data: income
    }))
  } catch (error) {
    console.error('Error loading incomes:', error)
    return []
  }
}

const loadExpenses = () => {
  try {
    const expenses = JSON.parse(localStorage.getItem('expenses_data') || '[]')
    return expenses.map(expense => ({
      id: expense.id,
      type: 'expense',
      date: expense.created,
      amount: expense.amount,
      source: expense.expenseName,
      status: expense.status,
      data: expense
    }))
  } catch (error) {
    console.error('Error loading expenses:', error)
    return []
  }
}

const loadAllTransactions = () => {
  allTransactions.value = [
    ...loadStudentPayments(),
    ...loadPOSTransactions(),
    ...loadEmployeeSalaries(),
    ...loadIncomes(),
    ...loadExpenses()
  ].sort((a, b) => new Date(b.date) - new Date(a.date))
}

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

// Watch active tab to reload data
watch(activeTab, () => {
  loadAllTransactions()
})

// Handle storage changes (for cross-window/tab updates)
const handleStorageChange = (e) => {
  if (['payments_data', 'pos_transactions_data', 'employee_payroll_data', 'incomes_data', 'expenses_data'].includes(e.key)) {
    loadAllTransactions()
  }
}

onMounted(() => {
  loadAllTransactions()

  // Listen for storage events (cross-window/tab updates)
  window.addEventListener('storage', handleStorageChange)

  // Listen for custom events from same window (these are dispatched when data changes)
  window.addEventListener('posTransactionSaved', loadAllTransactions)
  window.addEventListener('checkoutCompleted', loadAllTransactions)
  window.addEventListener('paymentConfirmed', loadAllTransactions)
  window.addEventListener('incomeAdded', loadAllTransactions)
  window.addEventListener('expenseAdded', loadAllTransactions)
  window.addEventListener('expenseUpdated', loadAllTransactions)
  window.addEventListener('incomeUpdated', loadAllTransactions)
  window.addEventListener('employeeSalaryPaid', loadAllTransactions)

  // Poll for localStorage changes in same window (fallback for cases where custom events aren't dispatched)
  // Check every 2 seconds if data has changed
  let lastDataHashes = {
    payments: '',
    pos: '',
    payroll: '',
    incomes: '',
    expenses: ''
  }

  const checkDataChanges = () => {
    const dataKeys = {
      payments: 'payments_data',
      pos: 'pos_transactions_data',
      payroll: 'employee_payroll_data',
      incomes: 'incomes_data',
      expenses: 'expenses_data'
    }

    Object.entries(dataKeys).forEach(([key, storageKey]) => {
      const currentData = localStorage.getItem(storageKey) || ''
      if (currentData !== lastDataHashes[key]) {
        lastDataHashes[key] = currentData
        loadAllTransactions()
      }
    })
  }

  // Initialize hashes
  Object.entries({
    payments: 'payments_data',
    pos: 'pos_transactions_data',
    payroll: 'employee_payroll_data',
    incomes: 'incomes_data',
    expenses: 'expenses_data'
  }).forEach(([key, storageKey]) => {
    lastDataHashes[key] = localStorage.getItem(storageKey) || ''
  })

  // Poll every 2 seconds
  const pollInterval = setInterval(checkDataChanges, 2000)

  // Store interval ID for cleanup
  window._reportViewPollInterval = pollInterval
})

onUnmounted(() => {
  window.removeEventListener('storage', handleStorageChange)
  window.removeEventListener('posTransactionSaved', loadAllTransactions)
  window.removeEventListener('checkoutCompleted', loadAllTransactions)
  window.removeEventListener('paymentConfirmed', loadAllTransactions)
  window.removeEventListener('incomeAdded', loadAllTransactions)
  window.removeEventListener('expenseAdded', loadAllTransactions)
  window.removeEventListener('expenseUpdated', loadAllTransactions)
  window.removeEventListener('incomeUpdated', loadAllTransactions)
  window.removeEventListener('employeeSalaryPaid', loadAllTransactions)

  // Clear polling interval
  if (window._reportViewPollInterval) {
    clearInterval(window._reportViewPollInterval)
    delete window._reportViewPollInterval
  }
})

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

const filteredTransactions = computed(() => {
  let filtered = allTransactions.value.filter(t => t.type === activeTab.value)

  if (searchQuery.value) {
    filtered = filtered.filter(trans =>
      textContains(trans.source || '', searchQuery.value) ||
      textContains(trans.id || '', searchQuery.value) ||
      (trans.data && JSON.stringify(trans.data).toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
  }

  // Date range filtering
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(trans => {
      const transDate = new Date(trans.date)
      transDate.setHours(0, 0, 0, 0)

      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return transDate >= fromDate && transDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return transDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return transDate <= toDate
      }
      return true
    })
  }

  return filtered
})

// Summary calculations across all sources
const totalRevenue = computed(() => {
  return allTransactions.value
    .filter(t => ['student_payment', 'pos', 'employee_salary', 'income'].includes(t.type))
    .reduce((sum, t) => sum + t.amount, 0)
})

const totalExpenses = computed(() => {
  return allTransactions.value
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)
})

const totalOrders = computed(() => allTransactions.value.length)

const totalItemsSold = computed(() => {
  // For POS transactions, count items
  return allTransactions.value
    .filter(t => t.type === 'pos')
    .reduce((sum, t) => {
      const items = t.data?.cart || []
      return sum + items.reduce((itemSum, item) => itemSum + (item.quantity || 0), 0)
    }, 0)
})

const avgOrder = computed(() => {
  const revenueCount = allTransactions.value.filter(t => ['student_payment', 'pos', 'employee_salary', 'income'].includes(t.type)).length
  return revenueCount > 0 ? totalRevenue.value / revenueCount : 0
})

const bestSale = computed(() => {
  const sorted = [...allTransactions.value]
    .filter(t => ['student_payment', 'pos', 'employee_salary', 'income'].includes(t.type))
    .sort((a, b) => b.amount - a.amount)
  return sorted[0] || { id: 'N/A', amount: 0 }
})

const totalAmount = computed(() => {
  return filteredTransactions.value.reduce((sum, t) => sum + t.amount, 0)
})

// Selection logic
const selectAllChecked = computed(() => {
  if (filteredTransactions.value.length === 0) return false
  return filteredTransactions.value.every(t => selectedTransactions.value.has(t.id))
})

const toggleSelectAll = () => {
  if (selectAllChecked.value) {
    filteredTransactions.value.forEach(t => selectedTransactions.value.delete(t.id))
  } else {
    filteredTransactions.value.forEach(t => selectedTransactions.value.add(t.id))
  }
}

const toggleSelection = (id) => {
  if (selectedTransactions.value.has(id)) {
    selectedTransactions.value.delete(id)
  } else {
    selectedTransactions.value.add(id)
  }
}

// Transaction display helpers
const getTabColumnHeader = () => {
  const headers = {
    'student_payment': t('student') || 'Student',
    'pos': t('customer') || 'Customer',
    'employee_salary': t('employee') || 'Employee',
    'income': t('description') || 'Description',
    'expense': t('description') || 'Description'
  }
  return headers[activeTab.value] || t('source') || 'Source'
}

const getTransactionDisplayName = (transaction) => {
  if (transaction.type === 'student_payment') {
    const student = transaction.data?.student
    return student ? (student.nameKhmer || student.nameEnglish || student.name || 'N/A') : 'N/A'
  } else if (transaction.type === 'pos') {
    return transaction.data?.customerInfo?.name || 'Walk-in Customer'
  } else if (transaction.type === 'employee_salary') {
    const employee = transaction.data?.employee
    return employee ? (employee.nameEnglish || employee.nameKhmer || employee.name || 'N/A') : 'N/A'
  } else if (transaction.type === 'income') {
    return transaction.data?.nameIncome || transaction.source
  } else if (transaction.type === 'expense') {
    return transaction.data?.expenseName || transaction.source
  }
  return transaction.source
}

const getStatusClass = (status) => {
  if (status === 'Paid' || status === 'Completed' || status === 'Active') {
    return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
  } else if (status === 'Pending') {
    return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
  } else {
    return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
  }
}

const getTableColspan = () => {
  if (activeTab.value === 'student_payment') return 11
  if (activeTab.value === 'expense') return 10
  if (activeTab.value === 'income') return 10
  if (activeTab.value === 'pos') return 11
  if (activeTab.value === 'employee_salary') return 8
  return 7
}

// Get student initials
const getInitials = (name) => {
  if (!name) return '??'
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
}

// Get class teacher
const getClassTeacher = (classId) => {
  try {
    const classes = JSON.parse(localStorage.getItem('classes_data') || '[]')
    const classItem = classes.find(c => c.id === classId)
    return classItem ? classItem.teacher : null
  } catch (error) {
    return null
  }
}

// Get employee department
const getEmployeeDepartment = (employee) => {
  if (!employee) return 'N/A'

  // Map roles to departments
  const departmentMap = {
    'Teacher': 'Education',
    'Administrator': 'Administration',
    'Manager': 'Management',
    'Staff': 'General',
    'Accountant': 'Finance',
    'Receptionist': 'Front Office'
  }

  return departmentMap[employee.role] || employee.role || employee.department || 'N/A'
}

// Get student session
const getStudentSession = (studentId) => {
  try {
    // First try to get from student data
    const students = JSON.parse(localStorage.getItem('students_data') || '[]')
    const student = students.find(s => s.id === studentId)
    if (student && student.session) {
      return student.session
    }

    // Try to get from enrollments
    const enrollments = JSON.parse(localStorage.getItem('enrollments_data') || '[]')
    const enrollment = enrollments.find(e => e.studentId === studentId)
    if (enrollment && enrollment.session) {
      return enrollment.session
    }

    return null
  } catch (error) {
    return null
  }
}

// School info for invoice footer
const schoolInfo = ref({
  facebook: 'Your Facebook Page',
  location: 'Your School Address',
  phone: '099999999'
})

// Format date only
const formatDateOnly = (dateString) => {
  if (!dateString) return 'N/A'
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    })
  } catch (error) {
    return 'N/A'
  }
}

// Format date (like IncomeView.vue)
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

// Invoice functions
const openInvoice = (transaction) => {
  selectedTransaction.value = transaction
  showInvoiceDrawer.value = true
}

const getInvoiceComponent = () => {
  // Return a component based on transaction type
  // For now, return a simple div - we'll implement full invoice components next
  return h('div', { class: 'p-4' }, `Invoice for ${selectedTransaction.value?.source}`)
}

const downloadInvoice = async () => {
  try {
    const invoiceElement = document.getElementById('invoice-content')
    if (!invoiceElement) {
      console.error('Invoice element not found')
      return
    }

    const canvas = await html2canvas(invoiceElement, {
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: false
    })

    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Failed to generate screenshot')
        return
      }

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      const invoiceNo = selectedTransaction.value?.data?.invoiceNo || selectedTransaction.value?.source || 'invoice'
      link.download = `invoice-${invoiceNo}.png`
      link.href = url
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      // Add history entry for download invoice
      addHistory('downloadInvoice', {
        type: 'report',
        itemName: `Invoice ${invoiceNo}`,
        itemId: selectedTransaction.value?.id || null,
        description: `Invoice downloaded - Type: ${selectedTransaction.value?.type || 'unknown'}, Amount: $${selectedTransaction.value?.amount?.toFixed(2) || '0.00'}`,
        user: 'Admin'
      })
    }, 'image/png')
  } catch (err) {
    console.error('Error downloading invoice:', err)
  }
}

const printInvoice = () => {
  try {
    const invoiceElement = document.getElementById('invoice-content')
    if (!invoiceElement) {
      console.error('Invoice element not found')
      return
    }

    // Ensure drawer is visible
    if (!showInvoiceDrawer.value) {
      console.error('Please open the invoice first')
      return
    }

    // Add print class to body to trigger print styles
    document.body.classList.add('printing-invoice')

    // Small delay to ensure styles are applied
    setTimeout(() => {
      // Trigger print dialog
      window.print()

      // Remove print class after printing
      const removePrintClass = () => {
        document.body.classList.remove('printing-invoice')
        window.removeEventListener('afterprint', removePrintClass)
      }
      window.addEventListener('afterprint', removePrintClass)

      // Fallback: remove class after 2 seconds if afterprint doesn't fire
      setTimeout(() => {
        document.body.classList.remove('printing-invoice')
      }, 2000)

      // Add history entry for print invoice
      const invoiceNo = selectedTransaction.value?.data?.invoiceNo || selectedTransaction.value?.source || 'invoice'
      addHistory('print', {
        type: 'report',
        itemName: `Invoice ${invoiceNo}`,
        itemId: selectedTransaction.value?.id || null,
        description: `Invoice printed - Type: ${selectedTransaction.value?.type || 'unknown'}, Amount: $${selectedTransaction.value?.amount?.toFixed(2) || '0.00'}`,
        user: 'Admin'
      })
    }, 100)
  } catch (err) {
    console.error('Error printing invoice:', err)
    document.body.classList.remove('printing-invoice')
  }
}

// Generate invoice HTML for a transaction
const generateInvoiceHTML = (transaction) => {
  if (!transaction) return ''

  const invoiceNo = transaction.data?.invoiceNo || transaction.source || 'N/A'
  const logoUrl = logoImage

  // Student Payment Invoice
  if (transaction.type === 'student_payment') {
    return `
      <div class="invoice-page" style="page-break-after: always; padding: 40px; background: white;">
        <div class="flex justify-between items-start mb-8">
          <div><img src="${logoUrl}" alt="Logo" style="height: 48px;" /></div>
          <div><h2 style="font-size: 24px; font-weight: bold;">${t('invoice')}</h2></div>
        </div>
        <hr style="border-color: #d1d5db; margin: 16px 0;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-bottom: 32px;">
          <div>
            <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('invoiceInfo')}</h3>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div><strong>${t('invoiceNo')}:</strong> ${invoiceNo}</div>
              <div><strong>${t('startDate')}:</strong> ${formatDateOnly(transaction.data?.startDate || transaction.data?.created)}</div>
              <div><strong>${t('endDate')}:</strong> ${formatDateOnly(transaction.data?.endDate || transaction.data?.dueDate)}</div>
              ${transaction.data?.paidDate ? `<div><strong>${t('paymentDate')}:</strong> ${formatDateOnly(transaction.data.paidDate)}</div>` : ''}
              <div><strong>${t('method')}:</strong> ${transaction.data?.method || 'N/A'}</div>
            </div>
          </div>
          <div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div><strong>${t('name')}:</strong> ${transaction.data?.student?.nameKhmer || transaction.data?.student?.nameEnglish || transaction.data?.student?.name || 'N/A'}</div>
              <div><strong>${t('phone')}:</strong> ${transaction.data?.student?.contact || transaction.data?.student?.phone || 'N/A'}</div>
              <div><strong>${t('registered')}:</strong> ${formatDateOnly(transaction.data?.student?.registered) || 'N/A'}</div>
              <div><strong>${t('session')}:</strong> ${getStudentSession(transaction.data?.student?.id) || 'N/A'}</div>
            </div>
          </div>
        </div>
        <div style="margin-bottom: 32px;">
          <div style="background: #2563eb; color: white; padding: 12px 16px;">
            <div style="display: grid; grid-template-columns: 1fr 5fr 2fr 2fr 2fr; gap: 16px; font-weight: 600;">
              <div>${t('no')}</div><div>${t('description')}</div><div style="text-align: center;">${t('price')}</div><div style="text-align: center;">${t('qty')}</div><div style="text-align: right;">${t('total')}</div>
            </div>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 12px 16px;">
            <div style="display: grid; grid-template-columns: 1fr 5fr 2fr 2fr 2fr; gap: 16px;">
              <div>01</div><div style="font-weight: 600;">${t('payment')}</div><div style="text-align: center;">$${transaction.amount.toFixed(2)}</div><div style="text-align: center;">1</div><div style="text-align: right; font-weight: 600;">$${transaction.amount.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 32px;">
          <div>
            <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('termsAndConditions')}</h3>
            <p style="font-size: 14px; color: #374151; line-height: 1.6;">${t('thankYouMessage')}</p>
          </div>
          <div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; justify-content: space-between;"><span>${t('subtotal')}</span><span>$${transaction.amount.toFixed(2)}</span></div>
              <div style="display: flex; justify-content: space-between;"><span>${t('discount')}</span><span>$0.00</span></div>
              <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; padding-top: 8px; border-top: 1px solid #d1d5db;">
                <span>${t('grandTotal')}</span><span>$${transaction.amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  // POS Invoice
  if (transaction.type === 'pos') {
    const items = transaction.data?.cart || []
    const itemsHTML = items.map((item, idx) => `
      <div style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb;">
        <div style="display: grid; grid-template-columns: 1fr 5fr 2fr 2fr 2fr; gap: 16px;">
          <div>${String(idx + 1).padStart(2, '0')}</div>
          <div style="font-weight: 600;">${item.name || item.productName || 'N/A'}</div>
          <div style="text-align: center;">$${(item.price || 0).toFixed(2)}</div>
          <div style="text-align: center;">${item.quantity || 0}</div>
          <div style="text-align: right; font-weight: 600;">$${((item.price || 0) * (item.quantity || 0)).toFixed(2)}</div>
        </div>
      </div>
    `).join('')

    return `
      <div class="invoice-page" style="page-break-after: always; padding: 40px; background: white;">
        <div class="flex justify-between items-start mb-8">
          <div><img src="${logoUrl}" alt="Logo" style="height: 48px;" /></div>
          <div><h2 style="font-size: 24px; font-weight: bold;">${t('invoice')}</h2></div>
        </div>
        <hr style="border-color: #d1d5db; margin: 16px 0;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-bottom: 32px;">
          <div>
            <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('invoiceInfo')}</h3>
            <div><strong>${t('invoiceNo')}:</strong> ${invoiceNo}</div>
            <div><strong>${t('date')}:</strong> ${formatDateOnly(transaction.data?.date || transaction.date)}</div>
          </div>
          <div>
            <div><strong>${t('name')}:</strong> ${transaction.data?.customerInfo?.name || 'Walk-in Customer'}</div>
            <div><strong>${t('phoneCustomer')}:</strong> ${transaction.data?.customerInfo?.phone || transaction.data?.customerInfo?.phoneCustomer || '+00000000'}</div>
            <div><strong>${t('phoneSaler')}:</strong> ${transaction.data?.customerInfo?.phoneSaler || transaction.data?.phoneSaler || '099999999'}</div>
            <div><strong>${t('address')}:</strong> ${transaction.data?.customerInfo?.address || 'no'}</div>
          </div>
        </div>
        <div style="margin-bottom: 32px;">
          <div style="background: #2563eb; color: white; padding: 12px 16px;">
            <div style="display: grid; grid-template-columns: 1fr 5fr 2fr 2fr 2fr; gap: 16px; font-weight: 600;">
              <div>${t('no')}</div><div>${t('description')}</div><div style="text-align: center;">${t('price')}</div><div style="text-align: center;">${t('qty')}</div><div style="text-align: right;">${t('total')}</div>
            </div>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none;">
            ${itemsHTML}
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 32px;">
          <div>
            <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('termsAndConditions')}</h3>
            <p style="font-size: 14px; color: #374151; line-height: 1.6;">${t('thankYouMessage')}</p>
          </div>
          <div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; justify-content: space-between;"><span>${t('subtotal')}</span><span>$${transaction.amount.toFixed(2)}</span></div>
              <div style="display: flex; justify-content: space-between;"><span>${t('discount')}</span><span>$${(transaction.data?.discount || 0).toFixed(2)}</span></div>
              <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; padding-top: 8px; border-top: 1px solid #d1d5db;">
                <span>${t('grandTotal')}</span><span>$${transaction.amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  // Employee Salary Invoice
  if (transaction.type === 'employee_salary') {
    return `
      <div class="invoice-page" style="page-break-after: always; padding: 40px; background: white;">
        <div class="flex justify-between items-start mb-8">
          <div><img src="${logoUrl}" alt="Logo" style="height: 48px;" /></div>
          <div><h2 style="font-size: 24px; font-weight: bold;">${t('invoice')}</h2></div>
        </div>
        <hr style="border-color: #d1d5db; margin: 16px 0;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-bottom: 32px;">
          <div>
            <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('invoiceInfo')}</h3>
            <div><strong>${t('invoiceNo')}:</strong> ${transaction.source}</div>
            <div><strong>${t('date')}:</strong> ${formatDateOnly(transaction.data?.paidDate || transaction.date)}</div>
            <div><strong>${t('method')}:</strong> ${transaction.data?.method || 'Bank Transfer'}</div>
          </div>
          <div>
            <div><strong>${t('employee')}:</strong> ${transaction.data?.employee?.nameKhmer || transaction.data?.employee?.nameEnglish || transaction.data?.employee?.name || 'N/A'}</div>
            <div><strong>${t('department')}:</strong> ${getEmployeeDepartment(transaction.data?.employee) || 'N/A'}</div>
            <div><strong>${t('phone')}:</strong> ${transaction.data?.employee?.phone || 'N/A'}</div>
          </div>
        </div>
        <div style="margin-bottom: 32px;">
          <div style="background: #2563eb; color: white; padding: 12px 16px;">
            <div style="display: grid; grid-template-columns: 1fr 5fr 2fr 2fr 2fr; gap: 16px; font-weight: 600;">
              <div>${t('no')}</div><div>${t('description')}</div><div style="text-align: center;">${t('hours')}</div><div style="text-align: center;">${t('rate')}</div><div style="text-align: right;">${t('total')}</div>
            </div>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 12px 16px;">
            <div style="display: grid; grid-template-columns: 1fr 5fr 2fr 2fr 2fr; gap: 16px;">
              <div>01</div><div style="font-weight: 600;">${t('salaryPayment') || 'Salary Payment'}</div><div style="text-align: center;">${transaction.data?.hoursWorked || 0} ${t('hrs') || 'hrs'}</div><div style="text-align: center;">$${(transaction.data?.rate || 0).toFixed(2)}</div><div style="text-align: right; font-weight: 600;">$${transaction.amount.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 32px;">
          <div>
            <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('termsAndConditions')}</h3>
            <p style="font-size: 14px; color: #374151; line-height: 1.6;">${t('thankYouMessage')}</p>
          </div>
          <div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; justify-content: space-between;"><span>${t('subtotal')}</span><span>$${transaction.amount.toFixed(2)}</span></div>
              <div style="display: flex; justify-content: space-between;"><span>${t('discount')}</span><span>$0.00</span></div>
              <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; padding-top: 8px; border-top: 1px solid #d1d5db;">
                <span>${t('grandTotal')}</span><span>$${transaction.amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  // Income Invoice
  if (transaction.type === 'income') {
    return `
      <div class="invoice-page" style="page-break-after: always; padding: 40px; background: white;">
        <div class="flex justify-between items-start mb-8">
          <div><img src="${logoUrl}" alt="Logo" style="height: 48px;" /></div>
          <div><h2 style="font-size: 24px; font-weight: bold;">${t('invoice')}</h2></div>
        </div>
        <hr style="border-color: #d1d5db; margin: 16px 0;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-bottom: 32px;">
          <div>
            <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('invoiceInfo')}</h3>
            <div><strong>${t('invoiceNo')}:</strong> ${transaction.source || 'N/A'}</div>
            <div><strong>${t('created')}:</strong> ${formatDateOnly(transaction.data?.created || transaction.date)}</div>
            <div><strong>${t('paymentDate')}:</strong> ${formatDateOnly(transaction.data?.paymentDate || transaction.date)}</div>
            <div><strong>${t('category')}:</strong> ${transaction.data?.category || 'N/A'}</div>
            <div><strong>${t('method')}:</strong> ${transaction.data?.method || 'N/A'}</div>
          </div>
          <div>
            <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('description')}</h3>
            <p style="font-size: 14px; color: #374151;">${transaction.data?.description || 'N/A'}</p>
          </div>
        </div>
        <div style="margin-bottom: 32px;">
          <div style="background: #2563eb; color: white; padding: 12px 16px;">
            <div style="display: grid; grid-template-columns: 1fr 5fr 2fr 2fr 2fr; gap: 16px; font-weight: 600;">
              <div>${t('no')}</div><div>${t('description')}</div><div style="text-align: center;">${t('price')}</div><div style="text-align: center;">${t('qty')}</div><div style="text-align: right;">${t('total')}</div>
            </div>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 12px 16px;">
            <div style="display: grid; grid-template-columns: 1fr 5fr 2fr 2fr 2fr; gap: 16px;">
              <div>01</div><div style="font-weight: 600;">${transaction.data?.nameIncome || transaction.source}</div><div style="text-align: center;">$${transaction.amount.toFixed(2)}</div><div style="text-align: center;">1</div><div style="text-align: right; font-weight: 600;">$${transaction.amount.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: flex-end; margin-bottom: 32px;">
          <div style="width: 50%;">
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; justify-content: space-between;"><span>${t('subtotal')}</span><span>$${transaction.amount.toFixed(2)}</span></div>
              <div style="display: flex; justify-content: space-between;"><span>${t('discount')}</span><span>$0.00</span></div>
              <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; padding-top: 8px; border-top: 1px solid #d1d5db;">
                <span>${t('grandTotal')}</span><span>$${transaction.amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  // Expense Invoice
  if (transaction.type === 'expense') {
    return `
      <div class="invoice-page" style="page-break-after: always; padding: 40px; background: white;">
        <div class="flex justify-between items-start mb-8">
          <div><img src="${logoUrl}" alt="Logo" style="height: 48px;" /></div>
          <div><h2 style="font-size: 24px; font-weight: bold;">${t('invoice')}</h2></div>
        </div>
        <hr style="border-color: #d1d5db; margin: 16px 0;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-bottom: 32px;">
          <div>
            <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('invoiceInfo')}</h3>
            <div><strong>${t('invoiceNo')}:</strong> ${transaction.source || 'N/A'}</div>
            <div><strong>${t('created')}:</strong> ${formatDateOnly(transaction.data?.created || transaction.date)}</div>
            <div><strong>${t('status')}:</strong> ${transaction.data?.status || 'N/A'}</div>
          </div>
          <div>
            <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('supplier')}</h3>
            <div><strong>${t('supplier')}:</strong> ${transaction.data?.supplier || 'N/A'}</div>
            <div><strong>${t('contact')}:</strong> ${transaction.data?.contact || 'N/A'}</div>
            <div><strong>${t('saler')}:</strong> ${transaction.data?.saler || 'N/A'}</div>
          </div>
        </div>
        <div style="margin-bottom: 32px;">
          <div style="background: #2563eb; color: white; padding: 12px 16px;">
            <div style="display: grid; grid-template-columns: 1fr 5fr 2fr 2fr 2fr; gap: 16px; font-weight: 600;">
              <div>${t('no')}</div><div>${t('description')}</div><div style="text-align: center;">${t('price')}</div><div style="text-align: center;">${t('qty')}</div><div style="text-align: right;">${t('total')}</div>
            </div>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 12px 16px;">
            <div style="display: grid; grid-template-columns: 1fr 5fr 2fr 2fr 2fr; gap: 16px;">
              <div>01</div><div style="font-weight: 600;">${transaction.data?.expenseName || transaction.source}</div><div style="text-align: center;">$${transaction.amount.toFixed(2)}</div><div style="text-align: center;">1</div><div style="text-align: right; font-weight: 600;">$${transaction.amount.toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div style="margin-bottom: 32px;">
          <h3 style="font-size: 10px; font-weight: 600; color: #6b7280; text-transform: uppercase; margin-bottom: 12px;">${t('description')}</h3>
          <p style="font-size: 14px; color: #374151;">${transaction.data?.description || 'N/A'}</p>
        </div>
        <div style="display: flex; justify-content: flex-end; margin-bottom: 32px;">
          <div style="width: 50%;">
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; justify-content: space-between;"><span>${t('subtotal')}</span><span>$${transaction.amount.toFixed(2)}</span></div>
              <div style="display: flex; justify-content: space-between;"><span>${t('discount')}</span><span>$0.00</span></div>
              <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; padding-top: 8px; border-top: 1px solid #d1d5db;">
                <span>${t('grandTotal')}</span><span>$${transaction.amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  return ''
}

const printSelected = async () => {
  if (selectedTransactions.value.size === 0) {
    return
  }

  try {
    // Get selected transactions
    const selectedIds = Array.from(selectedTransactions.value)
    const transactionsToPrint = allTransactions.value.filter(t => selectedIds.includes(t.id))

    if (transactionsToPrint.length === 0) {
      return
    }

    // Generate HTML for all invoices
    const invoicesHTML = transactionsToPrint.map(transaction => generateInvoiceHTML(transaction)).join('')

    // Create print window
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      console.error('Failed to open print window')
      return
    }

    // Write HTML with print styles
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print Invoices</title>
          <style>
            @media print {
              @page {
                margin: 0.5cm;
                size: A4;
              }
              .invoice-page {
                page-break-after: always;
              }
              .invoice-page:last-child {
                page-break-after: auto;
              }
            }
            body {
              margin: 0;
              padding: 0;
              font-family: system-ui, -apple-system, sans-serif;
            }
            .invoice-page {
              padding: 40px;
              background: white;
            }
          </style>
        </head>
        <body>
          ${invoicesHTML}
        </body>
      </html>
    `)

    printWindow.document.close()

    // Wait for content to load, then print
    setTimeout(() => {
      printWindow.print()
      // Close window after printing (optional)
      // printWindow.close()

      // Add history entry for bulk print
      addHistory('print', {
        type: 'report',
        itemName: `Bulk Print - ${transactionsToPrint.length} Invoice(s)`,
        itemId: null,
        description: `Printed ${transactionsToPrint.length} invoice(s) - Types: ${[...new Set(transactionsToPrint.map(t => t.type))].join(', ')}`,
        user: 'Admin'
      })
    }, 500)
  } catch (err) {
    console.error('Error printing selected invoices:', err)
  }
}
</script>

<style scoped>
/* Drawer Transition */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-active>div,
.drawer-leave-active>div {
  transition: transform 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from>div,
.drawer-leave-to>div {
  transform: translateX(100%);
}
</style>

<style>
/* Print Styles - Only show invoice content when printing */
@media print {

  /* Hide everything by default */
  body.printing-invoice>*:not(.fixed) {
    display: none !important;
  }

  /* Show the invoice drawer container */
  body.printing-invoice .fixed.inset-0 {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 99999 !important;
    background: white !important;
    overflow: visible !important;
    display: block !important;
  }

  /* Hide the drawer overlay background */
  body.printing-invoice .fixed.inset-0.bg-black {
    background: white !important;
    background-color: white !important;
  }

  /* Show and position the drawer content */
  body.printing-invoice .absolute.right-0 {
    position: static !important;
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    min-height: auto !important;
    box-shadow: none !important;
    overflow: visible !important;
    background: white !important;
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
  }

  /* Hide the drawer header with buttons */
  body.printing-invoice .sticky.top-0 {
    display: none !important;
  }

  body.printing-invoice button {
    display: none !important;
  }

  /* Style the invoice content for printing */
  body.printing-invoice #invoice-content {
    position: static !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 40px !important;
    margin: 0 auto !important;
    background: white !important;
    color: #111827 !important;
    page-break-inside: avoid;
    display: block !important;
  }

  /* Ensure proper page setup */
  @page {
    margin: 0.5cm;
    size: A4;
  }

  /* Make sure images print */
  body.printing-invoice img {
    max-width: 100% !important;
    height: auto !important;
    page-break-inside: avoid;
  }

  /* Ensure all text colors are correct for print */
  body.printing-invoice #invoice-content {
    color: #111827 !important;
  }

  body.printing-invoice #invoice-content .text-gray-800,
  body.printing-invoice #invoice-content .text-gray-900,
  body.printing-invoice #invoice-content .text-gray-700,
  body.printing-invoice #invoice-content .text-gray-600,
  body.printing-invoice #invoice-content .text-gray-500 {
    color: #374151 !important;
  }

  body.printing-invoice #invoice-content .text-gray-900 {
    color: #111827 !important;
  }

  body.printing-invoice #invoice-content .text-white {
    color: #ffffff !important;
  }

  /* Ensure blue background prints correctly */
  body.printing-invoice #invoice-content .bg-blue-600 {
    background-color: #2563eb !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* Ensure borders are visible */
  body.printing-invoice #invoice-content hr {
    border-color: #d1d5db !important;
  }

  body.printing-invoice #invoice-content .border-gray-200,
  body.printing-invoice #invoice-content .border-gray-300 {
    border-color: #e5e7eb !important;
  }

  /* Remove dark mode styles for print */
  body.printing-invoice #invoice-content.dark\:bg-gray-800,
  body.printing-invoice #invoice-content .dark\:text-white,
  body.printing-invoice #invoice-content .dark\:text-gray-300 {
    background: white !important;
    color: #111827 !important;
  }
}
</style>
