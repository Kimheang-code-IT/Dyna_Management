<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
      <!-- Left Column: Payment Form -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-4 sm:p-6">
        <div class="flex items-center gap-3 mb-6">
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white capitalize">{{ t('add') }} {{ t('payment') ||
            'Payment' }}
          </h2>
          <div class="flex flex-wrap gap-2 mb-4">
            <button @click="goBack"
              class="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              {{ t('close') || 'Back' }}
            </button>
            <button @click="takeScreenshot"
              class="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700 transition-colors font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ t('screenshot') || 'Screenshot' }}
            </button>
            <button @click="printInvoice"
              class="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              {{ t('print') || 'Print' }}
            </button>
          </div>
        </div>

        <form @submit.prevent="handleAddPayment" class="space-y-4">
          <!-- Student Selection -->
          <div class="space-y-2">
            <label for="studentId" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('student') }} <span class="text-red-500">*</span>
            </label>
            <div class="flex flex-col sm:flex-row gap-2 sm:items-center">
              <input v-model="searchStudentQuery" type="text" :placeholder="t('search') || 'Search student...'"
                class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]" />
              <select id="studentId" v-model="paymentForm.studentId" required
                @change="validateSelectField('studentId', paymentForm.studentId, true); onStudentChange()" :class="[
                  'flex-1 px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px]',
                  errors.studentId ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]">
                <option value="">{{ t('selectStudent') || 'Select Student' }}</option>
                <option v-for="student in filteredStudentsForSelect" :key="student.id" :value="student.id">
                  {{ student.nameEnglish || student.name }} ({{ student.id }})
                </option>
              </select>
            </div>
            <!-- Preview results as you type -->
            <div v-if="searchStudentQuery && filteredStudentsForSelect.length"
              class="max-h-48 overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-sm divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
              <button v-for="student in filteredStudentsForSelect" :key="student.id" type="button"
                class="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                @click="selectStudentFromPreview(student)">
                <div class="flex justify-between items-center">
                  <div class="font-semibold text-sm text-gray-900 dark:text-white">
                    {{ student.nameEnglish || student.name }} ({{ student.id }})
                  </div>
                  <span
                    class="text-[10px] px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
                    {{ student.course || t('notAvailable') }}
                  </span>
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-300 mt-1">
                  {{ student.session || t('notAvailable') }}
                  <span v-if="student.time"> • {{ student.time }}</span>
                </div>
                <div class="text-[11px] text-gray-500 dark:text-gray-400">
                  {{ student.province || t('notAvailable') }} <span v-if="student.contact">• {{ student.contact
                  }}</span>
                </div>
              </button>
            </div>
            <p v-if="errors.studentId" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.studentId }}</p>
          </div>

          <!-- Class Selection -->
          <div>
            <label for="classId" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {{ t('className') }} <span class="text-red-500">*</span>
            </label>
            <select id="classId" v-model="paymentForm.classId" required
              @change="validateSelectField('classId', paymentForm.classId, true); onClassChange()"
              :disabled="!paymentForm.studentId" :class="[
                'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px] disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed',
                errors.classId ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              ]">
              <option value="">{{ paymentForm.studentId ? (t('selectClass') || 'Select Class') :
                (t('selectStudentFirst') || 'Select Student First') }}</option>
              <option v-for="classItem in filteredClasses" :key="classItem.id" :value="classItem.id">
                {{ classItem.className }}
              </option>
            </select>
            <p v-if="errors.classId" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.classId }}</p>
          </div>


          <!-- Amount Due and Method (Same Line) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Amount Due -->
            <div>
              <label for="amountDue" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('amountDue') }} <span class="text-red-500">*</span>
              </label>
              <input id="amountDue" v-model.number="paymentForm.amountDue" type="number" step="0.01" min="0" required
                @input="validateNumberField('amountDue', paymentForm.amountDue, { required: true, min: 0.01, allowDecimals: true })"
                @keypress="preventNonNumeric($event, true)" :placeholder="t('amountDue')" :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 h-[37px]',
                  errors.amountDue ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]" />
              <p v-if="errors.amountDue" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.amountDue }}</p>
            </div>

            <!-- Method -->
            <div>
              <label for="method" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('method') || 'Method' }} <span class="text-red-500">*</span>
              </label>
              <select id="method" v-model="paymentForm.method" required
                @change="validateSelectField('method', paymentForm.method, true)" :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px]',
                  errors.method ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]">
                <option value="">{{ t('selectMethod') || 'Select Method' }}</option>
                <option value="Bank">{{ t('bank') || 'Bank' }}</option>
                <option value="Physical">{{ t('physical') || 'Physical' }}</option>
              </select>
              <p v-if="errors.method" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.method }}</p>
            </div>
          </div>

          <!-- Start Date and End Date (Same Line) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Start Date -->
            <div>
              <label for="startDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('startDate') || 'Start Date' }} <span class="text-red-500">*</span>
              </label>
              <input id="startDate" v-model="paymentForm.startDate" type="date" required
                @change="validateDateField('startDate', paymentForm.startDate, { required: true }); if (paymentForm.endDate) validateDateRangeFields('startDate', 'endDate', paymentForm.startDate, paymentForm.endDate)"
                :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px]',
                  errors.startDate ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]" />
              <p v-if="errors.startDate" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.startDate }}</p>
            </div>

            <!-- End Date -->
            <div>
              <label for="endDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {{ t('endDate') || 'End Date' }} <span class="text-red-500">*</span>
              </label>
              <input id="endDate" v-model="paymentForm.endDate" type="date" required
                @change="validateDateField('endDate', paymentForm.endDate, { required: true }); validateDateRangeFields('startDate', 'endDate', paymentForm.startDate, paymentForm.endDate)"
                :class="[
                  'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px]',
                  errors.endDate ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
                ]" />
              <p v-if="errors.endDate" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.endDate }}</p>
              <!-- Quick Date Buttons -->
              <div class="flex gap-2 mt-2">
                <button type="button" @click="setEndDateByMonths(1)" :disabled="!paymentForm.startDate"
                  class="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-sm hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium">
                  1 {{ t('month') || 'Month' }}
                </button>
                <button type="button" @click="setEndDateByMonths(2)" :disabled="!paymentForm.startDate"
                  class="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-sm hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium">
                  2 {{ t('months') || 'Months' }}
                </button>
                <button type="button" @click="setEndDateByMonths(3)" :disabled="!paymentForm.startDate"
                  class="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-sm hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium">
                  3 {{ t('months') || 'Months' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Status -->
          <div>
            <label for="status" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 -mt-8">
              {{ t('status') }} <span class="text-red-500">*</span>
            </label>
            <select id="status" v-model="paymentForm.status" required
              @change="validateSelectField('status', paymentForm.status, true)" :class="[
                'w-full px-3 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-800/100 text-gray-900 dark:text-white h-[37px]',
                errors.status ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
              ]">
              <option value="">{{ t('selectStatus') || 'Select Status' }}</option>
              <option value="Paid">{{ t('paid') }}</option>
              <option value="Pending">{{ t('pending') }}</option>
              <option value="Overdue">{{ t('overdue') }}</option>
            </select>
            <p v-if="errors.status" class="mt-1 text-sm text-red-600 dark:text-red-400">{{ errors.status }}</p>
          </div>

          <!-- Buttons -->
          <div class="flex gap-3 pt-4">
            <button type="submit"
              class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors font-medium">
              {{ t('add') }}
            </button>
            <button type="button" @click="goBack"
              class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
              {{ t('cancel') }}
            </button>
          </div>
        </form>
      </div>

      <!-- Right Column: Invoice Preview -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-4 sm:p-6 lg:p-8 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
        <!-- Action Buttons -->


        <div id="invoice-preview">
          <!-- Header Section -->
          <div class="flex justify-between items-start mb-8">
            <!-- Left: Company Info -->
            <div>
              <div class="flex items-center gap-3">
                <img :src="logoImage" alt="Company Logo" class="h-12 w-auto object-contain" />
              </div>
            </div>

            <!-- Right: Invoice Title -->
            <div>
              <h2 class="text-3xl font-bold text-gray-800 dark:text-white capitalize">{{ t('invoice') }}</h2>
            </div>
          </div>

          <hr class="border-gray-200 dark:border-gray-700 my-4">

          <!-- Invoice Info and Customer Info -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">
            <!-- Invoice Info -->
            <div>
              <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                {{ t('invoiceInfo') }}
              </h3>
              <div class="space-y-2.5">
                <div class="flex items-start gap-2">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('invoiceNo')
                  }}:</span>
                  <span class="text-sm text-gray-900 dark:text-white font-semibold">{{ previewInvoiceNumber }}</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('startDate') ||
                    'Start Date'
                  }}:</span>
                  <span class="text-sm text-gray-900 dark:text-white">{{ previewStartDate }}</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('endDate') ||
                    'End Date'
                  }}:</span>
                  <span class="text-sm text-gray-900 dark:text-white">{{ previewEndDate }}</span>
                </div>
              </div>
            </div>

            <!-- Customer Info -->
            <div>

              <div class="space-y-2.5">
                <div class="flex items-start gap-2">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('name')
                  }}:</span>
                  <span class="text-sm text-gray-900 dark:text-white">{{ previewCustomerInfo.name || t('notAvailable')
                  }}</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('phone')
                  }}:</span>
                  <span class="text-sm text-gray-900 dark:text-white">{{ previewCustomerInfo.phone || t('notAvailable')
                  }}</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('registered') ||
                    'Registered' }}:</span>
                  <span class="text-sm text-gray-900 dark:text-white">{{ previewRegisteredDate }}</span>
                </div>
                <div class="flex items-start gap-2">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[80px]">{{ t('session') ||
                    'Session' }}:</span>
                  <span class="text-sm text-gray-900 dark:text-white flex-1">
                    {{ previewCustomerInfo.session || t('notAvailable') }}<span v-if="previewCustomerInfo.time"> • {{
                      previewCustomerInfo.time }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Itemized List -->
          <div class="mb-8">
            <div class="bg-blue-600 text-white px-4 py-3">
              <div class="grid grid-cols-12 gap-4 text-sm font-semibold">
                <div class="col-span-1">{{ t('no') }}</div>
                <div class="col-span-5">{{ t('description') }}</div>
                <div class="col-span-2 text-center">{{ t('price') }}</div>
                <div class="col-span-2 text-center">{{ t('qty') }}</div>
                <div class="col-span-2 text-right">{{ t('total') }}</div>
              </div>
            </div>
            <div class="border border-gray-200 dark:border-gray-700 border-t-0">
              <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <div class="grid grid-cols-12 gap-4 text-sm">
                  <div class="col-span-1 text-gray-700 dark:text-gray-300">01</div>
                  <div class="col-span-5 text-gray-900 dark:text-white font-medium">{{ previewItem.description }}</div>
                  <div class="col-span-2 text-center text-gray-700 dark:text-gray-300">${{ previewItem.price.toFixed(2)
                  }}</div>
                  <div class="col-span-2 text-center text-gray-700 dark:text-gray-300">1</div>
                  <div class="col-span-2 text-right text-gray-900 dark:text-white font-medium">${{
                    previewItem.price.toFixed(2) }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Terms & Conditions and Payment Summary -->
          <div class="grid grid-cols-2 gap-8 mb-8">
            <!-- Terms & Conditions -->
            <div>
              <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">{{
                t('termsAndConditions') }}</h3>
              <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ t('thankYouMessage') }}
              </p>
            </div>

            <!-- Payment Summary -->
            <div>
              <div class="space-y-3">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">{{ t('subtotal') }}</span>
                  <span class="text-gray-900 dark:text-white">${{ previewSubtotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600 dark:text-gray-400">{{ t('discount') }}</span>
                  <span class="text-gray-900 dark:text-white">${{ previewDiscount.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-lg font-bold pt-2 border-t border-gray-300 dark:border-gray-600">
                  <span class="text-gray-900 dark:text-white">{{ t('grandTotal') }}</span>
                  <span class="text-gray-900 dark:text-white">${{ previewGrandTotal.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="bg-blue-600 text-white py-4 px-6 rounded-sm mt-8">
            <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
              <!-- Facebook -->
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>{{ schoolInfo.facebook || 'Your Facebook Page' }}</span>
              </div>

              <!-- Location -->
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ schoolInfo.location || 'Your School Address' }}</span>
              </div>

              <!-- Phone -->
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{{ schoolInfo.phone || '099999999' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { useToast } from '../composables/useToast'
import { useLoading } from '../composables/useLoading'
import { useErrorHandler } from '../composables/useErrorHandler'
import { useFormValidation } from '../composables/useFormValidation'
import { addHistory } from '../utils/history'
import { textContains } from '../utils/search'
import logoImage from '../assets/logo.png'
import html2canvas from 'html2canvas'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const router = useRouter()
const { t } = useI18n()
const { success, error } = useToast()
const { withLoading } = useLoading()
const { handleError } = useErrorHandler()

const allStudents = ref([])
const allClasses = ref([])
const enrollments = ref([])
const searchStudentQuery = ref('')

// Load students
const loadStudents = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')
    allStudents.value = await loadDataFromJSON('../data/students.json', 'students_data')
  } catch (err) {
    console.error('Error loading students:', err)
    const saved = localStorage.getItem('students_data')
    if (saved) {
      allStudents.value = JSON.parse(saved)
    } else {
      allStudents.value = []
    }
  }
}

// Load classes
const loadClasses = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')
    allClasses.value = await loadDataFromJSON('../data/classes.json', 'classes_data')
  } catch (err) {
    console.error('Error loading classes:', err)
    const saved = localStorage.getItem('classes_data')
    if (saved) {
      allClasses.value = JSON.parse(saved)
    } else {
      allClasses.value = []
    }
  }
}

// Load enrollments
const loadEnrollments = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')
    enrollments.value = await loadDataFromJSON('../data/enrollments.json', 'enrollments_data')
  } catch (err) {
    console.error('Error loading enrollments:', err)
    const saved = localStorage.getItem('enrollments_data')
    if (saved) {
      enrollments.value = JSON.parse(saved)
    } else {
      enrollments.value = []
    }
  }
}

