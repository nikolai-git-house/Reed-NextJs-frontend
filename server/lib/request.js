import axios from 'axios';
import getConfig from 'next/config';
import { RequestError } from './CustomError';

const createAxios = (auth) => {

  const { serverRuntimeConfig } = getConfig();
  const a = axios.create({
    baseURL: serverRuntimeConfig.API_ENDPOINT_PORTAL,
    headers: {
      Authorization: auth
    }
  });

  a.interceptors.response.use(resp => resp, error => {
    return Promise.reject(new RequestError(error.response.data, error.status))
  });

  return a;

}

export const POST = (auth) => (url, data) => createAxios(auth).post(url, data);
export const PATCH = (auth) => (url, data) => createAxios(auth).patch(url, data);
export const PUT = (auth) => (url, data) => createAxios(auth).put(url, data);
export const DELETE = (auth) => (url, params) => createAxios(auth).delete(url, { params: params || { foo: 'bar' } });
export const GET = (auth) => (url, params) => createAxios(auth).get(url, { params });
export const REQUEST = (auth) => config => createAxios(auth).request(config);
 