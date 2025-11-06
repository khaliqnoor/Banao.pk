import React from "react";
import { SignIn } from "@clerk/clerk-react";
import logo from "../assets/logo.png";
import { Star } from "lucide-react";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[linear-gradient(251.7deg,rgba(255,255,255,0.8)_37.57%,#999999_61.72%)]">
      
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-10 text-center relative">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-[100px] sm:w-[130px] md:w-[160px] mb-6 md:mb-10"
        />

        {/* Heading */}
        <h1
          className="max-w-[90%] sm:max-w-[500px] md:max-w-[600px]
          text-[18px] sm:text-[22px] md:text-[28px]
          leading-[28px] sm:leading-[38px] md:leading-[48px]
          font-bold
          bg-[linear-gradient(87.99deg,#000000_24.35%,#666666_81.84%)]
          bg-clip-text text-transparent"
        >
          Connecting Builders with Trusted Material Suppliers.
        </h1>

        {/* Stars */}
        <div className="flex justify-center mt-5 space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>

        {/* Subtitle */}
        <h2
          className="mt-4 sm:mt-6 font-bold
          text-[13px] sm:text-[16px] md:text-[18px]
          leading-[22px] sm:leading-[26px] md:leading-[32px]
          bg-[linear-gradient(89.02deg,#000000_0.84%,#464646_81.19%,#999999_130.4%)]
          bg-clip-text text-transparent"
        >
          Used by 3K+ builders
        </h2>
      </div>

      {/* Right Section (Sign In) */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-[380px]">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;
