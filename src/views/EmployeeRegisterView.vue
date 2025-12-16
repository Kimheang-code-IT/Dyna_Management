<template>
  <div :class="['mx-auto transition-all duration-300 w-full capitalize', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow-lg">
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 px-3 py-2 border-b border-blue-500 dark:border-blue-700">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 class="text-xl font-bold text-white capitalize">{{ t('registerEmployee') }}</h1>
        </div>
        <p class="text-blue-100 dark:text-blue-200 text-sm mt-2">{{ t('fillFormToRegisterNewEmployee') }}</p>
      </div>
      
      <!-- Employee Registration Form -->
      <form @submit.prevent="handleSubmit" class="p-4 sm:px-12 space-y-4 sm:space-y-2">
        <!-- Full Name and Profile Image Row -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <!-- Left Column (Name Khmer, Name English, Gender, Phone stacked) -->
          <div class="space-y-4">
            <!-- Full Name Khmer -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('fullNameKhmer') }} <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.nameKhmer"
                type="text"
                required
                @input="validateKhmerNameField('nameKhmer', formData.nameKhmer, true)"
                :placeholder="t('fullNameKhmerPlaceholder')"
                :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]',
                  errors.nameKhmer ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]"
              />
              <p v-if="errors.nameKhmer" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.nameKhmer }}</p>
            </div>
            
            <!-- Full Name English -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('fullNameEnglish') }} <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.nameEnglish"
                type="text"
                required
                @input="validateNameField('nameEnglish', formData.nameEnglish, true)"
                @keypress="preventNonNameChars"
                :placeholder="t('fullNameEnglishPlaceholder')"
                :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]',
                  errors.nameEnglish ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]"
              />
              <p v-if="errors.nameEnglish" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.nameEnglish }}</p>
            </div>
            
            <!-- Gender -->
            <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('gender') }} <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <select
                v-model="formData.gender"
                required
                @change="validateSelectField('gender', formData.gender, true)"
                :class="[
                  'w-full px-3 py-2 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors h-[37px]',
                  errors.gender ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]"
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
            <p v-if="errors.gender" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.gender }}</p>
          </div>
            
            <!-- Phone -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('phone') }} <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.phone"
                type="tel"
                required
                @input="validatePhoneField('phone', formData.phone, true)"
                @keypress="preventNonPhoneChars"
                :placeholder="t('phonePlaceholder')"
                :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]',
                  errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]"
              />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.phone }}</p>
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
                    :alt="formData.nameEnglish || formData.nameKhmer || 'Employee'"
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
          <!-- Province -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('province') }} <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <select
                v-model="formData.province"
                required
                @change="validateSelectField('province', formData.province, true)"
                :class="[
                  'w-full px-3 py-2 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors h-[37px]',
                  errors.province ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]"
              >
                <option value="">{{ t('selectProvince') }}</option>
                <option value="Phnom Penh">Phnom Penh</option>
                <option value="Kandal">Kandal</option>
                <option value="Kampong Cham">Kampong Cham</option>
                <option value="Siem Reap">Siem Reap</option>
                <option value="Battambang">Battambang</option>
                <option value="Preah Sihanouk">Preah Sihanouk</option>
                <option value="Kampot">Kampot</option>
                <option value="Takeo">Takeo</option>
                <option value="Kampong Thom">Kampong Thom</option>
                <option value="Pursat">Pursat</option>
                <option value="Other">Other</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <p v-if="errors.province" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.province }}</p>
          </div>
          
          <!-- Date of Birth -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('dob') }} <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.dob"
              type="date"
              required
              @change="validateDateField('dob', formData.dob, { required: true, notFuture: true })"
              :class="[
                'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white transition-colors h-[37px]',
                errors.dob ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              ]"
            />
            <p v-if="errors.dob" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.dob }}</p>
          </div>
          
          <!-- Role -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('role') }} <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <select
                v-model="formData.role"
                required
                @change="validateSelectField('role', formData.role, true)"
                :class="[
                  'w-full px-3 py-2 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors h-[37px]',
                  errors.role ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]"
              >
                <option value="">{{ t('selectRole') }}</option>
                <option value="Manager">{{ t('manager') }}</option>
                <option value="Teacher">{{ t('teacher') }}</option>
                <option value="Administrator">{{ t('administrator') }}</option>
                <option value="Coordinator">{{ t('coordinator') }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <p v-if="errors.role" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.role }}</p>
          </div>
          
          <!-- Contract Type -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('contract') }} <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <select
                v-model="formData.contract"
                required
                @change="validateSelectField('contract', formData.contract, true)"
                :class="[
                  'w-full px-3 py-2 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors h-[37px]',
                  errors.contract ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]"
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
            <p v-if="errors.contract" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.contract }}</p>
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
              @input="validateEmailField('email', formData.email, true)"
              :placeholder="t('emailPlaceholder')"
              :class="[
                'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]',
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              ]"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.email }}</p>
          </div>
          
          <!-- Telegram -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Telegram
            </label>
            <input
              v-model="formData.telegram"
              type="text"
              placeholder="@username"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]"
            />
          </div>
          
          <!-- Registered Date -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('registered') }}
            </label>
            <input
              v-model="formData.registered"
              type="date"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white transition-colors h-[37px]"
            />
        </div>
          
          <!-- Status -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('status') }} <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <select
                v-model="formData.status"
                required
                @change="validateSelectField('status', formData.status, true)"
                :class="[
                  'w-full px-3 py-2 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors h-[37px]',
                  errors.status ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]"
              >
                <option value="">{{ t('selectStatus') }}</option>
                <option value="Active">{{ t('active') }}</option>
                <option value="Inactive">{{ t('inactive') }}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <p v-if="errors.status" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.status }}</p>
          </div>
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
import { useFormValidation } from '../composables/useFormValidation'
import { addHistory } from '../utils/history'

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
  nameKhmer: '',
  nameEnglish: '',
  gender: '',
  province: '',
  dob: '',
  role: '',
  contract: '',
  phone: '',
  email: '',
  telegram: '',
  registered: new Date().toISOString().split('T')[0],
  status: 'Active',
  profileImage: ''
})

