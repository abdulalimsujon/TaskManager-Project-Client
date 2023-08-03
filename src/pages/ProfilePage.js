import React, { Fragment, Suspense, lazy } from 'react';
import MasterLayout from '../components/masterLayout/MasterLayout';
import LazyLoader from '../components/masterLayout/LazyLoader';
const Profile = lazy(()=>import('../components/Profile/Profile'))

const ProfilePage = () => {
    return (
        <Fragment>
        <MasterLayout>
            <Suspense fallback={<LazyLoader></LazyLoader>}>
         <Profile></Profile>
            

            </Suspense>
         
        </MasterLayout>
    </Fragment>
    );
};

export default ProfilePage;