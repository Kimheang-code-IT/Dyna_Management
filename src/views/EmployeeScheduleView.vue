<template>
  <div :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-2 sm:gap-4">
      <!-- Left Section: Staff List -->
      <div class="lg:col-span-1 bg-white dark:bg-gray-800 rounded-sm shadow">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4">{{ t('staff') }}</h2>
          
          <!-- Search Bar -->
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              v-model="staffSearchQuery"
              type="text"
              :placeholder="t('searchByName')"
              class="w-full pl-8 sm:pl-10 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]"
            />
          </div>
        </div>
        
        <!-- Staff List -->
        <div class="overflow-y-auto max-h-[calc(100vh-200px)]">
          <div
            v-for="staff in filteredStaff"
            :key="staff.employee.id"
            @click="selectStaff(staff)"
            :class="[
              'p-3 border-b border-gray-200 dark:border-gray-700 cursor-pointer transition-colors',
              selectedStaff && selectedStaff.employee.id === staff.employee.id
                ? 'bg-blue-50 dark:bg-blue-900/20'
                : 'hover:bg-gray-50 dark:hover:bg-gray-700'
            ]"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-blue-100 dark:bg-blue-900">
                <img
                  v-if="staff.employee.profileImage"
                  :src="staff.employee.profileImage"
                  :alt="staff.employee.nameEnglish || staff.employee.nameKhmer || staff.employee.name"
                  class="w-full h-full object-cover"
                />
                <span
                  v-else
                  class="text-blue-600 dark:text-blue-400 font-semibold text-xs"
                >{{ (staff.employee.nameEnglish || staff.employee.nameKhmer || staff.employee.name || '').charAt(0).toUpperCase() }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-medium text-gray-900 dark:text-white truncate">
                  <div v-if="staff.employee.nameKhmer" class="akbalthom-khmer text-xs">{{ staff.employee.nameKhmer }}</div>
                  <div v-if="staff.employee.nameEnglish" class="text-xs">{{ staff.employee.nameEnglish }}</div>
                  <div v-if="!staff.employee.nameKhmer && !staff.employee.nameEnglish">{{ staff.employee.name }}</div>
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ getDepartment(staff.employee) }}</div>
                <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ staff.shifts.length }} {{ t('blocks') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Right Section: Weekly Board -->
      <div class="lg:col-span-3 bg-white dark:bg-gray-800 rounded-sm shadow">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-bold text-gray-900 dark:text-white">{{ t('weeklyBoard') }}</h2>
              <p v-if="selectedStaff" class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ (selectedStaff.employee.nameEnglish || selectedStaff.employee.nameKhmer || selectedStaff.employee.name) }}'s {{ t('shifts') }}</p>
            </div>
            <button
              v-if="selectedStaff"
              @click="showShiftList = !showShiftList"
              class="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              {{ t('viewShiftList') }}
            </button>
          </div>
        </div>
        
        <div v-if="selectedStaff" class="p-4">
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {{ t('clickDragToDrawShift') }} {{ t('clickBlockToRemove') }}
          </p>
          
          <!-- Weekly Schedule Grid -->
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full">
              <!-- Time Header -->
              <div class="flex border-b border-gray-200 dark:border-gray-700">
                <div class="w-20 flex-shrink-0 p-2 text-xs font-semibold text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700">
                  {{ t('day') }}
                </div>
                <div class="flex-1 grid grid-cols-18 gap-0">
                  <div
                    v-for="hour in timeSlots"
                    :key="hour"
                    class="p-2 text-xs text-center text-gray-600 dark:text-gray-400 border-r border-gray-200 dark:border-gray-700"
                  >
                    {{ hour }}
                  </div>
                </div>
              </div>
              
              <!-- Days Rows -->
              <div
                v-for="day in daysOfWeek"
                :key="day"
                class="flex border-b border-gray-200 dark:border-gray-700 relative"
                @mousedown="handleMouseDown($event, day)"
                @mousemove="handleMouseMove($event, day)"
                @mouseup="handleMouseUp($event, day)"
                @mouseleave="handleMouseLeave"
              >
                <!-- Day Label -->
                <div class="w-20 flex-shrink-0 p-2 text-xs font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                  {{ day }}
                </div>
                
                <!-- Time Slots Grid -->
                <div class="flex-1 flex relative" style="min-height: 60px;">
                  <!-- Time slot cells -->
                  <div
                    v-for="(hour, index) in timeSlots"
                    :key="hour"
                    :data-hour="index"
                    :data-day="day"
                    class="flex-1 border-r border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors min-w-[60px]"
                    :class="[
                      isDragging && isInDragRange(day, index) ? 'bg-blue-100 dark:bg-blue-900/30' : ''
                    ]"
                  ></div>
                  
                  <!-- Shift Blocks -->
                  <div
                    v-for="shift in getShiftsForDay(day)"
                    :key="shift.id"
                    :style="getShiftStyle(shift)"
                    @dblclick="removeShift(shift)"
                    class="absolute bg-blue-500 dark:bg-blue-600 text-white rounded-sm p-2 flex flex-col justify-between group cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                  >
                    <div class="flex items-center justify-between w-full">
                      <div class="flex-1 min-w-0">
                        <div class="text-xs font-medium">{{ formatTimeRange(shift.startTime, shift.endTime) }}</div>
                      </div>
                      <div class="flex items-center gap-1 ml-2">
                        <button
                          v-if="canMergeShift(shift, day)"
                          @click.stop="mergeAdjacentShifts(shift, day)"
                          class="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:text-green-200"
                          :title="t('merge')"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </button>
                        <button
                          @click.stop="openNoteDialog(shift)"
                          class="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:text-blue-200"
                          :title="t('note')"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          @click.stop="removeShift(shift)"
                          class="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:text-red-200"
                          :title="t('remove')"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <!-- Note Display -->
                    <div v-if="shift.note" class="mt-1 text-[10px] text-blue-100 dark:text-blue-200 truncate" :title="shift.note">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      {{ shift.note }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Empty State -->
        <div v-else class="p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('selectStaffToManageSchedule') }}</p>
        </div>
      </div>
    </div>
    
    <!-- Shift List Modal - Visual Schedule Board -->
    <Transition name="fade">
      <div
        v-if="showShiftList && selectedStaff"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="showShiftList = false"
      >
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-4 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto" id="schedule-board-view">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('shiftList') }} - {{ (selectedStaff.employee.nameEnglish || selectedStaff.employee.nameKhmer || selectedStaff.employee.name) }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ t('weeklySchedule') || 'Weekly Schedule' }}</p>
            </div>
            <button
              @click="showShiftList = false"
              class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Compact Visual Schedule Board -->
          <div v-if="selectedStaff.shifts.length > 0" class="border border-gray-200 dark:border-gray-700 rounded-sm overflow-hidden">
            <!-- Time Header -->
            <div class="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
              <div class="w-16 flex-shrink-0 p-1.5 text-[10px] font-semibold text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-600 text-center">
                {{ t('day') }}
              </div>
              <div class="flex-1 grid grid-cols-18 gap-0">
                <div
                  v-for="hour in timeSlots"
                  :key="hour"
                  class="p-1 text-[9px] text-center text-gray-600 dark:text-gray-400 border-r border-gray-200 dark:border-gray-600"
                >
                  {{ hour }}
                </div>
              </div>
            </div>
            
            <!-- Days Rows -->
            <div
              v-for="day in daysOfWeek"
              :key="day"
              class="flex border-b border-gray-200 dark:border-gray-700 relative"
              style="min-height: 40px;"
            >
              <!-- Day Label -->
              <div class="w-16 flex-shrink-0 p-1.5 text-[10px] font-medium text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-center">
                {{ day }}
              </div>
              
              <!-- Time Slots Grid -->
              <div class="flex-1 flex relative" style="min-height: 40px;">
                <!-- Time slot cells -->
                <div
                  v-for="(hour) in timeSlots"
                  :key="hour"
                  class="flex-1 border-r border-gray-200 dark:border-gray-600 min-w-[30px]"
                ></div>
                
                <!-- Shift Blocks (View Only) -->
                <div
                  v-for="shift in getShiftsForDay(day)"
                  :key="shift.id"
                  :style="getShiftStyleForView(shift)"
                  class="absolute bg-blue-500 dark:bg-blue-600 text-white rounded text-[9px] p-1 flex flex-col justify-center"
                >
                  <div class="font-medium whitespace-nowrap">{{ formatTimeRange(shift.startTime, shift.endTime) }}</div>
                  <div v-if="shift.note" class="text-[8px] text-blue-100 dark:text-blue-200 truncate mt-0.5" :title="shift.note">
                    {{ shift.note }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Empty State -->
          <div v-else class="text-center py-12 text-gray-500 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p class="text-sm">{{ t('noShifts') }}</p>
          </div>
        </div>
      </div>
    </Transition>
    
    <!-- Note Dialog -->
    <Transition name="fade">
      <div
        v-if="showNoteDialog"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="showNoteDialog = false"
      >
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ t('addNote') }}</h3>
            <button
              @click="showNoteDialog = false"
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
                {{ t('note') }}
              </label>
              <textarea
                v-model="shiftNote"
                rows="4"
                :placeholder="t('enterNote')"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 resize-y"
              ></textarea>
            </div>
          </div>
          
          <div class="flex gap-3 mt-6">
            <button
              @click="showNoteDialog = false"
              class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              {{ t('cancel') }}
            </button>
            <button
              @click="saveNote"
              class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
            >
              {{ t('save') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
    
    <!-- Success Message Toast -->
    <Transition name="toast">
      <div
        v-if="showSuccessMessage"
        class="fixed top-4 right-4 bg-green-500 text-white rounded-sm shadow-lg p-4 flex items-center gap-3 z-50 min-w-[300px]"
      >
        <div class="w-8 h-8 bg-white dark:bg-gray-700 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="flex-1">
          <p class="font-semibold">{{ successMessageTitle }}</p>
          <p class="text-sm text-green-50">{{ successMessageText }}</p>
        </div>
        <button
          @click="showSuccessMessage = false"
          class="text-white hover:text-green-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

// Load schedules from JSON file or localStorage
const loadSchedules = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')
    const schedulesData = await loadDataFromJSON('../data/employee_schedules.json', 'employee_schedules_data')
    const employeesData = await loadDataFromJSON('../data/employees.json', 'employees_data')
    
    // Merge schedules with employee data
    schedules.value = employeesData.map(emp => {
      const schedule = schedulesData.find(s => s.employeeId === emp.id)
      const staffSchedule = {
        employee: emp,
        shifts: schedule ? [...schedule.shifts] : []
      }
      
      // Auto-merge adjacent shifts for each day when loading
      if (staffSchedule.shifts.length > 0) {
        const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        daysOfWeek.forEach(day => {
          autoMergeShiftsForDayInSchedule(staffSchedule, day)
        })
      }
      
      return staffSchedule
    })
    
    saveSchedules()
  } catch (error) {
    console.error('Error loading schedules:', error)
    const saved = localStorage.getItem('employee_schedules_data')
    if (saved) {
      const schedulesData = JSON.parse(saved)
      const employeesData = JSON.parse(localStorage.getItem('employees_data') || '[]')
      schedules.value = employeesData.map(emp => {
        const schedule = schedulesData.find(s => s.employeeId === emp.id)
        const staffSchedule = {
          employee: emp,
          shifts: schedule ? [...schedule.shifts] : []
        }
        
        // Auto-merge adjacent shifts for each day when loading
        if (staffSchedule.shifts.length > 0) {
          const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          daysOfWeek.forEach(day => {
            autoMergeShiftsForDayInSchedule(staffSchedule, day)
          })
        }
        
        return staffSchedule
      })
    } else {
      schedules.value = []
    }
  }
}

