import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white text-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8">Showcasing my skills, projects, and more. Dive in to explore!</p>
      <Link
        to="/dashboard" // Update the link to your dashboard
        className="bg-white text-blue-500 py-2 px-6 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Landing;
