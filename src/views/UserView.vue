<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full capitalize', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Users Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('totalUsers') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalUsers }}</p>
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

      <!-- Active Users Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('activeUsers') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ activeUsers }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2">{{ t('last24Hours') }}</p>
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

      <!-- Male Users Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('maleUsers') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ maleUsers }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2">{{ malePercentage }}% {{
              t('ofTotal') }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Female Users Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">
              {{ t('femaleUsers') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ femaleUsers }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2">{{ femalePercentage }}% {{
              t('ofTotal') }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-pink-600 dark:text-pink-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Users Table with Tabs -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
      <!-- Tabs Navigation -->
      <div class="mb-2 sm:mb-3">
        <div class="flex gap-2 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
            'px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 border-b-2',
            activeTab === tab.id
              ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
              : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
          ]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tab.iconPath" />
            </svg>
            {{ tab.label }}
          </button>
        </div>
      </div>
      <!-- Search Bar -->
      <div class="p-0 mb-2 sm:mb-3">
        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center justify-between">
          <div class="relative w-full sm:w-[400px]">
            <div class="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-500 " fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input v-model="searchQuery" type="text" :placeholder="t('searchByNameEmail')"
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
          <button v-if="activeTab === 'user'" @click="openAddDrawer"
            class="px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 h-[37px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            {{ t('add') }}
          </button>
        </div>
      </div>
      <!-- Scrollable table container with sticky header -->
      <div class="max-h-[600px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm">
        <table class="w-full">
          <!-- Sticky Header -->
          <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
            <tr>
              <!-- User Tab Headers -->
              <template v-if="activeTab === 'user'">
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('no') }}</th>
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('name') }}</th>
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('gender') }}</th>
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('role') || 'Role' }}</th>
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('created') }}</th>
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('loginTime') }}</th>
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('logoutTime') }}</th>
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('totalTime') }}</th>
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                </th>
              </template>
              <!-- Role Tab Headers -->
              <template v-else-if="activeTab === 'role'">
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('no') }}</th>
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('role') || 'Role' }}</th>
                <th
                  class="px-4 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('totalUsers') || 'Total Users' }}</th>
                <th
                  class="px-4 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('activeUsers') || 'Active Users' }}</th>
                <th
                  class="px-4 py-3 text-center text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('inactiveUsers') || 'Inactive Users' }}</th>
                <th
                  class="px-4 py-3 text-left text-[10px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b dark:border-gray-600">
                  {{ t('description') || 'Description' }}</th>
              </template>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <!-- User Tab Rows -->
            <template v-if="activeTab === 'user'">
              <!-- No Results Found -->
              <tr v-if="filteredUsers.length === 0 && searchQuery">
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
              <!-- User Rows -->
              <tr v-for="(user, index) in filteredUsers" :key="user.id"
                class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ index + 1 }}</td>
                <td class="px-4 py-3 text-xs">
                  <div class="flex items-center gap-2">
                    <div
                      class="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-[10px] flex-shrink-0"
                      :class="user.gender === 'Male' || user.gender === t('male') ? 'bg-blue-500' : 'bg-pink-500'">
                      {{ user.name.charAt(0) }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="font-medium text-gray-900 dark:text-white text-xs">{{ user.name }}</div>
                      <div class="flex items-center gap-1 text-[10px] text-gray-500 dark:text-gray-400 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span class="truncate">{{ user.email || '-' }}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-xs">
                  <span class="px-2 py-1 text-xs font-medium rounded-full"
                    :class="(user.gender === 'Male' || user.gender === t('male')) ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' : 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-400'">
                    {{ (user.gender === 'Male' || user.gender === t('male')) ? t('male') : t('female') }}
                  </span>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-xs">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400">
                    {{ getUserRole(user) || 'N/A' }}
                  </span>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{
                  formatDate(user.created) }}</td>
                <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ user.loginTime }}</td>
                <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ user.logoutTime || '-'
                }}</td>
                <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 font-medium">{{
                  calculateTotalTime(user.loginTime, user.logoutTime) }}</td>
                <td class="px-4 py-3 whitespace-nowrap text-xs font-medium">
                  <div class="relative">
                    <button @click="toggleActionMenu(user.id)"
                      class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      title="Actions">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>

                    <!-- Dropdown Menu -->
                    <div v-if="activeActionMenu === user.id"
                      class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-sm shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                      <button @click="handleEdit(user)"
                        class="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        {{ t('edit') }}
                      </button>
                      <button @click="handleDelete(user)"
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
            </template>
            <!-- Role Tab Rows -->
            <template v-else-if="activeTab === 'role'">
              <!-- No Results Found -->
              <tr v-if="filteredRoles.length === 0">
                <td colspan="6" class="px-4 py-12 text-center">
                  <div class="flex flex-col items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ t('noRolesFound') || 'No roles found' }}</p>
                  </div>
                </td>
              </tr>
              <!-- Role Rows -->
              <tr v-for="(role, index) in filteredRoles" :key="role.name"
                class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300">{{ index + 1 }}</td>
                <td class="px-4 py-3 text-xs">
                  <div class="flex items-center gap-2">
                    <div
                      class="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-[10px] flex-shrink-0 bg-purple-500">
                      {{ role.name.charAt(0) }}
                    </div>
                    <div class="font-medium text-gray-900 dark:text-white text-xs">{{ role.name }}</div>
                  </div>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center font-semibold">
                  {{ role.totalUsers }}
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                    {{ role.activeUsers }}
                  </span>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-xs text-gray-700 dark:text-gray-300 text-center">
                  <span class="px-2 py-1 text-xs font-medium rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400">
                    {{ role.inactiveUsers }}
                  </span>
                </td>
                <td class="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">
                  {{ getRoleDescription(role.name) }}
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add/Edit User Drawer -->
    <div v-if="showDrawer" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end" @click.self="closeDrawer">
      <div class="bg-white dark:bg-gray-800 w-[500px] h-full shadow-xl overflow-y-auto">
        <!-- Drawer Header -->
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
            <h2 class="text-xl font-bold text-black dark:text-white capitalize">{{ isEditMode ? t('editUser') : t('add')
            }}</h2>
          </div>
          <button @click="closeDrawer"
            class="text-black dark:text-white hover:bg-gray-100 dark:bg-gray-700 rounded-sm p-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black dark:text-white" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Drawer Content -->
        <div class="p-6">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <!-- Name Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ t('userForm.nameLabel') }} <span class="text-red-500">*</span>
              </label>
              <input v-model="form.name" type="text" required @input="validateNameField('name', form.name, true)"
                @keypress="preventNonNameChars" :placeholder="t('userForm.namePlaceholder')" :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]',
                  errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]" />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.name }}</p>
            </div>

            <!-- Email Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ t('userForm.emailLabel') }} <span class="text-red-500">*</span>
              </label>
              <input v-model="form.email" type="email" required @input="validateEmailField('email', form.email, true)"
                :placeholder="t('userForm.emailPlaceholder')" :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]',
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]" />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.email }}</p>
            </div>

            <!-- Gender Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ t('userForm.genderLabel') }} <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <select v-model="form.gender" required @change="validateSelectField('gender', form.gender, true)"
                  :class="[
                    'w-full px-4 py-2.5 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent appearance-none bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white',
                    errors.gender ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  ]">
                  <option value="">{{ t('userForm.selectGender') }}</option>
                  <option value="Male">{{ t('male') }}</option>
                  <option value="Female">{{ t('female') }}</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400 dark:text-gray-500 " fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <p v-if="errors.gender" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.gender }}</p>
            </div>

            <!-- Role Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ t('role') || 'Role' }}
              </label>
              <div class="relative">
                <select v-model="form.role" @change="validateSelectField('role', form.role, false)"
                  :class="[
                    'w-full px-4 py-2.5 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent appearance-none bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white',
                    errors.role ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  ]">
                  <option value="">{{ t('selectRole') || 'Select Role' }}</option>
                  <option v-for="role in availableRoles" :key="role" :value="role">{{ role }}</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400 dark:text-gray-500 " fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <p v-if="errors.role" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.role }}</p>
            </div>

            <!-- Form Actions -->
            <div class="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button type="button" @click="closeDrawer"
                class="flex-1 px-4 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
                {{ t('cancel') }}
              </button>
              <button type="submit"
                class="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
                {{ isEditMode ? t('update') : t('add') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

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
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('add') }} {{ t('user') }}
            </h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('areYouSure') }} {{ t('add') }} {{ t('user') }}?
          </p>

          <!-- Buttons -->
          <div class="flex gap-3 justify-end">
            <button @click="showAddConfirmDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('no') }}
            </button>
            <button @click="confirmSubmit"
              class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
              {{ t('yes') }}
            </button>
          </div>
        </div>
      </div>
    </div>

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
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('update') }} {{ t('user') }}
            </h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('areYouSure') }} {{ t('update') }} {{ t('user')
          }}?</p>

          <!-- Buttons -->
          <div class="flex gap-3 justify-end">
            <button @click="showUpdateConfirmDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('no') }}
            </button>
            <button @click="confirmSubmit"
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
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('deleteUser') }}</h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('areYouSure') }} {{ t('delete') }} {{ t('user')
          }}?</p>

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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="flex-1">
          <p class="font-semibold text-white">{{ successMessageTitle }}</p>
          <p class="text-sm text-white">{{ successMessageText }}</p>
        </div>
        <button @click="showSuccessMessage = false" class="text-white hover:text-green-100 transition-colors flex-shrink-0">
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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
import { ref, computed, inject, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'
import { useFormValidation } from '../composables/useFormValidation'
import { addHistory } from '../utils/history'
import { textContains } from '../utils/search'
import usersData from '../data/users.json'
import employeesData from '../data/employees.json'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

// Load users from JSON file
const users = ref(usersData)

const activeTab = ref('user')

// Tabs configuration
const tabs = [
  {
    id: 'user',
    label: t('user') || 'User',
    icon: 'svg',
    iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    id: 'role',
    label: t('role') || 'Role',
    icon: 'svg',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  }
]
const searchQuery = ref('')
const showDrawer = ref(false)
const isEditMode = ref(false)
const activeActionMenu = ref(null)
const showDeleteDialog = ref(false)
const showAddConfirmDialog = ref(false)
const showUpdateConfirmDialog = ref(false)
const userToDelete = ref(null)

// Success/Error message state
const showSuccessMessage = ref(false)
const successMessageTitle = ref('')
const successMessageText = ref('')
const showErrorMessage = ref(false)
const errorMessageTitle = ref('')
const errorMessageText = ref('')

// Form data
const form = ref({
  id: null,
  name: '',
  email: '',
  gender: '',
  role: ''
})

// Form validation
const {
  errors,
  validateNameField,
  validateEmailField,
  validateSelectField,
  preventNonNameChars
} = useFormValidation({
  name: '',
  email: '',
  gender: '',
  role: ''
})

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

const toggleActionMenu = (userId) => {
  activeActionMenu.value = activeActionMenu.value === userId ? null : userId
}

const openAddDrawer = () => {
  isEditMode.value = false
  form.value = {
    id: null,
    name: '',
    email: '',
    gender: '',
    role: ''
  }
  // Clear errors
  Object.keys(errors).forEach(key => errors[key] = '')
  showDrawer.value = true
  activeActionMenu.value = null
}

const handleEdit = (user) => {
  isEditMode.value = true
  form.value = {
    id: user.id,
    name: user.name,
    email: user.email,
    gender: user.gender,
    role: user.role || getUserRole(user) || ''
  }
  // Clear errors
  Object.keys(errors).forEach(key => errors[key] = '')
  showDrawer.value = true
  activeActionMenu.value = null
}

const handleDelete = (user) => {
  userToDelete.value = user
  showDeleteDialog.value = true
  activeActionMenu.value = null
}

const confirmDelete = async () => {
  try {
    await withLoading(async () => {
      if (userToDelete.value) {
        const index = users.value.findIndex(u => u.id === userToDelete.value.id)
        if (index !== -1) {
          const userName = userToDelete.value.name
          const userId = userToDelete.value.id
          users.value.splice(index, 1)
          addHistory('delete', {
            type: 'user',
            itemName: userName,
            itemId: userId,
            description: `User "${userName}" deleted`,
            user: 'Admin'
          })
          showSuccessMessage.value = true
          successMessageTitle.value = t('userDeleted') || 'User Deleted'
          successMessageText.value = t('userDeletedSuccess') || 'User has been deleted successfully!'
          setTimeout(() => {
            showSuccessMessage.value = false
          }, 3000)
        }
      }
    }, 'Deleting user...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to delete user. Please try again.' })
  }
  showDeleteDialog.value = false
  userToDelete.value = null
}

