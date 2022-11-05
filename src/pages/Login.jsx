import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import loginService from "../actions/login";


const Login = ({ setUser }) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(8, "Must be at least 8 characters").required("Required")
    }),
    onSubmit: async(values) => {
      try {
        const user = await loginService.login(values);
        setUser(user);
      } catch (err) {
        console.error(err);
        setIsInvalid(true);
      }
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid h-screen place-items-center">
      <div>
        <div className="card w-full w-96 shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={formik.handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered required:border-red-500"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="pt-2 text-xs text-rose-500">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="pt-2 text-xs text-rose-500">{formik.errors.password}</p>
              ) : null}
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
              <button
                className="btn btn-primary"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;