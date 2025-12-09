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

      <!-- Active Employees Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('activeEmployees') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ activeEmployees }}</p>
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

      <!-- Total Roles Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalRoles') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalRoles }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Contracts Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalContracts') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalContracts }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Employees Table -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
      <!-- Search Filter Bar -->
      <div class="p-0 mb-2 sm:mb-3">
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center justify-between">
          <div class="relative w-full sm:w-[300px]">
            <div class="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-400" fill="none" stroke="currentColor"
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

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 flex-wrap mt-2">
            <button @click="handleGenerateCardFromToolbar" :disabled="filteredEmployees.length === 0"
              class="h-[37px] px-4 rounded-sm text-sm font-semibold flex items-center gap-2 transition-colors"
              :class="filteredEmployees.length === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'"
              :title="t('generateCard') || 'Generate Card'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              {{ t('generateCard') || 'Generate Card' }}
            </button>
            <!-- Date Range Picker -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <label
                class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap self-center sm:self-auto">{{
                  t('dateBetween') }}:</label>
              <input v-model="filterDateFrom" type="date"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px] w-[115px]" />
              <span class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 self-center sm:self-auto">{{ t('to')
              }}</span>
              <input v-model="filterDateTo" type="date"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px] w-[115px]" />
              <button v-if="filterDateFrom || filterDateTo" @click="clearDateFilter"
                class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors h-[37px]"
                :title="t('clear')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
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
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('no') }}</th>
            <th
              class="px-2 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('employee') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('gender') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('province') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('dob') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('role') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('contract') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('contact') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              Telegram</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('registered') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('status') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
            </th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <!-- No Results Found -->
          <tr v-if="filteredEmployees.length === 0 && searchQuery">
            <td colspan="12" class="px-4 py-12 text-center">
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
          <!-- Employee Rows -->
          <tr v-for="(employee, index) in filteredEmployees" :key="employee.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ index + 1 }}
            </td>
            <td class="px-3 py-3 text-xs">
              <div class="flex items-center gap-2">
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900 relative">
                  <img v-if="employee.profileImage" :src="employee.profileImage"
                    :alt="employee.nameEnglish || employee.nameKhmer || employee.name"
                    class="w-full h-full object-cover" />
                  <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">{{ (employee.nameEnglish
                    || employee.nameKhmer || employee.name || '').charAt(0).toUpperCase() }}</span>
                </div>
                <div>
                  <div class="font-medium text-gray-900 dark:text-white text-xs">
                    <div v-if="employee.nameKhmer" class="akbalthom-khmer">{{ employee.nameKhmer }}</div>
                    <div v-if="employee.nameEnglish" class="text-gray-900 dark:text-white">{{ employee.nameEnglish }}
                    </div>
                    <div v-if="!employee.nameKhmer && !employee.nameEnglish">{{ employee.name }}</div>
                  </div>
                  <div class="text-[10px] text-gray-500 dark:text-gray-400">{{ employee.id }}</div>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              employee.gender }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              employee.province || '-' }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ employee.dob
              ? formatDate(employee.dob) : '-' }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              employee.role }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              employee.contract }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
              <div v-if="employee.phone || employee.email" class="flex flex-col gap-0.5">
                <div v-if="employee.phone" class="text-gray-700 dark:text-gray-300">{{ employee.phone }}</div>
                <div v-if="employee.email" class="text-gray-500 dark:text-gray-400 text-[10px]">{{ employee.email }}
                </div>
              </div>
              <span v-else>{{ employee.contact || '-' }}</span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              employee.telegram || '-' }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              employee.registered ? formatDate(employee.registered) : (employee.hired ? formatDate(employee.hired) :
                '-') }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-center">
              <span :class="[
                'px-2 py-1 rounded-full text-[10px] font-medium',
                employee.status === 'Active'
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              ]">
                {{ employee.status }}
              </span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-xs font-medium">
              <div class="relative">
                <button @click="toggleActionMenu(employee.id)"
                  class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  title="Actions">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>

                <!-- Dropdown Menu -->
                <div v-if="activeActionMenu === employee.id"
                  class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <button @click="handleView(employee)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {{ t('view') }}
                  </button>
                  <button @click="handleEdit(employee)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    {{ t('edit') }}
                  </button>
                  <button @click="handleGenerateCard(employee)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    {{ t('generateCard') || 'Generate Card' }}
                  </button>
                  <button @click="handleDelete(employee)"
                    class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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

    <!-- Right Side Drawer for View/Add/Edit Employee -->
    <Transition name="drawer">
      <div v-if="showDrawer" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click.self="closeDrawer">
        <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div
            class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white">
                {{ isViewMode ? t('viewEmployee') : editingEmployee ? t('editEmployee') : t('addEmployee') }}
              </h2>
            </div>
            <button @click="closeDrawer"
              class="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
            <!-- Employee Name Khmer -->
            <div>
              <label for="nameKhmer" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('fullNameKhmer') }} <span class="text-red-500">*</span>
              </label>
              <input id="nameKhmer" v-model="form.nameKhmer" type="text" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px] akbalthom-khmer"
                :placeholder="t('fullNameKhmerPlaceholder')" />
            </div>

            <!-- Employee Name English -->
            <div>
              <label for="nameEnglish" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('fullNameEnglish') }} <span class="text-red-500">*</span>
              </label>
              <input id="nameEnglish" v-model="form.nameEnglish" type="text" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                :placeholder="t('fullNameEnglishPlaceholder')" />
            </div>

            <!-- Gender -->
            <div>
              <label for="gender" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('gender') }} <span class="text-red-500">*</span>
              </label>
              <select id="gender" v-model="form.gender" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed">
                <option value="">{{ t('selectGender') }}</option>
                <option value="Male">{{ t('male') }}</option>
                <option value="Female">{{ t('female') }}</option>
              </select>
            </div>

            <!-- Province -->
            <div>
              <label for="province" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('province') }} <span class="text-red-500">*</span>
              </label>
              <select id="province" v-model="form.province" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed">
                <option value="">{{ t('selectProvince') }}</option>
                <option value="Phnom Penh">Phnom Penh</option>
                <option value="Kandal">Kandal</option>
                <option value="Kampong Cham">Kampong Cham</option>
                <option value="Siem Reap">Siem Reap</option>
                <option value="Battambang">Battambang</option>
                <option value="Preah Sihanouk">Preah Sihanouk</option>
                <option value="Kampot">Kampot</option>
                <option value="Takeo">Takeo</option>
                <option value="Kampong Thom">Kampong Thom</option>
                <option value="Pursat">Pursat</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <!-- Date of Birth -->
            <div>
              <label for="dob" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('dob') }} <span class="text-red-500">*</span>
              </label>
              <input id="dob" v-model="form.dob" type="date" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]" />
            </div>

            <!-- Role -->
            <div>
              <label for="role" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('role') }} <span class="text-red-500">*</span>
              </label>
              <select id="role" v-model="form.role" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed">
                <option value="">{{ t('selectRole') }}</option>
                <option value="Manager">{{ t('manager') }}</option>
                <option value="Teacher">{{ t('teacher') }}</option>
                <option value="Administrator">{{ t('administrator') }}</option>
                <option value="Coordinator">{{ t('coordinator') }}</option>
              </select>
            </div>

            <!-- Contract -->
            <div>
              <label for="contract" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('contract') }} <span class="text-red-500">*</span>
              </label>
              <select id="contract" v-model="form.contract" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed">
                <option value="">{{ t('selectContract') }}</option>
                <option value="Full-time">{{ t('fullTime') }}</option>
                <option value="Part-time">{{ t('partTime') }}</option>
              </select>
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('phone') }} <span class="text-red-500">*</span>
              </label>
              <input id="phone" v-model="form.phone" type="tel" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                :placeholder="t('phonePlaceholder')" />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('email') }} <span class="text-red-500">*</span>
              </label>
              <input id="email" v-model="form.email" type="email" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                :placeholder="t('emailPlaceholder')" />
            </div>

            <!-- Telegram -->
            <div>
              <label for="telegram" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Telegram
              </label>
              <input id="telegram" v-model="form.telegram" type="text" :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                placeholder="@username" />
            </div>

            <!-- Registered Date -->
            <div>
              <label for="registered" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('registered') }}
              </label>
              <input id="registered" v-model="form.registered" type="date" :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]" />
            </div>

            <!-- Status -->
            <div>
              <label for="status" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('status') }} <span class="text-red-500">*</span>
              </label>
              <select id="status" v-model="form.status" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed">
                <option value="">{{ t('selectStatus') }}</option>
                <option value="Active">{{ t('active') }}</option>
                <option value="Inactive">{{ t('inactive') }}</option>
              </select>
            </div>

            <!-- Action Buttons -->
            <div v-if="!isViewMode" class="flex gap-3 pt-4">
              <button type="submit"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
                {{ editingEmployee ? t('update') : t('add') }}
              </button>
              <button type="button" @click="closeDrawer"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
                {{ t('cancel') }}
              </button>
            </div>
            <div v-else class="pt-4">
              <button type="button" @click="closeDrawer"
                class="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
                {{ t('close') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Delete Confirmation Dialog -->
    <div v-if="showDeleteDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showDeleteDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('deleteEmployee') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureDeleteEmployee') }}</p>
          </div>
        </div>
        <div class="flex gap-3 justify-end">
          <button @click="showDeleteDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('no') }}
          </button>
          <button @click="confirmDelete"
            class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium">
            {{ t('yes') }}, {{ t('delete') }}
          </button>
        </div>
      </div>
    </div>
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

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const router = useRouter()
const i18n = useI18n()
const t = i18n?.t || ((key) => key)
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

// Load employees from JSON file or localStorage
const loadEmployees = async () => {
  const { loadDataFromJSON } = await import('../utils/dataLoader')
  employees.value = await loadDataFromJSON('../data/employees.json', 'employees_data')
}

// Save employees to localStorage
const saveEmployees = () => {
  try {
    localStorage.setItem('employees_data', JSON.stringify(employees.value))
  } catch (error) {
    console.error('Error saving employees:', error)
  }
}

const employees = ref([])

const searchQuery = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')

// Action menu state
const activeActionMenu = ref(null)

// Drawer state
const showDrawer = ref(false)
const editingEmployee = ref(null)
const isViewMode = ref(false)

// Form state
const form = reactive({
  nameKhmer: '',
  nameEnglish: '',
  gender: '',
  province: '',
  dob: '',
  role: '',
  contract: '',
  phone: '',
  email: '',
  telegram: '',
  registered: '',
  status: ''
})

// Delete dialog state
const showDeleteDialog = ref(false)
const employeeToDelete = ref(null)

// Format date helper
const formatDate = (dateString) => {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

// Computed properties
const filteredEmployees = computed(() => {
  let filtered = employees.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(emp =>
      (emp.nameKhmer && emp.nameKhmer.toLowerCase().includes(query)) ||
      (emp.nameEnglish && emp.nameEnglish.toLowerCase().includes(query)) ||
      (emp.name && emp.name.toLowerCase().includes(query)) ||
      (emp.id && emp.id.toLowerCase().includes(query)) ||
      (emp.role && emp.role.toLowerCase().includes(query)) ||
      (emp.phone && emp.phone.toLowerCase().includes(query)) ||
      (emp.email && emp.email.toLowerCase().includes(query)) ||
      (emp.province && emp.province.toLowerCase().includes(query)) ||
      (emp.telegram && emp.telegram.toLowerCase().includes(query))
    )
  }

  // Date filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(emp => {
      const registeredDate = emp.registered || emp.hired || ''
      if (!registeredDate) return false

      const empDate = new Date(registeredDate)
      const fromDate = filterDateFrom.value ? new Date(filterDateFrom.value) : null
      const toDate = filterDateTo.value ? new Date(filterDateTo.value) : null

      if (fromDate && toDate) {
        return empDate >= fromDate && empDate <= toDate
      } else if (fromDate) {
        return empDate >= fromDate
      } else if (toDate) {
        return empDate <= toDate
      }
      return true
    })
  }

  return filtered
})

