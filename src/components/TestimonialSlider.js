import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../data";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ dynamicBullets: true, clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const { text, name, image, position } = item;
          return (
            <SwiperSlide key={index}>
              <div className="relative lg:mt-[34px] before:content-quote p-8">
                <div>
                  <p>{text}</p>
                  <div className="flex items-center mt-[18px] mb-8">
                    {" "}
                    {/* Added flex and spacing */}
                    <img
                      src={image}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />{" "}
                    {/* Added image styling */}
                    <div className="ml-4">
                      {" "}
                      {/* Space between image and text */}
                      <h3 className="font-semibold">{name}</h3>{" "}
                      {/* Assuming you want a name here */}
                      <p className="text-gray-500">{position}</p>{" "}
                      {/* Assuming you want a position here */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
