import React from "react";
import { Link } from "react-router-dom";

const skills = [
  {
    title: "Small Claims Court",
    slug: "small-claims",
    icon: "/skills/scale.png",
    description: [
      "Representing your business in claims up to $35,000, the current limit for Small Claims Court in Ontario.",
      "Assisting with the recovery of unpaid invoices, outstanding debts, or compensation for incomplete payments.",
      "Defending your business against unjustified claims, including those related to breach of contract, property damage, or non-delivery of goods and services.",
    ],
    backgroundColor: "#1a2a44",
  },
  {
    title: "Contract Dispute Resolution",
    slug: "contract-disputes",
    icon: "skills/book.png",
    description: [
      "Analyzing contracts to identify breaches, ambiguities, or areas of concern.",
      "Providing skilled representation in court if litigation becomes unavoidable.",
      "Negotiating settlements to resolve disputes amicably and avoid costly litigation.",
    ],
    backgroundColor: "#1a2a44",
  },
  {
    title: "Construction Issues",
    slug: "construction",
    icon: "/skills/crane.png",
    description: [
      "Resolving disputes related to project delays, defective workmanship, or disagreements over the scope of work.",
      "Offering guidance and representation to protect your interests in construction or renovation conflicts.",
      "Ensuring compliance with Ontario’s construction and renovation regulations to prevent legal complications.",
    ],
    backgroundColor: "#1a2a44",
  },
  {
    title: "Mediation & Alternative Dispute Resolution",
    slug: "mediation",
    icon: "skills/handshake.png",
    description: [
      "Facilitating dispute resolution through mediation or tribunal representation to save time and costs.",
      "Helping parties reach mutually agreeable solutions outside the courtroom.",
      "Providing expert guidance to ensure fair and efficient outcomes in alternative dispute resolution processes.",
    ],
    backgroundColor: "#1a2a44",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-10 section"
      style={{ backgroundColor: "#d3d3d3" }}
    >
      <div className="container mx-auto text-center">
        <h3 className="font-primary font-extrabold text-2xl lg:text-3xl text-primary mb-4 leading-tight lg:leading-[55px] tracking-tight">
          Our Services
        </h3>
        <p className="max-w-[730px] mx-auto px-6 lg:px-0 mb-16 font-mont text-base lg:text-lg text-accent-secondary font-medium">
          At STC Falcon, Legal Services, we provide comprehensive legal support
          tailored to the needs of small and medium-sized businesses. Our
          services include:
        </p>
        <div className="gap-3 px-5 lg:grid lg:grid-cols-4 lg:px-0">
          {skills.map((item, index) => (
            <div key={index} className="h-full card-wrapper">
              <div className="flex flex-col justify-between p-6 transition-all duration-300 transform rounded-lg shadow-2xl card-content bg-light-silver hover:shadow-3xl hover:-translate-y-1 hover:scale-100">
                <div className="flex flex-col items-center justify-center space-y-4">
                  {/* Icon - Increased size with adjusted background */}
                  <div
                    className="flex items-center justify-center w-20 h-20 rounded-full"
                    style={{ backgroundColor: "#2d2d2d" }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="object-contain w-full h-full rounded-full"
                    />
                  </div>
                  {/* Title */}
                  <h4 className="text-xl font-bold text-center text-primary font-primary">
                    {item.title}
                  </h4>
                  {/* Description with bullet points */}
                  <div className="flex-grow mt-3 text-left">
                    <ul className="pl-5 space-y-2 list-disc text-accent-secondary">
                      {item.description.map((point, i) => (
                        <li
                          key={i}
                          className="font-medium leading-relaxed text-md font-cyber"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Show More Button */}
                <div className="mt-4 text-center">
                  <Link to={`/services/${item.slug}`}>
                    <button className="w-full px-4 py-2 mt-4 text-white transition duration-300 ease-in-out rounded-lg bg-accent hover:bg-dark-silver hover:text-black font-elegant">
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
