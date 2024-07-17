import React from 'react';
import { Edit3, Trash2 } from 'lucide-react';
import EducationCard from '../../../components/educationCard';
import PagesLayout from '../layouts/pagesLayout';

const achievements = [
  {
    title: 'B.Sc. Computer Science',
    description: 'Graduated with honors from XYZ University.',
    deleted: false,
    edit: true,
  },
  {
    title: 'M.Sc. Data Science',
    description: 'Completed with distinction from ABC Institute.',
    deleted: false,
    edit: true,
  },
  // Add more achievements as needed
];

const Education = () => {
  return (
    <PagesLayout headerText="Education" buttonText="Add New Education">
      <div className="p-6 bg-gray-100 min-h-screen text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Education</h2>
          <p className="text-lg text-gray-600 mb-12">Hey, here are your achievements!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {achievements.map((card, index) => (
              <EducationCard
                key={index}
                title={card.title}
                description={card.description}
                deleted={card.deleted}
                edit={card.edit}
              />
            ))}
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Education;
