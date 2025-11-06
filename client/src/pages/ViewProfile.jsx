import React, { useState } from 'react';
import { Phone, MessageCircle, Star, Truck, Calendar, Mail, User, Banknote, DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import { suppliers } from '../assets/assets';


const ViewProfile = ()=> {
  const [reviews] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent service! Very professional and delivered on time. The truck was clean and Michael handled everything with care.",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "David Martinez",
      rating: 5,
      date: "1 month ago",
      comment: "Great communication throughout the delivery. Highly recommend Michael for any hauling needs.",
      avatar: "DM"
    },
    {
      id: 3,
      name: "Emily Chen",
      rating: 4,
      date: "1 month ago",
      comment: "Good service overall. Very punctual and friendly driver. Would hire again.",
      avatar: "EC"
    },
  ]);

  const handleCall = () => {
    window.location.href = `tel:${suppliers.phone}`;
  };

  const handleMessage = () => {
    alert('Opening messaging interface...');
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
      />
    ));
  };

return (
  <div className="w-full flex flex-col items-center justify-center min-h-screen bg-[linear-gradient(251.7deg,rgba(120,120,120,0.6)_20%,#333333_80%)]">
    <Navbar />

    <div className="bg-transparent mt-20 w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2 shadow-sm">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
          <div className="flex-shrink-0">
            <img src={suppliers.photo} className="w-20 h-20 object-cover rounded-full flex items-center justify-center text-white text-2xl font-semibold shadow-md"  />
              
        
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{suppliers.name}</h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
              <div className="flex items-center">{renderStars(suppliers.rating)}</div>
              <span className="text-base font-semibold text-gray-900">{suppliers.rating}</span>
              <span className="text-sm text-gray-500">({suppliers.totalReviews} reviews)</span>
            </div>
            <div className="flex justify-center sm:justify-start items-center gap-1.5 text-sm text-black">
              <Calendar size={14} />
              <span>Member since {suppliers.memberSince}</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap items-center gap-3 text-gray-900">
            <Mail size={18} className="flex-shrink-0" />
            <span className="text-sm break-all">{suppliers.email}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-gray-900">
            <Phone size={18} className="flex-shrink-0" />
            <span className="text-sm">{suppliers.phone}</span>
          </div>
           <div className="flex flex-wrap items-center gap-3 text-gray-900">
            <DollarSign ote size={18} className="flex-shrink-0" />
             <span className="text">RS: {suppliers.rate}/km</span>
           </div>
        </div>

        {/* Truck Info */}
        <div className="bg-gray-300 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Truck size={20} className="text-gray-700" />
            <h3 className="font-semibold text-gray-900">Vehicle Details</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Type:</span>
              <span className="font-medium text-gray-900">{suppliers.truckType}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Truck Number:</span>
              <span className="font-medium text-gray-900">{suppliers.truckNumber}</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={handleCall}
            className="flex items-center justify-center gap-2 bg-black text-white py-3.5 rounded-lg font-semibold shadow-sm hover:bg-black/80 transition-colors"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </button>
          <button
            onClick={handleMessage}
            className="flex items-center justify-center gap-2 bg-white text-black py-3.5 rounded-lg font-semibold border-2 border-gray-600 hover:bg-blue-50 transition-colors"
          >
            <MessageCircle size={20} />
            <span>Message</span>
          </button>
        </div>
      </div>
    </div>

    {/* Reviews */}
    <div className="max-w-2xl mx-auto px-4 py-6 w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
        Reviews ({suppliers.totalReviews})
      </h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-300  rounded-lg p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-gray-700 text-sm font-semibold">
                  {review.avatar}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-2">{renderStars(review.rating)}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}

export default ViewProfile