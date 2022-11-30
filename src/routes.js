import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';

import AdminDashboard from './components/AdminDashboard/adminDashboard';
import Users from './components/Users/Users';
import Login from './components/SignIn/Login';
import ProductsPage from './pages/ProductsPage';
import Main from "./components/SignIn/Main"
import BlogPage from './pages/BlogPage';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <AdminDashboard /> },
        { path: 'user', element: <Users/> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <Main/>,
    },

    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
