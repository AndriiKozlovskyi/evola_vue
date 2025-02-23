<template>
    <div class="flex flex-col min-h-screen transition-colors duration-300">
        <!-- Header -->
        <header class="fixed top-0 right-0 left-0 w-full flex justify-between items-center bg-white dark:bg-[#000001] shadow-md z-50 p-2 sm:p-4">
            <!-- Mobile Menu & Theme Switcher -->
            <div class="flex items-center space-x-3">
                <!-- Logo -->
                <NuxtLink to="/" class="font-bold text-xl sm:text-2xl text-black dark:text-white flex items-center px-2 py-1 border border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg">
                    <span class="dark:text-white"><span class="text-red-600">E</span>VOLA</span>
                </NuxtLink>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-4 text-sm sm:text-lg text-white dark:text-gray-300">
                <NuxtLink to="/bicycles" class="hover:text-black dark:hover:text-white">Велосипеды</NuxtLink>
                <NuxtLink to="/batteries" class="hover:text-black dark:hover:text-white">Батареи</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-black dark:hover:text-white">Блог</NuxtLink>
            </nav>

            <!-- Contact Info -->
            <a href="https://t.me/evola_manager" class="flex items-center space-x-2 text-gray-700 dark:text-white hover:scale-105 transition">
                <img src="../assets/telegram.png" class="w-5 h-5 sm:w-6 sm:h-6" />
                <p class="text-xs sm:text-base">@evola_manager</p>
            </a>
        </header>

        <!-- Sidebar Menu (Mobile) -->
        <div v-if="isSidebarOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50" @click="isSidebarOpen = false"></div>
        <aside :class="['fixed top-0 left-0 w-64 h-full bg-white dark:bg-dark shadow-lg z-50 transform transition-transform', isSidebarOpen ? 'translate-x-0' : '-translate-x-full']">
            <div class="p-4 flex justify-between items-center">
                <h2 class="text-lg font-bold text-gray-900 dark:text-white">Меню</h2>
                <button @click="isSidebarOpen = false">
                    <svg class="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <nav class="flex flex-col p-4 space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <NuxtLink to="/bicycles" class="hover:text-black dark:hover:text-white" @click="isSidebarOpen = false">Велосипеды</NuxtLink>
                <NuxtLink to="/batteries" class="hover:text-black dark:hover:text-white" @click="isSidebarOpen = false">Батареи</NuxtLink>
                <NuxtLink to="/blog" class="hover:text-black dark:hover:text-white" @click="isSidebarOpen = false">Блог</NuxtLink>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-grow sm:mt-16 mt-12 bg-white text-black dark:text-white">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="w-full flex justify-between items-center bg-white dark:bg-[#000001] shadow-md p-2 sm:p-4">
            <NuxtLink to="/" class="font-bold text-xl sm:text-2xl text-black dark:text-white flex px-2 py-1 border hover:bg-gray-300 dark:hover:bg-dark border-black dark:border-white rounded-lg">
                <span class="dark:text-white"><span class="text-red-600">E</span>VOLA</span>
            </NuxtLink>
            <a href="https://maps.app.goo.gl/EBk2MTtXK6mwjzLC8" class="flex items-center space-x-2 text-gray-700 dark:text-white hover:scale-105 transition">
                <img src="../assets/location.png" class="w-5 h-5 sm:w-6 sm:h-6" />
                <p class="text-xs sm:text-base">Wroclaw, Norweska 27</p>
            </a>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isSidebarOpen = ref(false);
const isDark = ref(false);

const toggleTheme = () => {
    isDark.value = !isDark.value;
    if (process.client) {
        document.documentElement.classList.toggle("dark", isDark.value);
        localStorage.setItem("theme", isDark.value ? "dark" : "light");
    }
};

onMounted(() => {
    if (process.client) {
        const savedTheme = localStorage.getItem("theme");
        isDark.value = savedTheme === "dark";
        if (isDark.value) {
            document.documentElement.classList.add("dark");
        }
    }
});
</script>
<style scoped>
.bg-light {
    background-color: #ffffff;
}

.bg-dark {
    background-color: #000001; /* Custom Dark Background */
}

.dark .text-white {
    color: white;
}

.dark .text-black {
    color: black;
}
</style>

