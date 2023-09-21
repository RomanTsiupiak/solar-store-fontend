import { useDispatch } from 'react-redux';

import { ProductDTO } from '@/types/products.ts';
import { addProduct } from '@/store/reducers/productsSlice.ts';

type ProductCardProps = {
  product: ProductDTO;
  canAdd: boolean;
};

const ProductCard = ({ product, canAdd }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, selectedCount: 1 }));
  };

  return (
    <div className="w-[300px] bg-[#FFFFFF] rounded-[16px] flex flex-col items-center py-[16px] px-[32px]">
      <div className="w-[150px] h-[200px]">
        <img
          alt="solar product"
          src="https://content.rozetka.com.ua/goods/images/big/253259390.png"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="uppercase my-[8px] font-extrabold text-[#2C2E3D] text-[20px]">{product?.name}</p>
      <p className="uppercase my-[8px] font-semibold text-[#2C2E3D] text-[16px]">
        <span>Count:&nbsp;</span>
        {product?.data.quantity}
      </p>
      <div className="flex flex-row items-center justify-between w-full">
        <div className="font-extrabold text-[16px]">${product.data.price}</div>
        {canAdd && (
          <button
            className="py-[8px] px-[16px] border-[1px] border-[#2C2E3D] rounded-[8px] hover:opacity-70 flex gap-[8px]"
            onClick={handleAddToCart}
          >
            + Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
