import React from "react";
import emailjs from "@emailjs/browser";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import ServicePage from "./components/ServicePage";
// import { WhyChooseUs } from "./components/WhyChooseUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

emailjs.init("mkcOv0bBdNkJf32ey");

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SEO
                  title="STC Falcon Legal Services | Top Legal Service in Hamilton, ON"
                  description="Trusted Legal Services in Hamilton, ON. We specialize in Personal Injury, WSIB, Contract Disputes, and more. Contact us for a consultation."
                />
                <Banner />
                <Skills />
                {/* <WhyChooseUs /> */}
                <About />
                <Contact />
                <Footer />
              </div>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
