import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-4xl mx-auto text-center p-8">
          <h1 className="text-4xl font-bold mb-6">Welcome to Medilink</h1>
          <p className="text-lg text-gray-700 mb-8">Connecting doctors and patients for better healthcare.</p>
          <div className="flex justify-center space-x-4 mb-12">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
              Contact Us
            </button>
            <Link to="/experts" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
              Find an Expert
            </Link>
          </div>
        </div>

        {/* New Section */}
        <div className="bg-white w-full py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Easy Scheduling</h3>
                <p className="text-gray-700">Schedule appointments with ease using our user-friendly interface.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Expert Consultation</h3>
                <p className="text-gray-700">Get consultations from top medical experts in various fields.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Health Records</h3>
                <p className="text-gray-700">Access and manage your health records securely online.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
