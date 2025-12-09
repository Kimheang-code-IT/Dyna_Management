<template>
  <div class="h-full flex flex-col overflow-hidden dark:bg-gray-900">
    <div class="flex flex-1 overflow-hidden gap-2">
      <!-- Left Sidebar: Student List -->
      <div class="w-64 flex-shrink-0 flex flex-col">
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow h-full overflow-hidden flex flex-col">
          <!-- Sidebar Header -->
          <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white">{{ t('studentCards') || 'Student Cards' }}
              </h3>
              <label class="flex items-center gap-2 cursor-pointer text-xs text-gray-700 dark:text-gray-300">
                <input type="checkbox" :checked="selectAllChecked" @change="toggleSelectAll"
                  class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700" />
                <span>{{ t('selectAll') || 'Select All' }}</span>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ filteredStudents.length }} {{ t('total') || 'total'
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
            <div v-if="filteredStudents.length === 0" class="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
              {{ searchQuery ? (t('noResults') || 'No results found') : (t('noStudents') || 'No students found') }}
            </div>
            <div v-else class="p-2 space-y-2">
              <button v-for="student in filteredStudents" :key="student.id" @click="selectStudent(student.id)" :class="[
                'w-full p-3 rounded-sm text-left transition-colors',
                selectedStudentId === student.id
                  ? 'bg-blue-100 dark:bg-blue-900 border-2 border-blue-500'
                  : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-transparent'
              ]">
                <div class="flex items-center gap-3">
                  <input type="checkbox" :checked="selectedForDownload.has(student.id)"
                    @click.stop="toggleStudentSelection(student.id)"
                    class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 focus:ring-2 bg-white dark:bg-gray-700 flex-shrink-0" />
                  <!-- Student Avatar -->
                  <div
                    class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-100 dark:bg-blue-900 overflow-hidden">
                    <img v-if="student.profileImage" :src="student.profileImage"
                      :alt="student.nameEnglish || student.name || student.nameKhmer"
                      class="w-full h-full rounded-full object-cover" />
                    <span v-else class="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                      {{ getInitials(student.nameKhmer || student.nameEnglish || student.name || '??') }}
                    </span>
                  </div>

                  <!-- Student Info -->
                  <div class="flex-1 min-w-0">
                    <div class="font-medium text-sm text-gray-900 dark:text-white truncate akbalthom-khmer">
                      {{ student.nameKhmer || student.nameEnglish || student.name || 'Unknown' }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {{ student.id }}
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
                  {{ t('studentNameKhmer') || 'Student Name (Khmer)' }} <span class="text-red-500">*</span>
                </label>
                <input v-model="cardData.nameKhmer" type="text"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white akbalthom-khmer"
                  :placeholder="t('enterNameKhmer') || 'Enter name in Khmer'" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('studentNameEnglish') || 'Student Name (English)' }} <span class="text-red-500">*</span>
                </label>
                <input v-model="cardData.nameEnglish" type="text"
                  class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  :placeholder="t('enterNameEnglish') || 'Enter name in English'" />
              </div>
            </div>
          </div>
        </div>

        <!-- Card Preview (No Scroll) -->
        <div class="flex-1  dark:from-gray-800 dark:to-gray-900 overflow-hidden flex flex-col p-4" id="card-container">
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

          <div class=" overflow-hidden relative mx-auto" style="width: 100%;max-width:600px;height: 900px;  " :style="{
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

                <!-- Student Name Khmer -->
                <div class="mb-2">

                  <div class="text-lg font-semibold text-gray-900 akbalthom-khmer">
                    {{ cardData.nameKhmer || t('studentNameKhmer') || 'ឈ្មោះសិស្ស' }}
                  </div>
                </div>

                <!-- Student Name English -->
                <div class="mb-2">

                  <div class="text-base font-semibold text-gray-900">
                    {{ cardData.nameEnglish || t('studentNameEnglish') || 'Student Name' }}
                  </div>
                </div>

                <!-- Student ID -->
                <div class="mb-2">

                  <div class="text-sm font-medium text-gray-800">
                    {{ cardData.studentId || 'N/A' }}
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
              :disabled="isGenerating || (!selectedForDownload.size && !selectedStudentId)"
              class="w-full px-3 py-2 text-sm rounded-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              :class="(!selectedForDownload.size && !selectedStudentId) || isGenerating
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
              :disabled="isGenerating || (!selectedForDownload.size && !selectedStudentId)"
              class="w-full px-3 py-2 text-sm rounded-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              :class="isGenerating || (!selectedForDownload.size && !selectedStudentId)
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
const { t } = useI18n()
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
  studentId: '',
  course: '',
  session: '',
  issueDate: '',
  profileImage: ''
})

