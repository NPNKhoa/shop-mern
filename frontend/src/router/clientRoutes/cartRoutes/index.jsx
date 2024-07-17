import { v4 as uuidv4 } from 'uuid';
import { CartPage } from '../../../pages';

const cartRoutes = [
  {
    id: `cart-${uuidv4()}`,
    path: '/cart',
    element: <CartPage />,
  },
];

export default cartRoutes;
