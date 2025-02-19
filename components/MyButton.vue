<template>
    <button 
        @click="onClick()" 
        class="flex flex-row w-[12rem] items-center rounded-lg justify-center py-3 animated-background text-lg text-white bg-gradient-to-r from-green-500 to-indigo-400 hover:from-green-600 hover:to-indigo-500 ">
        {{ label }}
    </button>
</template>
<script setup lang="ts">
const emit = defineEmits(["onClick"])

defineProps({
    label: String
})

const onClick = () => {
    emit("onClick");
}
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;


.animated-background {
    background-size: 400%;

    -webkit-animation: animation 3s ease infinite;
    -moz-animation: animation 3s ease infinite;
    animation: animation 3s ease infinite;
}

@keyframes animation {
    0%,
    100% {
        background-position: 0% 50%;
    }
    
    50% {
        background-position: 100% 50%;
    }
}
</style>