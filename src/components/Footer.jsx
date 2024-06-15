// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-4">&copy; 2024 Medilink. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
