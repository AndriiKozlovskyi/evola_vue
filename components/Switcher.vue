<template>
    <div class="flex justify-center items-center">
      <!-- Toggle Switch Container -->
      <div class="relative z-100 flex border-2 flex-row items-center rounded-full cursor-pointer w-[20rem]">
        <!-- Rent Option -->
        <div
            class="absolute w-1/2 h-7 z-20 top-0 transition-transform rounded-full bg-gradient-to-r from-green-500 to-indigo-400"
            :style="{
                transform: isSelected ? 'translateX(100%)' : 'translateX(0)',
                transition: 'transform 0.3s ease, border-radius 0.3s ease, background 0.3s ease'
            }"
        ></div>
        <div 
      class="left-0 w-1/2 flex justify-center items-center bg-white h-full text-lg rounded-l-xl text-black cursor-pointer"
      @click="handleSelection(false)"
    >
      <p 
        class="z-30 transition-all duration-600" 
        :class="{
          'text-white font-bold': !isSelected,
          'text-gray-700 font-medium': isSelected
        }"
      >
        Арендовать
      </p>
    </div>

    <!-- Buy Option -->
    <div 
      class="right-0 w-1/2 flex justify-center bg-white items-center h-full text-lg rounded-r-xl text-black cursor-pointer"
      @click="handleSelection(true)"
    >
      <p 
        class="z-30 transition-all duration-600" 
        :class="{
          'text-white font-bold': isSelected,
          'text-gray-700 font-medium': !isSelected
        }"
      >
        Купить
      </p>
    </div>
  
        <!-- Circle Slider (the moving circle that slides from Rent to Buy) -->
   
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const isSelected = ref(false); // Default is Rent (false)
  
  const handleSelection = (selected: boolean) => {
    isSelected.value = selected;
    // Redirect to the appropriate page based on selection
    if (isSelected.value) {
    //   router.push('/buy'); // Redirect to Buy page
    } else {
    //   router.push('/rent'); // Redirect to Rent page
    }
  };
  </script>
  
  <style scoped>
  /* Styling for the toggle switch */
  div {
    transition: transform 0.5s;
  }
  
  </style>
  