<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full capitalize', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Attendance Records Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('totalAttendanceRecords') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalRecords }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Approved Records Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('approvedRecords') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ approvedRecords }}</p>
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

      <!-- Pending Records Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('pendingRecords') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ pendingRecords }}</p>
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

      <!-- Total Hours Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('totalHours') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalHours.toFixed(2) }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Attendance Table -->
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
            <!-- Date Range Picker -->
            <div class="flex items-center gap-2">
              <label class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{{ t('dateBetween')
              }}:</label>
              <input v-model="filterDateFrom" type="date"
                class="px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]" />
              <span class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ t('to') }}</span>
              <input v-model="filterDateTo" type="date"
                class="px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]" />
              <button v-if="filterDateFrom || filterDateTo" @click="clearDateFilter"
                class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
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
    <div class="max-h-[600px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm">
      <table class="w-full">
        <!-- Sticky Header -->
        <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
          <tr>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('employee') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('type') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('regular') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('overtime') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('sick') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('pto') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('holiday') }}</th>
            <th
              class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('total') }}</th>
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
          <tr v-if="filteredAttendance.length === 0 && (searchQuery || filterDateFrom || filterDateTo)">
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
          <!-- Attendance Rows -->
          <tr v-for="attendance in filteredAttendance" :key="attendance.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <td class="px-3 py-3 text-xs">
              <div class="flex items-center gap-2">
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                  <img v-if="attendance.employee && attendance.employee.profileImage"
                    :src="attendance.employee.profileImage"
                    :alt="attendance.employee.nameEnglish || attendance.employee.nameKhmer || attendance.employee.name"
                    class="w-full h-full object-cover" />
                  <span v-else-if="attendance.employee"
                    class="text-blue-600 dark:text-blue-400 font-semibold text-xs">{{ (attendance.employee.nameEnglish
                      || attendance.employee.nameKhmer || attendance.employee.name || '').charAt(0).toUpperCase()
                    }}</span>
                  <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">?</span>
                </div>
                <div>
                  <div class="font-medium text-gray-900 dark:text-white text-xs">
                    <div v-if="attendance.employee && attendance.employee.nameKhmer">{{ attendance.employee.nameKhmer }}
                    </div>
                    <div v-if="attendance.employee && attendance.employee.nameEnglish"
                      class="text-gray-900 dark:text-white">{{ attendance.employee.nameEnglish }}</div>
                    <div
                      v-if="attendance.employee && !attendance.employee.nameKhmer && !attendance.employee.nameEnglish">
                      {{ attendance.employee.name }}</div>
                    <div v-if="!attendance.employee">{{ t('notAvailable') }}</div>
                  </div>
                  <div class="text-[10px] text-gray-500 dark:text-gray-400">{{ attendance.employeeId }}</div>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              getAttendanceType(attendance) }}</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              attendance.regular.toFixed(2) }} hrs</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              attendance.overtime.toFixed(2) }} hrs</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              attendance.sick.toFixed(2) }} hrs</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              attendance.pto.toFixed(2) }} hrs</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              attendance.holiday.toFixed(2) }} hrs</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs font-semibold text-gray-900 dark:text-white text-center">{{
              attendance.total.toFixed(2) }} hrs</td>
            <td class="px-4 py-3 whitespace-nowrap text-xs text-center">
              <span :class="[
                'px-2 py-1 rounded-full text-[10px] font-medium',
                attendance.status === 'Approved'
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  : attendance.status === 'Pending'
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
              ]">
                {{ attendance.status }}
              </span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-xs font-medium">
              <div class="relative">
                <button @click="toggleActionMenu(attendance.id)"
                  class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  title="Actions">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>

                <!-- Dropdown Menu -->
                <div v-if="activeActionMenu === attendance.id"
                  class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <button @click="handleView(attendance)"
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
                  <button @click="handleEdit(attendance)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    {{ t('edit') }}
                  </button>
                  <button @click="handleDelete(attendance)"
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

    <!-- Right Side Drawer for View/Edit Attendance -->
    <Transition name="drawer">
      <div v-if="showDrawer" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click.self="closeDrawer">
        <div class="absolute right-0 top-0 h-full w-full max-w-4xl bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div
            class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white capitalize">
                {{ isViewMode ? t('viewAttendance') : editingAttendance ? t('editAttendance') : t('add') }}
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

          <div v-if="selectedAttendance" class="p-6 space-y-6">
            <!-- Month Summary Section -->
            <div class="bg-gray-50 dark:bg-gray-700 rounded-sm p-4">
              <div
                class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                    <img v-if="selectedAttendance.employee && selectedAttendance.employee.profileImage"
                      :src="selectedAttendance.employee.profileImage" :alt="selectedAttendance.employee.name"
                      class="w-full h-full object-cover rounded-full" />
                    <span v-else-if="selectedAttendance.employee"
                      class="text-blue-600 dark:text-blue-400 font-semibold">{{
                        selectedAttendance.employee.name.charAt(0).toUpperCase() }}</span>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{
                      formatMonth(selectedAttendance.month) }}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ getDateRange(selectedAttendance.month) }}</p>
                  </div>
                </div>
                <button v-if="!isViewMode && selectedAttendance.status === 'Pending'" @click="acceptAll"
                  class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ t('acceptAll') }}
                </button>
              </div>

              <div
                class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-900 dark:text-white mb-2">
                {{ selectedAttendance.total.toFixed(2) }} hrs</div>

              <div class="grid grid-cols-4 gap-4 mt-4">
                <div>
                  <div class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase">{{ t('regular') }}
                  </div>
                  <div class="text-lg font-semibold text-gray-900 dark:text-white">{{
                    selectedAttendance.regular.toFixed(2) }} hrs</div>
                </div>
                <div>
                  <div class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase">{{ t('pto') }}</div>
                  <div class="text-lg font-semibold text-gray-900 dark:text-white">{{ selectedAttendance.pto.toFixed(2)
                  }} hrs</div>
                </div>
                <div>
                  <div class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase">{{ t('overtime') }}
                  </div>
                  <div class="text-lg font-semibold text-gray-900 dark:text-white">{{
                    selectedAttendance.overtime.toFixed(2) }} hrs</div>
                </div>
                <div>
                  <div class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase">{{ t('sick') }}</div>
                  <div class="text-lg font-semibold text-gray-900 dark:text-white">{{ selectedAttendance.sick.toFixed(2)
                  }} hrs</div>
                </div>
              </div>
            </div>

            <!-- Time Entries Table -->
            <div>
              <h4 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-3">{{ t('timeEntries') }}
              </h4>
              <div class="border border-gray-200 dark:border-gray-700 rounded-sm overflow-hidden">
                <table class="w-full">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('date') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('checkIn') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('checkOut') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('mealBreak') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('workHrs') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('overtime') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('note') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('status') }}</th>
                      <th v-if="!isViewMode"
                        class="px-3 py-2 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('action') }}</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr v-if="timeEntries.length === 0">
                      <td colspan="9"
                        class="px-3 py-4 text-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        {{ t('noTimeEntries') }}
                      </td>
                    </tr>
                    <tr v-for="(entry, index) in timeEntries" :key="index"
                      class="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td class="px-3 py-2 text-xs text-gray-900 dark:text-white">{{ formatDate(entry.date) }}</td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">
                        <input v-if="!isViewMode" v-model="entry.checkIn" type="time"
                          class="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                        <span v-else>{{ entry.checkIn || t('notAvailable') }}</span>
                      </td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">
                        <input v-if="!isViewMode" v-model="entry.checkOut" type="time"
                          class="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
                        <span v-else>{{ entry.checkOut || t('notAvailable') }}</span>
                      </td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">
                        <input v-if="!isViewMode" v-model="entry.mealBreak" type="number" step="0.5" min="0"
                          class="w-full px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-[37px]"
                          placeholder="0" />
                        <span v-else>{{ entry.mealBreak || 0 }} hrs</span>
                      </td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">{{ entry.workHrs.toFixed(2) }} hrs
                      </td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">{{ entry.overtime.toFixed(2) }} hrs
                      </td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">
                        <input v-if="!isViewMode" v-model="entry.note" type="text"
                          class="w-full px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-[37px]"
                          :placeholder="t('note')" />
                        <span v-else>{{ entry.note || t('notAvailable') }}</span>
                      </td>
                      <td class="px-3 py-2 text-xs text-center">
                        <span :class="[
                          'px-2 py-1 rounded-full text-[10px] font-medium',
                          entry.status === 'Approved'
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : entry.status === 'Pending'
                              ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                              : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                        ]">
                          {{ entry.status }}
                        </span>
                      </td>
                      <td v-if="!isViewMode" class="px-3 py-2 text-center">
                        <button @click="addTimeEntry" v-if="index === timeEntries.length - 1"
                          class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xs h-[37px]"
                          :title="t('addEntry')">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                        <button @click="removeTimeEntry(index)" v-if="timeEntries.length > 1"
                          class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-xs"
                          :title="t('removeEntry')">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Action Buttons -->
            <div v-if="!isViewMode" class="flex gap-3 pt-4">
              <button @click="handleSubmit"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
                {{ editingAttendance ? t('update') : t('save') }}
              </button>
              <button @click="closeDrawer"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
                {{ t('cancel') }}
              </button>
            </div>
            <div v-else class="pt-4">
              <button @click="closeDrawer"
                class="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
                {{ t('close') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Update Confirmation Dialog -->
    <div v-if="showUpdateConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showUpdateConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex-1">
          <!-- Title with icon -->
          <div class="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('update') }} {{
              t('attendance') }}</h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('areYouSure') }} {{ t('update') }} {{
            t('attendance') }}?</p>

          <!-- Buttons -->
          <div class="flex gap-3 justify-end">
            <button @click="showUpdateConfirmDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('no') }}
            </button>
            <button @click="confirmUpdate"
              class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
              {{ t('yes') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Dialog -->
    <div v-if="showDeleteDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showDeleteDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex-1">
          <!-- Title with icon -->
          <div class="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-red-600 dark:text-red-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('deleteAttendance') }}</h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('areYouSureDeleteAttendance') }}</p>

          <!-- Buttons -->
          <div class="flex gap-3 justify-end">
            <button @click="showDeleteDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('no') }}
            </button>
            <button @click="confirmDelete"
              class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium">
              {{ t('yes') }}
            </button>
          </div>
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

    <!-- Error Message Toast -->
    <Transition name="toast">
      <div v-if="showErrorMessage"
        class="fixed top-4 right-4 bg-red-500 text-white rounded-sm shadow-lg p-4 flex items-center gap-3 z-50 min-w-[300px]">
        <div class="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
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
import { ref, reactive, computed, inject, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'
import { addHistory } from '../utils/history'
import { textContains } from '../utils/search'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

// Load attendance from JSON file or localStorage
const loadAttendance = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')
    const attendanceData = await loadDataFromJSON('../data/employee_attendance.json', 'employee_attendance_data')
    const employeesData = await loadDataFromJSON('../data/employees.json', 'employees_data')

    // Store employees
    employees.value = employeesData

    // Merge attendance with employee data
    attendance.value = attendanceData.map(att => {
      const employee = employeesData.find(emp => emp.id === att.employeeId)
      return {
        ...att,
        employee: employee || null
      }
    })

    saveAttendance()
  } catch (error) {
    console.error('Error loading attendance:', error)
    const saved = localStorage.getItem('employee_attendance_data')
    if (saved) {
      attendance.value = JSON.parse(saved)
    } else {
      attendance.value = []
    }
  }
}

// Save attendance to localStorage
const saveAttendance = () => {
  try {
    const dataToSave = attendance.value.map(att => {
      const { employee, ...rest } = att
      return rest
    })
    localStorage.setItem('employee_attendance_data', JSON.stringify(dataToSave))
  } catch (error) {
    console.error('Error saving attendance:', error)
  }
}

const attendance = ref([])
const employees = ref([])

const searchQuery = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')

// Action menu state
const activeActionMenu = ref(null)

// Drawer state
const showDrawer = ref(false)
const editingAttendance = ref(null)
const isViewMode = ref(false)
const selectedAttendance = ref(null)
const timeEntries = ref([])

// Delete dialog state
const showDeleteDialog = ref(false)
const attendanceToDelete = ref(null)

// Update confirmation dialog state
const showUpdateConfirmDialog = ref(false)

// Success/Error message state
const showSuccessMessage = ref(false)
const successMessageTitle = ref('')
const successMessageText = ref('')
const showErrorMessage = ref(false)
const errorMessageTitle = ref('')
const errorMessageText = ref('')

// Computed properties
const filteredAttendance = computed(() => {
  let filtered = attendance.value

  if (searchQuery.value) {
    filtered = filtered.filter(att =>
      textContains(att.employee?.nameKhmer || '', searchQuery.value) ||
      textContains(att.employee?.nameEnglish || '', searchQuery.value) ||
      textContains(att.employee?.name || '', searchQuery.value) ||
      textContains(att.employeeId || '', searchQuery.value) ||
      textContains(att.status || '', searchQuery.value)
    )
  }

  // Apply date range filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(att => {
      if (!att.created) return false

      const createdDate = new Date(att.created)
      createdDate.setHours(0, 0, 0, 0)

      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return createdDate >= fromDate && createdDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return createdDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return createdDate <= toDate
      }
      return true
    })
  }

  return filtered
})

