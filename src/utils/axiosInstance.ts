import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // Your base URL
  timeout: 10000, // Request timeout in milliseconds (optional)
  // Other default configurations...
});

export default axiosInstance;
