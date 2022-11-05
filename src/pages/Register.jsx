import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import userService from "../actions/users";


const Register = ({ setUser }) => {
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
        const newUser = await userService.create(values);
        setUser(newUser);
      } catch (err) {
        console.error(err);
        if (err.response.data.error === "This email is already associated with an account.") {
          setErrorMsg("This email is already associated with an account.");
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
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left max-w-2xl mr-8">
          <h1 className="text-5xl font-bold">Join lorem for free</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;