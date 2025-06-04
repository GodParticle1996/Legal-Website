import React from "react";
import { whyChooseUs } from "../data";

export const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-dark-silver">
      <div className="container mx-auto text-center">
        <h3 className="font-primary font-extrabold text-2xl lg:text-4xl text-primary mb-8 px-4 leading-tight lg:leading-[55px] tracking-tight">
          Why Choose STC Falcon Legal Services?
        </h3>

        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-0">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 rounded-lg shadow-lg bg-light-silver hover:shadow-xl hover:-translate-y-1"
            >
              <h4 className="mb-4 text-xl font-bold text-primary font-primary">
                {item.title}
              </h4>
              <p className="font-medium text-m text-accent-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
