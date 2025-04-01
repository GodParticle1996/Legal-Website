import React from "react";
import { useParams } from "react-router-dom";
import { skills } from "../data";

const ServicePage = () => {
  const { serviceSlug } = useParams();
  const service = skills.find((item) => item.slug === serviceSlug);

  if (!service) {
    return (
      <div className="py-10 text-center text-primary">Service not found.</div>
    );
  }

  return (
    <div className="container px-6 py-10 mx-auto bg-dark-silver">
      <div className="max-w-3xl p-6 mx-auto rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-6xl text-primary">{service.icon}</div>
          <h2 className="text-2xl font-bold text-primary">{service.title}</h2>
          <p className="text-justify text-gray">{service.description}</p>
          <a
            href="/"
            className="px-4 py-2 mt-4 text-white transition duration-300 ease-in-out rounded-lg bg-accent hover:bg-accent-hover"
          >
            Back to Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
