import { useAuthStore } from "@/store";
import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
