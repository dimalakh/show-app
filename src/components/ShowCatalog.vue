<script setup lang="ts">
import { type ShowResponse } from '@/types'
import CatalogItem from './CatalogItem.vue'

defineProps<{
  shows: ShowResponse[] | null
}>()
</script>

<template>
  <div class="flex flex-row flex-wrap">
    <CatalogItem v-for="item in shows" :key="item.score" :show="item.show" />
  </div>
</template>
