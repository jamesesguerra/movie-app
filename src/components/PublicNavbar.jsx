import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 drop-shadow-md">
      <div className="w-[72rem] mx-auto">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Log-in</a></li>
              <li><a>Register</a></li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Pellicola</Link>
        </div>
        <div className="flex-2 mr-2">
          <Link className="btn btn-ghost" to="/login">Log-in</Link>
        </div>
        <div className="flex-2">
          <Link className="btn" to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default PublicNavbar;
