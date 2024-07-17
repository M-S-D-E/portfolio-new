import React from 'react'
import { useNavigate } from 'react-router-dom';

const EducationCard = () => {
    const EducationCard = ({ title, description, deleted, edit, id }) => {
        const navigate = useNavigate();
      
        const handleEdit = () => {
          navigate(`/edit-education/${id}`); // Navigate to the edit page with the card's id
        };
      
        return (
          <div className="h-60 w-60 bg-sky-700 rounded-lg shadow-lg p-4 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex space-x-2">
                <button className="text-white hover:text-gray-300">
                  {deleted}
                </button>
                <button className="text-white hover:text-gray-300" onClick={handleEdit}>
                  {edit}
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-200 text-sm">{description}</p>
              </div>
            </div>
          </div>
        );
      };
export default EducationCard