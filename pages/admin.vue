<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <!-- Clickable Cards -->
      <div
        @click="checkAuthentication('/add')"
        class="w-[10rem] h-[24rem] border bg-white rounded-[5px] text-left overflow-hidden cursor-pointer"
      >
        <div class="p-4">
          <h2 class="text-2xl text-[#1d243d] font-bold mb-1">Добавить велосипед</h2>
        </div>
      </div>
  
      <div
        @click="checkAuthentication('/constructor-admin')"
        class="w-[10rem] h-[24rem] border bg-white rounded-[5px] text-left overflow-hidden cursor-pointer"
      >
        <div class="p-4">
          <h2 class="text-2xl text-[#1d243d] font-bold mb-1">Добавить опцию</h2>
        </div>
      </div>
  
      <!-- Login Form (Shown only if not authenticated) -->
      <div v-if="showLoginForm" class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>
  
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Username Input -->
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              v-model="username"
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <!-- Password Input -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
  
          <!-- Error Message -->
          <div v-if="errorMessage" class="text-red-500 text-sm">
            {{ errorMessage }}
          </div>
  
          <!-- Login Button -->
          <div class="flex justify-center">
            <button
              type="submit"
              class="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </div>
        </form>
  
        <Spinner v-if="loading"/>
        <!-- Register Link (optional) -->
        <p class="text-center text-sm text-gray-600 mt-4">
          Don't have an account?
          <a href="/register" class="text-blue-500 hover:underline">Register</a>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuth } from '@/composables/useAuth';
  import { useRouter } from 'vue-router';
  
  // Get authentication logic from composable
  const { login, errorMessage, isAuthenticated } = useAuth();
  const router = useRouter();
  const loading = ref(false);
  
  // Define reactive variables
  const username = ref<string>('');
  const password = ref<string>('');
  const showLoginForm = ref(false);
  const chosenPath = ref('');
  
  const checkAuthentication = (path: string) => {
    if (!isAuthenticated.value) {
      showLoginForm.value = true; // Show login form if not authenticated
      chosenPath.value = path;
    } else {
      router.push(path);
    }
  };
  
  // Login function
  const handleLogin = async () => {
    try {
        loading.value = true;
        await login(username.value, password.value);
    } catch (error) {
    console.error("Failed to load bicycles", error);
  } finally {
    loading.value = false; // Hide spinner when done
  }
    if (isAuthenticated.value) {
      showLoginForm.value = false; // Hide login form on success
      router.push(chosenPath.value); // Redirect to '/add' after successful login
    }
  };
  </script>
  