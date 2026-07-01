<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
})
</script>

<template>
  <button
    :type="type"
    class="px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
    :class="{
      'bg-indigo-600 hover:bg-indigo-700 text-white': variant === 'primary',
      'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300': variant === 'secondary',
    }"
  >
    <slot />
  </button>
</template>
