import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const Appointment = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

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
          phone: formData.phone,
          message: formData.message,
        },
        "mkcOv0bBdNkJf32ey"
      )
      .then(() => {
        showNotification("Message sent successfully", "success");
        setFormData({ name: "", phone: "", email: "", message: "" });
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

      <form
        onSubmit={handleSubmit}
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
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 transition-all duration-300 border border-gray-300 rounded-md outline-none focus:border-accent-hover focus:ring-1 focus:ring-accent-hover"
            placeholder="Phone Number"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 transition-all duration-300 border border-gray-300 rounded-md outline-none focus:border-accent-hover focus:ring-1 focus:ring-accent-hover"
            placeholder="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full resize-none h-[132px] rounded-sm p-4 border border-gray-300 focus:ring-1 focus:border-accent-hover outline-none transition-all duration-300"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center w-full p-3 text-white transition-all duration-300 rounded-md bg-blue hover:bg-blueLight disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </>
  );
};
