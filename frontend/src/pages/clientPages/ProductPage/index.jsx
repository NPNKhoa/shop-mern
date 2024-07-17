import { CustomBreadcrumbs } from '../../../components';
import { useParams } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductDescription from './components/ProductDescription';

const ProductPage = () => {
  const { id: productId } = useParams();

  return (
    <div>
      {console.log(`Showing product detail page for product id: ${productId}`)}
      <CustomBreadcrumbs
        productType={'Men'}
        productName={'Men Green Solid Zhipperd Jacket'}
      />

      <ProductDetail />

      <ProductDescription />
    </div>
  );
};

export default ProductPage;
