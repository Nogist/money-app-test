import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRoutesProps {
  isLogged: boolean;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ isLogged }) => {
  return isLogged ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
