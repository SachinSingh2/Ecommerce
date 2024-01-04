import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from './NavRelated/NavBar';
import Footer from './Footer';

export default function PrivateRoute({ isUserAuth, hideNavFooter}) {
    return isUserAuth ? (
        <>
          {!hideNavFooter && <NavBar />}
          <Outlet />
          {!hideNavFooter && <Footer />}
        </>
      ) : (
        <Navigate replace to='/login' />
      );
}
