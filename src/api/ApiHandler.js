// src/api/apiHandler.js

import apiClient from "./ApisFunc";

// Generic function to call POST APIs
export const AdminLoginAPi = async (route, payload) => {
  try {
    const response = await apiClient.post(route, payload);
    return response.data;
  } catch (error) {
    throw error; // Let the component catch and handle it
  }
};
