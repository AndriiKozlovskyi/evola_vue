<template>
     <div class="w-screen sm:h-[calc(100vh-10vh)] h-[calc(100vh-12vh)] flex flex-col bg-cover bg-center rounded-xl opacity-90"
        :style="{ backgroundImage: `url(${image})` }"
    >
        <div class="opacity-90 bg-black inset-0 flex flex-col justify-between z-20 bg-cover w-full h-full">
            <p class="text-white text-center text-3xl font-bold mt-10">
                {{label}}
            </p>
            <p class="text-white text-xl text-center font-semibold">
                {{ desc }}
            </p>
            <div v-if="buttonPresent" class="flex flex-row w-full sm:pl-24 sm:pr-24 items-center justify-center mb-10">
                <NuxtLink :to="link"><MyButton @onClick="" :label="buttonLabel"></MyButton></NuxtLink>
            </div>
            <div v-if="!buttonPresent"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    buttonPresent: {
        default: true,
        type: Boolean,
        required: false
    },
    label: String,
    desc: String,
    buttonLabel: String,
    link: String
})
</script>