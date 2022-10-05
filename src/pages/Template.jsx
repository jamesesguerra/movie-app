import React from 'react'
import { Outlet } from 'react-router-dom';

import PublicNavbar from '../components/PublicNavbar'
import PrivateNavbar from '../components/PrivateNavbar';
import Footer from '../components/Footer';

const Template= ({ user }) => {
  return (
    <>  
      {!user ? <PublicNavbar /> : <PrivateNavbar />}
      <Outlet />
      <Footer />
    </>
  )
}

export default Template