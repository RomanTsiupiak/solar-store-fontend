import { ProductDTO, ProductsResponse } from '@/types/products.ts';

export const formatProductsData = (prod: ProductsResponse): ProductDTO[] =>
  Object.entries(prod).map((item) => ({ name: item[0], data: item[1] }));
