<script setup lang="ts">
import { useFetchShows } from '@/services'
import ShowCatalog from '@/components/ShowCatalog.vue'
import GenreSelector from '@/components/GenreSelector.vue'
import { ref, watch } from 'vue'

const availableGenres = ['drama', 'comedy', 'sports', 'documentary', 'reality', 'animation']

const selectedGenre = ref(availableGenres[0])
const { data, error, refetch } = useFetchShows({ searchQuery: selectedGenre })

watch(selectedGenre, () => {
  refetch()
});

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

    <div v-if="error" class="text-red-500">An error occurred: {{ error.message }}</div>
  </main>
</template>