// Filtered classes based on selected student's enrollments
const filteredClasses = computed(() => {
  if (!paymentForm.studentId) {
    return allClasses.value
  }

  // Get all class IDs that the selected student is enrolled in
  const enrolledClassIds = enrollments.value
    .filter(enrollment => enrollment.studentId === paymentForm.studentId)
    .map(enrollment => enrollment.classId)

  // Return only classes that the student is enrolled in
  return allClasses.value.filter(classItem => enrolledClassIds.includes(classItem.id))
})

const filteredStudentsForSelect = computed(() => {
  if (!searchStudentQuery.value || !searchStudentQuery.value.trim()) return allStudents.value
  return allStudents.value.filter((s) => {
    return (
      textContains(s.nameEnglish || '', searchStudentQuery.value) ||
      textContains(s.name || '', searchStudentQuery.value) ||
      textContains(s.nameKhmer || '', searchStudentQuery.value) ||
      textContains(s.id || '', searchStudentQuery.value)
    )
  })
})

const selectStudentFromPreview = (student) => {
  paymentForm.studentId = student.id
  onStudentChange()
  searchStudentQuery.value = ''
}

// Payment form
const paymentForm = reactive({
  studentId: '',
  classId: '',
  amountDue: 0,
  method: 'Physical',
  startDate: '',
  endDate: '',
  status: 'Pending'
})

