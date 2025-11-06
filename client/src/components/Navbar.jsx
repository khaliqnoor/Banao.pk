import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react"; // icons for open/close
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
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
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
           <a  onClick={(e) => {
    handleHomeClick(e);
    setIsOpen(false);
  }} href="#home" className="hover:text-gray-700 hover:underline">Home</a>
          <NavLink to="/register-supplier" className="hover:text-gray-700  hover:underline">
           Register Supplier
          </NavLink>
          <a  onClick={(e) => {
    handleAboutClick(e);
    setIsOpen(false);
  }} href="#about" className="hover:text-gray-700 hover:underline">About Us</a>
          <NavLink to="/contact" className="hover:text-gray-700  hover:underline">
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
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

    {/* Mobile Menu */}
{isOpen && (
  <div
    className="md:hidden backdrop-blur-lg bg-[#C8C5C5]/30 flex flex-col items-center 
               space-y-4 py-4 text-black text-lg border-t border-gray-300 
               shadow-md transition-all duration-300 ease-in-out"
  >
   <a onClick={(e) => {
    handleHomeClick(e);
    setIsOpen(false);
  }} href="#home" className="hover:text-gray-700 hover:underline">Home</a>
    <NavLink
      to="/register-supplier"
      className="hover:text-gray-700"
      onClick={() => setIsOpen(false)}
    >
    Register Supplier
    </NavLink>
  <a onClick={(e) => {
    handleAboutClick(e);
    setIsOpen(false);
  }} href="#about" className="hover:text-gray-700 hover:underline">About Us</a>
    <NavLink
      to="/contact"
      className="hover:text-gray-700"
      onClick={() => setIsOpen(false)}
    >
      Contact Us
    </NavLink>
  </div>
)}
    </nav>
  );
};

export default Navbar;
