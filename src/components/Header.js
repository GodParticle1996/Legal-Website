import React from "react";
import { Nav } from "./Nav";
import { Link } from "react-scroll";
import { NavMobile } from "./NavMobile";
import Logo from "../assets/img/main-logo.png";

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
        bg && " bg-light-silver shadow-md py-1"
      } pt-1 px-3 lg:px-0 w-full fixed z-20 transition-all duration-300`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <div>
          <Link
            to={"home"}
            smooth={true}
            offset={-120}
            spy={true}
            className="transition-all duration-300 cursor-pointer"
          >
            <img src={Logo} alt="" width={200} />
          </Link>
          <div className="flex items-center justify-center text-sm font-extrabold leading-tight align-middle font-primary lg:text-sm text-primary">
            Your Trusted Legal Partner
          </div>
        </div>
        <Nav />
        <NavMobile />
      </div>
    </header>
  );
};
