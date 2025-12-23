import axios from "axios";

const apiBase = import.meta.env.VITE_API_URL || "http://23.239.111.164:5001";

const proxy = "https://api.cors.lol/?url=";

const fullApiUrl = `${apiBase}/api/v1`;  

const baseURL = import.meta.env.DEV 
  ? "/api/api/v1"  
  : proxy + encodeURIComponent(fullApiUrl);  

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