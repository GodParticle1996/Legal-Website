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
            <div key={index} className="h-full card-wrapper">
              <div className="card-content">
                <div className="flex flex-col items-center justify-center space-y-4">
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-accent"
                    style={{ backgroundColor: item.backgroundColor }}
                  >
                    {item.icon}
                  </div>
                  {/* Title */}
                  <h4 className="text-xl font-bold text-center font-primary">
                    {item.title}
                  </h4>
                  {/* Description */}
                  <div className="mt-3">
                    <p className="max-w-[332px] lg:max-w-[350px] text-gray-700 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
