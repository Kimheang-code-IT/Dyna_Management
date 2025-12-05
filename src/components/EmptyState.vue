<template>
  <div
    :class="[
      'flex flex-col items-center justify-center py-12 px-4 text-center',
      containerClass
    ]"
  >
    <!-- Icon or Illustration -->
    <div
      v-if="icon || $slots.icon"
      :class="[
        'mb-4',
        iconContainerClass
      ]"
    >
      <slot name="icon">
        <component v-if="icon" :is="icon" :class="['w-16 h-16', iconClass]" />
      </slot>
    </div>

    <!-- Title -->
    <h3
      v-if="title"
      :class="[
        'text-lg font-semibold mb-2',
        titleClass
      ]"
    >
      {{ title }}
    </h3>

    <!-- Description -->
    <p
      v-if="description"
      :class="[
        'text-sm mb-6 max-w-md',
        descriptionClass
      ]"
    >
      {{ description }}
    </p>

    <!-- Action Button -->
    <div v-if="$slots.action || actionLabel">
      <slot name="action">
        <button
          v-if="actionLabel"
          @click="$emit('action')"
          :class="[
            'px-4 py-2 rounded-md font-medium transition-colors',
            actionButtonClass
          ]"
        >
          {{ actionLabel }}
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'No data available'
  },
  description: {
    type: String,
    default: 'There are no items to display at this time.'
  },
  icon: {
    type: [String, Object],
    default: null
  },
  actionLabel: {
    type: String,
    default: null
  },
  containerClass: {
    type: String,
    default: ''
  },
  iconContainerClass: {
    type: String,
    default: 'text-gray-400 dark:text-gray-500'
  },
  iconClass: {
    type: String,
    default: ''
  },
  titleClass: {
    type: String,
    default: 'text-gray-900 dark:text-white'
  },
  descriptionClass: {
    type: String,
    default: 'text-gray-600 dark:text-gray-400'
  },
  actionButtonClass: {
    type: String,
    default: 'bg-blue-600 hover:bg-blue-700 text-white'
  }
})

defineEmits(['action'])
</script>

