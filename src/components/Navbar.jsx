import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 fixed top-0 right-0 left-0">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-semibold">Medilink</Link>
        <div>
          <Link to="/signin" className="text-white mr-4">Sign In</Link>
          <Link to="/signup" className="text-white mr-4">Sign Up</Link>
          <Link to="/user-profile" className="text-white">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
