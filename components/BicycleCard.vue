<template>
    <div class="flex flex-row">
        <img/>
        <p class="font-bold text-2xl">
            {{ label }}
        </p>
    </div>
</template>
<script setup lang="ts">
defineProps({
    label: String,
    price: Number,
    motor: Number,
    battery: Number,
    imageSrc: String,
    wheelSize: Number,
    description: String,
});
</script>