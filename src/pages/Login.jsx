import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e) => {
    // setUser("james");
    e.preventDefault();
    console.log("logging in as: ", email, password);
  };

  return (
    <div className="grid h-screen place-items-center">
      <div>
        <div className="card w-full w-96 shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <p className="label-text-alt">Don't have an account? <Link to="/register" className="link link-hover link-secondary">Sign up here</Link></p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleLogin}>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;