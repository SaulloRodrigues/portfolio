<script setup lang="ts">
import PortfolioLayout from '../templates/PortfolioLayout.vue'
import ProjectsSection from '../organisms/ProjectsSection.vue'
import BaseBadge from '../atoms/BaseBadge.vue'
import BaseButton from '../atoms/BaseButton.vue'

const projects = [
  { id: 1, title: 'Projeto Alpha', description: 'Plataforma de alta performance desenvolvida com Vue 3 e TypeScript.', link: '#' },
  { id: 2, title: 'Projeto Beta', description: 'API Serverless robusta integrada com bancos de dados relacionais.', link: '#' },
  { id: 3, title: 'Projeto Gamma', description: 'Biblioteca open-source para otimização de renderização no frontend.', link: '#' }
]
</script>

<template>
  <PortfolioLayout>
    <template #content>
      <!-- Hero Section -->
      <section id="about" class="space-y-6">
        <BaseBadge>
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Disponível para projetos
        </BaseBadge>
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight leading-none text-white">
          Saullo Rodrigues
        </h1>
        <p class="text-lg md:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl">
          Desenvolvedor Frontend focado em criar interfaces excepcionais, limpas e de alta performance. Especializado em Vue, TypeScript e arquitetura moderna.
        </p>
        <div class="flex gap-4 pt-4">
          <BaseButton variant="primary">
            Ver Projetos
          </BaseButton>
          <BaseButton variant="secondary">
            Entrar em Contato
          </BaseButton>
        </div>
      </section>

      <!-- Projects Organism -->
      <ProjectsSection :projects="projects" />

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
    </template>
  </PortfolioLayout>
</template>
