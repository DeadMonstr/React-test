import React from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom"
import {useAuth} from "../../hooks/useAuth";


const RequireAuth = ({allowedRules}) => {

    const {isAuth,role,token} = useAuth()

    const location = useLocation()

    return (
        isAuth && allowedRules.includes(role) && token
            ? <Outlet />
            : token
                ? <Navigate to="/login" state={{ from: location }} replace />
                : <Navigate to="/register" state={{ from: location }} replace />
    );

}

export default RequireAuth
