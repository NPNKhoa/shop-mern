import { v4 as uuidv4 } from 'uuid';
import { ProductPage } from '../../../pages';

const productRoutes = [
  {
    id: `product-${uuidv4()}`,
    path: '/products',
    element: <ProductPage />,
  },
];

export default productRoutes;
