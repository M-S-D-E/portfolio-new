import React from 'react';

const SkillsCard = ({ language, proficiency, deleted, edit }) => {
  return (
    <div className="h-40 w-full bg-sky-700 rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <div className="flex justify-end space-x-2">
        <div className="cursor-pointer">
          {deleted}
        </div>
        <div className="cursor-pointer">
          {edit}
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{language}</h3>
        <p className="text-md">{proficiency}</p>
      </div>
    </div>
  );
};

export default SkillsCard;
