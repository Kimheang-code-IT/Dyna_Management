<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full capitalize', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Courses Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('totalCourses') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalCourses }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Students Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 break-words line-clamp-2 capitalize">
              {{ t('totalStudents') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalStudents }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Active Courses Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('activeCourses') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ activeCoursesCount }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Teachers Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('totalTeachers') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalTeachers }}</p>
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
    </div>

    <!-- Course Table -->
    <div class="bg-white sticky top-0 dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
      <div class="p-0 mb-2 sm:mb-3">
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center justify-between">
          <div class="relative flex-1 w-full sm:max-w-[250px]">
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
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 flex-wrap">
            <!-- Status Filter -->
            <div class="relative w-full sm:w-auto">
              <select v-model="selectedStatus"
                class="appearance-none bg-white dark:bg-gray-800/100 text-xs border border-gray-300 dark:border-gray-600 rounded-sm px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white h-[37px] w-full sm:w-auto">
                <option value="">{{ t('allStatus') }}</option>
                <option value="Active">{{ t('active') }}</option>
                <option value="Inactive">{{ t('inactive') }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400  dark:text-gray-400" fill="none" stroke="currentColor"
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
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px] w-[115px] " />
              <span class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 self-center sm:self-auto">{{ t('to')
                }}</span>
              <input v-model="filterDateTo" type="date"
                class="px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px] w-[115px]" />
              <button v-if="filterDateFrom || filterDateTo" @click="clearDateFilter"
                class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors h-[37px]"
                :title="t('clear')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <button @click="openAddDrawer"
              class="px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 h-[37px] w-full sm:w-auto justify-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              {{ t('add') }}
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
                class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('no') }}</th>
              <th
                class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('courseName') }}</th>
              <th
                class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('room') }}</th>
              <th
                class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('session') }}</th>
              <th
                class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('time') }}</th>
              <th
                class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('teacher') }}</th>
              <th
                class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('totalStudent') }}</th>
              <th
                class="py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('created') }}</th>
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
            <tr
              v-if="filteredCourses.length === 0 && (searchQuery || selectedStatus || filterDateFrom || filterDateTo)">
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
            <!-- Course Rows -->
            <tr v-for="(course, index) in filteredCourses" :key="course.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ index + 1 }}</td>
              <td class="px-3 py-3 text-xs">
                <div class="font-medium text-gray-900 dark:text-white">{{ course.courseName }}</div>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ course.room }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ course.session }}
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ course.time }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ course.teacher }}
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ course.totalStudent }}
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">
                {{ formatDate(course.created) }}
              </td>
              <td class="px-3 py-3 whitespace-nowrap">
                <span class="px-2 py-1 text-[10px] font-medium rounded-full" :class="getStatusClass(course.status)">
                  {{ getStatusLabel(course.status) }}
                </span>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-xs font-medium">
                <div class="relative">
                  <button @click="toggleActionMenu(course.id)"
                    class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    title="Actions">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>

                  <!-- Dropdown Menu -->
                  <div v-if="activeActionMenu === course.id"
                    class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                    <button @click="handleEdit(course)"
                      class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      {{ t('edit') }}
                    </button>
                    <button @click="handleDelete(course)"
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
    </div>

    <!-- Right Side Drawer for Add/Edit Course -->
    <Transition name="drawer">
      <div v-if="showDrawer" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click.self="closeDrawer">
        <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div
            class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between z-10  border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white capitalize">
                {{ editingCourse ? t('editCourse') : t('addCourse') }}
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
            <!-- Course Name -->
            <div>
              <label for="courseName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('courseName') }} <span class="text-red-500">*</span>
              </label>
              <input id="courseName" v-model="form.courseName" type="text" required
                @input="validateTextField('courseName', form.courseName, { required: true, minLength: 2, maxLength: 200 })"
                :placeholder="t('courseName')" :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]',
                  errors.courseName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]" />
              <p v-if="errors.courseName" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.courseName }}
              </p>
            </div>

            <!-- Room -->
            <div>
              <label for="room" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('room') }} <span class="text-red-500">*</span>
              </label>
              <input id="room" v-model="form.room" type="text" required
                @input="validateTextField('room', form.room, { required: true, minLength: 1, maxLength: 50 })"
                :placeholder="t('room')" :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]',
                  errors.room ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]" />
              <p v-if="errors.room" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.room }}</p>
            </div>

            <!-- Session -->
            <div>
              <label for="session" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('session') }} <span class="text-red-500">*</span>
              </label>
              <select id="session" v-model="form.session" required
                @change="validateSelectField('session', form.session, true)" :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white',
                  errors.session ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]">
                <option value="">{{ t('session') }}</option>
                <option value="Mon-Fri">Mon-Fri</option>
                <option value="Sat-Sun">Sat-Sun</option>
              </select>
              <p v-if="errors.session" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.session }}</p>
            </div>

            <!-- Time -->
            <div>
              <label for="time" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('time') }} <span class="text-red-500">*</span>
              </label>
              <select id="time" v-model="form.time" required @change="validateSelectField('time', form.time, true)"
                :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white',
                  errors.time ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]">
                <option value="">{{ t('selectTime') }}</option>
                <option v-for="timeSlot in timeSlots" :key="timeSlot" :value="timeSlot">{{ timeSlot }}</option>
              </select>
              <p v-if="errors.time" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.time }}</p>
            </div>

            <!-- Teacher -->
            <div>
              <label for="teacher" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('teacher') }} <span class="text-red-500">*</span>
              </label>
              <input id="teacher" v-model="form.teacher" type="text" required
                @input="validateTextField('teacher', form.teacher, { required: true, minLength: 2, maxLength: 100 })"
                :placeholder="t('teacher')" :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]',
                  errors.teacher ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]" />
              <p v-if="errors.teacher" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.teacher }}</p>
            </div>

            <!-- Total Student -->
            <div>
              <label for="totalStudent" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('totalStudent') }} <span class="text-red-500">*</span>
              </label>
              <input id="totalStudent" v-model.number="form.totalStudent" type="number" min="0" required
                @input="validateNumberField('totalStudent', form.totalStudent, { required: true, min: 0, allowDecimals: false })"
                @keypress="preventNonNumeric($event, false)" :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]',
                  errors.totalStudent ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]" placeholder="0" />
              <p v-if="errors.totalStudent" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.totalStudent
                }}</p>
            </div>

            <!-- Status -->
            <div>
              <label for="status" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('status') }} <span class="text-red-500">*</span>
              </label>
              <select id="status" v-model="form.status" required
                @change="validateSelectField('status', form.status, true)" :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white',
                  errors.status ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]">
                <option value="">{{ t('status') }}</option>
                <option value="Active">{{ t('active') }}</option>
                <option value="Inactive">{{ t('inactive') }}</option>
              </select>
              <p v-if="errors.status" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.status }}</p>
            </div>

            <!-- Buttons -->
            <div class="flex gap-3 pt-4">
              <button type="submit"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
                {{ editingCourse ? t('update') + ' ' + t('course') : t('add') }}
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

    <!-- Add Confirmation Dialog -->
    <div v-if="showAddConfirmDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showAddConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex-1">
          <!-- Title with icon -->
          <div class="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('add') }} {{ t('course')
              }}</h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('areYouSure') }} {{ t('add') }} {{ t('course')
            }}?</p>

          <!-- Buttons -->
          <div class="flex gap-3 justify-end">
            <button @click="showAddConfirmDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('no') }}
            </button>
            <button @click="confirmAdd"
              class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
              {{ t('yes') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Confirmation Dialog -->
    <div v-if="showEditConfirmDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showEditConfirmDialog = false">
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
              t('course') }}</h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('areYouSure') }} {{ t('update') }} {{
            t('course') }}?</p>

          <!-- Buttons -->
          <div class="flex gap-3 justify-end">
            <button @click="showEditConfirmDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('no') }}
            </button>
            <button @click="confirmEdit"
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
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('deleteCourse') }}</h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('areYouSure') }} {{ t('delete') }} {{
            t('course') }}?</p>

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
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject, onMounted, onUnmounted } from 'vue'
import { addHistory } from '../utils/history'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'
import { useFormValidation } from '../composables/useFormValidation'
import { textContains } from '../utils/search'
import coursesData from '../data/courses.json'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

