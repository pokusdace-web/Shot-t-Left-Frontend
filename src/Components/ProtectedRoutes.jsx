import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}
