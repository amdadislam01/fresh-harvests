import React from "react";
import Bg from "../../assets/Bg.png";
import Bg1 from "../../assets/Bg-1.png";
import Mask from "../../assets/Mask-group.png";
import leaf1 from "../../assets/leaf.png";
import leaf2 from "../../assets/Group-1.png";
import hero from "../../assets/hero.png";
import arow from "../../assets/arow.png";
import SpecialOffer from "../../assets/Special Offer.png";
import downlode from "../../assets/Download App_.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={Bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        <div className="absolute top-0 right-0 h-full w-1/4 z-20">
          <img
            src={Bg1}
            alt="Bg1"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <img
            src={Mask}
            alt="Mask"
            className="absolute inset-0 w-full h-full object-cover z-30"
          />
        </div>
        <img
          src={leaf1}
          alt=""
          className="absolute top-30  z-20 hidden md:block"
        />
        <img
          src={leaf2}
          alt=""
          className="absolute top-30 right-1/4 -translate-x-50 z-20"
        />
        <img
          src={leaf2}
          alt=""
          className="absolute top-200 hidden md:block md:left-[13%] md:w-24 z-20"
        />
        <img
          src={hero}
          alt=""
          className="absolute bottom-0 -right-10 md:right-0  z-30 md:w-130 lg:w-160  w-100"
        />
        <div className="absolute z-30 top-25 md:top-60 left-5 md:left-10 lg:left-70">
          <p className="bg-[#749B3F1A] text-[#749B3F] w-fit px-2 py-1.5 font-semibold text-[16px] md:text-[16px] rubik-font rounded-md">
            Welcome to Fresh Harvest
          </p>
          <h1 className="text-[#212337] text-5xl  md:text-7xl font-medium md:w-150 mt-5 rubik-font">
            Fresh Fruits and Vegetables
          </h1>
          <p className="text-[#4A4A52] md:w-130 mt-5 text-[12px] md:text-[16px]">
            At Fresh Harvests, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </p>
          <div className="relative w-fit">
            <Link to={'/shop'} className="btn font-bold mt-5 px-5 py-3 bg-[#FF6A1A] text-white rounded-lg hover:bg-[#fc6412] cursor-pointer">
              Shop Now
            </Link>
          </div>
          <div className="flex">
            <div className="ml-20 md:ml-10 lg:ml-20 mr-10 md:mr-5 lg:mr-6 hidden md:block">
              <img src={arow} alt="" className="" />
            </div>
            <img
              src={SpecialOffer}
              alt=""
              className="md:size-5/12 lg:size-8/12 size-4/12 mt-8 md:mt-0 ml-5"
            />
          </div>
          <div className="mt-40 md:mt-10 ">
            <img src={downlode} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
