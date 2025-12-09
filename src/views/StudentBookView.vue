<template>
  <div :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Students Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('totalStudents') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">{{ totalStudents }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Books Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('totalBooks') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">{{ totalBooks }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Books Issued Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('totalBooksIssued') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">{{ totalBooksIssued }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Students with Books Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">{{ t('studentsWithBooks') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">{{ studentsWithBooks }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Student Books Table -->
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
                @click="clearAllFilters"
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
            <th class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('no') }}</th>
            <th class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('student') }}</th>
            <th class="px-3 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('contact') }}</th>
            <th class="px-3 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('books') }}</th>
            <th class="px-2 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">{{ t('action') }}</th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <!-- No Results Found -->
          <tr v-if="filteredStudentBooks.length === 0 && (searchQuery || filterDateFrom || filterDateTo)">
            <td colspan="5" class="px-4 py-12 text-center">
              <div class="flex flex-col items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ t('noResults') }}</p>
              </div>
            </td>
          </tr>
          <!-- Student Book Rows -->
          <tr
            v-for="(studentBook, index) in filteredStudentBooks"
            :key="studentBook.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <td class="px-2 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">{{ index + 1 }}</td>
            <!-- Student Column: Image, English, Khmer, ID -->
            <td class="px-3 py-3 text-xs">
              <div class="flex items-center gap-2">
                <!-- Student Image -->
                <div class="w-10 h-10 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                  <img v-if="studentBook.student.profileImage" 
                    :src="studentBook.student.profileImage" 
                    :alt="studentBook.student.nameEnglish || studentBook.student.name"
                    class="w-full h-full object-cover"
                  />
                  <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                    {{ getInitials(studentBook.student.nameEnglish || studentBook.student.nameKhmer || studentBook.student.name) }}
              </span>
                </div>
                <!-- Student Info -->
                <div class="flex-1 min-w-0">
                  <div class="font-medium text-gray-900 dark:text-white">
                    {{ studentBook.student.nameKhmer || studentBook.student.nameEnglish || studentBook.student.name }}
                  </div>
                  <div class="text-[10px] text-gray-600 dark:text-gray-400 mt-0.5">
                    {{ studentBook.student.nameEnglish || studentBook.student.name }}
                  </div>
                  <div class="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                    {{ studentBook.student.id }}
                  </div>
                </div>
              </div>
            </td>
            <!-- Contact Column: Phone, Email -->
            <td class="px-3 py-3 text-xs">
              <div class="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{{ studentBook.student.contact || studentBook.student.phone || 'N/A' }}</span>
              </div>
              <div class="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="truncate">{{ studentBook.student.email || 'N/A' }}</span>
              </div>
            </td>
            <!-- Books Column: Clickable total books -->
            <td class="px-3 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
              <button
                @click="handleViewBooks(studentBook)"
                class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-[10px] font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-pointer"
              >
                {{ getTotalBooksCount(studentBook) }} {{ t('books') }}
              </button>
            </td>
            <!-- Action Column: Edit, Update, Delete -->
            <td class="px-2 py-3 whitespace-nowrap text-xs font-medium">
              <div class="relative" data-action-menu-root>
                <button @click.stop="toggleActionMenu(studentBook.id)"
                  class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  title="Actions">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>

                <!-- Dropdown Menu -->
                <div v-if="activeActionMenu === studentBook.id"
                  class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                  <button @click="handleEdit(studentBook)"
                    class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    {{ t('edit') }}
                  </button>

                  <button @click="handleUpdate(studentBook)"
                    class="w-full text-left px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    {{ t('update') }}
                  </button>

                  <button @click="handleDelete(studentBook)"
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
    
    <!-- Add Student with Books Drawer -->
    <Transition name="drawer">
      <div
        v-if="showAddDrawer"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click.self="showAddDrawer = false"
      >
        <div class="absolute right-0 top-0 h-full w-full max-w-2xl bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white">{{ t('addStudentBooks') }}</h2>
            </div>
            <button
              @click="closeAddDrawer"
              class="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="p-6 space-y-6">
            <!-- Search Student -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ t('searchStudent') }}</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  v-model="studentSearchQuery"
                  type="text"
                  :placeholder="t('searchStudentPlaceholder')"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]"
                />
              </div>
            </div>
            
            <!-- Student Selection Table -->
            <div v-if="filteredAvailableStudents.length > 0" class="border border-gray-200 dark:border-gray-700 rounded-sm">
              <div class="max-h-[200px] overflow-y-auto">
                <table class="w-full">
                  <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('student') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('contact') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('course') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('province') }}</th>
                      <th class="px-3 py-2 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('action') }}</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr
                      v-for="student in filteredAvailableStudents"
                      :key="student.id"
                      class="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td class="px-3 py-2 text-xs text-gray-900 dark:text-white">{{ student.name }}</td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">{{ student.contact || 'N/A' }}</td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">{{ student.course || 'N/A' }}</td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">{{ student.province || 'N/A' }}</td>
                      <td class="px-3 py-2 text-center">
                        <button
                          @click="selectStudent(student)"
                          class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xs font-medium"
                        >
                          {{ t('select') }}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div v-else-if="studentSearchQuery" class="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
              {{ t('noStudentsFound') }}
            </div>
            
            <!-- Selected Student and Books Section -->
            <div v-if="selectedStudent" class="border border-gray-200 dark:border-gray-700 rounded-sm p-4">
              <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between mb-4">
                <div>
                  <h3 class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('selectedStudent') }}: {{ selectedStudent.name }}</h3>
                  <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ selectedStudent.id }} � {{ selectedStudent.course || 'N/A' }}</p>
                </div>
                <button
                  @click="selectedStudent = null; formBooks = []"
                  class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-xs"
                >
                  {{ t('change') }}
                </button>
              </div>
              
              <!-- Books Table -->
              <div>
                <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between mb-3">
                  <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('books') }}</h4>
                  <button
                    @click="addNewBook"
                    class="px-3 py-2 text-xs bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors flex items-center gap-1 h-[37px]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    {{ t('add') }}
                  </button>
                </div>
                
                <div class="border border-gray-200 dark:border-gray-700 rounded-sm overflow-hidden">
                  <table class="w-full">
                    <thead class="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('bookNo') }}</th>
                        <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('bookName') }}</th>
                        <th class="px-3 py-2 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('qty') }}</th>
                        <th class="px-3 py-2 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"></th>
                      </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr v-if="formBooks.length === 0">
                        <td colspan="4" class="px-3 py-4 text-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                          {{ t('noBooksAdded') }}
                        </td>
                      </tr>
                      <tr
                        v-for="(book, index) in formBooks"
                        :key="index"
                        class="hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td class="px-3 py-2">
                          <input
                            v-model="book.bookNo"
                            type="text"
                            :placeholder="t('bookNo')"
                            class="w-full px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-[37px]"
                          />
                        </td>
                        <td class="px-3 py-2">
                          <input
                            v-model="book.bookName"
                            type="text"
                            :placeholder="t('bookName')"
                            class="w-full px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-[37px]"
                          />
                        </td>
                        <td class="px-3 py-2">
                          <input
                            v-model.number="book.qty"
                            type="number"
                            min="1"
                            :placeholder="t('qty')"
                            class="w-full px-3 py-2  text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-center h-[37px]"
                          />
                        </td>
                        <td class="px-3 py-2 text-center">
                          <button
                            @click="removeBook(index)"
                            class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                            :title="t('delete')"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <!-- Submit Button -->
              <div class="mt-4 flex gap-3">
                <button
                  @click="handleSubmit"
                  :disabled="!selectedStudent || formBooks.length === 0"
                  class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {{ t('add') }}
                </button>
                <button
                  @click="closeAddDrawer"
                  class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
                >
                  {{ t('cancel') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    
    <!-- View Books Drawer -->
    <Transition name="drawer">
      <div
        v-if="showBooksDrawer"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click.self="showBooksDrawer = false"
      >
        <div class="absolute right-0 top-0 h-full w-full max-w-4xl bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white">{{ t('books') }}</h2>
            </div>
            <button
              @click="showBooksDrawer = false"
              class="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div v-if="selectedStudentBook" class="p-6 space-y-4">
            <!-- Total Books Card -->
            <div class="bg-blue-50 dark:bg-blue-900/30 rounded-sm p-4 border border-blue-200 dark:border-blue-800">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{{ t('totalBooks') }}</h3>
                  <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ getTotalBooksCount(selectedStudentBook) }}</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
              </div>
              </div>
            </div>
            
            <!-- Books Table -->
            <div>
              <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-3">{{ t('books') }}</h3>
              <div class="border border-gray-200 dark:border-gray-700 rounded-sm overflow-hidden">
                <table class="w-full">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('no') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('bookName') }}</th>
                      <th class="px-3 py-2 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('qty') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('created') || 'Created' }}</th>
                      <th class="px-3 py-2 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr v-if="selectedStudentBook.books.length === 0">
                      <td colspan="5" class="px-3 py-4 text-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        {{ t('noBooks') }}
                      </td>
                    </tr>
                    <tr
                      v-for="(book, index) in selectedStudentBook.books"
                      :key="index"
                      class="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">{{ index + 1 }}</td>
                      <td class="px-3 py-2 text-xs text-gray-900 dark:text-white">{{ book.bookName }}</td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300 text-center">{{ book.qty }}</td>
                      <td class="px-3 py-2 text-xs text-gray-700 dark:text-gray-300">{{ formatDate(book.created || selectedStudentBook.created) }}</td>
                      <td class="px-3 py-2 text-center">
                        <button
                          @click="handleDeleteBook(selectedStudentBook, index)"
                          class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                          :title="t('delete')"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              
            <!-- Close Button -->
            <div class="pt-4">
                <button
                @click="showBooksDrawer = false"
                class="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                {{ t('close') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    
    <!-- Edit/Update Drawer -->
    <Transition name="drawer">
      <div
        v-if="showEditDrawer"
        class="fixed inset-0 bg-black bg-opacity-50 z-50"
        @click.self="showEditDrawer = false"
      >
        <div class="absolute right-0 top-0 h-full w-full max-w-2xl bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
          <div class="sticky top-0 bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between z-10 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-sm flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-black dark:text-white">{{ isEditMode ? t('edit') : t('update') }} {{ t('books') }}</h2>
            </div>
            <button
              @click="closeEditDrawer"
              class="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div v-if="editingStudentBook" class="p-6 space-y-6">
            <!-- Student Info (Read-only) -->
            <div class="pb-4 border-b border-gray-200 dark:border-gray-700">
              <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-2">{{ t('studentInformation') }}</h3>
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900">
                  <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm">{{ getInitials(editingStudentBook.student.name) }}</span>
                </div>
                <div>
                  <h4 class="text-base font-semibold text-gray-900 dark:text-white">{{ editingStudentBook.student.name }}</h4>
                  <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{{ editingStudentBook.student.id }}</p>
                </div>
              </div>
            </div>
            
            <!-- Books Table -->
            <div>
              <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between mb-3">
                <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('books') }}</h4>
                <button
                  @click="addBookToEdit"
                  class="px-3 py-2 text-xs bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors flex items-center gap-1 h-[37px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                  {{ t('add') }}
                </button>
              </div>
              
              <div class="border border-gray-200 dark:border-gray-700 rounded-sm overflow-hidden">
                <table class="w-full">
                  <thead class="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('bookNo') }}</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('bookName') }}</th>
                      <th class="px-3 py-2 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase">{{ t('qty') }}</th>
                      <th class="px-3 py-2 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase"></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr v-if="editBooks.length === 0">
                      <td colspan="4" class="px-3 py-4 text-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        {{ t('noBooksAdded') }}
                      </td>
                    </tr>
                    <tr
                      v-for="(book, index) in editBooks"
                      :key="index"
                      class="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td class="px-3 py-2">
                        <input
                          v-model="book.bookNo"
                          type="text"
                          :placeholder="t('bookNo')"
                          class="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-[37px]"
                        />
                      </td>
                      <td class="px-3 py-2">
                        <input
                          v-model="book.bookName"
                          type="text"
                          :placeholder="t('bookName')"
                          class="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-[37px]"
                        />
                      </td>
                      <td class="px-3 py-2">
                        <input
                          v-model.number="book.qty"
                          type="number"
                          min="1"
                          :placeholder="t('qty')"
                          class="w-full px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-center h-[37px]"
                        />
                      </td>
                      <td class="px-3 py-2 text-center">
                        <button
                          @click="removeBookFromEdit(index)"
                          class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                          :title="t('delete')"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <!-- Submit Button -->
            <div class="flex gap-3 pt-4">
              <button
                @click="handleSaveEdit"
                class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
              >
                {{ t('save') }}
              </button>
              <button
                @click="closeEditDrawer"
                class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
              >
                {{ t('cancel') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    
    <!-- Delete Confirmation Dialog -->
    <div
      v-if="showDeleteDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showDeleteDialog = false"
    >
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('delete') }} {{ t('studentBooks') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureDelete') || 'Are you sure you want to delete this student book record?' }}</p>
          </div>
        </div>
        <div v-if="studentBookToDelete" class="mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p><span class="font-medium">{{ t('student') }}:</span> {{ studentBookToDelete.student.name }}</p>
          <p><span class="font-medium">{{ t('books') }}:</span> {{ getTotalBooksCount(studentBookToDelete) }} {{ t('books') }}</p>
        </div>
        <div class="flex gap-3 justify-end">
          <button
            @click="showDeleteDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {{ t('cancel') }}
          </button>
          <button
            @click="confirmDelete"
            class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium"
          >
            {{ t('yes') }}, {{ t('delete') }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Delete Book Confirmation Dialog -->
    <div
      v-if="showDeleteBookDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]"
      @click.self="showDeleteBookDialog = false"
    >
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('delete') }} {{ t('bookName') }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ t('areYouSureDeleteBook') || 'Are you sure you want to delete this book?' }}</p>
          </div>
        </div>
        <div v-if="bookToDelete" class="mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p><span class="font-medium">{{ t('bookName') }}:</span> {{ bookToDelete.bookName }}</p>
          <p><span class="font-medium">{{ t('bookNo') }}:</span> {{ bookToDelete.bookNo }}</p>
          <p><span class="font-medium">{{ t('qty') }}:</span> {{ bookToDelete.qty }}</p>
        </div>
        <div class="flex gap-3 justify-end">
          <button
            @click="showDeleteBookDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {{ t('cancel') }}
          </button>
          <button
            @click="confirmDeleteBook"
            class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium"
          >
            {{ t('yes') }}, {{ t('delete') }}
          </button>
        </div>
      </div>
    </div>
    
    <!-- Add Book to Student Dialog (in View Drawer) -->
    <div
      v-if="showAddBookDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]"
      @click.self="showAddBookDialog = false"
    >
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between mb-4">
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
          <button
            @click="showAddBookDialog = false"
            class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('bookNo') }} <span class="text-red-500">*</span>
            </label>
            <input
              v-model="newBook.bookNo"
              type="text"
              required
              :placeholder="t('bookNo')"
              class="w-full px-3 py-2  border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-[37px]"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('bookName') }} <span class="text-red-500">*</span>
            </label>
            <input
              v-model="newBook.bookName"
              type="text"
              required
              :placeholder="t('bookName')"
              class="w-full px-3 py-2  border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-[37px]"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('qty') }} <span class="text-red-500">*</span>
            </label>
            <input
              v-model.number="newBook.qty"
              type="number"
              min="1"
              required
              :placeholder="t('qty')"
              class="w-full px-3 py-2  border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-[37px]"
            />
          </div>
        </div>
        
        <div class="flex gap-3 mt-6">
          <button
            @click="showAddBookDialog = false"
            class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            {{ t('cancel') }}
          </button>
          <button
            @click="confirmAddBook"
            class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
          >
            {{ t('add') }}
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

