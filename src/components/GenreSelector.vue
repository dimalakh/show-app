<script setup lang="ts">
const { selectedGenre } = defineProps<{
  genres: string[]
  selectedGenre: string
  onSelectGenre: (genre: string) => void
}>()
</script>
<template>
  <ul
    class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
  >
    <li
      v-for="item in genres"
      :key="item"
      @click="onSelectGenre(item)"
      class="me-2 inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 cursor-pointer"
      :class="
        item === selectedGenre
          ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white cursor-default'
          : ''
      "
    >
      {{ item }}
    </li>
  </ul>
</template>
