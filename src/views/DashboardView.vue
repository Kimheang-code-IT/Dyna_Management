<template>
  <div
    :class="['mx-auto transition-all duration-300 w-full', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Sales Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalSales') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              ${{ totalSales.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Orders Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalOrders') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalOrders.toLocaleString() }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Products Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalProducts') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalProducts.toLocaleString() }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-purple-600 dark:text-purple-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Total Users Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3
              class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2">
              {{ t('totalUsers') }}</h3>
            <p
              class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">
              {{ totalUsers.toLocaleString() }}</p>
          </div>
          <div
            class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-orange-600 dark:text-orange-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-2 mb-2 sm:mb-2">
      <!-- Left: Line Chart -->
      <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
        <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2 capitalize">{{ t('salesOverview') }}</h3>
        <div class="h-[300px] sm:h-[350px] lg:h-[460px]">
          <Line :data="lineChartData" :options="lineChartOptions" />
        </div>
      </div>

      <!-- Right: Radar Chart and Pie Chart -->
      <div class="lg:col-span-1 space-y-2 sm:space-y-3">
        <!-- Radar Chart 1 -->
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
          <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2 capitalize">{{ t('performanceMetrics')
          }}</h3>
          <div class="h-[180px] sm:h-[200px]">
            <Radar :data="radarChart1Data" :options="radarChartOptions" />
          </div>
        </div>

        <!-- Pie Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
          <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2 capitalize">{{ t('productCategories') }}
          </h3>
          <div class="h-[180px] sm:h-[200px]">
            <Pie :data="pieChartData" :options="pieChartOptions" />
          </div>
        </div>
      </div>
    </div>

    <!-- Bar Chart Section -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3 mb-2">
      <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2 capitalize">{{ t('monthlyPerformance') ||
        'Monthly Performance' }}</h3>
      <div class="h-[300px] sm:h-[350px] lg:h-[400px]">
        <Bar :data="barChartData" :options="barChartOptions" />
      </div>
    </div>

    <!-- Cambodia Provinces Analytics Map -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-2 sm:p-3">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-white capitalize">{{ t('cambodiaProvinces') ||
          'Cambodia Provinces Analytics' }}</h3>
        <div class="flex gap-2 flex-wrap">
          <select v-model="selectedAnalyticsType"
            class="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="total">{{ t('total') }}</option>
            <option value="students">{{ t('students') }}</option>
            <option value="employees">{{ t('employees') }}</option>
            <option value="users">{{ t('users') }}</option>
          </select>
        </div>
      </div>

      <!-- Provinces Grid Map -->
      <div class="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 gap-1 sm:gap-1.5">
        <div v-for="province in provincesData" :key="province.name" class="relative group cursor-pointer"
          :title="`${province.name}: ${province.value.toLocaleString()}`">
          <div
            class="w-full aspect-square rounded border transition-all duration-200 hover:scale-110 hover:shadow-md flex flex-col items-center justify-center p-0.5 sm:p-1"
            :class="[
              province.value > 0
                ? 'border-blue-300 dark:border-blue-600'
                : 'border-gray-200 dark:border-gray-700',
              getProvinceColorClass(province.value, maxProvinceValue)
            ]">
            <div
              class="text-[7px] sm:text-[8px] font-semibold text-center leading-tight mb-0.5 text-gray-800 dark:text-white">
              {{ province.shortName }}
            </div>
            <div
              class="text-[6px] sm:text-[7px] text-center leading-tight mb-0.5 text-gray-600 dark:text-gray-400 line-clamp-2">
              {{ province.name }}
            </div>
            <div class="text-[8px] sm:text-[9px] font-bold text-center text-gray-700 dark:text-gray-300">
              {{ province.value.toLocaleString() }}
            </div>
          </div>

          <!-- Tooltip on hover -->
          <div
            class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            <div class="font-semibold">{{ province.name }}</div>
            <div>{{ selectedAnalyticsType === 'total' ? t('total') : selectedAnalyticsType === 'students' ? t('students') : selectedAnalyticsType === 'employees' ? t('employees') : t('users') }}: {{ province.value.toLocaleString() }}</div>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="mt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs">
        <div class="flex items-center gap-1.5">
          <span class="text-gray-600 dark:text-gray-400 font-medium">{{ t('legend') }}:</span>
        </div>
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700"></div>
          <span class="text-gray-600 dark:text-gray-400">0</span>
        </div>
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded bg-blue-50 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-600"></div>
          <span class="text-gray-600 dark:text-gray-400">1-10</span>
        </div>
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded bg-blue-100 dark:bg-blue-800/50 border border-blue-400 dark:border-blue-500">
          </div>
          <span class="text-gray-600 dark:text-gray-400">11-50</span>
        </div>
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded bg-blue-200 dark:bg-blue-700/50 border border-blue-500 dark:border-blue-400">
          </div>
          <span class="text-gray-600 dark:text-gray-400">51-100</span>
        </div>
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded bg-blue-500 dark:bg-blue-500 border border-blue-700 dark:border-blue-200"></div>
          <span class="text-gray-600 dark:text-gray-400">100+</span>
        </div>
      </div>
    </div>

    <!-- Error Testing Section (Development Only) -->
    <div v-if="showErrorTest"
      class="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-sm shadow p-4 mt-4">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-3 capitalize">🧪 Error Testing</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Test different error types to verify SystemErrorView:</p>
      <div class="flex flex-wrap gap-2">
        <button @click="testServerError"
          class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-sm transition-colors font-medium text-sm">
          Test Server Error (500)
        </button>
        <button @click="testNetworkError"
          class="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-sm transition-colors font-medium text-sm">
          Test Network Error
        </button>
        <button @click="testTimeoutError"
          class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-sm transition-colors font-medium text-sm">
          Test Timeout Error
        </button>
        <button @click="testServiceUnavailable"
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-sm transition-colors font-medium text-sm">
          Test Service Unavailable (503)
        </button>
        <button @click="showErrorTest = false"
          class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-sm transition-colors font-medium text-sm">
          Hide Test Panel
        </button>
      </div>
    </div>

    <!-- Show Error Test Button (if hidden) -->
    <div v-else class="mt-4">
      <button @click="showErrorTest = true"
        class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-sm transition-colors font-medium text-sm">
        🧪 Show Error Test Panel
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useErrorHandler } from '../composables/useErrorHandler'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()
const { handleError } = useErrorHandler()

