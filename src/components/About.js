import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/img/main-logo.png";

const About = () => {
  return (
    <section id="about" className="section bg-dark-silver min-h-[400px] py-16">
      <div className="container mx-auto text-center">
        <h2 className="relative inline-block mb-12 text-4xl font-extrabold font-primary text-primary">
          About Us
        </h2>

        <div className="px-6 mx-auto lg:px-0">
          {/* About the firm section */}
          <div className="p-8 mb-10 text-left transition-all duration-300 transform rounded-lg shadow-lg bg-light-silver hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 mr-4 text-2xl text-white rounded-full">
                <Link
                  to={"home"}
                  smooth={true}
                  offset={-120}
                  spy={true}
                  className="transition-all duration-300 cursor-pointer"
                >
                  <img src={Logo} alt="" width={140} />
                </Link>
              </div>
              <h3 className="text-2xl font-bold text-primary">
                STC Falcon Legal Services
              </h3>
            </div>

            <p className="mb-6 font-semibold leading-relaxed text-justify text-accent-secondary">
              STC Falcon Legal Services is a boutique Paralegal firm led by Mr.
              S T Chelvan (STC). He started as a lawyer in Singapore and now
              practices in Waterdown, Ontario. He is a member of the Law Society
              of Ontario and has over 20 years of experience handling a variety
              of cases.
            </p>

            <p className="font-semibold leading-relaxed text-justify text-accent-secondary">
              His expertise is in personal injury claims, strategic planning,
              and guiding clients with their legal needs. He has a Paralegal
              Diploma from Canada, a Master's in International Business from the
              UK, and legal training from Singapore. He is also a qualified
              Barrister in England and Wales.
            </p>
          </div>

          {/* What We Do section */}
          {/* <div className="p-8 text-left transition-all duration-300 transform rounded-lg shadow-lg bg-light-silver hover:shadow-xl hover:-translate-y-1">
            <h3 className="pb-3 mb-8 text-2xl font-bold border-b text-primary border-accent">
              What We Do
            </h3>

            <div className="space-y-8">
              <div className="about-card-wrapper">
                <div className="about-card-content">
                  <h4 className="flex items-center mb-3 text-xl font-semibold text-accent">
                    <span className="flex items-center justify-center w-8 h-8 mr-3 text-sm text-white rounded-full bg-accent">
                      1
                    </span>
                    Small Claims Court
                  </h4>
                  <p className="font-medium text-justify text-primary pl-11">
                    We assist with recovering unpaid money, handling contract
                    disputes, or dealing with construction and renovation issues
                    in Ontario's Small Claims Court.
                  </p>
                </div>
              </div>

              <div className="about-card-wrapper">
                <div className="about-card-content">
                  <h4 className="flex items-center mb-3 text-xl font-semibold text-accent">
                    <span className="flex items-center justify-center w-8 h-8 mr-3 text-sm text-white rounded-full bg-accent">
                      2
                    </span>
                    Personal Injury Claims
                  </h4>
                  <p className="font-medium text-justify text-primary pl-11">
                    If you're injured in an accident or at work, we help you get
                    money for medical bills, lost wages, and more through
                    accident benefits or workplace insurance claims.
                  </p>
                </div>
              </div>

              <div className="about-card-wrapper">
                <div className="about-card-content">
                  <h4 className="flex items-center mb-3 text-xl font-semibold text-accent">
                    <span className="flex items-center justify-center w-8 h-8 mr-3 text-sm text-white rounded-full bg-accent">
                      3
                    </span>
                    Mediation & Tribunals
                  </h4>
                  <p className="font-medium text-justify text-primary pl-11">
                    We help settle disputes outside court through mediation or
                    by representing you in tribunals. We make legal processes
                    easy to understand, focus on our clients, and work hard to
                    get the best results through litigation, mediation, or
                    tailored support.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
