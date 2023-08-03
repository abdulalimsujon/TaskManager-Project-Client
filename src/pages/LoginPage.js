import React, { lazy } from 'react';
const Login = lazy(()=>import('../components/Login/Login'))
const LoginPage = () => {
    return (
        <div>
            <Login></Login>
        </div>
    );
};

export default LoginPage;