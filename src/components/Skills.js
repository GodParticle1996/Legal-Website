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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          voluptatibus officiis ratione eum quas ullam quos impedit a
          praesentium voluptates.
        </p>

        <div className="gap-12 lg:grid lg:grid-cols-3">
          {skills.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div
                className="flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0"
                key={index}
              >
                <img className="mb-6" src={icon} alt="" />
                <h4 className="mb-2 text-2xl font-bold font-primary">
                  {title}
                </h4>
                <p className="max-w-[332px] lg:max-w-[350px]">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
