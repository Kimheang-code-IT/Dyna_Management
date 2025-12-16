<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full capitalize', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Register Student Form -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow-lg">
      <!-- Header -->
      <div
        class="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 px-3 py-2 border-b border-blue-500 dark:border-blue-700">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 class="text-xl font-bold text-white capitalize">{{ t('registerStudent') }}</h1>
        </div>
        <p class="text-blue-100 dark:text-blue-200 text-sm mt-2">{{ t('fillFormToRegisterNewStudent') }}</p>
      </div>

      <!-- Form Content -->
      <form @submit.prevent="handleSubmit" class="p-4 sm:px-12 space-y-4 sm:space-y-2">
        <!-- Personal Information Section -->
        <div>

          <!-- Full Name and Profile Image Row -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <!-- Full Name Column (English, Khmer, and Gender stacked) -->
            <div class="space-y-4">
              <!-- Full Name (English) -->
              <div>
                <label for="nameEnglish" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('fullNameEnglish') }} <span class="text-red-500">*</span>
                </label>
                <input id="nameEnglish" v-model="form.nameEnglish" type="text" required
                  @input="validateNameField('nameEnglish', form.nameEnglish, true)"
                  @keypress="preventNonNameChars"
                  :placeholder="t('fullNameEnglishPlaceholder')"
                  :class="[
                    'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]',
                    errors.nameEnglish ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  ]" />
                <p v-if="errors.nameEnglish" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.nameEnglish
                }}</p>
              </div>

              <!-- Full Name (Khmer) -->
              <div>
                <label for="nameKhmer" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('fullNameKhmer') }}
                </label>
                <input id="nameKhmer" v-model="form.nameKhmer" type="text" 
                  @input="validateKhmerNameField('nameKhmer', form.nameKhmer, false)"
                  :placeholder="t('fullNameKhmerPlaceholder')"
                  :class="[
                    'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]',
                    errors.nameKhmer ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  ]" />
                <p v-if="errors.nameKhmer" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.nameKhmer }}</p>
              </div>

              <!-- Gender -->
              <div>
                <label for="gender" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('gender') }} <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <select id="gender" v-model="form.gender" required
                    @change="validateSelectField('gender', form.gender, true)"
                    :class="[
                      'w-full px-3 py-2 pr-10 text-[14px] border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors',
                      errors.gender ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                    ]">
                    <option value="">{{ t('selectGender') }}</option>
                    <option value="Male">{{ t('male') }}</option>
                    <option value="Female">{{ t('female') }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.gender" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.gender }}</p>
              </div>
            </div>

            <!-- Profile Image -->
            <div>
              <div class="relative  pt-8 ">
                <input ref="fileInput" type="file" accept="image/*" @change="handleImageUpload" class="hidden" />
                <div @click="() => fileInput?.click()"
                  class="w-40 h-40 mx-auto rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 flex items-center justify-center shadow-md group cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 transition-all">
                  <img v-if="form.profileImage" :src="form.profileImage" :alt="form.nameEnglish"
                    class="w-full h-full object-cover" />
                  <svg v-else xmlns="http://www.w3.org/2000/svg"
                    class="h-16 w-16 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <!-- Remove Button -->
                  <button v-if="form.profileImage" @click.stop="removeProfileImage" type="button"
                    class="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg z-10"
                    :title="t('removeImage')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">{{ t('pngJpgGif') }} ({{
                  t('maxSize') }}: 20MB)</p>
              </div>
            </div>
          </div>

          <!-- Rest of the Form Fields -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4">
            <!-- Date of Birth -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('dob') }} <span class="text-red-500">*</span>
              </label>
              <div class="flex gap-2">
                <!-- Day -->
                <div class="relative flex-1">
                  <select v-model="form.dobDay" required
                    class="w-full px-3 py-2 pr-8 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors">
                    <option value="">{{ t('day') }}</option>
                    <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg class="h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <!-- Month -->
                <div class="relative flex-1">
                  <select v-model="form.dobMonth" required
                    class="w-full px-3 py-2 pr-8 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors">
                    <option value="">{{ t('month') }}</option>
                    <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg class="h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <!-- Year -->
                <div class="relative flex-1">
                  <select v-model="form.dobYear" required
                    class="w-full px-3 py-2 pr-8 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors">
                    <option value="">{{ t('year') }}</option>
                    <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg class="h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <p v-if="errors.dob" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.dob }}</p>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('email') }} <span class="text-red-500">*</span>
              </label>
              <input id="email" v-model="form.email" type="email" required 
                @input="validateEmailField('email', form.email, true)"
                :placeholder="t('emailPlaceholder')"
                :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]',
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]" />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.email }}</p>
            </div>
            <div class="lg:col-span-2">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('phone') }} <span class="text-red-500">*</span>
                </label>
                <input id="phone" v-model="form.phone" type="tel" required 
                  @input="validatePhoneField('phone', form.phone, true)"
                  @keypress="preventNonPhoneChars"
                  :placeholder="t('phonePlaceholder')"
                  :class="[
                    'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]',
                    errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  ]" />
                <p v-if="errors.phone" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.phone }}</p>
              </div>

              <!-- Province -->
              <div>
                <label for="province" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('province') }} <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <select id="province" v-model="form.province" required
                    @change="validateSelectField('province', form.province, true)"
                    :class="[
                      'w-full px-3 py-2 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors',
                      errors.province ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                    ]">
                    <option value="">{{ t('selectProvince') }}</option>
                    <option v-for="prov in provinces" :key="prov" :value="prov">{{ prov }}</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <p v-if="errors.province" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.province }}</p>
              </div>
              <div>
                <label for="Telegram" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {{ t('Telegram') }} <span class="text-red-500">*</span>
                </label>
                <input id="Telegram" v-model="form.Telegram" type="tel" required 
                  @input="validatePhoneField('Telegram', form.Telegram, true)"
                  @keypress="preventNonPhoneChars"
                  :placeholder="t('TelegramPlaceholder')"
                  :class="[
                    'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 transition-colors h-[37px]',
                    errors.Telegram ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                  ]" />
                <p v-if="errors.Telegram" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.Telegram }}</p>
              </div>
            </div>
            </div>
            <!-- Course, Session, and Time Row -->
            <div class="lg:col-span-2">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <!-- Course -->
                <div>
                  <label for="course" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {{ t('course') }} <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <select id="course" v-model="form.course" required
                      @change="validateSelectField('course', form.course, true)"
                      :class="[
                        'w-full px-3 py-2 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors',
                        errors.course ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                      ]">
                      <option value="">{{ t('selectCourse') }}</option>
                      <option v-for="course in courses" :key="course" :value="course">{{ course }}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <p v-if="errors.course" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.course }}</p>
                </div>

                <!-- Session -->
                <div>
                  <label for="session" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {{ t('session') }} <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <select id="session" v-model="form.session" required
                      @change="validateSelectField('session', form.session, true)"
                      :class="[
                        'w-full px-3 py-2 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors',
                        errors.session ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                      ]">
                      <option value="">{{ t('selectSession') }}</option>
                      <option v-for="session in sessions" :key="session" :value="session">{{ session }}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <p v-if="errors.session" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.session }}</p>
                </div>

                <!-- Time -->
                <div>
                  <label for="time" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {{ t('time') }} <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <select id="time" v-model="form.time" required
                      @change="validateSelectField('time', form.time, true)"
                      :class="[
                        'w-full px-3 py-2 pr-10 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white appearance-none transition-colors',
                        errors.time ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                      ]">
                      <option value="">{{ t('selectTime') }}</option>
                      <option v-for="time in timeSlots" :key="time" :value="time">{{ time }}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <p v-if="errors.time" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Action Buttons -->
        <div class="flex gap-4 justify-end mt-8">
          <button type="button" @click="clearForm"
            class="px-6 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors font-medium">
            {{ t('clear') }}
          </button>
          <button type="submit"
            class="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
            {{ t('registerStudent') }}
          </button>
        </div>
      </form>
    </div>

    <!-- Registration Confirmation Dialog -->
    <div v-if="showConfirmDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="showConfirmDialog = false">
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow-xl p-6 max-w-md w-full mx-4">
        <div class="flex-1">
          <!-- Title with icon -->
          <div class="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white capitalize">{{ t('registerStudent') }}</h3>
          </div>
          
          <!-- Description -->
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ t('areYouSureRegister') }}</p>
          
          <!-- Buttons -->
          <div class="flex gap-3 justify-end">
            <button @click="showConfirmDialog = false"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('no') }}
            </button>
            <button @click="confirmRegistration"
              class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
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
        <div
          class="w-8 h-8 bg-white dark:bg-gray-700 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div class="flex-1">
          <p class="font-semibold">{{ errorMessageTitle }}</p>
          <p class="text-sm text-red-50">{{ errorMessageText }}</p>
        </div>
        <button @click="showErrorMessage = false" class="text-white hover:text-red-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'