// Form validation
const {
  errors,
  validateSelectField,
  validateNumberField,
  validateDateField,
  validateDateRangeFields,
  preventNonNumeric
} = useFormValidation({
  studentId: '',
  classId: '',
  amountDue: '',
  method: '',
  startDate: '',
  endDate: '',
  status: ''
})

// School info
const schoolInfo = ref({
  facebook: 'Your Facebook Page',
  location: 'Your School Address',
  phone: '099999999'
})

// Generate invoice number
const generateInvoiceNumber = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  return `ORD-${year}${month}${day}${hours}${minutes}${seconds}`
}

const formatDate = (date) => {
  const d = new Date(date)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const year = d.getFullYear()
  return `${month}/${day}/${year}`
}

// Preview computed properties
const previewInvoiceNumber = computed(() => {
  return generateInvoiceNumber()
})

const previewInvoiceDate = computed(() => {
  return formatDate(new Date())
})

const previewStartDate = computed(() => {
  if (!paymentForm.startDate) {
    return t('notAvailable')
  }
  return formatDate(paymentForm.startDate)
})

const previewEndDate = computed(() => {
  if (!paymentForm.endDate) {
    return t('notAvailable')
  }
  return formatDate(paymentForm.endDate)
})

const previewCustomerInfo = computed(() => {
  const student = allStudents.value.find(s => s.id === paymentForm.studentId)
  if (!student) {
    return { name: t('notAvailable'), phone: t('notAvailable'), address: t('notAvailable'), session: t('notAvailable'), time: '', registered: '' }
  }
  return {
    name: student.nameEnglish || student.nameKhmer || student.name || t('notAvailable'),
    phone: student.contact || student.phone || t('notAvailable'),
    address: student.province || t('notAvailable'),
    session: student.session || t('notAvailable'),
    time: student.time || '',
    registered: student.registered || ''
  }
})

