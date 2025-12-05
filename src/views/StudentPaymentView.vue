<template>
  <div :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Invoices Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('totalInvoices') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">{{ totalInvoices }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Paid Invoices Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('paidInvoices') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">{{ paidInvoices }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Pending Invoices Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('pendingInvoices') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">{{ pendingInvoices }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Amount Due Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('totalAmountDue') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">${{ totalAmountDue.toFixed(2) }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Payments Table -->
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
            <th class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('student') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('className') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('invoiceNo') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('amountDue') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('dueDate') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('status') }}</th>
            <th class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600"></th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <!-- No Results Found -->
          <tr v-if="filteredPayments.length === 0 && (searchQuery || filterDateFrom || filterDateTo)">
            <td colspan="8" class="px-4 py-12 text-center">
              <div class="flex flex-col items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ t('noResults') }}</p>
              </div>
            </td>
          </tr>
          <!-- Payment Rows -->
          <tr
            v-for="(payment, index) in filteredPayments"
            :key="payment.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ index + 1 }}</td>
            <td class="px-3 py-3 text-xs">
              <div class="flex items-center gap-2">
                <div class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                  <span class="text-blue-600 dark:text-blue-400 font-semibold text-xs">{{ getInitials(payment.student.name) }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-medium text-gray-900 dark:text-white text-xs">{{ payment.student.name }}</div>
                  <div class="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span class="truncate">{{ payment.student.email || 'N/A' }}</span>
                  </div>
                  <div class="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{{ payment.student.contact || 'N/A' }}</span>
                  </div>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ payment.className }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ payment.invoiceNo }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center font-semibold">${{ payment.amountDue.toFixed(2) }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ formatDueDate(payment.dueDate) }}</td>
            <td class="px-3 py-3 whitespace-nowrap">
              <span class="px-2 py-1 text-[10px] font-medium rounded-full flex items-center gap-1 justify-center"
                    :class="getStatusClass(payment.status)">
                <svg v-if="payment.status === 'Pending'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else-if="payment.status === 'Paid'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {{ payment.status === 'Paid' ? t('paid') : payment.status === 'Pending' ? t('pending') : t('overdue') }}
              </span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-xs font-medium">
              <div class="flex items-center justify-center gap-2">
                <!-- View Detail Button -->
                <button
                  @click="handleViewDetail(payment)"
                  class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  :title="t('viewDetail')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                
                <!-- Confirm Payment Button -->
                <button
                  v-if="payment.status === 'Pending' || payment.status === 'Overdue'"
                  @click="handleConfirm(payment)"
                  class="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                  :title="t('confirmPayment')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                
                <!-- Reject/Cancel Payment Button -->
                <button
                  v-if="payment.status === 'Pending'"
                  @click="handleReject(payment)"
                  class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                  :title="t('rejectPayment')"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- View Student Detail & Payment History Drawer -->
    <Transition name="drawer">
      <div
        v-if="showDetailDrawer"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click.self="showDetailDrawer = false"
      >
        <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white">{{ t('paymentDetail') }}</h2>
            </div>
            <button
              @click="showDetailDrawer = false"
              class="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div v-if="selectedPayment" class="p-6 space-y-6">
            <!-- Student Information -->
            <div>
              <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-3">{{ t('studentInformation') }}</h3>
              <div class="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div class="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                  <span class="text-blue-600 dark:text-blue-400 font-semibold text-lg">{{ getInitials(selectedPayment.student.name) }}</span>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ selectedPayment.student.name }}</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ selectedPayment.student.id }}</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3 mt-4">
                <div>
                  <label class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ t('email') }}</label>
                  <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedPayment.student.email || 'N/A' }}</p>
                </div>
                <div>
                  <label class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ t('phone') }}</label>
                  <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedPayment.student.contact || 'N/A' }}</p>
                </div>
                <div>
                  <label class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ t('gender') }}</label>
                  <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedPayment.student.gender || 'N/A' }}</p>
                </div>
                <div>
                  <label class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ t('province') }}</label>
                  <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedPayment.student.province || 'N/A' }}</p>
                </div>
              </div>
            </div>
            
            <!-- Payment Information -->
            <div>
              <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-3">{{ t('paymentInformation') }}</h3>
              <div class="space-y-3">
                <div>
                  <label class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ t('invoiceNo') }}</label>
                  <p class="text-sm text-gray-900 dark:text-white mt-1 font-semibold">{{ selectedPayment.invoiceNo }}</p>
                </div>
                <div>
                  <label class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ t('className') }}</label>
                  <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedPayment.className }}</p>
                </div>
                <div>
                  <label class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ t('amountDue') }}</label>
                  <p class="text-lg font-bold text-gray-900 dark:text-white mt-1">${{ selectedPayment.amountDue.toFixed(2) }}</p>
                </div>
                <div>
                  <label class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ t('dueDate') }}</label>
                  <p class="text-sm text-gray-900 dark:text-white mt-1">{{ formatDueDate(selectedPayment.dueDate) }}</p>
                </div>
                <div>
                  <label class="text-xs font-medium text-gray-500 dark:text-gray-400">{{ t('status') }}</label>
                  <p class="text-sm mt-1">
                    <span class="px-2 py-1 text-xs font-medium rounded-full"
                          :class="getStatusClass(selectedPayment.status)">
                      {{ selectedPayment.status === 'Paid' ? t('paid') : selectedPayment.status === 'Pending' ? t('pending') : t('overdue') }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Payment History -->
            <div>
              <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-3">{{ t('paymentHistory') }}</h3>
              <div class="space-y-2 max-h-[300px] overflow-y-auto">
                <div
                  v-for="(history, index) in paymentHistory"
                  :key="index"
                  class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-sm"
                >
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">{{ history.action }}</p>
                    <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ formatDateTime(history.date) }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm font-semibold"
                       :class="history.amount ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'">
                      {{ history.amount ? `$${history.amount.toFixed(2)}` : '-' }}
                    </p>
                    <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ history.status }}</p>
                  </div>
                </div>
                <div v-if="paymentHistory.length === 0" class="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
                  {{ t('noPaymentHistory') }}
                </div>
              </div>
            </div>
            
            <!-- Close Button -->
            <div class="pt-4">
              <button
                @click="showDetailDrawer = false"
                class="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                {{ t('close') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    
    <!-- Confirm Payment Dialog -->
    <div
      v-if="showConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showConfirmDialog = false"
    >
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('confirmPayment') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureConfirmPayment') }}</p>
          </div>
        </div>
        <div class="mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p><span class="font-medium">{{ t('student') }}:</span> {{ paymentToConfirm?.student.name }}</p>
          <p><span class="font-medium">{{ t('invoiceNo') }}:</span> {{ paymentToConfirm?.invoiceNo }}</p>
          <p><span class="font-medium">{{ t('amountDue') }}:</span> <span class="font-bold">${{ paymentToConfirm?.amountDue.toFixed(2) }}</span></p>
        </div>
        <div class="flex gap-3 justify-end">
          <button
            @click="showConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {{ t('cancel') }}
          </button>
          <button
            @click="confirmPayment"
            class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium"
          >
            {{ t('yes') }}, {{ t('confirm') }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Reject Payment Dialog -->
    <div
      v-if="showRejectDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showRejectDialog = false"
    >
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('rejectPayment') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureRejectPayment') }}</p>
          </div>
        </div>
        <div class="mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p><span class="font-medium">{{ t('student') }}:</span> {{ paymentToReject?.student.name }}</p>
          <p><span class="font-medium">{{ t('invoiceNo') }}:</span> {{ paymentToReject?.invoiceNo }}</p>
          <p><span class="font-medium">{{ t('amountDue') }}:</span> <span class="font-bold">${{ paymentToReject?.amountDue.toFixed(2) }}</span></p>
        </div>
        <div class="flex gap-3 justify-end">
          <button
            @click="showRejectDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {{ t('cancel') }}
          </button>
          <button
            @click="confirmReject"
            class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium"
          >
            {{ t('yes') }}, {{ t('reject') }}
          </button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

// Load payments from JSON file or localStorage, then merge with student and class data
const loadPayments = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')
    
    // Load payments, students, and classes
    const paymentsData = await loadDataFromJSON('../data/payments.json', 'payments_data')
    const studentsData = await loadDataFromJSON('../data/students.json', 'students_data')
    const classesData = await loadDataFromJSON('../data/classes.json', 'classes_data')
    
    // Merge payments with student and class data
    payments.value = paymentsData.map(payment => {
      const student = studentsData.find(s => s.id === payment.studentId)
      const classItem = classesData.find(c => c.id === payment.classId)
      
      return {
        ...payment,
        student: student || null,
        className: classItem ? classItem.className : payment.className || 'N/A'
      }
    })
    
    // Save merged data to localStorage
    savePayments()
  } catch (error) {
    console.error('Error loading payments:', error)
    // Fallback to localStorage
    const saved = localStorage.getItem('payments_data')
    if (saved) {
      payments.value = JSON.parse(saved)
    } else {
      payments.value = []
    }
  }
}

