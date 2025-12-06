<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Enrollments Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalEnrollments') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalEnrollments }}</p>
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

      <!-- Confirmed Enrollments Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('confirmedEnrollments') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ confirmedEnrollments }}</p>
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

      <!-- Not Confirmed Enrollments Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('notConfirmedEnrollments') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ notConfirmedEnrollments }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Expired Deadlines Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('expiredDeadlines') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ expiredDeadlines }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Enrollments Table -->
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
            <!-- Course Filter -->
            <div class="flex items-center gap-2">
              <label class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{{ t('course')
                }}:</label>
              <select v-model="filterCourse"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px] min-w-[150px]">
                <option value="">{{ t('all') || 'All Courses' }}</option>
                <option v-for="course in availableCourses" :key="course" :value="course">{{ course }}</option>
              </select>
              <button v-if="filterCourse" @click="filterCourse = ''"
                class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                :title="t('clear')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
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
    <div class="max-h-[500px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm">
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
              {{ t('deadline') }}</th>
            <th
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              Date Left</th>
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
            v-if="filteredEnrollments.length === 0 && (searchQuery || filterDateFrom || filterDateTo || filterCourse)">
            <td colspan="8" class="px-4 py-12 text-center">
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
          <!-- Enrollment Rows -->
          <tr v-for="(enrollment, index) in filteredEnrollments" :key="enrollment.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <td class="px-2 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ index + 1 }}
            </td>
            <!-- Student Column: Image, Khmer, English, ID -->
            <td class="px-3 py-3 text-xs">
              <div class="flex items-center gap-2">
                <!-- Student Image -->
                <div
                  class="w-10 h-10 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                  <img v-if="enrollment.student.profileImage" :src="enrollment.student.profileImage"
                    :alt="enrollment.student.nameEnglish || enrollment.student.name"
                    class="w-full h-full object-cover" />
                  <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                    {{ getInitials(enrollment.student.nameEnglish || enrollment.student.nameKhmer ||
                      enrollment.student.name) }}
                  </span>
                </div>
                <!-- Student Info -->
                <div class="flex-1 min-w-0">
                  <div class="font-medium text-gray-900 dark:text-white">
                    {{ enrollment.student.nameKhmer || enrollment.student.nameEnglish || enrollment.student.name }}
                  </div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">
                    {{ enrollment.student.nameEnglish || enrollment.student.name }}
                  </div>
                  <div class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                    {{ enrollment.student.id }}
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
                <span>{{ enrollment.student.contact || enrollment.student.phone || 'N/A' }}</span>
              </div>
              <div class="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="truncate">{{ enrollment.student.email || 'N/A' }}</span>
              </div>
            </td>
            <!-- Class Name Column: ClassName, Teacher -->
            <td class="px-3 py-3 text-xs">
              <div class="font-medium text-gray-900 dark:text-white">{{ enrollment.className }}</div>
              <div class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                {{ getClassTeacher(enrollment.classId) || 'N/A' }}
              </div>
            </td>
            <!-- Expired Date -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
              {{ formatDate(enrollment.deadline) }}
            </td>
            <!-- Date Left -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-center">
              <span :class="{
                'text-red-600 dark:text-red-400 font-semibold': getDaysLeft(enrollment.deadline) < 0,
                'text-yellow-600 dark:text-yellow-400 font-semibold': getDaysLeft(enrollment.deadline) >= 0 && getDaysLeft(enrollment.deadline) <= 7,
                'text-gray-700 dark:text-gray-300': getDaysLeft(enrollment.deadline) > 7
              }">
                {{ getDaysLeft(enrollment.deadline) < 0 ? `${Math.abs(getDaysLeft(enrollment.deadline))} ${t('days')}
                  overdue` : `${getDaysLeft(enrollment.deadline)} ${t('days')}` }} </span>
            </td>
            <td class="px-3 py-3 whitespace-nowrap">
              <span class="px-2 py-1 text-[10px] font-medium rounded-full flex items-center gap-1 justify-center"
                :class="enrollment.status === 'Confirmed' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'">
                <svg v-if="enrollment.status === 'Not Confirmed'" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ enrollment.status === 'Confirmed' ? t('confirmed') : t('notConfirmed') }}
              </span>
            </td>
            <td class="px-2 py-3 whitespace-nowrap text-xs font-medium">
              <div class="relative" data-action-menu-root>
                <button @click.stop="toggleActionMenu(enrollment.id)"
                  class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  title="Actions">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>

                <!-- Dropdown Menu -->
                <div v-if="activeActionMenu === enrollment.id"
                  class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <button @click="handleViewDetail(enrollment)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {{ t('viewDetail') }}
                  </button>

                  <button v-if="enrollment.status === 'Not Confirmed'" @click="handleConfirm(enrollment)"
                    class="w-full text-left px-4 py-2 text-sm text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ t('confirm') }}
                  </button>

                  <button v-if="enrollment.status === 'Confirmed'" @click="handleReject(enrollment)"
                    class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ t('reject') }}
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- View Student Detail Drawer -->
    <Transition name="drawer">
      <div v-if="showDetailDrawer" class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click.self="showDetailDrawer = false">
        <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div
            class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white">{{ t('studentDetail') }}</h2>
            </div>
            <button @click="showDetailDrawer = false"
              class="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div v-if="selectedEnrollment" class="p-6 space-y-4">
            <!-- Student Avatar and Name -->
            <div class="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div class="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                <span class="text-blue-600 dark:text-blue-400 font-semibold text-lg">{{
                  getInitials(selectedEnrollment.student.name) }}</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ selectedEnrollment.student.name }}
                </h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ selectedEnrollment.student.id }}</p>
              </div>
            </div>

            <!-- Student Information -->
            <div class="space-y-3">
              <div>
                <label class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{{ t('email') }}</label>
                <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedEnrollment.student.email || 'N/A' }}
                </p>
              </div>

              <div>
                <label class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{{ t('phone') }}</label>
                <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedEnrollment.student.contact || 'N/A' }}
                </p>
              </div>

              <div>
                <label class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{{ t('gender') }}</label>
                <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedEnrollment.student.gender || 'N/A' }}
                </p>
              </div>

              <div>
                <label class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{{ t('province')
                  }}</label>
                <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedEnrollment.student.province || 'N/A' }}
                </p>
              </div>

              <div>
                <label class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{{ t('course') }}</label>
                <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedEnrollment.student.course || 'N/A' }}
                </p>
              </div>

              <div>
                <label class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{{ t('dob') }}</label>
                <p class="text-sm text-gray-900 dark:text-white mt-1">{{ formatDate(selectedEnrollment.student.dob) }}
                </p>
              </div>
            </div>

            <!-- Enrollment Information -->
            <div class="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <div>
                <label class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{{ t('className')
                  }}</label>
                <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedEnrollment.className }}</p>
              </div>

              <div>
                <label class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{{ t('deadline')
                  }}</label>
                <p class="text-sm text-gray-900 dark:text-white mt-1">{{ formatDeadline(selectedEnrollment.deadline) }}
                </p>
              </div>

              <div>
                <label class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{{ t('totalDays')
                  }}</label>
                <p class="text-sm text-gray-900 dark:text-white mt-1">{{ selectedEnrollment.totalDays }} {{ t('days') }}
                </p>
              </div>

              <div>
                <label class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">{{ t('studentStatus')
                  }}</label>
                <p class="text-sm mt-1">
                  <span class="px-2 py-1 text-xs font-medium rounded-full"
                    :class="selectedEnrollment.status === 'Confirmed' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'">
                    {{ selectedEnrollment.status === 'Confirmed' ? t('confirmed') : t('notConfirmed') }}
                  </span>
                </p>
              </div>
            </div>

            <!-- Close Button -->
            <div class="pt-4">
              <button @click="showDetailDrawer = false"
                class="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
                {{ t('close') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Confirm Confirmation Dialog -->
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
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('confirmEnrollment') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureConfirm') }}</p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('student') }}: <span class="font-semibold">{{ enrollmentToConfirm?.student.name }}</span><br>
          {{ t('className') }}: <span class="font-semibold">{{ enrollmentToConfirm?.className }}</span>
        </p>
        <div class="flex gap-3 justify-end">
          <button @click="showConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmEnrollment"
            class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium">
            {{ t('yes') }}, {{ t('confirm') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Reject Confirmation Dialog -->
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
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('rejectEnrollment') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureReject') }}</p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('student') }}: <span class="font-semibold">{{ enrollmentToReject?.student.name }}</span><br>
          {{ t('className') }}: <span class="font-semibold">{{ enrollmentToReject?.className }}</span>
        </p>
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

// Load enrollments from JSON file or localStorage, then merge with student and class data
const loadEnrollments = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')

    // Load enrollments, students, and classes
    const enrollmentsData = await loadDataFromJSON('../data/enrollments.json', 'enrollments_data')
    const studentsData = await loadDataFromJSON('../data/students.json', 'students_data')
    const classesData = await loadDataFromJSON('../data/classes.json', 'classes_data')

    // Merge enrollments with student and class data
    enrollments.value = enrollmentsData.map(enrollment => {
      const student = studentsData.find(s => s.id === enrollment.studentId)
      const classItem = classesData.find(c => c.id === enrollment.classId)

      return {
        ...enrollment,
        student: student || null,
        className: classItem ? classItem.className : enrollment.className || 'N/A'
      }
    })

    // Save merged data to localStorage
    saveEnrollments()
  } catch (error) {
    console.error('Error loading enrollments:', error)
    // Fallback to localStorage
    const saved = localStorage.getItem('enrollments_data')
    if (saved) {
      enrollments.value = JSON.parse(saved)
    } else {
      enrollments.value = []
    }
  }
}

// Generate enrollments from students and classes
const generateEnrollments = () => {
  try {
    const students = JSON.parse(localStorage.getItem('students_data') || '[]')
    const classes = JSON.parse(localStorage.getItem('classes_data') || '[]')

    enrollments.value = []

    // Create enrollments for each student-class combination
    classes.forEach(classItem => {
      if (classItem.students && Array.isArray(classItem.students)) {
        classItem.students.forEach(studentId => {
          const student = students.find(s => s.id === studentId)
          if (student) {
            // Calculate deadline (30 days from registration)
            const registeredDate = new Date(student.registered || new Date())
            const deadline = new Date(registeredDate)
            deadline.setDate(deadline.getDate() + 30)

            // Calculate total days
            const totalDays = Math.ceil((deadline - registeredDate) / (1000 * 60 * 60 * 24))

            const enrollment = {
              id: `ENR${enrollments.value.length + 1}`,
              studentId: student.id,
              student: student,
              classId: classItem.id,
              className: classItem.className,
              deadline: deadline.toISOString(),
              totalDays: totalDays,
              status: 'Not Confirmed', // Default status
              created: student.registered || new Date().toISOString().split('T')[0]
            }
            enrollments.value.push(enrollment)
          }
        })
      }
    })

    saveEnrollments()
  } catch (error) {
    console.error('Error generating enrollments:', error)
    enrollments.value = []
  }
}

// Save enrollments to localStorage
const saveEnrollments = () => {
  try {
    localStorage.setItem('enrollments_data', JSON.stringify(enrollments.value))
  } catch (error) {
    console.error('Error saving enrollments:', error)
  }
}

const enrollments = ref([])

const searchQuery = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')
const filterCourse = ref('')

// Detail drawer state
const showDetailDrawer = ref(false)
const selectedEnrollment = ref(null)

// Action menu state
const activeActionMenu = ref(null)

// Confirmation dialogs state
const showConfirmDialog = ref(false)
const showRejectDialog = ref(false)
const enrollmentToConfirm = ref(null)
const enrollmentToReject = ref(null)

// Success/Error message state
// Toast state removed - now using global ToastContainer

// Computed properties
const availableCourses = computed(() => {
  const courses = new Set()
  enrollments.value.forEach(e => {
    if (e.student && e.student.course) {
      courses.add(e.student.course)
    }
  })
  return Array.from(courses).sort()
})

const filteredEnrollments = computed(() => {
  let filtered = enrollments.value

  // Filter out "Confirmed" status
  filtered = filtered.filter(e => e.status !== 'Confirmed')

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(e =>
      (e.student.name && e.student.name.toLowerCase().includes(query)) ||
      (e.student.nameEnglish && e.student.nameEnglish.toLowerCase().includes(query)) ||
      (e.student.nameKhmer && e.student.nameKhmer.toLowerCase().includes(query)) ||
      (e.student.id && e.student.id.toLowerCase().includes(query)) ||
      (e.student.email && e.student.email.toLowerCase().includes(query)) ||
      (e.student.contact && e.student.contact.toLowerCase().includes(query)) ||
      (e.className && e.className.toLowerCase().includes(query))
    )
  }

  // Apply course filter
  if (filterCourse.value) {
    filtered = filtered.filter(e =>
      e.student && e.student.course === filterCourse.value
    )
  }

  // Apply date range filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(enrollment => {
      if (!enrollment.deadline) return false

      const deadlineDate = new Date(enrollment.deadline)
      deadlineDate.setHours(0, 0, 0, 0)

      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return deadlineDate >= fromDate && deadlineDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return deadlineDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return deadlineDate <= toDate
      }
      return true
    })
  }

  return filtered
})