const totalRecords = computed(() => attendance.value.length)

const approvedRecords = computed(() => {
  return attendance.value.filter(att => att.status === 'Approved').length
})

const pendingRecords = computed(() => {
  return attendance.value.filter(att => att.status === 'Pending').length
})

const totalHours = computed(() => {
  return attendance.value.reduce((sum, att) => sum + att.total, 0)
})

// Get attendance type based on hours
const getAttendanceType = (att) => {
  if (att.regular > 0 && att.overtime === 0 && att.sick === 0 && att.pto === 0 && att.holiday === 0) {
    return 'Regular'
  } else if (att.overtime > 0) {
    return 'Overtime'
  } else if (att.sick > 0) {
    return 'Sick'
  } else if (att.pto > 0) {
    return 'PTO'
  } else if (att.holiday > 0) {
    return 'Holiday'
  }
  return 'Mixed'
}

// Format month
const formatMonth = (monthString) => {
  if (!monthString) return ''
  const [year, month] = monthString.split('-')
  const date = new Date(year, parseInt(month) - 1, 1)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

// Get date range for month
const getDateRange = (monthString) => {
  if (!monthString) return ''
  const [year, month] = monthString.split('-')
  const firstDay = new Date(year, parseInt(month) - 1, 1)
  const lastDay = new Date(year, parseInt(month), 0)
  return `${firstDay.getMonth() + 1}/${firstDay.getDate()}/${firstDay.getFullYear()} - ${lastDay.getMonth() + 1}/${lastDay.getDate()}/${lastDay.getFullYear()}`
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return t('notAvailable')
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch (error) {
    return t('notAvailable')
  }
}

// Calculate work hours
const calculateWorkHrs = (entry) => {
  if (!entry.checkIn || !entry.checkOut) return 0
  try {
    const checkIn = new Date(`2000-01-01 ${entry.checkIn}`)
    const checkOut = new Date(`2000-01-01 ${entry.checkOut}`)
    const diff = (checkOut - checkIn) / (1000 * 60 * 60) // Convert to hours
    const mealBreak = entry.mealBreak || 0
    return Math.max(0, diff - mealBreak)
  } catch (error) {
    return 0
  }
}

// Calculate overtime (hours over 8)
const calculateOvertime = (workHrs) => {
  return Math.max(0, workHrs - 8)
}

// Watch time entries for changes
watch(timeEntries, (entries) => {
  entries.forEach(entry => {
    entry.workHrs = calculateWorkHrs(entry)
    entry.overtime = calculateOvertime(entry.workHrs)
  })
}, { deep: true })

// Clear date filter
const clearDateFilter = () => {
  filterDateFrom.value = ''
  filterDateTo.value = ''
}

// Toggle action menu
const toggleActionMenu = (attendanceId) => {
  activeActionMenu.value = activeActionMenu.value === attendanceId ? null : attendanceId
}

// Close action menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    activeActionMenu.value = null
  }
}

