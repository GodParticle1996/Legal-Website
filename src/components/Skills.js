import React from "react";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="section bg-[#f8f3eca1] pb-32">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-2xl font-extrabold font-primary">
          What we do
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-16">
          STC Falcon Legal Solutions offers a variety of legal services to help
          individuals and businesses navigate complex legal matters effectively.
        </p>

        <div className="gap-12 lg:grid lg:grid-cols-3">
          {skills.map((item, index) => (
            <div
              className="flex flex-col items-center justify-center p-6 mb-16 last:mb-0 lg:mb-0 shadow-lg rounded-2xl bg-white hover:shadow-xl transition duration-300"
              key={index}
            >
              <div className="mb-6">{item.icon}</div>
              <h4 className="mb-2 text-2xl font-bold font-primary">
                {item.title}
              </h4>
              <p className="max-w-[332px] lg:max-w-[350px] text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
