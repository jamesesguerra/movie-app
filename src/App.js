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
    <div className="App" data-theme='light'>
      <Routes>
        <Route path='/' element={<Template user={user} />}>
          <Route index element={!user ? <Landing /> : <Navigate to="/home" replace />} />
        </Route>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