// Sidebar state
const students = ref([])
const enrollments = ref([])
const selectedStudentId = ref(null)
const searchQuery = ref('')
const selectedForDownload = ref(new Set())

const filteredStudents = computed(() => {
  if (!searchQuery.value) return students.value
  const q = searchQuery.value.toLowerCase()
  return students.value.filter((s) =>
    (s.nameKhmer || '').toLowerCase().includes(q) ||
    (s.nameEnglish || '').toLowerCase().includes(q) ||
    (s.name || '').toLowerCase().includes(q) ||
    (s.id || '').toLowerCase().includes(q)
  )
})

const selectAllChecked = computed(() => {
  if (!filteredStudents.value.length) return false
  return filteredStudents.value.every((s) => selectedForDownload.value.has(s.id))
})

const getInitials = (name) => {
  if (!name) return '??'
  const parts = name.trim().split(' ')
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  return name.substring(0, 2).toUpperCase()
}

// Load student data
const loadStudent = async () => {
  try {
    isLoading.value = true
    const studentId = route.params.id

    if (!studentId) {
      error(t('studentNotFound') || 'Student ID not found.')
      router.back()
      return
    }

    const { loadDataFromJSON } = await import('../utils/dataLoader')
    const studentsData = await loadDataFromJSON('../data/students.json', 'students_data')
    enrollments.value = await loadDataFromJSON('../data/enrollments.json', 'enrollments_data')
    students.value = studentsData

    const student = studentsData.find(s => s.id === studentId)

    if (!student) {
      error(t('studentNotFound') || 'Student not found.')
      router.back()
      return
    }

    // Populate card data
    cardData.nameKhmer = student.nameKhmer || student.name || ''
    cardData.nameEnglish = student.nameEnglish || student.name || ''
    cardData.studentId = student.id || ''
    cardData.profileImage = student.profileImage || ''
    selectedStudentId.value = student.id

    // Try to get course and session from enrollments
    try {
      const enrollment = enrollments.value.find(e => e.studentId === studentId)
      if (enrollment) {
        cardData.course = enrollment.courseName || enrollment.course || ''
        cardData.session = enrollment.session || ''
      }
    } catch (e) {
      console.log('Could not load enrollment data:', e)
    }

    // Set default issue date to today
    const today = new Date()
    cardData.issueDate = today.toISOString().split('T')[0]

    // Default select first if none
    if (!selectedStudentId.value && students.value.length > 0) {
      selectedStudentId.value = students.value[0].id
    }
  } catch (err) {
    console.error('Error loading student:', err)
    // Fallback to localStorage
    try {
      const savedStudents = JSON.parse(localStorage.getItem('students_data') || '[]')
      const savedEnrollments = JSON.parse(localStorage.getItem('enrollments_data') || '[]')
      students.value = savedStudents
      enrollments.value = savedEnrollments
      const student = savedStudents.find(s => s.id === route.params.id)

      if (student) {
        cardData.nameKhmer = student.nameKhmer || student.name || ''
        cardData.nameEnglish = student.nameEnglish || student.name || ''
        cardData.studentId = student.id || ''
        cardData.profileImage = student.profileImage || ''
        selectedStudentId.value = student.id

        // Try to get course from enrollments
        const enrollments = JSON.parse(localStorage.getItem('enrollments_data') || '[]')
        const enrollment = enrollments.find(e => e.studentId === student.id)
        if (enrollment) {
          cardData.course = enrollment.courseName || enrollment.course || ''
          cardData.session = enrollment.session || ''
        }

        const today = new Date()
        cardData.issueDate = today.toISOString().split('T')[0]
      } else {
        error(t('studentNotFound') || 'Student not found.')
        router.back()
      }

      if (!selectedStudentId.value && students.value.length > 0) {
        selectedStudentId.value = students.value[0].id
      }
    } catch (e) {
      console.error('Error loading from localStorage:', e)
      error(t('errorLoadingStudent') || 'Error loading student data.')
      router.back()
    }
  } finally {
    isLoading.value = false
  }
}

// Format date
const formatDate = (dateString) => {
  if (!dateString) return t('notSet') || 'Not Set'
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch (e) {
    return dateString
  }
}