import { useFormValidation } from '../composables/useFormValidation'
import { addHistory } from '../utils/history'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
const router = useRouter()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

// Form state
const form = reactive({
  nameEnglish: '',
  nameKhmer: '',
  gender: '',
  dobDay: '',
  dobMonth: '',
  dobYear: '',
  email: '',
  phone: '',
  province: '',
  course: '',
  session: '',
  time: '',
  profileImage: ''
})

const fileInput = ref(null)

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
  preventNonPhoneChars,
  isFormValid
} = useFormValidation({
  nameEnglish: '',
  nameKhmer: '',
  gender: '',
  dob: '',
  email: '',
  phone: '',
  Telegram: '',
  province: '',
  course: '',
  session: '',
  time: ''
})

// Dialog and message state
const showConfirmDialog = ref(false)
const showSuccessMessage = ref(false)
const successMessageTitle = ref('')
const successMessageText = ref('')
const showErrorMessage = ref(false)
const errorMessageTitle = ref('')
const errorMessageText = ref('')

// Options data
const provinces = ['Phnom Penh', 'Siem Reap', 'Battambang', 'Kampong Cham', 'Kandal', 'Takeo', 'Prey Veng', 'Svay Rieng', 'Kampot', 'Kep', 'Koh Kong', 'Pursat', 'Kampong Speu', 'Kampong Thom', 'Kratie', 'Mondulkiri', 'Oddar Meanchey', 'Pailin', 'Preah Vihear', 'Ratanakiri', 'Stung Treng', 'Banteay Meanchey', 'Kampong Chhnang', 'Preah Sihanouk', 'Tbong Khmum']

