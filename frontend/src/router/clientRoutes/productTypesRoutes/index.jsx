import { v4 as uuidv4 } from 'uuid';
import { ProductTypePage } from '../../../pages';

const productTypesRoutes = [
  {
    id: `products-${uuidv4()}`,
    path: '/products/:type',
    element: <ProductTypePage />,
  },
];

export default productTypesRoutes;
