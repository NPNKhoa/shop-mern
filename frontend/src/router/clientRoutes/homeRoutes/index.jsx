import { v4 as uuidv4 } from 'uuid';
import { HomePage } from '../../../pages';

const homeRoutes = [
  {
    id: `home-${uuidv4()}`,
    path: '/',
    element: <HomePage />,
  },
];

export default homeRoutes;
