<template>
    <div 
        class="absolute inset-0 bg-cover bg-center opacity-100 z-0"
        :style="{ backgroundImage: `url(${backgroundUrl})` }"
    >
    <div class="absolute inset-0 bg-black opacity-70 rounded-xl"></div>
</div>
</template>

<script lang="ts" setup>
import background from '@/assets/image.png'; // Import the image directly

const backgroundUrl = background;
</script>
