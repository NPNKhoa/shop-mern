import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductType = () => {
  const arr = ['Điện Thoại', 'TV', 'Tủ Lạnh', 'Máy Lạnh', 'Máy Giặt'];
  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    setProductTypes(arr);
  }, []);

  return (
    <div className='w-full flex justify-between items-center gap-3 bg-white py-2 px-10'>
      {productTypes.map((productType, index) => (
        <Link
          key={index}
          to={`/products/${productType}`}
          className='py-2'>
          {productType}
        </Link>
      ))}
    </div>
  );
};

export default ProductType;
