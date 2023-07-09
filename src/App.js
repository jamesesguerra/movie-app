import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";

import Template from "./pages/Template";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListList from "./pages/ListList";
import ListDetail from "./pages/ListDetail";
import Popular from "./pages/Popular";
import NowShowing from "./pages/NowShowing";
import ComingSoon from "./pages/ComingSoon";
import TopRated from "./pages/TopRated";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";
import listService from "./actions/lists";


const ProtectedRoute = ({ user, setUser }) => {
  if (!user) return <Navigate to="/" replace />;

  return (
    <Template user={user} setUser={setUser}>
      <Outlet />
    </Template>
  );
};

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user);
      listService.setToken(user.token);
    }
  }, []);

  return (
    <div className="App" data-theme="pastel">
      <Routes>
        <Route path='/' element={<Template user={user} />}>
          <Route index element={!user ? <Landing /> : <Navigate to="/home" replace />} />
          <Route path="login" element={!user ? <Login setUser={setUser} /> : <Navigate to='/home' replace />} />
          <Route path="register" element={!user ? <Register setUser={setUser} /> : <Navigate to='/home' replace />} />
        </Route>
        <Route element={<ProtectedRoute user={user} setUser={setUser} />}>
          <Route path='home' element={<Home />} />
          <Route path='lists' element={<ListList user={user} />} />
          <Route path='lists/:listId' element={<ListDetail />} />
          <Route path='popular' element={<Popular />} />
          <Route path='now-showing' element={<NowShowing />} />
          <Route path='coming-soon' element={<ComingSoon />} />
          <Route path='top-rated' element={<TopRated />} />
          <Route path='movies/:movieId' element={<MovieDetail />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
