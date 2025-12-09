<template>
  <div :class="[
    'mx-auto transition-all duration-300 w-full',
    isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0'
  ]">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Classes Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalClasses') }}
            </h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalClasses }}
            </p>
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

      <!-- Active Classes Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('activeClasses') }}
            </h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ activeClasses }}
            </p>
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

      <!-- Total Teachers Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalTeachers') }}
            </h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalTeachers }}
            </p>
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

      <!-- Total Students in Classes Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalStudentsInClasses') }}
            </h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalStudentsInAllClasses }}
            </p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Classes Table Card -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
      <!-- Search and Filter Bar -->
      <div class="p-0 mb-2 sm:mb-3">
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center justify-between">
          <!-- Search -->
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

          <!-- Right Tools -->
          <div class="flex items-center gap-4 flex-wrap">
            <!-- Date Range Picker -->
            <div class="flex items-center gap-2">
              <label class="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                {{ t('dateBetween') }}:
              </label>
              <input v-model="filterDateFrom" type="date"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]" />
              <span class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                {{ t('to') }}
              </span>
              <input v-model="filterDateTo" type="date"
                class="px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white w-[115px] h-[37px]" />
              <button v-if="filterDateFrom || filterDateTo" @click="clearDateFilter"
                class="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                :title="t('clear')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Add Button -->
            <button @click="openAddDrawer"
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
    <div class="max-h-[500px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm">
      <table class="w-full">
        <!-- Sticky Header -->
        <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
          <tr>
            <th
              class="px-1 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('no') }}
            </th>
            <th
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('className') }}
            </th>
            <th
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('classNamRoom') }}
            </th>
            <th
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('teacher') }}
            </th>
            <th
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('schedule') }}
            </th>
            <th
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('students') }}
            </th>
            <th
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('duration') }}
            </th>
            <th
              class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
              {{ t('status') }}
            </th>
            <th
              class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
            </th>
          </tr>
        </thead>

        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <!-- No Results Found -->
          <tr v-if="filteredClasses.length === 0 && (searchQuery || filterDateFrom || filterDateTo)">
            <td colspan="9" class="px-4 py-12 text-center">
              <div class="flex flex-col items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {{ t('noResults') }}
                </p>
              </div>
            </td>
          </tr>

          <!-- Class Rows -->
          <tr v-for="(classItem, index) in filteredClasses" :key="classItem.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <!-- No -->
            <td class="px-1 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
              {{ index + 1 }}
            </td>

            <!-- Class Name -->
            <td class="px-3 py-3 text-xs">
              <div class="font-medium text-gray-900 dark:text-white">
                {{ classItem.className }}
              </div>
              <p v-if="classItem.description" class="mt-1 text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1">
                {{ classItem.description }}
              </p>
            </td>

            <!-- Room -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
              {{ classItem.roomName || '-' }}
            </td>

            <!-- Teacher -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
              {{ classItem.teacher || '-' }}
            </td>

            <!-- Schedule -->
            <td class="px-3 py-3 whitespace-nowrap text-[11px] text-gray-700 dark:text-gray-300 text-center">
              {{ classItem.schedule }}
            </td>

            <!-- Students -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
              {{ classItem.students?.length || 0 }} {{ t('students') }}
            </td>

            <!-- Duration -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
              {{ classItem.duration }}
            </td>

            <!-- Status -->
            <td class="px-3 py-3 whitespace-nowrap">
              <span class="px-2 py-1 text-[10px] font-medium rounded-full" :class="classItem.status === 'Active'
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                ">
                {{ classItem.status === 'Active' ? t('active') : classItem.status }}
              </span>
            </td>

            <!-- Actions -->
            <td class="px-2 py-3 whitespace-nowrap text-xs font-medium">
              <div class="relative" data-action-menu-root>
                <button @click.stop="toggleActionMenu(classItem.id)"
                  class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  title="Actions">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>

                <!-- Dropdown Menu -->
                <div v-if="activeActionMenu === classItem.id"
                  class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <button @click="handleView(classItem)"
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

                  <button @click="handleEdit(classItem)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    {{ t('edit') }}
                  </button>

                  <button @click="handleAddStudent(classItem)"
                    class="w-full text-left px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    {{ t('addStudentToClass') }}
                  </button>

                  <button @click="handleDelete(classItem)"
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

    <!-- Right Side Drawer for View/Add/Edit Class -->
    <Transition name="drawer">
      <div v-if="showDrawer" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click.self="closeDrawer">
        <div :class="[
          'absolute right-0 top-0 h-full w-full bg-white dark:bg-gray-800 shadow-xl overflow-y-auto',
          isViewMode ? 'max-w-4xl' : 'max-w-md'
        ]">
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
              <h2 class="text-xl font-bold text-black dark:text-white">
                {{ isViewMode ? t('viewClass') : editingClass ? t('editClass') : t('add') }}
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

          <!-- View Mode: Students List -->
          <div v-if="isViewMode" class="p-6 space-y-4">
            <!-- Summary Cards -->
            <div class="grid grid-cols-3 gap-3 mb-4">
              <!-- Total Students -->
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-sm p-3 border border-blue-200 dark:border-blue-800">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div class="text-xs text-blue-600 dark:text-blue-400 font-medium">{{ t('totalStudents') }}</div>
                </div>
                <div class="text-2xl font-bold text-blue-900 dark:text-blue-100">{{ totalStudentsInClass }}</div>
              </div>
              <!-- Male Students -->
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-sm p-3 border border-blue-200 dark:border-blue-800">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div class="text-xs text-blue-600 dark:text-blue-400 font-medium">{{ t('male') }}</div>
                </div>
                <div class="text-2xl font-bold text-blue-900 dark:text-blue-100">{{ maleStudentsInClass }}</div>
              </div>
              <!-- Female Students -->
              <div class="bg-pink-50 dark:bg-pink-900/20 rounded-sm p-3 border border-pink-200 dark:border-pink-800">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-600 dark:text-pink-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div class="text-xs text-pink-600 dark:text-pink-400 font-medium">{{ t('female') }}</div>
                </div>
                <div class="text-2xl font-bold text-pink-900 dark:text-pink-100">{{ femaleStudentsInClass }}</div>
              </div>
            </div>

            <!-- Search and Add Button -->
            <div class="flex gap-2 mb-4">
              <div class="relative flex-1">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input v-model="viewStudentSearchQuery" type="text" :placeholder="t('searchStudents')"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]" />
              </div>
              <button @click="handleAddStudent(editingClass)"
                class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 h-[37px]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                {{ t('addStudentToClass') }}
              </button>
            </div>

            <!-- Students Table -->
            <div class="border border-gray-200 dark:border-gray-700 rounded-sm overflow-hidden">
              <div class="max-h-[400px] overflow-y-auto">
                <table class="w-full">
                  <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
                    <tr>
                      <th
                        class="px-3 py-2 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('no') }}
                      </th>
                      <th
                        class="px-3 py-2 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('student') }}
                      </th>
                      <th
                        class="px-3 py-2 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('registered') }}
                      </th>
                      <th
                        class="px-3 py-2 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('deadline') }}
                      </th>
                      <th
                        class="px-3 py-2 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">
                        {{ t('status') }}
                      </th>
                      <th
                        class="px-2 py-2 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase">
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr v-if="filteredStudentsInClass.length === 0">
                      <td colspan="6" class="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                        {{ viewStudentSearchQuery ? t('noResults') : t('noStudentsAvailable') }}
                      </td>
                    </tr>
                    <tr v-for="(student, index) in filteredStudentsInClass" :key="student.id"
                      class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">
                        {{ index + 1 }}
                      </td>
                      <td class="px-2 py-2 text-[14px]">
                        <div class="font-medium text-gray-900 dark:text-white">{{ student.name }}</div>
                        <div class="text-[10px] text-gray-500 dark:text-gray-400">{{ student.id }}</div>
                      </td>
                      <td class="px-2 py-2 text-[14px] text-gray-700 dark:text-gray-300">
                        {{ getStudentJoinedDate(student.id) }}
                      </td>
                      <td class="px-2 py-2 text-[14px] text-gray-700 dark:text-gray-300">
                        {{ getStudentDeadline(student.id) }}
                      </td>
                      <td class="px-2 py-2">
                        <span class="px-2 py-1 text-[10px] font-medium rounded-full" :class="{
                          'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200': getStudentStatus(student.id) === 'Active',
                          'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200': getStudentStatus(student.id) === 'Warning',
                          'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200': getStudentStatus(student.id) === 'Overdue'
                        }">
                          {{ getStudentStatus(student.id) === 'Active' ? t('active') : getStudentStatus(student.id) ===
                            'Warning' ? t('pending') : t('overdue') }}
                        </span>
                      </td>
                      <td class="px-2 py-2 text-center">
                        <button @click="handleDeleteStudentFromClass(student)"
                          class="text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors"
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
            </div>
          </div>

          <!-- Add/Edit Mode: Form -->
          <form v-else @submit.prevent="handleSubmit" class="p-6 space-y-4">
            <!-- Class Name -->
            <div>
              <label for="className" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('className') }} <span class="text-red-500">*</span>
              </label>
              <input id="className" v-model="form.className" type="text" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                :placeholder="t('className')" />
              <p v-if="errors.className" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ errors.className }}
              </p>
            </div>

            <!-- Room Name -->
            <div>
              <label for="roomName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('room') }}
              </label>
              <input id="roomName" v-model="form.roomName" type="text" :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                :placeholder="t('room')" />
              <p v-if="errors.roomName" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ errors.roomName }}
              </p>
            </div>

            <!-- Description -->
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('description') }}
              </label>
              <textarea id="description" v-model="form.description" rows="3" :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed resize-none"
                :placeholder="t('description')"></textarea>
              <p v-if="errors.description" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ errors.description }}
              </p>
            </div>

            <!-- Teacher -->
            <div>
              <label for="teacher" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('teacher') }} <span class="text-red-500">*</span>
              </label>
              <input id="teacher" v-model="form.teacher" type="text" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                :placeholder="t('teacher')" />
              <p v-if="errors.teacher" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ errors.teacher }}
              </p>
            </div>

            <!-- Schedule -->
            <div>
              <label for="schedule" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('schedule') }} <span class="text-red-500">*</span>
              </label>
              <input id="schedule" v-model="form.schedule" type="text" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                :placeholder="t('schedule')" />
              <p v-if="errors.schedule" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ errors.schedule }}
              </p>
            </div>

            <!-- Duration -->
            <div>
              <label for="duration" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('duration') }} <span class="text-red-500">*</span>
              </label>
              <input id="duration" v-model="form.duration" type="text" required :disabled="isViewMode"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed h-[37px]"
                :placeholder="t('durationPlaceholder')" />
              <p v-if="errors.duration" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ errors.duration }}
              </p>
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
              <p v-if="errors.status" class="mt-1 text-sm text-red-600 dark:text-red-400">
                {{ errors.status }}
              </p>
            </div>

            <!-- Buttons -->
            <div v-if="!isViewMode" class="flex gap-3 pt-4">
              <button type="submit"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
                {{ editingClass ? t('update') : t('add') }}
              </button>
              <button type="button" @click="closeDrawer"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
                {{ t('cancel') }}
              </button>
            </div>
            <div v-else class="flex gap-3 pt-4">
              <button type="button" @click="handleEditFromView"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
                {{ t('edit') }}
              </button>
              <button type="button" @click="closeDrawer"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
                {{ t('close') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Add Student to Class Dialog -->
    <div v-if="showAddStudentDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showAddStudentDialog = false">
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
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
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ t('addStudentToClass') }}: {{ selectedClassForStudent?.className }}
            </h3>
          </div>
          <button @click="showAddStudentDialog = false"
            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Search Bar -->
        <div class="mb-4">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input v-model="studentSearchQuery" type="text" :placeholder="t('searchStudents')"
              class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]" />
          </div>
        </div>

        <!-- Student List with Checkboxes -->
        <div class="max-h-[400px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm mb-4">
          <div v-if="filteredAvailableStudents.length === 0" class="p-8 text-center text-gray-500 dark:text-gray-400">
            {{ t('noStudentsAvailable') }}
          </div>
          <div v-else class="divide-y divide-gray-200 dark:divide-gray-700">
            <label v-for="student in filteredAvailableStudents" :key="student.id"
              class="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <input type="checkbox" :value="student.id" v-model="selectedStudentIds"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <div class="flex-1">
                <div class="font-medium text-gray-900 dark:text-white text-sm">
                  {{ student.name }}
                </div>
                <div class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                  {{ student.id }} - {{ student.course }}
                </div>
              </div>
            </label>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3 justify-end">
          <button @click="showAddStudentDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmAddStudents" :disabled="selectedStudentIds.length === 0"
            class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed">
            {{ t('add') }} ({{ selectedStudentIds.length }})
          </button>
        </div>
      </div>
    </div>

    <!-- Edit Confirmation Dialog -->
    <div v-if="showEditConfirmDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showEditConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ t('update') }} {{ t('class') }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ t('areYouSure') }} {{ t('update') }} {{ t('class') }}?
            </p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('class') }}:
          <span class="font-semibold">{{ form.className }}</span>
        </p>
        <div class="flex gap-3 justify-end">
          <button @click="showEditConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmEdit"
            class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium">
            {{ t('yes') }}, {{ t('update') }}
          </button>
        </div>
      </div>
    </div>

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
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ t('deleteClass') }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ t('areYouSure') }} {{ t('delete') }} {{ t('class') }}?
            </p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('class') }}:
          <span class="font-semibold">{{ classToDelete?.className }}</span>
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

    <!-- Delete Student from Class Dialog -->
    <div v-if="showDeleteStudentDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showDeleteStudentDialog = false">
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
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ t('deleteStudent') }} from {{ t('class') }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ t('areYouSure') }} {{ t('delete') }} {{ t('student') }}?
            </p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-6">
          {{ t('student') }}:
          <span class="font-semibold">{{ studentToDeleteFromClass?.name }}</span>
        </p>
        <div class="flex gap-3 justify-end">
          <button @click="showDeleteStudentDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmDeleteStudentFromClass"
            class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium">
            {{ t('yes') }}, {{ t('delete') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Add Students Confirmation Dialog -->
    <div v-if="showAddStudentConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showAddStudentConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ t('addStudentToClass') }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ t('areYouSure') }} {{ t('add') }} {{ selectedStudentIds.length }} {{ selectedStudentIds.length === 1 ?
                t('student') : t('students') }} {{ t('to') }} {{ t('class') }}?
            </p>
          </div>
        </div>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">
          {{ t('class') }}:
          <span class="font-semibold">{{ selectedClassForStudent?.className }}</span>
        </p>
        <!-- Students List -->
        <div
          class="mb-6 max-h-[200px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm p-3 bg-gray-50 dark:bg-gray-700/50">
          <div class="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
            {{ t('students') }} {{ t('to') }} {{ t('add') }}:
          </div>
          <div class="space-y-1">
            <div v-for="studentId in selectedStudentIds" :key="studentId"
              class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-500 flex-shrink-0" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-medium">{{allStudents.find(s => s.id === studentId)?.name || studentId}}</span>
              <span class="text-xs text-gray-500 dark:text-gray-400">({{ studentId }})</span>
            </div>
          </div>
        </div>
        <div class="flex gap-3 justify-end">
          <button @click="showAddStudentConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="actuallyAddStudents"
            class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
            {{ t('yes') }}, {{ t('add') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject, onMounted, onUnmounted } from 'vue'
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

const classes = ref([])
const allStudents = ref([])

const searchQuery = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')

// Action menu state
const activeActionMenu = ref(null)

// Drawer state
const showDrawer = ref(false)
const editingClass = ref(null)
const isViewMode = ref(false)

// Add Student Dialog state
const showAddStudentDialog = ref(false)
const selectedClassForStudent = ref(null)
const studentSearchQuery = ref('')
const selectedStudentIds = ref([])

// View mode student search
const viewStudentSearchQuery = ref('')

// Delete student from class
const showDeleteStudentDialog = ref(false)
const studentToDeleteFromClass = ref(null)

// Form state
const form = reactive({
  className: '',
  roomName: '',
  description: '',
  teacher: '',
  schedule: '',
  duration: '',
  status: 'Active'
})

// Form validation errors
const errors = reactive({
  className: '',
  roomName: '',
  description: '',
  teacher: '',
  schedule: '',
  duration: '',
  status: ''
})

// Confirmation dialogs state
const showEditConfirmDialog = ref(false)
const showDeleteDialog = ref(false)
const showAddStudentConfirmDialog = ref(false)
const classToDelete = ref(null)

// Load classes from JSON file or localStorage
const loadClasses = async () => {
  const { loadDataFromJSON } = await import('../utils/dataLoader')
  classes.value = await loadDataFromJSON('../data/classes.json', 'classes_data')
}

// Save classes to localStorage
const saveClasses = () => {
  try {
    localStorage.setItem('classes_data', JSON.stringify(classes.value))
  } catch (err) {
    console.error('Error saving classes:', err)
  }
}

// Load students from JSON file or localStorage
const loadStudents = async () => {
  const { loadDataFromJSON } = await import('../utils/dataLoader')
  allStudents.value = await loadDataFromJSON('../data/students.json', 'students_data')
}

// Computed: filter classes
const filteredClasses = computed(() => {
  let filtered = classes.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((c) => {
      const name = (c.className || '').toLowerCase()
      const teacher = (c.teacher || '').toLowerCase()
      const schedule = (c.schedule || '').toLowerCase()
      return (
        name.includes(query) ||
        teacher.includes(query) ||
        schedule.includes(query)
      )
    })
  }

  // Apply date range filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter((classItem) => {
      if (!classItem.created) return false

      const classDate = new Date(classItem.created)
      classDate.setHours(0, 0, 0, 0)

      if (filterDateFrom.value && filterDateTo.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return classDate >= fromDate && classDate <= toDate
      } else if (filterDateFrom.value) {
        const fromDate = new Date(filterDateFrom.value)
        fromDate.setHours(0, 0, 0, 0)
        return classDate >= fromDate
      } else if (filterDateTo.value) {
        const toDate = new Date(filterDateTo.value)
        toDate.setHours(23, 59, 59, 999)
        return classDate <= toDate
      }

      return true
    })
  }

  return filtered
})

