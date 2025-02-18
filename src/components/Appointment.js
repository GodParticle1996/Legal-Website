import React, { useState, useEffect } from "react";

export const Appointment = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto ${
        isMounted ? "animate-fadeIn" : ""
      }`}
    >
      <h3 className="text-white text-[28px] font-bold tracking-[0.3px] text-center">
        Book Free Consultation
      </h3>
      <div className="w-[50%] h-[3px] bg-white my-3 mx-auto"></div>
      <div className="space-y-[24px]">
        <input
          className="transition-all duration-300 form-control focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Your Name"
          type="text"
        />
        <input
          className="transition-all duration-300 form-control focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Phone Number"
          type="text"
        />
        <input
          className="transition-all duration-300 form-control focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Email Address"
          type="email"
        />
        <textarea
          className="resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm text-gray transition-all duration-300 focus:ring-1 focus:ring-primary"
          placeholder="Your Message"
        ></textarea>
        <button className="transition-all duration-300 btn bg-primary hover:bg-primary-hover hover:text-white">
          Send message
        </button>
      </div>
    </div>
  );
};
