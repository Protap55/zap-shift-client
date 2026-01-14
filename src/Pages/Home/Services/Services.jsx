import React from "react";
import service from "../../../assets/service.png";
const Services = () => {
  return (
    <div className="bg-secondary max-w-7xl mx-auto rounded-4xl">
      <div className="py-12 sm:py-16 lg:py-25">
        {/* header */}
        <div className="max-w-4xl flex flex-col items-center mx-auto space-y-2.5 py-8 px-4">
          <h3 className="font-bold text-2xl sm:text-3xl text-primary-content">
            Our Services
          </h3>
          <p className="text-primary-content text-center">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                 gap-6 lg:gap-8
                 place-content-center
                 max-w-6xl mx-auto
                 px-4 sm:px-6 lg:px-0"
        >
          {/* card 1 */}
          <div className="card group hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            <div className="relative flex justify-center pt-6">
              <div className="h-18 w-18 sm:h-22 sm:w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-10 w-10 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl group-hover:text-primary-content">
                Express & Standard Delivery
              </h2>
              <p className="text-accent-content group-hover:text-primary-content">
                We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                Sylhet, Khulna, and Rajshahi. Express delivery available in
                Dhaka within 4–6 hours from pick-up to drop-off.
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="card group hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            <div className="relative flex justify-center pt-6">
              <div className="h-18 w-18 sm:h-22 sm:w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-10 w-10 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl group-hover:text-primary-content">
                Nationwide Delivery
              </h2>
              <p className="text-accent-content group-hover:text-primary-content">
                We deliver parcels nationwide with home delivery in every
                district, ensuring your products reach customers within 48–72
                hours.
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="card group hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            <div className="relative flex justify-center pt-6">
              <div className="h-18 w-18 sm:h-22 sm:w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-10 w-10 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl group-hover:text-primary-content">
                Fulfillment Solution
              </h2>
              <p className="text-accent-content group-hover:text-primary-content">
                We also offer customized service with inventory management
                support, online order processing, packaging, and after sales
                support.
              </p>
            </div>
          </div>

          {/* card 4 */}
          <div className="card group hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            <div className="relative flex justify-center pt-6">
              <div className="h-18 w-18 sm:h-22 sm:w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-10 w-10 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl group-hover:text-primary-content">
                Cash on Home Delivery
              </h2>
              <p className="text-accent-content group-hover:text-primary-content">
                100% cash on delivery anywhere in Bangladesh with guaranteed
                safety of your product.
              </p>
            </div>
          </div>

          {/* card 5 */}
          <div className="card group hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            <div className="relative flex justify-center pt-6">
              <div className="h-18 w-18 sm:h-22 sm:w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-10 w-10 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl group-hover:text-primary-content">
                Corporate Service / Contract In Logistics
              </h2>
              <p className="text-accent-content group-hover:text-primary-content">
                Customized corporate services which includes warehouse and
                inventory management support.
              </p>
            </div>
          </div>

          {/* card 6 */}
          <div className="card group hover:bg-primary transition-colors duration-1000 bg-base-100 shadow-sm rounded-4xl relative">
            <div className="relative flex justify-center pt-6">
              <div className="h-18 w-18 sm:h-22 sm:w-22 rounded-full bg-gradient-to-t from-[#fcfcff] via-[#f5f5fd] to-[#f0f0fc]"></div>
              <img
                src={service}
                alt="service"
                className="absolute top-1/2 left-1/2 h-10 w-10 sm:h-12 sm:w-12 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-secondary font-bold text-xl group-hover:text-primary-content">
                Parcel Return
              </h2>
              <p className="text-accent-content group-hover:text-primary-content">
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
