<template>
    <div class="p-6 mt-5">
      <!-- Header with Switcher -->
      <div class="flex flex-col sm:flex-row sm:justify-between space-y-5 sm:space-y-0 mb-4">
      <h1 class="text-xl sm:text-2xl font-bold text-left sm:text-left text-black">Доступные батареи</h1>
      <Switcher v-model="isSelected" />
    </div>
  
      <!-- Battery Cards Grid -->
      <div v-if="!isSelected" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:p-6 h-full">
        <BatteryCard 
          class="sm:p-4 mb-2 rounded-lg w-full"
          :battery-capacity="22"
          box="POLLY DP9"
          :price="50"
        />
        <BatteryCard 
          class="sm:p-4 mb-2 rounded-lg w-full"
          :battery-capacity="25"
          box="POLLY DP9"
          :price="60"
        />
        <BatteryCard 
          class="sm:p-4 mb-2 rounded-lg w-full"
          :battery-capacity="30"
          box="POLLY DP7"
          :price="70"
        />
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:p-6 h-full">
        <BatteryCard 
          class="sm:p-4 mb-2 rounded-lg w-full"
          :battery-capacity="22"
          box="POLLY DP9"
          :onSell="true"
          :price="1400"
        />
        <BatteryCard 
          class="sm:p-4 mb-2 rounded-lg w-full"
          :battery-capacity="25"
          box="POLLY DP9"
          :onSell="true"
          :price="1600"
        />
        <BatteryCard 
          class="sm:p-4 mb-2 rounded-lg w-full"
          :battery-capacity="30"
          box="POLLY DP7"
          :onSell="true"
          :price="2000"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';

  import BatteryCard from '~/components/BatteryCard.vue';
  import Switcher from '~/components/Switcher.vue';
  const isSelected = ref(false); // Default: Rent (false)

  </script>
  