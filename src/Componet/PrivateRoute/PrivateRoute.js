import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const location=useLocation();
    const {user}=useAuth();
    console.log(user);
    if(!user.email){
        return <Navigate to='/login' state={{path: location.pathname}}/>       
    }
    return children
};

export default PrivateRoute;