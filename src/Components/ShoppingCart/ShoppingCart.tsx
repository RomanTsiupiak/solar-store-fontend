import { useSelector } from 'react-redux';

import { RootState } from '@/store/store.ts';
import CartIcon from '@/Components/Icon/CartIcon.tsx';

import ShoppingCartItem from './ShoppingCartItem.tsx';

const ShoppingCart = () => {
  const { selectedProducts, total } = useSelector((state: RootState) => state.products.cart);

  return (
    <div className="w-[350px] h-max bg-[#FFFFFF] rounded-[16px] sticky top-0 p-[16px] flex flex-col items-center">
      {selectedProducts.length ? (
        <>
          {selectedProducts.map((item) => (
            <ShoppingCartItem key={item.name} product={item} />
          ))}
          <div className="w-full flex font-semibold text-[24px]">
            <span>Total:&nbsp;</span>${total}
          </div>
          <button className="bg-[#000000] px-[32px] py-[8px] rounded-[8px] text-[#FFFFFF] my-[16px] hover:opacity-80">
            Checkout
          </button>
        </>
      ) : (
        <div className="h-[300px] flex flex-col items-center justify-center">
          <div className="w-[64px] h-[64px] flex items-center justify-center my-[16px] bg-[#B9B9B9] rounded-full">
            <CartIcon />
          </div>
          <p>Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
