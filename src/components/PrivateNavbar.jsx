import { Link } from "react-router-dom"

const PrivateNavbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-0">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a></a></li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>My Lists</Link>
            </li>
            <li>
              <Link>Now Showing</Link>
            </li>
            <li>
              <Link>Upcoming</Link>
            </li>
            <li>
              <Link>Popular</Link>
            </li>
            <li>
              <Link>Top-Rated</Link>
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
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
    </div>
  )
}

export default PrivateNavbar