import React from 'react'
import companylogo1 from '../assets/companylogo2.jpg'
import companylogo2 from '../assets/companylogo3.jpg'
import companylogo3 from '../assets/companylogo4.jfif'
import companylogo4 from '../assets/companylogo5.png'

const About = () => {
  return (
    <>
      <div id='about' className="w-full min-h-screen flex flex-col justify-center text-black">
     {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-28">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
          About <span className="text-gray-700">Banao.pk</span>
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-gray-800 leading-relaxed">
          Banao.pk connects builders with reliable material suppliers across
          Pakistan. Our mission is to make construction sourcing transparent,
          fast, and trustworthy — so every project, big or small, has a strong
          foundation.
        </p>
      </section>

      {/* Partnerships Section */}
      <section className=" backdrop-blur-sm py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Our Partnerships
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          We proudly collaborate with industry-leading suppliers, logistics
          providers, and construction brands to make your building experience
          seamless.
        </p>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
  {[companylogo1, companylogo2, companylogo3, companylogo4].map((logo, i) => (
    <div
      key={i}
      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-shadow duration-300 bg-white flex items-center justify-center"
    >
      <img
        src={logo}
        alt={`Partner ${i + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>


      </section>

  </div>
    </>
  )
}

export default About