const courses = ['Web Development', 'Graphic Design', 'Mobile App', 'Digital Marketing', 'Data Science', 'UI/UX Design', 'Python Programming', 'Java Programming']

const sessions = ['Morning', 'Afternoon', 'Evening', 'Weekend']

const timeSlots = ['08:00 - 10:00', '10:00 - 12:00', '13:00 - 15:00', '15:00 - 17:00', '18:00 - 20:00', '20:00 - 22:00']

// Generate days (1-31)
const days = computed(() => {
  return Array.from({ length: 31 }, (_, i) => i + 1)
})

// Generate months
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// Generate years (1950 to current year)
const years = computed(() => {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: currentYear - 1949 }, (_, i) => currentYear - i)
})

// Validate form
const validateForm = () => {
  let isValid = true

  // Validate Full Name (English)
  if (!validateNameField('nameEnglish', form.nameEnglish, true)) {
    isValid = false
  }

  // Validate Khmer Name (optional)
  if (form.nameKhmer) {
    if (!validateKhmerNameField('nameKhmer', form.nameKhmer, false)) {
      isValid = false
    }
  }

  // Validate Gender
  if (!validateSelectField('gender', form.gender, true)) {
    isValid = false
  }

  // Validate Date of Birth
  const dobString = formatDateOfBirth()
  if (!dobString) {
    errors.dob = t('dobRequired')
    isValid = false
  } else {
    // Validate date is valid and not in future
    const day = parseInt(form.dobDay)
    const month = parseInt(form.dobMonth)
    const year = parseInt(form.dobYear)
    const date = new Date(year, month - 1, day)

    if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) {
      errors.dob = t('invalidDate')
      isValid = false
    } else {
      // Validate age (must be at least 5 years old)
      const today = new Date()
      const age = today.getFullYear() - year
      if (age < 5 || (age === 5 && (today.getMonth() < month - 1 || (today.getMonth() === month - 1 && today.getDate() < day)))) {
        errors.dob = t('ageMustBeAtLeast5')
        isValid = false
      } else {
        errors.dob = ''
      }
    }
  }

  // Validate Email
  if (!validateEmailField('email', form.email, true)) {
    isValid = false
  }

  // Validate Phone
  if (!validatePhoneField('phone', form.phone, true)) {
    isValid = false
  }

  // Validate Telegram (phone format)
  if (!validatePhoneField('Telegram', form.Telegram, true)) {
    isValid = false
  }

  // Validate Province
  if (!validateSelectField('province', form.province, true)) {
    isValid = false
  }

  // Validate Course
  if (!validateSelectField('course', form.course, true)) {
    isValid = false
  }

  // Validate Session
  if (!validateSelectField('session', form.session, true)) {
    isValid = false
  }

  // Validate Time
  if (!validateSelectField('time', form.time, true)) {
    isValid = false
  }

  return isValid
}

