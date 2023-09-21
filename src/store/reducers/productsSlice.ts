import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartDTO, ProductDTO, SelectedProductDTO } from '@/types/products.ts';

export interface CounterState {
  products: ProductDTO[];
  cart: CartDTO;
}

const initialState: CounterState = {
  products: [],
  cart: {
    selectedProducts: [],
    total: 0,
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductDTO[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<SelectedProductDTO>) => {
      state.cart.selectedProducts = [...state.cart.selectedProducts, action.payload];
      state.cart.total = state.cart.selectedProducts.reduce(
        (acc, item) => (acc += item.selectedCount * item.data.price),
        0
      );
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.cart.selectedProducts = state.cart.selectedProducts.filter((el) => el.name !== action.payload);
      state.cart.total = state.cart.selectedProducts.reduce(
        (acc, item) => (acc += item.selectedCount * item.data.price),
        0
      );
    },
    changeSelectedCount: (state, action: PayloadAction<{ name: string; count: number }>) => {
      state.cart.selectedProducts = state.cart.selectedProducts.map((item) =>
        item.name === action.payload.name ? { ...item, selectedCount: action.payload.count } : item
      );
      state.cart.total = state.cart.selectedProducts.reduce(
        (acc, item) => (acc += item.selectedCount * item.data.price),
        0
      );
    },
  },
});

export const { setProducts, addProduct, removeProduct, changeSelectedCount } = productsSlice.actions;

export default productsSlice.reducer;
