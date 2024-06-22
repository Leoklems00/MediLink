import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../api";
import DashboardLayout from '../components/DashboardLayout';
import Modal from '../components/modal';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);
  const [name_, setName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const specializations = [
    'Cardiologist',
    'Dermatologist',
    'Neurologist',
    'Pediatrician',
    'Psychiatrist',
  ];

  const locations = [
    'Abuja',
    'Kano',
    'Lagos',
    'Niger',
    'Kebbi',
  ];

  useEffect(() => {
    getUser();
  });


  const getUser = async () => {

    try {
      api.get('/api/get-patient/', {})
      .then(response => {
        console.log(response.data)
          const email = response.data.email;
          const name_ = response.data.name;
          const id = response.data.id;
          setEmail(email);
          setName(name_);
          setId(id);
          console.log(id)
          console.log(name_)
      })
      const res = api.get(`patient/${id}/`);
      const data = res.data;
      console.log("API response data:", data);
      setUser(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleFindExpertClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const specialization = e.target.specialization.value;
    const location = e.target.location.value;
    console.log("Searching for specialists with:", specialization, location);
    setIsModalOpen(false);

    navigate(`/experts/${specialization}/${location}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user data found</div>;
  }

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mt-4 sm:mt-20">
        <h2 className="text-3xl font-semibold mb-4">User Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Name:</label>
          <p className="border-b p-2 text-gray-900">{name_ || 'N/A'}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email:</label>
          <p className="border-b p-2 text-gray-900">{user.email || 'klemz@gmail.com'}</p>
        </div>
      
        <button onClick={handleFindExpertClick}
          className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          Find an Expert
        </button>
        {email || 'klemz@gmail.com'}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2 className="text-xl font-bold mb-4">Find an Expert</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Specialization</label>
            <div className="relative">
              <select name="specialization" className="w-full px-3 py-2 border rounded-lg appearance-none bg-white" required>
                <option value="" disabled selected>Search Specialist</option>
                {specializations.map((specialization, index) => (
                  <option key={index} value={specialization}>
                    {specialization}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 3a7 7 0 017 7h2A9 9 0 0010 1v2zM3 10a7 7 0 017-7V1A9 9 0 001 10h2zm14 0a7 7 0 01-7 7v2a9 9 0 009-9h-2zM3 10a7 7 0 017 7v2a9 9 0 01-9-9h2zm7 5a5 5 0 110-10v10z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Location</label>
            <div className="relative">
              <select name="location" className="w-full px-3 py-2 border rounded-lg appearance-none bg-white" required>
                <option value="" disabled selected>Search Location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 3a7 7 0 017 7h2A9 9 0 0010 1v2zM3 10a7 7 0 017-7V1A9 9 0 001 10h2zm14 0a7 7 0 01-7 7v2a9 9 0 009-9h-2zM3 10a7 7 0 017 7v2a9 9 0 01-9-9h2zm7 5a5 5 0 110-10v10z" />
                </svg>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Search
          </button>
        </form>
      </Modal>
    </DashboardLayout>
  );
};

export default UserProfile;