// Save schedules to localStorage
const saveSchedules = () => {
  try {
    const dataToSave = schedules.value.map(s => ({
      employeeId: s.employee.id,
      shifts: s.shifts
    }))
    localStorage.setItem('employee_schedules_data', JSON.stringify(dataToSave))
  } catch (error) {
    console.error('Error saving schedules:', error)
  }
}

const schedules = ref([])
const staffSearchQuery = ref('')
const selectedStaff = ref(null)
const showShiftList = ref(false)

// Drag and drop state
const isDragging = ref(false)
const dragStart = ref(null)
const dragEnd = ref(null)
const dragDay = ref(null)

// Note dialog state
const showNoteDialog = ref(false)
const currentShift = ref(null)
const shiftNote = ref('')

// Success message state
// Toast state removed - now using global ToastContainer

// Time slots (6:00 AM to 11:00 PM)
const timeSlots = computed(() => {
  const slots = []
  for (let hour = 6; hour <= 23; hour++) {
    const time = hour < 12 
      ? `${hour}:00 AM` 
      : hour === 12 
      ? '12:00 PM' 
      : hour === 23
      ? '11:00 PM'
      : `${hour - 12}:00 PM`
    slots.push(time)
  }
  return slots
})

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const dayNames = {
  'Mon': 'Monday',
  'Tue': 'Tuesday',
  'Wed': 'Wednesday',
  'Thu': 'Thursday',
  'Fri': 'Friday',
  'Sat': 'Saturday',
  'Sun': 'Sunday'
}

