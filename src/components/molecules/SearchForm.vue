<script setup lang="ts">
import BaseButton from '../atoms/BaseButton.vue'
import BaseInput from '../atoms/BaseInput.vue'

interface Props {
  modelValue?: string
  placeholder?: string
}

defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'submit'): void
}>()

const onInput = (value: string) => {
  emit('update:modelValue', value)
}

const onSubmit = () => {
  emit('submit')
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex gap-2 w-full max-w-md">
    <BaseInput
      :model-value="modelValue"
      :placeholder="placeholder"
      @update:model-value="onInput"
    />
    <BaseButton type="submit">
      Buscar
    </BaseButton>
  </form>
</template>
