import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../../../assets/banner/banner1.png";
import Banner2 from "../../../assets/banner/banner2.png";
import Banner3 from "../../../assets/banner/banner3.png";
import { GoArrowUpRight } from "react-icons/go";
const Banner = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} interval={10000}>
        <div className="relative">
          <img src={Banner1} />
          <div className="absolute bottom-10 left-22 flex gap-4">
            <div>
              <button className="btn px-8 py-4 bg-primary rounded-4xl btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                Track Your Parcel
              </button>
              <button className="btn px-4 py-4 bg-[black] rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                <GoArrowUpRight color="#caeb66" />
              </button>
            </div>

            <button className="btn px-8 py-4  rounded-xl btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
              Be A Rider
            </button>
          </div>
        </div>
        <div>
          <img src={Banner2} />
        </div>
        <div>
          <img src={Banner3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
