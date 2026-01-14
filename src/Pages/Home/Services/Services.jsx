import React from "react";
import service from "../../../assets/service.png";
const Services = () => {
  return (
    <div className="bg-secondary max-w-7xl mx-auto rounded-4xl">
      <div className="py-25">
        <div className=" max-w-4xl flex flex-col items-center mx-auto space-y-2.5 py-8">
          <h3 className="font-bold text-3xl text-primary-content">
            Our Services
          </h3>
          <p className=" text-primary-content text-center">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center max-w-6xl mx-auto">
          <div className="card hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            {/* circle + image wrapper */}
            <div className="relative flex justify-center pt-6">
              <div className="h-22 w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>

              {/* image */}
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl">
                Express & Standard Delivery
              </h2>
              <p className="text-accent-content">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>
          <div className="card hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            {/* circle + image wrapper */}
            <div className="relative flex justify-center pt-6">
              <div className="h-22 w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>

              {/* image */}
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl">
                Nationwide Delivery
              </h2>
              <p className="text-accent-content">
                We deliver parcels nationwide with home delivery in every
                district, ensuring your products reach customers within 48–72
                hours.
              </p>
            </div>
          </div>
          <div className="card hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            {/* circle + image wrapper */}
            <div className="relative flex justify-center pt-6">
              <div className="h-22 w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>

              {/* image */}
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl">
                Fulfillment Solution
              </h2>
              <p className="text-accent-content">
                We also offer customized service with inventory management
                support, online order processing, packaging, and after sales
                support.
              </p>
            </div>
          </div>
          <div className="card hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            {/* circle + image wrapper */}
            <div className="relative flex justify-center pt-6">
              <div className="h-22 w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>

              {/* image */}
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl">
                Cash on Home Delivery
              </h2>
              <p className="text-accent-content">
                100% cash on delivery anywhere in Bangladesh with guaranteed
                safety of your product.
              </p>
            </div>
          </div>
          <div className="card hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            {/* circle + image wrapper */}
            <div className="relative flex justify-center pt-6">
              <div className="h-22 w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>

              {/* image */}
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl">
                Corporate Service / Contract In Logistics
              </h2>
              <p className="text-accent-content">
                Customized corporate services which includes warehouse and
                inventory management support.
              </p>
            </div>
          </div>
          <div className="card hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            {/* circle + image wrapper */}
            <div className="relative flex justify-center pt-6">
              <div className="h-22 w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>

              {/* image */}
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl">
                Parcel Return
              </h2>
              <p className="text-accent-content">
                Through our reverse logistics facility we allow end customers to
                return or exchange their products with online business
                merchants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
