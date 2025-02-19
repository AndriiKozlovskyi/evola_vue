<template>
    <div class="p-4 sm:p-6">
      <!-- Header with Switcher -->
      <div class="flex flex-row items-center justify-between mb-4">
        <h1 class="text-xl sm:text-2xl font-bold">Доступные батареи</h1>
        <Switcher />
      </div>
  
      <!-- Battery Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border rounded-lg shadow-inner p-4 sm:p-6">
        <BatteryCard 
          class="border p-4 rounded-lg"
          :battery-capacity="22"
          box="POLLY DP9"
          :price="50"
        />
        <BatteryCard 
          class="border p-4 rounded-lg"
          :battery-capacity="25"
          box="POLLY DP9"
          :price="60"
        />
        <BatteryCard 
          class="border p-4 rounded-lg"
          :battery-capacity="30"
          box="POLLY DP7"
          :price="70"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import BatteryCard from '~/components/BatteryCard.vue';
  import Switcher from '~/components/Switcher.vue';
  </script>
  