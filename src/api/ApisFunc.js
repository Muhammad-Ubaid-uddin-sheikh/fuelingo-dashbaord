import axios from "axios";
import { toast } from "react-toastify";

const apiClient = axios.create({
  baseURL: "https://backend.fuelingo.ae/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors if needed
apiClient.interceptors.response.use(
  response => response,
  error => {
    const msg =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "Something went wrong!";
    toast.error(msg); // Optional toast
    return Promise.reject(error);
  }
);

export default apiClient;
