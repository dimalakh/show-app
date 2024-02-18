<script setup lang="ts">
import { useFetch } from '@/utils';
import CatalogItem from '@/components/CatalogItem.vue';
import type { Show } from '@/types';
const { data, error } = useFetch<{ show: Show; score: number; }[]>('https://api.tvmaze.com/search/shows?q=Comedy')
console.log(data)
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CatalogItem v-for="item in data" :key="item.score" :show="item.show" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
