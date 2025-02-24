<template>
    <button 
        @click="onClick"
        :disabled="disabled"
        class="flex flex-row px-4 items-center rounded-lg justify-center py-3 text-lg text-white transition duration-300
               bg-gradient-to-r from-green-500 to-indigo-400 hover:from-green-600 hover:to-indigo-500
               animated-background disabled:opacity-50 disabled:cursor-not-allowed"
    >
        {{ label }}
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["onClick"]);

const props = defineProps({
    label: String,
    disabled: {
        type: Boolean,
        default: false
    }
});

const onClick = () => {
    if (!props.disabled) {
        emit("onClick");
    }
};
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
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}
</style>
