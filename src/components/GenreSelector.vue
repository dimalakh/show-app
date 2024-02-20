<script setup lang="ts">
import { ref, watch } from 'vue'
import MobileGenreSelector from './MobileGenreSelector.vue'
import { useWindowSize } from '@/utils'
const BREAKPOINT = 768
const { selectedGenre } = defineProps<{
  genres: string[]
  selectedGenre: string
  onSelectGenre: (genre: string) => void
}>()
const { windowWidth } = useWindowSize()
const isMobile = ref(windowWidth.value < BREAKPOINT)

watch(windowWidth, (newWidth) => {
  isMobile.value = newWidth < BREAKPOINT
})
</script>

<template>
  <template v-if="!isMobile">
    <ul
      class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
    >
      <li
        v-for="item in genres"
        :key="item"
        @click="onSelectGenre(item)"
        class="me-2 inline-block p-4 rounded-t-lg active cursor-pointer"
        :class="
          item === selectedGenre
            ? 'text-white bg-blue-600 cursor-default'
            : 'bg-gray-100 text-blue-600'
        "
      >
        {{ item }}
      </li>
    </ul>
  </template>
  <template v-else>
    <MobileGenreSelector :options="genres" :value="selectedGenre" :on-select="onSelectGenre" />
  </template>
</template>
