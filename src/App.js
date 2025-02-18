import React from "react";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import ServicePage from "./components/ServicePage";
import Testimonials from "./components/Testimonials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
