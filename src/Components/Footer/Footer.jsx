import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#06091A] pt-48 pb-10 px-6 mt-64">
      {/* Newsletter Card - এটি ফুটারের উপরে ভাসমান অবস্থায় থাকবে */}
      <div className="absolute left-1/2 -top-40 -translate-x-1/2 w-[90%] max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-white to-orange-100/20 z-0"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-90 transition-all shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center mb-16">
          <img src="/logo-footer.png" alt="Cricket Logo" className="w-32" />
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-400">
          {/* About Us */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">About Us</h3>
            <p className="leading-relaxed max-w-xs">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                    • {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Subscribe</h3>
            <p className="mb-6">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-l-xl bg-white text-gray-800 focus:outline-none"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-r-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>©2026 AJAIRA All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;