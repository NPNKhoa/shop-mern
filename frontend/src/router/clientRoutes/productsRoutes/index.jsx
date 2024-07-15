import { v4 as uuidv4 } from 'uuid';
import { ProductPage } from '../../../pages';

const productsRoutes = [
  {
    id: `products-${uuidv4()}`,
    path: '/product/:id',
    element: <ProductPage />,
  },
];

export default productsRoutes;
