

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Productspage from "./Productspage";
import logoImg from "../assets/logo.webp";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      !e.target.closest("#products-button")
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOrderClick = () => {
    navigate("/order");
  };

  return (
    <div className="w-full sticky top-0 z-[999] bg-black flex justify-center">
      <nav className="w-full max-w-6xl flex flex-col md:flex-row md:h-[50px] items-start md:items-center justify-start bg-black text-white px-4 gap-2 relative">
    
        <div
          className="flex items-center gap-2 font-bold text-lg font-mono text-white tracking-widest cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logoImg} alt="Logo" className="w-5 h-5" />
          <span>BULLWORK MOBILITY</span>
        </div>

     
        <div
          className="md:hidden flex flex-col gap-[5px] cursor-pointer absolute right-4 top-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-[25px] h-[3px] bg-white rounded"></span>
          <span className="w-[25px] h-[3px] bg-white rounded"></span>
          <span className="w-[25px] h-[3px] bg-white rounded"></span>
        </div>

        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-start md:items-center w-full md:w-auto bg-black md:bg-transparent text-white md:ml-auto`}
        >
          <li
            className="px-4 py-2 md:py-0 cursor-pointer hover:text-purple-300"
            onClick={() => {
              navigate("/");
              setDropdownOpen(false);
              setMenuOpen(false);
            }}
          >
            HOME
          </li>

         
        <li
  id="products-button"
  className="relative px-2 py-2 md:py-0 cursor-pointer hover:text-purple-300 font-semibold select-none focus:outline-none mt-0 pt-0"
  onClick={() => setDropdownOpen((prev) => !prev)}
  tabIndex={0}
>
  PRODUCTS ▾
  {dropdownOpen && (
    <div
      ref={dropdownRef}
      className="fixed top-[50px] left-0 w-screen h-[50vh] bg-white z-[1000] shadow-xl px-12 py-6 overflow-hidden box-border flex justify-start items-start"
    >
      <div className="flex gap-4 w-full h-full overflow-x-auto p-2 bg-white box-border scroll-smooth">
        <Productspage
          isDropdown={true}
          maxProducts={10}
          productWidthPercent={45}
        />
      </div>
    </div>
  )}
</li>


          <li
            className="px-4 py-2 md:py-0 cursor-pointer hover:text-purple-300"
            onClick={() => {
              navigate("/technology");
              setDropdownOpen(false);
              setMenuOpen(false);
            }}
          >
            TECHNOLOGY
          </li>
          <li
            className="px-4 py-2 md:py-0 cursor-pointer hover:text-purple-300"
            onClick={() => {
              navigate("/about");
              setDropdownOpen(false);
              setMenuOpen(false);
            }}
          >
            ABOUT US
          </li>
          <li
            className="px-4 py-2 md:py-0 cursor-pointer hover:text-purple-300"
            onClick={() => {
              navigate("/careers");
              setDropdownOpen(false);
              setMenuOpen(false);
            }}
          >
            CAREERS
          </li>

       <li className="px-4 py-2 md:py-0 cursor-pointer mt-1 mb-8">
  <button
    onClick={handleOrderClick}
    className="bg-[hsl(285,89%,25%)] w-full md:w-[150px] h-[35px] bg-gradient-to-r text-white text-sm rounded-md font-medium tracking-wide hover:opacity-90 transition-opacity"
  >
    ORDER
  </button>
</li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;