// View attendance
const handleView = (att) => {
  editingAttendance.value = null
  isViewMode.value = true
  selectedAttendance.value = { ...att }
  loadTimeEntries(att)
  showDrawer.value = true
  activeActionMenu.value = null
}

// Edit attendance
const handleEdit = (att) => {
  editingAttendance.value = att
  isViewMode.value = false
  selectedAttendance.value = { ...att }
  loadTimeEntries(att)
  showDrawer.value = true
  activeActionMenu.value = null
}

// Load schedules for calculating expected hours
const employeeSchedules = ref([])

const loadSchedules = async () => {
  try {
    const saved = localStorage.getItem('employee_schedules_data')
    if (saved) {
      employeeSchedules.value = JSON.parse(saved)
    }
  } catch (error) {
    console.error('Error loading schedules:', error)
    employeeSchedules.value = []
  }
}

// Get expected hours from schedule for a specific day
const getExpectedHoursFromSchedule = (employeeId, dayOfWeek) => {
  const schedule = employeeSchedules.value.find(s => s.employeeId === employeeId)
  if (!schedule || !schedule.shifts) return 0

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayName = dayNames[dayOfWeek]

  const dayShifts = schedule.shifts.filter(shift => shift.day === dayName)
  let totalHours = 0

  dayShifts.forEach(shift => {
    const start = parseTime(shift.startTime)
    const end = parseTime(shift.endTime)
    totalHours += (end - start)
  })

  return totalHours
}

