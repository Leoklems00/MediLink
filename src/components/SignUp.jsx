// src/components/SignUp.js
import React from 'react';
import api from "../api";
import { useState } from "react";
import { Link } from 'react-router-dom'; // If using React Router for navigation
import { useNavigate } from "react-router-dom";
// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
// import "../styles/Form.css"
import LoadingIndicator from "./LoadingIndicator";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // Handle sign-in logic here
    try {

      // const res = await api.post(route, { username, password })
      const res = await api.post("/patient/register/", { name, email, password })

      // if (method === "login") {
          // localStorage.setItem(ACCESS_TOKEN, res.data.access);
          // localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
          navigate("/user-profile")
      // } else {
      //     navigate("/login")
      // }
    } catch (error) {
        alert(error)
    } finally {
        setLoading(false)
    }
    // Handle sign-up logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 ">Welcome to Medilink</h2>
        <h2 className="text-2xl font-bold text-center mb-6 text-green-500">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {loading && <LoadingIndicator />}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="font-medium text-blue-500 hover:text-blue-600">
            Sign In here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
