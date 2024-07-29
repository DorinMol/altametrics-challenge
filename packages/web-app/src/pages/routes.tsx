import { Navigate, RouteObject } from 'react-router-dom';
import AppLayout from '../layouts/app';
import AuthLayout from '../layouts/auth';
import { ERoutes } from '../models/api';
import InvoicesPage from './invoices';
import LoginPage from './login';

const routes: RouteObject[] = [
  {
    path: ERoutes.other,
    element: <Navigate to={ERoutes.login} replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: ERoutes.login,
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: ERoutes.invoices,
        element: <InvoicesPage />,
      },
    ],
  },
];

export default routes;
