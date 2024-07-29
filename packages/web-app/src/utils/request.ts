import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT,
});

export const request = async (options: AxiosRequestConfig) => {
  const { state } = JSON.parse(localStorage.getItem('altametrics') || '{}');

  if (state?.user?.token) {
    client.defaults.headers.common.Authorization = `Bearer ${state.user.token}`;
  }

  const onSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response?.data);
  };

  return client(options).then(onSuccess).catch(onError);
};
