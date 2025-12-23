import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

const axiosPublic = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
});

axiosPublic.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosPublic;