// Load courses from JSON file
const courses = ref(coursesData)

const searchQuery = ref('')
const selectedStatus = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')

// Action menu state
const activeActionMenu = ref(null)

// Drawer state
const showDrawer = ref(false)
const editingCourse = ref(null)

// Form state
const form = reactive({
  courseName: '',
  room: '',
  session: '',
  time: '',
  teacher: '',
  totalStudent: 0,
  status: 'Active'
})

// Form validation
const {
  errors,
  validateTextField,
  validateNumberField,
  validateSelectField,
  preventNonNumeric
} = useFormValidation({
  courseName: '',
  room: '',
  session: '',
  time: '',
  teacher: '',
  totalStudent: '',
  status: ''
})

// Confirmation dialogs state
const showAddConfirmDialog = ref(false)
const showEditConfirmDialog = ref(false)
const showDeleteDialog = ref(false)
const courseToDelete = ref(null)

// Success/Error message state
const showSuccessMessage = ref(false)
const successMessageTitle = ref('')
const successMessageText = ref('')
const showErrorMessage = ref(false)
const errorMessageTitle = ref('')
const errorMessageText = ref('')

// Generate hourly time slots from 7:00-8:00 to 20:00-21:00 with AM/PM
const formatHourWithAMPM = (hour24) => {
  if (hour24 === 0) return '12:00 AM'
  if (hour24 < 12) return `${hour24}:00 AM`
  if (hour24 === 12) return '12:00 PM'
  return `${hour24 - 12}:00 PM`
}

