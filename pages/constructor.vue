<script setup>
import { ref, computed, onMounted } from "vue";
import Dropdown from "@/components/Dropdown.vue";
import ConstrOptionService from "~/composables/optionsService";

// Store configuration options fetched from API
const constrOptions = ref([]);
const loading = ref(true);

// Store selected options dynamically
const selectedOptions = ref({});

// Fetch configuration options from API
const fetchConstrOptions = async () => {
  try {
    constrOptions.value = await ConstrOptionService.getAllConstrOptions();
  } catch (error) {
    console.error("Ошибка загрузки конфигураций:", error);
  } finally {
    loading.value = false;
  }
};

// Compute total price based on selected options
const totalPrice = computed(() => {
  console.log(selectedOptions.value); // Debugging
  return Object.values(selectedOptions.value).reduce((sum, selectedOption) => {
    return sum + (+selectedOption?.price || 0); // Convert price to number
  }, 0);
});


// Fetch options when the component mounts
onMounted(fetchConstrOptions);
</script>

<template>
  <div class="flex flex-col p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 w-full p-4 sm:p-10">
      <!-- Generate dropdowns dynamically -->
      <Dropdown
        v-for="constrOption in constrOptions"
        :key="constrOption.id"
        :label="constrOption.name"
        :options="constrOption.options"
        v-model="selectedOptions[constrOption.id]"
      />
    </div>
    <Spinner v-if="loading"/>

    <!-- Total Price Display -->
    <div class="flex justify-center text-lg sm:text-xl font-bold rounded-lg px-4 py-2 mt-4">
      <p>Общая стоимость: {{ totalPrice }}pln</p>
    </div>
  </div>
</template>
