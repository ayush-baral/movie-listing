import Axios, { type AxiosRequestConfig } from "axios";

const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export function authRequestInterceptor(config: AxiosRequestConfig) {
  if (config.headers?.Accept !== undefined && config.headers?.Accept !== null) {
    config.headers.Accept = "application/json";
  }
  return config;
}

export const axios = Axios.create({
  baseURL: BASE_URL,
});

axios.interceptors.request.use(authRequestInterceptor as never);
axios.interceptors.response.use(
  (response) => response,
  async (error) => Promise.reject(error)
);
