<template>
  <aside :class="[
    'fixed left-0 top-0 h-screen bg-white dark:bg-gray-800 flex flex-col transition-all duration-300 shadow-xl border-r border-gray-200 dark:border-gray-700',
    // Desktop: always visible, z-30
    'lg:z-30',
    // Mobile: overlay, z-50, hidden by default
    'z-50 lg:translate-x-0',
    isMobile ? (isMobileOpen ? 'translate-x-0' : '-translate-x-full') : '',
    // Width
    isCollapsed && !isMobile ? 'w-20 lg:w-20' : 'w-[255px]'
  ]">
    <!-- Logo -->
    <div
      class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center"
      :class="isCollapsed ? 'py-1 px-2' : 'py-1 px-3'">
      <div :class="[
        'flex items-center transition-all duration-300',
        isCollapsed ? 'w-14 h-14 justify-center' : 'w-full h-full'
      ]">
        <!-- Logo Graphic -->
        <div :class="[
          'flex-shrink-0 transition-all duration-300',
          isCollapsed ? 'w-16 h-16 mt-4' : 'w-14 h-14'
        ]">
          <svg viewBox="0 0 120 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <!-- Lightbulb with Brain -->
            <g transform="translate(62, 16)">
              <!-- White background circle -->
              <circle cx="0" cy="0" r="16" fill="white" class="dark:fill-gray-800 bg-white" />
              <!-- Lightbulb outer shape (light blue) -->
              <path
                d="M0,-11 Q-6.5,-11 -8.5,-4.5 Q-8.5,2 -6.5,6.5 Q-4.5,10.5 0,12.5 Q4.5,10.5 6.5,6.5 Q8.5,2 8.5,-4.5 Q6.5,-11 0,-11"
                fill="#87CEEB" stroke="#1e40af" stroke-width="2.2" class="dark:stroke-blue-50" />
              <!-- Brain inside (yellow with detailed convolutions) -->
              <g transform="translate(0, 0)">
                <!-- Brain main shape -->
                <path
                  d="M-5.5,-2.5 Q-5.5,-5.5 -2.8,-5.5 Q0,-5.5 0,-2.8 Q0,-5.5 2.8,-5.5 Q5.5,-5.5 5.5,-2.8 Q5.5,0 2.8,2.8 Q0,5.5 -2.8,2.8 Q-5.5,0 -5.5,-2.8"
                  fill="#FFD700" stroke="#1e40af" stroke-width="1.8" class="dark:stroke-blue-50" />
                <!-- Brain convolutions/ridges -->
                <path d="M-3.5,-4 Q-1.5,-4 0,-3 Q1.5,-4 3.5,-4" stroke="#1e40af" stroke-width="1.2" fill="none"
                  class="dark:stroke-blue-50" />
                <path d="M-4,-1.5 Q-2,-1.5 0,-0.5 Q2,-1.5 4,-1.5" stroke="#1e40af" stroke-width="1.2" fill="none"
                  class="dark:stroke-blue-50" />
                <path d="M-3.5,1 Q-1.5,1 0,2 Q1.5,1 3.5,1" stroke="#1e40af" stroke-width="1.2" fill="none"
                  class="dark:stroke-blue-50" />
                <!-- Brain hemispheres division -->
                <line x1="0" y1="-5.5" x2="0" y2="2.8" stroke="#1e40af" stroke-width="1" class="dark:stroke-blue-50" />
              </g>
              <!-- Lightbulb base -->
              <rect x="-3.5" y="12.5" width="7" height="2.5" rx="1.2" fill="#1e40af" class="dark:fill-blue-50" />
              <rect x="-2.5" y="15" width="5" height="1.2" rx="0.6" fill="#1e40af" class="dark:fill-blue-50" />
              <!-- Light rays from top and sides (centered) -->
              <line x1="1" y1="-11" x2="0" y2="-18" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                class="dark:stroke-blue-50" />
              <line x1="-6.5" y1="-7" x2="-11" y2="-12" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                class="dark:stroke-blue-50" />
              <line x1="6.5" y1="-7" x2="11" y2="-12" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                class="dark:stroke-blue-50" />
              <line x1="-8.5" y1="0" x2="-13" y2="0" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                class="dark:stroke-blue-50" />
              <line x1="8.5" y1="0" x2="13" y2="0" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                class="dark:stroke-blue-50" />
              <line x1="-7" y1="5" x2="-11" y2="9" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                class="dark:stroke-blue-50" />
              <line x1="7" y1="5" x2="11" y2="9" stroke="#1e40af" stroke-width="2.5" stroke-linecap="round"
                class="dark:stroke-blue-50" />
            </g>


            <!-- Top-left circle - Yellow with Laptop -->
            <g transform="translate(30, 50)">
              <circle cx="13" cy="-7.5" r="13" fill="#FFD700" stroke="#1e293b" stroke-width="1.8"
                class="dark:stroke-gray-50" />
              <rect x="6.5  " y="-13.5" width="14" height="10" rx="0.6" fill="#1e293b" class="dark:fill-gray-600" />
              <rect x="7.5" y="-4" width="12" height="2.4" rx="0.4" fill="#1e293b" class="dark:fill-gray-600" />
            </g>

            <!-- Top-right circle - Blue with A -->
            <g transform="translate(90, 50)">
              <circle cx="-8" cy="-8" r="13" fill="#3b82f6" stroke="#1e293b" stroke-width="1.8"
                class="dark:stroke-gray-50" />
              <text x="-8" y="-3" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white"
                text-anchor="middle">A</text>
            </g>

            <!-- Bottom-left circle - Red with 文 -->
            <g transform="translate(30, 80  )">
              <circle cx="13" cy="-4" r="13" fill="#ef4444" stroke="#1e293b" stroke-width="1.8"
                class="dark:stroke-gray-50" />
              <text x="13" y="3" font-family="Arial, sans-serif" font-size="18px" font-weight="bold" fill="white"
                text-anchor="middle">文</text>
            </g>

            <!-- Bottom-right circle - Green with Music Note -->
            <g transform="translate(90, 80)">
              <circle cx="-8" cy="-4" r="13" fill="#22c55e" stroke="#1e293b" stroke-width="1.8"
                class="dark:stroke-gray-50" />
              <!-- Music note centered in circle -->
              <g transform="translate(-10, -4 )">
                <path d="M-3,-4 L-3,4 M-3,-4 L3,-4 L3,4" stroke="white" stroke-width="2.5" fill="none"
                  stroke-linecap="round" />
                <circle cx="4.5" cy="3" r="2" fill="white" />
              </g>
            </g>

            <!-- Horizontal connections between circles -->
            <line x1="55" y1="42" x2="70" y2="42" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50" />
            <line x1="55" y1="76" x2="70" y2="76" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50" />
            <line x1="43" y1="54" x2="43" y2="64" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50" />
            <line x1="81" y1="54" x2="81" y2="64" stroke="#1e293b" stroke-width="4" class="dark:stroke-gray-50" />
          </svg>
        </div>

        <!-- Logo Text (hidden when collapsed) -->
        <div v-if="!isCollapsed" class="flex flex-col flex-1">
          <span class="text-[28px] pt-2 font-bold text-blue-900 dark:text-white akbalthom-khmer"
            style="line-height: 0.8">
            ដំណាក់សិក្សា
          </span>
          <span
            class="text-[7px] font-normal text-blue-950 dark:text-blue-400 leading-tight pl-1 uppercase tracking-wider mt-0.5">
            LEARNING FOR GROWING
          </span>
        </div>
      </div>
    </div>

    <!-- Menu Items -->
    <nav class="flex-1 p-2 overflow-y-auto custom-scrollbar">
      <ul class="space-y-1">
        <!-- All menu sections with unified structure -->
        <template v-for="section in allMenuSections" :key="section.title">
          <!-- Section Header (only show if title exists and sidebar is not collapsed) -->
          <li v-if="section.title && !isCollapsed" class="mt-6 mb-2 first:mt-0">
            <div class="px-3 py-2">
              <h2
                class="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.15em] letter-spacing-wider">
                {{ section.title }}
              </h2>
              <div class="mt-1.5 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent">
              </div>
            </div>
          </li>

          <!-- Menu Items in Section -->
          <li v-for="item in section.items" :key="item.path">
            <router-link :to="item.path" @click="handleNavigation" :class="[
              'group flex items-center transition-all duration-200 relative overflow-hidden',
              isCollapsed && !isMobile ? 'justify-center px-3 py-3 w-full' : 'px-3 py-2.5',
              $route.path === item.path
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20 font-medium rounded-sm'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-md'
            ]" :title="isCollapsed && !isMobile ? item.label : ''">
              <!-- Active indicator bar -->
              <span v-if="$route.path === item.path && !isCollapsed"
                class="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 dark:bg-blue-400 rounded-r-full"></span>

              <span :class="[
                'flex-shrink-0 flex items-center justify-center transition-transform duration-200',
                isCollapsed ? 'w-5 h-5' : 'w-5 h-5 mr-3',
                $route.path === item.path ? 'scale-110' : 'group-hover:scale-110'
              ]" v-html="item.icon"></span>
              <span v-if="!isCollapsed" :class="[
                'flex-1 transition-all duration-200',
                $route.path === item.path ? 'font-semibold' : 'font-medium'
              ]">
                {{ item.label }}
              </span>
            </router-link>
          </li>
        </template>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref, inject, computed } from 'vue'
