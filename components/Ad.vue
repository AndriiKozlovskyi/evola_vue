<template>
    <div class="flex flex-col items-center rounded-2xl bg-white w-[65rem] h-3/4 z-10 opacity-100">
        <p class="text-[#158B7D] text-[36px] mt-10">Subscribe, rent a bike, and own a e-bike after 6 month!</p>
        <div 
            class="w-[30rem] h-[24rem] flex bg-cover bg-center"
            :style="{ backgroundImage: `url(${backgroundUrl})` }"
        ></div>
        <div class="flex flex-row justify-between w-full pl-10 pr-10 mb-5">
            <span class="flex flex-col items-center">
                <img class="w-16 h-16" src="../assets/fix.png"/>
                <p>Free Service</p>
            </span>
            <span class="flex flex-col items-center">
                <img class="w-16 h-16" src="../assets/seat.png"/>
                <p>100% comfort</p>
            </span>
            <span class="flex flex-col items-center">
                <img class="w-16 h-16" src="../assets/battery.png"/>
                <p>8h ride time</p>
            </span>

        </div>
        <div class="flex flex-row w-full pl-24 pr-24 mb-5 justify-between items-center">
            <MyButton @onClick="" label="Rent"></MyButton>
            <MyButton @onClick="" label="Subscribe"></MyButton>
        </div>
    </div>
</template>
<script setup lang="ts">
import background from '@/assets/rower.png'; // Import the image directly
const backgroundUrl = background;

</script>