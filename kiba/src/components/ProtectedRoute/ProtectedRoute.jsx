import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = () => {
    const JWTToken = Cookies.get("KIBAJWTToken");

    return JWTToken ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
