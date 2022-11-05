import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import loginService from "../actions/login";


const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async() => {
    try {
      const user = await loginService.login({
        email, password
      });
      console.log(user);
      setUser(user);
      setEmail("");
      setPassword("");
    } catch (err) {
      setIsInvalid(true);
      console.error(err);
    }
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
              {isInvalid && (
                <div className="text-center bg-red-200 mt-4 py-4">
                  <p className="text-rose-900">Email or password is incorrect.</p>
                </div>
              )}
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