const previewItem = computed(() => {
  const classItem = filteredClasses.value.find(c => c.id === paymentForm.classId) || allClasses.value.find(c => c.id === paymentForm.classId)
  return {
    description: classItem ? `${t('class') || 'Class'}: ${classItem.className}` : t('payment') || 'Payment',
    price: paymentForm.amountDue || 0
  }
})

const previewSubtotal = computed(() => {
  return paymentForm.amountDue || 0
})

const previewDiscount = computed(() => {
  return 0
})

const previewGrandTotal = computed(() => {
  return Math.max(0, previewSubtotal.value - previewDiscount.value)
})

const previewRegisteredDate = computed(() => {
  if (!paymentForm.studentId) return t('notAvailable')
  const student = allStudents.value.find(s => s.id === paymentForm.studentId)
  if (!student || !student.registered) return t('notAvailable')
  return formatDate(student.registered)
})

// On student change
const onStudentChange = () => {
  // Clear class selection when student changes
  paymentForm.classId = ''

  // Check if there are no classes for this student
  if (filteredClasses.value.length === 0 && paymentForm.studentId) {
    error(t('noClassesForStudent') || 'This student is not enrolled in any classes')
  }
}

// On class change
const onClassChange = () => {
  // Can add additional logic here if needed
}

// Validate payment form
const validatePaymentForm = () => {
  let isValid = true

  if (!validateSelectField('studentId', paymentForm.studentId, true)) {
    isValid = false
  }

  if (!validateSelectField('classId', paymentForm.classId, true)) {
    isValid = false
  }

  if (!validateNumberField('amountDue', paymentForm.amountDue, { required: true, min: 0.01, allowDecimals: true })) {
    isValid = false
  }

  if (!validateSelectField('method', paymentForm.method, true)) {
    isValid = false
  }

  if (!validateDateField('startDate', paymentForm.startDate, { required: true })) {
    isValid = false
  }

  if (!validateDateField('endDate', paymentForm.endDate, { required: true })) {
    isValid = false
  } else {
    // Validate that end date is after start date
    validateDateRangeFields('startDate', 'endDate', paymentForm.startDate, paymentForm.endDate)
  }

  if (!validateSelectField('status', paymentForm.status, true)) {
    isValid = false
  }

  return isValid
}


