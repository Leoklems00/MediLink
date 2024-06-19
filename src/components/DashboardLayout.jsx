import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const user = {
    name: 'Obumneme Clement',
    profilePicture: '/img/user.jpeg'
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white w-full py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          
          <h2 className="text-xl font-bold">Welcome, {user.name}!</h2>
        </div>
        <div className="flex items-center">
          <img src={user.profilePicture} alt="Profile" className="h-10 w-10 rounded-full" />
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`bg-blue-600 text-white w-64 space-y-6 py-7 px-2 flex flex-col absolute lg:relative z-10 lg:z-auto ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="text-white text-2xl font-bold px-4 text-center">
            <Link to="/" className="text-white text-lg font-semibold">
              <img src="/img/medilink.png" alt="Logo" className="h-12 w-12 mr-2" />
            </Link>
          </div>
          <nav>
            <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400">Home</Link>
            <Link to="/user-profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400 active:bg-gray-800">Profile</Link>
            <Link to="/appointments" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400">Appointments</Link>
            <Link to="/experts" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400">Experts</Link>
            <Link to="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400">Settings</Link>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-10 text-gray-700">
          {/* Toggle Sidebar Button (visible on mobile) */}
          <button
            className="lg:hidden bg-gray-800 text-white p-2 rounded mb-4"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Close' : 'Menu'}
          </button>
          {/* Render children components (actual dashboard content) */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
