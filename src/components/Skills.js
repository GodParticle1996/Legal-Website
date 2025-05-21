import React from "react";

const skills = [
  {
    title: "Our Small Claims Court Services",
    slug: "small-claims",
    icon: "/skills/scale.png",
    description: [
      "File or Defend Claims: We manage claims up to $35,000, covering issues like unpaid invoices, contract breaches, or non-delivered goods/services.",
      "Comprehensive Support: From drafting and filing claims to representing you in court and enforcing judgments, we guide you every step of the way.",
      "Why Choose Us: Cost-effective solutions tailored to your needs. Streamlined case management for quick results. Focused expertise in Small Claims Court matters.",
    ],
    backgroundColor: "#1a2a44",
  },
  {
    title: "Resolve Your Contract Disputes with STC Falcon Legal Services",
    slug: "contract-disputes",
    icon: "/skills/book.png",
    description: [
      "Comprehensive Contract Analysis: We thoroughly review contracts to identify breaches, ambiguities, or unenforceable terms, empowering you with clear insights.",
      "Settlement-Focused Solutions: Save time and money with practical resolutions like payment plans or mediation to avoid costly litigation.",
      "Small Claims Court Support: When escalation is needed, we prepare and file claims with strong evidence to support your case.",
      "Expert Guidance & Referrals: Get professional support within our scope, plus trusted referrals to skilled lawyers for complex litigation.",
    ],
    backgroundColor: "#1a2a44",
  },
  {
    title: "Resolve Construction Disputes with Confidence!",
    slug: "construction",
    icon: "/skills/crane.png",
    description: [
      "Mediation Support: Fair, efficient resolutions for disputes over delays, workmanship, or payments.",
      "Contract Drafting: Clear, customized contracts to prevent conflicts.",
      "Regulatory Compliance: Expert guidance on Ontario’s Construction Act and Building Code Act, 1992.",
    ],
    backgroundColor: "#1a2a44",
  },
  {
    title: "Our Mediation & Dispute Resolution Services (ADR)",
    slug: "mediation",
    icon: "/skills/handshake.png",
    description: [
      "Mediation: We act as a neutral guide, bringing you and the other party together in private, confidential sessions. Our goal is to help you reach a fair agreement that works for everyone, without the stress of a courtroom.",
      "Arbitration Support: If your dispute needs a binding decision, we will represent you in arbitration, using our expertise in Ontario’s Arbitration Act, 1991, to ensure your case is presented strongly and resolved decisively.",
      "Expert Guidance: Whether it is a business, family, employment, or real estate issue, we provide clear, practical advice tailored to your situation. We’ll help you understand your options and choose the best path forward.",
      "Why Choose Us: Our services are affordable, efficient, and designed to save you time while keeping relationships intact. We focus on flexible solutions that fit your needs and help you move forward with confidence.",
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
          At STC Falcon Legal Services, we provide comprehensive legal support
          tailored to the needs of small and medium-sized businesses. Our
          services include:
        </p>
        {/* Stack cards in a single column for full-width display */}
        <div className="grid grid-cols-1 gap-6 px-5 lg:px-0">
          {skills.map((item, index) => (
            <div key={index} className="w-full cursor-pointer card-wrapper">
              <div className="flex flex-col justify-between p-6 transition-all duration-300 transform rounded-lg shadow-2xl card-content bg-light-silver hover:shadow-3xl hover:-translate-y-1 hover:scale-100">
                <div className="flex flex-col items-center justify-center space-y-4">
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
                  <h2 className="font-bold text-center text-m text-primary font-primary">
                    {item.title}
                  </h2>
                  <div className="flex-grow mt-3 text-left w-[100%]">
                    <ul className="pl-5 space-y-3 list-disc">
                      {item.description.map((point, i) => {
                        const [label, ...rest] = point.split(": ");
                        return (
                          <li
                            key={i}
                            className="text-accent-secondary font-medium leading-relaxed text-[13px] font-mont tracking-wide marker:text-accent hover:text-primary transition-colors duration-300"
                          >
                            <strong>{label}:</strong> {rest.join(": ")}
                          </li>
                        );
                      })}
                    </ul>
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
