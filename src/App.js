import { useState } from 'react';
import {
  Routes,
  Route,
  Link,
  Navigate,
  Outlet
} from 'react-router-dom';

import Template from './pages/Template';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'

const ProtectedRoute = ({ user, children }) => {
  if (!user) return <Navigate to="/" replace />

  return (
    <Template user={user}>
      <Outlet />
    </Template>
  )
}

function App() {
  const [user, setUser] = useState(false)

  return (
    <div className="App" data-theme='garden'>
      <Routes>
        <Route path='/' element={<Template user={user} />}>
          <Route index element={!user ? <Landing /> : <Navigate to="/home" replace />} />
          <Route path="login" element={!user ? <Login /> : <Navigate to='/home' replace />} />
          <Route path="register" element={!user ? <Register /> : <Navigate to='/home' replace />} />
        </Route>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
