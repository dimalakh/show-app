<script setup lang="ts">
import { type Show } from '@/types';

defineProps<{
  show: Show
}>()
</script>

<template>
  <div class="flex flex-col w-24">
    <h4 class="green">{{ show.name }}</h4>
    <img :src="show.image.medium" alt="show.name" />
    <p>Language: {{ show.language }}</p>
    <p v-html="show.summary"></p>
  </div>
</template>

<style scoped>
</style>