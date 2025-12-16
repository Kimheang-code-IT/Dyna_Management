<template>
  <div class="h-full flex flex-col overflow-hidden dark:bg-gray-900">
    <div class="flex flex-1 overflow-hidden gap-2">
      <!-- Left Sidebar: Certificate List (PowerPoint-style) - Fixed, No Scroll -->
      <div class="w-64 flex-shrink-0 flex flex-col">
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow h-full overflow-hidden flex flex-col">
          <!-- Sidebar Header -->
          <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white capitalize">{{ t('certificates') || 'Certificates' }}
              </h3>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ filteredGraduatedStudents.length }} {{
                t('total')
                || 'total' }}</p>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" :checked="selectAllChecked" @change="toggleSelectAll"
                  class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700" />
                <span class="text-xs text-gray-700 dark:text-gray-300">{{ t('selectAll') || 'Select All' }}</span>
              </label>
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
              <input v-model="searchQuery" type="text" :placeholder="t('search') || 'Search students...'"
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

          <!-- Scrollable Student List -->
          <div class="flex-1 overflow-y-auto">
            <div v-if="filteredGraduatedStudents.length === 0"
              class="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
              {{ searchQuery ? (t('noResults') || 'No results found') : (t('noGraduatedStudents') ||
                'Nograduatedstudents found') }}
            </div>
            <div v-else class="p-2 space-y-2">
              <button v-for="item in filteredGraduatedStudents" :key="item.id" @click="selectStudent(item.id)" :class="[
                'w-full p-3 rounded-sm text-left transition-colors',
                selectedGraduatedStudentId === item.id
                  ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500'
                  : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-transparent'
              ]">
                <div class="flex items-center gap-3">
                  <!-- Checkbox -->
                  <input type="checkbox" :checked="selectedForDownload.has(item.id)"
                    @click.stop="toggleStudentSelection(item.id)"
                    class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700 flex-shrink-0" />

                  <!-- Student Avatar -->
                  <div
                    class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                    <img v-if="item.student && item.student.profileImage" :src="item.student.profileImage"
                      :alt="item.student.name" class="w-full h-full rounded-full object-cover" />
                    <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                      {{ getInitials(item.student?.nameKhmer || item.student?.nameEnglish || item.student?.name ||
                        '??') }}
                    </span>
                  </div>

                  <!-- Student Info -->
                  <div class="flex-1 min-w-0">
                    <div class="font-medium text-sm text-gray-900 dark:text-white truncate">
                      {{ item.student?.nameKhmer || item.student?.nameEnglish || item.student?.name || 'Unknown' }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {{ item.student?.id || item.studentId }}
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Area: Edit Form + Scrollable Certificate Preview -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Edit Form (Fixed at Top, No Scroll) -->
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow flex-shrink-0">
          <button @click="showEditForm = !showEditForm"
            class="w-full px-6 pt-3 pb-2 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <h2 class="text-md font-semibold text-gray-900 dark:text-white capitalize">{{ t('editCertificate') ||
              'EditCertificate Information' }}</h2>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform"
              :class="{ 'rotate-180': showEditForm }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div v-show="showEditForm" class="px-6 pb-6">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('studentNameKhmer') || 'Student Name (Khmer)' }} <span class="text-red-500">*</span>
                </label>
                <input v-model="certificateData.nameKhmer" type="text"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  :placeholder="t('enterNameKhmer') || 'Enter name in Khmer'" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('studentNameEnglish') || 'Student Name (English)' }} <span class="text-red-500">*</span>
                </label>
                <input v-model="certificateData.nameEnglish" type="text"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  :placeholder="t('enterNameEnglish') || 'Enter name in English'" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('completionDate') || 'Completion Date' }} <span class="text-red-500">*</span>
                </label>
                <input v-model="certificateData.date" type="date"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
            </div>
          </div>
        </div>

        <!-- Certificate Preview (No Scroll) -->
        <div
          class="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-md shadow-md overflow-hidden flex items-center justify-center"
          id="certificate-container">
          <div class="w-full h-full p-4 flex items-center justify-center">
            <div class="certificate-wrapper bg-white overflow-hidden relative mx-auto"
              style="width: 100%; max-width: 100%; max-height: 100%; aspect-ratio: 8.5/11; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);">
              <!-- Certificate Background Image -->
              <img :src="certificateImage" alt="Certificate Template"
                class="absolute inset-0 w-full h-full object-contain" style="z-index: 1;" />

              <!-- Overlay Content -->
              <div class="absolute inset-0" style="z-index: 2;">
                <!-- Student Name Khmer (Left side) -->
                <div class="absolute" style="top: 42%; left: 14%; width: 35%;">
                  <div class="text-center px-2"
                    style="font-size: 22px; font-weight: light; color: #b58618; line-height: 1.3; word-wrap: break-word; text-shadow: 0 1px 3px rgba(255, 255, 255, 0.9);">
                    {{ certificateData.nameKhmer || t('studentNameKhmer') || 'ឈ្មោះសិស្ស' }}
                  </div>
                </div>

                <!-- Student Name English (Right side) -->
                <div class="absolute " style="top: 42.5%; right: 9.5%; width: 35%;">
                  <div class="text-center px-2"
                    style="font-size: 19px; font-weight: bold; color: #b58618; font-family: 'Arial', 'Times New Roman', serif; line-height: 1.3; word-wrap: break-word; text-shadow: 0 1px 3px rgba(255, 255, 255, 0.9);">
                    {{ certificateData.nameEnglish || t('studentNameEnglish') || 'Name Student' }}
                  </div>
                </div>

                <!-- Completion Date (Bottom left) -->
                <div class="absolute" style="bottom: 24%; left: 48%;">
                  <div class="px-2"
                    style="font-size: 12px; color: #1d1c1a; text-shadow: 0 1px 3px rgba(255, 255, 255, 0.9);">
                    {{ formatDateKhmer(certificateData.date) }}
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
            <button @click="handlePrint"
              class="w-full px-4 py-3 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              {{ t('print') || 'Print' }}
            </button>
            <button @click="handleDownload" :disabled="isGenerating" :class="[
              'w-full px-2 py-3 rounded-sm text-[12px] transition-colors font-medium flex items-center justify-center gap-1',
              isGenerating
                ? 'bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            ]">
              <svg v-if="isGenerating" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span v-if="isGenerating">{{ t('generatingCertificates') || 'Generating...' }}</span>
              <span v-else-if="hasSelectedStudents">{{ t('download') || 'Download' }} ({{ selectedForDownload.size
              }})</span>
              <span v-else>{{ t('download') || 'Download' }} {{ t('currentCertificate') || 'Current' }}</span>
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
import { ref, reactive, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { addHistory } from '../utils/history'
import { textContains } from '../utils/search'
import certificateImage from '../assets/Certificate.png'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { success, error } = useToast()

// Edit form visibility
const showEditForm = ref(true)

// Graduated students list
const graduatedStudentsList = ref([])
const selectedGraduatedStudentId = ref(null)
const searchQuery = ref('')

// Download selection state
const selectedForDownload = ref(new Set())
const isGenerating = ref(false)

// Filtered graduated students based on search
const filteredGraduatedStudents = computed(() => {
  if (!searchQuery.value) {
    return graduatedStudentsList.value
  }

  return graduatedStudentsList.value.filter(item => {
    const student = item.student
    if (!student) return false

    return (
      textContains(student.nameKhmer || '', searchQuery.value) ||
      textContains(student.nameEnglish || '', searchQuery.value) ||
      textContains(student.name || '', searchQuery.value) ||
      textContains(student.id || '', searchQuery.value) ||
      textContains(item.studentId || '', searchQuery.value)
    )
  })
})

// Computed properties for selection
const selectAllChecked = computed(() => {
  if (filteredGraduatedStudents.value.length === 0) return false
  return filteredGraduatedStudents.value.every(item => selectedForDownload.value.has(item.id))
})

const hasSelectedStudents = computed(() => {
  return selectedForDownload.value.size > 0
})

// Certificate data
const certificateData = reactive({
  nameKhmer: '',
  nameEnglish: '',
  date: ''
})

// Get student initials
const getInitials = (name) => {
  if (!name) return '??'
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
}

// Load student certificate data
const loadStudentCertificate = (graduatedStudent) => {
  if (!graduatedStudent || !graduatedStudent.student) return

  const student = graduatedStudent.student
  certificateData.nameKhmer = student.nameKhmer || student.name || ''
  certificateData.nameEnglish = student.nameEnglish || student.name || ''

  // Set default date to today if not available
  if (graduatedStudent.graduatedDate) {
    certificateData.date = graduatedStudent.graduatedDate
  } else {
    const today = new Date()
    certificateData.date = today.toISOString().split('T')[0]
  }
}

// Toggle student selection for download
const toggleStudentSelection = (graduatedStudentId) => {
  if (selectedForDownload.value.has(graduatedStudentId)) {
    selectedForDownload.value.delete(graduatedStudentId)
  } else {
    selectedForDownload.value.add(graduatedStudentId)
  }
}

// Select student from sidebar (also toggles checkbox)
const selectStudent = (graduatedStudentId) => {
  selectedGraduatedStudentId.value = graduatedStudentId
  const selectedItem = graduatedStudentsList.value.find(item => item.id === graduatedStudentId)
  if (selectedItem) {
    loadStudentCertificate(selectedItem)
    // Update route without navigation
    router.replace({ params: { id: graduatedStudentId } })
    // Toggle checkbox state
    toggleStudentSelection(graduatedStudentId)
  }
}

// Toggle select all
const toggleSelectAll = () => {
  if (selectAllChecked.value) {
    // Deselect all filtered students
    filteredGraduatedStudents.value.forEach(item => {
      selectedForDownload.value.delete(item.id)
    })
  } else {
    // Select all filtered students
    filteredGraduatedStudents.value.forEach(item => {
      selectedForDownload.value.add(item.id)
    })
  }
}

// Load all graduated students
const loadGraduatedStudents = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')

    // Load graduated students and students
    const graduatedStudentsData = await loadDataFromJSON('../data/graduated_students.json', 'graduated_students_data')
    const studentsData = await loadDataFromJSON('../data/students.json', 'students_data')

    // Merge graduated students with student data
    graduatedStudentsList.value = graduatedStudentsData.map(gs => {
      const student = studentsData.find(s => s.id === gs.studentId)
      return {
        ...gs,
        student: student || null
      }
    })

    // If route has ID, select that student, otherwise select first
    const routeId = route.params.id
    if (routeId) {
      const found = graduatedStudentsList.value.find(gs => gs.id === routeId)
      if (found) {
        selectStudent(routeId)
      } else if (graduatedStudentsList.value.length > 0) {
        selectStudent(graduatedStudentsList.value[0].id)
      }
    } else if (graduatedStudentsList.value.length > 0) {
      selectStudent(graduatedStudentsList.value[0].id)
    }
  } catch (error) {
    console.error('Error loading graduated students:', error)
    // Fallback to localStorage
    try {
      const saved = localStorage.getItem('graduated_students_data')
      const students = JSON.parse(localStorage.getItem('students_data') || '[]')
      if (saved) {
        const graduatedStudentsData = JSON.parse(saved)
        graduatedStudentsList.value = graduatedStudentsData.map(gs => {
          const student = students.find(s => s.id === gs.studentId)
          return {
            ...gs,
            student: student || null
          }
        })

        // Select first student or route student
        const routeId = route.params.id
        if (routeId) {
          const found = graduatedStudentsList.value.find(gs => gs.id === routeId)
          if (found) {
            selectStudent(routeId)
          } else if (graduatedStudentsList.value.length > 0) {
            selectStudent(graduatedStudentsList.value[0].id)
          }
        } else if (graduatedStudentsList.value.length > 0) {
          selectStudent(graduatedStudentsList.value[0].id)
        }
      }
    } catch (e) {
      console.error('Error loading from localStorage:', e)
    }
  }
}