// Format date from day, month, year
const formatDateOfBirth = () => {
  if (!form.dobDay || !form.dobMonth || !form.dobYear) return ''
  const year = form.dobYear
  const month = String(form.dobMonth).padStart(2, '0')
  const day = String(form.dobDay).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Get student name (prefer English, fallback to Khmer)
const getStudentName = () => {
  return form.nameEnglish.trim() || form.nameKhmer.trim() || t('unknown')
}

// Handle form submit
const handleSubmit = () => {
  if (!validateForm()) {
    showErrorToast(t('validationError'), t('pleaseFixErrors'))
    return
  }

  // Show confirmation dialog
  showConfirmDialog.value = true
}

// Confirm registration
const confirmRegistration = () => {
  try {
    // Load existing students from localStorage
    const existingStudents = JSON.parse(localStorage.getItem('students_data') || '[]')

    // Generate student ID
    const studentId = `STU${String(existingStudents.length + 1).padStart(3, '0')}`

    // Create new student object
    const newStudent = {
      id: studentId,
      name: getStudentName(),
      nameEnglish: form.nameEnglish,
      nameKhmer: form.nameKhmer || '',
      gender: form.gender,
      province: form.province,
      course: form.course,
      session: form.session,
      time: form.time,
      dob: formatDateOfBirth(),
      email: form.email,
      contact: form.phone,
      registered: new Date().toISOString().split('T')[0],
      profileImage: form.profileImage || ''
    }

    // Add to existing students
    existingStudents.push(newStudent)

    // Save to localStorage
    localStorage.setItem('students_data', JSON.stringify(existingStudents))

    // Log history
    addHistory('add', {
      type: 'student',
      itemName: getStudentName(),
      itemId: studentId,
      description: `Student "${getStudentName()}" registered - Course: ${form.course}, Session: ${form.session}`,
      user: 'Admin'
    })

    // Close dialog and show success message
    showConfirmDialog.value = false
    showSuccessToast(t('studentRegistered'), `"${getStudentName()}" ${t('studentRegisteredSuccess')}`)

    // Clear form
    clearForm()

    // Optionally redirect to StudentsView after 2 seconds
    setTimeout(() => {
      router.push('/students')
    }, 2000)
  } catch (error) {
    showConfirmDialog.value = false
    showErrorToast(t('error'), t('registrationFailed'))
  }
}

// Handle image upload
const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  // Validate file type
  if (!file.type.startsWith('image/')) {
    showErrorToast(t('error'), t('invalidImageFile'))
    return
  }

  // Validate file size (max 20MB)
  if (file.size > 20 * 1024 * 1024) {
    showErrorToast(t('error'), t('imageTooLarge'))
    return
  }

  // Convert to Base64
  const reader = new FileReader()
  reader.onload = (e) => {
    form.profileImage = e.target.result
  }
  reader.onerror = () => {
    showErrorToast(t('error'), t('imageUploadError'))
  }
  reader.readAsDataURL(file)
}

// Remove profile image
const removeProfileImage = () => {
  form.profileImage = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Clear form
const clearForm = () => {
  form.nameEnglish = ''
  form.nameKhmer = ''
  form.gender = ''
  form.dobDay = ''
  form.dobMonth = ''
  form.dobYear = ''
  form.email = ''
  form.phone = ''
  form.province = ''
  form.course = ''
  form.session = ''
  form.time = ''
  form.profileImage = ''
  Object.keys(errors).forEach(key => errors[key] = '')
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Toast functions - now using composable
const showSuccessToast = (title, text) => {
  success(`${title}: ${text}`)
}

const showErrorToast = (title, text) => {
  error(`${title}: ${text}`)
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
