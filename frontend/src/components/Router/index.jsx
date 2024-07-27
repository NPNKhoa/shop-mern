import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  homeRoutes,
  authRoutes,
  productTypesRoutes,
  productsRoutes,
  cartRoutes,
  adminAuthRoutes,
  adminHomeRoutes,
} from '../../router';
import {
  AuthLayout,
  CartLayout,
  HomeLayout,
  OrderLayout,
  ProductLayout,
  UserLayout,
} from '../../layouts';
import NotFoundPage from '../../pages/NotFoundPage';
import ProductTypeLayout from '../../layouts/clientLayout/ProductTypeLayout';
import { Suspense } from 'react';
import { LoadingPage } from '../../pages';
import userRoutes from '../../router/clientRoutes/userRoutes';
import orderRoutes from '../../router/clientRoutes/orderRoutes';
import { AdminAuthLayout, AdminHomeLayout } from '../../layouts/adminLayout';

const Router = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
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
              element={
                <ProductTypeLayout>{element}</ProductTypeLayout>
              }></Route>
          ))}
          {productsRoutes.map(({ id, path, element }) => (
            <Route
              key={id}
              path={path}
              element={<ProductLayout>{element}</ProductLayout>}></Route>
          ))}
          {cartRoutes.map(({ id, path, element }) => (
            <Route
              key={id}
              path={path}
              element={<CartLayout>{element}</CartLayout>}></Route>
          ))}
          {userRoutes.map(({ id, path, element }) => (
            <Route
              key={id}
              path={path}
              element={<UserLayout>{element}</UserLayout>}
            />
          ))}
          {orderRoutes.map(({ id, path, element }) => (
            <Route
              key={id}
              path={path}
              element={<OrderLayout>{element}</OrderLayout>}
            />
          ))}

          {adminAuthRoutes.map(({ id, path, element }) => (
            <Route
              key={id}
              path={path}
              element={<AdminAuthLayout>{element}</AdminAuthLayout>}
            />
          ))}
          {adminHomeRoutes.map(({ id, path, element }) => (
            <Route
              key={id}
              path={path}
              element={<AdminHomeLayout>{element}</AdminHomeLayout>}
            />
          ))}

          <Route
            path='*'
            element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