// Computed properties
const filteredStaff = computed(() => {
  if (!staffSearchQuery.value) return schedules.value
  
  const query = staffSearchQuery.value.toLowerCase()
  return schedules.value.filter(s => 
    (s.employee.nameKhmer && s.employee.nameKhmer.toLowerCase().includes(query)) ||
    (s.employee.nameEnglish && s.employee.nameEnglish.toLowerCase().includes(query)) ||
    (s.employee.name && s.employee.name.toLowerCase().includes(query)) ||
    (s.employee.id && s.employee.id.toLowerCase().includes(query)) ||
    (s.employee.role && s.employee.role.toLowerCase().includes(query)) ||
    (s.employee.province && s.employee.province.toLowerCase().includes(query))
  )
})

// Get department from employee
const getDepartment = (employee) => {
  if (!employee) return 'N/A'
  
  const departmentMap = {
    'Manager': 'Management',
    'Teacher': 'Teaching & Academics',
    'Administrator': 'Operations',
    'Coordinator': 'Admissions'
  }
  
  return departmentMap[employee.role] || employee.role || 'N/A'
}

// Get shifts for a specific day
const getShiftsForDay = (day) => {
  if (!selectedStaff.value) return []
  return selectedStaff.value.shifts.filter(shift => shift.day === day)
}

