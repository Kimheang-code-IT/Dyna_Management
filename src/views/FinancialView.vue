<template>
  <div :class="['mx-auto transition-all duration-300 w-full capitalize', isSidebarCollapsed ? 'max-w-full px-3' : 'max-w-7xl px-3 lg:px-0']">
    <!-- Summary Cards -->
    <div class="flex flex-nowrap sm:flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 mb-2 sm:mb-3">
      <!-- Total Income Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">{{ t('totalIncome') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">${{ totalIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">{{ t('fromFinanceIncome') }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Expenses Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">{{ t('totalExpenses') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">${{ totalExpenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">{{ t('fromFinanceExpense') }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Investments Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">{{ t('totalInvestments') }}</h3>
            <p class="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal text-gray-800 dark:text-white">${{ totalInvestments.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">{{ t('fromFinanceInvestment') }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Net Balance Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-0.5 sm:p-1.5 md:p-2 lg:p-3 flex-1 min-w-0 min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
        <div class="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left justify-center sm:justify-between">
          <div class="order-2 sm:order-1">
            <h3 class="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium mb-0.5 sm:mb-1 md:mb-2 capitalize">{{ t('netBalance') }}</h3>
            <p :class="['text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight sm:leading-normal', netBalance >= 0 ? 'text-gray-800 dark:text-white' : 'text-red-600 dark:text-red-400']">
              ${{ netBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
            </p>
            <p class="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">{{ t('incomeMinusExpenseMinusInvestment') }}</p>
          </div>
          <div class="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex-shrink-0 flex items-center justify-center order-1 sm:order-2 mb-2 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Finance Summary Chart -->
    <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
      <div class="mb-4">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white capitalize">{{ t('financeSummary') }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('overviewOfIncomeExpenseAndInvestmentTotals') }}</p>
      </div>
      <div class="h-[400px]">
        <Line :data="lineChartData" :options="lineChartOptions" />
      </div>
      
      <!-- Additional Information -->
      <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-wrap items-center gap-4 text-sm">
          <div>
            <span class="font-medium text-gray-700 dark:text-gray-300">{{ t('netBalance') }}: </span>
            <span :class="netBalance >= 0 ? 'text-gray-800 dark:text-white' : 'text-red-600 dark:text-red-400'">
              ${{ netBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
            </span>
          </div>
          <div>
            <span class="text-gray-600 dark:text-gray-400">{{ t('incomeRecords') }}: </span>
            <span class="font-medium text-gray-800 dark:text-white">{{ incomeRecords }}</span>
          </div>
          <div>
            <span class="text-gray-600 dark:text-gray-400">{{ t('expenseRecords') }}: </span>
            <span class="font-medium text-gray-800 dark:text-white">{{ expenseRecords }}</span>
          </div>
          <div>
            <span class="text-gray-600 dark:text-gray-400">{{ t('investmentRecords') }}: </span>
            <span class="font-medium text-gray-800 dark:text-white">{{ investmentRecords }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()

// Inject dark mode state
const isDark = inject('isDark', ref(false))

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Load financial data
const financialData = ref([])

const loadFinancialData = async () => {
  try {
    const { loadDataFromJSON } = await import('../utils/dataLoader')
    const data = await loadDataFromJSON('../data/financial.json', 'financial_data')
    financialData.value = data
  } catch (error) {
    console.error('Error loading financial data:', error)
    const saved = localStorage.getItem('financial_data')
    if (saved) {
      financialData.value = JSON.parse(saved)
    } else {
      financialData.value = []
    }
  }
}

// Computed values
const totalIncome = computed(() => {
  return financialData.value
    .filter(item => item.type === 'income')
    .reduce((sum, item) => sum + (item.amount || 0), 0)
})

const totalExpenses = computed(() => {
  return financialData.value
    .filter(item => item.type === 'expense')
    .reduce((sum, item) => sum + (item.amount || 0), 0)
})

const totalInvestments = computed(() => {
  return financialData.value
    .filter(item => item.type === 'investment')
    .reduce((sum, item) => sum + (item.amount || 0), 0)
})

const netBalance = computed(() => {
  return totalIncome.value - totalExpenses.value - totalInvestments.value
})

const incomeRecords = computed(() => {
  return financialData.value.filter(item => item.type === 'income').length
})

const expenseRecords = computed(() => {
  return financialData.value.filter(item => item.type === 'expense').length
})

const investmentRecords = computed(() => {
  return financialData.value.filter(item => item.type === 'investment').length
})

// Line Chart Data
const lineChartData = computed(() => {
  return {
    labels: [t('income'), t('expense'), t('investment')],
    datasets: [
      {
        label: t('amount'),
        data: [totalIncome.value, totalExpenses.value, totalInvestments.value],
        borderColor: 'rgb(34, 197, 94)', // Green for income
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        pointBackgroundColor: [
          'rgb(34, 197, 94)',  // Green for income
          'rgb(239, 68, 68)',  // Red for expense
          'rgb(59, 130, 246)'  // Blue for investment
        ],
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
        fill: false
      }
    ]
  }
})

const lineChartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: isDark.value ? '#e5e7eb' : '#374151',
        usePointStyle: true,
        padding: 15,
        generateLabels: (chart) => {
          const original = ChartJS.defaults.plugins.legend.labels.generateLabels(chart)
          return [
            {
              text: t('income'),
              fillStyle: 'rgb(34, 197, 94)',
              strokeStyle: 'rgb(34, 197, 94)',
              lineWidth: 0,
              hidden: false,
              index: 0
            },
            {
              text: t('expense'),
              fillStyle: 'rgb(239, 68, 68)',
              strokeStyle: 'rgb(239, 68, 68)',
              lineWidth: 0,
              hidden: false,
              index: 1
            },
            {
              text: t('investment'),
              fillStyle: 'rgb(59, 130, 246)',
              strokeStyle: 'rgb(59, 130, 246)',
              lineWidth: 0,
              hidden: false,
              index: 2
            }
          ]
        }
      }
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return `$${context.parsed.y.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }
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
        color: isDark.value ? '#e5e7eb' : '#374151',
        callback: (value) => {
          return `$${value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
        },
        stepSize: 500
      },
      grid: {
        color: isDark.value ? '#374151' : '#e5e7eb'
      }
    }
  }
}))

onMounted(() => {
  loadFinancialData()
})
</script>
