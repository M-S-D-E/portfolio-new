import React from 'react';
import { Edit3, DeleteIcon } from 'lucide-react';
import AchievementsCard from '../../../components/achievementsCard';
import PagesLayout from '../layouts/pagesLayout';

const Achievements = () => {
  const achievements = Array(8).fill({
    title: 'Achievement Title',
    description: 'A brief description of the achievement goes here.',
    deleted: <DeleteIcon size={20} />,
    edit: <Edit3 size={20} />,
  });

  return (
    <PagesLayout headerText="Achievements" buttonText="Add New Achievement">
      <div className="p-6 bg-gray-100 min-h-screen text-center p-12 ">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">All Achievements</h2>
        <p className="text-gray-600 mb-6">Hey, here are your achievements!</p>
        <div className="gap-x-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-8 ">
          {achievements.map((card, index) => (
            <AchievementsCard
              key={index}
              title={card.title}
              description={card.description}
              deleted={card.deleted}
              edit={card.edit}
            />
          ))}
        </div>
      </div>
    </PagesLayout>
  );
};

export default Achievements;
