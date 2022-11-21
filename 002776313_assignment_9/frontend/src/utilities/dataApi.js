import axios from "axios";
import { getCookie } from "./cookie";
export const baseAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
baseAxios.interceptors.request.use(function (config) {
  const token = getCookie("token");
  config.headers.Authorization = "Bearer " + token;
  return config;
});
