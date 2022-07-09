import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://pokemartecomm.herokuapp.com/api',
});
