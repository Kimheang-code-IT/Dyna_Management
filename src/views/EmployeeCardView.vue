<template>
  <div class="h-full flex flex-col overflow-hidden dark:bg-gray-900">
    <div class="flex flex-1 overflow-hidden gap-2">
      <!-- Left Sidebar: Employee List -->
      <div class="w-64 flex-shrink-0 flex flex-col">
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow h-full overflow-hidden flex flex-col">
          <!-- Sidebar Header -->
          <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white capitalize">{{ t('employeeCards') }}
              </h3>
              <label class="flex items-center gap-2 cursor-pointer text-xs text-gray-700 dark:text-gray-300">
                <input type="checkbox" :checked="selectAllChecked" @change="toggleSelectAll"
                  class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700" />
                <span>{{ t('selectAll') }}</span>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ filteredEmployees.length }} {{ t('total') }}</p>
              <p class="text-[11px] text-gray-500 dark:text-gray-400">
                {{ selectedForDownload.size }} {{ t('selected') }}
              </p>
            </div>
          </div>

          <!-- Search Bar -->
          <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input v-model="searchQuery" type="text" :placeholder="t('search')"
                class="w-full pl-10 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400" />
              <button v-if="searchQuery" @click="searchQuery = ''"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                type="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Scrollable Employee List -->
          <div class="flex-1 overflow-y-auto">
            <div v-if="filteredEmployees.length === 0" class="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
              {{ searchQuery ? t('noResultsFound') : t('noEmployees') }}
            </div>
            <div v-else class="p-2 space-y-2">
              <button v-for="employee in filteredEmployees" :key="employee.id" @click="selectEmployee(employee.id)" :class="[
                'w-full p-3 rounded-sm text-left transition-colors',
                selectedEmployeeId === employee.id
                  ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500'
                  : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-transparent'
              ]">
                <div class="flex items-center gap-3">
                  <input type="checkbox" :checked="selectedForDownload.has(employee.id)"
                    @click.stop="toggleEmployeeSelection(employee.id)"
                    class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700 flex-shrink-0" />
                  <!-- Employee Avatar -->
                  <div
                    class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-100 dark:bg-blue-900 overflow-hidden">
                    <img v-if="employee.profileImage" :src="employee.profileImage"
                      :alt="employee.nameEnglish || employee.name || employee.nameKhmer"
                      class="w-full h-full rounded-full object-cover" />
                    <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                      {{ getInitials(employee.nameKhmer || employee.nameEnglish || employee.name || '??') }}
                    </span>
                  </div>

                  <!-- Employee Info -->
                  <div class="flex-1 min-w-0">
                    <div class="font-medium text-sm text-gray-900 dark:text-white truncate">
                      {{ employee.nameKhmer || employee.nameEnglish || employee.name || 'Unknown' }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {{ employee.id }}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Area: Edit Form + Card Preview -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Edit Form (Fixed at Top, No Scroll) -->
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow flex-shrink-0">
          <button @click="showEditForm = !showEditForm"
            class="w-full px-6 pt-3 pb-2 flex items-center justify-between text-left  dark:hover:bg-gray-700 transition-colors">
            <h2 class="text-md font-semibold text-gray-900 dark:text-white capitalize">{{ t('editCard') }}</h2>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform"
              :class="{ 'rotate-180': showEditForm }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div v-show="showEditForm" class="px-6 pb-4 space-y-4">
            <!-- Employee Information -->
            <div class="flex justify-around items-center gap-4">
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('fullNameKhmer') }} <span class="text-red-500">*</span>
                </label>
                <input v-model="cardData.nameKhmer" type="text"
                  @input="validateKhmerNameField('nameKhmer', cardData.nameKhmer, false)"
                  :placeholder="t('enterNameKhmer')"
                  :class="[
                    'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white',
                    errors.nameKhmer ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  ]" />
                <p v-if="errors.nameKhmer" class="mt-1 text-xs text-red-600 dark:text-red-400">{{ errors.nameKhmer }}</p>
              </div>
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('fullNameEnglish') }} <span class="text-red-500">*</span>
                </label>
                <input v-model="cardData.nameEnglish" type="text"
                  @input="validateNameField('nameEnglish', cardData.nameEnglish, false)"
                  :placeholder="t('enterNameEnglish')"
                  :class="[
                    'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white',
                    errors.nameEnglish ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  ]" />
                <p v-if="errors.nameEnglish" class="mt-1 text-xs text-red-600 dark:text-red-400">{{ errors.nameEnglish }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Preview (No Scroll) -->
        <div
          class="flex-1  dark:from-gray-800 dark:to-gray-900 overflow-hidden flex flex-col p-4"
          id="card-container">
          <!-- Toggle front/back -->
          <div class="flex items-center justify-end gap-2 mb-3">
            <button @click="showBack = false"
              :class="['px-3 py-1 text-xs font-semibold rounded-sm border transition-colors',
                showBack ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600' : 'bg-blue-600 text-white border-blue-700']">
              {{ t('front') }}
            </button>
            <button @click="showBack = true"
              :class="['px-3 py-1 text-xs font-semibold rounded-sm border transition-colors',
                showBack ? 'bg-blue-600 text-white border-blue-700' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600']">
              {{ t('back') }}
            </button>
          </div>

          <div class="card-wrapper overflow-hidden relative mx-auto" style="width: 100%;max-width:600px;height: 900px;"
            :style="{
              backgroundImage: `url(${showBack ? cardBackImage : cardFrontImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }">
            <!-- Card Content -->
            <div v-if="!showBack" class="absolute inset-0 flex flex-col" style="z-index: 2;">
              <!-- Centered Photo -->
              <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center" :style="{
                top: cardPosition.photoTop,
                width: cardPosition.photoWidth
              }">
                <div class="w-full aspect-[3/4] overflow-hidden bg-gray-200 flex items-center justify-center"
                  :style="{ border: `2px solid ${cardPosition.photoBorderColor}` }">
                  <img v-if="cardData.profileImage" :src="cardData.profileImage"
                    :alt="cardData.nameEnglish || cardData.nameKhmer" class="w-full h-full object-cover" />
                  <div v-else class="w-full h-full flex items-center justify-center bg-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>


              <!-- Employee Name (Centered, Large) -->
              <div class="absolute left-1/2 transform -translate-x-1/2 text-center" :style="{
                top: cardPosition.nameTop,
                width: '90%'
              }">
                <div class="text-xl font-bold text-gray-900 uppercase tracking-wide">
                  {{ cardData.nameEnglish || t('fullNameEnglish') }}
                </div>
              </div>

              <!-- Footer: ID and Role -->
              <div class="absolute left-0 right-0 text-center" :style="{
                top: cardPosition.footerTop || '85%',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              
              }">
                <div class="text-[10px] font-medium text-black">
                  ID {{ cardData.employeeId || 'N/A' }}
                </div>
                <div class="text-[13px] font-semibold text-black uppercase tracking-wide">
                  {{ cardData.role || 'EMPLOYEE' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sidebar: Action Buttons (Fixed, No Scroll) -->
      <div class="w-40 flex-shrink-0 flex flex-col">
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow h-full flex flex-col">
          <div class="p-4 flex flex-col gap-3 flex-1">
            <button @click="showPrintConfirmDialog = true"
              :disabled="isGenerating || (!selectedForDownload.size && !selectedEmployeeId)"
              class="w-full px-3 py-2 text-sm rounded-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              :class="(!selectedForDownload.size && !selectedEmployeeId) || isGenerating
                ? 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              {{ t('print') }}
            </button>
            <button @click="showDownloadConfirmDialog = true"
              :disabled="isGenerating || (!selectedForDownload.size && !selectedEmployeeId)"
              class="w-full px-3 py-2 text-sm rounded-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              :class="isGenerating || (!selectedForDownload.size && !selectedEmployeeId)
                ? 'bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'">
              <svg v-if="isGenerating" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{{ selectedForDownload.size > 0 ? t('downloadSelected') : t('download') }}</span>
            </button>
            <button @click="goBack"
              class="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {{ t('back') }}
            </button>
          </div>
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('confirmDownloadCard') }}</h3>
        </div>

        <!-- Description -->
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('confirmDownloadCardMessage') }}</p>

        <!-- Buttons -->
        <div class="flex gap-3 justify-end">
          <button @click="showDownloadConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmDownload"
            class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium">
            {{ t('download') }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Print Confirmation Dialog -->
  <div v-if="showPrintConfirmDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click.self="showPrintConfirmDialog = false">
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
      <div class="flex-1">
        <!-- Title with icon -->
        <div class="flex items-center gap-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('confirmPrintCard') }}</h3>
        </div>

        <!-- Description -->
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('confirmPrintCardMessage') }}</p>

        <!-- Buttons -->
        <div class="flex gap-3 justify-end">
          <button @click="showPrintConfirmDialog = false"
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('cancel') }}
          </button>
          <button @click="confirmPrint"
            class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
            {{ t('print') }}
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, reactive, onMounted, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useFormValidation } from '../composables/useFormValidation'
import { addHistory } from '../utils/history'
import { textContains } from '../utils/search'
import html2canvas from 'html2canvas'
import cardFrontImage from '../assets/card Empfront.png'
import cardBackImage from '../assets/card Empback.png'

const route = useRoute()
const router = useRouter()
const i18n = useI18n()
const t = i18n?.t || ((key) => key)
const { success, error } = useToast()

// Form validation
const {
  errors,
  validateNameField,
  validateKhmerNameField
} = useFormValidation({
  nameKhmer: '',
  nameEnglish: ''
})

// Edit form visibility
const showEditForm = ref(true)

// Loading state
const isLoading = ref(true)
const isGenerating = ref(false)
const showBack = ref(false)

// Confirmation dialogs
const showDownloadConfirmDialog = ref(false)
const showPrintConfirmDialog = ref(false)

// Card data
const cardData = reactive({
  nameKhmer: '',
  nameEnglish: '',
  employeeId: '',
  role: '',
  issueDate: '',
  profileImage: ''
})

// Card positioning settings (easy to adjust)
const cardPosition = reactive({
  photoWidth: '20%',           // Photo width (e.g., '35%', '40%', '45%')
  photoTop: '25%',             // Photo top position (e.g., '20%', '25%', '30%')
  nameTop: '75%',              // Name top position
  footerTop: '77%',            // Footer section top position
})

// Sidebar state
const employees = ref([])
const selectedEmployeeId = ref(null)
const searchQuery = ref('')
const selectedForDownload = ref(new Set())

const filteredEmployees = computed(() => {
  if (!searchQuery.value) return employees.value
  return employees.value.filter((e) =>
    textContains(e.nameKhmer || '', searchQuery.value) ||
    textContains(e.nameEnglish || '', searchQuery.value) ||
    textContains(e.name || '', searchQuery.value) ||
    textContains(e.id || '', searchQuery.value)
  )
})

const selectAllChecked = computed(() => {
  if (!filteredEmployees.value.length) return false
  return filteredEmployees.value.every((e) => selectedForDownload.value.has(e.id))
})

const getInitials = (name) => {
  if (!name) return '??'
  const parts = name.trim().split(' ')
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  return name.substring(0, 2).toUpperCase()
}

// Load employee data
const loadEmployee = async () => {
  try {
    isLoading.value = true
    const employeeId = route.params.id

    if (!employeeId) {
      error(t('employeeNotFound'))
      router.back()
      return
    }

    const { loadDataFromJSON } = await import('../utils/dataLoader')
    const employeesData = await loadDataFromJSON('../data/employees.json', 'employees_data')
    employees.value = employeesData

    const employee = employeesData.find(e => e.id === employeeId)

    if (!employee) {
      error(t('employeeNotFound'))
      router.back()
      return
    }

    // Populate card data
    cardData.nameKhmer = employee.nameKhmer || employee.name || ''
    cardData.nameEnglish = employee.nameEnglish || employee.name || ''
    cardData.employeeId = employee.id || ''
    cardData.role = employee.role || ''
    cardData.profileImage = employee.profileImage || ''
    selectedEmployeeId.value = employee.id

    // Set default issue date to today
    const today = new Date()
    cardData.issueDate = today.toISOString().split('T')[0]

    // Default select first if none
    if (!selectedEmployeeId.value && employees.value.length > 0) {
      selectedEmployeeId.value = employees.value[0].id
    }
  } catch (err) {
    console.error('Error loading employee:', err)
    // Fallback to localStorage
    try {
      const savedEmployees = JSON.parse(localStorage.getItem('employees_data') || '[]')
      employees.value = savedEmployees
      const employee = savedEmployees.find(e => e.id === route.params.id)

      if (employee) {
        cardData.nameKhmer = employee.nameKhmer || employee.name || ''
        cardData.nameEnglish = employee.nameEnglish || employee.name || ''
        cardData.employeeId = employee.id || ''
        cardData.role = employee.role || ''
        cardData.profileImage = employee.profileImage || ''
        selectedEmployeeId.value = employee.id

        const today = new Date()
        cardData.issueDate = today.toISOString().split('T')[0]
      } else {
        error(t('employeeNotFound'))
        router.back()
      }

      if (!selectedEmployeeId.value && employees.value.length > 0) {
        selectedEmployeeId.value = employees.value[0].id
      }
    } catch (e) {
      console.error('Error loading from localStorage:', e)
      error(t('errorLoadingEmployee'))
      router.back()
    }
  } finally {
    isLoading.value = false
  }
}

// Populate card from employee helper
const populateCardFromEmployee = (employee) => {
  if (!employee) return
  cardData.nameKhmer = employee.nameKhmer || employee.name || ''
  cardData.nameEnglish = employee.nameEnglish || employee.name || ''
  cardData.employeeId = employee.id || ''
  cardData.role = employee.role || ''
  cardData.profileImage = employee.profileImage || ''
  const today = new Date()
  cardData.issueDate = today.toISOString().split('T')[0]
}

// Select employee from sidebar
const selectEmployee = (employeeId) => {
  const employee = employees.value.find(e => e.id === employeeId)
  if (!employee) return
  selectedEmployeeId.value = employeeId
  populateCardFromEmployee(employee)

  // update route without navigation
  router.replace({ name: 'EmployeeCard', params: { id: employeeId } })
}

// Selection toggles
const toggleEmployeeSelection = (employeeId) => {
  if (selectedForDownload.value.has(employeeId)) {
    selectedForDownload.value.delete(employeeId)
  } else {
    selectedForDownload.value.add(employeeId)
  }
}

const toggleSelectAll = () => {
  if (selectAllChecked.value) {
    filteredEmployees.value.forEach((e) => selectedForDownload.value.delete(e.id))
  } else {
    filteredEmployees.value.forEach((e) => selectedForDownload.value.add(e.id))
  }
}

// Generate combined front and back card image
const generateCombinedCard = async (employee = null) => {
  const originalShowBack = showBack.value
  if (employee) {
    populateCardFromEmployee(employee)
    await nextTick()
  }

  // Capture front
  showBack.value = false
  await nextTick()
  const cardElement = document.getElementById('card-container')
  if (!cardElement) throw new Error(t('cardElementNotFound'))
  const frontCanvas = await html2canvas(cardElement.querySelector('.card-wrapper'), {
    backgroundColor: '#ffffff',
    scale: 2,
    logging: false,
  })

  // Capture back
  showBack.value = true
  await nextTick()
  const backCanvas = await html2canvas(cardElement.querySelector('.card-wrapper'), {
    backgroundColor: '#ffffff',
    scale: 2,
    logging: false,
  })

  // Create a new canvas to combine front and back
  const combinedCanvas = document.createElement('canvas')
  const padding = 20 // Padding between cards
  combinedCanvas.width = frontCanvas.width * 2 + padding
  combinedCanvas.height = frontCanvas.height
  const ctx = combinedCanvas.getContext('2d')

  ctx.fillStyle = '#ffffff' // White background
  ctx.fillRect(0, 0, combinedCanvas.width, combinedCanvas.height)

  ctx.drawImage(frontCanvas, 0, 0)
  ctx.drawImage(backCanvas, frontCanvas.width + padding, 0)

  showBack.value = originalShowBack // Restore original state
  return new Promise((resolve, reject) => {
    combinedCanvas.toBlob((blob) => {
      if (!blob) return reject(new Error('No blob'))
      resolve({ blob, employee })
    }, 'image/png')
  })
}

// Confirm download
const confirmDownload = async () => {
  showDownloadConfirmDialog.value = false
  try {
    isGenerating.value = true

    if (!selectedEmployeeId.value && selectedForDownload.value.size === 0) {
      error(t('noCardData'))
      return
    }

    if (selectedForDownload.value.size > 0) {
      const originalEmployeeId = selectedEmployeeId.value
      const tasks = []
      for (const id of selectedForDownload.value) {
        const emp = employees.value.find((e) => e.id === id)
        if (emp) tasks.push(generateCombinedCard(emp))
      }
      const results = await Promise.all(tasks)
      results.forEach(({ blob, employee }) => {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        const employeeName = (employee?.nameEnglish || employee?.nameKhmer || 'EmployeeCard').replace(/[^a-zA-Z0-9]/g, '_')
        const dateStr = (cardData.issueDate || new Date().toISOString().split('T')[0]).replace(/-/g, '')
        link.download = `EmployeeCard_${employeeName}_${dateStr}.png`
        link.href = url
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      })
      if (originalEmployeeId) {
        const original = employees.value.find((e) => e.id === originalEmployeeId)
        if (original) populateCardFromEmployee(original)
      }
      addHistory('downloadInvoice', {
        type: 'report',
        itemName: `Bulk Employee Cards - ${selectedForDownload.value.size} Card(s)`,
        itemId: null,
        description: `Bulk employee cards downloaded - ${selectedForDownload.value.size} card(s) generated`,
        user: 'Admin'
      })
      success(t('cardDownloaded'))
    } else {
      const { blob } = await generateCombinedCard(null)
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      const fileNameEmployeeName = (cardData.nameEnglish || cardData.nameKhmer || 'EmployeeCard').replace(/[^a-zA-Z0-9]/g, '_')
      const dateStr = cardData.issueDate ? cardData.issueDate.replace(/-/g, '') : new Date().toISOString().split('T')[0].replace(/-/g, '')
      link.download = `EmployeeCard_${fileNameEmployeeName}_${dateStr}.png`
      link.href = url
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
      const employeeName = cardData.nameEnglish || cardData.nameKhmer || 'Employee'
      addHistory('downloadInvoice', {
        type: 'report',
        itemName: `Employee Card - ${employeeName}`,
        itemId: route.params.id || null,
        description: `Employee card downloaded (front and back) - Employee: ${employeeName}`,
        user: 'Admin'
      })
      success(t('cardDownloaded'))
    }
  } catch (err) {
    console.error('Error generating card:', err)
    error(t('errorGeneratingCard'))
  } finally {
    isGenerating.value = false
  }
}

// Confirm print
const confirmPrint = async () => {
  showPrintConfirmDialog.value = false
  try {
    isGenerating.value = true

    if (!selectedEmployeeId.value && selectedForDownload.value.size === 0) {
      error(t('noCardData'))
      return
    }

    if (selectedForDownload.value.size > 0) {
      // Multiple employees
      const originalEmployeeId = selectedEmployeeId.value
      const images = []
      for (const id of selectedForDownload.value) {
        const emp = employees.value.find((e) => e.id === id)
        if (!emp) continue
        const { blob } = await generateCombinedCard(emp)
        const url = URL.createObjectURL(blob)
        images.push(url)
      }
      if (originalEmployeeId) {
        const original = employees.value.find((e) => e.id === originalEmployeeId)
        if (original) populateCardFromEmployee(original)
      }
      if (!images.length) return
      const w = window.open('', '_blank')
      if (!w) return
      w.document.write('<html><head><title>Print Cards</title><style>@media print { body { margin: 0; padding: 0; } img { width: 100%; max-width: 100%; page-break-after: always; } }</style></head><body style="margin:0;padding:16px;display:flex;flex-direction:column;gap:16px;">')
      images.forEach(url => {
        w.document.write(`<img src="${url}" style="width:100%;max-width:100%;">`)
      })
      w.document.write('</body></html>')
      w.document.close()
      setTimeout(() => {
        w.print()
        images.forEach(url => URL.revokeObjectURL(url))
      }, 500)
      addHistory('print', {
        type: 'report',
        itemName: `Bulk Employee Cards - ${selectedForDownload.value.size} Card(s)`,
        itemId: null,
        description: `Bulk employee cards printed - ${selectedForDownload.value.size} card(s)`,
        user: 'Admin'
      })
    } else {
      // Single employee - print front and back combined
      const { blob } = await generateCombinedCard(null)
      const url = URL.createObjectURL(blob)
      const w = window.open('', '_blank')
      if (!w) return
      w.document.write('<html><head><title>Print Card</title><style>@media print { body { margin: 0; padding: 0; } img { width: 100%; max-width: 100%; } }</style></head><body style="margin:0;padding:16px;display:flex;justify-content:center;align-items:center;">')
      w.document.write(`<img src="${url}" style="width:100%;max-width:100%;">`)
      w.document.write('</body></html>')
      w.document.close()
      setTimeout(() => {
        w.print()
        URL.revokeObjectURL(url)
      }, 500)
      const employeeName = cardData.nameEnglish || cardData.nameKhmer || 'Employee'
      addHistory('print', {
        type: 'report',
        itemName: `Employee Card - ${employeeName}`,
        itemId: route.params.id || null,
        description: `Employee card printed (front and back) - Employee: ${employeeName}`,
        user: 'Admin'
      })
    }
  } catch (err) {
    console.error('Error printing card:', err)
    error(t('errorGeneratingCard'))
  } finally {
    isGenerating.value = false
  }
}

// Go back
const goBack = () => {
  router.back()
}

// Load employee on mount
onMounted(() => {
  loadEmployee()
})
</script>

<style scoped>

@media print {
  @page {
    size: A4 landscape;
    margin: 0;
  }

  /* Hide everything by default */
  * {
    visibility: hidden !important;
  }

  /* Hide sidebar and navbar from App.vue */
  nav,
  aside,
  [class*="sidebar"],
  [class*="Sidebar"],
  [class*="Navbar"],
  header {
    display: none !important;
    visibility: hidden !important;
  }

  /* Hide right sidebar (action buttons) */
  .w-40,
  .w-40 * {
    display: none !important;
    visibility: hidden !important;
  }

  /* Hide edit form section */
  .bg-white.dark\\:bg-gray-800.rounded-sm.shadow.flex-shrink-0,
  button[class*="px-6"] {
    display: none !important;
    visibility: hidden !important;
  }

  /* Hide main container padding/margins */
  main,
  .flex-1,
  .flex,
  .h-full,
  .overflow-hidden {
    margin: 0 !important;
    padding: 0 !important;
  }

  /* Show only card container and its children */
  #card-container,
  #card-container * {
    visibility: visible !important;
    display: block !important;
  }

  #card-container {
    position: fixed !important;
    left: 0 !important;
    top: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    background: white !important;
    padding: 0 !important;
    margin: 0 !important;
    z-index: 9999 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .card-wrapper {
    box-shadow: none !important;
    width: 100% !important;
    max-width: 600px !important;
    margin: 0 auto !important;
  }

  /* Hide body margins and padding */
  body {
    margin: 0 !important;
    padding: 0 !important;
    background: white !important;
  }

  /* Hide all other page elements */
  html,
  html * {
    background: white !important;
  }
}
</style>

