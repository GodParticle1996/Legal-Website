import React from "react";
import { Link } from "react-router-dom";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="section bg-[#f8f3eca1] py-10">
      <div className="container mx-auto text-center">
        <h3 className="font-primary font-extrabold text-2xl lg:text-3xl text-primary mb-4 leading-tight lg:leading-[55px] tracking-tight">
          Our Services
        </h3>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-16">
          STC Falcon Legal Services offers a variety of legal services to help
          individuals and businesses navigate complex legal matters effectively.
        </p>
        <div className="gap-12 lg:grid lg:grid-cols-3">
          {skills.map((item, index) => (
            <div key={index} className="h-full card-wrapper">
              <div className="flex flex-col justify-between card-content">
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
                {/* Show More Button */}
                <div className="mt-4 text-center">
                  <Link to={`/services/${item.slug}`}>
                    <button className="px-4 py-2 mt-4 text-white transition duration-300 ease-in-out rounded-lg bg-accent hover:bg-accent-hover">
                      Show More
                    </button>
                  </Link>
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
