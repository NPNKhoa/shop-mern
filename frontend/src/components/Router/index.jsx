import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { homeRoutes, authRoutes, productTypesRoutes } from '../../router';
import { HomeLayout } from '../../layouts';
import NotFoundPage from '../../pages/NotFoundPage';
import ProductTypeLayout from '../../layouts/clientLayout/ProductTypeLayout';

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
        {authRoutes.map(({ id, path, element }) => (
          <Route
            key={id}
            path={path}
            element={<HomeLayout>{element}</HomeLayout>}
          />
        ))}
        {productTypesRoutes.map(({ id, path, element }) => (
          <Route
            key={id}
            path={path}
            element={<ProductTypeLayout>{element}</ProductTypeLayout>}></Route>
        ))}

        <Route
          path='*'
          element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
