import { ProductsResponse } from '@/types/products.ts';

export const getProductsQuery = async (): Promise<ProductsResponse> => {
  const response = await fetch('https://testtask.twnty.de/');

  return (await response.json()) as Promise<ProductsResponse>;
};
