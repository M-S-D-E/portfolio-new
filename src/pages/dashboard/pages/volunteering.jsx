import React, { useState } from 'react';

const Volunteering = () => {
  const [volunteering1, setVolunteering1] = useState({ title: '', organization: '', description: '' });
  const [volunteering2, setVolunteering2] = useState({ title: '', organization: '', description: '' });

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setVolunteering1({ ...volunteering1, [name]: value });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setVolunteering2({ ...volunteering2, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log('Volunteering Experience 1:', volunteering1);
    console.log('Volunteering Experience 2:', volunteering2);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Volunteering Experiences</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Volunteering Experience 1</h3>
            <div className="mb-4">
              <label htmlFor="title1" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title1"
                name="title"
                value={volunteering1.title}
                onChange={handleChange1}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="organization1" className="block text-sm font-medium text-gray-700">Organization</label>
              <input
                type="text"
                id="organization1"
                name="organization"
                value={volunteering1.organization}
                onChange={handleChange1}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description1" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description1"
                name="description"
                value={volunteering1.description}
                onChange={handleChange1}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Volunteering Experience 2</h3>
            <div className="mb-4">
              <label htmlFor="title2" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title2"
                name="title"
                value={volunteering2.title}
                onChange={handleChange2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="organization2" className="block text-sm font-medium text-gray-700">Organization</label>
              <input
                type="text"
                id="organization2"
                name="organization"
                value={volunteering2.organization}
                onChange={handleChange2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description2" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description2"
                name="description"
                value={volunteering2.description}
                onChange={handleChange2}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Volunteering;
