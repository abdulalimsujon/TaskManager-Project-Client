import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const Progress = lazy(()=>import('../components/Progress/Progress.js'))

const ProgressPage = () => {
    return (
        <Fragment>
        <MasterLayout>
            <Suspense fallback={<LazyLoader></LazyLoader>}>

         <Progress></Progress>
            </Suspense>
         
        </MasterLayout>
    </Fragment>
    );
};

export default ProgressPage;