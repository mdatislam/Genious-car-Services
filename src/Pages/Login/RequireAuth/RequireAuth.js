import React from 'react';
import { useAuthState, useLocation } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from './../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user]= useAuthState(auth)
    const location = useLocation()
    if(!user){
        return <Navigate to ='/Login' state={{from:location}} replace/>
    }
    return children;
};

export default RequireAuth;