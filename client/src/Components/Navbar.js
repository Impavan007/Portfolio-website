import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-10  top-0 w-full transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="lg:w-[40vw] h-[8vh] w-[70vw] justify-center  flex items-center  mt-5 rounded-3xl bg-[#101010]  text-gray-100 mx-auto">
        <div className="flex items-center px-[1vw] lg:text-[1.4vw] text-[1.5vh]  space-x-[1.2vw]">
          <a style={{ textDecoration: "none" }} href="#div1" className="hover:text-scale-2">
            Home
          </a>
          <a style={{ textDecoration: "none" }} href="#About">
            About
          </a>{" "}
          <a style={{ textDecoration: "none" }} href="#projects">
            Projects
          </a>{" "}
          <a style={{ textDecoration: "none" }} href="https://drive.google.com/file/d/11QZJDxKufy70MzPRouGDweP-uDXziQ2A/view?usp=drive_link" target="_blank">download-cv</a>{" "}
          <a style={{ textDecoration: "none" }} href="#Connect">
            Contact-me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
