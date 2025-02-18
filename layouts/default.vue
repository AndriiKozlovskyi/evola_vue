<template>
    <div class="flex flex-col min-h-screen">
        <header class="fixed top-0 right-0 left-0 w-full flex bg-white shadow-md z-50">
            <div class="flex flex-row items-center absolute justify-center p-4">
                <NuxtLink to="/" class="font-bold text-2xl text-black flex flex-row"><p class="text-red-600">E</p><p>VOLA</p></NuxtLink>
            </div>
            <nav class="flex w-full justify-center items-center space-x-10 py-4 text-lg text-gray-600">
                <NuxtLink to="/bicycles"><a class="hover:text-black">Велосипеды</a></NuxtLink>
                <NuxtLink to="/bicycles"><a class="hover:text-black">Батареи</a></NuxtLink>
                <a class="hover:text-black">Блог</a>
            </nav>
            <div class="flex flex-row items-center justify-center p-4 space-x-2 text-gray-700">
                <img src="../assets/telegram.png" class="w-6 h-6"/>
                <p>@evola_manager</p>
            </div>
        </header>
        
        <!-- Main Content Area -->
        <main class="flex-grow pt-16">
            <slot />
        </main>

        <!-- <footer class="bg-black/90 fixed w-full bottom-0 right-0 z-10 py-4 text-center">
            <div class="flex flex-row justify-between text-white px-10 py-4">
                <div>
                    <p>t/me.channel</p>
                </div>
                <div>
                    <p>Kromera, Wroclaw</p>
                </div>
                <div>
                    <p>+48 789 711 631</p>
                </div>
            </div>
        </footer> -->
    </div>
</template>
<script lang="ts" setup>
</script>
