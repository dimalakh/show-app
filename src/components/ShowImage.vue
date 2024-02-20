<script setup lang="ts">
defineProps<{
  imageUrls: string | undefined
  alt: string
}>()
</script>
<template>
  <div class="flex max-w-48 border-solid">
    <img v-if="imageUrls" :src="imageUrls" :alt="alt" />
    <div v-else class="flex items-center justify-center aspect-[62/87] w-full bg-gray-200">
      <p class="text-center text-gray-500 dark:text-gray-400">No image</p>
    </div>
  </div>
</template>
