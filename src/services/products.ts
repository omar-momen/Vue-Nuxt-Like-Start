import type { ProductsResponse } from '@/types';

export const getProducts = (options?: useFetchOptions<ProductsResponse>) => {
  return useFetch<ProductsResponse>('/products', options);
};