// Validate form
const validateForm = () => {
  let isValid = true

  if (!validateNameField('name', form.value.name, true)) {
    isValid = false
  }

  if (!validateEmailField('email', form.value.email, true)) {
    isValid = false
  }

  if (!validateSelectField('gender', form.value.gender, true)) {
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    showErrorMessage.value = true
    errorMessageTitle.value = t('error') || 'Error'
    errorMessageText.value = t('pleaseFixErrors') || 'Please fix the errors in the form'
    setTimeout(() => {
      showErrorMessage.value = false
    }, 3000)
    return
  }

  // Show confirmation dialog
  if (isEditMode.value) {
    showUpdateConfirmDialog.value = true
  } else {
    showAddConfirmDialog.value = true
  }
}

const confirmSubmit = async () => {
  // Close confirmation dialog
  showAddConfirmDialog.value = false
  showUpdateConfirmDialog.value = false

  try {
    await withLoading(async () => {
      if (isEditMode.value) {
        // Update existing user
        const index = users.value.findIndex(u => u.id === form.value.id)
        if (index !== -1) {
          users.value[index] = {
            ...users.value[index],
            name: form.value.name,
            email: form.value.email,
            gender: form.value.gender,
            role: form.value.role || null
          }
          addHistory('update', {
            type: 'user',
            itemName: form.value.name,
            itemId: form.value.id,
            description: `User "${form.value.name}" updated`,
            user: 'Admin'
          })
          showSuccessMessage.value = true
          successMessageTitle.value = t('userUpdated') || 'User Updated'
          successMessageText.value = t('userUpdatedSuccess') || 'User has been updated successfully!'
          setTimeout(() => {
            showSuccessMessage.value = false
          }, 3000)
        }
      } else {
        // Add new user
        const newId = users.value.length > 0 ? Math.max(...users.value.map(u => u.id)) + 1 : 1
        const newUser = {
          id: newId,
          name: form.value.name,
          email: form.value.email,
          gender: form.value.gender,
          role: form.value.role || null,
          created: new Date().toISOString().split('T')[0],
          loginTime: '',
          logoutTime: ''
        }
        users.value.push(newUser)
        addHistory('add', {
          type: 'user',
          itemName: form.value.name,
          itemId: newUser.id,
          description: `User "${form.value.name}" added`,
          user: 'Admin'
        })
        showSuccessMessage.value = true
        successMessageTitle.value = t('userAdded') || 'User Added'
        successMessageText.value = t('userAddedSuccess') || 'User has been added successfully!'
        setTimeout(() => {
          showSuccessMessage.value = false
        }, 3000)
      }
      closeDrawer()
    }, isEditMode.value ? 'Updating user...' : 'Adding user...')
  } catch (err) {
    handleError(err, { userMessage: 'Failed to save user. Please try again.' })
  }
}

