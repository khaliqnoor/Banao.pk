import React from "react";
import { NavLink } from "react-router-dom";
import background from "../assets/background.webp"; // your truck image
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FeedBack from "../components/FeedBack.jsx";
import Testimonials from "../components/Testimonials.jsx";
import About from "../components/About.jsx";


const Home = () => {
  return (
<div  className="relative w-full min-h-screen">
  <Navbar />

  {/* Hero Section */}
  <div
    id="home"
    className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
    style={{
      backgroundImage: `url(${background})`,
    }}
  >
    {/* Overlay for dim effect */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Buttons */}
    <div className="relative z-10 flex space-x-4">
      <NavLink to='/view-suppliers' className="px-6 py-3 sm:px-8 sm:py-3 bg-[#C8C5C5] text-black font-medium text-base sm:text-lg rounded-lg hover:bg-gray-300 transition">
        View Suppliers
      </NavLink>
      <a href="/register-supplier" className="px-6 py-3 sm:px-8 sm:py-3 bg-[#C8C5C5] text-black font-medium text-base sm:text-lg rounded-lg hover:bg-gray-300 transition">
        Register Supplier
      </a>
    </div>

    {/* Smooth fade to next section */}
    <div className="absolute bottom-0 left-0 w-full h-22 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.7)]"></div>
  </div>
<div className="w-full min-h-auto bg-[linear-gradient(251.7deg,rgba(255,255,255,0.8)_37.57%,#999999_61.72%)] flex flex-col justify-center items-center px-6 py-12 text-black">

  {/* Next Section with your gradient */}
  


 <About />
 <Testimonials />
 <FeedBack />

</div>
 <Footer />

    </div>
  );
};

export default Home;