// Generate payments from enrollments
const generatePayments = () => {
  try {
    const enrollments = JSON.parse(localStorage.getItem('enrollments_data') || '[]')
    const students = JSON.parse(localStorage.getItem('students_data') || '[]')
    const classes = JSON.parse(localStorage.getItem('classes_data') || '[]')
    
    payments.value = []
    
    enrollments.forEach((enrollment, index) => {
      const student = students.find(s => s.id === enrollment.studentId)
      const classItem = classes.find(c => c.id === enrollment.classId)
      
      if (student && classItem) {
        // Calculate due date (7 days from enrollment)
        const enrollmentDate = new Date(enrollment.created || new Date())
        const dueDate = new Date(enrollmentDate)
        dueDate.setDate(dueDate.getDate() + 7)
        
        // Default amount (can be customized)
        const amountDue = 150.00
        
        // Determine status based on due date
        const now = new Date()
        let status = 'Pending'
        if (now > dueDate) {
          status = 'Overdue'
        }
        
        const payment = {
          id: `PAY${String(index + 1).padStart(3, '0')}`,
          studentId: student.id,
          student: student,
          classId: classItem.id,
          className: classItem.className,
          invoiceNo: `INV-${String(index + 1).padStart(4, '0')}`,
          amountDue: amountDue,
          dueDate: dueDate.toISOString(),
          status: status,
          created: enrollment.created || new Date().toISOString().split('T')[0]
        }
        payments.value.push(payment)
      }
    })
    
    savePayments()
  } catch (error) {
    console.error('Error generating payments:', error)
    payments.value = []
  }
}

