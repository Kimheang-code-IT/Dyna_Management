<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Students Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalStudents') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalStudents }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Male Students Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('male') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ maleCount }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Female Students Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('female') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ femaleCount }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-pink-600 dark:text-pink-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Top Course Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 break-words line-clamp-2">
              {{ t('topCourse') }}</h3>
            <p
              class="text-base sm:text-base md:text-xs lg:text-md xl:text-xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ topCourse.name }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">{{ topCourse.count }} {{
              t('students') }}</p>
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
    </div>

    <!-- Students Table -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
      <div class="p-0 mb-2 sm:mb-3">
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center justify-between">
          <div class="flex w-full sm:w-auto items-stretch sm:items-center gap-2 sm:gap-3">
            <div class="relative w-full sm:w-[230px]">
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

          </div>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 flex-wrap">
            <button @click="handleGenerateCardFromToolbar" :disabled="filteredStudents.length === 0"
              class="h-[37px] px-4 rounded-sm text-sm font-semibold flex items-center gap-2 transition-colors"
              :class="filteredStudents.length === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'"
              :title="t('generateCard') || 'Generate Card'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              {{ t('generateCard') || 'Generate Card' }}
            </button>
            <div class="relative w-full sm:w-auto">
              <select v-model="selectedCourse"
                class="appearance-none bg-white dark:bg-gray-800/100 text-xs border border-gray-300 dark:border-gray-600 rounded-sm px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white h-[37px] w-full sm:w-auto">
                <option value="">{{ t('allCourses') }}</option>
                <option v-for="course in courses" :key="course" :value="course">{{ course }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div class="relative w-full sm:w-auto">
              <select v-model="selectedProvince"
                class="appearance-none bg-white dark:bg-gray-800/100 text-xs border border-gray-300 dark:border-gray-600 rounded-sm px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white h-[37px] w-full sm:w-auto">
                <option value="">{{ t('allProvinces') }}</option>
                <option v-for="province in provinces" :key="province" :value="province">{{ province }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-400" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

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
                class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('student') }}</th>
              <th
                class="py-3 text-left px-2 text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('gender') }}</th>
              <th
                class="py-3 px-6 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('course') }}</th>
              <th
                class="py-3 text-left px-5 text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('session') }}</th>
              <th
                class="py-3 text-left px-5 text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('province') }}</th>
              <th
                class="py-3 text-left px-4 text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('contact') }}</th>
              <th
                class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('registered') }}</th>
              <th
                class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <!-- No Results Found -->
            <tr
              v-if="filteredStudents.length === 0 && (searchQuery || selectedCourse || selectedProvince || filterDateFrom || filterDateTo)">
              <td colspan="9" class="px-4 py-12 text-center">
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
            <!-- Student Rows -->
            <tr v-for="(student, index) in filteredStudents" :key="student.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ index + 1 }}</td>
              <td class="px-3 py-3 text-xs">
                <div class="flex items-center gap-2">
                  <div
                    :class="['w-10 h-10 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0 relative', (!student.profileImage || hasImageFailed(student.id)) ? 'border border-gray-300 dark:border-gray-600 bg-blue-100 dark:bg-blue-900' : '']">
                    <img v-if="student.profileImage && !hasImageFailed(student.id)" :src="student.profileImage"
                      :alt="student.name || student.nameEnglish" class="w-full h-full object-cover"
                      @error="handleStudentImageError($event, student.id)" />
                    <svg v-if="!student.profileImage || hasImageFailed(student.id)" xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white text-xs">{{ student.name ||
                      student.nameEnglish }}</div>
                    <div class="text-[10px] text-gray-500 dark:text-gray-400">{{ student.id }}</div>
                    <div v-if="student.nameKhmer" class="text-[10px] text-gray-500 dark:text-gray-400">{{
                      student.nameKhmer }}</div>
                  </div>
                </div>
              </td>
              <td class="px-2 py-3 whitespace-nowrap">
                <span class="px-2 py-1 text-[10px] font-medium rounded-full"
                  :class="student.gender === 'Male' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200'">
                  {{ student.gender }}
                </span>
              </td>
              <td class="px-2 py-3 whitespace-nowrap">
                <span
                  class="px-2 py-1 text-[10px] font-medium rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                  {{ student.course }}
                </span>
              </td>
              <td class="px-4 py-3 text-xs">
                <div class="flex items-center gap-2">
                  <span class="px-2 py-1 text-[10px] font-medium rounded-full inline-block w-fit"
                    :class="getSessionColorClass(student.session)">
                    {{ student.session || t('session') }}
                  </span>
                  <span class="text-[10px] text-gray-600 dark:text-gray-400">
                    {{ student.time || 'N/A' }}
                  </span>
                </div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ student.province }}
              </td>
              <td class="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">
                <div>{{ student.contact || student.phone || 'N/A' }}</div>
                <div v-if="student.email" class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                  <span class="font-medium">{{ t('email') }}:</span> {{ student.email }}
                </div>
                <div v-if="student.telegram || student.telegramContact"
                  class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                  <span class="font-medium">Telegram:</span> {{ student.telegram || student.telegramContact }}
                </div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">
                {{ formatDate(student.registered) }}
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-xs font-medium">
                <div class="relative">
                  <button @click="toggleActionMenu(student.id)"
                    class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    title="Actions">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>

                  <!-- Dropdown Menu -->
                  <div v-if="activeActionMenu === student.id"
                    class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                    <button @click="handleEdit(student)"
                      class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </button>
                    <button @click="handleGenerateCard(student)"
                      class="w-full text-left px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      {{ t('generateCard') || 'Generate Card' }}
                    </button>
                    <button @click="handleDelete(student)"
                      class="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900 transition-colors flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Right Side Drawer for Add/Edit Student -->
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
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white">
                {{ t('editStudent') }}
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
            <!-- Full Name English -->
            <div>
              <label for="nameEnglish" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('fullNameEnglish') }} <span class="text-red-500">*</span>
              </label>
              <input id="nameEnglish" v-model="form.nameEnglish" type="text" required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]"
                :placeholder="t('fullNameEnglishPlaceholder')" />
              <p v-if="errors.nameEnglish" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.nameEnglish }}
              </p>
            </div>

            <!-- Full Name Khmer -->
            <div>
              <label for="nameKhmer" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('fullNameKhmer') }}
              </label>
              <input id="nameKhmer" v-model="form.nameKhmer" type="text"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]"
                :placeholder="t('fullNameKhmerPlaceholder')" />
            </div>

            <!-- Gender -->
            <div>
              <label for="gender" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('gender') }} <span class="text-red-500">*</span>
              </label>
              <select id="gender" v-model="form.gender" required
                class="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none h-[37px]">
                <option value="">{{ t('selectGender') }}</option>
                <option value="Male">{{ t('male') }}</option>
                <option value="Female">{{ t('female') }}</option>
              </select>
              <p v-if="errors.gender" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.gender }}</p>
            </div>

            <!-- Date of Birth -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('dateOfBirth') }} <span class="text-red-500">*</span>
              </label>
              <div class="grid grid-cols-3 gap-2">
                <select v-model="form.dobDay" required
                  class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none h-[37px]">
                  <option value="">{{ t('day') }}</option>
                  <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                </select>
                <select v-model="form.dobMonth" required
                  class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none h-[37px]">
                  <option value="">{{ t('month') }}</option>
                  <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
                </select>
                <select v-model="form.dobYear" required
                  class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none h-[37px]">
                  <option value="">{{ t('year') }}</option>
                  <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                </select>
              </div>
              <p v-if="errors.dob" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.dob }}</p>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('email') }} <span class="text-red-500">*</span>
              </label>
              <input id="email" v-model="form.email" type="email" required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]"
                :placeholder="t('emailPlaceholder')" />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.email }}</p>
            </div>

            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('phone') }} <span class="text-red-500">*</span>
              </label>
              <input id="phone" v-model="form.phone" type="tel" required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]"
                :placeholder="t('phonePlaceholder')" />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.phone }}</p>
            </div>

            <!-- Province -->
            <div>
              <label for="province" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('province') }} <span class="text-red-500">*</span>
              </label>
              <select id="province" v-model="form.province" required
                class="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none h-[37px]">
                <option value="">{{ t('selectProvince') }}</option>
                <option v-for="prov in provinces" :key="prov" :value="prov">{{ prov }}</option>
              </select>
              <p v-if="errors.province" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.province }}</p>
            </div>

            <!-- Course -->
            <div>
              <label for="course" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('course') }} <span class="text-red-500">*</span>
              </label>
              <select id="course" v-model="form.course" required
                class="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none h-[37px]">
                <option value="">{{ t('selectCourse') }}</option>
                <option v-for="course in courses" :key="course" :value="course">{{ course }}</option>
              </select>
              <p v-if="errors.course" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.course }}</p>
            </div>

            <!-- Session -->
            <div>
              <label for="session" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('session') }} <span class="text-red-500">*</span>
              </label>
              <select id="session" v-model="form.session" required
                class="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none h-[37px]">
                <option value="">{{ t('selectSession') }}</option>
                <option v-for="session in sessions" :key="session" :value="session">{{ session }}</option>
              </select>
              <p v-if="errors.session" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.session }}</p>
            </div>

            <!-- Profile Image -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('profileImage') }}
              </label>
              <div class="relative">
                <input ref="fileInput" type="file" accept="image/*" @change="handleImageUpload" class="hidden" />
                <div @click="() => fileInput?.click()"
                  class="w-32 h-32 mx-auto rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 flex items-center justify-center shadow-md group cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 transition-all">
                  <img v-if="form.profileImage" :src="form.profileImage" :alt="form.nameEnglish"
                    class="w-full h-full object-cover" />
                  <svg v-else xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>

                  <!-- Update Button Overlay -->
                  <div v-if="form.profileImage"
                    class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div
                      class="opacity-0 group-hover:opacity-100 px-3 py-2 bg-blue-600 text-white rounded-md transition-all duration-300 font-medium text-sm shadow-lg flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      {{ t('update') }}
                    </div>
                  </div>

                  <!-- Remove Button -->
                  <button v-if="form.profileImage" @click.stop="removeProfileImage" type="button"
                    class="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg z-10"
                    :title="t('removeImage')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">{{ t('pngJpgGif') }} ({{
                  t('maxSize') }}: 20MB)</p>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex gap-3 pt-4">
              <button type="submit"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
                {{ t('update') }}
              </button>
              <button type="button" @click="closeDrawer"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
                {{ t('cancel') }}
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
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('deleteStudent') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSure') }} {{ t('delete') }} {{ t('student')
            }}?</p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('student') }}: <span class="font-semibold">{{ studentToDelete?.name || studentToDelete?.nameEnglish
          }}</span>
        </p>
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
import { addHistory } from '../utils/history'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'
import studentsData from '../data/students.json'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const router = useRouter()
const i18n = useI18n()
const t = i18n?.t || ((key) => key)
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

