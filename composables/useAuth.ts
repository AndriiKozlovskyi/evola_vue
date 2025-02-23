// composables/useAuth.ts
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

// Define the types for the response and the state
interface AuthResponse {
  message: string;
}

export function useAuth() {
  // Track authentication state
  const isAuthenticated = ref<boolean>(false);
  const username = ref<string>('');
  const password = ref<string>('');
  const errorMessage = ref<string>('');
  const router = useRouter();

  // Login function (calls backend for authentication)
  const login = async (user: string, pass: string): Promise<void> => {
    try {
      // Make a POST request to your backend login endpoint
      const response = await axios.post<AuthResponse>('https://evola-ryj6.onrender.com/api/auth/login', {
        username: user,
        password: pass,
      });

      // Check if the authentication was successful
      if (response.status === 200) {
        isAuthenticated.value = true;
        username.value = user;
      } else {
        errorMessage.value = 'Invalid credentials';
      }
    } catch (error: any) {
      // Handle error, with proper error message
      errorMessage.value = 'Authentication failed: ' + (error.response?.data?.message || 'Unknown error');
    }
  };

  // Logout function
  const logout = (): void => {
    isAuthenticated.value = false;
    username.value = '';
    password.value = '';
  };

  // Return the state and methods
  return {
    isAuthenticated,
    login,
    logout,
    username,
    password,
    errorMessage,
  };
}
