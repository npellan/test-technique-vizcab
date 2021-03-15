import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://my.api.mockaroo.com/employee.json',
  timeout: 1000,
  headers: {
    'X-API-Key': '53b1b110',
  },
});

export default axiosInstance;
