import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

    const username = localStorage.getItem('username');

    if (!username) return <Navigate to="/login" />;
    return <Outlet />;
};

export default PrivateRoute;