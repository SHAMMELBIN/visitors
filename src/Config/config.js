import axios from "axios";

export const IMAGE_BASE_URL = "https://api.gripforum.comy/api/public/";
export const BASE_URL = "https://api.gripforum.com/api/mobile";
export const server = "https://api.gripforum.com/"


export const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("userToken")}`;
    config.headers["Content-Type"] = "application/json";

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default apiClient;