import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { Home, Info, Mail, Menu, UserPlus, X, XIcon } from "lucide-react"; // icons for open/close
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      // If already on home, scroll
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on another page, go to home first
      navigate("/");
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      // If already on home page, scroll to the About section
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on another page, go to home first
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };


  return (
    <nav className="w-full bg-[#C8C5C5] shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 sm:px-12 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Banao.pk"
            className="w-10 sm:w-14 md:w-16 h-auto object-contain"
          />
          <span className="font-semibold text-lg sm:text-xl text-black">
            Banao.pk
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-black text-lg">
          <a
            onClick={(e) => {
              handleHomeClick(e);
              setIsOpen(false);
            }}
            href="#home"
            className="hover:text-gray-700 hover:underline"
          >
            Home
          </a>
          <NavLink
            className="hover:text-gray-700  hover:underline"
             to={'/register-supplier'}
          >
            Register Supplier
          </NavLink>

          <a
            onClick={(e) => {
              handleAboutClick(e);
              setIsOpen(false);
            }}
            href="#about"
            className="hover:text-gray-700 hover:underline"
          >
            About Us
          </a>
          <NavLink
            to="/contact"
            className="hover:text-gray-700  hover:underline"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Right Side (Profile + Menu Button) */}
        <div className="flex items-center space-x-4">
          <UserButton />
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
              <Menu size={28} className="font-bold" />        
          </button>
        </div>
      </div>

{/* Mobile Menu */}
<div
  className={`fixed top-0 right-0 h-full w-1/2 md:hidden transform transition-transform duration-500 ease-in-out z-50
  ${isOpen ? "translate-x-0" : "translate-x-full"}
  bg-[#C8C5C5]/60 backdrop-blur-lg flex flex-col gap-8 text-black border-none text-lg border-l shadow-lg`}
>
  <XIcon
    size={28}
    className="font-bold absolute right-6 top-4 cursor-pointer"
    onClick={() => setIsOpen(false)}
  />

  <div className="mt-20 flex flex-col gap-4 px-6 text-gray-700 font-medium">
    <a
      onClick={(e) => {
        handleHomeClick(e);
        setIsOpen(false);
      }}
      href="#home"
      className="hover:text-gray-900 flex items-center gap-3 py-2 px-3 rounded-md border-1 hover:bg-gray-200/40 transition"
    >
      <Home />
      Home
    </a>

    <NavLink
      to="/register-supplier"
      className="hover:text-gray-900 flex items-center border-1 gap-3 py-2 px-3 rounded-md hover:bg-gray-200/40 transition"
      onClick={() => setIsOpen(false)}
    >
      <UserPlus/>
      Register
    </NavLink>

    <a
      onClick={(e) => {
        handleAboutClick(e);
        setIsOpen(false);
      }}
      href="#about"
      className="hover:text-gray-900 flex items-center border-1 gap-3 py-2 px-3 rounded-md hover:bg-gray-200/40 transition"
    >
      <Info />
      About Us
    </a>

    <NavLink
      to="/contact"
      className="hover:text-gray-900 flex items-center gap-3 border-1 py-2 px-3 rounded-md hover:bg-gray-200/40 transition"
      onClick={() => setIsOpen(false)}
    >
      <Mail />
      Contact
    </NavLink>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
