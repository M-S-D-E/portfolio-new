import React from 'react';
import SocialsCard from "../../src/pages/dashboard/pages/socials"

const SocialsCard = ({ platform, url, icon }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 hover:bg-gray-100 transition duration-200">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200">
        {icon}
      </div>
      <h3 className="text-xl font-medium">{platform}</h3>
    </a>
  );
};

export default SocialsCard;
