import React from 'react'

const FeedBack = () => {
  return (
    <>
        {/* Feedback Form  */}
<div className="w-full min-h-auto  flex flex-col justify-center items-center px-6 py-12 text-black">
  <div className="w-full max-w-lg bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">We Value Your Feedback</h2>

    <form className="flex flex-col space-y-5">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <textarea
        rows="5"
        placeholder="Write your feedback..."
        className="w-full p-3 rounded-lg border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
      ></textarea>
      <button
        type="submit"
        className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
      >
        Send Feedback
      </button>
    </form>
  </div>
</div>
    </>
  )
}

export default FeedBack
