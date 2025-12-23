import axios from "axios";

const isDev = import.meta.env.DEV; 
const apiBase = import.meta.env.VITE_API_URL || "http://23.239.111.164:5001"; 
const baseURL = isDev ? "/api/api/v1" : `${apiBase}/api/v1`;

const axiosPublic = axios.create({
  baseURL,
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