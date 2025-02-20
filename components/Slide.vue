<template>
     <div class="w-screen sm:h-[45rem] h-[calc(100vh-15vh)] flex flex-col bg-cover bg-center rounded-xl opacity-90"
        :style="{ backgroundImage: `url(${image})` }"
    >
        <div class="opacity-90 bg-black inset-0 flex flex-col justify-between z-20 bg-cover w-full h-full">
            <p class="text-white text-center text-3xl font-bold mt-10">
                {{label}}
            </p>
            <p class="text-white text-xl text-center font-semibold">
                {{ desc }}
            </p>
            <div class="flex flex-row w-full sm:pl-24 sm:pr-24 items-center justify-center mb-10">
                <NuxtLink to="/bicycles"><MyButton @onClick="" label="Арендовать"></MyButton></NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    image: {
        type: String,
        required: true
    },
    label: String,
    desc: String
})
</script>