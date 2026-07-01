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
    class="px-5 py-2.5 text-sm font-medium rounded-md hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
    :class="{
      'bg-[#eeeeee] text-black hover:bg-white': variant === 'primary',
      'border border-[#333333] hover:border-[#eeeeee] hover:bg-neutral-900 text-[#eeeeee]': variant === 'secondary',
    }"
  >
    <slot />
  </button>
</template>
