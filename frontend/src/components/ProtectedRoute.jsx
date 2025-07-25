import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user, role, loading } = useContext(AuthContext);

  if (loading) return <div className="text-center p-4">Loading...</div>;

  if (!user || role !== 'admin') {
  return <Navigate to="/admin-login" replace />;
}


  return children;
};

export default ProtectedRoute;
