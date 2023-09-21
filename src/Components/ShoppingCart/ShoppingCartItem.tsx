import { useDispatch } from 'react-redux';

import solar from '@/assets/solar.jpeg';
import { SelectedProductDTO } from '@/types/products.ts';
import MinusIcon from '@/Components/Icon/MinusIcon.tsx';
import PlusIcon from '@/Components/Icon/PlusIcon.tsx';
import DeleteIcon from '@/Components/Icon/DeleteIcon.tsx';
import { changeSelectedCount, removeProduct } from '@/store/reducers/productsSlice.ts';

type ShoppingCartItemProps = {
  product: SelectedProductDTO;
};

const ShoppingCartItem = ({ product }: ShoppingCartItemProps) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(removeProduct(product.name));
  };

  const handleChangeProductCount = (variant: 'plus' | 'minus') => {
    if (variant === 'plus') {
      dispatch(changeSelectedCount({ name: product.name, count: product.selectedCount + 1 }));
    } else {
      dispatch(changeSelectedCount({ name: product.name, count: product.selectedCount - 1 }));
    }
  };

  return (
    <div className="w-full flex flex-row gap-[8px] p-[16px] border-[1px] border-[#000000] rounded-[16px] mb-[8px]">
      <div className="w-[70px] h-[90px] flex-shrink-0">
        <img alt="solar product" src={solar} className="w-full h-full object-cover" />
      </div>
      <div className="w-full flex flex-col justify-between">
        <p>{product.name}</p>
        <p>${product.data.price}</p>
        <div className="flex gap-[8px] items-center">
          <button
            onClick={() => handleChangeProductCount('minus')}
            disabled={product.selectedCount === 1}
            className="hover:enabled:scale-110 disabled:text-[#B9B9B9]"
          >
            <MinusIcon />
          </button>
          <span>{product.selectedCount}</span>
          <button
            onClick={() => handleChangeProductCount('plus')}
            disabled={product.selectedCount === product.data.quantity}
            className="hover:enabled:scale-110 disabled:text-[#B9B9B9]"
          >
            <PlusIcon />
          </button>
        </div>
      </div>
      <button className="p-[8px] rounded-full hover:bg-[#F2ECFF]" onClick={handleDeleteItem}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ShoppingCartItem;
