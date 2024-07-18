import { v4 as uuidv4 } from 'uuid';
import { CartPage } from '../../../pages';
import CheckOutPage from '../../../pages/clientPages/CheckOutPage';

const cartRoutes = [
  {
    id: `cart-${uuidv4()}`,
    path: '/cart',
    element: <CartPage />,
  },
  {
    id: `cart-${uuidv4()}`,
    path: '/cart/checkout',
    element: <CheckOutPage />,
  },
];

export default cartRoutes;
