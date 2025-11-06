import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RegisterUser = () => {
  return (
    <>
<div className="w-full mt-10 min-h-screen flex flex-col md:flex-row bg-[linear-gradient(251.7deg,rgba(255,255,255,0.8)_37.57%,#999999_61.72%)]">
  <Navbar />

  {/* Registration Form Section */}
  <div className="flex-1 flex justify-center items-center px-6 py-10">
    <form className="w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">Supplier Registration</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="text"
            placeholder="03XXXXXXXXX"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Age</label>
          <input
            type="number"
            placeholder="Your age"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">Address</label>
          <input
            type="text"
            placeholder="Your full address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Profile Pic */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
          />
        </div>

        {/* Truck Pic */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Truck Picture</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
          />
        </div>

        {/* Per KM Rate */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Rate (PKR per KM)</label>
          <input
            type="number"
            placeholder="e.g. 120"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Truck Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Truck Number Plate</label>
          <input
            type="text"
            placeholder="e.g. LEB-1234"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Truck Type */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">Truck Type</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
            <option value="">Select truck type</option>
            <option value="Dumper">Dumper</option>
            <option value="Titan">Titan</option>
            <option value="FY">FY</option>
            <option value="Dongfeng">Dongfeng</option>
            <option value="Suzuki">Suzuki</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300"
      >
        Register Supplier
      </button>
    </form>
  </div>
</div>
  <Footer />

    </>
  )
}

export default RegisterUser