const closeDrawer = () => {
  showDrawer.value = false
  isEditMode.value = false
  form.value = {
    id: null,
    name: '',
    email: '',
    gender: '',
    role: ''
  }
}

const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return users.value
  }

  return users.value.filter(user => {
    const userRole = getUserRole(user)
    return textContains(user.name, searchQuery.value) ||
      textContains(user.email || '', searchQuery.value) ||
      textContains(user.gender, searchQuery.value) ||
      (userRole && textContains(userRole, searchQuery.value))
  })
})

// Extract roles from employees data
const roles = computed(() => {
  const roleMap = new Map()
  
  employeesData.forEach(employee => {
    const roleName = employee.role || 'Unknown'
    if (!roleMap.has(roleName)) {
      roleMap.set(roleName, {
        name: roleName,
        totalUsers: 0,
        activeUsers: 0,
        inactiveUsers: 0
      })
    }
    
    const role = roleMap.get(roleName)
    role.totalUsers++
    
    if (employee.status === 'Active') {
      role.activeUsers++
    } else {
      role.inactiveUsers++
    }
  })
  
  return Array.from(roleMap.values()).sort((a, b) => a.name.localeCompare(b.name))
})

const filteredRoles = computed(() => {
  if (!searchQuery.value) {
    return roles.value
  }

  return roles.value.filter(role =>
    textContains(role.name, searchQuery.value)
  )
})

