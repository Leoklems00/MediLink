import React from 'react';
import { useParams } from 'react-router-dom';

const ExpertSearchResults = () => {
  const { specialization, location } = useParams();

  const experts = [
    {
      id: 1,
      name: 'Dr. Liz Brown',
      specialization: 'Cardiologist',
      location: 'Abuja',
      phone: '09126555885',
    },
    {
      id: 2,
      name: 'Dr. Enzyme Smith',
      specialization: 'Dermatologist',
      location: 'Lagos',
      phone: '09126555885',
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      specialization: 'Cardiologist',
      location: 'Kano',
      phone: '09126555885',
    },
    {
      id: 4,
      name: 'Dr. Michael Brown',
      specialization: 'Dermatologist',
      location: 'Niger',
      phone: '09126555885',
    },
  ];

  const filteredExperts = experts.filter(
    (expert) =>
      expert.specialization.toLowerCase() === specialization.toLowerCase() &&
      expert.location.toLowerCase() === location.toLowerCase()
  );

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">
        Experts in {specialization} in {location}
      </h2>
      {filteredExperts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {filteredExperts.map((expert) => (
            <div key={expert.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{expert.name}</h3>
              <p className="text-gray-700 mb-1">
                {expert.specialization} - {expert.location}
              </p>
              <p className="text-gray-700 mb-4">Phone: {expert.phone}</p>
              <a
                href={`tel:${expert.phone}`}
                className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg"
              >
                Call {expert.name}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">
          No experts found for the selected specialization and location.
        </p>
      )}
    </div>
  );
};

export default ExpertSearchResults;