// Error test panel visibility
const showErrorTest = ref(false)

// Analytics type for provinces map
const selectedAnalyticsType = ref('total')

// Cambodia provinces list
const cambodiaProvinces = [
  { name: 'Phnom Penh', shortName: 'PP' },
  { name: 'Kandal', shortName: 'KD' },
  { name: 'Kampong Cham', shortName: 'KC' },
  { name: 'Siem Reap', shortName: 'SR' },
  { name: 'Battambang', shortName: 'BB' },
  { name: 'Preah Sihanouk', shortName: 'PS' },
  { name: 'Kampot', shortName: 'KP' },
  { name: 'Takeo', shortName: 'TK' },
  { name: 'Kampong Thom', shortName: 'KT' },
  { name: 'Pursat', shortName: 'PT' },
  { name: 'Kampong Speu', shortName: 'KS' },
  { name: 'Kratie', shortName: 'KR' },
  { name: 'Mondulkiri', shortName: 'MK' },
  { name: 'Oddar Meanchey', shortName: 'OM' },
  { name: 'Pailin', shortName: 'PL' },
  { name: 'Preah Vihear', shortName: 'PV' },
  { name: 'Ratanakiri', shortName: 'RT' },
  { name: 'Stung Treng', shortName: 'ST' },
  { name: 'Banteay Meanchey', shortName: 'BM' },
  { name: 'Kampong Chhnang', shortName: 'KH' },
  { name: 'Tbong Khmum', shortName: 'TM' },
  { name: 'Kep', shortName: 'KE' },
  { name: 'Koh Kong', shortName: 'KK' },
  { name: 'Prey Veng', shortName: 'PV' },
  { name: 'Svay Rieng', shortName: 'SV' }
]

// Calculate province data based on selected analytics type
const provincesData = computed(() => {
  const provinceCounts = {}

  // Initialize all provinces with 0
  cambodiaProvinces.forEach(province => {
    provinceCounts[province.name] = 0
  })

  // Count based on selected type
  if (selectedAnalyticsType.value === 'students' || selectedAnalyticsType.value === 'total') {
    studentsData.forEach(student => {
      if (student.province && provinceCounts.hasOwnProperty(student.province)) {
        provinceCounts[student.province]++
      }
    })
  }

  if (selectedAnalyticsType.value === 'employees' || selectedAnalyticsType.value === 'total') {
    employeesData.forEach(employee => {
      if (employee.province && provinceCounts.hasOwnProperty(employee.province)) {
        provinceCounts[employee.province]++
      }
    })
  }

  if (selectedAnalyticsType.value === 'users' || selectedAnalyticsType.value === 'total') {
    usersData.forEach(user => {
      // Users might not have province, but we can check if they have location data
      // For now, we'll skip users as they don't typically have province data
    })
  }

  // Convert to array format
  return cambodiaProvinces.map(province => ({
    ...province,
    value: provinceCounts[province.name] || 0
  }))
})

