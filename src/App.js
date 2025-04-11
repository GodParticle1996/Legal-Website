import React from "react";
import emailjs from "@emailjs/browser";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import ServicePage from "./components/ServicePage";
import Testimonials from "./components/Testimonials";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

emailjs.init("mkcOv0bBdNkJf32ey");

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Banner />
              <Skills />
              <WhyChooseUs />
              <Contact />
              <Testimonials />
              <Footer />
            </div>
          }
        />
        <Route path="/services/:serviceSlug" element={<ServicePage />} />
      </Routes>
    </Router>
  );
};

export default App;
