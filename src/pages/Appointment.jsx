import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Appointments = () => {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mt-4 sm:mt-20">
        <h2 className="text-3xl font-semibold mb-4">Appointments</h2>
        <div className="mb-4">
          <div className="border-b pb-2">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Appointment Date:</p>
              <p className="text-gray-900">June 20, 2024</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Doctor:</p>
              <p className="text-gray-900">Dr. Chisom</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Time:</p>
              <p className="text-gray-900">10:30 AM - 11:00 AM</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Location:</p>
              <p className="text-gray-900">Virtual Consultation</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="border-b pb-2">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Appointment Date:</p>
              <p className="text-gray-900">June 25, 2024</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Doctor:</p>
              <p className="text-gray-900">Dr. Liz Brown</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Time:</p>
              <p className="text-gray-900">3:00 PM - 3:30 PM</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Location:</p>
              <p className="text-gray-900">Hospital Clinic</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Appointments;
