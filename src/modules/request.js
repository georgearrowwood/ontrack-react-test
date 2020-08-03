import axios from 'axios';

export default (options) => {
  if (!options) throw new Error('no parameters given for request instance creation');
  const params = {
    headers: {},
  };
  if (options.baseURL) {
    params.baseURL = options.baseURL;
  }
  if (options.headers) {
    params.headers = { ...options.headers };
  }
  if (options.token) {
    params.headers.Authorization = options.token;
  }
  if (options.timeout) params.timeout = options.timeout;
  return axios.create(params);
};
