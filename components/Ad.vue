<template>
    <div class="relative w-full overflow-hidden">
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
          class="w-full"
        />
      </div>
  
      <button @click="prevSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10">‹</button>
      <button @click="nextSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10">›</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import fix from "@/assets/fix1.png";
  import bicycle from "@/assets/bicycle1.png";
  
  const slides = ref([
    { image: bicycle, label: "Аренда велосипедов", desc: "Арендуй велосипед сейчас, мощный мотор, большой запас хода" },
    { image: fix, label: "Сервис велосипедов", desc: "Мы обслужим твой велосипед в лучшем виде." },
    { image: bicycle, label: "Конверсия велосипедов", desc: "Соберём велосипед за ваш бюджет, любой мощности" },
  ]);
  
  let touchStartX = 0;
let touchEndX = 0;
  const currentIndex = ref(0);
  
  const nextSlide = () => {
    if(currentIndex.value === slides.value.length - 1) {
        currentIndex.value = 0;
        return;
    } 
    currentIndex.value++;
    console.log(currentIndex.value)
  };
  
  const prevSlide = () => {
    if(currentIndex.value === 0) {
        currentIndex.value = slides.value.length - 1;
        return;
    } 
    currentIndex.value--;
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
});

onUnmounted(() => {
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("touchend", handleTouchEnd);
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
  