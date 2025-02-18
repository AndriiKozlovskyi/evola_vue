<template>
    <button @click="onClick()" class="flex flex-row w-[12rem] items-center rounded-lg justify-center py-3 text-lg bg-[#1cb630] hover:bg-[#367069] text-white">
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