const totalEmployees = computed(() => employees.value.length)

const activeEmployees = computed(() => {
  return employees.value.filter(emp => emp.status === 'Active').length
})

const totalRoles = computed(() => {
  const roles = new Set()
  employees.value.forEach(emp => {
    if (emp.role) {
      roles.add(emp.role)
    }
  })
  return roles.size
})

const totalContracts = computed(() => {
  const contracts = new Set()
  employees.value.forEach(emp => {
    if (emp.contract) {
      contracts.add(emp.contract)
    }
  })
  return contracts.size
})

// Toggle action menu
const toggleActionMenu = (employeeId) => {
  activeActionMenu.value = activeActionMenu.value === employeeId ? null : employeeId
}

// Close action menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    activeActionMenu.value = null
  }
}

// View employee
const handleView = (employee) => {
  editingEmployee.value = null
  isViewMode.value = true
  Object.assign(form, {
    nameKhmer: employee.nameKhmer || '',
    nameEnglish: employee.nameEnglish || employee.name || '',
    gender: employee.gender || '',
    province: employee.province || '',
    dob: employee.dob || '',
    role: employee.role || '',
    contract: employee.contract || '',
    phone: employee.phone || employee.contact || '',
    email: employee.email || '',
    telegram: employee.telegram || '',
    registered: employee.registered || employee.hired || '',
    status: employee.status || ''
  })
  showDrawer.value = true
  activeActionMenu.value = null
}