// Get shift style for positioning
const getShiftStyle = (shift) => {
  const startHour = parseTime(shift.startTime)
  const endHour = parseTime(shift.endTime)
  
  // Find the slot indices
  let startIndex = -1
  let endIndex = -1
  
  timeSlots.value.forEach((slot, index) => {
    const slotHour = parseTimeSlot(slot)
    if (startIndex === -1 && slotHour >= startHour) {
      startIndex = index
    }
    if (endIndex === -1 && slotHour >= endHour) {
      endIndex = index
    }
  })
  
  if (startIndex === -1) startIndex = 0
  if (endIndex === -1) endIndex = timeSlots.value.length
  
  const totalSlots = timeSlots.value.length
  const left = (startIndex / totalSlots) * 100
  const width = ((endIndex - startIndex) / totalSlots) * 100
  
  return {
    left: `${left}%`,
    width: `${width}%`,
    top: '4px',
    bottom: '4px',
    minHeight: shift.note ? '50px' : 'auto'
  }
}

// Get shift style for view-only schedule board (compact version)
const getShiftStyleForView = (shift) => {
  const startHour = parseTime(shift.startTime)
  const endHour = parseTime(shift.endTime)
  
  // Find the slot indices
  let startIndex = -1
  let endIndex = -1
  
  timeSlots.value.forEach((slot, index) => {
    const slotHour = parseTimeSlot(slot)
    if (startIndex === -1 && slotHour >= startHour) {
      startIndex = index
    }
    if (endIndex === -1 && slotHour >= endHour) {
      endIndex = index
    }
  })
  
  if (startIndex === -1) startIndex = 0
  if (endIndex === -1) endIndex = timeSlots.value.length
  
  const totalSlots = timeSlots.value.length
  const left = (startIndex / totalSlots) * 100
  const width = ((endIndex - startIndex) / totalSlots) * 100
  
  return {
    left: `${left}%`,
    width: `${width}%`,
    top: '2px',
    bottom: '2px',
    minHeight: shift.note ? '35px' : '25px'
  }
}

// Parse time string (HH:MM) to hour number
const parseTime = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number)
  return hours + minutes / 60
}