// Load students from localStorage or fallback to JSON, ensuring time is present from JSON when missing
const loadStudents = () => {
  try {
    const stored = localStorage.getItem('students_data')
    if (stored) {
      const parsed = JSON.parse(stored)
      const jsonMap = Object.fromEntries(studentsData.map((s) => [s.id, s]))
      return parsed.map((s) => {
        if (!s.time && jsonMap[s.id]?.time) {
          return { ...s, time: jsonMap[s.id].time }
        }
        return s
      })
    }
  } catch (e) {
    console.error('Error loading students from localStorage:', e)
  }
  return studentsData
}

const students = ref(loadStudents())

// Save students to localStorage
const saveStudents = () => {
  try {
    localStorage.setItem('students_data', JSON.stringify(students.value))
  } catch (e) {
    console.error('Error saving students to localStorage:', e)
  }
}

const searchQuery = ref('')
const selectedCourse = ref('')
const selectedProvince = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')

// Action menu state
const activeActionMenu = ref(null)

// Drawer state
const showDrawer = ref(false)
const editingStudent = ref(null)

// File input ref
const fileInput = ref(null)

// Track failed student images
const failedImages = ref(new Set())

// Form state
const form = reactive({
  nameEnglish: '',
  nameKhmer: '',
  gender: '',
  dobDay: '',
  dobMonth: '',
  dobYear: '',
  email: '',
  phone: '',
  province: '',
  course: '',
  session: '',
  profileImage: ''
})

