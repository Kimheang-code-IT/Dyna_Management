<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Graduated Students Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalGraduatedStudents') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalGraduatedStudents }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Active Graduated Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('activeGraduated') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ activeGraduated }}</p>
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

      <!-- Total Courses Completed Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalCoursesCompleted') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalCoursesCompleted }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Provinces Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalProvinces') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalProvinces }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Student Graduated Table -->
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
            <button @click="handleGenerateCertificateFromToolbar" :disabled="filteredGraduatedStudents.length === 0"
              class="h-[37px] px-4 rounded-sm text-sm font-semibold flex items-center gap-2 transition-colors"
              :class="filteredGraduatedStudents.length === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'"
              :title="t('generateCertificate') || 'Generate Certificate'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {{ t('generateCertificate') || 'Generate Certificate' }}
            </button>
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
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('province') }}</th>
            <th
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('totalCourse') }}</th>
            <th
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('status') }}</th>
            <th
              class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('action') }}</th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <!-- No Results Found -->
          <tr v-if="filteredGraduatedStudents.length === 0 && (searchQuery || filterDateFrom || filterDateTo)">
            <td colspan="7" class="px-4 py-12 text-center">
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
          <!-- Graduated Student Rows -->
          <tr v-for="(student, index) in filteredGraduatedStudents" :key="student.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <td class="px-2 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ index + 1 }}
            </td>
            <!-- Student Column: Image, Khmer, English, ID -->
            <td class="px-3 py-3 text-xs">
              <div class="flex items-center gap-2">
                <!-- Student Image -->
                <div
                  class="w-10 h-10 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                  <img v-if="student.student.profileImage" :src="student.student.profileImage"
                    :alt="student.student.nameEnglish || student.student.name" class="w-full h-full object-cover" />
                  <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                    {{ getInitials(student.student.nameEnglish || student.student.nameKhmer || student.student.name) }}
                  </span>
                </div>
                <!-- Student Info -->
                <div class="flex-1 min-w-0">
                  <div class="font-medium text-gray-900 dark:text-white">
                    {{ student.student.nameKhmer || student.student.nameEnglish || student.student.name }}
                  </div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">
                    {{ student.student.nameEnglish || student.student.name }}
                  </div>
                  <div class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                    {{ student.student.id }}
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
                <span>{{ student.student.contact || student.student.phone || 'N/A' }}</span>
              </div>
              <div class="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="truncate">{{ student.student.email || 'N/A' }}</span>
              </div>
            </td>
            <!-- Province Column -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{
              student.student.province || 'N/A' }}</td>
            <!-- Total Course Column -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
              <span
                class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-[10px] font-medium">
                {{ student.courses.length }} {{ t('courses') }}
              </span>
            </td>
            <!-- Status Column -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-center">
              <span :class="[
                'px-2 py-1 rounded-full text-[10px] font-medium',
                student.status === 'active'
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              ]">
                {{ student.status === 'active' ? t('active') : t('inactive') }}
              </span>
            </td>
            <!-- Action Column -->
            <td class="px-2 py-3 whitespace-nowrap text-xs font-medium">
              <div class="relative" data-action-menu-root>
                <button @click.stop="toggleActionMenu(student.id)"
                  class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  title="Actions">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>

                <!-- Dropdown Menu -->
                <div v-if="activeActionMenu === student.id"
                  class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <button @click="handleGenerateCertificate(student)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {{ t('generateCertificate') || 'Generate Certificate' }}
                  </button>

                  <button @click="handleView(student)"
                    class="w-full text-left px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {{ t('viewCourse') || 'View Course' }}
                  </button>

                  <button @click="handleDelete(student)"
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

    <!-- View Student Courses Drawer -->
    <Transition name="drawer">
      <div v-if="showViewDrawer" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click.self="showViewDrawer = false">
        <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div
            class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white">{{ t('studentCourses') }}</h2>
            </div>
            <button @click="showViewDrawer = false"
              class="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div v-if="selectedStudent" class="p-6 space-y-4">
            <!-- Student Information -->
            <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-2">{{
                t('studentInformation') }}</h3>
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                  <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">{{
                    getInitials(selectedStudent.student.name) }}</span>
                </div>
                <div>
                  <h4 class="text-base font-semibold text-gray-900 dark:text-white">{{ selectedStudent.student.name }}
                  </h4>
                  <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ selectedStudent.student.id }}
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2 mt-3 text-xs">
                <div>
                  <span class="text-gray-500 dark:text-gray-400">{{ t('contact') }}:</span>
                  <span class="text-gray-900 dark:text-white ml-1">{{ selectedStudent.student.contact || 'N/A' }}</span>
                </div>
                <div>
                  <span class="text-gray-500 dark:text-gray-400">{{ t('province') }}:</span>
                  <span class="text-gray-900 dark:text-white ml-1">{{ selectedStudent.student.province || 'N/A'
                    }}</span>
                </div>
              </div>
            </div>

            <!-- Search Bar -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('search') }}</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input v-model="courseSearchQuery" type="text" :placeholder="t('searchCourse')"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]" />
              </div>
            </div>

            <!-- Courses Table -->
            <div>
              <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-3">{{ t('courses') }}</h3>
              <div class="border border-gray-200 dark:border-gray-700 rounded-sm overflow-hidden">
                <table class="w-full">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('no') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('courseName') }}</th>
                      <th
                        class="px-3 py-2 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr v-if="filteredCourses.length === 0">
                      <td colspan="3"
                        class="px-3 py-4 text-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        {{ t('noCourses') }}
                      </td>
                    </tr>
                    <tr v-for="(course, index) in filteredCourses" :key="index"
                      class="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">{{ index + 1 }}</td>
                      <td class="px-3 py-2 text-xs text-gray-900 dark:text-white">{{ course }}</td>
                      <td class="px-3 py-2 text-center">
                        <button @click="deleteCourse(selectedStudent, index)"
                          class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                          :title="t('delete')">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Add Course Button -->
              <div class="mt-3">
                <button @click="openAddCourseDialog"
                  class="w-full px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium text-sm flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                  {{ t('add') }}
                </button>
              </div>
            </div>

            <!-- Close Button -->
            <div class="pt-4">
              <button @click="showViewDrawer = false"
                class="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
                {{ t('close') }}
              </button>
            </div>
          </div>
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('delete') }} {{ t('student') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureDeleteGraduated') || 'Are you sure you want to delete this graduated student record ? ' }}</p>
          </div>
        </div>
        <div v-if="studentToDelete" class="mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p><span class="font-medium">{{ t('student') }}:</span> {{ studentToDelete.student.name }}</p>
          <p><span class="font-medium">{{ t('totalCourse') }}:</span> {{ studentToDelete.courses.length }} {{
            t('courses') }}</p>
        </div>
        <div class="flex gap-3 justify-end">
          <button @click="showDeleteDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmDelete"
            class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium">
            {{ t('yes') }}, {{ t('delete') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Add Course Dialog -->
    <div v-if="showAddCourseDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]"
      @click.self="showAddCourseDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between mb-4">
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('add') }}</h3>
          </div>
          <button @click="showAddCourseDialog = false"
            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('courseName') }} <span class="text-red-500">*</span>
            </label>
            <input v-model="newCourseName" type="text" required :placeholder="t('courseNamePlaceholder')"
              class="w-full px-3 py-2  border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-[37px]" />
          </div>
        </div>

        <div class="flex gap-3 mt-6">
          <button @click="showAddCourseDialog = false"
            class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmAddCourse"
            class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
            {{ t('add') }}
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
const { t } = useI18n()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

