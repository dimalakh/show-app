<script setup lang="ts">
import { type ShowResponse } from '@/types'
import CatalogItem from './CatalogItem.vue'

defineProps<{
  shows: ShowResponse[] | null
}>()
</script>

<template>
  <div class="grid grid-cols-6 gap-1 py-4">
    <CatalogItem v-for="item in shows" :key="item.show.id" :show="item.show" />
  </div>
</template>
