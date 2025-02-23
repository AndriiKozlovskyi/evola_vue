<template>
    <button 
      @click="toggleTheme"
      class="p-2 rounded-full border border-gray-300 dark:border-gray-600 transition-all"
    >
      <svg v-if="isDark" class="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path 
          d="M10 15.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM10 2a1 1 0 110-2 1 1 0 010 2zM10 20a1 1 0 110-2 1 1 0 010 2zM2 10a1 1 0 110-2 1 1 0 010 2zM18 10a1 1 0 110-2 1 1 0 010 2zM4.22 4.22a1 1 0 111.42-1.42 1 1 0 01-1.42 1.42zM15.78 15.78a1 1 0 111.42-1.42 1 1 0 01-1.42 1.42zM4.22 15.78a1 1 0 111.42 1.42 1 1 0 01-1.42-1.42zM15.78 4.22a1 1 0 111.42-1.42 1 1 0 01-1.42 1.42z"
        />
      </svg>
      <svg v-else class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path 
          fill-rule="evenodd" 
          d="M10 3.5a7 7 0 015.86 10.93c-.43.74-1.37 1.02-2.13.75a5.5 5.5 0 11-6.98-6.98c-.27-.76.01-1.7.75-2.13A7 7 0 0110 3.5z" 
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </template>
  
  <script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    if (process.client) {
        document.documentElement.classList.toggle("dark", isDark.value);
        localStorage.setItem("theme", isDark.value ? "dark" : "light");
    }
};

onMounted(() => {
    if (process.client) {
        const savedTheme = localStorage.getItem("theme");
        isDark.value = savedTheme === "dark";
        if (isDark.value) {
            document.documentElement.classList.add("dark");
        }
    }
});

  </script>
  