<template>
  <div v-editable="blok" class="px-4">
    <img
      :src="blok.image"
      :alt="blok.image.alt"
      class="mx-auto w-full md:w-3/4 object-cover"
    />
    <div class="container mx-auto max-w-screen-md mb-12">
      <h1 class="text-4xl md:text-6xl text-gray-800 font-bold mt-8 md:mt-12 mb-4">
        {{ blok.title }}
      </h1>
      <h2 class="text-xl md:text-2xl text-gray-500 font-bold mb-4">
        {{ blok.description }}
      </h2>
      <div class="text-gray-600 mb-3">Автор: <b>{{ blok.author }}</b></div>
      <div v-html="blok.content" class="prose prose-sm md:prose-lg mt-8"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>
