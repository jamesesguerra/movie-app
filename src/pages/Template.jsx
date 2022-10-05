import React from 'react'
import { Outlet } from 'react-router-dom';

import PublicNavbar from '../components/PublicNavbar'
import PrivateNavbar from '../components/PrivateNavbar';
import Footer from '../components/Footer';

const Template= ({ user, setUser }) => {
  return (
    <>  
      {!user ? <PublicNavbar /> : <PrivateNavbar user={user} setUser={setUser} />}
      <Outlet />
      <Footer />
    </>
  )
}

export default Template