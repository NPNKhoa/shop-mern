import { v4 as uuidv4 } from 'uuid';
import { LoginPage, SignUpPage } from '../../../pages';

const authRoutes = [
  {
    id: `auth-${uuidv4()}`,
    path: '/login',
    element: <LoginPage />,
  },
  {
    id: `auth-${uuidv4()}`,
    path: '/signup',
    element: <SignUpPage />,
  },
];

export default authRoutes;
