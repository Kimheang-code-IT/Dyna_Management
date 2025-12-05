<template>
  <div :class="['bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden', containerClass]">
    <!-- Loading State -->
    <div v-if="loading" class="p-4">
      <LoadingSkeleton
        v-for="i in loadingRows"
        :key="i"
        type="table-row"
        :columns="columns.length"
      />
    </div>

    <!-- Empty State -->
    <EmptyState
      v-else-if="!loading && (!data || data.length === 0)"
      :title="emptyTitle"
      :description="emptyDescription"
      :action-label="emptyActionLabel"
      @action="$emit('empty-action')"
    >
      <template #icon>
        <slot name="empty-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16 text-gray-400 dark:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </slot>
      </template>
    </EmptyState>

    <!-- Table -->
    <div v-else class="overflow-x-auto -mx-4 sm:mx-0">
      <table :class="['w-full min-w-full', tableClass]">
        <!-- Table Header -->
        <thead :class="['bg-gray-50 dark:bg-gray-900 sticky top-0 z-10', headerClass]">
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              :class="[
                'px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium uppercase tracking-wider',
                'text-gray-700 dark:text-gray-300 whitespace-nowrap',
                column.headerClass || '',
                headerCellClass
              ]"
              :style="column.headerStyle"
            >
              <div class="flex items-center gap-2">
                <span>{{ column.label }}</span>
                <button
                  v-if="column.sortable"
                  @click="handleSort(column.key)"
                  :class="[
                    'p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors',
                    sortKey === column.key ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'
                  ]"
                  aria-label="Sort by {{ column.label }}"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="getSortIcon(column.key)"
                    />
                  </svg>
                </button>
              </div>
            </th>
          </tr>
        </thead>

        <!-- Table Body -->
        <tbody :class="['bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700', bodyClass]">
          <tr
            v-for="(row, rowIndex) in paginatedData"
            :key="getRowKey(row, rowIndex)"
            :class="[
              'hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors',
              rowClass,
              getRowClass(row, rowIndex)
            ]"
          >
            <td
              v-for="column in columns"
              :key="column.key"
              :class="[
                'px-2 sm:px-3 lg:px-4 py-2 sm:py-3 whitespace-nowrap text-xs sm:text-sm',
                'text-gray-900 dark:text-white',
                column.cellClass || '',
                cellClass
              ]"
              :style="column.cellStyle"
            >
              <slot
                :name="`cell-${column.key}`"
                :row="row"
                :column="column"
                :value="getCellValue(row, column)"
                :index="rowIndex"
              >
                {{ formatCellValue(getCellValue(row, column), column) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div
      v-if="pagination && totalPages > 1"
      :class="['px-2 sm:px-4 py-2 sm:py-3 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-2', paginationClass]"
    >
      <div class="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ totalItems }} results
      </div>
      <div class="flex items-center gap-1 sm:gap-2">
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          :class="[
            'px-2 sm:px-3 py-1.5 sm:py-1 rounded-md text-xs sm:text-sm font-medium transition-colors min-h-[44px] min-w-[44px]',
            currentPage === 1
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          ]"
        >
          Previous
        </button>
        <span class="text-xs sm:text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          :class="[
            'px-2 sm:px-3 py-1.5 sm:py-1 rounded-md text-xs sm:text-sm font-medium transition-colors min-h-[44px] min-w-[44px]',
            currentPage === totalPages
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          ]"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import LoadingSkeleton from './LoadingSkeleton.vue'
import EmptyState from './EmptyState.vue'

const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingRows: {
    type: Number,
    default: 5
  },
  pagination: {
    type: Boolean,
    default: false
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  sortable: {
    type: Boolean,
    default: true
  },
  rowKey: {
    type: [String, Function],
    default: 'id'
  },
  emptyTitle: {
    type: String,
    default: 'No data available'
  },
  emptyDescription: {
    type: String,
    default: 'There are no items to display at this time.'
  },
  emptyActionLabel: {
    type: String,
    default: null
  },
  containerClass: {
    type: String,
    default: ''
  },
  tableClass: {
    type: String,
    default: ''
  },
  headerClass: {
    type: String,
    default: ''
  },
  headerCellClass: {
    type: String,
    default: ''
  },
  bodyClass: {
    type: String,
    default: ''
  },
  rowClass: {
    type: String,
    default: ''
  },
  cellClass: {
    type: String,
    default: ''
  },
  paginationClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['sort', 'page-change', 'empty-action'])

const sortKey = ref(null)
const sortOrder = ref('asc')
const currentPage = ref(1)

const sortedData = computed(() => {
  if (!props.sortable || !sortKey.value) {
    return props.data
  }

  const sorted = [...props.data].sort((a, b) => {
    const aValue = getCellValue(a, { key: sortKey.value })
    const bValue = getCellValue(b, { key: sortKey.value })

    if (aValue === null || aValue === undefined) return 1
    if (bValue === null || bValue === undefined) return -1

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortOrder.value === 'asc' ? aValue - bValue : bValue - aValue
    }

    const aStr = String(aValue).toLowerCase()
    const bStr = String(bValue).toLowerCase()

    if (sortOrder.value === 'asc') {
      return aStr.localeCompare(bStr)
    } else {
      return bStr.localeCompare(aStr)
    }
  })

  return sorted
})

const totalItems = computed(() => props.data.length)
const totalPages = computed(() => Math.ceil(totalItems.value / props.itemsPerPage))

const startIndex = computed(() => (currentPage.value - 1) * props.itemsPerPage)
const endIndex = computed(() => Math.min(startIndex.value + props.itemsPerPage, totalItems.value))

const paginatedData = computed(() => {
  if (!props.pagination) {
    return sortedData.value
  }
  return sortedData.value.slice(startIndex.value, endIndex.value)
})

const getRowKey = (row, index) => {
  if (typeof props.rowKey === 'function') {
    return props.rowKey(row, index)
  }
  return row[props.rowKey] || index
}

const getCellValue = (row, column) => {
  if (typeof column.key === 'function') {
    return column.key(row)
  }
  const keys = column.key.split('.')
  let value = row
  for (const key of keys) {
    value = value?.[key]
  }
  return value
}

const formatCellValue = (value, column) => {
  if (value === null || value === undefined) {
    return '—'
  }
  if (column.formatter && typeof column.formatter === 'function') {
    return column.formatter(value, column)
  }
  return value
}

const getRowClass = (row, index) => {
  if (props.rowClass && typeof props.rowClass === 'function') {
    return props.rowClass(row, index)
  }
  return ''
}

const getSortIcon = (key) => {
  if (sortKey.value !== key) {
    return 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4'
  }
  return sortOrder.value === 'asc'
    ? 'M5 15l7-7 7 7'
    : 'M19 9l-7 7-7-7'
}

const handleSort = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
  emit('sort', { key, order: sortOrder.value })
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    emit('page-change', page)
  }
}
</script>