// Parse time string (HH:MM) to hour number
const parseTime = (timeString) => {
  if (!timeString) return 0
  const [hours, minutes] = timeString.split(':').map(Number)
  return hours + minutes / 60
}

// Load time entries for attendance
const loadTimeEntries = (att) => {
  // Load schedules first
  loadSchedules()

  // Generate time entries for the month based on schedule
  const [year, month] = att.month.split('-')
  const daysInMonth = new Date(year, parseInt(month), 0).getDate()

  timeEntries.value = []

  // Get existing time entries from attendance if available
  const existingEntries = att.timeEntries || []

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, parseInt(month) - 1, day)
    const dayOfWeek = date.getDay()
    const dateString = `${year}-${month}-${String(day).padStart(2, '0')}`

    // Check if entry already exists
    const existingEntry = existingEntries.find(e => e.date === dateString)

    if (existingEntry) {
      // Use existing entry
      timeEntries.value.push({
        ...existingEntry,
        workHrs: calculateWorkHrs(existingEntry),
        overtime: calculateOvertime(calculateWorkHrs(existingEntry))
      })
    } else {
      // Create new entry based on schedule
      const expectedHours = getExpectedHoursFromSchedule(att.employeeId, dayOfWeek)
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const dayName = dayNames[dayOfWeek]

      // Get schedule for this day
      const schedule = employeeSchedules.value.find(s => s.employeeId === att.employeeId)
      let checkIn = ''
      let checkOut = ''

      if (schedule && schedule.shifts) {
        const dayShifts = schedule.shifts.filter(shift => shift.day === dayName)
        if (dayShifts.length > 0) {
          // Use first shift's start time as default check-in
          checkIn = dayShifts[0].startTime
          // Use last shift's end time as default check-out
          checkOut = dayShifts[dayShifts.length - 1].endTime
        }
      }

      timeEntries.value.push({
        date: dateString,
        checkIn: checkIn,
        checkOut: checkOut,
        mealBreak: expectedHours > 0 ? 1 : 0,
        workHrs: 0,
        overtime: 0,
        note: '',
        status: 'Pending',
        present: expectedHours > 0 // Mark as expected to be present if has schedule
      })
    }
  }

  // If no entries, add at least one
  if (timeEntries.value.length === 0) {
    timeEntries.value.push({
      date: `${year}-${month}-01`,
      checkIn: '',
      checkOut: '',
      mealBreak: 0,
      workHrs: 0,
      overtime: 0,
      note: '',
      status: 'Pending',
      present: false
    })
  }
}

