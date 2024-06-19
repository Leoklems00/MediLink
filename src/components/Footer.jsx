import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6">
      <div className="container mx-auto md:text-center px-5 md:px-0">
      <Link to="/landing" className="text-lg">
          <img src="img/logo.jpeg" alt="" className="h-10 w-10" />
        </Link>
        <div className="md:flex md:justify-center space-x-4">
          <Link to="/about" className="hover:text-gray-200">About Us</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          <Link to="/privacy" className="hover:text-gray-200">Privacy Policy</Link>
        </div>
        <div className="mt-4">&copy; 2024 Medilink. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