// Parse time slot string to hour number
const parseTimeSlot = (timeSlot) => {
  const match = timeSlot.match(/(\d+):00 (AM|PM)/)
  if (!match) return 0
  
  let hour = parseInt(match[1])
  const period = match[2]
  
  if (period === 'PM' && hour !== 12) hour += 12
  if (period === 'AM' && hour === 12) hour = 0
  
  return hour
}

// Format time range
const formatTimeRange = (start, end) => {
  return `${start} – ${end}`
}

// Check if index is in drag range
const isInDragRange = (day, index) => {
  if (!isDragging.value || !dragStart.value || dragEnd.value === null || dragDay.value !== day) return false
  
  const start = Math.min(dragStart.value, dragEnd.value)
  const end = Math.max(dragStart.value, dragEnd.value)
  
  return index >= start && index <= end
}

// Handle mouse down (start drag)
const handleMouseDown = (event, day) => {
  if (!selectedStaff.value) return
  
  // Don't start drag if clicking on a shift block
  if (event.target.closest('.bg-blue-500, .bg-blue-600')) return
  
  const cell = event.target.closest('[data-hour]')
  if (!cell) return
  
  const hourIndex = parseInt(cell.getAttribute('data-hour'))
  
  isDragging.value = true
  dragStart.value = hourIndex
  dragEnd.value = hourIndex
  dragDay.value = day
  
  event.preventDefault()
  event.stopPropagation()
}

// Handle mouse move (during drag)
const handleMouseMove = (event, day) => {
  if (!isDragging.value || dragDay.value !== day) return
  
  const cell = event.target.closest('[data-hour]')
  if (!cell) return
  
  const hourIndex = parseInt(cell.getAttribute('data-hour'))
  if (hourIndex !== dragEnd.value) {
    dragEnd.value = hourIndex
  }
  
  event.preventDefault()
}

// Handle mouse up (end drag)
const handleMouseUp = (event, day) => {
  if (!isDragging.value || dragStart.value === null || dragEnd.value === null || dragDay.value !== day) {
    resetDrag()
    return
  }
  
  // Don't create shift if clicking on a shift block
  if (event.target.closest('.bg-blue-500, .bg-blue-600')) {
    resetDrag()
    return
  }
  
  const startIndex = Math.min(dragStart.value, dragEnd.value)
  const endIndex = Math.max(dragStart.value, dragEnd.value)
  
  // Allow single-hour shifts (startIndex === endIndex means 1 hour)
  // Create shift
  const startTime = indexToTime(startIndex)
  const endTime = indexToTime(endIndex + 1)
  
  // Check for overlapping shifts
  const existingShifts = getShiftsForDay(day)
  const overlaps = existingShifts.some(shift => {
    const shiftStart = parseTime(shift.startTime)
    const shiftEnd = parseTime(shift.endTime)
    const newStart = parseTime(startTime)
    const newEnd = parseTime(endTime)
    
    return (newStart < shiftEnd && newEnd > shiftStart)
  })
  
  if (overlaps) {
    error(t('shiftOverlaps'))
    resetDrag()
    return
  }
  
  // Add new shift
  const newShift = {
    id: `SHIFT${Date.now()}`,
    day: day,
    startTime: startTime,
    endTime: endTime,
    note: ''
  }
  
  selectedStaff.value.shifts.push(newShift)
  
  // Auto-merge adjacent shifts
  autoMergeShiftsForDay(day)
  
  saveSchedules()
  success(`${t('shiftAdded')}: ${t('shiftAddedSuccess')}`)
  
  resetDrag()
  event.preventDefault()
  event.stopPropagation()
}

// Handle mouse leave (cancel drag)
const handleMouseLeave = () => {
  resetDrag()
}

// Reset drag state
const resetDrag = () => {
  isDragging.value = false
  dragStart.value = null
  dragEnd.value = null
  dragDay.value = null
}

// Convert index to time string
const indexToTime = (index) => {
  let hour = 6 + index // Starting from 6 AM
  if (hour > 23) hour = 23 // Cap at 11 PM
  const hours = hour < 10 ? `0${hour}` : `${hour}`
  return `${hours}:00`
}

