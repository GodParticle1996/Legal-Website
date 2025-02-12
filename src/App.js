import React from "react";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Banner } from "./components/Banner";
import Testimonials from "./components/Testimonials";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
