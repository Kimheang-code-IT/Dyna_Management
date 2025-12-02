<template>
  <div :class="['mx-auto transition-all duration-300', isSidebarCollapsed ? 'max-w-full px-2' : 'max-w-7xl']">
    <!-- Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
      <!-- Total Sales Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('totalSales') }}</h3>
            <p class="text-3xl font-bold text-gray-800 dark:text-white">${{ totalSales.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Orders Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('totalOrders') }}</h3>
            <p class="text-3xl font-bold text-gray-800 dark:text-white">{{ totalOrders.toLocaleString() }}</p>
          </div>
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Products Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('totalProducts') }}</h3>
            <p class="text-3xl font-bold text-gray-800 dark:text-white">{{ totalProducts.toLocaleString() }}</p>
          </div>
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Total Users Card -->
      <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">{{ t('totalUsers') }}</h3>
            <p class="text-3xl font-bold text-gray-800 dark:text-white">{{ totalUsers.toLocaleString() }}</p>
          </div>
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <!-- Left: Line Chart -->
      <div class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-sm shadow p-3">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">{{ t('salesOverview') }}</h3>
        <div class="h-[460px]">
          <Line :data="lineChartData" :options="lineChartOptions" />
        </div>
      </div>
      
      <!-- Right: Radar Chart and Pie Chart -->
      <div class="lg:col-span-1 space-y-3">
        <!-- Radar Chart 1 -->
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">{{ t('performanceMetrics') }}</h3>
          <div class="h-[200px]">
            <Radar :data="radarChart1Data" :options="radarChartOptions" />
          </div>
        </div>
        
        <!-- Pie Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-sm shadow p-3">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">{{ t('productCategories') }}</h3>
          <div class="h-[200px]">
            <Pie :data="pieChartData" :options="pieChartOptions" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue'
import { useI18n } from '../composables/useI18n'

// Inject sidebar collapse state
const isSidebarCollapsed = inject('isSidebarCollapsed', ref(false))
const { t } = useI18n()

// Inject dark mode state
const isDark = inject('isDark', ref(false))
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
} from 'chart.js'
import { Line, Radar, Pie } from 'vue-chartjs'
import salesData from '../data/sales.json'
import productsData from '../data/products.json'
import usersData from '../data/users.json'
import categoriesData from '../data/categories.json'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
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
</script>
