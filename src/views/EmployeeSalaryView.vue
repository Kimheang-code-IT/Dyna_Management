<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Employees Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalEmployees') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalEmployees }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Payout Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalPayout') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              ${{ totalPayout.toFixed(2) }}</p>
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

      <!-- Pending Payments Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('pendingPayments') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ pendingPayments }}</p>
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

      <!-- Paid Payments Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('paidPayments') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ paidPayments }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4">
      <!-- Left Section: Payroll List -->
      <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-sm shadow">
        <div class="p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-0 mb-2">
            <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{{ t('payrollList') }}</h2>
            <div class="flex items-center gap-2">
              <label class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{{ t('month')
                }}:</label>
              <input v-model="selectedMonth" type="month"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px]" />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ filteredPayroll.length }} {{ t('employees') }}</p>
            <div v-if="selectedForPayment.size > 0" class="flex items-center gap-2">
              <button @click.stop="showPayAllDialog = true"
                class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ t('payAll') || 'Pay All' }} ({{ selectedForPayment.size }})
              </button>
            </div>
          </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="px-4 pt-4 flex gap-2 border-b border-gray-200 dark:border-gray-700">
          <button @click="viewMode = 'all'" :class="[
            'px-4 py-2 text-sm font-medium transition-colors',
            viewMode === 'all'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          ]">
            {{ t('allRecords') }}
          </button>
          <button @click="viewMode = 'history'" :class="[
            'px-4 py-2 text-sm font-medium transition-colors',
            viewMode === 'history'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          ]">
            {{ t('history') }}
          </button>
        </div>

        <!-- Payroll Table -->
        <div class="max-h-[500px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm">
          <table class="w-full">
            <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
              <tr>
                <th class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" :checked="selectAllChecked" @change="toggleSelectAll"
                      class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700" />
                   
                  </label>
                </th>
                <th class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">{{
                  t('employee') }}</th>
                <th class="px-2 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">{{
                  t('department') }}</th>
                <th class=" py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">{{
                  t('hours') }}</th>
                <th class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">{{
                  t('rate') }}</th>
                <th class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">{{
                  t('totalPayout') }}</th>
                <th class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">{{
                  t('status') }}</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="payroll in filteredPayroll" :key="payroll.id" @click="selectPayroll(payroll)" :class="[
                'cursor-pointer transition-colors',
                selectedPayroll && selectedPayroll.id === payroll.id
                  ? 'bg-blue-50 dark:bg-blue-900/20'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700'
              ]">
                <td class="px-4 py-3" @click.stop>
                  <input type="checkbox" :checked="selectedForPayment.has(payroll.id)"
                    @change="togglePaymentSelection(payroll.id)" :disabled="payroll.status === 'Paid'"
                    class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed" />
                </td>
                <td class="px-1 py-3">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                      <img v-if="payroll.employee && payroll.employee.profileImage" :src="payroll.employee.profileImage"
                        :alt="payroll.employee.nameEnglish || payroll.employee.nameKhmer || payroll.employee.name"
                        class="w-full h-full object-cover" />
                      <span v-else-if="payroll.employee"
                        class="text-blue-600 dark:text-blue-400 font-semibold text-xs">{{ (payroll.employee.nameEnglish
                          || payroll.employee.nameKhmer || payroll.employee.name || '').charAt(0).toUpperCase() }}</span>
                      <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">?</span>
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-900 dark:text-white">
                        <div v-if="payroll.employee && payroll.employee.nameKhmer" class="akbalthom-khmer text-xs">{{
                          payroll.employee.nameKhmer }}</div>
                        <div v-if="payroll.employee && payroll.employee.nameEnglish" class="text-xs">{{
                          payroll.employee.nameEnglish }}</div>
                        <div v-if="payroll.employee && !payroll.employee.nameKhmer && !payroll.employee.nameEnglish">{{
                          payroll.employee.name }}</div>
                        <div v-if="!payroll.employee">N/A</div>
                      </div>
                      <div class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ payroll.employeeId }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="text-sm text-gray-900 dark:text-white">{{ getDepartment(payroll.employee) }}</div>
                  <div class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ payroll.employee ?
                    payroll.employee.role : 'N/A' }}</div>
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{{ payroll.hoursWorked }} {{ t('hrs') }}
                </td>
                <td class="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">${{ payroll.rate.toFixed(2) }}</td>
                <td class="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">${{
                  payroll.totalPayout.toFixed(2) }}</td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-2">
                    <span :class="[
                      'w-2 h-2 rounded-full',
                      payroll.status === 'Paid'
                        ? 'bg-green-500'
                        : payroll.status === 'Pending'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                    ]"></span>
                    <span class="text-sm text-gray-700 dark:text-gray-300">{{ payroll.status }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Right Section: Payment Detail -->
      <div class="lg:col-span-1 bg-white dark:bg-gray-800 rounded-sm shadow">
        <div class="px-1 py-3 sm:p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{{ t('paymentDetail') }}</h2>
        </div>

        <div v-if="selectedPayroll" class="p-2 sm:p-4 space-y-4 sm:space-y-1">
          <!-- Employee Info -->
          <div>
            <div class="flex items-center gap-3 mb-2">
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                <img v-if="selectedPayroll.employee && selectedPayroll.employee.profileImage"
                  :src="selectedPayroll.employee.profileImage"
                  :alt="selectedPayroll.employee.nameEnglish || selectedPayroll.employee.nameKhmer || selectedPayroll.employee.name"
                  class="w-full h-full object-cover" />
                <span v-else-if="selectedPayroll.employee" class="text-blue-600 dark:text-blue-400 font-semibold">{{
                  (selectedPayroll.employee.nameEnglish || selectedPayroll.employee.nameKhmer ||
                    selectedPayroll.employee.name || '').charAt(0).toUpperCase() }}</span>
              </div>
              <div>
                <h3 class="text-base font-semibold text-gray-900 dark:text-white">
                  <div v-if="selectedPayroll.employee && selectedPayroll.employee.nameKhmer" class="akbalthom-khmer">{{
                    selectedPayroll.employee.nameKhmer }}</div>
                  <div v-if="selectedPayroll.employee && selectedPayroll.employee.nameEnglish">{{
                    selectedPayroll.employee.nameEnglish }}</div>
                  <div
                    v-if="selectedPayroll.employee && !selectedPayroll.employee.nameKhmer && !selectedPayroll.employee.nameEnglish">
                    {{ selectedPayroll.employee.name }}</div>
                  <div v-if="!selectedPayroll.employee">N/A</div>
                </h3>
                <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                  {{ selectedPayroll.employee ? selectedPayroll.employee.role : 'N/A' }} � {{
                    getDepartment(selectedPayroll.employee) }}
                </p>
                <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">{{
                  formatMonth(selectedPayroll.month) }}</p>
              </div>
            </div>
          </div>

          <!-- Payment Calculation -->
          <div class="space-y-2">
            <!-- Hours Worked -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('hoursWorked') }}
              </label>
              <input v-model.number="paymentForm.hoursWorked" type="number" step="0.5" min="0" @input="calculateTotal"
                :disabled="selectedPayroll.status === 'Paid'"
                class="w-full px-3 py-2  border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]" />
              <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">{{ paymentForm.hoursWorked }} {{
                t('hrs') }}</p>
            </div>

            <!-- Price / Hour -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('pricePerHour') }}
              </label>
              <input v-model.number="paymentForm.rate" type="number" step="0.01" min="0" @input="calculateTotal"
                :disabled="selectedPayroll.status === 'Paid'"
                class="w-full px-3 py-2  border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]" />
            </div>

            <!-- Total Payout -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ t('totalPayout') }}
              </label>
              <div
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold">
                ${{ paymentForm.totalPayout.toFixed(2) }}
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 ">
              {{ t('method') }}
            </label>
            <select v-model="paymentForm.paymentMethod" :disabled="selectedPayroll.status === 'Paid'"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed">
              <option value="">{{ t('selectPaymentMethod') }}</option>
              <option value="Bank transfer">{{ t('bankTransfer') }}</option>
              <option value="Cash">{{ t('cash') }}</option>
              <option value="Check">{{ t('check') }}</option>
              <option value="Mobile payment">{{ t('mobilePayment') }}</option>
            </select>
          </div>

          <!-- Notes -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('notes') }}
            </label>
            <textarea v-model="paymentForm.notes" rows="3" :disabled="selectedPayroll.status === 'Paid'"
              :placeholder="t('optionalReference')"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed resize-y"></textarea>
          </div>

          <!-- Pay Button -->
          <button v-if="selectedPayroll.status !== 'Paid'" @click="processPayment"
            class="w-full px-4 py-3 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            $ {{ t('pay') }} {{ formatMonth(selectedPayroll.month) }}
          </button>

          <!-- Paid Status -->
          <div v-else
            class="px-4 py-3 bg-green-50 dark:bg-green-900/20 rounded-sm border border-green-200 dark:border-green-800">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 dark:text-green-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm font-medium text-green-800 dark:text-green-200">{{ t('paymentProcessed') }}</span>
            </div>
            <p v-if="selectedPayroll.paidDate" class="text-xs text-green-600 dark:text-green-400 mt-1">
              {{ t('paidOn') }}: {{ formatDate(selectedPayroll.paidDate) }}
            </p>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-3"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('selectEmployeeToViewDetails') }}</p>
        </div>
      </div>
    </div>

    <!-- Pay All Confirmation Dialog -->
    <div v-if="showPayAllDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showPayAllDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('payAllSelected') || 'Pay All SelectedEmployees' }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {{ t('confirmPayAll') || `Are you sure you want to pay ${selectedForPayment.size} employee(s)? Total
              amount: $${totalSelectedAmount.toFixed(2)}` }}
            </p>
          </div>
        </div>
        <div class="flex gap-3 justify-end">
          <button @click="showPayAllDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmPayAll" :disabled="isProcessingPayAll"
            class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2">
            <svg v-if="isProcessingPayAll" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            {{ isProcessingPayAll ? (t('processing') || 'Processing...') : (t('yes') + ', ' + (t('payAll') || 'PayAll')) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject, onMounted, watch } from 'vue'
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

// Load attendance data
const attendanceData = ref([])

const loadAttendance = async () => {
  try {
    const saved = localStorage.getItem('employee_attendance_data')
    if (saved) {
      attendanceData.value = JSON.parse(saved)
    }
  } catch (error) {
    console.error('Error loading attendance:', error)
    attendanceData.value = []
  }
}

// Calculate hours from attendance for a specific month
const calculateHoursFromAttendance = (employeeId, month) => {
  const monthAttendance = attendanceData.value.filter(att =>
    att.employeeId === employeeId &&
    att.month === month &&
    att.status === 'Approved'
  )

  if (monthAttendance.length === 0) return 0

  // Sum up total hours from all approved attendance records for the month
  return monthAttendance.reduce((sum, att) => sum + (att.total || 0), 0)
}

// Get employee rate (default or from employee data)
const getEmployeeRate = (employee) => {
  // Default rate based on role or contract
  if (!employee) return 10 // Default $10/hour

  const roleRates = {
    'Manager': 25,
    'Teacher': 15,
    'Administrator': 12,
    'Coordinator': 10
  }

  return roleRates[employee.role] || 10
}

// Auto-generate payroll from attendance
const generatePayrollFromAttendance = async () => {
  try {
    await loadAttendance()

    if (!selectedMonth.value) return

    const employeesData = JSON.parse(localStorage.getItem('employees_data') || '[]')
    const [year, month] = selectedMonth.value.split('-')

    employeesData.forEach(employee => {
      // Check if payroll already exists for this employee and month
      const existingPayroll = payroll.value.find(p =>
        p.employeeId === employee.id && p.month === selectedMonth.value
      )

      if (!existingPayroll) {
        // Calculate hours from attendance
        const hoursWorked = calculateHoursFromAttendance(employee.id, selectedMonth.value)
        const rate = getEmployeeRate(employee)
        const totalPayout = hoursWorked * rate

        // Only create payroll if there are hours worked
        if (hoursWorked > 0) {
          const newPayroll = {
            id: `PAY${Date.now()}-${employee.id}`,
            employeeId: employee.id,
            month: selectedMonth.value,
            hoursWorked: hoursWorked,
            rate: rate,
            totalPayout: totalPayout,
            status: 'Pending',
            paymentMethod: '',
            notes: '',
            created: new Date().toISOString().split('T')[0]
          }
          payroll.value.push(newPayroll)
        }
      } else {
        // Update existing payroll with latest attendance data
        const hoursWorked = calculateHoursFromAttendance(employee.id, selectedMonth.value)
        const rate = existingPayroll.rate || getEmployeeRate(employee)
        const totalPayout = hoursWorked * rate

        const index = payroll.value.findIndex(p => p.id === existingPayroll.id)
        if (index !== -1 && existingPayroll.status !== 'Paid') {
          payroll.value[index].hoursWorked = hoursWorked
          payroll.value[index].rate = rate
          payroll.value[index].totalPayout = totalPayout
        }
      }
    })

    savePayroll()
  } catch (error) {
    console.error('Error generating payroll from attendance:', error)
  }
}

// Load payroll from JSON file or localStorage
const loadPayroll = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')
    const payrollData = await loadDataFromJSON('../data/employee_payroll.json', 'employee_payroll_data')
    const employeesData = await loadDataFromJSON('../data/employees.json', 'employees_data')

    // Merge payroll with employee data
    payroll.value = payrollData.map(pay => {
      const employee = employeesData.find(emp => emp.id === pay.employeeId)
      return {
        ...pay,
        employee: employee || null
      }
    })

    // Auto-generate payroll from attendance
    await generatePayrollFromAttendance()

    savePayroll()
  } catch (error) {
    console.error('Error loading payroll:', error)
    const saved = localStorage.getItem('employee_payroll_data')
    if (saved) {
      const payrollData = JSON.parse(saved)
      const employeesData = JSON.parse(localStorage.getItem('employees_data') || '[]')
      payroll.value = payrollData.map(pay => {
        const employee = employeesData.find(emp => emp.id === pay.employeeId)
        return {
          ...pay,
          employee: employee || null
        }
      })

      // Auto-generate payroll from attendance
      await generatePayrollFromAttendance()
    } else {
      payroll.value = []
    }
  }
}

// Save payroll to localStorage
const savePayroll = () => {
  try {
    const dataToSave = payroll.value.map(pay => {
      const { employee, ...rest } = pay
      return rest
    })
    localStorage.setItem('employee_payroll_data', JSON.stringify(dataToSave))
  } catch (error) {
    console.error('Error saving payroll:', error)
  }
}

const payroll = ref([])
const viewMode = ref('all')
const selectedPayroll = ref(null)
const selectedMonth = ref('2026-01')

// Payment selection state
const selectedForPayment = ref(new Set())
const showPayAllDialog = ref(false)
const isProcessingPayAll = ref(false)

// Payment form
const paymentForm = reactive({
  hoursWorked: 0,
  rate: 0,
  totalPayout: 0,
  paymentMethod: '',
  notes: ''
})

// Success/Error message state
// Toast state removed - now using global ToastContainer

// Computed properties
const filteredPayroll = computed(() => {
  let filtered = payroll.value.filter(pay => pay.month === selectedMonth.value)

  if (viewMode.value === 'history') {
    // Show only paid employees in history
    filtered = filtered.filter(pay => pay.status === 'Paid')
  } else if (viewMode.value === 'all') {
    // Show only unpaid/pending employees in main table
    filtered = filtered.filter(pay => pay.status !== 'Paid')
  }

  return filtered
})

const totalEmployees = computed(() => {
  return filteredPayroll.value.length
})

const totalPayout = computed(() => {
  return filteredPayroll.value.reduce((sum, pay) => sum + pay.totalPayout, 0)
})

const pendingPayments = computed(() => {
  return filteredPayroll.value.filter(pay => pay.status === 'Pending').length
})

const paidPayments = computed(() => {
  return filteredPayroll.value.filter(pay => pay.status === 'Paid').length
})

// Computed properties for payment selection
const selectAllChecked = computed(() => {
  const payablePayroll = filteredPayroll.value.filter(pay => pay.status !== 'Paid')
  if (payablePayroll.length === 0) return false
  return payablePayroll.every(pay => selectedForPayment.value.has(pay.id))
})

const totalSelectedAmount = computed(() => {
  return filteredPayroll.value
    .filter(pay => selectedForPayment.value.has(pay.id))
    .reduce((sum, pay) => sum + pay.totalPayout, 0)
})

// Get department from employee
const getDepartment = (employee) => {
  if (!employee) return 'N/A'

  // Map roles to departments
  const departmentMap = {
    'Manager': 'Management',
    'Teacher': 'Teaching & Academics',
    'Administrator': 'Operations',
    'Coordinator': 'Admissions'
  }

  return departmentMap[employee.role] || employee.role || 'N/A'
}

// Format month
const formatMonth = (monthString) => {
  if (!monthString) return ''
  const [year, month] = monthString.split('-')
  const date = new Date(year, parseInt(month) - 1, 1)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch (error) {
    return 'N/A'
  }
}

// Toggle payment selection
const togglePaymentSelection = (payrollId) => {
  if (selectedForPayment.value.has(payrollId)) {
    selectedForPayment.value.delete(payrollId)
  } else {
    const pay = payroll.value.find(p => p.id === payrollId)
    if (pay && pay.status !== 'Paid') {
      selectedForPayment.value.add(payrollId)
    }
  }
}

// Toggle select all
const toggleSelectAll = () => {
  const payablePayroll = filteredPayroll.value.filter(pay => pay.status !== 'Paid')

  if (selectAllChecked.value) {
    // Deselect all
    payablePayroll.forEach(pay => {
      selectedForPayment.value.delete(pay.id)
    })
  } else {
    // Select all payable
    payablePayroll.forEach(pay => {
      selectedForPayment.value.add(pay.id)
    })
  }
}

// Select payroll
const selectPayroll = (pay) => {
  selectedPayroll.value = { ...pay }
  paymentForm.hoursWorked = pay.hoursWorked
  paymentForm.rate = pay.rate
  paymentForm.totalPayout = pay.totalPayout
  paymentForm.paymentMethod = pay.paymentMethod || ''
  paymentForm.notes = pay.notes || ''
}

// Calculate total payout
const calculateTotal = () => {
  paymentForm.totalPayout = paymentForm.hoursWorked * paymentForm.rate
}

// Process payment
const processPayment = () => {
  if (!selectedPayroll.value) return

  if (!paymentForm.paymentMethod) {
    error(t('pleaseSelectPaymentMethod') || 'Please select a payment method')
    return
  }

  try {
    const index = payroll.value.findIndex(pay => pay.id === selectedPayroll.value.id)
    if (index !== -1) {
      payroll.value[index] = {
        ...payroll.value[index],
        hoursWorked: paymentForm.hoursWorked,
        rate: paymentForm.rate,
        totalPayout: paymentForm.totalPayout,
        paymentMethod: paymentForm.paymentMethod,
        notes: paymentForm.notes,
        status: 'Paid',
        paidDate: new Date().toISOString().split('T')[0]
      }

      // Remove from selection
      selectedForPayment.value.delete(selectedPayroll.value.id)

      savePayroll()
      selectedPayroll.value = { ...payroll.value[index] }

      const employeeName = selectedPayroll.value.employee
        ? (selectedPayroll.value.employee.nameEnglish || selectedPayroll.value.employee.nameKhmer || selectedPayroll.value.employee.name)
        : 'employee'
      addHistory('update', {
        type: 'user',
        itemName: employeeName,
        itemId: selectedPayroll.value.id,
        description: `Employee salary paid - ${employeeName}, Amount: $${paymentForm.totalPayout.toFixed(2)}`,
        user: 'Admin'
      })
      success(`${t('paymentProcessed')}: $${paymentForm.totalPayout.toFixed(2)} ${t('hasBeenPaidTo')} ${employeeName}`)
    }
  } catch (err) {
    console.error('Error processing payment:', err)
    error(t('paymentFailed') || 'Payment processing failed. Please try again.')
  }
}

// Confirm pay all
const confirmPayAll = async () => {
  if (selectedForPayment.value.size === 0) {
    error(t('noEmployeesSelected') || 'No employees selected for payment.')
    showPayAllDialog.value = false
    return
  }

  isProcessingPayAll.value = true

  try {
    let successCount = 0
    let totalAmount = 0
    const selectedIds = Array.from(selectedForPayment.value)

    for (const payrollId of selectedIds) {
      const index = payroll.value.findIndex(pay => pay.id === payrollId)
      if (index !== -1) {
        const pay = payroll.value[index]
        if (pay.status !== 'Paid') {
          payroll.value[index] = {
            ...pay,
            status: 'Paid',
            paidDate: new Date().toISOString().split('T')[0],
            paymentMethod: pay.paymentMethod || 'Bank transfer',
            notes: pay.notes || ''
          }
          totalAmount += pay.totalPayout
          successCount++
        }
      }
    }

    // Clear selection
    selectedForPayment.value.clear()

    savePayroll()
    showPayAllDialog.value = false

    if (successCount > 0) {
      addHistory('update', {
        type: 'user',
        itemName: `${successCount} Employee(s)`,
        itemId: null,
        description: `Bulk salary payment processed - ${successCount} employee(s) paid. Total: $${totalAmount.toFixed(2)}`,
        user: 'Admin'
      })
      success(`${t('paymentsProcessed') || 'Payments Processed'}: ${successCount} ${t('employee')}(s) paid. Total: $${totalAmount.toFixed(2)}`)
    } else {
      error(t('noPaymentsProcessed') || 'No payments were processed.')
    }
  } catch (err) {
    console.error('Error processing payments:', err)
    error(t('paymentFailed') || 'Payment processing failed. Please try again.')
  } finally {
    isProcessingPayAll.value = false
  }
}

// Toast functions - now using composable (already defined above)

// Watch selected month to regenerate payroll
watch(selectedMonth, async () => {
  await generatePayrollFromAttendance()
}, { immediate: false })

onMounted(() => {
  loadPayroll()

  // Listen for storage events
  window.addEventListener('storage', (e) => {
    if (e.key === 'employee_payroll_data' || e.key === 'employee_attendance_data' || e.key === 'employees_data') {
      loadPayroll()
    }
  })

  // Listen for attendance updates
  window.addEventListener('attendanceUpdated', () => {
    generatePayrollFromAttendance()
  })

  // Listen for employees updated event
  window.addEventListener('employeesUpdated', loadPayroll)
})
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

/* AKbalthom KhmerGothic Font */
@font-face {
  font-family: 'AKbalthom KhmerGothic';
  src: url('../assets/fonts/AKbalthom%20KhmerGothic.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.akbalthom-khmer {
  font-family: 'AKbalthom KhmerGothic', 'Khmer', 'Khmer OS', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