// Get available students (not already in the class)
const availableStudents = computed(() => {
  if (!selectedClassForStudent.value) return allStudents.value
  const classStudentIds = selectedClassForStudent.value.students || []
  return allStudents.value.filter((student) => !classStudentIds.includes(student.id))
})

// Filter available students by search query
const filteredAvailableStudents = computed(() => {
  if (!studentSearchQuery.value) return availableStudents.value
  const query = studentSearchQuery.value.toLowerCase()
  return availableStudents.value.filter((student) => {
    const name = (student.name || '').toLowerCase()
    const id = (student.id || '').toLowerCase()
    const course = (student.course || '').toLowerCase()
    return (
      name.includes(query) ||
      id.includes(query) ||
      course.includes(query)
    )
  })
})

// Get students in the current class being viewed
const studentsInClass = computed(() => {
  if (!editingClass.value || !editingClass.value.students) return []
  const studentIds = editingClass.value.students
  return allStudents.value.filter((student) => studentIds.includes(student.id))
})

// Filter students in class by search
const filteredStudentsInClass = computed(() => {
  if (!viewStudentSearchQuery.value) return studentsInClass.value
  const query = viewStudentSearchQuery.value.toLowerCase()
  return studentsInClass.value.filter((student) => {
    const name = (student.name || '').toLowerCase()
    const id = (student.id || '').toLowerCase()
    const course = (student.course || '').toLowerCase()
    return (
      name.includes(query) ||
      id.includes(query) ||
      course.includes(query)
    )
  })
})

