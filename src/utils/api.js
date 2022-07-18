import { logout } from '../redux-toolkit/actions/auth';
import { dispatch, store } from '../redux-toolkit/store';

const axios = require('axios');
const serverUrl = 'http://localhost:5000/api/v1/';
const Api = axios.create({
  baseURL: serverUrl,
});
const api = axios.create({
  baseURL: serverUrl,
});
api.interceptors.request.use((config) => {
  const token = store.getState().login.token;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status === 403) {
      dispatch(logout(error.response.message ?? 'Session Expired'));
    }
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error);
    if (error?.response?.status === 403) {
      dispatch(logout(error?.response?.message ?? 'Session Expired'));
    }
    return Promise.reject(error);
  }
);

export const privateRequest = async (url, method, body) => {
  try {
    switch (method) {
      case 'get':
        return api.get(url);
      case 'delete':
        return api.delete(url);
      case 'post':
        return api.post(url, body);
      case 'patch':
        return api.patch(url, body);
      case 'put':
        return api.put(url, body);
      default:
        return api.get(url);
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
      case 'get':
        return Api.get(url);
      case 'delete':
        return Api.delete(url);
      case 'post':
        return Api.post(url, body);
      case 'patch':
        return Api.patch(url, body);
      case 'put':
        return Api.put(url, body);
      default:
        return Api.get(url);
    }
  } catch (error) {
    return new Promise((resolve, reject) => {
      reject({ error: error.message });
    });
  }
};
