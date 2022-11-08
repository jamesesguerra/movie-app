import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import listService from "../actions/lists";
import loginService from "../actions/login";


const Login = ({ setUser }) => {
  const [errorMsg, setErrorMsg] = useState("");

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
        listService.setToken(user.token);
      } catch (err) {
        console.error(err);
        if (err.response.data.error === "invalid email or password") {
          setErrorMsg("Email or password is incorrect.");
        } else {
          setErrorMsg("An error occured.");
        }
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
            </div>
            {errorMsg && (
              <div className="text-center bg-red-200 mt-4 py-4 px-2">
                <p className="text-rose-900">{errorMsg}</p>
              </div>
            )}
            <label className="label">
              <p className="label-text-alt">Don't have an account? <Link to="/register" className="link link-hover link-secondary">Sign up here</Link></p>
            </label>
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