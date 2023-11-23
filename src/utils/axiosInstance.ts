import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // Your base URL
  timeout: 10000, // Request timeout in milliseconds (optional)
  // Other default configurations...
});

// Add a request interceptor to include the token in headers for authenticated requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
