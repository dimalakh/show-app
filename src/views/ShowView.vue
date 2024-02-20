<script setup lang="ts">
import { useFetchShowSeasons, useFetchShowDetails } from '@/services'

import { useRoute } from 'vue-router'
import { computed } from 'vue'
import IconChevronLeft from '@/components/icons/IconChevronLeft.vue'
import SeasonItemVue from '@/components/SeasonItem.vue'
import ShowDetails from '@/components/ShowDetails.vue'

const route = useRoute()
const showId = route.params.id as string
const { data: show } = useFetchShowDetails({ id: showId })
const { data: seasons } = useFetchShowSeasons({ id: showId })

const numberOfSeasons = computed(() => seasons?.value?.length || 0)

</script>

<template>
  <div class="pt-6 pb-2">
    <button class="flex items-center text-gray-600 hover:text-gray-800" @click="$router.go(-1)">
      <IconChevronLeft class="mr-2" />Go back
    </button>
  </div>
  
  <ShowDetails v-if="show" :show="show" />

  <div v-if="numberOfSeasons > 1">
    <h4 class="text-2xl font-semibold mb-2">Seasons</h4>
    <ul class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-6 shrink-0">
        <SeasonItemVue v-for="item in seasons" :key="item.id" :season="item" />
    </ul>
  </div>
</template>