// Load student books from JSON file or localStorage, then merge with student data
const loadStudentBooks = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')
    
    // Load student books and students
    const studentBooksData = await loadDataFromJSON('../data/student_books.json', 'student_books_data')
    const studentsData = await loadDataFromJSON('../data/students.json', 'students_data')
    
    // Merge student books with student data
    studentBooks.value = studentBooksData.map(studentBook => {
      const student = studentsData.find(s => s.id === studentBook.studentId)
      
      return {
        ...studentBook,
        student: student || null
      }
    })
    
    // Save merged data to localStorage
    saveStudentBooks()
  } catch (error) {
    console.error('Error loading student books:', error)
    // Fallback to localStorage
    const saved = localStorage.getItem('student_books_data')
    if (saved) {
      studentBooks.value = JSON.parse(saved)
    } else {
      studentBooks.value = []
    }
  }
}

// Save student books to localStorage
const saveStudentBooks = () => {
  try {
    localStorage.setItem('student_books_data', JSON.stringify(studentBooks.value))
  } catch (error) {
    console.error('Error saving student books:', error)
  }
}

// Load students from JSON file or localStorage
const loadStudents = async () => {
  const { loadDataFromJSON } = await import('../utils/dataLoader')
  allStudents.value = await loadDataFromJSON('../data/students.json', 'students_data')
}

