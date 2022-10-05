import { Link } from "react-router-dom"

const PrivateNavbar = ({ user, setUser }) => {

  const handleLogout = () => {
    setUser('');
  }

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-0">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/lists'>My Lists</Link>
            </li>
            <li>
              <Link to='/popular'>Popular</Link>
            </li>
            <li>
              <Link to='/now-showing'>Now Showing</Link>
            </li>
            <li>
              <Link to='/coming-soon'>Coming Soon</Link>
            </li>
            <li>
              <Link to='/top-rated'>Top-Rated</Link>
            </li>
            <hr className="my-2 h-px bg-slate-300 border-0" />
            <li>
              <Link to='/' onClick={handleLogout}>Sign out</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Link to="/home" className="btn btn-ghost normal-case text-xl">private</Link>
      </div>
      <div className="form-control mr-4">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
    </div>
  )
}

export default PrivateNavbar