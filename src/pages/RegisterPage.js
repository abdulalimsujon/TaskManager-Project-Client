import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const Register = lazy(()=>import('../components/Register/Register.js'))


const RegisterPage = () => {
    return (
        <Fragment>
        <MasterLayout>
            <Suspense fallback={<LazyLoader></LazyLoader>}>

           <Register></Register>

            </Suspense>
         
        </MasterLayout>
    </Fragment>
    );
};

export default RegisterPage;