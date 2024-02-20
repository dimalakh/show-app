<script setup lang="ts">
import type { ShowDetails } from '@/types';

defineProps<{
    show: ShowDetails
}>()
</script>
<template>
    <div class="flex flex-col md:flex-row py-8">
    <img v-if="show.image?.medium" :src="show.image?.original" alt="show.name" class="max-w-64" />
    <div v-else class="w-[176px] h-[247px] bg-gray-200 flex items-center justify-center">
      <p class="text-center text-gray-500 dark:text-gray-400">No image</p>
    </div>
    <div class="mt-3 md:mt-0 md:ml-8">
      <h1 class="text-2xl font-bold">{{ show.name }}</h1>
      <p>
        Rating: <b>{{ show.rating?.average }}/10</b>
      </p>
      <p>
        Language: <b>{{ show.language }}</b>
      </p>
      <p>
        Genres: <b>{{ show.genres.join(', ') }}</b>
      </p>
      <p v-html="show.summary"></p>
    </div>
  </div>
</template>