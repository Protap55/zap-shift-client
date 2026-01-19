import React from "react";
import Logo from "../Components/Logo/Logo";

import authImage from "../../../assets/authImage.png";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between bg-base-100">
        <div className="flex flex-col">
          <div>
            <Logo></Logo>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
        <div className="border-2 bg-info">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