// Student statistics in class
const totalStudentsInClass = computed(() => studentsInClass.value.length)
const maleStudentsInClass = computed(() =>
  studentsInClass.value.filter((s) => s.gender === 'Male').length
)
const femaleStudentsInClass = computed(() =>
  studentsInClass.value.filter((s) => s.gender === 'Female').length
)

// Get student joined date (when added to class) or use registered date
const getStudentJoinedDate = (studentId) => {
  if (!editingClass.value || !editingClass.value.studentJoinDates) {
    const student = allStudents.value.find((s) => s.id === studentId)
    return student?.registered || new Date().toISOString().split('T')[0]
  }
  return editingClass.value.studentJoinDates[studentId] ||
    allStudents.value.find((s) => s.id === studentId)?.registered ||
    new Date().toISOString().split('T')[0]
}

// Get student deadline (30 days from joined date)
const getStudentDeadline = (studentId) => {
  const joinedDate = getStudentJoinedDate(studentId)
  const deadline = new Date(joinedDate)
  deadline.setDate(deadline.getDate() + 30)
  return deadline.toISOString().split('T')[0]
}

// Get student status (based on deadline)
const getStudentStatus = (studentId) => {
  const deadline = getStudentDeadline(studentId)
  const today = new Date().toISOString().split('T')[0]
  if (deadline < today) return 'Overdue'
  const daysLeft = Math.ceil((new Date(deadline) - new Date(today)) / (1000 * 60 * 60 * 24))
  if (daysLeft <= 7) return 'Warning'
  return 'Active'
}

