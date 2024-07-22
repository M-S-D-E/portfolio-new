import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';

const ExperienceCard = ({ experience, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-gray-700">{experience.description}</p>
      </div>
      <div className="flex space-x-2">
        <Edit3 className="w-5 h-5 text-blue-500 cursor-pointer" onClick={() => onEdit(experience)} />
        <Trash2 className="w-5 h-5 text-red-500 cursor-pointer" onClick={() => onDelete(experience)} />
      </div>
    </div>
  );
};

export default ExperienceCard;