// Form validation
const {
  errors,
  validateNameField,
  validateKhmerNameField,
  validateEmailField,
  validatePhoneField,
  validateSelectField,
  validateDateField,
  preventNonNameChars,
  preventNonPhoneChars
} = useFormValidation({
  nameKhmer: '',
  nameEnglish: '',
  gender: '',
  province: '',
  dob: '',
  role: '',
  contract: '',
  phone: '',
  email: '',
  status: ''
})

// Toast state removed - now using global ToastContainer

// Reset form to initial state
const resetForm = () => {
  formData.value = {
    nameKhmer: '',
    nameEnglish: '',
    gender: '',
    province: '',
    dob: '',
    role: '',
    contract: '',
    phone: '',
    email: '',
    telegram: '',
    registered: new Date().toISOString().split('T')[0],
    status: 'Active',
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

// Validate form
const validateForm = () => {
  let isValid = true

  // Validate Khmer Name
  if (!validateKhmerNameField('nameKhmer', formData.value.nameKhmer, true)) {
    isValid = false
  }

  // Validate English Name
  if (!validateNameField('nameEnglish', formData.value.nameEnglish, true)) {
    isValid = false
  }

  // Validate Gender
  if (!validateSelectField('gender', formData.value.gender, true)) {
    isValid = false
  }

  // Validate Province
  if (!validateSelectField('province', formData.value.province, true)) {
    isValid = false
  }

  // Validate Date of Birth
  if (!validateDateField('dob', formData.value.dob, { required: true, notFuture: true })) {
    isValid = false
  }

  // Validate Role
  if (!validateSelectField('role', formData.value.role, true)) {
    isValid = false
  }

  // Validate Contract
  if (!validateSelectField('contract', formData.value.contract, true)) {
    isValid = false
  }

  // Validate Phone
  if (!validatePhoneField('phone', formData.value.phone, true)) {
    isValid = false
  }

  // Validate Email
  if (!validateEmailField('email', formData.value.email, true)) {
    isValid = false
  }

  // Validate Status
  if (!validateSelectField('status', formData.value.status, true)) {
    isValid = false
  }

  return isValid
}

// Handle form submit
const handleSubmit = async () => {
  if (!validateForm()) {
    error(`${t('error')}: ${t('pleaseFixErrors') || 'Please fix the errors in the form'}`)
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
        name: formData.value.nameEnglish || formData.value.nameKhmer || '',
        contact: formData.value.phone || '',
        hired: formData.value.registered || new Date().toISOString().split('T')[0]
      }
      
      employees.value.push(newEmployee)
      saveEmployees()
      
      // Dispatch event to update EmployeeView
      window.dispatchEvent(new CustomEvent('employeesUpdated'))
      
      const employeeName = formData.value.nameEnglish || formData.value.nameKhmer || 'Employee'
      addHistory('add', {
        type: 'user',
        itemName: employeeName,
        itemId: newId,
        description: `Employee "${employeeName}" registered - Role: ${formData.value.role}, Contract: ${formData.value.contract}`,
        user: 'Admin'
      })
      success(`${t('employeeAdded')}: "${employeeName}" ${t('employeeAddedSuccess')}`)
      
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