// Edit employee
const handleEdit = (employee) => {
  editingEmployee.value = employee
  isViewMode.value = false
  Object.assign(form, {
    nameKhmer: employee.nameKhmer || '',
    nameEnglish: employee.nameEnglish || employee.name || '',
    gender: employee.gender || '',
    province: employee.province || '',
    dob: employee.dob || '',
    role: employee.role || '',
    contract: employee.contract || '',
    phone: employee.phone || employee.contact || '',
    email: employee.email || '',
    telegram: employee.telegram || '',
    registered: employee.registered || employee.hired || '',
    status: employee.status || ''
  })
  showDrawer.value = true
  activeActionMenu.value = null
}

// Generate card
const handleGenerateCard = (employee) => {
  if (employee && employee.id) {
    router.push(`/employee-card/${employee.id}`)
  }
  activeActionMenu.value = null
}

// Generate card from toolbar
const handleGenerateCardFromToolbar = () => {
  if (filteredEmployees.value.length > 0) {
    router.push(`/employee-card/${filteredEmployees.value[0].id}`)
  }
}

// Clear date filter
const clearDateFilter = () => {
  filterDateFrom.value = ''
  filterDateTo.value = ''
}

// Delete employee
const handleDelete = (employee) => {
  employeeToDelete.value = employee
  showDeleteDialog.value = true
  activeActionMenu.value = null
}

