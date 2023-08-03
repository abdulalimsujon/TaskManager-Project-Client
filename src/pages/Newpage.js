import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const New = lazy(()=>import('../components/new/New.js'))


const Newpage = () => {
    return (
        <Fragment >
            <MasterLayout>

                <Suspense fallback ={LazyLoader}>
                <New></New>
             

                </Suspense>
               
            </MasterLayout>
        </Fragment>
    );
};

export default Newpage;