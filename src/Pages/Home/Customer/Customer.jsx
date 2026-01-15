import React from "react";
import merchent from "../../../assets/location-merchant.png";
import sticker from "../../../assets/be-a-merchant-bg.png";

const Customer = () => {
  return (
    <div className="relative bg-secondary text-primary-content rounded-4xl shadow-sm p-6 md:p-25 lg:p-25">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="space-y-5 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>

          <p className="text-sm md:text-base">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary text-black rounded-3xl font-bold">
              Become a Merchant
            </button>

            <button className="btn bg-secondary text-primary border-2 border-primary rounded-3xl font-bold">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={merchent}
            alt="Merchant"
            className="w-64 md:w-80 lg:w-full max-w-md"
          />
        </div>
      </div>

      {/* Sticker */}
      <div className="absolute top-0 left-0 hidden md:block lg:block">
        <img src={sticker} alt="sticker" className="  " />
      </div>
    </div>
  );
};

export default Customer;
