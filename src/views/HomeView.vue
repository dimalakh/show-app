<script setup lang="ts">
import { useFetch } from '@/utils';
import CatalogItem from '@/components/CatalogItem.vue';
import type { Show } from '@/types';
const { data } = useFetch<{ show: Show; score: number; }[]>('https://api.tvmaze.com/search/shows?q=Comedy')
</script>

<template>
  <main>
    <CatalogItem v-for="item in data" :key="item.score" :show="item.show" />
  </main>
</template>
