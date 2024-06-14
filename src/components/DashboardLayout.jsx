import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <aside className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 flex flex-col absolute lg:relative z-10 lg:z-auto ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="text-white text-2xl font-bold px-4">MediLink</div>
        <nav>
          <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Home</Link>
          <Link to="/user-profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Profile</Link>
          <Link to="/appointments" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Appointments</Link>
          <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Settings</Link>
        </nav>
      </aside>
      <div className="flex-1 p-4 sm:p-10 text-gray-700">
        <button
          className="lg:hidden bg-gray-800 text-white p-2 rounded mb-4"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close' : 'Menu'}
        </button>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