const totalEnrollments = computed(() => enrollments.value.length)

const confirmedEnrollments = computed(() => {
  return enrollments.value.filter(e => e.status === 'Confirmed').length
})

const notConfirmedEnrollments = computed(() => {
  return enrollments.value.filter(e => e.status === 'Not Confirmed').length
})

const expiredDeadlines = computed(() => {
  const now = new Date()
  return enrollments.value.filter(e => {
    if (!e.deadline) return false
    return new Date(e.deadline) < now && e.status === 'Not Confirmed'
  }).length
})

// Clear date filter
const clearDateFilter = () => {
  filterDateFrom.value = ''
  filterDateTo.value = ''
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

// Get days left until deadline
const getDaysLeft = (deadlineString) => {
  if (!deadlineString) return 0
  try {
    const deadline = new Date(deadlineString)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    deadline.setHours(0, 0, 0, 0)
    const diffTime = deadline - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  } catch (error) {
    return 0
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

// Format deadline with time
const formatDeadline = (dateString) => {
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

// Action menu functions
const toggleActionMenu = (enrollmentId) => {
  activeActionMenu.value = activeActionMenu.value === enrollmentId ? null : enrollmentId
}

// Handle view detail
const handleViewDetail = (enrollment) => {
  selectedEnrollment.value = enrollment
  showDetailDrawer.value = true
  activeActionMenu.value = null
}

// Handle confirm
const handleConfirm = (enrollment) => {
  enrollmentToConfirm.value = enrollment
  showConfirmDialog.value = true
  activeActionMenu.value = null
}

// Handle reject
const handleReject = (enrollment) => {
  enrollmentToReject.value = enrollment
  showRejectDialog.value = true
  activeActionMenu.value = null
}

// Confirm enrollment
const confirmEnrollment = () => {
  try {
    if (enrollmentToConfirm.value) {
      const index = enrollments.value.findIndex(e => e.id === enrollmentToConfirm.value.id)
      if (index !== -1) {
        enrollments.value[index].status = 'Confirmed'
        saveEnrollments()
        showConfirmDialog.value = false
        enrollmentToConfirm.value = null
        success(`${t('enrollmentConfirmed')}: "${enrollments.value[index].student.name}" ${t('enrollmentConfirmedSuccess')}`)
      }
    }
  } catch (err) {
    showConfirmDialog.value = false
    handleError(err, { userMessage: 'Failed to confirm enrollment. Please try again.' })
  }
}

// Confirm reject
const confirmReject = () => {
  try {
    if (enrollmentToReject.value) {
      const index = enrollments.value.findIndex(e => e.id === enrollmentToReject.value.id)
      if (index !== -1) {
        enrollments.value[index].status = 'Not Confirmed'
        saveEnrollments()
        showRejectDialog.value = false
        enrollmentToReject.value = null
        success(`${t('enrollmentRejected')}: "${enrollments.value[index].student.name}" ${t('enrollmentRejectedSuccess')}`)
      }
    }
  } catch (err) {
    showRejectDialog.value = false
    handleError(err, { userMessage: 'Failed to reject enrollment. Please try again.' })
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
  loadEnrollments()

  // Listen for storage events to refresh when students/classes change
  window.addEventListener('storage', (e) => {
    if (e.key === 'students_data' || e.key === 'classes_data') {
      generateEnrollments()
    }
    if (e.key === 'enrollments_data') {
      loadEnrollments()
    }
  })

  // Also listen for custom events (same tab updates)
  window.addEventListener('studentsUpdated', () => {
    generateEnrollments()
  })

  window.addEventListener('classesUpdated', () => {
    generateEnrollments()
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('storage', loadEnrollments)
  window.removeEventListener('studentsUpdated', generateEnrollments)
  window.removeEventListener('classesUpdated', generateEnrollments)
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