const totalClasses = computed(() => classes.value.length)

const activeClasses = computed(() =>
  classes.value.filter((c) => c.status === 'Active').length
)

const totalTeachers = computed(() => {
  const unique = new Set(
    classes.value
      .map((c) => c.teacher)
      .filter(Boolean)
  )
  return unique.size
})

const totalStudentsInAllClasses = computed(() => {
  const allClassStudentIds = new Set()
  classes.value.forEach((c) => {
    if (c.students && Array.isArray(c.students)) {
      c.students.forEach((id) => allClassStudentIds.add(id))
    }
  })
  return allClassStudentIds.size
})

// Clear date filter
const clearDateFilter = () => {
  filterDateFrom.value = ''
  filterDateTo.value = ''
}

// Action menu functions
const toggleActionMenu = (classId) => {
  activeActionMenu.value = activeActionMenu.value === classId ? null : classId
}

const handleView = (classItem) => {
  editingClass.value = classItem
  isViewMode.value = true
  form.className = classItem.className || ''
  form.roomName = classItem.roomName || ''
  form.description = classItem.description || ''
  form.teacher = classItem.teacher || ''
  form.schedule = classItem.schedule || ''
  form.duration = classItem.duration || ''
  form.status = classItem.status || 'Active'
  viewStudentSearchQuery.value = ''
  loadStudents()
  activeActionMenu.value = null
  showDrawer.value = true
}

