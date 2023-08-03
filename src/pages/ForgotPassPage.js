import React, { Fragment, Suspense } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
import ForgetPass from '../components/ForgetPass/ForgetPass';

const ForgotPassPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback ={LazyLoader}>

               <ForgetPass></ForgetPass>

                </Suspense>
               
            </MasterLayout>
        </Fragment>
    );
};

export default ForgotPassPage;