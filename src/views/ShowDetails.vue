<script setup lang="ts">
import { useFetch } from '@/utils'

import { useRoute } from 'vue-router'
import type { ShowDetails } from '@/types/ShowDetails'
import { computed } from 'vue'

const route = useRoute()
const showId = route.params.id as string
const { data } = useFetch<ShowDetails>(`https://api.tvmaze.com/shows/${showId}`)
const { data: seasons } = useFetch<
  {
    id: number
    image: {
      medium: string
    }
    name: string
    number: number
    url: string
    episodeOrder: number
  }[]
>(`https://api.tvmaze.com/shows/${showId}/seasons`)

const numberOfSeasons = computed(() => seasons?.value?.length || 0)
</script>

<template>
  <div>
    <a @click="$router.go(-1)">back</a>
  </div>
  <div class="flex flex-row py-8">
    <img v-if="data?.image?.medium" :src="data?.image?.original" alt="show.name" class="max-w-64" />
    <div v-else class="w-[176px] h-[247px] bg-gray-200 flex items-center justify-center">
      <p class="text-center text-gray-500 dark:text-gray-400">No image</p>
    </div>
    <div class="ml-8">
      <h1 class="text-2xl font-bold">{{ data?.name }}</h1>
      <p>Rating: {{ data?.rating?.average }}/10</p>
      <p>Language: {{ data?.language }}</p>
      <p>Genres: {{ data?.genres.join(', ') }}</p>
      <p v-html="data?.summary"></p>
    </div>
  </div>
  <div v-if="numberOfSeasons > 1">
    <h4 class="text-2xl font-semibold mb-2">Seasons</h4>
    <ul class="flex flex-row">
      <li v-for="item in seasons" :key="item.id" class="mr-2 max-w-56">
        <img v-if="item?.image?.medium" :src="item?.image?.medium" />
        <div v-else class="w-100 h-64 bg-gray-200"></div>
        <p>{{ item.name || `Season ${item.number}` }}</p>
        <p>number of episodes: {{ item.episodeOrder }}</p>
      </li>
    </ul>
  </div>
</template>
