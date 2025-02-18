import React from "react";
import { Header } from "./Header";
import { Appointment } from "./Appointment";
import {
  FaUserShield,
  FaDollarSign,
  FaCheckCircle,
  FaBalanceScale,
} from "react-icons/fa";
import LawyerImage from "../assets/img/lawyer_banner.png";

export const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac] pb-10"
    >
      <Header />
      <div className="container h-full pt-40 mx-auto lg:flex">
        <div className="h-full flex-[30] px-8 mx-auto text-center lg:text-left md:p-0">
          <h1 className="font-primary font-extrabold text-5xl lg:text-5xl text-primary mb-4 leading-tight lg:leading-[55px] tracking-tight">
            Ready to protect your rights in Small Claims Court? <br />{" "}
            <span className="text-accent">Let's make it happen.</span>
          </h1>
          <p className="max-w-sm mx-auto font-semibold mb-[30px] lg:mx-0 lg:max-w-[95%] text-gray-800 text-lg leading-tight">
            Trust{" "}
            <span className="text-accent-hover">STC Falcon Legal Services</span>{" "}
            for skilled paralegal representation in{" "}
            <span className="text-accent-hover">Small Claims Court</span>{" "}
            matters. With a commitment to resolving your legal concerns
            effectively, we are here to guide you every step of the way. Contact
            us today to ensure your case is handled with expertise and care.
          </p>
          <div className="max-w-sm mx-auto lg:mx-0 lg:max-w-[540px] space-y-4">
            <div className="flex items-center gap-4 text-lg font-medium text-gray-800">
              <FaCheckCircle className="text-2xl text-accent" />
              <div>
                <span className="font-semibold text-accent">
                  Free Case Review:
                </span>
                <p className="text-base font-semibold">
                  Get expert insights on your case at no cost.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-lg font-medium text-gray-800">
              <FaBalanceScale className="text-2xl text-accent" />
              <div>
                <span className="font-semibold text-accent">
                  Experienced Paralegal Support:
                </span>
                <p className="text-base font-semibold">
                  Focused exclusively on Small Claims Court matters.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-lg font-medium text-gray-800">
              <FaDollarSign className="text-2xl text-accent" />
              <div>
                <span className="font-semibold text-accent">
                  Transparent Pricing:
                </span>
                <p className="text-base font-semibold">
                  Fixed costs, no hidden fees.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-lg font-medium text-gray-800">
              <FaUserShield className="text-2xl text-accent" />
              <div>
                <span className="font-semibold text-accent">
                  Dedicated Guidance:
                </span>
                <p className="text-base font-semibold">
                  Step-by-step legal assistance tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:relative flex flex-[70] mx-auto max-w-[445px] lg:mx-0">
          <Appointment />
        </div>
      </div>
    </section>
  );
};
