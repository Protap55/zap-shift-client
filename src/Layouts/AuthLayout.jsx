import React from "react";
import Logo from "../Components/Logo/Logo";

import authImage from "../../../assets/authImage.png";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="flex justify-between bg-base-100 min-h-screen">
        <div className="flex flex-col flex-1  px-10">
          <div>
            <Logo></Logo>
          </div>
          <div className="p-4 flex-1 flex flex-col items-center justify-center">
            <Outlet></Outlet>
          </div>
        </div>
        <div className=" flex-1 bg-info">
          <img
            src={authImage}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