// Save payments to localStorage
const savePayments = () => {
  try {
    localStorage.setItem('payments_data', JSON.stringify(payments.value))
  } catch (error) {
    console.error('Error saving payments:', error)
  }
}

// Load payment history for a specific payment
const loadPaymentHistory = (paymentId) => {
  try {
    const saved = localStorage.getItem(`payment_history_${paymentId}`)
    if (saved) {
      return JSON.parse(saved)
    }
    return []
  } catch (error) {
    console.error('Error loading payment history:', error)
    return []
  }
}

// Save payment history
const savePaymentHistory = (paymentId, history) => {
  try {
    localStorage.setItem(`payment_history_${paymentId}`, JSON.stringify(history))
  } catch (error) {
    console.error('Error saving payment history:', error)
  }
}

const payments = ref([])

const searchQuery = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')

// Detail drawer state
const showDetailDrawer = ref(false)
const selectedPayment = ref(null)
const paymentHistory = ref([])

// Confirmation dialogs state
const showConfirmDialog = ref(false)
const showRejectDialog = ref(false)
const paymentToConfirm = ref(null)
const paymentToReject = ref(null)

// Success/Error message state
// Toast state removed - now using global ToastContainer

// Computed properties
const filteredPayments = computed(() => {
  let filtered = payments.value
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p => 
      p.student.name.toLowerCase().includes(query) ||
      p.student.id.toLowerCase().includes(query) ||
      (p.student.email && p.student.email.toLowerCase().includes(query)) ||
      (p.student.contact && p.student.contact.toLowerCase().includes(query)) ||
      p.className.toLowerCase().includes(query) ||
      p.invoiceNo.toLowerCase().includes(query)
    )
  }
  
  // Apply date range filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(payment => {
      if (!payment.dueDate) return false
      
      const dueDate = new Date(payment.dueDate)
      dueDate.setHours(0, 0, 0, 0)
      
      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return dueDate >= fromDate && dueDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return dueDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return dueDate <= toDate
      }
      return true
    })
  }
  
  return filtered
})

const totalInvoices = computed(() => payments.value.length)

