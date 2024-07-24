import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';

const EducationCard = ({ title, description, deleted, edit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-end space-x-3">
        {edit && <Edit3 className="w-6 h-6 text-blue-500 cursor-pointer" />}
        {deleted && <Trash2 className="w-6 h-6 text-red-500 cursor-pointer" />}
      </div>
    </div>
  );
};

export default EducationCard;
