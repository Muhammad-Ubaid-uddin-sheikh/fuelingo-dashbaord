// src/api/apiHandler.js

import apiClient from "./ApisFunc";
export const AdminLoginAPi = async (route, payload) => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await apiClient.post(route, payload);
    return response.data;
  } catch (error) {
    // if (error?.response?.data?.msg === 'Invalid Token') {
    //   localStorage.clear();           // Clear token
    //   window.location.href = "/admin-login";     // Redirect to login/home
    // }
    throw error; // Let the component catch and handle it
  }
};

export const fetchWithToken = async (route) => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await apiClient.get(route, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // if (error?.response?.data?.msg === 'Invalid Token') {
    //   localStorage.clear();           // Clear token
    //   window.location.href = "/admin-login";     // Redirect to login/home
    // }
    throw error;
  }
};