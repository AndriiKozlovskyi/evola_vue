import axios from 'axios';

const API_URL = 'http://home.evola-tech.cloud/api/bicycles'; // Your Spring Boot API
const AUTH_HEADER = {
  auth: {
    username: 'TowZaRKa', // Replace with actual username
    password: 'EvoZaLa20Nin05$12345', // Replace with actual password
  },
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

export default class BicycleService {
  
  static async getAllBicycles() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching bicycles:', error);
      throw error;
    }
  }

  static async getBicycleById(id: number) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching bicycle ${id}:`, error);
      throw error;
    }
  }

  static async createBicycle(bicycle: any) {
    try {


      const response = await axios.post(`${API_URL}/admin`, bicycle, AUTH_HEADER);
      return response.data;
    } catch (error) {
      console.error('Error creating bicycle:', error);
      throw error;
    }
  }

  static async updateBicycle(id: number, bicycle: any) {
    try {

      const response = await axios.put(`${API_URL}/admin/${id}`, bicycle, AUTH_HEADER);
      return response.data;
    } catch (error) {
      console.error(`Error updating bicycle ${id}:`, error);
      throw error;
    }
  }

  static async deleteBicycle(id: number) {
    try {
      await axios.delete(`${API_URL}/admin/${id}`, AUTH_HEADER);
    } catch (error) {
      console.error(`Error deleting bicycle ${id}:`, error);
      throw error;
    }
  }
}
