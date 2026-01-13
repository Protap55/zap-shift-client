import React from "react";
import { FaTruckFast } from "react-icons/fa6";

const Works = () => {
  return (
    <div className="max-w-6xl mx-auto text-4xl font-bold text-secondary space-y-5">
      <h3>How it Works</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-5 max-w-6xl mx-auto ">
        <div className="card  bg-base-100 card-xl shadow-sm rounded-3xl text-secondary">
          <div className="card-body px-10 py-6 space-y-3">
            <div>
              <FaTruckFast size={80} />
            </div>
            <h2 className="card-title text-[16px] font-bold">
              Booking Pick & Drop
            </h2>
            <p className="text-accent-content  text-[16px]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 card-xl shadow-sm rounded-3xl text-secondary">
          <div className="card-body px-10 py-6 space-y-3">
            <div>
              <FaTruckFast size={80} />
            </div>
            <h2 className="card-title text-[16px] font-bold">
              Cash On Delivery
            </h2>
            <p className="text-accent-content text-[16px]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 card-xl shadow-sm rounded-3xl text-secondary">
          <div className="card-body px-10 py-6 space-y-3">
            <div>
              <FaTruckFast size={80} />
            </div>
            <h2 className="card-title text-[16px] font-bold">Delivery Hub</h2>
            <p className="text-accent-content text-[16px]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 card-xl shadow-sm rounded-3xl text-secondary">
          <div className="card-body  px-10 py-6 space-y-3">
            <div>
              <FaTruckFast size={80} />
            </div>
            <h2 className="card-title text-[16px]  font-bold">
              Booking SME & Corporate
            </h2>
            <p className="text-accent-content text-[16px]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