// Get max value for color scaling
const maxProvinceValue = computed(() => {
  return Math.max(...provincesData.value.map(p => p.value), 1)
})

// Get color class based on value
const getProvinceColorClass = (value, maxValue) => {
  if (value === 0) {
    return 'bg-gray-50 dark:bg-gray-900/50'
  }

  const percentage = (value / maxValue) * 100

  if (percentage <= 20) {
    return 'bg-blue-50 dark:bg-blue-900/30'
  } else if (percentage <= 40) {
    return 'bg-blue-100 dark:bg-blue-800/50'
  } else if (percentage <= 60) {
    return 'bg-blue-200 dark:bg-blue-700/50'
  } else if (percentage <= 80) {
    return 'bg-blue-300 dark:bg-blue-600/50'
  } else {
    return 'bg-blue-500 dark:bg-blue-500'
  }
}

// Inject dark mode state
const isDark = inject('isDark', ref(false))
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
} from 'chart.js'
import { Line, Radar, Pie, Bar } from 'vue-chartjs'
import salesData from '../data/sales.json'
import productsData from '../data/products.json'
import usersData from '../data/users.json'
import categoriesData from '../data/categories.json'
import studentsData from '../data/students.json'
import employeesData from '../data/employees.json'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
)

// Computed values from real data
const totalSales = computed(() => {
  return salesData.reduce((sum, sale) => sum + sale.total, 0)
})

const totalOrders = computed(() => salesData.length)

const totalProducts = computed(() => productsData.length)

const totalUsers = computed(() => usersData.length)

// Process sales data for line chart (group by month)
const processSalesByMonth = () => {
  const monthlyData = {
    'Jan': { sales: 0, orders: 0 },
    'Feb': { sales: 0, orders: 0 },
    'Mar': { sales: 0, orders: 0 },
    'Apr': { sales: 0, orders: 0 },
    'May': { sales: 0, orders: 0 },
    'Jun': { sales: 0, orders: 0 },
    'Jul': { sales: 0, orders: 0 },
    'Aug': { sales: 0, orders: 0 },
    'Sep': { sales: 0, orders: 0 },
    'Oct': { sales: 0, orders: 0 },
    'Nov': { sales: 0, orders: 0 },
    'Dec': { sales: 0, orders: 0 }
  }

  salesData.forEach(sale => {
    // Parse date (format: "8/16/2024")
    const [month, day, year] = sale.date.split('/')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthName = monthNames[parseInt(month) - 1]

    if (monthlyData[monthName]) {
      monthlyData[monthName].sales += sale.total
      monthlyData[monthName].orders += 1
    }
  })

  return monthlyData
}

const monthlyData = processSalesByMonth()
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Line Chart Data
const lineChartData = ref({
  labels: monthLabels,
  datasets: [
    {
      label: 'Sales',
      data: monthLabels.map(month => monthlyData[month].sales),
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true
    },
    {
      label: 'Orders',
      data: monthLabels.map(month => monthlyData[month].orders),
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
      fill: true
    }
  ]
})

const lineChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: isDark.value ? '#e5e7eb' : '#374151'
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: isDark.value ? '#e5e7eb' : '#374151'
      },
      grid: {
        color: isDark.value ? '#374151' : '#e5e7eb'
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: isDark.value ? '#e5e7eb' : '#374151'
      },
      grid: {
        color: isDark.value ? '#374151' : '#e5e7eb'
      }
    }
  }
}))

// Calculate performance metrics (normalized to 0-100 scale)
const calculatePerformanceMetrics = () => {
  const maxSales = Math.max(...Object.values(monthlyData).map(m => m.sales), 1)
  const maxOrders = Math.max(...Object.values(monthlyData).map(m => m.orders), 1)
  const maxProducts = totalProducts.value || 1
  const maxUsers = totalUsers.value || 1

  // Get current month (August) data
  const currentMonthSales = monthlyData['Aug'].sales
  const currentMonthOrders = monthlyData['Aug'].orders

  return {
    sales: Math.min(100, (currentMonthSales / maxSales) * 100),
    orders: Math.min(100, (currentMonthOrders / maxOrders) * 100),
    products: Math.min(100, (totalProducts.value / maxProducts) * 100),
    users: Math.min(100, (totalUsers.value / maxUsers) * 100),
    revenue: Math.min(100, (currentMonthSales / maxSales) * 100),
    growth: 75 // Placeholder for growth calculation
  }
}

const performanceMetrics = calculatePerformanceMetrics()

