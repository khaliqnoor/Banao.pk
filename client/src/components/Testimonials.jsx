import React from 'react'

const Testimonials = () => {
  return (
    <>
      
{/* Testimonials Section */}
<div className="w-full min-h-auto flex flex-col justify-center items-center px-6 py-16 bg-[linear-gradient(251.7deg,rgba(255,255,255,0.8)_37.57%,#999999_61.72%)] text-black">
  <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-[linear-gradient(89.02deg,#000000_0.84%,#464646_81.19%,#999999_130.4%)] bg-clip-text text-transparent text-center">
    What Our Clients Say
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
    {/* Testimonial Card */}
    {[
      {
        name: "Ali Khan",
        role: "Contractor",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Banao.pk helped me find reliable suppliers faster than ever. The process was smooth and transparent!",
      },
      {
        name: "Aman Malik",
        role: "Builder",
        img: "https://c8.alamy.com/comp/CF3Y94/smiling-man-in-islamabad-pakistan-CF3Y94.jpg",
        text: "The platform made material sourcing so much easier. Totally changed how we handle projects.",
      },
      {
        name: "Rehan Iqbal",
        role: "Builder",
        img: "https://randomuser.me/api/portraits/men/76.jpg",
        text: "Great experience overall. The reviews and supplier ratings really helped me make informed choices.",
      },
    ].map((person, i) => (
      <div
        key={i}
        className="bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
      >
        <img
          src={person.img}
          alt={person.name}
          className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-300"
        />
        <h3 className="text-xl font-semibold">{person.name}</h3>
        <p className="text-sm text-gray-700">{person.role}</p>

        {/* Stars */}
        <div className="flex justify-center space-x-1 mt-2">
          {[...Array(5)].map((_, j) => (
            <svg
              key={j}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-yellow-400"
            >
              <path d="M12 .587l3.668 7.431L24 9.753l-6 5.847 1.417 8.267L12 19.771l-7.417 4.096L6 15.6 0 9.753l8.332-1.735z" />
            </svg>
          ))}
        </div>

        <p className="mt-4 text-gray-800 text-base italic max-w-xs">
          "{person.text}"
        </p>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default Testimonials
