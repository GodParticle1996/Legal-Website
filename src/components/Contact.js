import React, { useState } from "react";
import { social } from "../data";
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

      <section
        id="contact"
        className="section bg-primary text-white mih-h-[732px]"
      >
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-5xl font-extrabold font-primary">
            Contact us
          </h2>
          <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px] text-justify">
            As licensed paralegals, we can represent you in claims up to $35,000
            against individuals or businesses. Whether you're initiating a claim
            with a Plaintiff's Claim or defending against one, we provide
            comprehensive support — from filing the necessary documents to
            representing you through trial and judgment enforcement.
          </p>

          <form
            onSubmit={handleSubmit}
            className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]"
          >
            <input
              className="form-control"
              placeholder="Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="form-control"
              placeholder="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="textarea"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center transition-all btn bg-accent hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
              ) : (
                "Send message"
              )}
            </button>
          </form>

          <div className="flex items-center justify-between max-w-[205px] mx-auto">
            {social.map((item, index) => (
              <a href="#" key={index}>
                <img src={item.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
