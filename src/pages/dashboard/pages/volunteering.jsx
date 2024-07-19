import React from 'react';
import VolunteeringCard from '../../../components/volunteeringCard'; // Assuming you have a VolunteeringCard component
import PagesLayout from '../layouts/pagesLayout';

const volunteeringExperiences = [
  {
    title: 'Community Clean-Up',
    description: 'Participated in a community clean-up event organized by XYZ Organization.',
    deleted: false,
    edit: true,
  },
  {
    title: 'Food Drive Volunteer',
    description: 'Helped organize and distribute food to those in need at ABC Food Bank.',
    deleted: false,
    edit: true,
  },
];

const Volunteering = () => {
  return (
    <PagesLayout headerText="Volunteering" buttonText="Add New Volunteering">
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="container mx-auto p-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Volunteering</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">Here are your volunteering experiences!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {volunteeringExperiences.map((experience, index) => (
              <VolunteeringCard
                key={index}
                title={experience.title}
                description={experience.description}
                deleted={experience.deleted}
                edit={experience.edit}
              />
            ))}
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default Volunteering;
