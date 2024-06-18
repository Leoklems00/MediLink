import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 pt-20 relative">
        {/* Background Image with Linear Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-75"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}></div>
        
        {/* Hero Content */}
        <div className="relative bg-white bg-opacity-75 p-8 rounded-lg text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Welcome to Medilink</h1>
          <p className="text-lg text-gray-700 mb-8">Connecting doctors and patients for better healthcare.</p>
          <div className="md:flex justify-center space-y-7 md:space-y-0 md:space-x-4 md:mb-12">
            <div className="">
            <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">Contact Us</Link>
            </div>
            <div className="">
            <Link to="/experts" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">Find an Expert</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white w-full py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/img/schedule.jpg" alt="Easy Scheduling" className="mx-auto mb-4 w-full" />
              <h3 className="text-2xl font-semibold mb-4">Easy Scheduling</h3>
              <p className="text-gray-700">Schedule appointments with ease using our user-friendly interface.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="/img/consult.webp" alt="Expert Consultation" className="w-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Expert Consultation</h3>
              <p className="text-gray-700">Get consultations from top medical experts in various fields.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src="img/search.jpg" alt="Health Records" className="w-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Health Records</h3>
              <p className="text-gray-700">Access and manage your health records securely online.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 w-full py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"Medilink has revolutionized the way I schedule appointments and manage my health records. Highly recommended!"</p>
              <h3 className="text-xl font-semibold">- John Doe</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">"The expert consultation feature is amazing. I got the best advice from top doctors right from my home."</p>
              <h3 className="text-xl font-semibold">- Jane Smith</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
