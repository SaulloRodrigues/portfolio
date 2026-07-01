<script setup lang="ts">
// Template: PortfolioLayout - Define a estrutura visual de posicionamento do portfolio.
</script>

<template>
  <div class="min-h-screen bg-black text-[#eeeeee] flex flex-col font-sans selection:bg-[#eeeeee] selection:text-black">
    <!-- Área do Conteúdo Principal -->
    <main class="flex-1 max-w-7xl w-full mx-auto px-6 py-16 md:py-24 space-y-24">
      <slot name="content" />
    </main>

    <!-- Rodapé -->
    <footer class="border-t border-[#222222] py-8 text-center text-xs text-neutral-500 font-mono">
      <slot name="footer">
        &copy; 2026 Saullo Rodrigues. Todos os direitos reservados.
      </slot>
    </footer>
  </div>
</template>
