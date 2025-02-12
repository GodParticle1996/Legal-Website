import React from "react";
import { social } from "../data";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section bg-primary text-white mih-h-[732px]"
    >
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-5xl font-extrabold font-primary">
          Contact us
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          reiclendis nenum minima pariatur placeat corporis suscipit consectetur
          aperiam expedita exercitationem.
        </p>
        <form className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]">
          <input className="form-control" placeholder="Your Name" type="text" />
          <input
            className="form-control"
            placeholder="Email Address"
            type="email"
          />
          <textarea className="textarea" placeholder="Message"></textarea>
          <button className="transition-all btn bg-accent hover:bg-accent-hover">
            Send message
          </button>
        </form>

        <div className="flex items-center justify-between max-w-[205px] mx-auto">
          {social.map((item, index) => {
            return (
              <a href="#" key={index}>
                <img src={item.icon} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
