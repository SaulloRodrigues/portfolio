<script setup lang="ts">
import { ref } from 'vue'
import MainLayout from '../templates/MainLayout.vue'
import AppHeader from '../organisms/AppHeader.vue'
import BaseButton from '../atoms/BaseButton.vue'

// Gerenciamento de estado (Smart Component)
const searchQuery = ref('')
const searchResult = ref<string | null>(null)

const handleSearch = () => {
  if (searchQuery.value.trim() === '') {
    searchResult.value = null
    return
  }
  searchResult.value = `Você buscou por: "${searchQuery.value}"`
}

const handleClear = () => {
  searchQuery.value = ''
  searchResult.value = null
}
</script>

<template>
  <MainLayout>
    <template #header>
      <AppHeader
        v-model:search-query="searchQuery"
        @search-submit="handleSearch"
      />
    </template>

    <template #content>
      <div class="max-w-3xl mx-auto space-y-8 py-12 text-center md:text-left">
        <div class="space-y-4">
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-none">
            Bem-vindo ao <span class="text-indigo-600">Vue + Tailwind v4</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-600 max-w-2xl">
            Esta aplicação foi estruturada seguindo rigorosamente a metodologia do
            <strong>Atomic Design</strong>.
          </p>
        </div>

        <div class="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <h2 class="text-2xl font-bold text-gray-800">Demonstração de Estado</h2>
          
          <div v-if="searchResult" class="p-4 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-700 font-medium text-left">
            {{ searchResult }}
          </div>
          <div v-else class="p-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-500 text-left">
            Digite algo no campo de busca do header e clique em "Buscar".
          </div>

          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <BaseButton @click="handleSearch">Simular Busca</BaseButton>
            <BaseButton variant="secondary" @click="handleClear">Limpar</BaseButton>
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>
