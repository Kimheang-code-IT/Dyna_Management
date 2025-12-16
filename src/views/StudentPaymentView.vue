<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full capitalize', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Invoices Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('totalInvoices') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalInvoices }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Paid Invoices Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('paidInvoices') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ paidInvoices }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Pending Invoices Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('pendingInvoices') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ pendingInvoices }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-yellow-600 dark:text-yellow-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Amount Due Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('totalAmountDue') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              ${{ totalAmountDue.toFixed(2) }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              <svg class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input v-model="searchQuery" type="text" :placeholder="t('search')"
              class="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]" />
            <button v-if="searchQuery" @click="searchQuery = ''"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex items-center gap-4 flex-wrap">
            <!-- Status Filter -->
            <div class="flex items-center gap-2">
              <label class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{{ t('status')
                }}:</label>
              <select v-model="filterStatus"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px] min-w-[120px]">
                <option value="">{{ t('all') || 'All Status' }}</option>
                <option value="Paid">{{ t('paid') }}</option>
                <option value="Pending">{{ t('pending') }}</option>
                <option value="Overdue">{{ t('overdue') }}</option>
              </select>
            </div>
            <!-- Method Filter -->
            <div class="flex items-center gap-2">
              <label class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{{ t('method') ||
                'Method' }}:</label>
              <select v-model="filterMethod"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px] min-w-[120px]">
                <option value="">{{ t('all') || 'All Methods' }}</option>
                <option value="Bank">{{ t('bank') || 'Bank' }}</option>
                <option value="Physical">{{ t('physical') || 'Physical' }}</option>
              </select>
            </div>
            <!-- Date Range Picker -->
            <div class="flex items-center gap-2">
              <label class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{{ t('dateBetween')
                }}:</label>
              <input v-model="filterDateFrom" type="date"
                class="px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]" />
              <span class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ t('to') }}</span>
              <input v-model="filterDateTo" type="date"
                class="px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]" />
              <button v-if="filterDateFrom || filterDateTo || filterStatus || filterMethod" @click="clearAllFilters"
                class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                :title="t('clear')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <!-- Add Button -->
            <button @click="router.push('/student-payment/add')"
              class="px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 h-[37px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              {{ t('add') }}
            </button>
          </div>
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
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('status') }}</th>
            <th
              class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
            </th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <!-- No Results Found -->
          <tr
            v-if="filteredPayments.length === 0 && (searchQuery || filterDateFrom || filterDateTo || filterStatus || filterMethod)">
            <td colspan="10" class="px-4 py-12 text-center">
              <div class="flex flex-col items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ t('noResults') }}</p>
              </div>
            </td>
          </tr>
          <!-- Payment Rows -->
          <tr v-for="(payment, index) in filteredPayments" :key="payment.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <td class="px-2 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ index + 1 }}
            </td>
            <!-- Student Column: Image, Khmer, English, ID -->
            <td class="px-3 py-3 text-xs">
              <div class="flex items-center gap-2">
                <!-- Student Image -->
                <div
                  class="w-10 h-10 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                  <img v-if="payment.student.profileImage" :src="payment.student.profileImage"
                    :alt="payment.student.nameEnglish || payment.student.name" class="w-full h-full object-cover" />
                  <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                    {{ getInitials(payment.student.nameEnglish || payment.student.nameKhmer || payment.student.name) }}
                  </span>
                </div>
                <!-- Student Info -->
                <div class="flex-1 min-w-0">
                  <div class="font-medium text-gray-900 dark:text-white">
                    {{ payment.student.nameKhmer || payment.student.nameEnglish || payment.student.name }}
                  </div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">
                    {{ payment.student.nameEnglish || payment.student.name }}
                  </div>
                  <div class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                    {{ payment.student.id }}
                  </div>
                </div>
              </div>
            </td>
            <!-- Contact Column: Phone, Email -->
            <td class="px-3 py-3 text-xs">
              <div class="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{{ payment.student.contact || payment.student.phone || 'N/A' }}</span>
              </div>
              <div class="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="truncate">{{ payment.student.email || 'N/A' }}</span>
              </div>
            </td>
            <!-- Class Name Column: ClassName, Teacher -->
            <td class="px-3 py-3 text-xs">
              <div class="font-medium text-gray-900 dark:text-white">{{ payment.className }}</div>
              <div class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                {{ getClassTeacher(payment.classId) || 'N/A' }}
              </div>
            </td>
            <!-- Invoice No -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              payment.invoiceNo }}</td>
            <!-- Amount Due -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center font-semibold">
              ${{ payment.amountDue.toFixed(2) }}</td>
            <!-- Method -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
              <span class="px-2 py-1 text-[10px] font-medium rounded-full"
                :class="payment.method === 'Bank' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'">
                {{ payment.method || 'N/A' }}
              </span>
            </td>
            <!-- Due Date -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              formatDateOnly(payment.startDate || payment.created) }}</td>
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              formatDateOnly(payment.endDate || payment.dueDate) }}</td>
            <td class="px-3 py-3 whitespace-nowrap">
              <span class="px-2 py-1 text-[10px] font-medium rounded-full flex items-center gap-1 justify-center"
                :class="getStatusClass(payment.status)">
                <svg v-if="payment.status === 'Pending'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else-if="payment.status === 'Paid'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {{ payment.status === 'Paid' ? t('paid') : payment.status === 'Pending' ? t('pending') : t('overdue') }}
              </span>
            </td>
            <!-- Actions -->
            <td class="px-2 py-3 whitespace-nowrap text-xs font-medium">
              <div class="relative" data-action-menu-root>
                <button @click.stop="toggleActionMenu(payment.id)"
                  class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  title="Actions">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>

                <!-- Dropdown Menu -->
                <div v-if="activeActionMenu === payment.id"
                  class="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <button @click="handleViewInvoice(payment)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {{ t('invoice') }}
                  </button>

                  <button v-if="payment.status === 'Pending' || payment.status === 'Overdue'"
                    @click="handleConfirm(payment)"
                    class="w-full text-left px-4 py-2 text-sm text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ t('confirmPayment') }}
                  </button>

                  <button v-if="payment.status === 'Pending'" @click="handleReject(payment)"
                    class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ t('rejectPayment') }}
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Invoice Drawer -->
    <Transition name="drawer">
      <div v-if="showInvoiceDrawer" class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click.self="showInvoiceDrawer = false">
        <div class="absolute right-0 top-0 h-full w-full max-w-xl bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div
            class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex items-center justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-bold text-black dark:text-white capitalize">{{ t('invoice') }}</h2>
            <div class="flex items-center gap-2">
              <button @click="showDownloadConfirmDialog = true"
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
              <button @click="showPrintConfirmDialog = true"
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

          <div v-if="selectedPayment" class="p-4 sm:p-6 lg:p-8 bg-white" id="invoice-content">
            <!-- Header Section -->
            <div class="flex justify-between items-start mb-8">
              <!-- Left: Company Info -->
              <div>
                <div class="flex items-center gap-3">
                  <img :src="logoImage" alt="Company Logo" class="h-12 w-auto object-contain" />
                </div>
              </div>
              <!-- Right: Invoice Title -->
              <div>
                <h2 class="text-3xl font-bold text-gray-900 capitalize">{{ t('invoice') }}</h2>
              </div>
            </div>

            <hr class="border-gray-300 my-4">

            <!-- Invoice Info and Customer Info -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
              <!-- Invoice Info -->
              <div>
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  {{ t('invoiceInfo') }}
                </h3>
                <div class="space-y-2.5">
                  <div class="flex items-start gap-2">
                    <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('invoiceNo') }}:</span>
                    <span class="text-sm text-gray-900 font-semibold">{{ selectedPayment.invoiceNo }}</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('startDate') || 'Start Date'
                      }}:</span>
                    <span class="text-sm text-gray-900">{{ formatDateOnly(selectedPayment.startDate ||
                      selectedPayment.created) }}</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('endDate') || 'endDate'
                      }}:</span>
                    <span class="text-sm text-gray-900">{{ formatDateOnly(selectedPayment.endDate ||
                      selectedPayment.dueDate) }}</span>
                  </div>

                </div>
              </div>

              <!-- Customer Info -->
              <div>
                <div class="space-y-2.5">
                  <div class="flex items-start gap-2">
                    <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('name') }}:</span>
                    <span class="text-sm text-gray-900">{{ selectedPayment.student.nameKhmer ||
                      selectedPayment.student.nameEnglish || selectedPayment.student.name || 'N/A' }}</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('phone') }}:</span>
                    <span class="text-sm text-gray-900">{{ selectedPayment.student.contact ||
                      selectedPayment.student.phone || 'N/A' }}</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('registered') || 'Registered'
                      }}:</span>
                    <span class="text-sm text-gray-900">{{ formatDateOnly(selectedPayment.student.registered) || 'N/A'
                    }}</span>
                  </div>
                  <div class="flex items-start gap-2">
                    <span class="text-sm font-medium text-gray-700 min-w-[80px]">{{ t('session') || 'Session'
                      }}:</span>
                    <span class="text-sm text-gray-900 flex-1">{{ getStudentSession(selectedPayment.student.id) || 'N/A'
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
                <div class="px-4 py-3 border-b border-gray-200 last:border-b-0">
                  <div class="grid grid-cols-12 gap-4 text-sm">
                    <div class="col-span-1 text-gray-700">01</div>
                    <div class="col-span-5 text-gray-900 font-medium">{{ t('payment') || 'payment' }}</div>
                    <div class="col-span-2 text-center text-gray-700">${{ selectedPayment.amountDue.toFixed(2) }}</div>
                    <div class="col-span-2 text-center text-gray-700">1</div>
                    <div class="col-span-2 text-right text-gray-900 font-medium">${{
                      selectedPayment.amountDue.toFixed(2) }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Terms & Conditions and Payment Summary -->
            <div class="grid grid-cols-2 gap-8 mb-8">
              <!-- Terms & Conditions -->
              <div>
                <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  {{ t('termsAndConditions') }}
                </h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  {{ t('thankYouMessage') }}
                </p>
              </div>

              <!-- Payment Summary -->
              <div>
                <div class="space-y-3">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600">{{ t('subtotal') || 'Subtotal' }}</span>
                    <span class="text-gray-900">${{ selectedPayment.amountDue.toFixed(2) }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600">{{ t('discount') || 'Discount' }}</span>
                    <span class="text-gray-900">$0.00</span>
                  </div>
                  <div class="flex justify-between text-lg font-bold pt-2 border-t border-gray-300">
                    <span class="text-gray-900">{{ t('grandTotal') }}</span>
                    <span class="text-gray-900">${{ selectedPayment.amountDue.toFixed(2) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer -->
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
        </div>
      </div>
    </Transition>

    <!-- Confirm Payment Dialog -->
    <div v-if="showConfirmDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('confirmPayment') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureConfirmPayment') }}</p>
          </div>
        </div>
        <div class="mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p><span class="font-medium">{{ t('student') }}:</span> {{ paymentToConfirm?.student.name }}</p>
          <p><span class="font-medium">{{ t('invoiceNo') }}:</span> {{ paymentToConfirm?.invoiceNo }}</p>
          <p><span class="font-medium">{{ t('amountDue') }}:</span> <span class="font-bold">${{
            paymentToConfirm?.amountDue.toFixed(2) }}</span></p>
        </div>
        <div class="flex gap-3 justify-end">
          <button @click="showConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmPayment"
            class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium">
            {{ t('yes') }}, {{ t('confirm') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Reject Payment Dialog -->
    <div v-if="showRejectDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showRejectDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('rejectPayment') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureRejectPayment') }}</p>
          </div>
        </div>
        <div class="mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p><span class="font-medium">{{ t('student') }}:</span> {{ paymentToReject?.student.name }}</p>
          <p><span class="font-medium">{{ t('invoiceNo') }}:</span> {{ paymentToReject?.invoiceNo }}</p>
          <p><span class="font-medium">{{ t('amountDue') }}:</span> <span class="font-bold">${{
            paymentToReject?.amountDue.toFixed(2) }}</span></p>
        </div>
        <div class="flex gap-3 justify-end">
          <button @click="showRejectDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmReject"
            class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium">
            {{ t('yes') }}, {{ t('reject') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Download Confirmation Dialog -->
    <div v-if="showDownloadConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showDownloadConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('download') || 'Download' }}
              {{ t('invoice') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureDownloadInvoice') }}</p>
          </div>
        </div>
        <div class="mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300" v-if="selectedPayment">
          <p><span class="font-medium">{{ t('invoiceNo') }}:</span> {{ selectedPayment.invoiceNo }}</p>
          <p><span class="font-medium">{{ t('student') }}:</span> {{ selectedPayment.student.nameKhmer ||
            selectedPayment.student.nameEnglish || selectedPayment.student.name }}</p>
        </div>
        <div class="flex gap-3 justify-end">
          <button @click="showDownloadConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmDownload"
            class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
            {{ t('yes') }}, {{ t('download') || 'Download' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Print Confirmation Dialog -->
    <div v-if="showPrintConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showPrintConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('print') }} {{ t('invoice')
            }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSurePrintInvoice') }}</p>
          </div>
        </div>
        <div class="mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300" v-if="selectedPayment">
          <p><span class="font-medium">{{ t('invoiceNo') }}:</span> {{ selectedPayment.invoiceNo }}</p>
          <p><span class="font-medium">{{ t('student') }}:</span> {{ selectedPayment.student.nameKhmer ||
            selectedPayment.student.nameEnglish || selectedPayment.student.name }}</p>
        </div>
        <div class="flex gap-3 justify-end">
          <button @click="showPrintConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmPrint"
            class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
            {{ t('yes') }}, {{ t('print') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Success Message Toast -->
    <Transition name="toast">
      <div v-if="showSuccessMessage"
        class="fixed top-4 right-4 bg-green-500 text-white rounded-sm shadow-lg p-4 flex items-center gap-3 z-50 min-w-[300px]">
        <div class="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="flex-1">
          <p class="font-semibold text-white">{{ successMessageTitle }}</p>
          <p class="text-sm text-white">{{ successMessageText }}</p>
        </div>
        <button @click="showSuccessMessage = false"
          class="text-white hover:text-green-100 transition-colors flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'
import { addHistory } from '../utils/history'
import { textContains } from '../utils/search'
import html2canvas from 'html2canvas'
import logoImage from '../assets/logo.png'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const router = useRouter()
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
          method: 'Bank', // Default method, can be changed
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
const filterStatus = ref('')
const filterMethod = ref('')

// Invoice drawer state
const showInvoiceDrawer = ref(false)
const selectedPayment = ref(null)
const schoolInfo = ref({
  facebook: 'Your Facebook Page',
  location: 'Your School Address',
  phone: '099999999'
})

// Action menu state
const activeActionMenu = ref(null)
const showSuccessMessage = ref(false)
const successMessageTitle = ref('')
const successMessageText = ref('')

// Confirmation dialogs state
const showConfirmDialog = ref(false)
const showRejectDialog = ref(false)
const paymentToConfirm = ref(null)
const paymentToReject = ref(null)
const showDownloadConfirmDialog = ref(false)
const showPrintConfirmDialog = ref(false)


// Success/Error message state
// Toast state removed - now using global ToastContainer

// Computed properties
const filteredPayments = computed(() => {
  let filtered = payments.value

  // Apply status filter
  if (filterStatus.value) {
    filtered = filtered.filter(p => p.status === filterStatus.value)
  }

  // Apply method filter
  if (filterMethod.value) {
    filtered = filtered.filter(p => p.method === filterMethod.value)
  }

  if (searchQuery.value) {
    filtered = filtered.filter(p =>
      textContains(p.student.name || '', searchQuery.value) ||
      textContains(p.student.nameEnglish || '', searchQuery.value) ||
      textContains(p.student.nameKhmer || '', searchQuery.value) ||
      textContains(p.student.id || '', searchQuery.value) ||
      textContains(p.student.email || '', searchQuery.value) ||
      textContains(p.student.contact || '', searchQuery.value) ||
      textContains(p.className || '', searchQuery.value) ||
      textContains(p.invoiceNo || '', searchQuery.value)
    )
  }

  // Apply date range filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(payment => {
      const target = payment.endDate || payment.dueDate || payment.startDate
      if (!target) return false

      const targetDate = new Date(target)
      targetDate.setHours(0, 0, 0, 0)

      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return targetDate >= fromDate && targetDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return targetDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return targetDate <= toDate
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

// Clear all filters
const clearAllFilters = () => {
  filterDateFrom.value = ''
  filterDateTo.value = ''
  filterStatus.value = ''
  filterMethod.value = ''
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

// Action menu functions
const toggleActionMenu = (paymentId) => {
  activeActionMenu.value = activeActionMenu.value === paymentId ? null : paymentId
}

// Handle view invoice
const handleViewInvoice = (payment) => {
  selectedPayment.value = payment
  showInvoiceDrawer.value = true
  activeActionMenu.value = null
}

// Confirm download invoice
const confirmDownload = async () => {
  showDownloadConfirmDialog.value = false
  await downloadInvoice()
}

// Download invoice as image
const downloadInvoice = async () => {
  try {
    const invoiceElement = document.getElementById('invoice-content')
    if (!invoiceElement) {
      error(t('invoiceElementNotFound') || 'Invoice element not found')
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
        error(t('screenshotFailed') || 'Failed to generate screenshot')
        return
      }

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = `invoice-${selectedPayment.value.invoiceNo}.png`
      link.href = url
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      showSuccessMessage.value = true
      successMessageTitle.value = t('screenshotSaved') || 'Invoice Downloaded'
      successMessageText.value = t('screenshotSaved') || 'Invoice downloaded successfully'
      setTimeout(() => {
        showSuccessMessage.value = false
      }, 3000)

      // Add history entry for download invoice
      addHistory('downloadInvoice', {
        type: 'student',
        itemName: `Invoice ${selectedPayment.value.invoiceNo}`,
        itemId: selectedPayment.value.id,
        description: `Student payment invoice downloaded - Student: ${selectedPayment.value.student?.name || 'N/A'}, Amount: $${selectedPayment.value.amountDue?.toFixed(2) || '0.00'}`,
        user: 'Admin'
      })
    }, 'image/png')
  } catch (err) {
    console.error('Error downloading invoice:', err)
    error(t('screenshotError') || 'Error generating invoice. Please try again.')
  }
}

// Confirm print invoice
const confirmPrint = () => {
  showPrintConfirmDialog.value = false
  printInvoice()
}

// Print invoice
const printInvoice = () => {
  try {
    const invoiceElement = document.getElementById('invoice-content')
    if (!invoiceElement) {
      error(t('invoiceElementNotFound') || 'Invoice element not found')
      return
    }

    // Ensure drawer is visible
    if (!showInvoiceDrawer.value) {
      error('Please open the invoice first')
      return
    }

    // Add print class to body to trigger print styles
    document.body.classList.add('printing-invoice')

    // Small delay to ensure styles are applied
    setTimeout(() => {
      // Trigger print dialog
      window.print()

      // Remove print class after printing (using beforeprint/afterprint events)
      const removePrintClass = () => {
        document.body.classList.remove('printing-invoice')
        window.removeEventListener('afterprint', removePrintClass)

        // Add history entry for print invoice
        addHistory('print', {
          type: 'student',
          itemName: `Invoice ${selectedPayment.value.invoiceNo}`,
          itemId: selectedPayment.value.id,
          description: `Student payment invoice printed - Student: ${selectedPayment.value.student?.name || 'N/A'}, Amount: $${selectedPayment.value.amountDue?.toFixed(2) || '0.00'}`,
          user: 'Admin'
        })

        // Show success message after printing
        showSuccessMessage.value = true
        successMessageTitle.value = t('invoicePrinted') || 'Invoice Printed'
        successMessageText.value = t('invoicePrintedSuccess') || 'Invoice has been sent to printer successfully!'
        setTimeout(() => {
          showSuccessMessage.value = false
        }, 3000)
      }
      window.addEventListener('afterprint', removePrintClass)

      // Fallback: remove class after 2 seconds if afterprint doesn't fire
      setTimeout(() => {
        document.body.classList.remove('printing-invoice')

        // Add history entry for print invoice (fallback)
        addHistory('print', {
          type: 'student',
          itemName: `Invoice ${selectedPayment.value.invoiceNo}`,
          itemId: selectedPayment.value.id,
          description: `Student payment invoice printed - Student: ${selectedPayment.value.student?.name || 'N/A'}, Amount: $${selectedPayment.value.amountDue?.toFixed(2) || '0.00'}`,
          user: 'Admin'
        })

        // Show success message even if afterprint doesn't fire
        showSuccessMessage.value = true
        successMessageTitle.value = t('invoicePrinted') || 'Invoice Printed'
        successMessageText.value = t('invoicePrintedSuccess') || 'Invoice has been sent to printer successfully!'
        setTimeout(() => {
          showSuccessMessage.value = false
        }, 3000)
      }, 2000)
    }, 100)
  } catch (err) {
    console.error('Error printing invoice:', err)
    error('Error printing invoice. Please try again.')
    document.body.classList.remove('printing-invoice')
  }
}

// Handle confirm
const handleConfirm = (payment) => {
  paymentToConfirm.value = payment
  showConfirmDialog.value = true
  activeActionMenu.value = null
}

// Handle reject
const handleReject = (payment) => {
  paymentToReject.value = payment
  showRejectDialog.value = true
  activeActionMenu.value = null
}


// Confirm payment
const confirmPayment = () => {
  try {
    if (paymentToConfirm.value) {
      const index = payments.value.findIndex(p => p.id === paymentToConfirm.value.id)
      if (index !== -1) {
        payments.value[index].status = 'Paid'
        payments.value[index].paidDate = new Date().toISOString().split('T')[0]
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

        addHistory('update', {
          type: 'pos',
          itemName: payments.value[index].invoiceNo,
          itemId: paymentToConfirm.value.id,
          description: `Student payment confirmed - Invoice: ${payments.value[index].invoiceNo}, Amount: ${paymentToConfirm.value.amountDue}`,
          user: 'Admin'
        })

        showConfirmDialog.value = false
        paymentToConfirm.value = null
        showSuccessMessage.value = true
        successMessageTitle.value = t('paymentConfirmed')
        successMessageText.value = `"${payments.value[index].invoiceNo}" ${t('paymentConfirmedSuccess')}`
        setTimeout(() => {
          showSuccessMessage.value = false
        }, 3000)

        // Dispatch event for income generation
        window.dispatchEvent(new CustomEvent('paymentConfirmed', { detail: payments.value[index] }))
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
        showSuccessMessage.value = true
        successMessageTitle.value = t('paymentRejected')
        successMessageText.value = `"${payments.value[index].invoiceNo}" ${t('paymentRejectedSuccess')}`
        setTimeout(() => {
          showSuccessMessage.value = false
        }, 3000)
      }
    }
  } catch (err) {
    showRejectDialog.value = false
    handleError(err, { userMessage: 'Failed to reject payment. Please try again.' })
  }
}

// Toast functions - now using composable (already defined above)

// Close action menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('[data-action-menu-root]')) {
    activeActionMenu.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
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
  document.removeEventListener('click', handleClickOutside)
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
    /* stylelint-disable-next-line property-no-unknown */
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