// Form validation errors
const errors = reactive({
  nameEnglish: '',
  gender: '',
  dob: '',
  email: '',
  phone: '',
  province: '',
  course: '',
  session: ''
})

// Confirmation dialogs state
const showDeleteDialog = ref(false)
const studentToDelete = ref(null)

// Options data
const provinces = ['Phnom Penh', 'Siem Reap', 'Battambang', 'Kampong Cham', 'Kandal', 'Takeo', 'Prey Veng', 'Svay Rieng', 'Kampot', 'Kep', 'Koh Kong', 'Pursat', 'Kampong Speu', 'Kampong Thom', 'Kratie', 'Mondulkiri', 'Oddar Meanchey', 'Pailin', 'Preah Vihear', 'Ratanakiri', 'Stung Treng', 'Banteay Meanchey', 'Kampong Chhnang', 'Preah Sihanouk', 'Tbong Khmum']

const courses = ['Web Development', 'Graphic Design', 'Mobile App', 'Digital Marketing', 'Data Science', 'UI/UX Design', 'Python Programming', 'Java Programming']

const sessions = ['Morning', 'Afternoon', 'Evening', 'Weekend']

// Generate days (1-31)
const days = computed(() => {
  return Array.from({ length: 31 }, (_, i) => i + 1)
})

