import axios from 'axios';

const masahaApi = axios.create({
  baseURL: 'https://staging.masaha.app/api/v1',
});

export const setToken = token => {
  masahaApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete masahaApi.defaults.headers.common['Authorization'];
};

export default masahaApi;
