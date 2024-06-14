import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const ExpertsPage = () => {
  // Mock data for experts (replace with actual data from API or state management)
  const experts = [
    { id: 1, name: 'Dr. Klemz', specialization: 'Cardiologist' },
    { id: 2, name: 'Dr. Chisom', specialization: 'Dermatologist' },
    { id: 3, name: 'Dr. Liz Brown', specialization: 'Psychiatrist' },
  ];

  const handleSelectExpert = (expert) => {
    // Handle logic for selecting expert (e.g., pair user with selected expert)
    console.log('Selected expert:', expert);
    // Implement pairing logic
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
                onClick={() => handleSelectExpert(expert)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ExpertsPage;
