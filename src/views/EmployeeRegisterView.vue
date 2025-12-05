<template>
  <div :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow-lg">
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 px-3 py-2 border-b border-blue-500 dark:border-blue-700">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 class="text-xl font-bold text-white">{{ t('registerEmployee') }}</h1>
        </div>
        <p class="text-blue-100 dark:text-blue-200 text-sm mt-2">{{ t('fillFormToRegisterNewEmployee') }}</p>
      </div>
      
      <!-- Employee Registration Form -->
      <form @submit.prevent="handleSubmit" class="p-4 sm:px-12 space-y-4 sm:space-y-2">
        <!-- Full Name and Profile Image Row -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <!-- Left Column (Name, Role, Phone stacked) -->
          <div class="space-y-4">
            <!-- Full Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('fullName') }} <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.name"
                type="text"
                required
                :placeholder="t('employeeFullNamePlaceholder')"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]"
              />
            </div>
            
            <!-- Role / Position -->
            <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('gender') }}
            </label>
            <div class="relative">
              <select
                v-model="formData.gender"
                class="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors h-[37px]"
              >
                <option value="">{{ t('selectGender') }}</option>
                <option value="Male">{{ t('male') }}</option>
                <option value="Female">{{ t('female') }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
            
            
            <!-- Phone -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('phone') }} <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.contact"
                type="tel"
                required
                :placeholder="t('phonePlaceholder')"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]"
              />
            </div>
          </div>
          
          <!-- Right Column (Profile Image) -->
          <div>
            <!-- Profile Image -->
            <div>
              <div class="relative pt-8">
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  @change="handleImageUpload"
                  class="hidden"
                />
                <div 
                  @click="() => fileInput?.click()"
                  class="w-40 h-40 mx-auto rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 flex items-center justify-center shadow-md group cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 transition-all"
                >
                  <img
                    v-if="formData.profileImage"
                    :src="formData.profileImage"
                    :alt="formData.name"
                    class="w-full h-full object-cover"
                  />
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-16 w-16 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  

                  
                  <!-- Remove Button -->
                  <button
                    v-if="formData.profileImage"
                    @click.stop="removeProfileImage"
                    type="button"
                    class="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg z-10"
                    :title="t('removeImage')"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">{{ t('pngJpgGif') }} ({{ t('maxSize') }}: 20MB)</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Rest of the Form Fields -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4">
          <!-- Gender -->
          <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('role') }} / {{ t('position') }} <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.role"
                type="text"
                required
                :placeholder="t('role')"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]"
              />
            </div>
          
          <!-- Department -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('department') }} <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <select
                v-model="formData.department"
                required
                class="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors h-[37px]"
              >
                <option value="">{{ t('selectDepartment') }}</option>
                <option value="Management">{{ t('management') }}</option>
                <option value="Teaching">{{ t('teaching') }}</option>
                <option value="Administration">{{ t('administration') }}</option>
                <option value="Coordination">{{ t('coordination') }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('email') }} <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.email"
              type="email"
              required
              :placeholder="t('emailPlaceholder')"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]"
            />
          </div>
          
          <!-- Status -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('status') }}
            </label>
            <div class="relative">
              <select
                v-model="formData.status"
                class="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors h-[37px]"
              >
                <option value="Active">{{ t('active') }}</option>
                <option value="Inactive">{{ t('inactive') }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Contract Type -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('contractType') }}
            </label>
            <div class="relative">
              <select
                v-model="formData.contract"
                class="w-full px-3 py-2 pr-10 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors h-[37px]"
              >
                <option value="">{{ t('selectContract') }}</option>
                <option value="Full-time">{{ t('fullTime') }}</option>
                <option value="Part-time">{{ t('partTime') }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Start Date -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('startDate') }} <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.hired"
              type="date"
              required
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white transition-colors w-full h-[37px]"
            />
          </div>
          
          <!-- Salary (USD) -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('salary') }} (USD) <span class="text-red-500">*</span>
            </label>
            <input
              v-model.number="formData.salary"
              type="number"
              step="0.01"
              min="0"
              required
              :placeholder="t('salary')"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]"
            />
          </div>
          

          
          <!-- Office / Address -->
          <div >
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('officeAddress') }}
            </label>
            <input
              v-model="formData.address"
              type="text"
              :placeholder="t('officeAddressPlaceholder')"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]"
            />
          </div>
        </div>
          
          <!-- Notes -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('notes') }}
            </label>
            <textarea
              v-model="formData.notes"
              rows="4"
              :placeholder="t('notesPlaceholder')"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 resize-y transition-colors"
            ></textarea>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex gap-4 justify-end mt-8">
            <button
              type="button"
              @click="clearForm"
              class="px-6 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              {{ t('clear') }}
            </button>
            <button
              type="submit"
              class="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium"
            >
              {{ t('registerEmployee') }}
            </button>
          </div>
        </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, inject, onMounted } from 'vue'
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

