import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import routes from '../../pages/routes';

const router = createBrowserRouter([
  {
    children: routes,
  },
]);

function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

export default RouterProvider;
