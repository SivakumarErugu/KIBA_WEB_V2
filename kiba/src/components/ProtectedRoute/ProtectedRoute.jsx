import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';

const ProtectedRoute = () => {
    const cookies = new Cookies();

    const JWTToken = cookies.get("KIBAJWTToken");

    return JWTToken ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
