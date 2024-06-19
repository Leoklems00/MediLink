import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import Settings from './pages/Settings';
import Appointments from './pages/Appointment';
import ExpertsPage from './pages/ExpertsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/experts" element={<ExpertsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
