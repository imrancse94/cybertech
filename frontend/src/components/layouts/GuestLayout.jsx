import React, { Suspense} from 'react';
import loginOffice from '@/assets/img/login-office.jpeg'
import loginOfficeDark from '@/assets/img/login-office-dark.jpeg'
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '@/components/include/Loader';
import useAuth from '@/hooks/useAuth';

const Component = () => (<div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
  <div
    className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800"
  >
    <div className="flex flex-col overflow-y-auto md:flex-row">
      <div className="h-32 md:h-auto md:w-1/2">
        <img
          aria-hidden="true"
          className="object-cover w-full h-full dark:hidden"
          src={loginOffice}
          alt="Office"
        />
        <img
          aria-hidden="true"
          className="hidden object-cover w-full h-full dark:block"
          src={loginOfficeDark}
          alt="Office"
        />
      </div>
      <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  </div>
</div>)



const GuestLayout = () => {

  const {auth} = useAuth()

  return auth?.access_token ? <Navigate to="/dashboard"/> : <Component />
}

export default GuestLayout;
