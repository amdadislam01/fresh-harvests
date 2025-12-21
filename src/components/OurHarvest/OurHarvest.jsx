import React from "react";
import harvesMan from "../../assets/harverst.png";
import mashroom from "../../assets/Group-2.png";
import logo from "../../assets/Logo.png";
import group1 from "../../assets/Group-1.png";
import group3 from "../../assets/Group 3.png";

const OurHarvest = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16 pb-16">
      <div className="relative shrink-0">
        <div className="absolute left-[80%] top-[20%]">
          <img src={group1} alt="" />
        </div>
        <img
          src={harvesMan}
          alt="Man with vegetables"
          className="relative z-10 w-[680px] h-auto object-contain"
        />
        
        <div className="absolute top-[52%] left-[40%] md:top-[54%] md:left-[60%] bg-white rounded-md px-3 py-1 shadow-md flex items-center gap-2 text-sm font-semibold text-gray-800 z-20">
          <img src={logo} alt="" className="w-6 h-6" />
          Fresh Harvests
        </div>
        <div className="absolute md:bottom-[4%] -bottom-6  right-[12%]  md:right-[12%]  md:w-[130px] bg-white rounded-lg shadow-lg p-3 text-center text-gray-700 text-sm z-20">
        <img src={group3} alt="" className="absolute md:-right-12 md:-top-14 md:w-0 w-8 -right-8 -top-6" />
          <img
            src={mashroom}
            alt="Mushroom"
            className="w-full h-8 md:h-16 object-contain mb-2"
          />
          <div className="font-semibold">Mushroom</div>
          <div className="text-gray-500 text-xs mb-2">$2.3/kg</div>
          <button className="w-full text-xs border border-gray-300 rounded-md py-1 hover:bg-gray-100 transition">
            Add to cart
          </button>
        </div>
      </div>
      <div className="flex flex-col max-w-xl">
        <span className="text-[#749b3f] bg-[#f1f5ec] rounded-md px-3 py-1 text-sm font-semibold w-fit inline-block mb-3 rubik-font">
          About us
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight rubik-font">
          About Fresh Harvest
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </p>

        <button className="self-start border border-orange-500 text-orange-500 px-6 py-2 rounded-md hover:bg-orange-500 hover:text-white transition cursor-pointer">
          Read More
        </button>
      </div>
    </section>
  );
};

export default OurHarvest;
