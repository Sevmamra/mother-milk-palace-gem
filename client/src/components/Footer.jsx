import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mother Milk Palace</h3>
            <p className="text-gray-400">Your one-stop shop for fresh groceries and daily essentials.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Milk & Dairy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Packaged Food</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Beverages</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-400">Get updates on our latest offers and products!</p>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mother Milk Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
