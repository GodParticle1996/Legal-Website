import React, { useState } from "react";
// import { social } from "../data";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showNotification = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_cmyu5pw",
        "template_e6lzovs",
        {
          to_email: "stcfalcon.ls@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "mkcOv0bBdNkJf32ey"
      )
      .then(() => {
        showNotification("Message sent successfully!", "success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        showNotification("Failed to send message. Please try again.", "error");
        console.error("Error sending email:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {showToast && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50
          ${toastType === "success" ? "bg-green-500" : "bg-red-500"}
          transform transition-all duration-500 ease-in-out
          ${
            showToast
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
          hover:scale-105`}
        >
          <div className="flex items-center">
            <span className="font-medium text-white">{toastMessage}</span>
          </div>
        </div>
      )}

      <section id="contact" className="section bg-dark-silver min-h-[732px]">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-4xl font-extrabold font-primary text-primary">
            Contact us
          </h2>

          {/* New contact information section */}
          <div className="max-w-[650px] mx-auto px-6 lg:px-0 mb-[64px]">
            <p className="mb-8 font-semibold text-justify text-accent-secondary">
              As licensed paralegals, we can represent you in claims against
              individuals or businesses. Whether you're initiating a claim with
              a Plaintiff's Claim or defending against one, we provide
              comprehensive support — from filing the necessary documents to
              representing you through trial and judgment enforcement.
            </p>

            <div className="p-8 text-left rounded-lg shadow-lg bg-light-silver">
              <p className="mb-6 font-medium text-primary">
                For further inquiries or to schedule your initial consultation,
                please contact:
              </p>

              <div className="space-y-3 text-primary">
                <p className="text-xl font-bold">S.T. Chelvan</p>
                <p className="font-semibold">STC Falcon Legal Services</p>
                <p>
                  Website:{" "}
                  <a
                    href="https://stcfalcon.ca"
                    className="transition-colors duration-300 text-accent hover:text-accent-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    stcfalcon.ca
                  </a>
                </p>
              </div>

              <p className="mt-6 italic font-medium text-primary">
                We look forward to assisting you in resolving your small claims
                court disputes and ensuring your business thrives without
                unnecessary legal burdens.
              </p>
            </div>
          </div>

          {/* Form section */}
          <div className="bg-light-silver p-8 rounded-lg shadow-lg max-w-[650px] mx-auto mb-[40px]">
            <h3 className="mb-6 text-2xl font-bold text-primary">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex-1">
                  <input
                    className="w-full p-3 text-sm transition-all duration-300 bg-white border border-gray-200 rounded-md outline-none font-body text-gray focus:border-accent-hover focus:ring-1 focus:ring-accent-hover"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="w-full p-3 text-sm transition-all duration-300 bg-white border border-gray-200 rounded-md outline-none font-body text-gray focus:border-accent-hover focus:ring-1 focus:ring-accent-hover"
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <textarea
                className="w-full p-3 text-sm rounded-md outline-none font-body text-gray 
                         bg-white border border-gray-200 min-h-[150px]
                         transition-all duration-300
                         focus:border-accent-hover focus:ring-1 focus:ring-accent-hover"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center w-full p-4 text-sm font-semibold 
                         tracking-wide text-white uppercase rounded-md font-body
                         bg-accent hover:bg-accent-hover 
                         transition-all duration-300
                         disabled:opacity-70 disabled:cursor-not-allowed
                         transform hover:scale-[1.02]"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Social links */}
          {/* <div className="flex items-center justify-between max-w-[205px] mx-auto">
            {social.map((item, index) => (
              <a href="home" key={index}>
                <img src={item.icon} alt="" />
              </a>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Contact;