// Generate months
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// Generate years (1950 to current year)
const years = computed(() => {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: currentYear - 1949 }, (_, i) => currentYear - i)
})

// Computed properties
const filteredStudents = computed(() => {
  let filtered = students.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(s =>
      (s.name || s.nameEnglish || '').toLowerCase().includes(query) ||
      (s.nameKhmer || '').toLowerCase().includes(query) ||
      (s.id || '').toLowerCase().includes(query) ||
      (s.email || '').toLowerCase().includes(query) ||
      (s.contact || s.phone || '').toLowerCase().includes(query)
    )
  }

  if (selectedCourse.value) {
    filtered = filtered.filter(s => s.course === selectedCourse.value)
  }

  if (selectedProvince.value) {
    filtered = filtered.filter(s => s.province === selectedProvince.value)
  }

  // Apply date range filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(student => {
      if (!student.registered) return false

      const studentDate = new Date(student.registered)
      studentDate.setHours(0, 0, 0, 0)

      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return studentDate >= fromDate && studentDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return studentDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return studentDate <= toDate
      }
      return true
    })
  }

  return filtered
})

const totalStudents = computed(() => students.value.length)

const maleCount = computed(() => {
  return students.value.filter(s => s.gender === 'Male').length
})

const femaleCount = computed(() => {
  return students.value.filter(s => s.gender === 'Female').length
})

const topCourse = computed(() => {
  const courseCount = {}
  students.value.forEach(s => {
    courseCount[s.course] = (courseCount[s.course] || 0) + 1
  })
  const sorted = Object.entries(courseCount).sort((a, b) => b[1] - a[1])
  return { name: sorted[0]?.[0] || 'N/A', count: sorted[0]?.[1] || 0 }
})

// Clear date filter
const clearDateFilter = () => {
  filterDateFrom.value = ''
  filterDateTo.value = ''
}

// Format date function
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

// Get session color class
const getSessionColorClass = (session) => {
  const colors = {
    'Morning': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200',
    'Afternoon': 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200',
    'Evening': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200',
    'Weekend': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
  }
  return colors[session] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
}

// Helper function to check if image has failed
const hasImageFailed = (studentId) => {
  return failedImages.value && failedImages.value.has(studentId)
}

// Handle student image error
const handleStudentImageError = (event, studentId) => {
  event.target.style.display = 'none'
  if (failedImages.value) {
    failedImages.value.add(studentId)
  }
}

// Drawer functions
const openAddDrawer = () => {
  editingStudent.value = null
  resetForm()
  showDrawer.value = true
}

const closeDrawer = () => {
  showDrawer.value = false
  editingStudent.value = null
  resetForm()
}