const timeSlots = computed(() => {
  const slots = []
  for (let hour = 7; hour <= 20; hour++) {
    const startTime = formatHourWithAMPM(hour)
    const endTime = formatHourWithAMPM(hour + 1)
    slots.push(`${startTime} - ${endTime}`)
  }
  return slots
})

const filteredCourses = computed(() => {
  let filtered = courses.value

  if (searchQuery.value) {
    filtered = filtered.filter(c =>
      textContains(c.courseName, searchQuery.value) ||
      textContains(c.room, searchQuery.value) ||
      textContains(c.teacher, searchQuery.value)
    )
  }

  if (selectedStatus.value) {
    filtered = filtered.filter(c => c.status === selectedStatus.value)
  }

  // Apply date range filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(course => {
      if (!course.created) return false

      const courseDate = new Date(course.created)
      courseDate.setHours(0, 0, 0, 0)

      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return courseDate >= fromDate && courseDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return courseDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return courseDate <= toDate
      }
      return true
    })
  }

  return filtered
})

const totalCourses = computed(() => courses.value.length)

const totalStudents = computed(() => {
  return courses.value.reduce((sum, c) => sum + (c.totalStudent || 0), 0)
})

const activeCoursesCount = computed(() => {
  return courses.value.filter(c => c.status === 'Active').length
})

const totalTeachers = computed(() => {
  const unique = new Set(courses.value.map(c => c.teacher))
  return unique.size
})

const getStatusClass = (status) => {
  if (status === 'Active') {
    return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
  } else {
    return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
  }
}

// Translate status value
const getStatusLabel = (status) => {
  if (status === 'Active') {
    return t('active')
  } else if (status === 'Inactive') {
    return t('inactive')
  }
  return status
}

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

// Drawer functions
const openAddDrawer = () => {
  editingCourse.value = null
  resetForm()
  showDrawer.value = true
}

const closeDrawer = () => {
  showDrawer.value = false
  editingCourse.value = null
  resetForm()
}

const resetForm = () => {
  form.courseName = ''
  form.room = ''
  form.session = ''
  form.time = ''
  form.teacher = ''
  form.totalStudent = 0
  form.status = 'Active'
  Object.keys(errors).forEach(key => errors[key] = '')
}

// Action menu functions
const toggleActionMenu = (courseId) => {
  activeActionMenu.value = activeActionMenu.value === courseId ? null : courseId
}

const handleEdit = (course) => {
  editingCourse.value = course
  form.courseName = course.courseName
  form.room = course.room
  form.session = course.session
  form.time = course.time
  form.teacher = course.teacher
  form.totalStudent = course.totalStudent
  form.status = course.status
  activeActionMenu.value = null
  showDrawer.value = true
}

const handleDelete = (course) => {
  courseToDelete.value = course
  showDeleteDialog.value = true
  activeActionMenu.value = null
}