// Select staff
const selectStaff = (staff) => {
  selectedStaff.value = staff
  showShiftList.value = false
}

// Check if a shift can be merged with an adjacent shift
const canMergeShift = (shift, day) => {
  if (!selectedStaff.value) return false
  
  const dayShifts = getShiftsForDay(day)
  const adjacentShift = dayShifts.find(s => {
    if (s.id === shift.id) return false
    
    // Check if shift ends where another starts (shift -> adjacent)
    if (shift.endTime === s.startTime) return true
    
    // Check if another ends where shift starts (adjacent -> shift)
    if (s.endTime === shift.startTime) return true
    
    return false
  })
  
  return !!adjacentShift
}

// Find adjacent shift
const findAdjacentShift = (shift, day) => {
  if (!selectedStaff.value) return null
  
  const dayShifts = getShiftsForDay(day)
  return dayShifts.find(s => {
    if (s.id === shift.id) return false
    
    // Check if shift ends where another starts (shift -> adjacent)
    if (shift.endTime === s.startTime) return true
    
    // Check if another ends where shift starts (adjacent -> shift)
    if (s.endTime === shift.startTime) return true
    
    return false
  })
}

// Auto-merge all adjacent shifts for a specific day (for selectedStaff)
const autoMergeShiftsForDay = (day) => {
  if (!selectedStaff.value) return
  
  let merged = true
  while (merged) {
    merged = false
    const dayShifts = selectedStaff.value.shifts.filter(shift => shift.day === day)
    
    // Sort shifts by start time
    const sortedShifts = [...dayShifts].sort((a, b) => {
      return parseTime(a.startTime) - parseTime(b.startTime)
    })
    
    // Find and merge adjacent shifts
    for (let i = 0; i < sortedShifts.length - 1; i++) {
      const currentShift = sortedShifts[i]
      const nextShift = sortedShifts[i + 1]
      
      // Check if current shift ends where next shift starts
      if (currentShift.endTime === nextShift.startTime) {
        mergeTwoShifts(currentShift, nextShift)
        merged = true
        break // Restart the loop after merging
      }
    }
  }
}

// Auto-merge all adjacent shifts for a specific day (for a schedule object)
const autoMergeShiftsForDayInSchedule = (staffSchedule, day) => {
  if (!staffSchedule || !staffSchedule.shifts) return
  
  let merged = true
  while (merged) {
    merged = false
    const dayShifts = staffSchedule.shifts.filter(shift => shift.day === day)
    
    // Sort shifts by start time
    const sortedShifts = [...dayShifts].sort((a, b) => {
      return parseTime(a.startTime) - parseTime(b.startTime)
    })
    
    // Find and merge adjacent shifts
    for (let i = 0; i < sortedShifts.length - 1; i++) {
      const currentShift = sortedShifts[i]
      const nextShift = sortedShifts[i + 1]
      
      // Check if current shift ends where next shift starts
      if (currentShift.endTime === nextShift.startTime) {
        mergeTwoShiftsInSchedule(staffSchedule, currentShift, nextShift)
        merged = true
        break // Restart the loop after merging
      }
    }
  }
}

// Merge two specific shifts (for selectedStaff)
const mergeTwoShifts = (firstShift, secondShift) => {
  if (!selectedStaff.value) return
  
  // Determine which shift comes first
  const first = parseTime(firstShift.startTime) < parseTime(secondShift.startTime) ? firstShift : secondShift
  const second = first.id === firstShift.id ? secondShift : firstShift
  
  // Merge the shifts
  const mergedStartTime = first.startTime
  const mergedEndTime = parseTime(second.endTime) > parseTime(first.endTime) 
    ? second.endTime 
    : first.endTime
  
  // Combine notes if both have notes
  let mergedNote = ''
  if (first.note && second.note) {
    mergedNote = `${first.note} | ${second.note}`
  } else if (first.note) {
    mergedNote = first.note
  } else if (second.note) {
    mergedNote = second.note
  }
  
  // Update the first shift with merged data
  const firstIndex = selectedStaff.value.shifts.findIndex(s => s.id === first.id)
  if (firstIndex !== -1) {
    selectedStaff.value.shifts[firstIndex].endTime = mergedEndTime
    selectedStaff.value.shifts[firstIndex].note = mergedNote
  }
  
  // Remove the second shift
  const secondIndex = selectedStaff.value.shifts.findIndex(s => s.id === second.id)
  if (secondIndex !== -1) {
    selectedStaff.value.shifts.splice(secondIndex, 1)
  }
}

