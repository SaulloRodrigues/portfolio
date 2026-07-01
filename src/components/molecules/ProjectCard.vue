<script setup lang="ts">
import BaseCard from '../atoms/BaseCard.vue'

interface Props {
  title: string
  description: string
  link?: string
}

defineProps<Props>()
</script>

<template>
  <BaseCard>
    <div class="space-y-2">
      <h3 class="font-mono text-base font-bold text-white group-hover:text-[#eeeeee] transition-colors">
        {{ title }}
      </h3>
      <p class="text-sm text-neutral-400 leading-snug">
        {{ description }}
      </p>
    </div>
    <div class="flex items-center gap-1.5 text-xs font-mono text-neutral-500 group-hover:text-[#eeeeee] transition-colors">
      Acessar repositório
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
  </BaseCard>
</template>
