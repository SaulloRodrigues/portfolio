<script setup lang="ts">
// Atom: BaseCard - Container generico para cards.
</script>

<template>
  <div class="group p-6 rounded-lg border border-[#222222] bg-neutral-950 hover:border-[#eeeeee] hover:bg-neutral-900/55 transition-all duration-300 flex flex-col justify-between h-48 cursor-pointer">
    <slot />
  </div>
</template>
