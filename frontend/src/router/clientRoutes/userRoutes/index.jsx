import { v4 as uuidv4 } from 'uuid';
import { UserPage } from '../../../pages';

const userRoutes = [
  {
    id: `user-${uuidv4()}`,
    path: '/me',
    element: <UserPage />,
  },
];

export default userRoutes;
