import { v4 as uuidv4 } from 'uuid';
import { AdminLoginPage } from '../../../pages/adminPages';

const authRoutes = [
  {
    id: `admin-auth-${uuidv4()}`,
    path: '/admin/login',
    element: <AdminLoginPage />,
  },
];

export default authRoutes;
