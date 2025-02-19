import React from "react";
import { Nav } from "./Nav";
import { NavMobile } from "./NavMobile";
import Logo from "../assets/img/header-logo.png";

export const Header = () => {
  const [bg, setBg] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1 ? setBg(true) : setBg(false);
    });
  }, []);

  return (
    <header
      className={`${
        bg && " bg-white shadow-md py-2"
      } p-8 lg:px-0 w-full fixed z-20 transition-all duration-300`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <a href="home">
          <img src={Logo} alt="" width={120} />
        </a>
        <Nav />
        <NavMobile />
      </div>
    </header>
  );
};
