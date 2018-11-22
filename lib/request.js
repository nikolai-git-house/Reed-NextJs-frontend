import axios from 'axios';
import getConfig from 'next/config';
import { getUser } from './sso-auth';

const { publicRuntimeConfig } = getConfig();
let userStore = {};

const createAxios = () => {
  return axios.create({
    baseURL: process.browser ? publicRuntimeConfig.API_ENDPOINT : publicRuntimeConfig.API_ENDPOINT_SERVER
  });
}

const createInternalAxios = () => {
  return axios.create({
    baseURL: '/api',
    headers: {
      Authorization: `Bearer ${userStore.access_token}`
    }
  });
}

export const setUser = (user) => { userStore = { ...user } };

export const POST = (url, data) => createAxios().post(url, data);
export const PATCH = (url, data) => createAxios().patch(url, data);
export const PUT = (url, data) => createAxios().put(url, data);
export const DELETE = (url, params) => createAxios().delete(url, { params: params || { foo: 'bar' } });
export const GET = (url, params) => createAxios().get(url, { params });
export const REQUEST = config => createAxios().request(config);

export const INTERNAL = {
  GET: (url, params) => createInternalAxios().get(url, { params }),
  PUT: (url, data) => createInternalAxios().put(url, data),
  POST: (url, data) => createInternalAxios().post(url, data),
  DELETE: (url, params) => createInternalAxios().delete(url, { params: params || { foo: 'bar' } })
}
