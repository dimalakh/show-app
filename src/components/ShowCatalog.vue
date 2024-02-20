<script setup lang="ts">
import { type ShowResponse } from '@/types'
import CatalogItem from './CatalogItem.vue'

defineProps<{
  shows: ShowResponse[] | null
}>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 py-4">
    <CatalogItem v-for="item in shows" :key="item.show.id" :show="item.show"></CatalogItem>
  </div>
</template>
