import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  homeRoutes,
  authRoutes,
  productTypesRoutes,
  productsRoutes,
  cartRoutes,
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

          <Route
            path='*'
            element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
