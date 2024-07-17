import React, { useState } from 'react';
import { FilePenLine, Trash2 } from 'lucide-react';
import SkillsCard from '../../../components/skillsCard';
import PagesLayout from '../layouts/pagesLayout';

const Skills = () => {
  const initialSkills = [
    { id: 1, language: 'HTML', proficiency: 'Beginner' },
    { id: 2, language: 'HTML', proficiency: 'Intermediate' },
    { id: 3, language: 'HTML', proficiency: 'Advanced' },
    { id: 4, language: 'JavaScript', proficiency: 'Beginner' },
    { id: 5, language: 'JavaScript', proficiency: 'Intermediate' },
    { id: 6, language: 'JavaScript', proficiency: 'Advanced' },
    { id: 7, language: 'React', proficiency: 'Beginner' },
    { id: 8, language: 'React', proficiency: 'Intermediate' },
    { id: 9, language: 'React', proficiency: 'Advanced' },
  ];

  const [skills, setSkills] = useState(initialSkills);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(null);

  const handleDelete = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const handleEdit = (skill) => {
    setCurrentSkill(skill);
    setIsEditing(true);
  };

  const handleSave = () => {
    setSkills(skills.map((skill) => (skill.id === currentSkill.id ? currentSkill : skill)));
    setIsEditing(false);
    setCurrentSkill(null);
  };

  return (
    <PagesLayout headerText="Skills" buttonText="Add New Skill">
      <div className="p-6 bg-gray-100 min-h-screen text-center p-12">
        <h2 className="text-3xl font-semibold mb-6 ">All Skills</h2>
        <p className="text-lg mb-8">Here, you can see all your skills.</p>
        <div className='text-white gap-x-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-8'>
          {skills.map((skill) => (
            <SkillsCard
              key={skill.id}
              language={skill.language}
              proficiency={skill.proficiency}
              deleted={<Trash2 onClick={() => handleDelete(skill.id)} />}
              edit={<FilePenLine onClick={() => handleEdit(skill)} />}
            />
          ))}
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Edit Skill</h2>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              value={currentSkill.language}
              onChange={(e) => setCurrentSkill({ ...currentSkill, language: e.target.value })}
            />
            <input
              type="text"
              className="border p-2 w-full mb-4"
              value={currentSkill.proficiency}
              onChange={(e) => setCurrentSkill({ ...currentSkill, proficiency: e.target.value })}
            />
            <button className="bg-sky-700 text-white p-2 rounded mr-2" onClick={handleSave}>
              Save
            </button>
            <button className="bg-gray-300 text-black p-2 rounded" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </PagesLayout>
  );
};

export default Skills;
