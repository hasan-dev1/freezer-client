import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../AuthProvider/AuthProvider';
import PageLoaderSpinner from "../../Pages/Spinner/PageLoaderSpinner"

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContex)
    const location = useLocation()

    if(loading){
        return <PageLoaderSpinner></PageLoaderSpinner>
    }

    if(!user?.uid){
        return <Navigate to={'/login'} state={{ from:location }} replace ></Navigate>
    }

    return children
};

export default PrivateRoute;