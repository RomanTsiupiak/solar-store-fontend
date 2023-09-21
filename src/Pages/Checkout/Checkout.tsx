import { useSelector } from 'react-redux';

import ProductCard from '@/Components/ProductCard/ProductCard.tsx';
import { RootState } from '@/store/store.ts';

const Checkout = () => {
  const { products, cart } = useSelector((state: RootState) => state.products);

  return (
    <div className="w-full h-max grid grid-cols-[repeat(auto-fill,300px)] gap-[20px] after:h-[20px] after:w-full">
      {products.map((item) => (
        <ProductCard
          key={item.name}
          product={item}
          canAdd={!cart.selectedProducts.some((el) => el?.name === item.name)}
        />
      ))}
    </div>
  );
};

export default Checkout;
