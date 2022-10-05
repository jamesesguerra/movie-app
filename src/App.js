import { useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';

import Template from './pages/Template';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ListList from './pages/ListList';
import Popular from './pages/Popular';
import NowShowing from './pages/NowShowing';
import ComingSoon from './pages/ComingSoon';
import TopRated from './pages/TopRated';
import NotFound from './pages/NotFound';

const ProtectedRoute = ({ user, children }) => {
  if (!user) return <Navigate to="/" replace />

  return (
    <Template user={user}>
      <Outlet />
    </Template>
  )
}

function App() {
  const [user, setUser] = useState('j')

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
          <Route path='lists' element={<ListList />} />
          <Route path='popular' element={<Popular />} />
          <Route path='now-showing' element={<NowShowing />} />
          <Route path='coming-soon' element={<ComingSoon />} />
          <Route path='top-rated' element={<TopRated />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