// Merge two specific shifts (for a schedule object)
const mergeTwoShiftsInSchedule = (staffSchedule, firstShift, secondShift) => {
  if (!staffSchedule || !staffSchedule.shifts) return
  
  // Determine which shift comes first
  const first = parseTime(firstShift.startTime) < parseTime(secondShift.startTime) ? firstShift : secondShift
  const second = first.id === firstShift.id ? secondShift : firstShift
  
  // Merge the shifts
  const mergedStartTime = first.startTime
  const mergedEndTime = parseTime(second.endTime) > parseTime(first.endTime) 
    ? second.endTime 
    : first.endTime
  
  // Combine notes if both have notes
  let mergedNote = ''
  if (first.note && second.note) {
    mergedNote = `${first.note} | ${second.note}`
  } else if (first.note) {
    mergedNote = first.note
  } else if (second.note) {
    mergedNote = second.note
  }
  
  // Update the first shift with merged data
  const firstIndex = staffSchedule.shifts.findIndex(s => s.id === first.id)
  if (firstIndex !== -1) {
    staffSchedule.shifts[firstIndex].endTime = mergedEndTime
    staffSchedule.shifts[firstIndex].note = mergedNote
  }
  
  // Remove the second shift
  const secondIndex = staffSchedule.shifts.findIndex(s => s.id === second.id)
  if (secondIndex !== -1) {
    staffSchedule.shifts.splice(secondIndex, 1)
  }
}

// Merge adjacent shifts (manual merge button)
const mergeAdjacentShifts = (shift, day) => {
  if (!selectedStaff.value) return
  
  const adjacentShift = findAdjacentShift(shift, day)
  if (!adjacentShift) return
  
  mergeTwoShifts(shift, adjacentShift)
  saveSchedules()
  success(`${t('shiftsMerged') || 'Shifts merged'}: ${formatTimeRange(shift.startTime, shift.endTime)}`)
}

// Remove shift
const removeShift = (shift) => {
  if (!selectedStaff.value) return
  
  const index = selectedStaff.value.shifts.findIndex(s => s.id === shift.id)
  if (index !== -1) {
    selectedStaff.value.shifts.splice(index, 1)
    saveSchedules()
    success(`${t('shiftRemoved')}: ${t('shiftRemovedSuccess')}`)
  }
}

// Open note dialog
const openNoteDialog = (shift) => {
  currentShift.value = shift
  shiftNote.value = shift.note || ''
  showNoteDialog.value = true
}

// Save note
const saveNote = () => {
  if (!currentShift.value || !selectedStaff.value) return
  
  const shift = selectedStaff.value.shifts.find(s => s.id === currentShift.value.id)
  if (shift) {
    shift.note = shiftNote.value
    saveSchedules()
    showNoteDialog.value = false
    success(`${t('noteSaved')}: ${t('noteSavedSuccess')}`)
  }
}

// Toast functions
// Toast functions - now using composable (already defined above)

onMounted(() => {
  loadSchedules()
  
  // Listen for storage events
  window.addEventListener('storage', (e) => {
    if (e.key === 'employee_schedules_data' || e.key === 'employees_data') {
      loadSchedules()
    }
  })
  
  // Listen for employees updated event
  window.addEventListener('employeesUpdated', loadSchedules)
})

onUnmounted(() => {
  window.removeEventListener('storage', loadSchedules)
  window.removeEventListener('employeesUpdated', loadSchedules)
})
</script>

<style scoped>
/* Grid with 18 columns (6 AM to 11 PM = 18 hours) */
.grid-cols-18 {
  grid-template-columns: repeat(18, minmax(0, 1fr));
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

/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* AKbalthom KhmerGothic Font */
@font-face {
  font-family: 'AKbalthom KhmerGothic';
  src: url('../assets/fonts/AKbalthom%20KhmerGothic.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.akbalthom-khmer {
  font-family: 'AKbalthom KhmerGothic', 'Khmer', 'Khmer OS', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
