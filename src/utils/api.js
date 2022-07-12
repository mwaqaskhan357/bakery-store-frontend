import { logout } from "../redux-toolkit/actions/auth";
import { dispatch, store } from "../redux-toolkit/store";

const axios = require("axios");
const serverUrl = "localhost%3A5000/api/v1/";
const Api = axios.create({
  baseURL: serverUrl,
});
const api = axios.create({
  baseURL: serverUrl,
});
api.interceptors.request.use((config) => {
  const token = store.getState().login.token;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 403) {
      dispatch(logout(error.response.message ?? "Session Expired"));
    }
  }
);

Api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error);
    if (error?.response?.status === 403) {
      dispatch(logout(error?.response?.message ?? "Session Expired"));
    }
  }
);

export const privateRequest = async (url, method, body) => {
  try {
    switch (method) {
      case "get":
        return api.get(url);
        break;
      case "delete":
        return api.delete(url);
        break;
      case "post":
        return api.post(url, body);
        break;
      case "patch":
        return api.patch(url, body);
        break;
      case "put":
        return api.put(url, body);
        break;
      default:
        return api.get(url);
        break;
    }
  } catch (error) {
    return new Promise((resolve, reject) => {
      reject({ error: error.message });
    });
  }
};

export const apiRequest = async (url, method, body) => {
  try {
    switch (method) {
      case "get":
        return Api.get(url);
        break;
      case "delete":
        return Api.delete(url);
        break;
      case "post":
        return Api.post(url, body);
        break;
      case "patch":
        return Api.patch(url, body);
        break;
      case "put":
        return Api.put(url, body);
        break;
      default:
        return Api.get(url);
        break;
    }
  } catch (error) {
    return new Promise((resolve, reject) => {
      reject({ error: error.message });
    });
  }
};
