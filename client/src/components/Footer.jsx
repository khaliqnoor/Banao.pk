import React from 'react'

const Footer = () => {
  return (
    <>
       {/* Footer */}
<footer className="w-full bg-[#C8C5C5]/40 backdrop-blur-lg text-gray-900 py-12 px-6 md:px-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* Company Info */}
    <div>
      <h3 className="text-2xl font-bold mb-4">Banao.pk</h3>
      <p className="text-sm text-gray-800 leading-relaxed">
        Connecting builders and trusted material suppliers across Pakistan.  
        Quality, trust, and innovation — all in one platform.
      </p>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Contact</h4>
      <p className="text-sm">📍 Karachi, Pakistan</p>
      <p className="text-sm">📞 +92 300 000000</p>
      <p className="text-sm">✉️ support@banao.pk</p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About Us</a></li>
        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        <li><a href="/register-supplier" className="hover:underline">Register Supplier</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
      <div className="flex space-x-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="mt-10 border-t border-gray-400/40 pt-4 text-center text-sm text-gray-800">
    <p>© {new Date().getFullYear()} Banao.pk — All Rights Reserved</p>
  </div>
</footer>

    </>
  )
}

export default Footer
