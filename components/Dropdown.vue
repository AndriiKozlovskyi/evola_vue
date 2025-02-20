<template>
    <div class="relative inline-block w-full">
      <label class="block font-semibold mb-1">{{ label }}</label>
      <div class="border border-gray-300 rounded-md px-4 py-2 cursor-pointer bg-white" @click="toggleDropdown">
        {{ selectedOption || "Выберите..." }}
      </div>
      <ul v-if="isOpen" class="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md max-h-40 overflow-auto">
        <li 
          v-for="(option, index) in options" 
          :key="index" 
          @click="selectOption(option)" 
          class="px-4 py-2 hover:bg-gray-200 cursor-pointer"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const props = defineProps({
    label: String,
    options: Array,
    modelValue: String
  });
  const emit = defineEmits(["update:modelValue"]);
  
  const isOpen = ref(false);
  const selectedOption = ref(props.modelValue);
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const selectOption = (option) => {
    selectedOption.value = option.name;
    emit("update:modelValue", option);
    isOpen.value = false;
  };
  </script>
  
  <style scoped>
  ul::-webkit-scrollbar {
    width: 5px;
  }
  ul::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }
  </style>