// Load student data from route params or sidebar
onMounted(() => {
  loadGraduatedStudents()
})

// Format date in Khmer format
const formatDateKhmer = (dateString) => {
  if (!dateString) return ''

  try {
    const date = new Date(dateString)
    const months = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ']
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${month} - ${day} - ${year}`
  } catch (error) {
    return dateString
  }
}

// Handle print
const handlePrint = () => {
  const studentName = certificateData.nameEnglish || certificateData.nameKhmer || 'Student'
  addHistory('print', {
    type: 'report',
    itemName: `Certificate - ${studentName}`,
    itemId: route.params.id || null,
    description: `Certificate printed - Student: ${studentName}`,
    user: 'Admin'
  })
  window.print()
}

// Handle download
const handleDownload = async () => {
  try {
    isGenerating.value = true

    // Check if any students are selected for bulk download
    if (selectedForDownload.value.size > 0) {
      // Bulk download: Generate certificates for all selected students
      const { generateAllCertificates } = await import('../utils/certificateGenerator')

      // Filter graduated students to only selected ones
      const selectedGraduatedStudents = graduatedStudentsList.value.filter(gs =>
        selectedForDownload.value.has(gs.id)
      )

      if (selectedGraduatedStudents.length === 0) {
        error(t('noStudentsSelected') || 'No students selected for download.')
        isGenerating.value = false
        return
      }

      // Extract graduated student data (without merged student object) for the generator
      const graduatedStudentsData = selectedGraduatedStudents.map(gs => ({
        id: gs.id,
        studentId: gs.studentId,
        graduatedDate: gs.graduatedDate,
        courses: gs.courses
      }))

      // Load students data from localStorage
      const studentsData = JSON.parse(localStorage.getItem('students_data') || '[]')

      if (studentsData.length === 0) {
        error(t('noStudentsData') || 'No student data found.')
        isGenerating.value = false
        return
      }

      // Generate certificates with progress callback
      await generateAllCertificates(
        graduatedStudentsData,
        studentsData,
        (completed, total) => {
          // Progress callback - could show progress bar if needed
          console.log(`Generating certificates: ${completed}/${total}`)
        }
      )

      addHistory('downloadInvoice', {
        type: 'report',
        itemName: `Bulk Certificates - ${selectedGraduatedStudents.length} Certificate(s)`,
        itemId: null,
        description: `Bulk certificates downloaded - ${selectedGraduatedStudents.length} certificate(s) generated`,
        user: 'Admin'
      })
      success(t('certificatesGeneratedSuccess') || `Successfully generated ${selectedGraduatedStudents.length} certificate(s)!`)
    } else {
      // Single download: Download the currently displayed certificate
      if (!certificateData.nameKhmer && !certificateData.nameEnglish) {
        error(t('noCertificateData') || 'No certificate data available to download.')
        isGenerating.value = false
        return
      }

      const { generateSingleCertificate } = await import('../utils/certificateGenerator')

      // Generate single certificate using current certificateData
      const blob = await generateSingleCertificate({
        nameKhmer: certificateData.nameKhmer || '',
        nameEnglish: certificateData.nameEnglish || '',
        date: certificateData.date || new Date().toISOString().split('T')[0]
      })

      // Create download link
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url

      // Create filename from student name
      const fileNameStudentName = (certificateData.nameEnglish || certificateData.nameKhmer || 'Certificate').replace(/[^a-zA-Z0-9]/g, '_')
      const dateStr = certificateData.date ? certificateData.date.replace(/-/g, '') : new Date().toISOString().split('T')[0].replace(/-/g, '')
      link.download = `Certificate_${fileNameStudentName}_${dateStr}.png`

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      const studentName = certificateData.nameEnglish || certificateData.nameKhmer || 'Student'
      addHistory('downloadInvoice', {
        type: 'report',
        itemName: `Certificate - ${studentName}`,
        itemId: route.params.id || null,
        description: `Certificate downloaded - Student: ${studentName}`,
        user: 'Admin'
      })
      success(t('certificateDownloaded') || 'Certificate downloaded successfully!')
    }
  } catch (err) {
    console.error('Error generating certificate:', err)
    error(t('certificatesGeneratedError') || 'Error generating certificate. Please try again.')
  } finally {
    isGenerating.value = false
  }
}

// Go back
const goBack = () => {
  router.back()
}
</script>

<style scoped>
.certificate-wrapper {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

  /* Hide left sidebar (student list) in CertificateView */
  .w-64,
  .w-64 * {
    display: none !important;
    visibility: hidden !important;
  }

  /* Hide right sidebar (action buttons) in CertificateView */
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

  /* Show only certificate container and its children */
  #certificate-container,
  #certificate-container * {
    visibility: visible !important;
    display: block !important;
  }

  #certificate-container {
    position: fixed !important;
    left: 0 !important;
    top: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    background: white !important;
    padding: 0 !important;
    margin: 0 !important;
    z-index: 9999 !important;
  }

  .certificate-wrapper {
    box-shadow: none !important;
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    max-height: 100% !important;
  }

  /* Ensure certificate image is visible */
  .certificate-wrapper img {
    visibility: visible !important;
    display: block !important;
  }

  /* Ensure overlay text is visible */
  .certificate-wrapper .absolute[style*="z-index: 2"] {
    visibility: visible !important;
    display: block !important;
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
