import React, { useState, useEffect } from "react";

export const Appointment = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto ${
        isMounted ? "animate-fade-in" : ""
      }`}
    >
      <h3 className="text-white text-[28px] font-bold tracking-[0.3px] text-center">
        Book Free Consultation
      </h3>
      <div className="w-[50%] h-[3px] bg-white my-3 mx-auto"></div>
      <div className="space-y-[24px]">
        <input
          className="w-full p-3 transition-all duration-300 border border-gray-300 rounded-md outline-none focus:border-accent-hover focus:ring-1 focus:ring-accent-hover"
          placeholder="Your Name"
          type="text"
        />
        <input
          className="w-full p-3 transition-all duration-300 border border-gray-300 rounded-md outline-none focus:border-accent-hover focus:ring-1 focus:ring-accent-hover"
          placeholder="Phone Number"
          type="text"
        />
        <input
          className="w-full p-3 transition-all duration-300 border border-gray-300 rounded-md outline-none focus:border-accent-hover focus:ring-1 focus:ring-accent-hover"
          placeholder="Email Address"
          type="email"
        />
        <textarea
          className="w-full resize-none h-[132px] rounded-sm p-4 border border-gray-300 focus:ring-1 focus:border-accent-hover outline-none transition-all duration-300"
          placeholder="Your Message"
        ></textarea>
        <button className="w-full p-3 text-white transition-all duration-300 rounded-md bg-primary hover:bg-primary-hover">
          Send Message
        </button>
      </div>
    </div>
  );
};