// Add time entry
const addTimeEntry = () => {
  const [year, month] = selectedAttendance.value.month.split('-')
  const lastDate = timeEntries.value[timeEntries.value.length - 1].date
  const nextDate = new Date(lastDate)
  nextDate.setDate(nextDate.getDate() + 1)

  timeEntries.value.push({
    date: nextDate.toISOString().split('T')[0],
    checkIn: '',
    checkOut: '',
    mealBreak: 0,
    workHrs: 0,
    overtime: 0,
    note: '',
    status: 'Pending'
  })
}

// Remove time entry
const removeTimeEntry = (index) => {
  timeEntries.value.splice(index, 1)
}

// Accept all entries
const acceptAll = () => {
  timeEntries.value.forEach(entry => {
    entry.status = 'Approved'
  })
  selectedAttendance.value.status = 'Approved'
}

// Delete attendance
const handleDelete = (att) => {
  attendanceToDelete.value = att
  showDeleteDialog.value = true
  activeActionMenu.value = null
}

// Confirm delete
const confirmDelete = async () => {
  try {
    await withLoading(async () => {
      if (attendanceToDelete.value) {
        const index = attendance.value.findIndex(att => att.id === attendanceToDelete.value.id)
        if (index !== -1) {
          attendance.value.splice(index, 1)
          saveAttendance()
          showDeleteDialog.value = false
          showSuccessMessage.value = true
          successMessageTitle.value = t('attendanceDeleted') || 'Attendance Deleted'
          successMessageText.value = t('attendanceDeletedSuccess') || 'Attendance has been deleted successfully!'
          setTimeout(() => {
            showSuccessMessage.value = false
          }, 3000)
          attendanceToDelete.value = null
        }
      }
    }, t('deletingAttendance'))
  } catch (err) {
    handleError(err, { userMessage: 'Failed to delete attendance. Please try again.' })
  }
}

