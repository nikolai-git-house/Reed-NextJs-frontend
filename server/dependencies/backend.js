import axios from 'axios';
import getConfig from 'next/config';
import { RequestError } from '../lib/CustomError';

const createAxios = () => {

  const { publicRuntimeConfig } = getConfig();
  const a = axios.create({
    baseURL: publicRuntimeConfig.API_ENDPOINT_SERVER
  });

  a.interceptors.response.use(resp => resp, error => {
    console.error(`Backend ERROR`);
      if(error.response){
        console.error(`- method: ${error.response.config.method}`);
        console.error(`- url: ${error.response.config.url}`);
        console.error(`- data: ${error.response.config.data}`);
        console.error(`- response status: ${error.response.status}`);
        console.error(`- response data: ${error.response.data}`);
      } else console.error(error);
      console.error(`------------------------------------------------`);
    return Promise.reject(new RequestError(error.response.data, error.response.status))
  });

  return a;

}

export default {
  post: (url, data) => createAxios().post(url, data),
  patch: (url, data) => createAxios().patch(url, data),
  put: (url, data) => createAxios().put(url, data),
  delete: (url, params) => createAxios().delete(url, { params: params || { foo: 'bar' } }),
  get: (url, params) => createAxios().get(url, { params }),
  request: config => createAxios().request(config)
} 