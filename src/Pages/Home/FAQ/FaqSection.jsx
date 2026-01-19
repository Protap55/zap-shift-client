import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const FaqSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto pb-8 sm:pb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mt-3 text-base-content">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        <div className="collapse collapse-plus bg-base-100 border border-neutral">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-base sm:text-lg font-semibold text-secondary">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm sm:text-base lg:text-lg text-base-content">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging proper posture
            throughout the day.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-neutral">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-base sm:text-lg font-semibold text-secondary">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm sm:text-base lg:text-lg text-base-content">
            Yes, it’s generally suitable for most ages and body types.
            Adjustable straps make it flexible and comfortable for daily use.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-neutral">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-base sm:text-lg font-semibold text-secondary">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm sm:text-base lg:text-lg text-base-content">
            When used consistently, it helps improve posture awareness and may
            reduce mild to moderate back pain caused by poor posture.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-neutral">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-base sm:text-lg font-semibold text-secondary">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm sm:text-base lg:text-lg text-base-content">
            This model focuses on physical posture support. It does not include
            smart features like vibration alerts.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-neutral">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-base sm:text-lg font-semibold text-secondary">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm sm:text-base lg:text-lg text-base-content">
            You’ll receive a notification via email or SMS based on the contact
            information you provided while signing up for the restock alert.
          </div>
        </div>
      </div>

      <div className="text-center py-5">
        <button className="btn px-8 py-4 bg-primary rounded-2xl btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ">
          Track Your Parcel
        </button>
        <button className="btn px-4 py-4 bg-[black] rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          <GoArrowUpRight color="#caeb66" />
        </button>
      </div>
    </div>
  );
};

export default FaqSection;
