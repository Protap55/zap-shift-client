import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="shadow-2xl p-10 rounded-2xl">
      <div className="text-center text-black py-4 ">
        <h3 className="text-start text-4xl font-bold">Welcome Back</h3>
        <p className="text-start">Login with ZapShift</p>
      </div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset w-[300px]">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true, maxLength: 30 })}
            className="input w-[full]"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, maxLength: 30 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}

          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be at least 6 digit or longer.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must be 6 characters and include uppercase, lowercase,
              number & special character.
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary mt-4 text-black">Login</button>
        </fieldset>
        <p>
          Don’t have any account?
          <Link className="text-primary font-bold" to="/register">
            Register
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