// Close drawer
const closeDrawer = () => {
  showDrawer.value = false
  editingAttendance.value = null
  isViewMode.value = false
  selectedAttendance.value = null
  timeEntries.value = []
}

// Handle form submit
const handleSubmit = async () => {
  if (!selectedAttendance.value) return

  if (editingAttendance.value) {
    // Show update confirmation dialog
    showUpdateConfirmDialog.value = true
    return
  }

  // For new attendance, proceed directly
  await confirmAdd()
}

// Confirm update
const confirmUpdate = async () => {
  showUpdateConfirmDialog.value = false

  if (!selectedAttendance.value) return

  // Calculate totals from time entries
  let regular = 0
  let overtime = 0
  let sick = 0
  let pto = 0
  let holiday = 0

  timeEntries.value.forEach(entry => {
    if (entry.status === 'Approved') {
      // Regular hours (up to 8 hours per day)
      const dailyRegular = Math.min(entry.workHrs, 8)
      regular += dailyRegular
      // Overtime (hours over 8)
      overtime += entry.overtime
      // You can add logic to determine sick, pto, holiday based on entry note or type
      if (entry.note && entry.note.toLowerCase().includes('sick')) {
        sick += entry.workHrs
      } else if (entry.note && entry.note.toLowerCase().includes('pto')) {
        pto += entry.workHrs
      } else if (entry.note && entry.note.toLowerCase().includes('holiday')) {
        holiday += entry.workHrs
      }
    }
  })

  const total = regular + overtime + sick + pto + holiday

  if (editingAttendance.value) {
    // Update existing attendance
    const index = attendance.value.findIndex(att => att.id === editingAttendance.value.id)
    if (index !== -1) {
      attendance.value[index] = {
        ...attendance.value[index],
        regular,
        overtime,
        sick,
        pto,
        holiday,
        total,
        status: selectedAttendance.value.status,
        timeEntries: timeEntries.value.map(e => ({
          date: e.date,
          checkIn: e.checkIn,
          checkOut: e.checkOut,
          mealBreak: e.mealBreak,
          workHrs: e.workHrs,
          overtime: e.overtime,
          note: e.note,
          status: e.status,
          present: e.present
        }))
      }
      saveAttendance()
      const employee = employees.value.find(emp => emp.id === attendance.value[index].employeeId)
      const employeeName = employee ? (employee.nameEnglish || employee.nameKhmer || employee.name) : 'Employee'
      addHistory('update', {
        type: 'user',
        itemName: employeeName,
        itemId: attendance.value[index].id,
        description: `Employee attendance updated - ${employeeName}, Month: ${attendance.value[index].month}, Total Hours: ${total}`,
        user: 'Admin'
      })
      closeDrawer()

      // Dispatch event to update payroll
      window.dispatchEvent(new CustomEvent('attendanceUpdated', { detail: attendance.value[index] }))

      showSuccessMessage.value = true
      successMessageTitle.value = t('attendanceUpdated') || 'Attendance Updated'
      successMessageText.value = t('attendanceUpdatedSuccess') || 'Attendance has been updated successfully!'
      setTimeout(() => {
        showSuccessMessage.value = false
      }, 3000)
    }
  }
}