// Load graduated students from JSON file or localStorage, then merge with student data
const loadGraduatedStudents = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')

    // Load graduated students and students
    const graduatedStudentsData = await loadDataFromJSON('../data/graduated_students.json', 'graduated_students_data')
    const studentsData = await loadDataFromJSON('../data/students.json', 'students_data')

    // Merge graduated students with student data
    graduatedStudents.value = graduatedStudentsData.map(gs => {
      const student = studentsData.find(s => s.id === gs.studentId)

      return {
        ...gs,
        student: student || null
      }
    })

    // Save merged data to localStorage
    saveGraduatedStudents()
  } catch (error) {
    console.error('Error loading graduated students:', error)
    // Fallback to localStorage
    const saved = localStorage.getItem('graduated_students_data')
    if (saved) {
      graduatedStudents.value = JSON.parse(saved)
    } else {
      graduatedStudents.value = []
    }
  }
}

// Save graduated students to localStorage
const saveGraduatedStudents = () => {
  try {
    localStorage.setItem('graduated_students_data', JSON.stringify(graduatedStudents.value))
  } catch (error) {
    console.error('Error saving graduated students:', error)
  }
}

// Load students from JSON file or localStorage
const loadStudents = async () => {
  const { loadDataFromJSON } = await import('../utils/dataLoader')
  allStudents.value = await loadDataFromJSON('../data/students.json', 'students_data')
}