import { useI18n } from '../composables/useI18n'

// Inject sidebar collapse state from App.vue
const isCollapsed = inject('isSidebarCollapsed', ref(false))
const isMobileSidebarOpen = inject('isMobileSidebarOpen', ref(false))
const isMobile = inject('isMobile', ref(false))
const closeMobileSidebar = inject('closeMobileSidebar', () => { })
const { t } = useI18n()

// Computed for mobile open state
const isMobileOpen = computed(() => isMobileSidebarOpen.value)

// Close sidebar on mobile when navigating
const handleNavigation = () => {
  if (isMobile.value) {
    closeMobileSidebar()
  }
}

// All menu items organized in sections with unified structure
const allMenuSections = computed(() => [
  {
    title: t('overview').toUpperCase(),
    items: [
      {
        path: '/',
        label: t('dashboard'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>'
      }
    ]
  },
  {
    title: t('stockPos').toUpperCase(),
    items: [
      {
        path: '/category',
        label: t('category'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>'
      },
      {
        path: '/product',
        label: t('product'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>'
      },
      {
        path: '/pos',
        label: t('pos'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>'
      }
    ]
  },
  {
    title: t('students').toUpperCase(),
    items: [
      {
        path: '/students',
        label: t('students'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>'
      },
      {
        path: '/student-register',
        label: t('studentRegister'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>'
      },
      {
        path: '/class-management',
        label: t('classManagement'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>'
      },
      {
        path: '/student-deadline',
        label: t('studentDeadline'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
      },
      {
        path: '/student-payment',
        label: t('studentPayment'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>'
      },
      {
        path: '/student-book',
        label: t('studentBook'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'
      },
      {
        path: '/student-graduated',
        label: t('studentGraduated'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v6.055" /></svg>'
      }
    ]
  },
  {
    title: t('employee').toUpperCase(),
    items: [
      {
        path: '/employee',
        label: t('employee'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>'
      },
      {
        path: '/employee-register',
        label: t('employeeRegister'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>'
      },
      {
        path: '/employee-attendance',
        label: t('employeeAttendance'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
      },
      {
        path: '/employee-salary',
        label: t('employeeSalary'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>'
      },
      {
        path: '/employee-schedule',
        label: t('employeeSchedule'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
      }
    ]
  },
  {
    title: t('financial').toUpperCase(),
    items: [
      {
        path: '/financial',
        label: t('financial'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
      },
      {
        path: '/investment',
        label: t('investment'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>'
      },
      {
        path: '/expense',
        label: t('expense'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>'
      },
      {
        path: '/income',
        label: t('income'),
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
      }
    ]
  }
])
</script>

<style scoped>
/* Custom scrollbar styling */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.4);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.6);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.3);
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.5);
}

/* Smooth transitions for all interactive elements */
.router-link-active {
  position: relative;
}

/* Icon hover effect */
.group:hover svg {
  filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.5));
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
