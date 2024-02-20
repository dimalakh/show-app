<script setup lang="ts">
const { value, options, onSelect } = defineProps<{
  options: string[]
  value: string
  onSelect: (genre: string) => void
}>()
const labeledOptions = options.map((value) => ({ value, label: value }))
const handleChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  onSelect(target.value)
}
</script>

<template>
  <select
    :value="value"
    @change="handleChange"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  >
    <option v-for="option in labeledOptions" :value="option.value" :key="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