// Get role description
const getRoleDescription = (roleName) => {
  const descriptions = {
    'Manager': 'Manages overall operations and strategic planning',
    'Teacher': 'Provides education and training to students',
    'Administrator': 'Handles administrative tasks and system management',
    'Coordinator': 'Coordinates activities and schedules',
    'Staff': 'General staff member supporting daily operations',
    'Accountant': 'Manages financial records and transactions',
    'Receptionist': 'Handles front office and customer service'
  }
  return descriptions[roleName] || 'System role for user management'
}

// Get available roles from employees
const availableRoles = computed(() => {
  const roleSet = new Set()
  employeesData.forEach(emp => {
    if (emp.role) {
      roleSet.add(emp.role)
    }
  })
  return Array.from(roleSet).sort()
})

// Get user role by matching with employees
const getUserRole = (user) => {
  // Return user's role if it exists in user data (priority)
  if (user.role) {
    return user.role
  }
  
  // Try to match by email first
  const employee = employeesData.find(emp => emp.email === user.email)
  if (employee && employee.role) {
    return employee.role
  }
  
  // Try to match by name (English name)
  const employeeByName = employeesData.find(emp => 
    emp.nameEnglish === user.name || emp.name === user.name
  )
  if (employeeByName && employeeByName.role) {
    return employeeByName.role
  }
  
  return null
}

