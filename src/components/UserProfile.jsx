import React from 'react';

const UserProfile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <p className="border rounded p-2">John Doe</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <p className="border rounded p-2">john.doe@example.com</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Specialization:</label>
          <p className="border rounded p-2">General Practitioner</p>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Contact an Expert
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
