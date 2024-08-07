import { v4 as uuidv4 } from 'uuid';
import { OrderPage } from '../../../pages';

const orderRoutes = [
  {
    id: `order-${uuidv4()}`,
    path: '/order/:orderId',
    element: <OrderPage />,
  },
];

export default orderRoutes;
