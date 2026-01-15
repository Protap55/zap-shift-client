import React from "react";
import customer from "../../../assets/customer-top.png";

const CustomerPoster = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center gap-6">
      {/* Image */}
      <figure>
        <img
          src={customer}
          alt="customer"
          className="w-40 sm:w-52 md:w-64 lg:w-72 mx-auto"
        />
      </figure>

      {/* Text */}
      <div className="space-y-3 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
          What our customers are sayings
        </h2>

        <p className="text-sm sm:text-base md:text-xl">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
    </div>
  );
};

export default CustomerPoster;
