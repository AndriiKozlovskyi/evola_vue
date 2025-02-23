<template>
    <div class="flex flex-col min-h-screen transition-colors duration-300">
        <!-- Header -->
        <header class="fixed top-0 right-0 left-0 w-full flex flex-row justify-between items-center bg-[#000001] shadow-md z-50 p-2 sm:p-4">
            <!-- Mobile Menu & Theme Switcher -->
            <div class="flex flex-row">
                <button @click="isSidebarOpen = !isSidebarOpen" class="sm:hidden p-2">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div class="flex items-center space-x-3">
                    
                    <NuxtLink to="/" class="font-bold text-xl sm:text-2xl text-white flex items-center px-2 py-1 bg-gray-700 rounded-lg">
                        <span class="dark:text-white"><span class="text-red-600">E</span>VOLA</span>
                    </NuxtLink>
                </div>
           
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-4 text-sm sm:text-lg text-gray-300">
                <NuxtLink to="/bicycles" class="hover:text-white">Велосипеды</NuxtLink>
                <NuxtLink to="/batteries" class="hover:text-white">Батареи</NuxtLink>
                <NuxtLink to="/constructor" class="hover:text-white">Конверсия</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-white">Блог</NuxtLink>
            </nav>

            <!-- Contact Info -->
            <a href="https://t.me/evola_manager" class="flex items-center space-x-2 text-white hover:scale-105 transition">
                <img src="../assets/telegram.png" class="w-5 h-5 sm:w-6 sm:h-6" />
                <p class="text-xs sm:text-base">@evola_manager</p>
            </a>
        </header>

        <!-- Sidebar Menu (Mobile) -->
        <div v-if="isSidebarOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="isSidebarOpen = false"></div>
        <aside :class="['fixed top-0 left-0 w-64 h-full bg-[#000001] shadow-lg z-50 transform transition-transform', isSidebarOpen ? 'translate-x-0' : '-translate-x-full']">
            <div class="p-4 flex justify-between items-center">
                <h2 class="text-lg font-bold text-white">Меню</h2>
                <button @click="isSidebarOpen = false">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <nav class="flex flex-col p-4 space-y-4 text-lg text-white">
                <NuxtLink to="/bicycles" class="hover:text-white" @click="isSidebarOpen = false">Велосипеды</NuxtLink>
                <NuxtLink to="/batteries" class="hover:text-white" @click="isSidebarOpen = false">Батареи</NuxtLink>
                <NuxtLink to="/constructor" class="hover:text-white" @click="isSidebarOpen = false">Конверсия</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-white" @click="isSidebarOpen = false">Блог</NuxtLink>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-grow sm:mt-16 mt-12 dark:text-white">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="w-full flex justify-between items-center bg-[#000001] shadow-md p-2 sm:p-4">
            <NuxtLink to="/" class="font-bold text-xl sm:text-2xl text-white flex px-2 py-1  bg-gray-700 rounded-lg">
                <span class="text-white"><span class="text-red-600">E</span>VOLA</span>
            </NuxtLink>
            <a href="https://maps.app.goo.gl/EBk2MTtXK6mwjzLC8" class="flex items-center space-x-2 text-white hover:scale-105 transition">
                <img src="../assets/location.png" class="w-5 h-5 sm:w-6 sm:h-6" />
                <p class="text-xs sm:text-base">Wroclaw, Norweska 27</p>
            </a>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isSidebarOpen = ref(false);
</script>

