import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const Complete = lazy(()=>import('../components/Complete/Complete'))

const CompletePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback ={LazyLoader}>

                <Complete></Complete>

                </Suspense>
               
            </MasterLayout>
        </Fragment>
    );
};

export default CompletePage;