// Load payments from localStorage
const loadPayments = () => {
  try {
    const saved = localStorage.getItem('payments_data')
    return saved ? JSON.parse(saved) : []
  } catch (err) {
    console.error('Error loading payments:', err)
    return []
  }
}

// Save payments to localStorage
const savePayments = (payments) => {
  try {
    localStorage.setItem('payments_data', JSON.stringify(payments))
  } catch (err) {
    console.error('Error saving payments:', err)
  }
}

// Handle add payment
const handleAddPayment = async () => {
  if (!validatePaymentForm()) {
    error(`${t('validationError') || 'Validation Error'}: ${t('pleaseFixErrors') || 'Please fix the errors'}`)
    return
  }

  try {
    await withLoading(async () => {
      const student = allStudents.value.find(s => s.id === paymentForm.studentId)
      const classItem = allClasses.value.find(c => c.id === paymentForm.classId)

      if (!student || !classItem) {
        error('Student or class not found')
        return
      }

      // Load existing payments
      const payments = loadPayments()

      // Generate new payment ID
      const newId = `PAY${String(payments.length + 1).padStart(3, '0')}`

      // Auto-generate invoice number
      const invoiceNo = generateInvoiceNumber()

      // Create new payment
      const newPayment = {
        id: newId,
        studentId: paymentForm.studentId,
        student: student,
        classId: paymentForm.classId,
        className: classItem.className,
        invoiceNo: invoiceNo,
        amountDue: parseFloat(paymentForm.amountDue),
        method: paymentForm.method,
        startDate: paymentForm.startDate,
        endDate: paymentForm.endDate,
        // keep dueDate for compatibility with existing views/filters
        dueDate: paymentForm.endDate ? new Date(paymentForm.endDate).toISOString() : '',
        status: paymentForm.status,
        created: new Date().toISOString().split('T')[0]
      }

      payments.push(newPayment)
      savePayments(payments)

      addHistory('add', {
        type: 'pos',
        itemName: newPayment.invoiceNo,
        itemId: newId,
        description: `Student payment added - Invoice: ${newPayment.invoiceNo}, Student: ${student.nameEnglish || student.name}, Amount: ${newPayment.amountDue}`,
        user: 'Admin'
      })

      success(`${t('paymentAdded') || 'Payment added'}: "${newPayment.invoiceNo}" ${t('paymentAddedSuccess') || 'successfully'}`)

      // Navigate back to payment list
      router.push('/student-payment')
    }, t('addingPayment'))
  } catch (err) {
    handleError(err, { userMessage: 'Failed to add payment. Please try again.' })
  }
}

