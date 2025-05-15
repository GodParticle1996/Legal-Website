import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Appointment } from "./Appointment";
import {
  FaUserShield,
  FaDollarSign,
  FaCheckCircle,
  FaBalanceScale,
} from "react-icons/fa";

export const Banner = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const text = "Your Trusted Paralegal Partner in Ontario";
  const words = text.split(" ");

  useEffect(() => {
    if (visibleWords < words.length) {
      const timer = setTimeout(() => {
        setVisibleWords((prev) => prev + 1);
      }, 800); // Delay between adding words

      return () => clearTimeout(timer);
    } else if (!isFlashing) {
      setIsFlashing(true);

      const flashTimer = setTimeout(() => {
        setIsFlashing(false);
        setVisibleWords(0);
      }, 2000); // Flash duration before restart

      return () => clearTimeout(flashTimer);
    }
  }, [visibleWords, isFlashing, words.length]);

  return (
    <section
      id="home"
      className="pb-10 lg:h-full lg:max-h-800 bg-gradient-to-b from-light-silver to-dark-silver"
    >
      <Header />
      <div className="container h-full pt-40 mx-auto lg:flex">
        <div className="h-full flex-[30] px-8 mx-auto text-center lg:text-left md:p-0">
          <h1 className="font-primary font-extrabold text-4xl lg:text-4xl text-primary mb-4 leading-tight lg:leading-[55px] tracking-tight">
            Discover STC Falcon Legal Services <br />{" "}
            <span className="inline-block h-[50px] overflow-hidden">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-2 ${
                    index < visibleWords ? "animate-word-appear" : "opacity-0"
                  } ${
                    isFlashing && index < visibleWords
                      ? "animate-word-flash"
                      : ""
                  }`}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
          <style>
            {`
              @keyframes wordAppear {
                0% { transform: translateY(20px) scale(0.9); opacity: 0; }
                100% { transform: translateY(0) scale(1); opacity: 1; }
              }
              
              @keyframes wordFlash {
                0% { color: red; }
                50% { color: orange; }
                100% { color: red; }
              }
              
              .animate-word-appear {
                animation: wordAppear 0.6s ease-out forwards;
              }
              
              .animate-word-flash {
                animation: wordFlash 0.5s ease-in-out infinite;
              }
            `}
          </style>
          <p className="max-w-sm mx-auto font-semibold mb-[30px] lg:mx-0 lg:max-w-[95%] text-gray-800 text-lg leading-tight">
            <span className="text-accent-hover">STC Falcon Legal Services</span>
            , led by <span className="text-accent-hover">S.T. Chelvan</span>, is
            pleased to offer our expertise in assisting{" "}
            <span className="text-accent-hover">Small & Medium</span> business
            with <span className="text-accent-hover">Small Claims Court</span>{" "}
            disputes.
          </p>
          <p className="max-w-sm mx-auto font-semibold mb-[30px] lg:mx-0 lg:max-w-[95%] text-gray-800 text-lg leading-tight">
            Our firm is committed to providing client-focused support,
            simplifying the legal process, and delivering favourable outcomes
            through litigation, mediation, and tailored representation. Contact
            us to ensure your case is handled with care.
          </p>

          <div className="max-w-sm mx-auto lg:mx-0 lg:max-w-[540px] space-y-4 sm:mb-2 md:mb-0">
            <div className="flex flex-col items-center gap-4 text-lg font-medium text-gray-800 md:flex-row">
              <FaCheckCircle className="text-2xl text-primary" />
              <div>
                <span className="font-bold text-primary">
                  Free Case Review:
                </span>
                <p className="text-base font-semibold text-accent-secondary">
                  Get expert insights on your case at no cost.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-lg font-medium text-gray-800 md:flex-row">
              <FaBalanceScale className="text-2xl text-primary" />
              <div>
                <span className="font-bold text-primary">
                  Experienced Paralegal Support:
                </span>
                <p className="text-base font-semibold text-accent-secondary">
                  Focused exclusively on Small Claims Court matters.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-lg font-medium text-gray-800 md:flex-row">
              <FaDollarSign className="text-2xl text-primary" />
              <div>
                <span className="font-bold text-primary">
                  Transparent Pricing:
                </span>
                <p className="text-base font-semibold text-accent-secondary">
                  Fixed costs, no hidden fees.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 text-lg font-medium text-gray-800 md:flex-row">
              <FaUserShield className="text-2xl text-primary" />
              <div>
                <span className="font-bold text-primary">
                  Dedicated Guidance:
                </span>
                <p className="text-base font-semibold text-accent-secondary">
                  Step-by-step legal assistance tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:relative flex flex-[70] mx-auto max-w-[445px] lg:mx-0 mt-10 lg:mt-0">
          <Appointment />
        </div>
      </div>
    </section>
  );
};