const studentBooks = ref([])
const allStudents = ref([])

const searchQuery = ref('')
const filterDateFrom = ref('')
const filterDateTo = ref('')

// Add drawer state
const showAddDrawer = ref(false)
const studentSearchQuery = ref('')
const selectedStudent = ref(null)
const formBooks = ref([])

// Books drawer state
const showBooksDrawer = ref(false)
const selectedStudentBook = ref(null)

// Edit drawer state
const showEditDrawer = ref(false)
const editingStudentBook = ref(null)
const editBooks = ref([])
const isEditMode = ref(false)

// Delete dialog state
const showDeleteDialog = ref(false)
const studentBookToDelete = ref(null)

// Delete book dialog state
const showDeleteBookDialog = ref(false)
const bookToDelete = ref(null)
const bookToDeleteIndex = ref(-1)

// Action menu state
const activeActionMenu = ref(null)

// Add book dialog state
const showAddBookDialog = ref(false)
const newBook = reactive({
  bookNo: '',
  bookName: '',
  qty: 1
})

// Success/Error message state
// Toast state removed - now using global ToastContainer

// Computed properties
const filteredStudentBooks = computed(() => {
  let filtered = studentBooks.value
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(sb => 
      (sb.student.name && sb.student.name.toLowerCase().includes(query)) ||
      (sb.student.nameEnglish && sb.student.nameEnglish.toLowerCase().includes(query)) ||
      (sb.student.nameKhmer && sb.student.nameKhmer.toLowerCase().includes(query)) ||
      (sb.student.id && sb.student.id.toLowerCase().includes(query)) ||
      (sb.student.contact && sb.student.contact.toLowerCase().includes(query)) ||
      (sb.student.phone && sb.student.phone.toLowerCase().includes(query)) ||
      (sb.student.email && sb.student.email.toLowerCase().includes(query)) ||
      (sb.student.course && sb.student.course.toLowerCase().includes(query)) ||
      (sb.student.province && sb.student.province.toLowerCase().includes(query))
    )
  }
  
  // Apply date range filter
  if (filterDateFrom.value || filterDateTo.value) {
    filtered = filtered.filter(studentBook => {
      if (!studentBook.created) return false
      
      const createdDate = new Date(studentBook.created)
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


// Get available students (not already in studentBooks)
const availableStudents = computed(() => {
  const existingStudentIds = new Set(studentBooks.value.map(sb => sb.student.id))
  return allStudents.value.filter(student => !existingStudentIds.has(student.id))
})

// Filter available students by search query
const filteredAvailableStudents = computed(() => {
  if (!studentSearchQuery.value) return availableStudents.value
  
  const query = studentSearchQuery.value.toLowerCase()
  return availableStudents.value.filter(student =>
    student.name.toLowerCase().includes(query) ||
    student.id.toLowerCase().includes(query) ||
    (student.contact && student.contact.toLowerCase().includes(query)) ||
    (student.course && student.course.toLowerCase().includes(query)) ||
    (student.province && student.province.toLowerCase().includes(query))
  )
})

const totalStudents = computed(() => studentBooks.value.length)

const totalBooks = computed(() => {
  const uniqueBooks = new Set()
  studentBooks.value.forEach(sb => {
    sb.books.forEach(book => {
      uniqueBooks.add(book.bookNo)
    })
  })
  return uniqueBooks.size
})

const totalBooksIssued = computed(() => {
  return studentBooks.value.reduce((sum, sb) => {
    return sum + sb.books.reduce((bookSum, book) => bookSum + (book.qty || 1), 0)
  }, 0)
})

const studentsWithBooks = computed(() => {
  return studentBooks.value.filter(sb => sb.books && sb.books.length > 0).length
})

// Clear all filters
const clearAllFilters = () => {
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

// Add drawer functions
const openAddDrawer = () => {
  showAddDrawer.value = true
  studentSearchQuery.value = ''
  selectedStudent.value = null
  formBooks.value = []
  loadStudents()
}

const closeAddDrawer = () => {
  showAddDrawer.value = false
  studentSearchQuery.value = ''
  selectedStudent.value = null
  formBooks.value = []
}

const selectStudent = (student) => {
  selectedStudent.value = student
  formBooks.value = []
}

const addNewBook = () => {
  formBooks.value.push({
    bookNo: '',
    bookName: '',
    qty: 1
  })
}

const removeBook = (index) => {
  formBooks.value.splice(index, 1)
}

// Handle submit
const handleSubmit = async () => {
  if (!selectedStudent.value) {
    error(`${t('error')}: ${t('pleaseSelectStudent')}`)
    return
  }
  
  if (formBooks.value.length === 0) {
    error(`${t('error')}: ${t('pleaseAddAtLeastOneBook')}`)
    return
  }
  
  // Validate all books have required fields
  for (const book of formBooks.value) {
    if (!book.bookNo || !book.bookName || !book.qty || book.qty < 1) {
      error(`${t('validationError')}: ${t('pleaseFillAllBookFields')}`)
      return
    }
  }
  
  try {
    await withLoading(async () => {
      const newStudentBook = {
        id: `SB${String(studentBooks.value.length + 1).padStart(3, '0')}`,
        studentId: selectedStudent.value.id,
        student: selectedStudent.value,
        books: formBooks.value.map(book => ({
          bookNo: book.bookNo,
          bookName: book.bookName,
          qty: book.qty
        })),
        created: new Date().toISOString().split('T')[0]
      }
      
      studentBooks.value.push(newStudentBook)
      saveStudentBooks()
      addHistory('add', {
        type: 'student',
        itemName: selectedStudent.value.name,
        itemId: newStudentBook.id,
        description: `Student books added - Student: ${selectedStudent.value.name}, Books: ${formBooks.value.length} book(s)`,
        user: 'Admin'
      })
      closeAddDrawer()
      success(`${t('studentBooksAdded')}: "${selectedStudent.value.name}" ${t('studentBooksAddedSuccess')}`)
    }, 'Adding student books...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to add student books. Please try again.' })
  }
}

// Get total books count
const getTotalBooksCount = (studentBook) => {
  if (!studentBook || !studentBook.books) return 0
  return studentBook.books.reduce((sum, book) => sum + (book.qty || 1), 0)
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

// View books
const handleViewBooks = (studentBook) => {
  selectedStudentBook.value = studentBook
  showBooksDrawer.value = true
  activeActionMenu.value = null
}

// Action menu functions
const toggleActionMenu = (studentBookId) => {
  activeActionMenu.value = activeActionMenu.value === studentBookId ? null : studentBookId
}

// Handle edit
const handleEdit = (studentBook) => {
  editingStudentBook.value = studentBook
  editBooks.value = JSON.parse(JSON.stringify(studentBook.books))
  isEditMode.value = true
  showEditDrawer.value = true
  activeActionMenu.value = null
}

// Handle update (same as edit for now)
const handleUpdate = (studentBook) => {
  handleEdit(studentBook)
}

// Handle delete
const handleDelete = (studentBook) => {
  studentBookToDelete.value = studentBook
  showDeleteDialog.value = true
  activeActionMenu.value = null
}

// Confirm delete
const confirmDelete = async () => {
  if (!studentBookToDelete.value) return
  
  try {
    await withLoading(async () => {
      const index = studentBooks.value.findIndex(sb => sb.id === studentBookToDelete.value.id)
      if (index !== -1) {
        const studentName = studentBooks.value[index].student.name
        const studentBookId = studentBooks.value[index].id
        studentBooks.value.splice(index, 1)
        saveStudentBooks()
        addHistory('delete', {
          type: 'student',
          itemName: studentName,
          itemId: studentBookId,
          description: `Student books deleted - Student: ${studentName}`,
          user: 'Admin'
        })
        showDeleteDialog.value = false
        studentBookToDelete.value = null
        success(`${t('studentBooksDeleted') || 'Student Books Deleted'}: "${studentName}" ${t('studentBooksDeletedSuccess') || 'has been successfully deleted!'}`)
      }
    }, 'Deleting student books...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to delete student books. Please try again.' })
  }
}

// Handle delete book
const handleDeleteBook = (studentBook, bookIndex) => {
  bookToDelete.value = studentBook.books[bookIndex]
  bookToDeleteIndex.value = bookIndex
  showDeleteBookDialog.value = true
}

// Confirm delete book
const confirmDeleteBook = async () => {
  if (!bookToDelete.value || bookToDeleteIndex.value === -1 || !selectedStudentBook.value) return
  
  try {
    await withLoading(async () => {
      const index = studentBooks.value.findIndex(sb => sb.id === selectedStudentBook.value.id)
      if (index !== -1) {
        const bookName = studentBooks.value[index].books[bookToDeleteIndex.value].bookName
        const studentName = studentBooks.value[index].student.name
        studentBooks.value[index].books.splice(bookToDeleteIndex.value, 1)
        saveStudentBooks()
        addHistory('delete', {
          type: 'student',
          itemName: studentName,
          itemId: selectedStudentBook.value.id,
          description: `Book deleted from student - Student: ${studentName}, Book: ${bookName}`,
          user: 'Admin'
        })
        // Update the selected student book reference
        selectedStudentBook.value = studentBooks.value[index]
        showDeleteBookDialog.value = false
        bookToDelete.value = null
        bookToDeleteIndex.value = -1
        success(`${t('bookDeleted')}: "${bookName}" ${t('bookDeletedSuccess')}`)
      }
    }, 'Deleting book...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to delete book. Please try again.' })
  }
}

// Edit drawer functions
const closeEditDrawer = () => {
  showEditDrawer.value = false
  editingStudentBook.value = null
  editBooks.value = []
  isEditMode.value = false
}

const addBookToEdit = () => {
  editBooks.value.push({
    bookNo: '',
    bookName: '',
    qty: 1
  })
}

const removeBookFromEdit = (index) => {
  editBooks.value.splice(index, 1)
}

const handleSaveEdit = async () => {
  // Validate all books have required fields
  for (const book of editBooks.value) {
    if (!book.bookNo || !book.bookName || !book.qty || book.qty < 1) {
      error(`${t('validationError')}: ${t('pleaseFillAllBookFields')}`)
      return
    }
  }
  
  try {
    await withLoading(async () => {
      const index = studentBooks.value.findIndex(sb => sb.id === editingStudentBook.value.id)
      if (index !== -1) {
        studentBooks.value[index].books = JSON.parse(JSON.stringify(editBooks.value))
        saveStudentBooks()
        closeEditDrawer()
        success(`${t('studentBooksUpdated') || 'Student Books Updated'}: "${editingStudentBook.value.student.name}" ${t('studentBooksUpdatedSuccess') || 'has been successfully updated!'}`)
      }
    }, 'Updating student books...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to update student books. Please try again.' })
  }
}

// Close action menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('[data-action-menu-root]')) {
    activeActionMenu.value = null
  }
}