// Load employees from JSON file or localStorage
const loadEmployees = async () => {
  const { loadDataFromJSON } = await import('../utils/dataLoader')
  employees.value = await loadDataFromJSON('../data/employees.json', 'employees_data')
}

// Save employees to localStorage
const saveEmployees = () => {
  try {
    localStorage.setItem('employees_data', JSON.stringify(employees.value))
  } catch (error) {
    console.error('Error saving employees:', error)
  }
}

const employees = ref([])
const fileInput = ref(null)

// Form data
const formData = ref({
  name: '',
  gender: '',
  role: '',
  contact: '',
  status: 'Active',
  salary: 0,
  schedule: '',
  department: '',
  email: '',
  contract: '',
  hired: new Date().toISOString().split('T')[0],
  address: '',
  notes: '',
  profileImage: ''
})

// Toast state removed - now using global ToastContainer

// Reset form to initial state
const resetForm = () => {
  formData.value = {
    name: '',
    gender: '',
    role: '',
    contact: '',
    status: 'Active',
    salary: 0,
    schedule: '',
    department: '',
    email: '',
    contract: '',
    hired: new Date().toISOString().split('T')[0],
    address: '',
    notes: '',
    profileImage: ''
  }
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Handle image upload
const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  // Validate file type
  if (!file.type.startsWith('image/')) {
    error(`${t('error')}: ${t('invalidImageFile')}`)
    return
  }
  
  // Validate file size (max 20MB)
  if (file.size > 20 * 1024 * 1024) {
    error(`${t('error')}: ${t('imageTooLarge')}`)
    return
  }
  
  // Convert to Base64
  const reader = new FileReader()
  reader.onload = (e) => {
    if (formData.value) {
      formData.value.profileImage = e.target.result
    }
  }
  reader.onerror = () => {
    error(`${t('error')}: ${t('imageUploadError')}`)
  }
  reader.readAsDataURL(file)
}

// Remove profile image
const removeProfileImage = () => {
  if (formData.value) {
    formData.value.profileImage = ''
  }
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Clear form
const clearForm = () => {
  resetForm()
}

// Handle form submit
const handleSubmit = async () => {
  // Validate required fields
  if (!formData.value.name || !formData.value.role || !formData.value.contact || !formData.value.department || !formData.value.email) {
    error(`${t('error')}: ${t('pleaseFillRequiredFields')}`)
    return
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    error(`${t('error')}: ${t('invalidEmailFormat')}`)
    return
  }
  
  // Validate phone format (basic validation)
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
  if (!phoneRegex.test(formData.value.contact)) {
    error(`${t('error')}: ${t('invalidPhoneFormat')}`)
    return
  }
  
  try {
    await withLoading(async () => {
      // Generate new employee ID
      const newId = `EMP${String(employees.value.length + 1).padStart(3, '0')}`
      
      // Create new employee
      const newEmployee = {
        id: newId,
        ...formData.value,
        hired: formData.value.hired || new Date().toISOString().split('T')[0]
      }
      
      employees.value.push(newEmployee)
      saveEmployees()
      
      // Dispatch event to update EmployeeView
      window.dispatchEvent(new CustomEvent('employeesUpdated'))
      
      success(`${t('employeeAdded')}: "${formData.value.name}" ${t('employeeAddedSuccess')}`)
      
      // Reset form after successful registration
      setTimeout(() => {
        resetForm()
      }, 1000)
    }, 'Registering employee...')
  } catch (err) {
    handleError(err, { userMessage: t('registrationFailed') })
  }
}

// Toast functions - now using composable (already defined above)

onMounted(() => {
  loadEmployees()
  
  // Listen for storage events
  window.addEventListener('storage', (e) => {
    if (e.key === 'employees_data') {
      loadEmployees()
    }
  })
  
  // Listen for employees updated event
  window.addEventListener('employeesUpdated', loadEmployees)
})
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

