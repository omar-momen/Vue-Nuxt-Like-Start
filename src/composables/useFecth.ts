import axiosInstance from '@/libs/axios';
import { type AxiosRequestConfig, type AxiosResponse, type AxiosError, type Method } from 'axios';

export interface useFetchOptions<T> {
  /** Transform the response data */
  transform?: (response: AxiosResponse<T>) => T;
  /** Watch for changes in these values to trigger a refresh */
  watch?: unknown[];
  /** Whether to fetch immediately on mount */
  immediate?: boolean;
  /** HTTP method to use */
  method?: Method;
  /** Request body for POST/PUT/PATCH */
  body?: unknown;
  /** Query parameters */
  params?: Record<string, unknown>;
  /** Additional axios config (excluding method/data/params) */
  config?: Omit<AxiosRequestConfig, 'method' | 'data' | 'params'>;
}
export interface useFetchResult<T> {
  data: Ref<T | null>;
  response: Ref<AxiosResponse<T> | null>;
  loading: Ref<boolean>;
  error: Ref<AxiosError<T> | null>;
  statusCode: Ref<number | null>;
  refresh: () => Promise<{
    data: T | null;
    response: AxiosResponse<T> | null;
    loading: boolean;
    error: AxiosError<T> | null;
    statusCode: number | null;
  }>;
  execute: () => Promise<{
    data: T | null;
    response: AxiosResponse<T> | null;
    loading: boolean;
    error: AxiosError<T> | null;
    statusCode: number | null;
  }>;
}

/**
 * useFetch composable — reactive API handler similar to Nuxt's useFetch
 */
export function useFetch<T>(
  url: string,
  options: useFetchOptions<T> = {},
): useFetchResult<T> {
  const {
    transform,
    watch: watchValues = [],
    immediate = true,
    method = 'GET',
    body,
    params,
    config = {},
  } = options;

  const data = ref(null) as Ref<T | null>;
  const response = ref(null) as Ref<AxiosResponse<T> | null>;
  const loading = ref(false);
  const error = ref<AxiosError<T> | null>(null);
  const statusCode = ref<number | null>(null);

  const fetchData = async() => {
    loading.value = true;
    error.value = null;
    statusCode.value = null;

    try {
      const headers = {
        ...config.headers,
      };

      const res = await axiosInstance.request<T>({
        url,
        method,
        data: body,
        params,
        ...config,
        headers,
      });

      response.value = res;
      statusCode.value = res?.status ?? null;
      data.value = transform ? transform(res) : res.data;
    } catch (err) {
      const axiosError = err as AxiosError<T>;
      error.value = axiosError;
      statusCode.value = axiosError.response?.status ?? null;
    } finally {
      loading.value = false;
    }

    return {
      data: data.value,
      response: response.value,
      loading: loading.value,
      error: error.value,
      statusCode: statusCode.value,
    };
  };

  if (watchValues.length > 0) {
    watch(watchValues, fetchData, { immediate });
  } else if (immediate) {
    fetchData();
  }

  return {
    data,
    response,
    loading,
    error,
    statusCode,
    refresh: fetchData,
    execute: fetchData,
  };
}
