<template>
  <div class="p-4 sm:p-6">
    <!-- Header & Switcher -->
    <div class="flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0 mb-4">
      <h1 class="text-xl sm:text-2xl font-bold text-center sm:text-left">Доступные велосипеды</h1>
      <Switcher v-model="isSelected" />
    </div>

    <!-- Information -->
    <!-- <div class="text-sm sm:text-base">
      <p>- Первый день аренды бесплатно</p>
      <p>- Сервис бесплатный (если вы не пробиваете колесо каждый день, не чаще раза в неделю)</p>
      <p>- Оплата может откладываться, но отношение к вам будет ухудшаться</p>
      <p>- Пример умовы</p>
    </div> -->

    <!-- Bicycles Grid -->
    <div class="flex flex-wrap justify-center sm:justify-start md:space-x-4 border rounded-lg shadow-inner p-4 sm:p-6 md:p-10 h-full mb-20" v-if="filteredBicycles.length">
      <CardBg 
        v-for="bicycle in filteredBicycles"
        :key="bicycle.id" 
        class="border p-2 sm:p-4 mb-2 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        :image-url="`data:image/jpeg;base64,${bicycle.imageBase64}`" 
        :battery-capacity="bicycle.batteryCapacity"
        :model="bicycle.model"
        :motor="bicycle.motor"
        :wheel-size="bicycle.wheelSize"
        :price="bicycle.price"
        :on-sell="bicycle.onSell"
      />
    </div>

    <p class="text-center text-gray-500 mt-4" v-else>No bicycles found.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import BicycleService from '@/composables/bicycleService';
import Bicycle from "@/composables/Bicycle";

const bicycles = ref<Bicycle[]>([]);
const isSelected = ref(false); // Default: Rent (false)

onMounted(async () => {
  try {
    bicycles.value = await BicycleService.getAllBicycles();
  } catch (error) {
    console.error("Failed to load bicycles", error);
  }
});

// Computed property to filter bicycles
const filteredBicycles = computed(() => {
  return bicycles.value.filter(bicycle => bicycle.onSell === isSelected.value);
});
</script>
