import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
      const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = (data) => {
            console.log(data); // Handle login logic here
      };

      return (
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="col-md-6 col-lg-4 px-24 py-40 border rounded-16 shadow bg-white">
                        <h3 className="mb-36 text-center">Login</h3>

                        <div className="mb-28">
                              <label htmlFor="username" className="form-label">
                                    Username or Email Address <span className="text-danger">*</span>
                              </label>
                              <input
                                    type="text"
                                    id="username"
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                    placeholder="Enter username or email"
                                    {...register("username", { required: "Username or email is required" })}
                              />
                              {errors.username && <div className="invalid-feedback text-danger">{errors.username.message}</div>}
                        </div>

                        <div className="mb-28">
                              <label htmlFor="password" className="form-label">
                                    Password <span className="text-danger">*</span>
                              </label>
                              <input
                                    type="password"
                                    id="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Enter password"
                                    {...register("password", { required: "Password is required" })}
                              />
                              {errors.password && <div className="invalid-feedback text-danger">{errors.password.message}</div>}
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-32">
                              <div className="form-check">
                                    <input
                                          type="checkbox"
                                          id="remember"
                                          className="form-check-input"
                                          {...register("remember")}
                                    />
                                    <label className="form-check-label" htmlFor="remember">
                                          Remember me
                                    </label>
                              </div>
                              <Link to="/forgot-password" className="text-danger text-decoration-none">
                                    Forgot your password?
                              </Link>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mb-18">
                              Log In
                        </button>
                        <Link to='/signup' >
                              Don't have an account?{" "}
                              <span className="text-danger">Sign up</span>
                        </Link>
                  </form>
            </div>
      );
};

export default Login;
