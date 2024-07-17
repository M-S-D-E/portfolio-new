import React from 'react';

const OverviewSection = () => {
  return (
    <section className="bg-blue-900 text-white h-screen flex flex-col justify-center">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-12">Our Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-2">All Skills</h3>
            <p>Growing a month</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-2">All Achievements</h3>
            <p>Customer</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-amber-400 mb-2">All Projects</h3>
            <p>Growing a month</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-2">30+</h3>
            <p>Partnerships</p>
          </div>
        </div>

        <div className="bg-blue-900 p-8 rounded-lg max-w-3xl mx-auto mt-12 shadow-lg">
          <p className="text-lg italic mx-4">
            A cumulative representation of all Skills, Projects and Achievements will appear here
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
