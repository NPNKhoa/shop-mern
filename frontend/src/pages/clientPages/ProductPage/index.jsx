import { CustomBreadcrumbs } from '../../../components';
import { useParams } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductDescription from './components/ProductDescription';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductById } from '../../../redux/thunks/productThunk';

const ProductPage = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(getProductById(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(product);

  return (
    <div>
      {console.log(`Showing product detail page for product id: ${productId}`)}
      <CustomBreadcrumbs
        productType={'Men'}
        productName={'Men Green Solid Zhipperd Jacket'}
      />

      <ProductDetail product={product} />

      <ProductDescription />
    </div>
  );
};

export default ProductPage;
