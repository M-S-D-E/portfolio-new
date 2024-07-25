import React, { useState } from 'react';
import PagesLayout from '../layouts/pagesLayout';
import ExperienceCard from '../../../components/experienceCard';
import { Edit3, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Experiences = () => {
  const initialExperiences = [
    { id: 1, title: 'Software Engineer at XYZ', description: 'Developed various applications.' },
    { id: 2, title: 'Frontend Developer at ABC', description: 'Created responsive websites.' },
  ];
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState(initialExperiences);
  const [isEditing, setIsEditing] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [experienceToDelete, setExperienceToDelete] = useState(null);

  const handleDelete = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
    setConfirmDelete(false);
  };

  const handleEdit = (experience) => {
    setCurrentExperience(experience);
    setIsEditing(true);
  };

  const handleSave = () => {
    setExperiences(experiences.map((experience) => (experience.id === currentExperience.id ? currentExperience : experience)));
    setIsEditing(false);
    setCurrentExperience(null);
  };

  const handleConfirmDelete = (experience) => {
    setExperienceToDelete(experience);
    setConfirmDelete(true);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setExperienceToDelete(null);
  };

  return (
    <PagesLayout headerText="Experiences" buttonText="Add New Experience " onClick={() => navigate("/dashboard/experiences/add-experience")}>
      <div className=" bg-gray-100 min-h-screen text-center p-12">
        <h2 className="text-3xl font-semibold mb-6">All Experiences</h2>
        <p className="text-lg mb-8">Here, you can see all your experiences.</p>
        <div className="gap-x-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onEdit={handleEdit}
              onDelete={handleConfirmDelete}
            />
          ))}
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Edit Experience</h2>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              value={currentExperience.title}
              onChange={(e) => setCurrentExperience({ ...currentExperience, title: e.target.value })}
            />
            <textarea
              className="border p-2 w-full mb-4"
              value={currentExperience.description}
              onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })}
            ></textarea>
            <button className="bg-sky-700 text-white p-2 rounded mr-2" onClick={handleSave}>
              Save
            </button>
            <button className="bg-gray-300 text-black p-2 rounded" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {confirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this experience?</p>
            <button className="bg-red-700 text-white p-2 rounded mr-2" onClick={() => handleDelete(experienceToDelete.id)}>
              Delete
            </button>
            <button className="bg-gray-300 text-black p-2 rounded" onClick={handleCancelDelete}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </PagesLayout>
  );
};

export default Experiences;
