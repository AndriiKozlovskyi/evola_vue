<template>
  <div class="relative w-full overflow-x-hidden">
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
    
    <div class="p-6 bg-[#fffefe]">
      <div class="flex flex-col sm:flex-row sm:justify-between space-y-5 sm:space-y-0 mb-4">
        <h1 class="text-2xl sm:text-3xl font-medium text-left sm:text-left">Доступные велосипеды</h1>
        <Switcher v-model="isSelected" />
      </div>

      <Spinner v-if="loading"/>


      <div v-else-if="filteredBicycles.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:p-6 h-full">
        <BicycleCard 
          v-for="bicycle in filteredBicycles"
          :key="bicycle.id" 
          class="sm:p-4 mb-2 rounded-lg w-full"
          :image-url="`data:image/jpeg;base64,${bicycle.imageBase64}`" 
          :battery-capacity="bicycle.batteryCapacity"
          :model="bicycle.model"
          :motor="bicycle.motor"
          :wheel-size="bicycle.wheelSize"
          :price="bicycle.price"
          :on-sell="bicycle.onSell"
        />
      </div>

      <p v-else class="text-center text-gray-500 mt-4">No bicycles found.</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';
import BicycleService from '@/composables/bicycleService';
import Bicycle from "@/composables/Bicycle";
import fix from "@/assets/fix1.png";
import bicycle from "@/assets/bicycle1.png";
import BicycleCard from '~/components/BicycleCard.vue';

const bicycles = ref<Bicycle[]>([]);
const isSelected = ref(false); // Default: Rent (false)
const loading = ref(true); // Loading state

onMounted(async () => {
  try {
    bicycles.value = await BicycleService.getAllBicycles();
  } catch (error) {
    console.error("Failed to load bicycles", error);
  } finally {
    loading.value = false; // Hide spinner when done
  }
});

// Computed property to filter bicycles
const filteredBicycles = computed(() => {
  return bicycles.value.filter(bicycle => bicycle.onSell === isSelected.value);
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