const totalUsers = computed(() => users.value.length)

const activeUsers = computed(() => {
  // Count users who logged in within last 24 hours
  const now = new Date()
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000)

  return users.value.filter(user => {
    // Parse login time (format: "2024-08-20 10:30:00 AM")
    const loginDate = new Date(user.loginTime)
    return loginDate >= yesterday
  }).length
})

const maleUsers = computed(() => {
  return users.value.filter(user => user.gender === 'Male' || user.gender === t('male')).length
})

const femaleUsers = computed(() => {
  return users.value.filter(user => user.gender === 'Female' || user.gender === t('female')).length
})

const malePercentage = computed(() => {
  return totalUsers.value > 0 ? Math.round((maleUsers.value / totalUsers.value) * 100) : 0
})

const femalePercentage = computed(() => {
  return totalUsers.value > 0 ? Math.round((femaleUsers.value / totalUsers.value) * 100) : 0
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const calculateTotalTime = (loginTime, logoutTime) => {
  if (!loginTime || !logoutTime) {
    return '-'
  }

  try {
    // Parse the date strings (format: "2024-08-20 10:30:00 AM")
    const login = new Date(loginTime)
    const logout = new Date(logoutTime)

    if (isNaN(login.getTime()) || isNaN(logout.getTime())) {
      return '-'
    }

    // Calculate difference in milliseconds
    const diffMs = logout.getTime() - login.getTime()

    if (diffMs < 0) {
      return '-'
    }

    // Convert to hours, minutes, and seconds
    const hours = Math.floor(diffMs / (1000 * 60 * 60))
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000)

    // Format as "Xh Ym" or "Xh Ym Xs" if seconds > 0
    if (hours > 0) {
      if (minutes > 0) {
        return seconds > 0 ? `${hours}h ${minutes}m ${seconds}s` : `${hours}h ${minutes}m`
      }
      return seconds > 0 ? `${hours}h ${seconds}s` : `${hours}h`
    } else if (minutes > 0) {
      return seconds > 0 ? `${minutes}m ${seconds}s` : `${minutes}m`
    } else {
      return `${seconds}s`
    }
  } catch (error) {
    return '-'
  }
}

</script>

<style scoped>
.toast-enter-active {
  transition: all 0.3s ease-out;
}

.toast-leave-active {
  transition: all 0.2s ease-in;
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
