<script setup lang="ts">
import { useFetch } from '@/utils'

import { useRoute } from 'vue-router'
import type { ShowDetails } from '@/types/ShowDetails'
import { computed } from 'vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import ShowImage from '@/components/ShowImage.vue'

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
  <div class="pt-6 pb-2">
    <button class="flex items-center text-gray-600 hover:text-gray-800" @click="$router.go(-1)">
      <IconChevronLeft class="mr-2" />Go back
    </button>
  </div>
  <div class="flex flex-col md:flex-row py-8">
    <img v-if="data?.image?.medium" :src="data?.image?.original" alt="show.name" class="max-w-64" />
    <div v-else class="w-[176px] h-[247px] bg-gray-200 flex items-center justify-center">
      <p class="text-center text-gray-500 dark:text-gray-400">No image</p>
    </div>
    <div class="mt-3 md:mt-0 md:ml-8">
      <h1 class="text-2xl font-bold">{{ data?.name }}</h1>
      <p>
        Rating: <b>{{ data?.rating?.average }}/10</b>
      </p>
      <p>
        Language: <b>{{ data?.language }}</b>
      </p>
      <p>
        Genres: <b>{{ data?.genres.join(', ') }}</b>
      </p>
      <p v-html="data?.summary"></p>
    </div>
  </div>
  <div v-if="numberOfSeasons > 1">
    <h4 class="text-2xl font-semibold mb-2">Seasons</h4>
    <ul class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-6 shrink-0">
      <li v-for="item in seasons" :key="item.id" class="w-36 shrink-0">
        <ShowImage :imageUrls="item?.image?.medium" :alt="item.name" />
        <p class="font-semibold mt-3">{{ item.name || `Season ${item.number}` }}</p>
        <p v-if="item.episodeOrder">number of episodes: {{ item.episodeOrder }}</p>
      </li>
    </ul>
  </div>
</template>
