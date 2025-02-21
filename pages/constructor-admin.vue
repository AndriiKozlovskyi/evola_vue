<template>
    <div class="p-4 sm:p-6">
      <h1 class="text-xl sm:text-2xl font-bold text-center sm:text-left mb-4">Конфигурация велосипеда</h1>
  
      <!-- Construction Options List -->
      <div v-if="constrOptions.length" class="space-y-4">
        <div v-for="option in constrOptions" :key="option.id" class="border p-4 rounded-lg shadow-sm">
          <h2 class="text-lg font-semibold">{{ option.name }}</h2>
          <ul class="mt-2 space-y-1">
            <li v-for="opt in option.options" :key="opt.value" class="flex items-center space-x-2">
              <img :src="opt.imageSrc" alt="Option Image" class="w-12 h-12 object-cover rounded-md">
              <span>{{ opt.value }} - {{ opt.price }} zł</span>
              <h3 class="text-md font-semibold mt-4">Добавить вариант</h3>
        <input v-model="newOptionOption.value" placeholder="Значение (например, Bafang 500W)" class="border p-2 rounded w-full mb-2">
        <input v-model="newOptionOption.price" placeholder="Цена (например, 1000)" type="number" class="border p-2 rounded w-full mb-2">
        <input v-model="newOptionOption.imageSrc" placeholder="Ссылка на изображение" class="border p-2 rounded w-full mb-2">
        
        <MyButton @click="addOption" class="bg-green-500 text-white px-4 py-2 rounded mr-2" label="Добавить вариант"/>
            </li>
          </ul>
        </div>
      </div>
      <p v-else class="text-center text-gray-500 mt-4">Нет доступных конфигураций.</p>
  
      <!-- Add New Option to Construction Option -->
      <div class="mt-6 p-4 border rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold mb-2">Добавить конфигурацию</h2>
        <input v-model="newOption.name" placeholder="Название (например, мотор)" class="border p-2 rounded w-full mb-2">
        
        <div v-if="newOption.options.length" class="mt-4">
          <h4 class="text-md font-semibold">Добавленные варианты:</h4>
          <ul class="mt-2 space-y-1">
            <li v-for="(opt, index) in newOption.options" :key="index" class="flex items-center space-x-2">
              <img :src="opt.imageSrc" alt="Option Image" class="w-12 h-12 object-cover rounded-md">
              <span>{{ opt.value }} - {{ opt.price }} zł</span>
            </li>
          </ul>
        </div>
  
        <MyButton @click="createConstrOption" class="bg-blue-500 text-white px-4 py-2 rounded mt-4" label="Создать конфигурацию"/>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import ConstrOptionService from '@/composables/optionsService';
  
  const constrOptions = ref<any[]>([]);
  const newOption = ref({ name: '', options: [] });
  const newOptionOption = ref({ value: '', price: '', imageSrc: '' });
  
  const fetchConstrOptions = async () => {
    try {
      constrOptions.value = await ConstrOptionService.getAllConstrOptions();
    } catch (error) {
      console.error("Ошибка загрузки конфигураций:", error);
    }
  };
  
  const addOption = () => {
  if (
    !newOptionOption.value.value.trim() || 
    newOptionOption.value.price === '' || // Ensure price is not empty
    !newOptionOption.value.imageSrc.trim()
  ) return;

  newOption.value.options.push({ ...newOptionOption.value });
  newOptionOption.value = { value: '', price: '', imageSrc: '' }; // Reset fields
};
  
  const createConstrOption = async () => {
    if (!newOption.value.name.trim()) return;
    try {
      await ConstrOptionService.createConstrOption(newOption.value);
      newOption.value = { name: '', options: [] }; // Reset form
      fetchConstrOptions(); // Refresh list
    } catch (error) {
      console.error("Ошибка при создании конфигурации:", error);
    }
  };
  
  onMounted(fetchConstrOptions);
  </script>
  