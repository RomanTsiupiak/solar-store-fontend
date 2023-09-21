export type ProductType = {
  quantity: number;
  price: number;
};

export type ProductsResponse = {
  priBalcony: ProductType;
  priBasic: ProductType;
  priFlat: ProductType;
  'priFlat Duo': ProductType;
  'priFlat Trio': ProductType;
  priRoof: ProductType;
  'priRoof Duo': ProductType;
  priWall: ProductType;
  'priWall Duo': ProductType;
};

export type ProductDTO = {
  name: string;
  data: ProductType;
};

export type SelectedProductDTO = {
  selectedCount: number;
} & ProductDTO;

export type CartDTO = {
  selectedProducts: SelectedProductDTO[];
  total: number;
};
