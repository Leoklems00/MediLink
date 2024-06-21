import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-white to-green-500 opacity-75 p-4 fixed top-0 right-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/landing" className="text-white text-lg font-semibold">
          <img src="img/medilink.png" alt="" className="h-10 w-10" />
        </Link>
        <div>
          <Link to="/signin" className="text-white">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
