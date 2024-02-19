<script setup lang="ts">
import { useFetch } from '@/utils'
import type { Show } from '@/types'
import ShowCatalog from '@/components/ShowCatalog.vue'
import GenreSelector from '@/components/GenreSelector.vue'
import { ref } from 'vue'

const availableGenres = ['drama', 'comedy', 'sports', 'documentary', 'reality', 'animation']

const selectedGenre = ref(availableGenres[0])
const { data, isLoading } = useFetch<{ show: Show; score: number }[]>(
  () => `https://api.tvmaze.com/search/shows?q=${selectedGenre.value}`
)

function handleGenreChange(genre: string) {
  selectedGenre.value = genre
}
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold my-6">Best shows on the platform</h1>
    <GenreSelector
      :genres="availableGenres"
      :selectedGenre="selectedGenre"
      :onSelectGenre="handleGenreChange"
    />
    <ShowCatalog :shows="data" />
  </main>
</template>
