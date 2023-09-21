import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '@/Components/Header/Header.tsx';
import ShoppingCart from '@/Components/ShoppingCart/ShoppingCart.tsx';
import Checkout from '@/Pages/Checkout/Checkout.tsx';
import { getProductsQuery } from '@/services/products.ts';
import { setProducts } from '@/store/reducers/productsSlice.ts';
import { formatProductsData } from '@/utils';

import './styles.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProductsQuery()
      .then((data) => dispatch(setProducts(formatProductsData(data))))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="flex h-[calc(100vh-64px)] p-[32px] overflow-auto justify-center">
        <Checkout />
        <ShoppingCart />
      </div>
    </div>
  );
};

export default App;