// Radar Chart 1 Data
const radarChart1Data = ref({
  labels: ['Sales', 'Orders', 'Products', 'Users', 'Revenue', 'Growth'],
  datasets: [
    {
      label: 'Current Month',
      data: [
        Math.round(performanceMetrics.sales),
        Math.round(performanceMetrics.orders),
        Math.round(performanceMetrics.products),
        Math.round(performanceMetrics.users),
        Math.round(performanceMetrics.revenue),
        Math.round(performanceMetrics.growth)
      ],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      pointBackgroundColor: 'rgb(59, 130, 246)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(59, 130, 246)'
    }
  ]
})

const radarChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      ticks: {
        color: isDark.value ? '#e5e7eb' : '#374151'
      },
      grid: {
        color: isDark.value ? '#374151' : '#e5e7eb'
      },
      pointLabels: {
        color: isDark.value ? '#e5e7eb' : '#374151'
      }
    }
  }
}))

// Process category data for pie chart
const processCategoryData = () => {
  const categoryCounts = {}

  productsData.forEach(product => {
    if (categoryCounts[product.category]) {
      categoryCounts[product.category]++
    } else {
      categoryCounts[product.category] = 1
    }
  })

  return categoryCounts
}

const categoryCounts = processCategoryData()
const categoryLabels = Object.keys(categoryCounts)
const categoryValues = Object.values(categoryCounts)

// Color palette for categories
const getCategoryColors = (count) => {
  const colors = [
    'rgb(59, 130, 246)',   // blue
    'rgb(16, 185, 129)',   // green
    'rgb(251, 191, 36)',   // yellow
    'rgb(139, 92, 246)',   // purple
    'rgb(239, 68, 68)',    // red
    'rgb(236, 72, 153)',   // pink
    'rgb(6, 182, 212)',    // cyan
    'rgb(132, 204, 22)',   // lime
    'rgb(249, 115, 22)',   // orange
    'rgb(99, 102, 241)'    // indigo
  ]

  return {
    backgroundColor: colors.slice(0, count),
    borderColor: colors.slice(0, count)
  }
}

const categoryColors = getCategoryColors(categoryLabels.length)

// Pie Chart Data
const pieChartData = ref({
  labels: categoryLabels,
  datasets: [
    {
      data: categoryValues,
      backgroundColor: categoryColors.backgroundColor,
      borderColor: categoryColors.borderColor,
      borderWidth: 2
    }
  ]
})

const pieChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: isDark.value ? '#e5e7eb' : '#374151'
      }
    }
  }
}))

// Process data for bar chart (top months by sales)
const processBarChartData = () => {
  // Get top 6 months by sales
  const monthlySales = monthLabels.map(month => ({
    month,
    sales: monthlyData[month].sales,
    orders: monthlyData[month].orders
  })).sort((a, b) => b.sales - a.sales).slice(0, 6)

  return {
    labels: monthlySales.map(m => m.month),
    sales: monthlySales.map(m => m.sales),
    orders: monthlySales.map(m => m.orders)
  }
}

const barChartData = computed(() => {
  const processed = processBarChartData()
  return {
    labels: processed.labels,
    datasets: [
      {
        label: 'Sales ($)',
        data: processed.sales,
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1
      },
      {
        label: 'Orders',
        data: processed.orders,
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 1
      }
    ]
  }
})

const barChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: isDark.value ? '#e5e7eb' : '#374151'
      }
    },
    title: {
      display: true,
      text: t('monthlyPerformance') || 'Monthly Performance',
      color: isDark.value ? '#e5e7eb' : '#374151',
      font: {
        size: 16,
        weight: 'bold'
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: isDark.value ? '#e5e7eb' : '#374151'
      },
      grid: {
        color: isDark.value ? '#374151' : '#e5e7eb'
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: isDark.value ? '#e5e7eb' : '#374151'
      },
      grid: {
        color: isDark.value ? '#374151' : '#e5e7eb'
      }
    }
  }
}))

// Error testing functions
const testServerError = () => {
  const error = new Error('Internal Server Error')
  error.status = 500
  handleError(error, { redirectToErrorPage: true })
}

const testNetworkError = () => {
  const error = new TypeError('Failed to fetch')
  error.message = 'Network request failed'
  handleError(error, { redirectToErrorPage: true })
}

const testTimeoutError = () => {
  const error = new Error('Request timeout')
  error.status = 504
  handleError(error, { redirectToErrorPage: true })
}

const testServiceUnavailable = () => {
  const error = new Error('Service Unavailable')
  error.status = 503
  handleError(error, { redirectToErrorPage: true })
}
</script>
