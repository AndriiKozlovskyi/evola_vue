<template>
    <div class="p-4 sm:p-6">
      <div class="border flex flex-col space-y-3 p-5">
        <h1>Добавить категорию</h1>
        <input v-model="name" placeholder="name"/>
        <MyButton @on-click="createConstrOption" label="Сохранить деталь"/>

      </div>
  
      <div v-for="constrOption in constrOptions" :key="constrOption.id" class="flex flex-col text-black space-y-3 px-3 py-2 border">
        <p>{{ constrOption.name }}</p>
        <MyButton @on-click="showCreationForm(constrOption)" label="Добавить опцию"/>
        <div v-for="option in constrOption.options" :key="option.id" class="flex flex-col text-black bg-gray-200 px-3 py-2 border">
          <p>{{ option.value }}</p>
          <p>{{ option.price }}</p>
        </div>
        <div v-if="showOptionCreationForm === constrOption.id">
          <input v-model="value" placeholder="значение"/>
          <input  v-model="price" placeholder="цена"/>
          <MyButton @on-click="saveOption(constrOption.id)" label="Сохранить опцию"/>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ConstrOptionService from "~/composables/optionsService";

const name = ref("");
const value = ref("");
const price = ref("");

const showOptionCreationForm = ref(0); 
const constrOptions = ref<any[]>([]);
  const newOption = ref({ name: ''});
  const newOptionOption = ref({ value: '', price: '', imageSrc: '' });
const showCreationForm = (constrOption: any) => {
  console.log(constrOption.id)
  showOptionCreationForm.value = constrOption.id;
}

const saveOption = async (id: number) => {
  const option = { value: value.value, price: price.value, imageSrc: '' };
  await ConstrOptionService.addOptionToConstrOption(id, option);
}
const fetchConstrOptions = async () => {
    try {
      constrOptions.value = await ConstrOptionService.getAllConstrOptions();
    } catch (error) {
      console.error("Ошибка загрузки конфигураций:", error);
    }
  };
  
  
  const createConstrOption = async () => {
    console.log(name.value)
    try {
      newOption.value = { name: name.value }; // Reset form

      await ConstrOptionService.createConstrOption(newOption.value);
      newOption.value = { name: '' }; // Reset form

      fetchConstrOptions(); // Refresh list
    } catch (error) {
      console.error("Ошибка при создании конфигурации:", error);
    }
  };
  
  onMounted(fetchConstrOptions);
</script>
  