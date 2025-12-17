<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Backup Action Buttons -->
    <div class="mb-4 sm:mb-6 flex flex-wrap gap-3 items-center">
      <button @click="backupSelected" :disabled="isBackingUpAll || selectedCount === 0"
        class="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
        <svg v-if="!isBackingUpAll" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <svg v-else class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
        <span>{{ isBackingUpAll ? (t('backingUp') || 'Backing up...') : (t('backupSelected') || `Backup Selected
          (${selectedCount})`) }}</span>
      </button>

      <button @click="backupAll" :disabled="isBackingUpAll || selectedCount > 0"
        class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
        <svg v-if="!isBackingUpAll" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <svg v-else class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
        <span>{{ isBackingUpAll ? (t('backingUpAll') || 'Backing up all modules...') : (t('backupAll') || 'Backup All Modules') }}</span>
      </button>

      <div class="flex items-center gap-2 ml-auto">
        <button @click="selectAll"
          class="px-4 py-2 text-sm bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-md transition-colors font-medium">
          {{ t('selectAll') || 'Select All' }}
        </button>
        <button @click="deselectAll"
          class="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md transition-colors font-medium">
          {{ t('deselectAll') || 'Deselect All' }}
        </button>
      </div>
    </div>

    <!-- Modules Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <div v-for="module in modules" :key="module.id" :class="[
        'bg-white dark:bg-gray-800 rounded-md shadow-md hover:shadow-lg transition-all duration-200 border-2 p-4 sm:p-6',
        module.selected
          ? 'border-blue-500 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/20'
          : 'border-gray-200 dark:border-gray-700'
      ]">
        <!-- Module Header with Checkbox in Top Right -->
        <div class="flex items-start justify-between mb-4 relative">
          <div class="flex items-center gap-3 flex-1">
            <div :class="[
              'w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0',
              module.iconBg
            ]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :class="module.iconColor" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="module.iconPath" />
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white">{{ t(module.nameKey || module.name) ||
                module.name }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ t(module.descriptionKey || module.description) ||
                module.description }}</p>
            </div>
          </div>
          <!-- Checkbox in Top Right -->
          <label class="flex items-center cursor-pointer absolute top-0 right-0">
            <input type="checkbox" v-model="module.selected" :disabled="module.isBackingUp || isBackingUpAll"
              class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
          </label>
        </div>

        <!-- Module Stats -->
        <div class="mb-4 space-y-2">
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-600 dark:text-gray-400">{{ t('totalRecords') || 'Total Records' }}:</span>
            <span class="font-semibold text-gray-900 dark:text-white">{{ module.recordCount || 0 }}</span>
          </div>
          <div v-if="module.lastBackup" class="flex items-center justify-between text-sm">
            <span class="text-gray-600 dark:text-gray-400">{{ t('lastBackup') || 'Last Backup' }}:</span>
            <span class="text-gray-900 dark:text-white">{{ formatDate(module.lastBackup) }}</span>
          </div>
          <div v-if="module.backupStatus" class="flex items-center justify-between text-sm">
            <span class="text-gray-600 dark:text-gray-400">{{ t('status') || 'Status' }}:</span>
            <span :class="[
              'px-2 py-1 rounded-full text-xs font-medium',
              module.backupStatus === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                module.backupStatus === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            ]">
              {{ getStatusText(module.backupStatus) }}
            </span>
          </div>
        </div>

        <!-- Backup and Download Buttons (same line) -->
        <div class="flex gap-2">
          <button @click="backupModule(module.id)" :disabled="module.isBackingUp || isBackingUpAll" :class="[
            'flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5',
            module.isBackingUp
              ? 'bg-gray-400 dark:bg-gray-600 text-white cursor-not-allowed'
              : module.selected
                ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
          ]">
            <svg v-if="!module.isBackingUp" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <svg v-else class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            <span class="text-xs">{{ module.isBackingUp ? (t('backingUp') || 'Backing up...') : (t('backupNow') ||
              'Backup') }}</span>
          </button>

          <!-- Download Button (if backup exists) -->
          <button v-if="module.lastBackup" @click="downloadBackup(module.id)"
            class="px-3 py-2 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-200 flex items-center justify-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="text-xs">{{ t('download') || 'Download' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Backup History Section -->
    <div class="bg-white dark:bg-gray-800 rounded-md shadow-md border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
          {{ t('backupHistory') || 'Backup History' }}
        </h2>
        <div class="flex items-center gap-2">
          <button v-if="selectedHistoryCount > 0" @click="downloadSelectedHistory"
            class="px-3 py-1.5 text-sm bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {{ t('downloadSelected') || `Download Selected (${selectedHistoryCount})` }}
          </button>
          <button @click="refreshHistory"
            class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ t('refresh') || 'Refresh' }}
          </button>
        </div>
      </div>

      <!-- Scrollable table container with sticky header -->
      <div class="max-h-[600px] overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-md">
        <table class="w-full text-left">
          <!-- Sticky Header -->
          <thead class="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
            <tr>
              <th class="px-4 py-3 text-center">
                <label class="flex items-center justify-center cursor-pointer">
                  <input type="checkbox" :checked="allHistorySelected" @change="toggleSelectAllHistory"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer">
                </label>
              </th>
              <th
                class="px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('module') || 'Module' }}
              </th>
              <th
                class="px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('date') || 'Date' }}
              </th>
              <th
                class="px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('records') || 'Records' }}
              </th>
              <th
                class="px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('fileSize') || 'File Size' }}
              </th>
              <th
                class="px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('status') || 'Status' }}
              </th>
              <th
                class="px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider border-b dark:border-gray-600">
                {{ t('actions') || 'Actions' }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="history in backupHistory" :key="history.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              :class="{ 'bg-blue-50/50 dark:bg-blue-900/20': selectedHistoryItems.includes(history.id) }">
              <td class="px-4 py-3 text-center">
                <label class="flex items-center justify-center cursor-pointer">
                  <input type="checkbox" :value="history.id" v-model="selectedHistoryItems"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer">
                </label>
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                  <div :class="['w-8 h-8 rounded flex items-center justify-center', getModuleIcon(history.module).bg]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="getModuleIcon(history.module).color"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        :d="getModuleIcon(history.module).path" />
                    </svg>
                  </div>
                  <span class="text-sm font-medium text-gray-900 dark:text-white">{{ history.module }}</span>
                </div>
              </td>
              <td class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                {{ formatDateTime(history.date) }}
              </td>
              <td class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                {{ history.records.toLocaleString() }}
              </td>
              <td class="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                {{ formatFileSize(history.fileSize) }}
              </td>
              <td class="px-4 py-3">
                <span :class="[
                  'px-2 py-1 rounded-md text-xs font-medium',
                  history.status === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    history.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                ]">
                  {{ getStatusText(history.status) }}
                </span>
              </td>
              <td class="px-4 py-3">
                <button @click="downloadBackup(history.module)"
                  class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  :title="t('download') || 'Download'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr v-if="backupHistory.length === 0">
              <td colspan="7" class="px-4 py-12 text-center">
                <div class="flex flex-col items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ t('noBackupHistory') || 'No backup history available' }}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Backup Confirmation Dialog -->
    <div v-if="showBackupConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showBackupConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex-1">
          <!-- Title with icon -->
          <div class="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">
              {{ pendingBackupModuleId === 'selected' ? (t('backupSelected') || 'Backup Selected') : (t('backupNow') ||
                'Backup') }}
            </h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {{ pendingBackupModuleId === 'selected'
              ? (t('backupSelectedConfirm') || `Are you sure you want to backup ${selectedCount} selected module(s)?`)
              : (t('backupConfirm') || 'Are you sure you want to backup this module?')
            }}
          </p>

          <!-- Buttons -->
          <div class="flex gap-3 justify-end">
            <button @click="showBackupConfirmDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('no') || 'No' }}
            </button>
            <button @click="pendingBackupModuleId === 'selected' ? confirmBackupSelected() : confirmBackupModule()"
              class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
              {{ t('yes') || 'Yes' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Backup All Confirmation Dialog -->
    <div v-if="showBackupAllConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showBackupAllConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex-1">
          <!-- Title with icon -->
          <div class="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">
              {{ t('backupAll') || 'Backup All Modules' }}
            </h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {{ t('backupAllConfirm') || 'Are you sure you want to backup all modules? This may take a few moments.' }}
          </p>

          <!-- Buttons -->
          <div class="flex gap-3 justify-end">
            <button @click="showBackupAllConfirmDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('no') || 'No' }}
            </button>
            <button @click="confirmBackupAll"
              class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
              {{ t('yes') || 'Yes' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Download Confirmation Dialog -->
    <div v-if="showDownloadConfirmDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showDownloadConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex-1">
          <!-- Title with icon -->
          <div class="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">
              {{ t('download') || 'Download Backup' }}
            </h3>
          </div>

          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {{ t('downloadConfirm') || 'Are you sure you want to download this backup file?' }}
          </p>

          <!-- Buttons -->
          <div class="flex gap-3 justify-end">
            <button @click="showDownloadConfirmDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('no') || 'No' }}
            </button>
            <button @click="confirmDownloadBackup"
              class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium">
              {{ t('yes') || 'Yes' }}
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
  </div>
</template>

<script setup>
import { ref, inject, onMounted, computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useNotifications } from '../composables/useNotifications'

const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { notifyBackupSuccess } = useNotifications()

// Modules configuration
const modules = ref([
  {
    id: 'students',
    nameKey: 'students',
    descriptionKey: 'studentsDescription',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'employees',
    nameKey: 'employee',
    descriptionKey: 'employeesDescription',
    iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'products',
    nameKey: 'product',
    descriptionKey: 'productsDescription',
    iconPath: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'sales',
    nameKey: 'pos',
    descriptionKey: 'salesDescription',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'categories',
    nameKey: 'category',
    descriptionKey: 'categoriesDescription',
    iconPath: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'incomes',
    nameKey: 'income',
    descriptionKey: 'incomesDescription',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'expenses',
    nameKey: 'expense',
    descriptionKey: 'expensesDescription',
    iconPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    iconBg: 'bg-red-100 dark:bg-red-900/30',
    iconColor: 'text-red-600 dark:text-red-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'investments',
    nameKey: 'investment',
    descriptionKey: 'investmentsDescription',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'users',
    nameKey: 'user',
    descriptionKey: 'usersDescription',
    iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'classes',
    nameKey: 'classManagement',
    descriptionKey: 'classesDescription',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    iconBg: 'bg-violet-100 dark:bg-violet-900/30',
    iconColor: 'text-violet-600 dark:text-violet-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'courses',
    nameKey: 'courseManagement',
    descriptionKey: 'coursesDescription',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    iconBg: 'bg-pink-100 dark:bg-pink-900/30',
    iconColor: 'text-pink-600 dark:text-pink-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'student-deadlines',
    nameKey: 'studentDeadline',
    descriptionKey: 'studentDeadlineDescription',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    iconBg: 'bg-amber-100 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'student-payments',
    nameKey: 'studentPayment',
    descriptionKey: 'studentPaymentDescription',
    iconPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    iconBg: 'bg-teal-100 dark:bg-teal-900/30',
    iconColor: 'text-teal-600 dark:text-teal-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'student-books',
    nameKey: 'studentBook',
    descriptionKey: 'studentBookDescription',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    iconBg: 'bg-rose-100 dark:bg-rose-900/30',
    iconColor: 'text-rose-600 dark:text-rose-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'student-graduated',
    nameKey: 'studentGraduated',
    descriptionKey: 'studentGraduatedDescription',
    iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    iconBg: 'bg-lime-100 dark:bg-lime-900/30',
    iconColor: 'text-lime-600 dark:text-lime-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'employee-register',
    nameKey: 'employeeRegister',
    descriptionKey: 'employeeRegisterDescription',
    iconPath: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
    iconBg: 'bg-sky-100 dark:bg-sky-900/30',
    iconColor: 'text-sky-600 dark:text-sky-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'employee-attendance',
    nameKey: 'employeeAttendance',
    descriptionKey: 'employeeAttendanceDescription',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    iconBg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30',
    iconColor: 'text-fuchsia-600 dark:text-fuchsia-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'employee-salary',
    nameKey: 'employeeSalary',
    descriptionKey: 'employeeSalaryDescription',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'employee-schedule',
    nameKey: 'employeeSchedule',
    descriptionKey: 'employeeScheduleDescription',
    iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'reports',
    nameKey: 'report',
    descriptionKey: 'reportsDescription',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    iconBg: 'bg-slate-100 dark:bg-slate-900/30',
    iconColor: 'text-slate-600 dark:text-slate-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  },
  {
    id: 'history',
    nameKey: 'history',
    descriptionKey: 'historyDescription',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    iconBg: 'bg-stone-100 dark:bg-stone-900/30',
    iconColor: 'text-stone-600 dark:text-stone-400',
    recordCount: 0,
    lastBackup: null,
    backupStatus: null,
    isBackingUp: false,
    selected: false
  }
])

const isBackingUpAll = ref(false)
const backupHistory = ref([])

// Confirmation dialog states
const showBackupConfirmDialog = ref(false)
const showBackupAllConfirmDialog = ref(false)
const showDownloadConfirmDialog = ref(false)
const pendingBackupModuleId = ref(null)
const pendingDownloadModuleId = ref(null)

// Success message state
const showSuccessMessage = ref(false)
const successMessageTitle = ref('')
const successMessageText = ref('')

// Selected history items for download
const selectedHistoryItems = ref([])

// Computed: Count of selected modules
const selectedCount = computed(() => {
  return modules.value.filter(m => m.selected).length
})

// Computed: Count of selected history items
const selectedHistoryCount = computed(() => {
  return selectedHistoryItems.value.length
})

// Computed: Check if all history items are selected
const allHistorySelected = computed(() => {
  return backupHistory.value.length > 0 && selectedHistoryItems.value.length === backupHistory.value.length
})

// Load initial data
onMounted(() => {
  loadRecordCounts()
  loadBackupHistory()
  // Select all modules by default
  selectAll()
})

// Load record counts for each module
const loadRecordCounts = async () => {
  try {
    // Load from localStorage or JSON files
    modules.value.forEach(module => {
      // Map module IDs to localStorage keys
      const storageKeyMap = {
        'students': 'students_data',
        'employees': 'employees_data',
        'products': 'products_data',
        'sales': 'pos_transactions_data',
        'categories': 'categories_data',
        'incomes': 'incomes_data',
        'expenses': 'expenses_data',
        'investments': 'investments_data',
        'users': 'users_data',
        'classes': 'classes_data',
        'courses': 'courses_data',
        'student-deadlines': 'enrollments_data',
        'student-payments': 'payments_data',
        'student-books': 'student_books_data',
        'student-graduated': 'graduated_students_data',
        'employee-register': 'employees_data',
        'employee-attendance': 'employee_attendance_data',
        'employee-salary': 'employee_payroll_data',
        'employee-schedule': 'employee_schedules_data',
        'reports': 'sales_data',
        'history': 'system_history'
      }

      const storageKey = storageKeyMap[module.id] || `${module.id}_data`
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        const data = JSON.parse(stored)
        module.recordCount = Array.isArray(data) ? data.length : 0
      }
    })
  } catch (e) {
    console.error('Error loading record counts:', e)
  }
}

// Load backup history
const loadBackupHistory = () => {
  try {
    const stored = localStorage.getItem('backup_history')
    if (stored) {
      backupHistory.value = JSON.parse(stored)
      // Update module last backup info
      backupHistory.value.forEach(history => {
        // Try to find module by name or ID
        const module = modules.value.find(m =>
          m.id === history.module.toLowerCase() ||
          m.name.toLowerCase() === history.module.toLowerCase() ||
          m.name === history.module
        )
        if (module) {
          module.lastBackup = history.date
          module.backupStatus = history.status
        }
      })
    }
  } catch (e) {
    console.error('Error loading backup history:', e)
  }
}

// Backup single module (internal function - called after confirmation)
const performBackup = async (moduleId) => {
  const module = modules.value.find(m => m.id === moduleId)
  if (!module) return

  module.isBackingUp = true

  try {
    // Simulate API call - replace with actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Get data from localStorage with proper key mapping
    const storageKeyMap = {
      'students': 'students_data',
      'employees': 'employees_data',
      'products': 'products_data',
      'sales': 'pos_transactions_data',
      'categories': 'categories_data',
      'incomes': 'incomes_data',
      'expenses': 'expenses_data',
      'investments': 'investments_data',
      'users': 'users_data',
      'classes': 'classes_data',
      'courses': 'courses_data',
      'student-deadlines': 'enrollments_data',
      'student-payments': 'payments_data',
      'student-books': 'student_books_data',
      'student-graduated': 'graduated_students_data',
      'employee-register': 'employees_data',
      'employee-attendance': 'employee_attendance_data',
      'employee-salary': 'employee_payroll_data',
      'employee-schedule': 'employee_schedules_data',
      'reports': 'sales_data',
      'history': 'system_history'
    }

    const storageKey = storageKeyMap[moduleId] || `${moduleId}_data`
    const stored = localStorage.getItem(storageKey)
    const data = stored ? JSON.parse(stored) : []

    // Create backup entry
    const backupEntry = {
      id: Date.now(),
      module: t(module.nameKey || module.name) || module.name,
      date: new Date().toISOString(),
      records: Array.isArray(data) ? data.length : 0,
      fileSize: JSON.stringify(data).length,
      status: 'success'
    }

    // Update module info
    module.lastBackup = backupEntry.date
    module.backupStatus = 'success'
    module.recordCount = backupEntry.records

    // Add to history
    backupHistory.value.unshift(backupEntry)
    if (backupHistory.value.length > 50) {
      backupHistory.value = backupHistory.value.slice(0, 50)
    }

    // Save to localStorage
    localStorage.setItem('backup_history', JSON.stringify(backupHistory.value))

    const moduleName = t(module.nameKey || module.name) || module.name
    showSuccessToast(t('backupComplete') || 'Backup Complete', `${moduleName} backed up successfully! ${backupEntry.records} records saved.`)
    // Also show notification toast
    notifyBackupSuccess(moduleName, backupEntry.records)
  } catch (e) {
    console.error('Backup error:', e)
    const moduleName = t(module.nameKey || module.name) || module.name
    error(`Failed to backup ${moduleName}`)
    module.backupStatus = 'failed'
  } finally {
    module.isBackingUp = false
  }
}

// Select all modules
const selectAll = () => {
  modules.value.forEach(module => {
    if (!module.isBackingUp) {
      module.selected = true
    }
  })
}

// Deselect all modules
const deselectAll = () => {
  modules.value.forEach(module => {
    if (!module.isBackingUp) {
      module.selected = false
    }
  })
}

// Backup single module (shows confirmation dialog)
const backupModule = (moduleId) => {
  pendingBackupModuleId.value = moduleId
  showBackupConfirmDialog.value = true
}

// Confirm backup single module
const confirmBackupModule = async () => {
  showBackupConfirmDialog.value = false
  const moduleId = pendingBackupModuleId.value
  pendingBackupModuleId.value = null

  if (!moduleId) return

  await performBackup(moduleId)
}

// Backup selected modules
const backupSelected = async () => {
  const selectedModules = modules.value.filter(m => m.selected && !m.isBackingUp)

  if (selectedModules.length === 0) {
    error(t('noModulesSelected') || 'No modules selected for backup')
    return
  }

  // Show confirmation dialog
  showBackupConfirmDialog.value = true
  pendingBackupModuleId.value = 'selected'
}

// Confirm backup selected modules
const confirmBackupSelected = async () => {
  showBackupConfirmDialog.value = false
  const isSelected = pendingBackupModuleId.value === 'selected'
  pendingBackupModuleId.value = null

  if (!isSelected) return

  const selectedModules = modules.value.filter(m => m.selected && !m.isBackingUp)
  isBackingUpAll.value = true

  try {
    for (const module of selectedModules) {
      await performBackup(module.id)
    }
    showSuccessToast(t('backupComplete') || 'Backup Complete', `${selectedModules.length} ${selectedModules.length === 1 ? 'module' : 'modules'} backed up successfully!`)
  } catch (e) {
    console.error('Backup selected error:', e)
    error('Failed to backup some modules')
  } finally {
    isBackingUpAll.value = false
  }
}

// Backup all modules (shows confirmation dialog)
const backupAll = () => {
  showBackupAllConfirmDialog.value = true
}

// Confirm backup all modules
const confirmBackupAll = async () => {
  showBackupAllConfirmDialog.value = false
  isBackingUpAll.value = true

  try {
    for (const module of modules.value) {
      if (!module.isBackingUp) {
        await performBackup(module.id)
      }
    }
    showSuccessToast(t('backupComplete') || 'Backup Complete', 'All modules backed up successfully!')
  } catch (e) {
    console.error('Backup all error:', e)
    error('Failed to backup some modules')
  } finally {
    isBackingUpAll.value = false
  }
}

// Download backup (shows confirmation dialog)
const downloadBackup = (moduleId) => {
  pendingDownloadModuleId.value = moduleId
  showDownloadConfirmDialog.value = true
}

// Confirm download backup
const confirmDownloadBackup = () => {
  showDownloadConfirmDialog.value = false
  const moduleId = pendingDownloadModuleId.value
  pendingDownloadModuleId.value = null

  if (!moduleId) return

  performDownload(moduleId)

  const module = modules.value.find(m => m.id === moduleId || m.name === moduleId || t(m.nameKey || m.name) === moduleId)
  if (module) {
    const moduleName = t(module.nameKey || module.name) || module.name
    showSuccessToast(t('download') || 'Download Complete', `${moduleName} backup downloaded successfully!`)
  }
}

// Convert data to CSV
const convertToCSV = (data) => {
  if (!Array.isArray(data) || data.length === 0) return ''

  const headers = Object.keys(data[0])
  const csvRows = [headers.join(',')]

  data.forEach(row => {
    const values = headers.map(header => {
      const value = row[header]
      return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value
    })
    csvRows.push(values.join(','))
  })

  return csvRows.join('\n')
}

// Show success toast message
const showSuccessToast = (title, text) => {
  successMessageTitle.value = title
  successMessageText.value = text
  showSuccessMessage.value = true
  // Auto-hide after 3 seconds
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}

// Toggle select all history items
const toggleSelectAllHistory = () => {
  if (allHistorySelected.value) {
    selectedHistoryItems.value = []
  } else {
    selectedHistoryItems.value = backupHistory.value.map(h => h.id)
  }
}

// Download selected history items
const downloadSelectedHistory = () => {
  if (selectedHistoryItems.value.length === 0) {
    error(t('noHistorySelected') || 'No history items selected for download')
    return
  }

  const selectedHistories = backupHistory.value.filter(h => selectedHistoryItems.value.includes(h.id))

  // Download each selected history item directly (without confirmation dialog)
  selectedHistories.forEach(history => {
    const module = modules.value.find(m =>
      m.id === history.module.toLowerCase() ||
      m.name === history.module ||
      t(m.nameKey || m.name) === history.module
    )
    if (module) {
      performDownload(module.id || history.module)
    }
  })

  // Clear selection after download
  selectedHistoryItems.value = []

  showSuccessToast(
    t('download') || 'Download Complete',
    `${selectedHistories.length} ${selectedHistories.length === 1 ? 'backup' : 'backups'} downloaded successfully!`
  )
}

// Perform download (internal function - called without confirmation)
const performDownload = (moduleId) => {
  const module = modules.value.find(m => m.id === moduleId || m.name === moduleId)
  if (!module) return

  try {
    // Get data from localStorage with proper key mapping
    const storageKeyMap = {
      'students': 'students_data',
      'employees': 'employees_data',
      'products': 'products_data',
      'sales': 'pos_transactions_data',
      'categories': 'categories_data',
      'incomes': 'incomes_data',
      'expenses': 'expenses_data',
      'investments': 'investments_data',
      'users': 'users_data',
      'classes': 'classes_data',
      'courses': 'courses_data',
      'student-deadlines': 'enrollments_data',
      'student-payments': 'payments_data',
      'student-books': 'student_books_data',
      'student-graduated': 'graduated_students_data',
      'employee-register': 'employees_data',
      'employee-attendance': 'employee_attendance_data',
      'employee-salary': 'employee_payroll_data',
      'employee-schedule': 'employee_schedules_data',
      'reports': 'sales_data',
      'history': 'system_history'
    }

    const storageKey = storageKeyMap[module.id] || `${module.id}_data`
    const stored = localStorage.getItem(storageKey)
    const data = stored ? JSON.parse(stored) : []

    // Create Excel-like CSV for now (can be replaced with actual Excel generation)
    const csv = convertToCSV(data)
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${module.id}_backup_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  } catch (e) {
    console.error('Download error:', e)
  }
}

// Refresh history
const refreshHistory = () => {
  loadBackupHistory()
  loadRecordCounts()
  selectedHistoryItems.value = [] // Clear selection on refresh
  showSuccessToast(t('refresh') || 'Refresh Complete', 'Backup history refreshed successfully!')
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return 'Never'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

// Format date and time
const formatDateTime = (dateString) => {
  if (!dateString) return 'Never'
  const date = new Date(dateString)
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Format file size
const formatFileSize = (bytes) => {
  if (!bytes) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// Get status text
const getStatusText = (status) => {
  const statusMap = {
    success: t('success') || 'Success',
    pending: t('pending') || 'Pending',
    failed: t('failed') || 'Failed'
  }
  return statusMap[status] || status
}

// Get module icon
const getModuleIcon = (moduleName) => {
  // Try to find by exact name match first (check translated name)
  let module = modules.value.find(m =>
    m.name === moduleName ||
    t(m.nameKey || m.name) === moduleName
  )

  // If not found, try partial match
  if (!module) {
    module = modules.value.find(m => {
      const translatedName = t(m.nameKey || m.name) || m.name
      return moduleName.toLowerCase().includes(translatedName.toLowerCase()) ||
        translatedName.toLowerCase().includes(moduleName.toLowerCase())
    })
  }

  if (module) {
    return {
      path: module.iconPath,
      bg: module.iconBg,
      color: module.iconColor
    }
  }
  return {
    path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    bg: 'bg-gray-100 dark:bg-gray-700',
    color: 'text-gray-600 dark:text-gray-400'
  }
}
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
</style>
