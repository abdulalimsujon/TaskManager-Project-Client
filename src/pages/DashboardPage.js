import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';

const Dashboard = lazy(()=>import('../Dashboard/Dashboard'))


const DashboardPage = () => {
    return (
        <Fragment>
        <MasterLayout>
            <Suspense fallback={LazyLoader}>
                <Dashboard></Dashboard>

            </Suspense>
        </MasterLayout>
    </Fragment>
    );
};

export default DashboardPage;