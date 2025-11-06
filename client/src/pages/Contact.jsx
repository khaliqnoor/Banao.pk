import React from "react";
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-[linear-gradient(251.7deg,rgba(255,255,255,0.8)_37.57%,#999999_61.72%)] text-black flex flex-col">
      <Navbar />

      {/* Contact Section */}
      <div className="flex mt-6 flex-col items-center justify-center flex-grow px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get in Touch</h1>
        <p className="text-lg text-gray-800 mb-12 text-center max-w-2xl">
          Have a question, partnership idea, or need support? We’d love to hear from you.
        </p>

        {/* Main Container */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white/50 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">
          
          {/* Contact Info */}
          <div className="md:w-1/2 bg-[#C8C5C5]/40 p-8 flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="flex items-center space-x-3">
              <Mail className="text-black" />
              <p>banao.pk@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-black" />
              <p>+92 300 1234567</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-black" />
              <p>Karachi, Pakistan</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-gray-700"><Facebook /></a>
              <a href="#" className="hover:text-gray-700"><Instagram /></a>
              <a href="#" className="hover:text-gray-700"><Linkedin /></a>
              <a href="#" className="hover:text-gray-700"><Twitter /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#C8C5C5] hover:bg-gray-300 text-black font-semibold rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
