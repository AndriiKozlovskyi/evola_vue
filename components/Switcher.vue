<template>
    <div class="relative flex border-2 flex-row items-center rounded-full cursor-pointer w-[20rem]">
      <div 
        class="absolute w-1/2 h-7 sm:h-8 z-20 top-0 transition-transform rounded-full bg-gradient-to-r from-[#5b5bc5] to-indigo-400"
        :style="{ transform: modelValue ? 'translateX(100%)' : 'translateX(0)' }"
      ></div>
  
      <div class="left-0 w-1/2 flex justify-center items-center bg-white h-full text-lg rounded-l-xl cursor-pointer"
        @click="$emit('update:modelValue', false)">
        <p 
            class="z-30 transition-all duration-600" 
            :class="{ 'text-white font-medium z-30': !modelValue, 'text-gray-700': modelValue }">Арендовать</p>
      </div>
  
      <div class="right-0 w-1/2 flex justify-center bg-white items-center h-full text-lg rounded-r-xl cursor-pointer"
        @click="$emit('update:modelValue', true)">
        <p
         class="z-30 transition-all duration-600" 
         :class="{ 'text-white font-medium': modelValue, 'text-gray-700': !modelValue }">Купить</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    modelValue: Boolean
  });
  defineEmits(['update:modelValue']);
  </script>