const graduatedStudents = ref([])
const allStudents = ref([])

const searchQuery = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')

// View drawer state
const showViewDrawer = ref(false)
const selectedStudent = ref(null)
const courseSearchQuery = ref('')

// Add course dialog state
const showAddCourseDialog = ref(false)
const newCourseName = ref('')

// Delete dialog state
const showDeleteDialog = ref(false)
const studentToDelete = ref(null)

// Action menu state
const activeActionMenu = ref(null)

// Success/Error message state
// Toast state removed - now using global ToastContainer

// Computed properties
const filteredGraduatedStudents = computed(() => {
  let filtered = graduatedStudents.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(gs =>
      gs.student.name.toLowerCase().includes(query) ||
      gs.student.id.toLowerCase().includes(query) ||
      (gs.student.contact && gs.student.contact.toLowerCase().includes(query)) ||
      (gs.student.course && gs.student.course.toLowerCase().includes(query)) ||
      (gs.student.province && gs.student.province.toLowerCase().includes(query))
    )
  }

  // Apply date range filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(gs => {
      if (!gs.graduatedDate) return false

      const graduatedDate = new Date(gs.graduatedDate)
      graduatedDate.setHours(0, 0, 0, 0)

      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return graduatedDate >= fromDate && graduatedDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return graduatedDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return graduatedDate <= toDate
      }
      return true
    })
  }

  return filtered
})

// Filter courses by search query
const filteredCourses = computed(() => {
  if (!selectedStudent.value) return []

  const courses = selectedStudent.value.courses || []

  if (!courseSearchQuery.value) return courses

  const query = courseSearchQuery.value.toLowerCase()
  return courses.filter(course => course.toLowerCase().includes(query))
})

const totalGraduatedStudents = computed(() => graduatedStudents.value.length)

const activeGraduated = computed(() => {
  return graduatedStudents.value.filter(gs => gs.status === 'active').length
})

const totalCoursesCompleted = computed(() => {
  const allCourses = new Set()
  graduatedStudents.value.forEach(gs => {
    gs.courses.forEach(course => allCourses.add(course))
  })
  return allCourses.size
})