const handleEdit = (classItem) => {
  editingClass.value = classItem
  isViewMode.value = false
  form.className = classItem.className || ''
  form.roomName = classItem.roomName || ''
  form.description = classItem.description || ''
  form.teacher = classItem.teacher || ''
  form.schedule = classItem.schedule || ''
  form.duration = classItem.duration || ''
  form.status = classItem.status || 'Active'
  activeActionMenu.value = null
  showDrawer.value = true
}

const handleEditFromView = () => {
  isViewMode.value = false
}

const handleAddStudent = (classItem) => {
  selectedClassForStudent.value = classItem
  studentSearchQuery.value = ''
  selectedStudentIds.value = []
  loadStudents()
  activeActionMenu.value = null
  showAddStudentDialog.value = true
}

const handleDelete = (classItem) => {
  classToDelete.value = classItem
  showDeleteDialog.value = true
  activeActionMenu.value = null
}

// Drawer functions
const openAddDrawer = () => {
  editingClass.value = null
  isViewMode.value = false
  resetForm()
  showDrawer.value = true
}

const closeDrawer = () => {
  showDrawer.value = false
  editingClass.value = null
  isViewMode.value = false
  resetForm()
}

const resetForm = () => {
  form.className = ''
  form.roomName = ''
  form.description = ''
  form.teacher = ''
  form.schedule = ''
  form.duration = ''
  form.status = 'Active'
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })
}

