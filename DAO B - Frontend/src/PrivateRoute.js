import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    const {isAuthenticated} = useSelector(state=>state.auth);
    // console.log(user)
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page

    if (isAuthenticated) {
        console.log(isAuthenticated)
        return <Outlet />;
    }
    return <Navigate replace to="/auth/login" />;
}

export default PrivateRoute;