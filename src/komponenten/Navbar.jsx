import { useState, useEffect } from "react";
import "../styles/navbar.css";
import Logo from "./svgs/Logo";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [hidden, setHidden] = useState(true);

  const handleToggle = () => {
    setTimeout(() => {
      setHidden((prev) => !prev);
    }, 500);
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  }, []);

  const vhToPixels = (vh) => {
    return Math.round((window.innerHeight * vh) / 100);
  };

  return (
    <nav
      style={{ zIndex: 70 }}
      className={` w-full fixed flex justify-center text-white items-center duration-500 px-4 py-8 font-poppins ${
        scroll > vhToPixels(60) || scroll < 100
          ? "translate-y-[0]"
          : "translate-y-[-220px] "
      } ${scroll > 100 ? "bg-black" : ""}`}
    >
      <div className="absolute left-4 sm:left-8">
        <Logo />
      </div>
      <div id="letter-m"></div>
      <div className="sm:flex hidden ">
        <ul className="flex items-center text-lg">
          <li className="cursor-pointer mx-4 rounded-md">
            <a href="#about-me" className="rounded-md">
              Über mich
            </a>
          </li>

          <li className="cursor-pointer  mx-4 rounded-md">
            <a href="#skills" className="rounded-md">
              Skills
            </a>
          </li>
          <li className="cursor-pointer  mx-4 ">
            <a href="#kontakt" className="rounded-md">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block py-4 absolute right-8">
        <a
          href="#kontakt"
          className="bg-background2 text-header p-3 px-8 rounded"
        >
          Kontakt
        </a>
      </div>

      <div
        style={{ zIndex: 70 }}
        onClick={handleToggle}
        className={`sm:hidden  py-0 px-2.5 rounded-lg sm:right-10 right-2 cursor-pointer absolute `}
      >
        <div class={`nav-icon2 ${toggle ? "nav-icon2 open" : "nav-icon2"}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        style={{ zIndex: 30 }}
        className={`md:hidden ${
          toggle ? "menu-fadeIn" : `menu-fadeOut  ${hidden ? "hidden" : ""} `
        }  w-[100vw] h-[100vh]  inset-0 text-white  bg-black fixed `}
      >
        <ul className="flex flex-col h-full justify-center items-center text-lg">
          <li
            onClick={handleToggle}
            className="cursor-pointer mx-4 my-4 text-xl rounded-md"
          >
            <a href="#about-me" className="rounded-md">
              Über mich
            </a>
          </li>

          <li
            onClick={handleToggle}
            className="cursor-pointer  mx-4 my-4 text-xl rounded-md"
          >
            <a href="#skills" className="rounded-md">
              Skills
            </a>
          </li>
          <li
            onClick={handleToggle}
            className="cursor-pointer mx-4 my-4 text-xl "
          >
            <a href="#kontakt" className="rounded-md">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