// Form validation
const validateForm = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })
  let hasErrors = false

  if (!form.className.trim()) {
    errors.className = 'Class name is required'
    hasErrors = true
  }

  if (!form.teacher.trim()) {
    errors.teacher = 'Teacher is required'
    hasErrors = true
  }

  if (!form.schedule.trim()) {
    errors.schedule = 'Schedule is required'
    hasErrors = true
  }

  if (!form.duration.trim()) {
    errors.duration = 'Duration is required'
    hasErrors = true
  }

  if (!form.status) {
    errors.status = 'Status is required'
    hasErrors = true
  }

  return !hasErrors
}

// Handle form submit
const handleSubmit = () => {
  if (isViewMode.value) return

  if (!validateForm()) {
    error(`${t('validationError')}: ${t('pleaseFixErrors')}`)
    return
  }

  if (editingClass.value) {
    showEditConfirmDialog.value = true
  } else {
    confirmAdd()
  }
}

// Confirm Add
const confirmAdd = async () => {
  try {
    await withLoading(async () => {
      const newId = `CLS${String(classes.value.length + 1).padStart(3, '0')}`
      const newClass = {
        id: newId,
        className: form.className,
        roomName: form.roomName || '',
        description: form.description || '',
        teacher: form.teacher,
        schedule: form.schedule,
        students: [],
        duration: form.duration,
        status: form.status,
        created: new Date().toISOString().split('T')[0]
      }

      classes.value.push(newClass)
      saveClasses()
      addHistory('add', {
        type: 'student',
        itemName: form.className,
        itemId: newId,
        description: `Class added - Class: ${form.className}, Teacher: ${form.teacher}`,
        user: 'Admin'
      })
      closeDrawer()
      success(`${t('classAdded')}: "${form.className}" ${t('classAddedSuccess')}`)
    }, 'Adding class...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to add class. Please try again.' })
  }
}

