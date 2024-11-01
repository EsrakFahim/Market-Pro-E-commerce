import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
      const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = (data) => {
            console.log(data); // Handle registration logic here
      };

      return (
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="col-md-6 col-lg-5 px-24 py-40 border rounded-16 shadow bg-white">
                        <h4 className="mb-36 text-center">Register</h4>

                        <div className="mb-28">
                              <label htmlFor="usernameTwo" className="form-label">
                                    Username <span className="text-danger">*</span>
                              </label>
                              <input
                                    type="text"
                                    id="usernameTwo"
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                    placeholder="Write a username"
                                    {...register("username", { required: "Username is required" })}
                              />
                              {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
                        </div>

                        <div className="mb-28">
                              <label htmlFor="emailTwo" className="form-label">
                                    Email Address <span className="text-danger">*</span>
                              </label>
                              <input
                                    type="email"
                                    id="emailTwo"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="Enter Email Address"
                                    {...register("email", { required: "Email is required" })}
                              />
                              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                        </div>

                        <div className="mb-28">
                              <label htmlFor="enter-password" className="form-label">
                                    Password <span className="text-danger">*</span>
                              </label>
                              <div className="position-relative">
                                    <input
                                          type="password"
                                          id="enter-password"
                                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                          placeholder="Enter Password"
                                          {...register("password", { required: "Password is required" })}
                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                    <span
                                          className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                                    >
                                          {/* Add eye icon for toggle visibility if needed */}
                                    </span>
                              </div>
                        </div>

                        <div className="mt-18 mb-18">
                              <p className="text-muted size-14">
                                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our {" "}
                                    <Link to="privacy-policy" className="text-decoration-underline text-primary">
                                          {" "}privacy policy
                                    </Link>.
                              </p>
                        </div>

                        <div className="d-grid">
                              <button type="submit" className="btn btn-primary w-100 mb-18">
                                    Register
                              </button>
                        </div>

                        <Link to="/login" className="d-block text-center mt-3">

                              Already have an account?{" "}
                              <span className="text-primary">Login</span>
                        </Link>
                  </form>
            </div>
      );
};

export default Register;
