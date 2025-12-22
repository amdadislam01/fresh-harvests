import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import group1 from "../../assets/Group-1.png";
import group3 from "../../assets/Group 3.png";
import test1 from "../../assets/test-1.png";

const Testimonial = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
      <div className="">
        <img
          src={group1}
          alt=""
          className="absolute right-[2%] md:right-[14%] mt-8 md:mt-22 "
        />
        <img
          src={group1}
          alt=""
          className="absolute left-[2%] md:left-[14%] mt-10 md:mt-16 rotate-60"
        />
        <div className="flex items-center justify-center">
          <h1 className="text-md text-[#749b3f] bg-[#ecf0e6] px-2 py-1.5 w-fit rubik-font rounded-md font-medium">
            Testimonial
          </h1>
        </div>
        <h2 className="text-center text-4xl md:text-[48px] rubik-font font-semibold mt-3">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-600">
          Don't just take our word for it—here's what some of our customers have
          to <br />
          say about their experience with Fresh Harvest:
        </p>
      </div>

      <img
        src={group3}
        alt=""
        className="absolute left-[58%] md:left-[36%] mt-12 -rotate-26"
      />

      <Swiper
      className="testimonial-swiper"
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="md:flex items-center justify-center gap-34 mt-24 ml-4 mb-16 md:mb-30">
            <img src={test1} alt="" />
            <div className="bg-[#f4f6f6] w-[330px] md:w-[643px] rounded-2xl p-4 md:p-12 md:mt-0 mt-6">
              <p className="w-[300px] md:w-[500px] text-md md:text-xl text-gray-600 ">
                "I absolutely love Fresh Harvest! The quality of their produce
                is outstanding. It's always fresh, flavorful, and delicious. The
                convenience of ordering online and having it delivered to my
                doorstep saves me so much time. Fresh Harvest has become my
                go-to for all my fruit and vegetable needs.
              </p>
              <h2 className="mt-6 rubik-font text-md">
                <span className="font-bold">Jane Doe -</span> Professional chef
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex items-center justify-center gap-34 mt-24 ml-4 mb-16 md:mb-30">
            <img src={test1} alt="" />
            <div className="bg-[#f4f6f6] w-[330px] md:w-[643px] rounded-2xl p-4 md:p-12 md:mt-0 mt-6">
              <p className="w-[300px] md:w-[500px] text-md md:text-xl text-gray-600">
                "I absolutely love Fresh Harvest! The quality of their produce
                is outstanding. It's always fresh, flavorful, and delicious. The
                convenience of ordering online and having it delivered to my
                doorstep saves me so much time. Fresh Harvest has become my
                go-to for all my fruit and vegetable needs.
              </p>
              <h2 className="mt-6 rubik-font text-md">
                <span className="font-bold">Jane Doe -</span> Professional chef
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:flex items-center justify-center gap-34 mt-24 ml-4 mb-16 md:mb-30">
            <img src={test1} alt="" />
            <div className="bg-[#f4f6f6] w-[330px] md:w-[643px] rounded-2xl p-4 md:p-12 md:mt-0 mt-6">
              <p className="w-[300px] md:w-[500px] text-md md:text-xl text-gray-600">
                "I absolutely love Fresh Harvest! The quality of their produce
                is outstanding. It's always fresh, flavorful, and delicious. The
                convenience of ordering online and having it delivered to my
                doorstep saves me so much time. Fresh Harvest has become my
                go-to for all my fruit and vegetable needs.
              </p>
              <h2 className="mt-6 rubik-font text-md">
                <span className="font-bold">Jane Doe -</span> Professional chef
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
