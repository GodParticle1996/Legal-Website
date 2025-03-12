import React from "react";
import { Nav } from "./Nav";
import { Link } from "react-scroll";
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
        bg && " bg-blue shadow-md py-2"
      } pt-3 lg:px-0 w-full fixed z-20 transition-all duration-300`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link
          to={"home"}
          smooth={true}
          offset={-120}
          spy={true}
          className="transition-all duration-300 cursor-pointer"
        >
          <img src={Logo} alt="" width={100} />
        </Link>
        <Nav />
        <NavMobile />
      </div>
    </header>
  );
};