const goBack = () => {
  router.push('/student-payment')
}

const takeScreenshot = async () => {
  try {
    const invoiceElement = document.getElementById('invoice-preview')
    if (!invoiceElement) {
      error(t('invoiceElementNotFound') || 'Invoice element not found')
      return
    }
    const canvas = await html2canvas(invoiceElement, {
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: false
    })
    canvas.toBlob((blob) => {
      if (!blob) {
        error(t('screenshotFailed') || 'Failed to generate screenshot')
        return
      }
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = `invoice-${previewInvoiceNumber.value}.png`
      link.href = url
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
      success(t('screenshotSaved') || 'Screenshot saved successfully')
    }, 'image/png')
  } catch (err) {
    console.error('Error taking screenshot:', err)
    error(t('screenshotError') || 'Error generating screenshot. Please try again.')
  }
}

const printInvoice = () => {
  // Add history entry for print invoice
  const invoiceNo = paymentForm.value.invoiceNo || 'N/A'
  addHistory('print', {
    type: 'student',
    itemName: `Invoice ${invoiceNo}`,
    itemId: paymentForm.value.id || null,
    description: `Payment invoice printed - Invoice: ${invoiceNo}, Amount: $${paymentForm.value.amountDue?.toFixed(2) || '0.00'}`,
    user: 'Admin'
  })
  window.print()
}

// Today helper
const getTodayDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Calculate date 2 months from today
const getDateTwoMonthsFromToday = () => {
  const today = new Date()
  const twoMonthsLater = new Date(today)
  twoMonthsLater.setMonth(today.getMonth() + 2)

  // Format as YYYY-MM-DD for date input
  const year = twoMonthsLater.getFullYear()
  const month = String(twoMonthsLater.getMonth() + 1).padStart(2, '0')
  const day = String(twoMonthsLater.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Set end date by adding months to start date
const setEndDateByMonths = (months) => {
  if (!paymentForm.startDate) {
    return
  }

  const startDate = new Date(paymentForm.startDate)
  const endDate = new Date(startDate)
  endDate.setMonth(startDate.getMonth() + months)

  // Format as YYYY-MM-DD for date input
  const year = endDate.getFullYear()
  const month = String(endDate.getMonth() + 1).padStart(2, '0')
  const day = String(endDate.getDate()).padStart(2, '0')
  paymentForm.endDate = `${year}-${month}-${day}`
}

onMounted(() => {
  loadStudents()
  loadClasses()
  loadEnrollments()

  // Auto-set start and end dates (today and today + 2 months)
  paymentForm.startDate = getTodayDate()
  paymentForm.endDate = getDateTwoMonthsFromToday()
})
</script>

<style scoped>
/* Sticky positioning for invoice preview */
.sticky {
  position: sticky;
}
</style>
