import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

const baseURL = isProduction
  ? "https://your-production-url.com" // Replace this with your production URL
  : "http://localhost:8080"; // Default URL for development

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  // Other default configurations...
});

// Add a request interceptor to include the token in headers for authenticated requests
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Database-Type"] = localStorage.getItem("selectedDatabase");
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
