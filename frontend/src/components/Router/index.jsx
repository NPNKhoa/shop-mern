import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { homeRoutes } from '../../router';
import { HomeLayout } from '../../layouts';
import NotFoundPage from '../../pages/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {homeRoutes.map(({ id, path, element }) => (
          <Route
            key={id}
            path={path}
            element={<HomeLayout>{element}</HomeLayout>}
          />
        ))}

        <Route
          path='*'
          element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
