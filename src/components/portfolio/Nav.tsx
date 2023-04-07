import React from "react";
import { FaBars, FaTimes } from "react-icons/fa/index";

const Nav = () => {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <div className="text-white   pt-[3rem] pr-5 z-[100]">
      <div
        className="absolute z-[9999] right-5 cursor-pointer md:hidden"
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        {!showNav ? (
          <FaBars size={30} fill="#fff" />
        ) : (
          <FaTimes size={50} fill="#000" />
        )}
      </div>

      {showNav && (
        <section
          className={
            !showNav
              ? "hidden"
              : "absolute top-0 left-0  flex h-[100vh] w-full pl-5  bg-green text-lg font-medium text-black bg-white z-[50] "
          }
        >
          <ul
            className="space-y-[50px] mt-[7rem] font-medium text-[3.5rem]"
            onClick={() => setShowNav(!showNav)}
          >
            <li className="cursor-pointer">
              <a href="/#">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="#about">About Me</a>
            </li>
            <li className="cursor-pointer">
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer">
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </section>
      )}

      {/* For wide Screens */}
      <ul className="md:flex gap-5 hidden text-lg md:pl-[3rem] xl:pt-[5rem]">
        <li className="cursor-pointer">
          <a href="/#">Home</a>
        </li>
        <li className="cursor-pointer">
          <a href="#about">About Me</a>
        </li>
        <li className="cursor-pointer">
          {" "}
          <a href="#projects">Projects</a>
        </li>
        <li className="cursor-pointer">
          <a href="#contacts">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
