<script setup lang="ts">
import { type Show } from '@/types'

defineProps<{
  show: Show
}>()
</script>

<template>
  <div class="flex flex-col w-48 p-2">
    <img :src="show?.image?.medium" alt="show.name" />
    <h4 class="green">{{ show.name }}</h4>
    <p>Language: {{ show.language }}</p>
    <!-- <p v-html="show.summary"></p> -->
  </div>
</template>
