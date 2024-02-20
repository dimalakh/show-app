<script setup lang="ts">
import type { Season } from '@/types';
import ShowImage from './ShowImage.vue';

defineProps<{
    season: Season;
}>()
</script>
<template>
    <li class="w-36 shrink-0">
        <ShowImage :imageUrls="season?.image?.medium" :alt="season.name" />
        <p class="font-semibold mt-3">{{ season.name || `Season ${season.number}` }}</p>
        <p v-if="season.episodeOrder">number of episodes: {{ season.episodeOrder }}</p>
      </li>
</template>