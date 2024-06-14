import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const ExpertsPage = () => {
  // Mock data for experts (replace with actual data from API or state management)
  const experts = [
    { id: 1, name: 'Dr. Klemz', specialization: 'Cardiologist', contactInfo: 'klem@gmail.com' },
    { id: 2, name: 'Dr. Chisom', specialization: 'Dermatologist', contactInfo: 'chisom@gmail.com' },
    { id: 3, name: 'Dr. Liz Brown', specialization: 'Psychiatrist', contactInfo: 'liz@gmail.com' },
  ];

  // State to manage modal visibility and selected expert
  const [showModal, setShowModal] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);

  const handleViewDetails = (expert) => {
    setSelectedExpert(expert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExpert(null);
  };

  const handleContactExpert = () => {
    // Implement contact logic here (e.g., open email client with expert's contactInfo)
    if (selectedExpert) {
      window.open(`mailto:${selectedExpert.contactInfo}`, '_blank');
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mt-4 sm:mt-20">
        <h2 className="text-3xl font-semibold mb-4">Available Experts</h2>
        <div className="space-y-4">
          {experts.map((expert) => (
            <div key={expert.id} className="border rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{expert.name}</h3>
                <p className="text-gray-700">{expert.specialization}</p>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={() => handleViewDetails(expert)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Expert Details Modal */}
      {showModal && selectedExpert && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Expert Details</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Name:</label>
              <p className="border-b p-2 text-gray-900">{selectedExpert.name}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Specialization:</label>
              <p className="border-b p-2 text-gray-900">{selectedExpert.specialization}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Contact Info:</label>
              <p className="border-b p-2 text-gray-900">{selectedExpert.contactInfo}</p>
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 mb-2"
              onClick={handleContactExpert}
            >
              Contact Expert
            </button>
            <button
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition duration-200"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ExpertsPage;
