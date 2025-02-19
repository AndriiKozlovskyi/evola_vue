<template>
    <div class="flex flex-col items-center rounded-2xl bg-white w-[65rem] h-3/4 z-10 opacity-100">
        <p class="text-gradient-to-r from-green-500 text-gray-800 to-indigo-400 hover:from-indigo-400 hover:to-green-500 transition-colors duration-300 text-[36px] mt-10">Арендуй велосипед - первый день бесплатно!</p>
        <div 
            class="w-[30rem] h-[24rem] flex bg-cover bg-center"
            :style="{ backgroundImage: `url(${backgroundUrl})` }"
        ></div>
        <div class="flex flex-row justify-between w-full pl-10 pr-10 mb-5">
            <span class="flex flex-col items-center">
                <img class="w-16 h-16" src="../assets/fix.png"/>
                <p>Бесплатный сервис</p>
            </span>
            <span class="flex flex-col items-center">
                <img class="w-16 h-16" src="../assets/seat.png"/>
                <p>100% комфорт</p>
            </span>
            <span class="flex flex-col items-center">
                <img class="w-16 h-16" src="../assets/battery.png"/>
                <p></p>
            </span>

        </div>
        <div class="flex flex-row w-full pl-24 pr-24 mb-5 items-center justify-center">
            <NuxtLink to="/bicycles"><MyButton @onClick="" label="Арендовать"></MyButton></NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
import background from '@/assets/rower.png'; // Import the image directly
const backgroundUrl = background;

</script>