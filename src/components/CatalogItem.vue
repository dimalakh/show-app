<script setup lang="ts">
import { type Show } from '@/types'

const { show } = defineProps<{
  show: Show
}>()

const itmeLink = `/show/${show.id}`
</script>

<template>
  <router-link :to="itmeLink">
    <div class="flex flex-col w-48 p-4 rounded-lg hover:shadow-xl">
      <img v-if="show?.image?.medium" :src="show?.image?.medium" alt="show.name" />
      <div v-else class="w-[176px] h-[247px] bg-gray-200 flex items-center justify-center">
        <p class="text-center text-gray-500 dark:text-gray-400">No image</p>
      </div>
      <h4 class="green">{{ show.name }}</h4>
      <p>Language: {{ show.language }}</p>
    </div>
  </router-link>
</template>
