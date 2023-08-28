import axios, { AxiosInstance } from 'axios';

const BASE_URL: string = 'https://jsonplaceholder.typicode.com';
const DEFAULT_TIMEOUT: number = 10000;

export const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: DEFAULT_TIMEOUT,
});
