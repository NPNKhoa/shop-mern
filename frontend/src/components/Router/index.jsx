import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  homeRoutes,
  authRoutes,
  productTypesRoutes,
  productsRoutes,
} from '../../router';
import { AuthLayout, HomeLayout, ProductLayout } from '../../layouts';
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
            element={<AuthLayout>{element}</AuthLayout>}
          />
        ))}
        {productTypesRoutes.map(({ id, path, element }) => (
          <Route
            key={id}
            path={path}
            element={<ProductTypeLayout>{element}</ProductTypeLayout>}></Route>
        ))}
        {productsRoutes.map(({ id, path, element }) => (
          <Route
            key={id}
            path={path}
            element={<ProductLayout>{element}</ProductLayout>}></Route>
        ))}

        <Route
          path='*'
          element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
