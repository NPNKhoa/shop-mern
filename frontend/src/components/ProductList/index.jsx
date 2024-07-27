import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product';
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/thunks/productThunk';

const ProductList = () => {
  const productList = useSelector((state) => state.products.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(productList);
  return (
    <div className='flex justify-around items-center gap-8 flex-wrap'>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductList;
