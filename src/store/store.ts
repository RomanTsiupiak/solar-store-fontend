import { configureStore } from '@reduxjs/toolkit';

import products from './reducers/productsSlice.ts';

export const store = configureStore({
  reducer: {
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
