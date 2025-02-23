<script setup lang="ts">
import { ref } from 'vue';
import BicycleService from '@/composables/bicycleService';

const newBicycle = ref({
  model: '',
  batteryCapacity: null,
  wheelSize: null,
  price: null,
  motor: '',
  onSell: false,
  description: '',
  image: null,
});

const addBicycle = async () => {
  try {
    const formData = new FormData();
    formData.append('bicycle', JSON.stringify({
      model: newBicycle.value.model,
      batteryCapacity: newBicycle.value.batteryCapacity,
      wheelSize: newBicycle.value.wheelSize,
      price: newBicycle.value.price,
      motor: newBicycle.value.motor,
      onSell: newBicycle.value.onSell,
      description: newBicycle.value.description
    }));

    if (newBicycle.value.image) {
      formData.append('image', newBicycle.value.image);
    }

    await BicycleService.createBicycle(formData);
    alert('Bicycle added successfully!');
  } catch (error) {
    console.error('Failed to add bicycle', error);
  }
};

const handleFileChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    newBicycle.value.image = file;
  }
};
</script>

<template>
  <div class="p-6">
    <NuxtLink to="/"><MyButton label="back"/></NuxtLink>
    <h1 class="text-2xl font-bold mb-4">Add a Bicycle</h1>
    <form @submit.prevent="addBicycle" class="space-y-4">
      <input v-model="newBicycle.model" placeholder="Model" class="border p-2 w-full rounded-xl" />
      <input v-model="newBicycle.batteryCapacity" type="number" placeholder="Battery Capacity" class="border p-2 w-full rounded-xl" />
      <input v-model="newBicycle.wheelSize" type="number" placeholder="Wheel Size" class="border p-2 w-full rounded-xl" />
      <input v-model="newBicycle.onSell" placeholder="On Sell" class="border p-2 w-full rounded-xl" />
      <input v-model="newBicycle.price" type="number" placeholder="Price" class="border p-2 w-full rounded-xl" />
      <input v-model="newBicycle.motor" placeholder="Motor Type" class="border p-2 w-full rounded-xl" />
      <textarea v-model="newBicycle.description" placeholder="Description" class="border p-2 w-full rounded-xl"></textarea>
      <input type="file" @change="handleFileChange" accept="image/*" class="border p-2 w-full rounded-xl" />
      <MyButton type="submit" class="text-white px-4 py-2"  label="Add Vehicle"/>
    </form>
  </div>
</template>