// Add book to student (in view drawer)
const openAddBookToStudent = () => {
  newBook.bookNo = ''
  newBook.bookName = ''
  newBook.qty = 1
  showAddBookDialog.value = true
}

const confirmAddBook = async () => {
  if (!newBook.bookNo || !newBook.bookName || !newBook.qty || newBook.qty < 1) {
    error(`${t('validationError')}: ${t('pleaseFillAllBookFields')}`)
    return
  }
  
  try {
    await withLoading(async () => {
      if (selectedStudentBook.value) {
        const index = studentBooks.value.findIndex(sb => sb.id === selectedStudentBook.value.id)
        if (index !== -1) {
          studentBooks.value[index].books.push({
            bookNo: newBook.bookNo,
            bookName: newBook.bookName,
            qty: newBook.qty
          })
          saveStudentBooks()
          const studentName = studentBooks.value[index].student.name
          addHistory('add', {
            type: 'student',
            itemName: studentName,
            itemId: selectedStudentBook.value.id,
            description: `Book added to student - Student: ${studentName}, Book: ${newBook.bookName}, Qty: ${newBook.qty}`,
            user: 'Admin'
          })
          // Update the selected student book reference
          selectedStudentBook.value = studentBooks.value[index]
          showAddBookDialog.value = false
          success(`${t('bookAdded')}: "${newBook.bookName}" ${t('bookAddedSuccess')}`)
        }
      }
    }, 'Adding book...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to add book. Please try again.' })
  }
}


// Toast functions - now using composable (already defined above)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  loadStudentBooks()
  loadStudents()
  
  // Listen for storage events
  window.addEventListener('storage', (e) => {
    if (e.key === 'student_books_data') {
      loadStudentBooks()
    }
    if (e.key === 'students_data') {
      loadStudents()
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('storage', loadStudentBooks)
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