// Confirm add
const confirmAdd = async () => {
  if (!selectedAttendance.value) return

  // Calculate totals from time entries
  let regular = 0
  let overtime = 0
  let sick = 0
  let pto = 0
  let holiday = 0

  timeEntries.value.forEach(entry => {
    if (entry.status === 'Approved') {
      // Regular hours (up to 8 hours per day)
      const dailyRegular = Math.min(entry.workHrs, 8)
      regular += dailyRegular
      // Overtime (hours over 8)
      overtime += entry.overtime
      // You can add logic to determine sick, pto, holiday based on entry note or type
      if (entry.note && entry.note.toLowerCase().includes('sick')) {
        sick += entry.workHrs
      } else if (entry.note && entry.note.toLowerCase().includes('pto')) {
        pto += entry.workHrs
      } else if (entry.note && entry.note.toLowerCase().includes('holiday')) {
        holiday += entry.workHrs
      }
    }
  })

  const total = regular + overtime + sick + pto + holiday

  // Add new attendance
  await withLoading(async () => {
    const newAttendance = {
      id: `ATT${String(attendance.value.length + 1).padStart(3, '0')}`,
      employeeId: selectedAttendance.value.employeeId,
      month: selectedAttendance.value.month,
      regular,
      overtime,
      sick,
      pto,
      holiday,
      total,
      status: 'Pending',
      created: new Date().toISOString().split('T')[0],
      timeEntries: timeEntries.value.map(e => ({
        date: e.date,
        checkIn: e.checkIn,
        checkOut: e.checkOut,
        mealBreak: e.mealBreak,
        workHrs: e.workHrs,
        overtime: e.overtime,
        note: e.note,
        status: e.status,
        present: e.present
      }))
    }
    attendance.value.push(newAttendance)
    saveAttendance()
    const employee = employees.value.find(emp => emp.id === newAttendance.employeeId)
    const employeeName = employee ? (employee.nameEnglish || employee.nameKhmer || employee.name) : 'Employee'
    addHistory('add', {
      type: 'user',
      itemName: employeeName,
      itemId: newAttendance.id,
      description: `Employee attendance added - ${employeeName}, Month: ${newAttendance.month}, Total Hours: ${total}`,
      user: 'Admin'
    })
    closeDrawer()

    // Dispatch event to update payroll
    window.dispatchEvent(new CustomEvent('attendanceUpdated', { detail: newAttendance }))

    showSuccessMessage.value = true
    successMessageTitle.value = t('attendanceAdded') || 'Attendance Added'
    successMessageText.value = t('attendanceAddedSuccess') || 'Attendance has been added successfully!'
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 3000)
  }, t('addingAttendance'))
}

// Toast functions - now using composable (already defined above)

onMounted(() => {
  loadAttendance()
  loadSchedules()
  document.addEventListener('click', handleClickOutside)

  // Listen for storage events
  window.addEventListener('storage', (e) => {
    if (e.key === 'employee_attendance_data' || e.key === 'employees_data' || e.key === 'employee_schedules_data') {
      loadAttendance()
      loadSchedules()
    }
  })

  // Listen for employees updated event
  window.addEventListener('employeesUpdated', () => {
    loadAttendance()
    loadSchedules()
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('storage', loadAttendance)
  window.removeEventListener('employeesUpdated', loadAttendance)
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

/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
