<script setup lang="ts">
// MainLayout define apenas o posicionamento e estrutura visual.
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col font-sans antialiased text-gray-900">
    <!-- Slot para o Organismo Header -->
    <slot name="header" />

    <!-- Área de Conteúdo Principal -->
    <main class="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8">
      <slot name="content" />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-100 py-6 px-6 text-center text-sm text-gray-500">
      <slot name="footer">
        &copy; 2026 Vue App. Todos os direitos reservados.
      </slot>
    </footer>
  </div>
</template>
