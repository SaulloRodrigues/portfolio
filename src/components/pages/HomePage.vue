<script setup lang="ts">
// Minimalist SPA Portfolio - Tonalidades #000000 e #EEEEEE - Fontes Geist
const projects = [
  { id: 1, title: 'Projeto Alpha', description: 'Plataforma de alta performance desenvolvida com Vue 3 e TypeScript.', link: '#' },
  { id: 2, title: 'Projeto Beta', description: 'API Serverless robusta integrada com bancos de dados relacionais.', link: '#' },
  { id: 3, title: 'Projeto Gamma', description: 'Biblioteca open-source para otimização de renderização no frontend.', link: '#' }
]
</script>

<template>
  <div class="min-h-screen bg-black text-[#eeeeee] flex flex-col font-sans selection:bg-[#eeeeee] selection:text-black">
    <!-- Header -->
    <header class="border-b border-[#222222] py-6 px-6 md:px-12 flex justify-between items-center sticky top-0 bg-black/80 backdrop-blur-md z-50">
      <div class="flex items-center gap-3">
        <span class="font-mono text-lg font-bold tracking-tighter text-[#eeeeee] hover:opacity-80 transition-opacity cursor-pointer">
          SR.DEV
        </span>
      </div>
      <nav class="flex items-center gap-6 text-sm font-medium">
        <a href="#about" class="text-neutral-400 hover:text-[#eeeeee] transition-colors">Sobre</a>
        <a href="#projects" class="text-neutral-400 hover:text-[#eeeeee] transition-colors">Projetos</a>
        <a href="#contact" class="text-neutral-400 hover:text-[#eeeeee] transition-colors">Contato</a>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex-1 max-w-4xl w-full mx-auto px-6 py-16 md:py-24 space-y-24">
      
      <!-- Hero Section -->
      <section id="about" class="space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222222] bg-neutral-900/50 text-xs font-mono text-neutral-400">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Disponível para projetos
        </div>
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-none text-white">
          Saullo Rodrigues
        </h1>
        <p class="text-lg md:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl">
          Desenvolvedor Frontend focado em criar interfaces excepcionais, limpas e de alta performance. Especializado em Vue, TypeScript e arquitetura moderna.
        </p>
        <div class="flex gap-4 pt-4">
          <a
            href="#projects"
            class="px-5 py-2.5 bg-[#eeeeee] text-black text-sm font-medium rounded-md hover:bg-white hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            class="px-5 py-2.5 border border-[#333333] hover:border-[#eeeeee] hover:bg-neutral-900 text-sm font-medium rounded-md hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            Entrar em Contato
          </a>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-bold tracking-tight text-white">Projetos em Destaque</h2>
          <p class="text-sm text-neutral-400">Trabalhos selecionados que demonstram minhas habilidades técnicas.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="project in projects"
            :key="project.id"
            class="group p-6 rounded-lg border border-[#222222] bg-neutral-950 hover:border-[#eeeeee] hover:bg-neutral-900/55 transition-all duration-300 flex flex-col justify-between h-48 cursor-pointer"
          >
            <div class="space-y-2">
              <h3 class="font-mono text-base font-bold text-white group-hover:text-[#eeeeee] transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-sm text-neutral-400 leading-snug">
                {{ project.description }}
              </p>
            </div>
            <div class="flex items-center gap-1.5 text-xs font-mono text-neutral-500 group-hover:text-[#eeeeee] transition-colors">
              Acessar repositório
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="space-y-8 pb-12">
        <div class="space-y-2">
          <h2 class="text-2xl font-bold tracking-tight text-white">Vamos conversar</h2>
          <p class="text-sm text-neutral-400">Tem alguma oportunidade ou quer apenas bater um papo sobre tecnologia?</p>
        </div>
        <div class="p-6 rounded-lg border border-[#222222] bg-neutral-950 max-w-lg space-y-4">
          <p class="text-sm text-neutral-400">
            Você pode entrar em contato através do email:
          </p>
          <a
            href="mailto:contato@saullo.dev"
            class="block font-mono text-lg text-white hover:text-neutral-300 underline underline-offset-4 decoration-neutral-600 transition-colors"
          >
            contato@saullo.dev
          </a>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-[#222222] py-8 text-center text-xs text-neutral-500 font-mono">
      &copy; 2026 Saullo Rodrigues. Todos os direitos reservados.
    </footer>
  </div>
</template>
