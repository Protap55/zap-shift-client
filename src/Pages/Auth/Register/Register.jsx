import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location reg", location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data.photo[0]);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        // 1. store the image in from data
        const formData = new FormData();
        formData.append("image", profileImg);

        // 2. send the image to store and get the url
        const imageAPI_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        axios.post(imageAPI_URL, formData).then((res) => {
          console.log("After image upload", res.data.data.url);

          // update profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };

          updateUserProfile(userProfile)
            .then((result) => {
              console.log(result);
              navigate(location?.state || "/");
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="shadow-2xl p-10 rounded-2xl">
      <div className="text-center text-black py-4">
        <h3 className="text-start text-4xl font-bold">Create an Account</h3>
        <p className="text-start">Register with ZapShift</p>
      </div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset w-[300px]">
          {/* photo-image */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", {
              required: true,
              maxLength: 30,
              minLength: 8,
            })}
            className="file-input"
            placeholder="Your photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-700">Photo is required.</p>
          )}
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", {
              required: true,
              maxLength: 30,
              minLength: 8,
            })}
            className="input"
            placeholder="Your name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-700">Name is required.</p>
          )}
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              maxLength: 30,
              minLength: 8,
            })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-700">Email is required.</p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            })}
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
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account?
          <Link
            state={location?.state || "/"}
            className="text-primary font-bold"
            to="/login"
          >
            Register
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
