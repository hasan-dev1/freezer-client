import React, { useContext } from "react";
import PageLoaderSpinner from "../../Pages/Spinner/PageLoaderSpinner";
import { AuthContex } from '../AuthProvider/AuthProvider';
import { Navigate } from "react-router-dom";

import useUserRole from "../useHooks/useHooks";

const SellerRouteCheck = ({children}) => {
    const {user} = useContext(AuthContex);
    const checkUserrole = useUserRole(user?.email)

    if(checkUserrole[1]){
        return <PageLoaderSpinner></PageLoaderSpinner>
    }

    if(checkUserrole[0]?.userrole !== 'seller'){
        return <Navigate to={'/err'}></Navigate>
    }

    return children;
};

export default SellerRouteCheck;