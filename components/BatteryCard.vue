<template>
    <div class="relative w-[25rem] h-[25rem] flex flex-col bg-cover bg-center rounded-xl hover:scale-[1.01]" 
        :style="{ backgroundImage: `url(${pollydp9})` }"
        @mouseenter="handleMouseEnter" 
        @mouseleave="handleMouseLeave"
    >
        <!-- Black overlay with 50% opacity -->
        <div 
            class="absolute inset-0 bg-black opacity-70 rounded-xl transition-opacity duration-300"
            :style="{ opacity: overlayOpacity }"
        ></div>

        <!-- Content inside (if needed) -->
        <div class="text-gray-200 p-4 text-xl z-10 space-y-3" v-if="!hovered">
            <div class="flex flex-row justify-between items-start">
                <p class="text-xl mb-10"><strong>{{ batteryCapacity }}A</strong></p>
                <p class="text-xl"><strong>{{ price }} зл/неделю</strong></p>
            </div>
            <hr/>
            <div>
                <p class="text-xl">{{ box }} корпус</p>
                <p class="text-xl">Зарядка в комплекте(4A)</p>
            </div>
        </div>
        <div v-show="hovered" class="cursor-pointer z-10 flex flex-col text-white items-start bottom-0 justify-center">
            <div class="flex flex-col items-center justify-center hover:scale-110 duration-300" @click="handleClick()">
                <img src="../assets/telegram.png" class="w-[4rem] h-[4rem]"/>
                <p class="font-bold">@evola_manager</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    batteryCapacity: Number,
    price: Number,
    box: String,
})

import pollydp9 from '../assets/pollydp9.jpg';

const hovered = ref(false);

const overlayOpacity = ref(0.7);
const textOpacity = ref(1);

const handleMouseEnter = () => {
    hovered.value = true;
        overlayOpacity.value = 0;  // Set opacity to 0 on mouse enter
}

const handleMouseLeave = () => {
    hovered.value = false;
    overlayOpacity.value = 0.7;  // Reset opacity to original on mouse leave
}

const handleClick = () => {
  const telegramUsername = '@evola_manager';
  
  // Copy text to clipboard
  navigator.clipboard.writeText(telegramUsername)
    .then(() => {
      console.log('Text successfully copied to clipboard!');
      // Optionally show a confirmation message to the user
    })
    .catch(err => {
      console.error('Error copying text: ', err);
    });

  // Redirect to the Telegram profile
  window.location.href = `https://t.me/evola_manager`;
}
</script>
