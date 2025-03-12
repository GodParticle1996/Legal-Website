import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="about" className=" bg-blue h-[346px] lg:pb-[120px]">
      <div className="container flex items-center justify-center h-full mx-auto">
        <div className="w-full mx-auto lg:mx-0 lg:max-w-[570px]">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
