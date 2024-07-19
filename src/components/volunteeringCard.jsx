import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';

const VolunteeringCard = ({ title, description, deleted, edit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <div className="flex justify-end space-x-4 mt-auto">
        {edit && <Edit3 className="w-6 h-6 text-blue-500 cursor-pointer" />}
        {!deleted && <Trash2 className="w-6 h-6 text-red-500 cursor-pointer" />}
      </div>
    </div>
  );
};

export default VolunteeringCard;
