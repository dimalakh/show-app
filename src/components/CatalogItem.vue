<script setup lang="ts">
import { type Show } from '@/types'
import ShowImage from './ShowImage.vue'

const { show } = defineProps<{
  show: Show
}>()

const itmeLink = `/show/${show.id}`
</script>

<template>
  <router-link :to="itmeLink">
    <div class="flex flex-col min-w-48 p-4 rounded-lg hover:shadow-2xl">
      <ShowImage :imageUrls="show?.image?.medium" :alt="show.name" />
      <h4 class="mt-3 text-lg font-semibold">{{ show.name }}</h4>
      <p>Language: {{ show.language }}</p>
    </div>
  </router-link>
</template>
