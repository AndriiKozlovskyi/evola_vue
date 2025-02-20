<template>
  <div class="relative w-full overflow-x-hidden">
    <!-- <div class="w-screen sm:h-[20rem] h-[20rem] flex flex-col bg-cover bg-center rounded-xl opacity-90"
    :style="{ backgroundImage: `url(${image})` }">
    <div class="opacity-90 bg-black inset-0 flex flex-col items-center justify-center z-30 bg-cover w-full h-full">
      <div class="text-white flex flex-col items-center self-center w-1/3 justify-center bg-blue-100 text-gr-800 bg-gradient-to-r from-green-500 to-indigo-400 p-4 sm:p-6 rounded-lg mb-4">
      <h2 class="text-lg sm:text-3xl font-semibold">Наше предложение</h2>
      <ul class="list-disc pl-5 text-sm mt-5 sm:text-base">
        <li>Первый день аренды бесплатно</li>
        <li>Бесплатное сервисное обслуживание</li>
        <li>Лояльное отношение к клиентам</li>
        <li>Первый день аренды бесплатно</li>
        <li>Бесплатное сервисное обслуживание</li>
        <li>Лояльное отношение к клиентам</li>
      </ul>
  </div>
</div> -->

<div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100/slides.length}%)`, width: `${slides.length * 100}%` }"
    >
      <Slide 
        v-for="(slide, index) in slides" 
        :key="index" 
        :image="slide.image" 
        :desc="slide.desc" 
        :label="slide.label"
        :button-present="false"
        :link="slide.link"
        class="w-full"
      />
    </div>
    </div>
    <!-- Offer Section -->

    <div class="p-6">

    <!-- Header & Switcher -->
    <div class="flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0 mb-4">
      <h1 class="text-xl sm:text-2xl font-bold text-center sm:text-left">Доступные велосипеды</h1>
      <Switcher v-model="isSelected" />
    </div>

    <!-- Bicycles Grid -->
    <div class="flex sm:flex-row flex-col  justify-center sm:justify-start md:space-x-4 border rounded-lg shadow-inner p-4 sm:p-6 md:p-10 h-full mb-20" v-if="filteredBicycles.length">
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
import fix from "@/assets/fix1.png";
import bicycle from "@/assets/bicycle1.png";
import image from "@/assets/fix1.png";

const bicycles = ref<Bicycle[]>([]);
const isSelected = ref(false); // Default: Rent (false)

onMounted(async () => {
  try {
    bicycles.value = await BicycleService.getAllBicycles();
  } catch (error) {
    console.error("Failed to load bicycles", error);
  }
});

const mockBicycles: Bicycle[] = [
  new Bicycle({
    id: 1,
    model: "E-MTB Pro",
    batteryCapacity: 15,
    price: 1200,
    onSell: true,
    motor: "Bafang",
    wheelSize: 27.5,
    imageBase64: "", // Add a base64-encoded image if needed
  }),
  new Bicycle({
    id: 2,
    model: "City Cruiser",
    batteryCapacity: 10,
    price: 900,
    onSell: false,
    motor: "Bosch",
    wheelSize: 26,
    imageBase64: "",
  }),
  new Bicycle({
    id: 3,
    model: "Adventure Pro",
    batteryCapacity: 20,
    price: 1500,
    onSell: true,
    motor: "Shimano",
    wheelSize: 29,
    imageBase64: "",
  }),
  new Bicycle({
    id: 4,
    model: "Folding E-Bike",
    batteryCapacity: 13,
    price: 1100,
    onSell: false,
    motor: "Bafang",
    wheelSize: 26,
    imageBase64: "",
  }),
  new Bicycle({
    id: 5,
    model: "Fat Tire Explorer",
    batteryCapacity: 18,
    price: 1700,
    onSell: true,
    motor: "Bosch",
    wheelSize: 26,
    imageBase64: "",
  }),
];

// Computed property to filter bicycles
const filteredBicycles = computed(() => {
  return mockBicycles.filter(bicycle => bicycle.onSell === isSelected.value);
});


const slides = ref([
  { image: bicycle, label: "Условия аренды", desc: "Первый день беслатно.", buttonLabel: "Арендовать", link: "/bicycles" },
  { image: fix, label: "Условия аренды", desc: "Бесплатный сервис.", buttonLabel: "Сервис", link: "/bicycles" },
  { image: bicycle, label: "Условия аренды", desc: "Лояльное отношение к клиентам.", buttonLabel: "Конверсия", link: "/constructor" },
]);

let touchStartX = 0;
let touchEndX = 0;
const currentIndex = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.touches[0].clientX;
};

const handleTouchMove = (event: TouchEvent) => {
  touchEndX = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (touchStartX - touchEndX > 50) nextSlide();
  if (touchEndX - touchStartX > 50) prevSlide();
};

onMounted(() => {
  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", handleTouchMove);
  window.addEventListener("touchend", handleTouchEnd);
  
  interval = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("touchend", handleTouchEnd);
  
  if (interval) clearInterval(interval);
});
</script>


<style scoped>
.flex {
  display: flex;
}

.w-full {
  width: 100%;
}

.flex-shrink-0 {
  flex-shrink: 0;
}
</style>
