import axiosInstance from '@/libs/axios';
import type { AxiosRequestConfig } from 'axios';

export async function axiosFetch<T>(url: string, options?: AxiosRequestConfig) {
  return await axiosInstance.request<T>({
    url,
    ...options,
  });
}