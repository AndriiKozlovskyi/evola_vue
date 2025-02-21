import axios from 'axios';

const API_URL = 'https://evola-ryj6.onrender.com/api/constr-options'; // Your Spring Boot API

export default class ConstrOptionService {

  static async getAllConstrOptions() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching constr options:', error);
      throw error;
    }
  }

  static async getConstrOptionById(id: number) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching constr option ${id}:`, error);
      throw error;
    }
  }

  static async createConstrOption(option: any) {
    try {
      const response = await axios.post(API_URL, option);
      return response.data;
    } catch (error) {
      console.error('Error creating constr option:', error);
      throw error;
    }
  }

  static async deleteConstrOption(id: number) {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting constr option ${id}:`, error);
      throw error;
    }
  }

  static async addOptionToConstrOption(constrOptionId: number, option: any) {
    try {
      const response = await axios.post(`${API_URL}/${constrOptionId}/options`, option);
      return response.data;
    } catch (error) {
      console.error(`Error adding option to constr option ${constrOptionId}:`, error);
      throw error;
    }
  }
}
