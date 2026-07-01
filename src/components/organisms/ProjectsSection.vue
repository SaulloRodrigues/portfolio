<script setup lang="ts">
import ProjectCard from '../molecules/ProjectCard.vue'

interface Project {
  id: string | number
  title: string
  description: string
  link?: string
}

interface Props {
  projects: Project[]
}

defineProps<Props>()
</script>

<template>
  <section id="projects" class="space-y-8">
    <div class="space-y-2">
      <h2 class="text-2xl font-bold tracking-tight text-white">Projetos em Destaque</h2>
      <p class="text-sm text-neutral-400">Trabalhos selecionados que demonstram minhas habilidades técnicas.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :link="project.link"
      />
    </div>
  </section>
</template>
