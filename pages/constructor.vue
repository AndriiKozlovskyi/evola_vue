<script setup>
import { ref, computed } from "vue";
import Dropdown from "@/components/Dropdown.vue";

const motorBrands = ref([
  { name: "Bafang", price: 300 },
  { name: "Bosch", price: 400 },
  { name: "Shimano", price: 350 },
]);

const motorType = ref([
  { name: "кареточный", price: 300 },
  { name: "заднее колеса", price: 400 },
  { name: "переднее колесо", price: 350 },
]);

const motorPowers = ref([
  { name: "250W", price: 100 },
  { name: "500W", price: 150 },
  { name: "750W", price: 200 },
  { name: "1000W", price: 250 },
]);

const batteryCapacities = ref([
  { name: "10Ah", price: 120 },
  { name: "13Ah", price: 160 },
  { name: "15Ah", price: 200 },
  { name: "20Ah", price: 250 },
]);

const wheelSizes = ref([
  { name: "26 дюймов", price: 80 },
  { name: "27.5 дюймов", price: 90 },
  { name: "29 дюймов", price: 100 },
]);

const suspensionTypes = ref([
  { name: "Хардтейл", price: 150 },
  { name: "Двухподвес", price: 300 },
]);

const tireWidths = ref([
  { name: "2.1 дюйма", price: 50 },
  { name: "2.3 дюйма", price: 60 },
  { name: "2.6 дюйма", price: 70 },
]);

const batteryVoltages = ref([
  { name: "36V", price: 120 },
  { name: "48V", price: 180 },
  { name: "52V", price: 220 },
]);

const displayTypes = ref([
  { name: "LCD", price: 80 },
  { name: "OLED", price: 120 },
  { name: "Без экранчика", price: 0 },
]);

const controllerCurrents = ref([
  { name: "15A", price: 100 },
  { name: "20A", price: 150 },
  { name: "25A", price: 200 },
]);

const brakeTypes = ref([
  { name: "Механические", price: 100 },
  { name: "Гидравлические", price: 200 },
]);

const selectedMotorBrand = ref(null);
const selectedMotorPower = ref(null);
const selectedBatteryCapacity = ref(null);
const selectedWheelSize = ref(null);
const selectedMotorType = ref(null);
const selectedSuspensionType = ref(null);
const selectedTireWidth = ref(null);
const selectedBatteryVoltage = ref(null);
const selectedDisplayType = ref(null);
const selectedControllerCurrent = ref(null);
const selectedBrakeType = ref(null);
const addAccessories = ref("no");

// Computed property to calculate the total price
const totalPrice = computed(() => {
  return (
    (selectedMotorBrand.value?.price || 0) +
    (selectedMotorPower.value?.price || 0) +
    (selectedBatteryCapacity.value?.price || 0) +
    (selectedMotorType.value?.price || 0) +
    (selectedWheelSize.value?.price || 0) +
    (selectedSuspensionType.value?.price || 0) +
    (selectedTireWidth.value?.price || 0) +
    (selectedBatteryVoltage.value?.price || 0) +
    (selectedDisplayType.value?.price || 0) +
    (selectedControllerCurrent.value?.price || 0) +
    (selectedBrakeType.value?.price || 0) +
    (addAccessories.value === "yes" ? 50 : 0) // Accessories cost an additional 50
  );
});
</script>

<template>
<div class="flex flex-row">
  <div class="p-10 w-1/2">
    <Dropdown label="Марка мотора" :options="motorBrands" v-model="selectedMotorBrand" />
    <Dropdown label="Мощность мотора" :options="motorPowers" v-model="selectedMotorPower" />
    <Dropdown label="Тип мотора" :options="motorType" v-model="selectedMotorType" />
    <Dropdown label="Ёмкость батареи" :options="batteryCapacities" v-model="selectedBatteryCapacity" />
    <Dropdown label="Размер колёс" :options="wheelSizes" v-model="selectedWheelSize" />
    <Dropdown label="Тип подвески" :options="suspensionTypes" v-model="selectedSuspensionType" />
    <Dropdown label="Ширина резины" :options="tireWidths" v-model="selectedTireWidth" />
    <Dropdown label="Напряжение батареи" :options="batteryVoltages" v-model="selectedBatteryVoltage" />
    <Dropdown label="Тип экранчика" :options="displayTypes" v-model="selectedDisplayType" />
    <Dropdown label="Ток контроллера" :options="controllerCurrents" v-model="selectedControllerCurrent" />
    <Dropdown label="Тип тормозов" :options="brakeTypes" v-model="selectedBrakeType" />

    <div class="mt-4 space-x-4">
      <label class="block font-semibold">Добавить ли аксессуары?</label>
      <input type="radio" id="yes" value="yes" v-model="addAccessories" />
      <label for="yes">Да</label>
      <input type="radio" id="no" value="no" v-model="addAccessories" />
      <label for="no">Нет</label>
    </div>
  </div>
  <div class="text-xl font-bold flex flex-row items-center justify-center">
      Итоговая цена: {{ totalPrice }} $
    </div>
</div>
</template>
