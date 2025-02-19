<template>
    <div class="flex flex-col min-h-screen">
        <!-- Header -->
        <header class="fixed top-0 right-0 left-0 w-full flex items-center bg-white shadow-md z-50 p-2 sm:p-4">
            <!-- Mobile Menu Button -->
            <button @click="isSidebarOpen = true" class="sm:hidden p-2">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>

            <div class="flex flex-row items-center justify-start p-2 sm:p-4">
                <NuxtLink to="/" class="font-bold text-xl sm:text-2xl text-black flex flex-row">
                    <p class="text-red-600">E</p><p>VOLA</p>
                </NuxtLink>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden sm:flex w-full justify-center items-center space-x-4 sm:space-x-10 py-2 sm:py-4 text-sm sm:text-lg text-gray-600">
                <NuxtLink to="/bicycles" class="hover:text-black">Велосипеды</NuxtLink>
                <NuxtLink to="/batteries" class="hover:text-black">Батареи</NuxtLink>
                <a class="hover:text-black">Блог</a>
            </nav>

            <!-- Contact Info -->
            <div class="flex flex-row items-center justify-end p-2 sm:p-4 space-x-2 text-gray-700">
                <img src="../assets/telegram.png" class="w-5 h-5 sm:w-6 sm:h-6"/>
                <p class="text-xs sm:text-base">@evola_manager</p>
            </div>
        </header>

        <!-- Sidebar Menu (Mobile) -->
        <div v-show="isSidebarOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="isSidebarOpen = false"></div>
        <aside :class="['fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform', isSidebarOpen ? 'translate-x-0' : '-translate-x-full']">
            <div class="p-4 flex justify-between items-center">
                <h2 class="text-lg font-bold">Меню</h2>
                <button @click="isSidebarOpen = false">
                    <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <nav class="flex flex-col p-4 space-y-4 text-lg text-gray-700">
                <NuxtLink to="/bicycles" class="hover:text-black" @click="isSidebarOpen = false">Велосипеды</NuxtLink>
                <NuxtLink to="/batteries" class="hover:text-black" @click="isSidebarOpen = false">Батареи</NuxtLink>
                <a class="hover:text-black" @click="isSidebarOpen = false">Блог</a>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-grow pt-20 sm:pt-24">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isSidebarOpen = ref(false);
</script>
