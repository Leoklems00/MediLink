import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const ExpertsPage = () => {
  // Mock data for experts (replace with actual data from API or state management)
  const experts = [
    { id: 1, name: 'Dr. Liz Brown', specialization: 'Cardiologist', location: 'Abuja', phone: '09126555885' },
    { id: 2, name: 'Dr. Enzyme Smith', specialization: 'Dermatologist', location: 'Lagos', phone: '09126555885' },
    { id: 3, name: 'Dr. Emily Johnson', specialization: 'Psychiatrist', location: 'Kano', phone: '09126555885' },
    { id: 4, name: 'Dr. Michael Brown', specialization: 'Psychiatrist', location: 'Niger', phone: '09126555885' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [review, setReview] = useState('');
  const [searchCriteria, setSearchCriteria] = useState({ specialization: '', location: '' });
  const [filteredExperts, setFilteredExperts] = useState(experts);

  const handleViewDetails = (expert) => {
    setSelectedExpert(expert);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExpert(null);
    setReview('');
  };

  const handleSubmitReview = () => {
    console.log(`Submitted review for ${selectedExpert.name}: ${review}`);
    handleCloseModal();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = experts.filter(
      (expert) =>
        (searchCriteria.specialization === '' || expert.specialization.toLowerCase().includes(searchCriteria.specialization.toLowerCase())) &&
        (searchCriteria.location === '' || expert.location.toLowerCase().includes(searchCriteria.location.toLowerCase()))
    );
    setFilteredExperts(filtered);
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mt-4 sm:mt-20 mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">Find an Expert</h2>
        <form onSubmit={handleSearch}>
          <div className="mb-4">
            <input
              type="text"
              className="border p-2 w-full rounded-md mb-2"
              placeholder="Specialization"
              value={searchCriteria.specialization}
              onChange={(e) => setSearchCriteria({ ...searchCriteria, specialization: e.target.value })}
            />
            <input
              type="text"
              className="border p-2 w-full rounded-md"
              placeholder="Location"
              value={searchCriteria.location}
              onChange={(e) => setSearchCriteria({ ...searchCriteria, location: e.target.value })}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mt-2"
            >
              Search
            </button>
          </div>
        </form>
        <h3 className="text-2xl font-semibold mb-4 text-center">Available Experts</h3>
        <div className="space-y-4">
          {filteredExperts.length > 0 ? (
            filteredExperts.map((expert) => (
              <div key={expert.id} className="border rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{expert.name}</h3>
                  <p className="text-gray-700">{expert.specialization} - {expert.location}</p>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mt-2 sm:mt-0 sm:ml-4"
                  onClick={() => handleViewDetails(expert)}
                >
                  Leave a Review
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No experts found for the selected criteria.</p>
          )}
        </div>
      </div>

      {showModal && selectedExpert && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-4">
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
              <label className="block text-gray-700 font-medium mb-1">Location:</label>
              <p className="border-b p-2 text-gray-900">{selectedExpert.location}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Contact Info:</label>
              <p className="border-b p-2 text-gray-900">{selectedExpert.phone}</p>
            </div>
            <textarea
              className="border p-2 mb-4 w-full rounded-md"
              rows="4"
              placeholder="Write your review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 mb-2"
              onClick={handleSubmitReview}
            >
              Submit Review
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
