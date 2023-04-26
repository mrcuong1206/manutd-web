import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://manutd-gehl.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use((response) => response);

export default axiosClient;
