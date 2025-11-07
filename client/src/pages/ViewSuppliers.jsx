import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import dummyPhoto from '../assets/dummyPhoto.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

const ViewSuppliers = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
 
const handleViewProfile = () => {
  setLoading(true); // show loading spinner first

  setTimeout(() => {
    navigate('/view-suppliers/profile'); // go to profile after delay
  }, 1000); // 1.5s delay feels smoother than 2s
};

  return (
<>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loading height="50vh" />
        </div>
      ) : (
        <div className="w-full mt-16 min-h-screen flex flex-col md:flex-row bg-[linear-gradient(251.7deg,rgba(85,85,85,0.4)_27.57%,#999999_51.72%)]">
          <Navbar />
          <div className="flex-1 flex flex-col items-center px-4 md:px-16 py-8 md:py-16">
            <div className="w-full max-w-2xl">
              <div className="flex items-center bg-[#D9D9D9] rounded-xl px-4 py-3 shadow-sm">
                <input
                  type="text"
                  placeholder="Search suppliers..."
                  className="w-full bg-transparent text-[#464646] placeholder-[#464646] text-lg md:text-2xl outline-none"
                />
              </div>
            </div>

            <div className="w-full max-w-2xl mt-8">
              <h2 className="text-black font-bold text-2xl md:text-4xl text-left">
                Recommended
              </h2>

              <div className="flex flex-wrap gap-6 mt-7 justify-center md:justify-start w-full">
                <div className="w-full sm:w-[45%] md:w-[45%] lg:w-[45%] max-w-sm flex flex-col items-center bg-[#939191] rounded-2xl shadow-md p-4 relative">
                  <div className="absolute top-3 left-3">
                    <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Active
                    </span>
                  </div>

                  <img
                    src={dummyPhoto}
                    alt="Supplier"
                    className="w-24 h-24 rounded-full object-cover mt-6 border-4 border-gray-200"
                  />

                  <div className="text-center mt-3">
                    <h3 className="text-lg font-bold text-gray-800">Ahmed Khan</h3>
                    <p className="text-sm text-gray-800">Supplier</p>
                    <p className="text-sm text-gray-800 mt-1">Truck: Dongfeng</p>
                    <p className="text-sm text-gray-800">Truck No: BXR-123</p>
                  </div>

                  <div className="flex items-center justify-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill={i < 4 ? '#FFD700' : '#E5E7EB'}
                        className="w-5 h-5"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.182a1 1 0 00.95.69h4.396c.969 0 1.371 1.24.588 1.81l-3.561 2.588a1 1 0 00-.364 1.118l1.357 4.182c.3.921-.755 1.688-1.54 1.118l-3.561-2.588a1 1 0 00-1.175 0l-3.561 2.588c-.784.57-1.838-.197-1.539-1.118l1.357-4.182a1 1 0 00-.364-1.118L2.708 9.61c-.783-.57-.38-1.81.588-1.81h4.396a1 1 0 00.95-.69l1.357-4.182z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex w-full justify-between mt-6">
                    <button
                      onClick={handleViewProfile}
                      className="w-1/2 text-center cursor-pointer mr-2 bg-[#464646] text-[#D9D9D9] font-semibold py-2 rounded-lg hover:bg-[#555] transition"
                    >
                      View Profile
                    </button>
                    <button className="w-1/2 cursor-pointer ml-2 bg-[#D9D9D9] text-black font-semibold py-2 rounded-lg hover:bg-gray-300 transition">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
   </>
  )
}

export default ViewSuppliers
