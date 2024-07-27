import { v4 as uuidv4 } from 'uuid';
import {
  AdminProductPage,
  AdminOrderPage,
  AdminUserPage,
} from '../../../pages/adminPages';

const authRoutes = [
  {
    id: `admin-auth-${uuidv4()}`,
    path: '/admin/products',
    element: <AdminProductPage />,
  },
  {
    id: `admin-auth-${uuidv4()}`,
    path: '/admin/orders',
    element: <AdminOrderPage />,
  },
  {
    id: `admin-auth-${uuidv4()}`,
    path: '/admin/users',
    element: <AdminUserPage />,
  },
];

export default authRoutes;