const totalProvinces = computed(() => {
  const provinces = new Set()
  graduatedStudents.value.forEach(gs => {
    if (gs.student.province) {
      provinces.add(gs.student.province)
    }
  })
  return provinces.size
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

// Action menu functions
const toggleActionMenu = (studentId) => {
  activeActionMenu.value = activeActionMenu.value === studentId ? null : studentId
}

// View functions
const handleView = (student) => {
  selectedStudent.value = { ...student }
  courseSearchQuery.value = ''
  showViewDrawer.value = true
  activeActionMenu.value = null
}

// Generate certificate
const handleGenerateCertificate = (student) => {
  activeActionMenu.value = null
  // Navigate to certificate page with student ID
  router.push(`/certificate/${student.id}`)
}

// Generate certificate from toolbar
const handleGenerateCertificateFromToolbar = () => {
  if (filteredGraduatedStudents.value.length > 0) {
    router.push(`/certificate/${filteredGraduatedStudents.value[0].id}`)
  }
}

// Handle delete
const handleDelete = (student) => {
  studentToDelete.value = student
  showDeleteDialog.value = true
  activeActionMenu.value = null
}

// Confirm delete
const confirmDelete = async () => {
  if (!studentToDelete.value) return

  try {
    await withLoading(async () => {
      const index = graduatedStudents.value.findIndex(gs => gs.id === studentToDelete.value.id)
      if (index !== -1) {
        const studentName = graduatedStudents.value[index].student.name
        const studentId = graduatedStudents.value[index].id
        graduatedStudents.value.splice(index, 1)
        saveGraduatedStudents()
        addHistory('delete', {
          type: 'student',
          itemName: studentName,
          itemId: studentId,
          description: `Graduated student deleted - ${studentName}`,
          user: 'Admin'
        })
        showDeleteDialog.value = false
        studentToDelete.value = null
        success(`${t('graduatedStudentDeleted') || 'Graduated Student Deleted'}: "${studentName}" ${t('graduatedStudentDeletedSuccess') || 'has been successfully deleted!'}`)
      }
    }, 'Deleting graduated student...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to delete graduated student. Please try again.' })
  }
}

// Close action menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('[data-action-menu-root]')) {
    activeActionMenu.value = null
  }
}

// Add course functions
const openAddCourseDialog = () => {
  newCourseName.value = ''
  showAddCourseDialog.value = true
}

const confirmAddCourse = async () => {
  if (!newCourseName.value || !newCourseName.value.trim()) {
    error(`${t('validationError')}: ${t('pleaseEnterCourseName')}`)
    return
  }

  try {
    await withLoading(async () => {
      if (selectedStudent.value) {
        const index = graduatedStudents.value.findIndex(gs => gs.id === selectedStudent.value.id)
        if (index !== -1) {
          // Check if course already exists
          if (graduatedStudents.value[index].courses.includes(newCourseName.value.trim())) {
            error(`${t('error')}: ${t('courseAlreadyExists')}`)
            return
          }

          graduatedStudents.value[index].courses.push(newCourseName.value.trim())
          saveGraduatedStudents()
          const studentName = selectedStudent.value.student.name
          addHistory('update', {
            type: 'student',
            itemName: studentName,
            itemId: selectedStudent.value.id,
            description: `Course added to graduated student - ${studentName}, Course: "${newCourseName.value.trim()}"`,
            user: 'Admin'
          })
          // Update the selected student reference
          selectedStudent.value = { ...graduatedStudents.value[index] }
          showAddCourseDialog.value = false
          success(`${t('courseAdded')}: "${newCourseName.value.trim()}" ${t('courseAddedSuccess')}`)
        }
      }
    }, 'Adding course...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to add course. Please try again.' })
  }
}

// Delete course
const deleteCourse = async (student, courseIndex) => {
  try {
    await withLoading(async () => {
      const index = graduatedStudents.value.findIndex(gs => gs.id === student.id)
      if (index !== -1) {
        const courseName = graduatedStudents.value[index].courses[courseIndex]
        graduatedStudents.value[index].courses.splice(courseIndex, 1)
        saveGraduatedStudents()
        // Update the selected student reference
        selectedStudent.value = { ...graduatedStudents.value[index] }
        success(`${t('courseDeleted')}: "${courseName}" ${t('courseDeletedSuccess')}`)
      }
    }, 'Deleting course...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to delete course. Please try again.' })
  }
}

// Toast functions - now using composable (already defined above)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  loadStudents()
  loadGraduatedStudents()

  // Listen for storage events
  window.addEventListener('storage', (e) => {
    if (e.key === 'graduated_students_data') {
      loadGraduatedStudents()
    }
    if (e.key === 'students_data') {
      loadStudents()
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('storage', loadGraduatedStudents)
  window.removeEventListener('storage', loadStudents)
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
