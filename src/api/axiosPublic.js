import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "/api/v1",
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