const resetForm = () => {
  form.nameEnglish = ''
  form.nameKhmer = ''
  form.gender = ''
  form.dobDay = ''
  form.dobMonth = ''
  form.dobYear = ''
  form.email = ''
  form.phone = ''
  form.province = ''
  form.course = ''
  form.session = ''
  form.profileImage = ''
  Object.keys(errors).forEach(key => errors[key] = '')
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Action menu functions
const toggleActionMenu = (studentId) => {
  activeActionMenu.value = activeActionMenu.value === studentId ? null : studentId
}

const handleEdit = (student) => {
  editingStudent.value = student
  form.nameEnglish = student.nameEnglish || student.name || ''
  form.nameKhmer = student.nameKhmer || ''
  form.gender = student.gender || ''

  // Parse date of birth
  if (student.dob) {
    const dob = new Date(student.dob)
    form.dobDay = dob.getDate().toString()
    form.dobMonth = (dob.getMonth() + 1).toString()
    form.dobYear = dob.getFullYear().toString()
  }

  form.email = student.email || ''
  form.phone = student.phone || student.contact || ''
  form.province = student.province || ''
  form.course = student.course || ''
  form.session = student.session || ''
  form.profileImage = student.profileImage || ''
  activeActionMenu.value = null
  showDrawer.value = true
}

const handleDelete = (student) => {
  studentToDelete.value = student
  showDeleteDialog.value = true
  activeActionMenu.value = null
}

const handleGenerateCard = (student) => {
  activeActionMenu.value = null
  router.push(`/student-card/${student.id}`)
}

const handleGenerateCardFromToolbar = () => {
  const firstStudent = filteredStudents.value[0]
  if (!firstStudent) return
  handleGenerateCard(firstStudent)
}

// Format date of birth
const formatDateOfBirth = () => {
  if (!form.dobDay || !form.dobMonth || !form.dobYear) return ''
  const year = form.dobYear
  const month = String(form.dobMonth).padStart(2, '0')
  const day = String(form.dobDay).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Get student name
const getStudentName = () => {
  return form.nameEnglish.trim() || form.nameKhmer.trim() || 'Unknown'
}

// Form validation
const validateForm = () => {
  Object.keys(errors).forEach(key => errors[key] = '')
  let hasErrors = false

  if (!form.nameEnglish.trim()) {
    errors.nameEnglish = 'Full name (English) is required'
    hasErrors = true
  }

  if (!form.gender) {
    errors.gender = 'Gender is required'
    hasErrors = true
  }

  if (!form.dobDay || !form.dobMonth || !form.dobYear) {
    errors.dob = 'Date of birth is required'
    hasErrors = true
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    hasErrors = true
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      errors.email = 'Invalid email format'
      hasErrors = true
    }
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone is required'
    hasErrors = true
  }

  if (!form.province) {
    errors.province = 'Province is required'
    hasErrors = true
  }

  if (!form.course) {
    errors.course = 'Course is required'
    hasErrors = true
  }

  if (!form.session) {
    errors.session = 'Session is required'
    hasErrors = true
  }

  return !hasErrors
}

// Handle image upload
const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  if (!file.type.startsWith('image/')) {
    error('Please select a valid image file')
    return
  }

  if (file.size > 20 * 1024 * 1024) {
    error('Image size must be less than 20MB')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    form.profileImage = e.target.result
  }
  reader.onerror = () => {
    error('Failed to read image file')
  }
  reader.readAsDataURL(file)
}

// Remove profile image
const removeProfileImage = () => {
  form.profileImage = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Handle form submit
const handleSubmit = () => {
  if (!validateForm()) {
    error('Validation Error: Please fix the errors in the form')
    return
  }

  if (!editingStudent.value) {
    error('No student selected for editing')
    return
  }

  try {
    // Update existing student
    const index = students.value.findIndex(s => s.id === editingStudent.value.id)
    if (index !== -1) {
      students.value[index] = {
        ...students.value[index],
        name: getStudentName(),
        nameEnglish: form.nameEnglish,
        nameKhmer: form.nameKhmer || '',
        gender: form.gender,
        dob: formatDateOfBirth(),
        email: form.email,
        phone: form.phone,
        contact: form.phone,
        province: form.province,
        course: form.course,
        session: form.session,
        profileImage: form.profileImage || ''
      }

      addHistory('update', {
        type: 'student',
        itemName: getStudentName(),
        itemId: editingStudent.value.id,
        description: `Student "${getStudentName()}" updated`,
        user: 'Admin'
      })

      saveStudents()
      closeDrawer()
      success(`Student updated: "${getStudentName()}"`)
    }
  } catch (err) {
    handleError(err, { userMessage: 'Failed to save student. Please try again.' })
  }
}

// Confirm Delete
const confirmDelete = () => {
  try {
    if (studentToDelete.value) {
      const studentName = studentToDelete.value.name || studentToDelete.value.nameEnglish
      const index = students.value.findIndex(s => s.id === studentToDelete.value.id)
      if (index !== -1) {
        students.value.splice(index, 1)

        addHistory('delete', {
          type: 'student',
          itemName: studentName,
          itemId: studentToDelete.value.id,
          description: `Student "${studentName}" deleted`,
          user: 'Admin'
        })

        saveStudents()
        showDeleteDialog.value = false
        studentToDelete.value = null
        success(`Student deleted: "${studentName}"`)
      }
    }
  } catch (err) {
    showDeleteDialog.value = false
    handleError(err, { userMessage: 'Failed to delete student. Please try again.' })
  }
}

// Close action menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    activeActionMenu.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
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
</style>
