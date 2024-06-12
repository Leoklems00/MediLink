import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <header className="bg-blue-600 text-white text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Medilink</h1>
          <p className="mt-4 text-lg md:text-2xl">Your trusted partner in healthcare</p>
          <button className="mt-8 bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200">
            Get Started
          </button>
        </header>

        <section className="py-12 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="container mx-auto grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Consultations</h3>
              <p className="text-gray-600">Connect with experienced doctors for medical advice and treatment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Prescriptions</h3>
              <p className="text-gray-600">Get your prescriptions online with ease and convenience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Health Records</h3>
              <p className="text-gray-600">Manage your health records securely in one place.</p>
            </div>
          </div>
        </section>

        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <div className="container mx-auto grid gap-8 md:grid-cols-3">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Expert Doctors</h3>
              <p className="text-gray-600">Our team consists of experienced and highly qualified medical professionals.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">We are here for you at any time, day or night, for all your healthcare needs.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Secure & Private</h3>
              <p className="text-gray-600">Your health data is safe with us. We prioritize your privacy and security.</p>
            </div>
          </div>
        </section>

        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us Today</h2>
          <p className="text-gray-600 mb-8">Experience the best in healthcare. Sign up now and start your journey with Medilink.</p>
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
