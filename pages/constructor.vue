<template>
  <div class="flex flex-col items-center bg-[#fffefe] w-full px-4 mt-6">
    <!-- Header -->
    <h1 class="text-2xl sm:text-3xl font-bold text-center mb-6">
      Соберите свой велосипед
    </h1>

    <div class="flex flex-col sm:flex-row w-full max-w-5xl">
      <!-- Left side: Dropdowns -->
      <div class="flex flex-col w-full sm:w-1/2 space-y-3 sm:pr-6">
        <Dropdown
          v-for="constrOption in constrOptions"
          :key="constrOption.id"
          :label="constrOption.name"
          :options="constrOption.options"
          v-model="selectedOptions[constrOption.id]"
        />
      </div>
      <Spinner v-if="loading"/>

      <!-- Right side: Total price, button, and order summary -->
      <div v-if="!loading" class="flex flex-col w-full sm:w-1/2 items-center sm:items-center mt-6 sm:mt-0 sm:pl-6">

        <!-- Total Price -->
        <p class="text-lg font-semibold">
          Общая стоимость: {{ totalPrice }} PLN
        </p>

        <!-- Generate Order Button -->
        <MyButton 
          @on-click="generateOrder"
          label="Сформировать заказ"
          :disabled="Object.values(selectedOptions).every(option => option === null)"
          class="mt-3 w-full sm:w-auto"
        />

        <!-- Order Summary (Clickable) -->
        <div 
          v-if="orderText" 
          @click="copyOrder" 
          class="relative text-black bg-gray-100 p-4 mt-4 rounded-lg border border-gray-300 w-full sm:w-[80%] cursor-pointer hover:bg-gray-200 transition"
        >
          <p class="whitespace-pre-line">{{ orderText }}</p>

          <!-- Clipboard Icon in Top-Right -->
          <div class="absolute top-2 right-2 text-gray-500 text-xl">
            {{ copySuccess ? "✅" : "📋" }}
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Dropdown from "@/components/Dropdown.vue";
import ConstrOptionService from "~/composables/optionsService";

const constrOptions = ref([]);
const loading = ref(true);
const selectedOptions = ref({});
const orderText = ref("");
const copySuccess = ref(false); // Controls icon change

// Fetch configuration options from API
const fetchConstrOptions = async () => {
  try {
    const options = await ConstrOptionService.getAllConstrOptions();
    constrOptions.value = options;

    options.forEach(option => {
      selectedOptions.value[option.id] = null;
    });
    console.log(selectedOptions.value)

  } catch (error) {
    console.error("Ошибка загрузки конфигураций:", error);
  } finally {
    loading.value = false;
  }
};

// Compute total price based on selected options
const totalPrice = computed(() => {
  return Object.values(selectedOptions.value).reduce((sum, selectedOption) => {
    return sum + (+selectedOption?.price || 0);
  }, 0);
});

// Generate order summary
const generateOrder = () => {
  if (!Object.values(selectedOptions.value).some(option => option)) {
    orderText.value = "Вы не выбрали ни одной опции.";
    return;
  }

  let text = "Ваш заказ:\n\n";
  constrOptions.value.forEach(option => {
    const selected = selectedOptions.value[option.id];
    if (selected && selected.value) {
      text += `• ${option.name}: ${selected.value} (${selected.price || 0} PLN)\n`;
    } else {
      text += `• ${option.name}: [ОШИБКА: Данные отсутствуют]\n`;
    }
  });

  text += `\nОбщая стоимость: ${totalPrice.value} PLN`;
  orderText.value = text;
  copySuccess.value = false;
};

// Copy order text to clipboard
const copyOrder = async () => {
  try {
    await navigator.clipboard.writeText(orderText.value);
    copySuccess.value = true;
    setTimeout(() => (copySuccess.value = false), 2000); // Reset icon after 2 sec
  } catch (err) {
    console.error("Ошибка копирования:", err);
  }
};

// Fetch options when the component mounts
onMounted(fetchConstrOptions);
</script>