// Confirm Edit
const confirmEdit = async () => {
  try {
    await withLoading(async () => {
      const index = classes.value.findIndex((c) => c.id === editingClass.value.id)
      if (index !== -1) {
        classes.value[index] = {
          ...classes.value[index],
          className: form.className,
          roomName: form.roomName || '',
          description: form.description || '',
          teacher: form.teacher,
          schedule: form.schedule,
          duration: form.duration,
          status: form.status
        }
        saveClasses()
        addHistory('update', {
          type: 'student',
          itemName: form.className,
          itemId: editingClass.value.id,
          description: `Class updated - Class: ${form.className}, Teacher: ${form.teacher}`,
          user: 'Admin'
        })
        showEditConfirmDialog.value = false
        closeDrawer()
        success(`${t('classUpdated')}: "${form.className}" ${t('classUpdatedSuccess')}`)
      }
    }, 'Updating class...')
  } catch (err) {
    showEditConfirmDialog.value = false
    handleError(err, { userMessage: 'Failed to update class. Please try again.' })
  }
}

// Confirm Delete
const confirmDelete = async () => {
  try {
    await withLoading(async () => {
      if (classToDelete.value) {
        const className = classToDelete.value.className
        const index = classes.value.findIndex((c) => c.id === classToDelete.value.id)
        if (index !== -1) {
          const classId = classToDelete.value.id
          classes.value.splice(index, 1)
          saveClasses()
          addHistory('delete', {
            type: 'student',
            itemName: className,
            itemId: classId,
            description: `Class deleted - Class: ${className}`,
            user: 'Admin'
          })
          showDeleteDialog.value = false
          classToDelete.value = null
          success(`${t('classDeleted')}: "${className}" ${t('classDeletedSuccess')}`)
        }
      }
    }, 'Deleting class...')
  } catch (err) {
    showDeleteDialog.value = false
    handleError(err, { userMessage: 'Failed to delete class. Please try again.' })
  }
}

// Confirm Add Students (shows confirmation dialog)
const confirmAddStudents = () => {
  if (selectedStudentIds.value.length === 0) return
  showAddStudentConfirmDialog.value = true
}

