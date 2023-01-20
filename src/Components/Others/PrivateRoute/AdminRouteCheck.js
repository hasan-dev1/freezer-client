import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PageLoaderSpinner from '../../Pages/Spinner/PageLoaderSpinner';
import { AuthContex } from '../AuthProvider/AuthProvider';
import useUserRole from '../useHooks/useHooks';

const AdminRouteCheck = ({children}) => {
     const { user } = useContext(AuthContex);
     const checkUserrole = useUserRole(user?.email);

     if (checkUserrole[1]) {
       return <PageLoaderSpinner></PageLoaderSpinner>;
     }

     if (checkUserrole[0]?.userrole !== "admin") {
       return <Navigate to={"/err"}></Navigate>;
     }

     return children;
};

export default AdminRouteCheck;