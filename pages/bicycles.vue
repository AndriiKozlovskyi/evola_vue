<template>
  <div class="p-6">
    <div class="flex flex-row items-center space-x-4 mb-4">
      <h1 class="text-2xl font-bold">Доступные велосипеды</h1>
      <Switcher class=""/>
    </div>
    <div class="flex flex-row space-x-4 border rounded-lg shadow-inner p-10 h-full" v-if="bicycles.length">
        <CardBg 
        v-for="bicycle in bicycles" :key="bicycle.id" class="border p-4 mb-2 rounded-lg"
        :image-url="`data:image/jpeg;base64,${bicycle.imageBase64}`" 
        :battery-capacity="bicycle.batteryCapacity"
        :model="bicycle.model"
        :motor="bicycle.motor"
        :wheel-size="bicycle.wheelSize"
        :price="bicycle.price"
        />
        <!-- <div class="flex flex-row">
          <div class="flex flex-col">
            <div class="flex flex-row justify-between">
              <p><strong class="text-lg">{{ bicycle.model.toLocaleUpperCase() }}</strong></p>    
              <p><strong class="text-lg">{{ bicycle.price }} зл/неделю</strong></p>
            </div>
            <div v-if="bicycle.imageBase64" class="mt-2">
              <img :src="`data:image/jpeg;base64,${bicycle.imageBase64}`" alt="Bicycle Image" width="300px" height="200px" class="rounded-md" />
            </div>
          </div>
          <div class="flex flex-col ml-10 justify-center">
            <p>{{ bicycle.batteryCapacity }} А</p>
            <p>{{ bicycle.motor }}</p>
            <p>{{ bicycle.wheelSize }}" колёса</p>
          </div>
        </div> -->
      </div>
    <p v-else>No bicycles found.</p>
  </div>
  <!-- <NuxtLink to="/add"><MyButton class="ml-8" label="Add Vehicle"></MyButton></NuxtLink> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BicycleService from '@/composables/bicycleService';
import Bicycle from "@/composables/Bicycle";

const bicycles: Ref<Array<Bicycle>> = ref([]);

onMounted(async () => {
  try {
    bicycles.value = await BicycleService.getAllBicycles();
    console.log(bicycles.value[0].imageBase64);
  } catch (error) {
    console.error("Failed to load bicycles", error);
  }
});
</script>
