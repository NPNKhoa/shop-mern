import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product';
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/thunks/productThunk';
import PropTypes from 'prop-types';

const ProductList = ({ category }) => {
  const productList = useSelector((state) => state.products.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts({ category }));
  }, [category, dispatch]);

  return (
    <div className='flex justify-around items-center gap-8 flex-wrap'>
      {productList.map((product) => (
        <Product
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  category: PropTypes.string,
};

export default ProductList;