const paidInvoices = computed(() => {
  return payments.value.filter(p => p.status === 'Paid').length
})

const pendingInvoices = computed(() => {
  return payments.value.filter(p => p.status === 'Pending').length
})

const totalAmountDue = computed(() => {
  return payments.value
    .filter(p => p.status === 'Pending' || p.status === 'Overdue')
    .reduce((sum, p) => sum + p.amountDue, 0)
})

// Clear date filter
const clearDateFilter = () => {
  filterDateFrom.value = ''
  filterDateTo.value = ''
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

// Format due date with time
const formatDueDate = (dateString) => {
  if (!dateString) return 'N/A'
  try {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  } catch (error) {
    return 'N/A'
  }
}

// Format date and time for history
const formatDateTime = (dateString) => {
  if (!dateString) return 'N/A'
  try {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  } catch (error) {
    return 'N/A'
  }
}

// Get status class
const getStatusClass = (status) => {
  if (status === 'Paid') {
    return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
  } else if (status === 'Pending') {
    return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border border-orange-300 dark:border-orange-700'
  } else {
    return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
  }
}

// Handle view detail
const handleViewDetail = (payment) => {
  selectedPayment.value = payment
  // Load payment history
  const history = loadPaymentHistory(payment.id)
  
  // If no history exists, create initial history entry
  if (history.length === 0) {
    const initialHistory = [
      {
        action: t('invoiceCreated'),
        date: payment.created,
        amount: payment.amountDue,
        status: payment.status
      }
    ]
    paymentHistory.value = initialHistory
    savePaymentHistory(payment.id, initialHistory)
  } else {
    paymentHistory.value = history
  }
  
  showDetailDrawer.value = true
}

// Handle confirm
const handleConfirm = (payment) => {
  paymentToConfirm.value = payment
  showConfirmDialog.value = true
}

// Handle reject
const handleReject = (payment) => {
  paymentToReject.value = payment
  showRejectDialog.value = true
}

// Confirm payment
const confirmPayment = () => {
  try {
    if (paymentToConfirm.value) {
      const index = payments.value.findIndex(p => p.id === paymentToConfirm.value.id)
      if (index !== -1) {
        payments.value[index].status = 'Paid'
        savePayments()
        
        // Add to payment history
        const history = loadPaymentHistory(paymentToConfirm.value.id)
        history.push({
          action: t('paymentConfirmed'),
          date: new Date().toISOString(),
          amount: paymentToConfirm.value.amountDue,
          status: 'Paid'
        })
        savePaymentHistory(paymentToConfirm.value.id, history)
        
        showConfirmDialog.value = false
        paymentToConfirm.value = null
        success(`${t('paymentConfirmed')}: "${payments.value[index].invoiceNo}" ${t('paymentConfirmedSuccess')}`)
      }
    }
  } catch (err) {
    showConfirmDialog.value = false
    handleError(err, { userMessage: 'Failed to confirm payment. Please try again.' })
  }
}

// Confirm reject
const confirmReject = () => {
  try {
    if (paymentToReject.value) {
      const index = payments.value.findIndex(p => p.id === paymentToReject.value.id)
      if (index !== -1) {
        payments.value[index].status = 'Overdue'
        savePayments()
        
        // Add to payment history
        const history = loadPaymentHistory(paymentToReject.value.id)
        history.push({
          action: t('paymentRejected'),
          date: new Date().toISOString(),
          amount: null,
          status: 'Overdue'
        })
        savePaymentHistory(paymentToReject.value.id, history)
        
        showRejectDialog.value = false
        paymentToReject.value = null
        success(`${t('paymentRejected')}: "${payments.value[index].invoiceNo}" ${t('paymentRejectedSuccess')}`)
      }
    }
  } catch (err) {
    showRejectDialog.value = false
    handleError(err, { userMessage: 'Failed to reject payment. Please try again.' })
  }
}

// Toast functions - now using composable (already defined above)

onMounted(() => {
  loadPayments()
  
  // Listen for storage events
  window.addEventListener('storage', (e) => {
    if (e.key === 'enrollments_data' || e.key === 'students_data' || e.key === 'classes_data') {
      generatePayments()
    }
    if (e.key === 'payments_data') {
      loadPayments()
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('storage', loadPayments)
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
</style>
