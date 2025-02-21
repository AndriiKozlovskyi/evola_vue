<template>
    <div class="relative w-[25rem] h-[25rem] flex flex-col bg-cover bg-center rounded-xl hover:scale-[1.01]" 
        :style="{ backgroundImage: `url(${imageUrl})` }"
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
                <p class="text-xl mb-10"><strong>{{ model?.toLocaleUpperCase() }}</strong></p>
                <p class="text-xl"><strong>{{ price }} <p v-if="!onSell">зл/неделю</p></strong></p>
            </div>
            <hr/>
            <div class="flex flex-row space-x-3 items-center">
                <img src="../assets/battery.png" class="w-[3rem] h-[3rem]"/>
                <p><strong>{{ batteryCapacity }}A</strong></p>
            </div>
            <div class="flex flex-row space-x-3 items-center">
                <img src="../assets/motor2.png" class="w-[3rem] h-[3rem]"/>
                <p><strong>{{ motor }}</strong></p>
            </div>
            <div class="flex flex-row space-x-3 items-center">
                <img src="../assets/wheel1.png" class="w-[3rem] h-[3rem]"/>
                <p><strong>{{ wheelSize }}"</strong></p>
            </div>
        </div>
        <div v-show="hovered" class="cursor-pointer z-10 flex flex-col text-white items-end bottom-0 justify-center">
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
    imageUrl: {
        type: String,
        required: true
    },
    model: String,
    motor: String,
    batteryCapacity: Number,
    wheelSize: Number,
    onSell: Boolean,
    price: Number,
})

onMounted(() => {
    console.log(props.onSell)
})

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
