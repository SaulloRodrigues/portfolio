<script setup lang="ts">
import BaseButton from '../atoms/BaseButton.vue'
import SearchForm from '../molecules/SearchForm.vue'

interface Props {
  searchQuery?: string
}

defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:searchQuery', value: string): void
  (e: 'search-submit'): void
}>()
</script>

<template>
  <header class="bg-white border-b border-gray-100 py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-xs">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">V</div>
      <span class="text-xl font-bold text-gray-900 tracking-tight">Vue App</span>
    </div>
    
    <SearchForm
      :model-value="searchQuery"
      placeholder="Pesquisar algo..."
      @update:model-value="emit('update:searchQuery', $event)"
      @submit="emit('search-submit')"
    />

    <nav class="flex items-center gap-4">
      <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Início</a>
      <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Sobre</a>
      <BaseButton variant="secondary">Entrar</BaseButton>
    </nav>
  </header>
</template>