// Form validation
const validateForm = () => {
  let isValid = true

  if (!validateTextField('courseName', form.courseName, { required: true, minLength: 2, maxLength: 200 })) {
    isValid = false
  }

  if (!validateTextField('room', form.room, { required: true, minLength: 1, maxLength: 50 })) {
    isValid = false
  }

  if (!validateSelectField('session', form.session, true)) {
    isValid = false
  }

  if (!validateSelectField('time', form.time, true)) {
    isValid = false
  }

  if (!validateTextField('teacher', form.teacher, { required: true, minLength: 2, maxLength: 100 })) {
    isValid = false
  }

  if (!validateNumberField('totalStudent', form.totalStudent, { required: true, min: 0, allowDecimals: false })) {
    isValid = false
  }

  if (!validateSelectField('status', form.status, true)) {
    isValid = false
  }

  return isValid
}

// Handle form submit
const handleSubmit = () => {
  if (!validateForm()) {
    error('Validation Error: Please fix the errors in the form')
    return
  }

  // Show confirmation dialog
  if (editingCourse.value) {
    showEditConfirmDialog.value = true
  } else {
    showAddConfirmDialog.value = true
  }
}

// Confirm Add
const confirmAdd = () => {
  try {
    const newCourse = {
      id: courses.value.length > 0 ? Math.max(...courses.value.map(c => c.id)) + 1 : 1,
      courseName: form.courseName,
      room: form.room,
      session: form.session,
      time: form.time,
      teacher: form.teacher,
      totalStudent: form.totalStudent,
      status: form.status,
      created: new Date().toISOString().split('T')[0]
    }

    courses.value.push(newCourse)
    // Log add history
    addHistory('add', {
      type: 'course',
      itemName: form.courseName,
      itemId: newCourse.id,
      description: `Course "${form.courseName}" added`,
      user: 'Admin'
    })
    showAddConfirmDialog.value = false
    closeDrawer()
    showSuccessMessage.value = true
    successMessageTitle.value = t('courseAdded') || 'Course Added'
    successMessageText.value = `"${form.courseName}" ${t('courseAddedSuccess') || 'has been added successfully'}`
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 3000)
  } catch (err) {
    showAddConfirmDialog.value = false
    handleError(err, { userMessage: 'Failed to add course. Please try again.' })
  }
}

// Confirm Edit
const confirmEdit = () => {
  try {
    const index = courses.value.findIndex(c => c.id === editingCourse.value.id)
    if (index !== -1) {
      courses.value[index] = {
        ...courses.value[index],
        courseName: form.courseName,
        room: form.room,
        session: form.session,
        time: form.time,
        teacher: form.teacher,
        totalStudent: form.totalStudent,
        status: form.status
      }

      // Log update history
      addHistory('update', {
        type: 'course',
        itemName: form.courseName,
        itemId: editingCourse.value.id,
        description: `Course "${form.courseName}" updated`,
        user: 'Admin'
      })
      showEditConfirmDialog.value = false
      closeDrawer()
      showSuccessMessage.value = true
      successMessageTitle.value = t('courseUpdated') || 'Course Updated'
      successMessageText.value = `"${form.courseName}" ${t('courseUpdatedSuccess') || 'has been updated successfully'}`
      setTimeout(() => {
        showSuccessMessage.value = false
      }, 3000)
    }
  } catch (err) {
    showEditConfirmDialog.value = false
    handleError(err, { userMessage: 'Failed to update course. Please try again.' })
  }
}

// Confirm Delete
const confirmDelete = () => {
  try {
    if (courseToDelete.value) {
      const courseName = courseToDelete.value.courseName
      const index = courses.value.findIndex(c => c.id === courseToDelete.value.id)
      if (index !== -1) {
        courses.value.splice(index, 1)
        // Log delete history
        addHistory('delete', {
          type: 'course',
          itemName: courseName,
          itemId: courseToDelete.value.id,
          description: `Course "${courseName}" deleted`,
          user: 'Admin'
        })
        showDeleteDialog.value = false
        courseToDelete.value = null
        showSuccessMessage.value = true
        successMessageTitle.value = t('courseDeleted') || 'Course Deleted'
        successMessageText.value = `"${courseName}" ${t('courseDeletedSuccess') || 'has been deleted successfully'}`
        setTimeout(() => {
          showSuccessMessage.value = false
        }, 3000)
      }
    }
  } catch (err) {
    showDeleteDialog.value = false
    handleError(err, { userMessage: 'Failed to delete course. Please try again.' })
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