// Handle print
const handlePrint = () => {
  window.print()
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

    const generateBlobFor = async (student) => {
      if (student) {
        populateCardFromStudent(student)
        await nextTick()
      }
      const canvas = await html2canvas(cardElement.querySelector('.card-wrapper'), {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false
      })
      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error('No blob'))
          resolve({ blob, student })
        }, 'image/png')
      })
    }

    if (selectedForDownload.value.size > 0) {
      const originalStudentId = selectedStudentId.value
      const tasks = []
      for (const id of selectedForDownload.value) {
        const st = students.value.find((s) => s.id === id)
        if (st) tasks.push(generateBlobFor(st))
      }
      const results = await Promise.all(tasks)
      results.forEach(({ blob, student }) => {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        const studentName = (student?.nameEnglish || student?.nameKhmer || 'StudentCard').replace(/[^a-zA-Z0-9]/g, '_')
        const dateStr = (cardData.issueDate || new Date().toISOString().split('T')[0]).replace(/-/g, '')
        link.download = `StudentCard_${studentName}_${dateStr}.png`
        link.href = url
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      })
      if (originalStudentId) {
        const original = students.value.find((s) => s.id === originalStudentId)
        if (original) populateCardFromStudent(original)
      }
      addHistory('update', {
        type: 'report',
        itemName: `${selectedForDownload.value.size} Student Card(s)`,
        itemId: null,
        description: `Bulk student cards downloaded - ${selectedForDownload.value.size} card(s) generated`,
        user: 'Admin'
      })
      success(t('cardDownloaded') || 'Cards downloaded successfully!')
    } else {
      const { blob } = await generateBlobFor(null)
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      const fileNameStudentName = (cardData.nameEnglish || cardData.nameKhmer || 'StudentCard').replace(/[^a-zA-Z0-9]/g, '_')
      const dateStr = cardData.issueDate ? cardData.issueDate.replace(/-/g, '') : new Date().toISOString().split('T')[0].replace(/-/g, '')
      link.download = `StudentCard_${fileNameStudentName}_${dateStr}.png`
      link.href = url
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
      const studentName = cardData.nameEnglish || cardData.nameKhmer || 'Student'
      addHistory('update', {
        type: 'report',
        itemName: studentName,
        itemId: route.params.id || null,
        description: `Student card downloaded - Student: ${studentName}`,
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

// Go back
const goBack = () => {
  router.back()
}

// Load student on mount
onMounted(() => {
  loadStudent()
})

// Populate card from student helper
const populateCardFromStudent = (student) => {
  if (!student) return
  cardData.nameKhmer = student.nameKhmer || student.name || ''
  cardData.nameEnglish = student.nameEnglish || student.name || ''
  cardData.studentId = student.id || ''
  cardData.profileImage = student.profileImage || ''
  const enrollment = enrollments.value.find((e) => e.studentId === student.id)
  if (enrollment) {
    cardData.course = enrollment.courseName || enrollment.course || ''
    cardData.session = enrollment.session || ''
  }
  const today = new Date()
  cardData.issueDate = today.toISOString().split('T')[0]
}

// Select student from sidebar
const selectStudent = (studentId) => {
  const student = students.value.find(s => s.id === studentId)
  if (!student) return
  selectedStudentId.value = studentId
  populateCardFromStudent(student)

  // update route without navigation
  router.replace({ params: { id: studentId } })
}

// Selection toggles
const toggleStudentSelection = (studentId) => {
  if (selectedForDownload.value.has(studentId)) {
    selectedForDownload.value.delete(studentId)
  } else {
    selectedForDownload.value.add(studentId)
  }
}

const toggleSelectAll = () => {
  if (selectAllChecked.value) {
    filteredStudents.value.forEach((s) => selectedForDownload.value.delete(s.id))
  } else {
    filteredStudents.value.forEach((s) => selectedForDownload.value.add(s.id))
  }
}

const handlePrintSelected = async () => {
  if (!selectedForDownload.value.size) {
    const studentName = cardData.nameEnglish || cardData.nameKhmer || 'Student'
    addHistory('update', {
      type: 'report',
      itemName: studentName,
      itemId: route.params.id || null,
      description: `Student card printed - Student: ${studentName}`,
      user: 'Admin'
    })
    handlePrint()
    return
  }
  const originalStudentId = selectedStudentId.value
  const cardElement = document.getElementById('card-container')
  if (!cardElement) {
    error(t('cardElementNotFound') || 'Card element not found.')
    return
  }
  const images = []
  for (const id of selectedForDownload.value) {
    const st = students.value.find((s) => s.id === id)
    if (!st) continue
    populateCardFromStudent(st)
    await nextTick()
    const canvas = await html2canvas(cardElement.querySelector('.card-wrapper'), {
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false
    })
    images.push(canvas.toDataURL('image/png'))
  }
  if (originalStudentId) {
    const original = students.value.find((s) => s.id === originalStudentId)
    if (original) populateCardFromStudent(original)
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
    itemName: `${selectedForDownload.value.size} Student Card(s)`,
    itemId: null,
    description: `Bulk student cards printed - ${selectedForDownload.value.size} card(s)`,
    user: 'Admin'
  })
  w.print()
}
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