// Actually Add Students (after confirmation)
const actuallyAddStudents = async () => {
  try {
    await withLoading(async () => {
      if (selectedClassForStudent.value && selectedStudentIds.value.length > 0) {
        const index = classes.value.findIndex(
          (c) => c.id === selectedClassForStudent.value.id
        )
        if (index !== -1) {
          const existingStudents = classes.value[index].students || []
          const newStudents = selectedStudentIds.value.filter(
            (id) => !existingStudents.includes(id)
          )
          classes.value[index].students = [...existingStudents, ...newStudents]

          // Store join dates for new students
          if (!classes.value[index].studentJoinDates) {
            classes.value[index].studentJoinDates = {}
          }
          const today = new Date().toISOString().split('T')[0]
          newStudents.forEach((studentId) => {
            classes.value[index].studentJoinDates[studentId] = today
          })

          saveClasses()
          addHistory('update', {
            type: 'student',
            itemName: classes.value[index].className,
            itemId: classes.value[index].id,
            description: `Students added to class - Class: ${classes.value[index].className}, Students: ${newStudents.length} student(s)`,
            user: 'Admin'
          })
          showAddStudentConfirmDialog.value = false
          showAddStudentDialog.value = false
          selectedClassForStudent.value = null
          selectedStudentIds.value = []
          studentSearchQuery.value = ''

          // Reload class data if in view mode
          if (isViewMode.value && editingClass.value) {
            const updatedClass = classes.value.find((c) => c.id === editingClass.value.id)
            if (updatedClass) {
              editingClass.value = updatedClass
            }
          }

          success(
            `${t('studentsAdded')}: ${newStudents.length} ${newStudents.length === 1 ? t('student') : t('students')
            } ${t('studentsAddedSuccess')}`
          )
        }
      }
    }, 'Adding students...')
  } catch (err) {
    showAddStudentConfirmDialog.value = false
    handleError(err, { userMessage: 'Failed to add students. Please try again.' })
  }
}

// Handle delete student from class
const handleDeleteStudentFromClass = (student) => {
  studentToDeleteFromClass.value = student
  showDeleteStudentDialog.value = true
}

// Confirm delete student from class
const confirmDeleteStudentFromClass = async () => {
  try {
    await withLoading(async () => {
      if (studentToDeleteFromClass.value && editingClass.value) {
        const index = classes.value.findIndex((c) => c.id === editingClass.value.id)
        if (index !== -1) {
          const studentId = studentToDeleteFromClass.value.id
          classes.value[index].students = classes.value[index].students.filter(
            (id) => id !== studentId
          )

          // Remove join date
          if (classes.value[index].studentJoinDates) {
            delete classes.value[index].studentJoinDates[studentId]
          }

          saveClasses()
          const studentName = studentToDeleteFromClass.value.name || studentId
          addHistory('update', {
            type: 'student',
            itemName: classes.value[index].className,
            itemId: classes.value[index].id,
            description: `Student removed from class - Class: ${classes.value[index].className}, Student: ${studentName}`,
            user: 'Admin'
          })
          showDeleteStudentDialog.value = false
          studentToDeleteFromClass.value = null

          // Update editing class
          const updatedClass = classes.value.find((c) => c.id === editingClass.value.id)
          if (updatedClass) {
            editingClass.value = updatedClass
          }

          success(
            `${t('studentDeleted')}: "${studentName}" ${t('studentDeletedSuccess')}`
          )
        }
      }
    }, 'Removing student...')
  } catch (err) {
    showDeleteStudentDialog.value = false
    handleError(err, { userMessage: 'Failed to remove student. Please try again.' })
  }
}

// Close action menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('[data-action-menu-root]')) {
    activeActionMenu.value = null
  }
}

// Storage listener (sync between tabs)
const storageListener = (e) => {
  if (e.key === 'classes_data') {
    loadClasses()
  }
  if (e.key === 'students_data') {
    loadStudents()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  loadClasses()
  loadStudents()
  window.addEventListener('storage', storageListener)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('storage', storageListener)
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
