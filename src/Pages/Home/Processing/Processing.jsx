import React from "react";
import Tracking from "../../../assets/live-tracking.png";
import Delivery from "../../../assets/safe-delivery.png";
import Deliver from "../../../assets/safe-delivery.png";

const Processing = () => {
  const items = [
    {
      title: "Live Parcel Tracking",
      logo: Tracking,
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      title: "100% Safe Delivery",
      logo: Delivery,
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      title: "24/7 Call Center Support",
      logo: Deliver,
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto py-20">
      {items.map((item, index) => (
        <div key={index} className="card bg-base-100 shadow-sm rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <figure className="flex w-52 h-34 items-center justify-center">
              <img
                src={item.logo}
                alt={item.title}
                className="w-full h-full object-center"
              />
            </figure>

            <div className="hidden lg:block h-20 border-r-2 border-dotted"></div>

            <div>
              <h2 className="font-bold text-secondary text-3xl mb-2">
                {item.title}
              </h2>
              <p className="text-accent-content text-lg">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Processing;
