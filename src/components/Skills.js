import React from "react";

const skills = [
  {
    title: "SMALL CLAIMS COURT REPRESENTATION",
    slug: "small-claims",
    icon: "/skills/scale.png",
    description: [
      "Claims up to $35,000: File or defend claims for unpaid invoices, breach of contract, or non-delivery of goods/services.",
      "End-to-End Support: From drafting claims to trial representation and judgment enforcement.",
      "Why Us? Cost-effective, efficient case management with focused Small Claims Court expertise.",
    ],
    backgroundColor: "#1a2a44",
  },
  {
    title: "CONTRACT DISPUTE RESOLUTION",
    slug: "contract-disputes",
    icon: "/skills/book.png",
    description: [
      "Comprehensive Analysis: Review contracts to identify breaches, ambiguities, or unenforceable terms.",
      "Settlement-Focused: Negotiate practical solutions like payment plans or mediation to avoid litigation.",
      "Court Support: Prepare and file claims in Small Claims Court with robust evidence.",
      "Why Us? Expert guidance within our scope, with referrals to lawyers for complex litigation.",
    ],
    backgroundColor: "#1a2a44",
  },
  {
    title: "CONSTRUCTION DISPUTE RESOLUTION",
    slug: "construction",
    icon: "/skills/crane.png",
    description: [
      "Common Issues: Address project delays, defective workmanship, payment disputes, or regulatory challenges.",
      "Services: Mediation, contract drafting, compliance with Ontario’s Construction Act and Building Code Act, 1992.",
      "Why Us? Specialized knowledge to minimize disruptions and protect your interests.",
    ],
    backgroundColor: "#1a2a44",
  },
  {
    title: "MEDIATION & ALTERNATIVE DISPUTE RESOLUTION (ADR)",
    slug: "mediation",
    icon: "/skills/handshake.png",
    description: [
      "Mediation: Facilitate collaborative agreements through neutral, confidential sessions.",
      "Arbitration Support: Advocate in binding arbitration under Ontario’s Arbitration Act, 1991.",
      "Advisory Services: Strategic guidance for business, family, employment, or real estate disputes.",
      "Why Us? Cost-effective, time-saving, and flexible solutions that preserve relationships.",
    ],
    backgroundColor: "#1a2a44",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="section"
      style={{ backgroundColor: "#d3d3d3" }}
    >
      <div className="container mx-auto text-center">
        <h3 className="font-primary font-extrabold text-2xl lg:text-4xl text-primary mb-4 leading-tight lg:leading-[55px] tracking-tight">
          Our Services
        </h3>
        <p className="max-w-[730px] mx-auto px-6 lg:px-0 mb-16 font-mont text-base lg:text-lg text-accent-secondary font-medium">
          At STC Falcon, Legal Services, we provide comprehensive legal support
          tailored to the needs of small and medium-sized businesses. Our
          services include:
        </p>
        <div className="gap-3 px-5 lg:grid lg:grid-cols-4 lg:px-0">
          {skills.map((item, index) => (
            <div key={index} className="h-full cursor-pointer card-wrapper">
              <div className="flex flex-col justify-between p-6 transition-all duration-300 transform rounded-lg shadow-2xl card-content bg-light-silver hover:shadow-3xl hover:-translate-y-1 hover:scale-100">
                <div className="flex flex-col items-center justify-center space-y-4">
                  {/* Icon - Increased size with adjusted background */}
                  <div
                    className="flex items-center justify-center w-20 h-20 border-2 rounded-full"
                    style={{ backgroundColor: "#2d2d2d" }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="object-contain w-full h-full rounded-full"
                    />
                  </div>
                  {/* Title */}
                  <h4 className="font-bold text-center text-m text-primary font-primary">
                    {item.title}
                  </h4>
                  {/* Description with bullet points */}
                  <div className="flex-grow mt-3 text-left">
                    <ul className="pl-5 space-y-3 list-disc">
                      {item.description.map((point, i) => (
                        <li
                          key={i}
                          className="text-accent-secondary font-medium leading-relaxed text-[13px] font-mont
                   tracking-wide marker:text-accent
                   hover:text-primary transition-colors duration-300"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Show More Button */}
                {/* <div className="mt-4 text-center">
                  <Link to={`/services/${item.slug}`}>
                    <button className="w-full px-4 py-2 mt-4 text-white transition duration-300 ease-in-out rounded-lg bg-accent hover:bg-dark-silver hover:text-black font-elegant">
                      Show More
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
