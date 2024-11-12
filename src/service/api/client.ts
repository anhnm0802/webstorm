import axios from "axios";

const instance = axios.create({
  baseURL: "https://6731ddf77aaf2a9aff12855f.mockapi.io/",
  timeout: 10000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
