import axios from 'axios';
import getConfig from 'next/config';
import { RequestError } from '../lib/CustomError';

export default class PortalConnection {

  constructor(auth){

    const { serverRuntimeConfig } = getConfig();
    const a = axios.create({
      baseURL: serverRuntimeConfig.API_ENDPOINT_PORTAL,
      headers: {
        Authorization: auth
      }
    });

    a.interceptors.response.use(resp => resp, error => {
      console.error(`PortalConnection ERROR`);
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

    this.axios = a;

  }

  post(url, data){ return this.axios.post(url, data) }
  patch(url, data){ return this.axios.patch(url, data) }
  put(url, data){ return this.axios.put(url, data) }
  delete(url, params){ return this.axios.delete(url, { params: params || { foo: 'bar' } }) }
  get(url, params){ return this.axios.get(url, { params }) }
  request(config){ return this.axios.request(config) }

}
 