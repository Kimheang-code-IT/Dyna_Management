<template>
  <div class="h-full flex flex-col overflow-hidden dark:bg-gray-900">
    <div class="flex flex-1 overflow-hidden gap-2">
      <!-- Left Sidebar: Employee List -->
      <div class="w-64 flex-shrink-0 flex flex-col">
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow h-full overflow-hidden flex flex-col">
          <!-- Sidebar Header -->
          <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('employeeCards') || 'Employee Cards' }}
              </h3>
              <label class="flex items-center gap-2 cursor-pointer text-xs text-gray-700 dark:text-gray-300">
                <input type="checkbox" :checked="selectAllChecked" @change="toggleSelectAll"
                  class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700" />
                <span>{{ t('selectAll') || 'Select All' }}</span>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ filteredEmployees.length }} {{ t('total') || 'total'
              }}</p>
              <p class="text-[11px] text-gray-500 dark:text-gray-400">
                {{ selectedForDownload.size }} {{ t('selected') || 'selected' }}
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
              <input v-model="searchQuery" type="text" :placeholder="t('search') || 'Search employees...'"
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
              {{ searchQuery ? (t('noResults') || 'No results found') : (t('noEmployees') || 'No employees found') }}
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
                    <div class="font-medium text-sm text-gray-900 dark:text-white truncate akbalthom-khmer">
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
            <h2 class="text-md font-semibold text-gray-900 dark:text-white">{{ t('editCard') ||
              'Edit Card Information' }}</h2>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform"
              :class="{ 'rotate-180': showEditForm }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div v-show="showEditForm" class="px-6 pb-4">
            <div class="flex justify-around items-center  ">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('fullNameKhmer') || 'Employee Name (Khmer)' }} <span class="text-red-500">*</span>
                </label>
                <input v-model="cardData.nameKhmer" type="text"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white akbalthom-khmer"
                  :placeholder="t('enterNameKhmer') || 'Enter name in Khmer'" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('fullNameEnglish') || 'Employee Name (English)' }} <span class="text-red-500">*</span>
                </label>
                <input v-model="cardData.nameEnglish" type="text"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  :placeholder="t('enterNameEnglish') || 'Enter name in English'" />
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
              {{ t('front') || 'Front' }}
            </button>
            <button @click="showBack = true"
              :class="['px-3 py-1 text-xs font-semibold rounded-sm border transition-colors',
                showBack ? 'bg-blue-600 text-white border-blue-700' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600']">
              {{ t('back') || 'Back' }}
            </button>
          </div>

          <div class=" overflow-hidden relative mx-auto"
            style="width: 100%;max-width:600px;height: 900px;  "
            :style="{
              backgroundImage: `url(${showBack ? cardBackImage : cardFrontImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
             
            }">
            <!-- Card Content -->
            <div v-if="!showBack" class="absolute inset-0 flex" style="z-index: 2;">
              <!-- Left Side: Photo -->
              <div class="w-1/3 flex items-center justify-center p-4">
                <div
                  class="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-200 border-4 border-white shadow-lg flex items-center justify-center">
                  <img v-if="cardData.profileImage" :src="cardData.profileImage"
                    :alt="cardData.nameEnglish || cardData.nameKhmer" class="w-full h-full object-contain bg-white" />
                  <div v-else class="w-full h-full flex items-center justify-center bg-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-400" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Right Side: Information -->
              <div class="flex-1 flex flex-col justify-center p-6">

                <!-- Employee Name Khmer -->
                <div class="mb-2">
                  
                  <div class="text-lg font-semibold text-gray-900 akbalthom-khmer">
                    {{ cardData.nameKhmer || t('fullNameKhmer') || 'ឈ្មោះបុគ្គលិក' }}
                  </div>
                </div>

                <!-- Employee Name English -->
                <div class="mb-2">
                 
                  <div class="text-base font-semibold text-gray-900">
                    {{ cardData.nameEnglish || t('fullNameEnglish') || 'Employee Name' }}
                  </div>
                </div>

                <!-- Employee ID -->
                <div class="mb-2">
                  
                  <div class="text-sm font-medium text-gray-800">
                    {{ cardData.employeeId || 'N/A' }}
                  </div>
                </div>

                <!-- Role -->
                <div class="mb-2">
                  
                  <div class="text-sm font-medium text-gray-800">
                    {{ t('role') || 'Role' }}: {{ cardData.role || 'N/A' }}
                  </div>
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
            <button @click="handlePrintSelected"
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
              {{ t('print') || 'Print' }}
            </button>
            <button @click="handleDownload"
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
              <span>{{ selectedForDownload.size > 0 ? (t('downloadSelected') || 'Download Selected') : (t('download') ||
                'Download') }}</span>
            </button>
            <button @click="goBack"
              class="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {{ t('back') || 'Back' }}
            </button>
          </div>
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
import { addHistory } from '../utils/history'
import html2canvas from 'html2canvas'
import cardFrontImage from '../assets/Card infront.png'
import cardBackImage from '../assets/Card inBack.png'

const route = useRoute()
const router = useRouter()
const i18n = useI18n()
const t = i18n?.t || ((key) => key)
const { success, error } = useToast()

// Edit form visibility
const showEditForm = ref(true)

// Loading state
const isLoading = ref(true)
const isGenerating = ref(false)
const showBack = ref(false)

// Card data
const cardData = reactive({
  nameKhmer: '',
  nameEnglish: '',
  employeeId: '',
  role: '',
  issueDate: '',
  profileImage: ''
})

// Sidebar state
const employees = ref([])
const selectedEmployeeId = ref(null)
const searchQuery = ref('')
const selectedForDownload = ref(new Set())

const filteredEmployees = computed(() => {
  if (!searchQuery.value) return employees.value
  const q = searchQuery.value.toLowerCase()
  return employees.value.filter((e) =>
    (e.nameKhmer || '').toLowerCase().includes(q) ||
    (e.nameEnglish || '').toLowerCase().includes(q) ||
    (e.name || '').toLowerCase().includes(q) ||
    (e.id || '').toLowerCase().includes(q)
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
      error(t('employeeNotFound') || 'Employee ID not found.')
      router.back()
      return
    }

    const { loadDataFromJSON } = await import('../utils/dataLoader')
    const employeesData = await loadDataFromJSON('../data/employees.json', 'employees_data')
    employees.value = employeesData

    const employee = employeesData.find(e => e.id === employeeId)

    if (!employee) {
      error(t('employeeNotFound') || 'Employee not found.')
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
        error(t('employeeNotFound') || 'Employee not found.')
        router.back()
      }

      if (!selectedEmployeeId.value && employees.value.length > 0) {
        selectedEmployeeId.value = employees.value[0].id
      }
    } catch (e) {
      console.error('Error loading from localStorage:', e)
      error(t('errorLoadingEmployee') || 'Error loading employee data.')
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
  router.replace({ params: { id: employeeId } })
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

// Handle download
const handleDownload = async () => {
  try {
    isGenerating.value = true

    if (!cardData.nameKhmer && !cardData.nameEnglish && selectedForDownload.value.size === 0) {
      error(t('noCardData') || 'No card data available to download.')
      return
    }

    const cardElement = document.getElementById('card-container')
    if (!cardElement) {
      error(t('cardElementNotFound') || 'Card element not found.')
      return
    }

    const generateBlobFor = async (employee) => {
      if (employee) {
        populateCardFromEmployee(employee)
        await nextTick()
      }
      const cardWrapper = cardElement.querySelector('div[style*="backgroundImage"]')
      if (!cardWrapper) {
        throw new Error('Card wrapper not found')
      }
      const canvas = await html2canvas(cardWrapper, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false
      })
      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error('No blob'))
          resolve({ blob, employee })
        }, 'image/png')
      })
    }

    if (selectedForDownload.value.size > 0) {
      const originalEmployeeId = selectedEmployeeId.value
      const tasks = []
      for (const id of selectedForDownload.value) {
        const emp = employees.value.find((e) => e.id === id)
        if (emp) tasks.push(generateBlobFor(emp))
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
      addHistory('update', {
        type: 'report',
        itemName: `${selectedForDownload.value.size} Employee Card(s)`,
        itemId: null,
        description: `Bulk employee cards downloaded - ${selectedForDownload.value.size} card(s) generated`,
        user: 'Admin'
      })
      success(t('cardDownloaded') || 'Cards downloaded successfully!')
    } else {
      const { blob } = await generateBlobFor(null)
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
      addHistory('update', {
        type: 'report',
        itemName: employeeName,
        itemId: route.params.id || null,
        description: `Employee card downloaded - Employee: ${employeeName}`,
        user: 'Admin'
      })
      success(t('cardDownloaded') || 'Card downloaded successfully!')
    }
  } catch (err) {
    console.error('Error generating card:', err)
    error(t('errorGeneratingCard') || 'Error generating card. Please try again.')
  } finally {
    isGenerating.value = false
  }
}

const handlePrintSelected = async () => {
  if (!selectedForDownload.value.size) {
    const employeeName = cardData.nameEnglish || cardData.nameKhmer || 'Employee'
    addHistory('update', {
      type: 'report',
      itemName: employeeName,
      itemId: route.params.id || null,
      description: `Employee card printed - Employee: ${employeeName}`,
      user: 'Admin'
    })
    window.print()
    return
  }
  const originalEmployeeId = selectedEmployeeId.value
  const cardElement = document.getElementById('card-container')
  if (!cardElement) {
    error(t('cardElementNotFound') || 'Card element not found.')
    return
  }
  const images = []
  for (const id of selectedForDownload.value) {
    const emp = employees.value.find((e) => e.id === id)
    if (!emp) continue
    populateCardFromEmployee(emp)
    await nextTick()
    const cardWrapper = cardElement.querySelector('div[style*="backgroundImage"]')
    if (!cardWrapper) continue
    const canvas = await html2canvas(cardWrapper, {
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false
    })
    images.push(canvas.toDataURL('image/png'))
  }
  if (originalEmployeeId) {
    const original = employees.value.find((e) => e.id === originalEmployeeId)
    if (original) populateCardFromEmployee(original)
  }
  if (!images.length) return
  const w = window.open('', '_blank')
  if (!w) return
  w.document.write('<html><head><title>Print Cards</title></head><body style="margin:0;padding:16px;display:flex;flex-direction:column;gap:16px;">')
  images.forEach(src => {
    w.document.write(`<img src="${src}" style="width:100%;max-width:800px;page-break-after:always;">`)
  })
  w.document.write('</body></html>')
  w.document.close()
  w.focus()
  addHistory('update', {
    type: 'report',
    itemName: `${selectedForDownload.value.size} Employee Card(s)`,
    itemId: null,
    description: `Bulk employee cards printed - ${selectedForDownload.value.size} card(s)`,
    user: 'Admin'
  })
  w.print()
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
/* AKbalthom KhmerGothic Font */
@font-face {
  font-family: 'AKbalthom KhmerGothic';
  src: url('../assets/fonts/AKbalthom%20KhmerGothic.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

.akbalthom-khmer {
  font-family: 'AKbalthom KhmerGothic', 'Khmer', 'Khmer OS', sans-serif;
  font-weight: 400;
  font-style: normal;
}


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

