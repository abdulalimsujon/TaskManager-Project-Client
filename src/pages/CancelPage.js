import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const Cancel = lazy(()=>import('../components/cancel/Cancel'))


const CancelPage = () => {
    return (
        <Fragment>
        <MasterLayout>
            <Suspense fallback={<LazyLoader></LazyLoader>}>

            <Cancel></Cancel>

            </Suspense>
         
        </MasterLayout>
    </Fragment>
    );
};

export default CancelPage;