// Confirm delete
const confirmDelete = async () => {
  try {
    await withLoading(async () => {
      if (employeeToDelete.value) {
        const index = employees.value.findIndex(emp => emp.id === employeeToDelete.value.id)
        if (index !== -1) {
          const employeeName = employeeToDelete.value.nameEnglish || employeeToDelete.value.nameKhmer || employeeToDelete.value.name || 'Employee'
          const employeeId = employeeToDelete.value.id
          employees.value.splice(index, 1)
          saveEmployees()
          addHistory('delete', {
            type: 'user',
            itemName: employeeName,
            itemId: employeeId,
            description: `Employee "${employeeName}" deleted`,
            user: 'Admin'
          })
          showDeleteDialog.value = false
          success(`${t('employeeDeleted')}: "${employeeName}" ${t('employeeDeletedSuccess')}`)
          employeeToDelete.value = null
        }
      }
    }, 'Deleting employee...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to delete employee. Please try again.' })
  }
}

// Close drawer
const closeDrawer = () => {
  showDrawer.value = false
  editingEmployee.value = null
  isViewMode.value = false
  Object.assign(form, {
    nameKhmer: '',
    nameEnglish: '',
    gender: '',
    province: '',
    dob: '',
    role: '',
    contract: '',
    phone: '',
    email: '',
    telegram: '',
    registered: '',
    status: ''
  })
}

// Handle form submit
const handleSubmit = async () => {
  try {
    await withLoading(async () => {
      if (editingEmployee.value) {
        // Update existing employee
        const index = employees.value.findIndex(emp => emp.id === editingEmployee.value.id)
        if (index !== -1) {
          employees.value[index] = {
            ...employees.value[index],
            ...form,
            name: form.nameEnglish || form.nameKhmer || form.name || '',
            contact: form.phone || form.contact || '',
            hired: form.registered || employees.value[index].hired || new Date().toISOString().split('T')[0]
          }
          saveEmployees()
          const employeeName = form.nameEnglish || form.nameKhmer || 'Employee'
          addHistory('update', {
            type: 'user',
            itemName: employeeName,
            itemId: editingEmployee.value.id,
            description: `Employee "${employeeName}" updated`,
            user: 'Admin'
          })
          closeDrawer()
          success(`${t('employeeUpdated')}: "${employeeName}" ${t('employeeUpdatedSuccess')}`)
        }
      } else {
        // Add new employee
        const newEmployee = {
          id: `EMP${String(employees.value.length + 1).padStart(3, '0')}`,
          ...form,
          name: form.nameEnglish || form.nameKhmer || '',
          contact: form.phone || '',
          hired: form.registered || new Date().toISOString().split('T')[0]
        }
        employees.value.push(newEmployee)
        saveEmployees()
        const employeeName = form.nameEnglish || form.nameKhmer || 'Employee'
        addHistory('add', {
          type: 'user',
          itemName: employeeName,
          itemId: newEmployee.id,
          description: `Employee "${employeeName}" added`,
          user: 'Admin'
        })
        closeDrawer()
        success(`${t('employeeAdded')}: "${employeeName}" ${t('employeeAddedSuccess')}`)
      }
    }, editingEmployee.value ? 'Updating employee...' : 'Adding employee...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to save employee. Please try again.' })
  }
}

onMounted(() => {
  loadEmployees()
  document.addEventListener('click', handleClickOutside)

  // Listen for storage events
  window.addEventListener('storage', (e) => {
    if (e.key === 'employees_data') {
      loadEmployees()
    }
  })

  // Listen for employees updated event from EmployeeSalaryView
  window.addEventListener('employeesUpdated', loadEmployees)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('storage', loadEmployees)
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