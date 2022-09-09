import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
 
const RouteGuard = () => {
    const auth = localStorage.getItem("token") ? true : false;
 
    return (
       auth ? < Outlet /> : <Navigate to='/login'/> 
    );
};
 
export default RouteGuard;