import React from 'react';

const SkillsCard = ({ language, proficiency, deleted, edit }) => {
  return (
    <div className="h-40 w-full bg-gray-500 rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <button onClick={() => { }} div className="flex justify-end space-x-2">
        <div className="cursor-pointer">
          {deleted}
        </div>
        <div className="cursor-pointer">
          {edit}
        </div>
      </button>
      <button div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{language}</h3>
        <p className="text-md">{proficiency}</p>
      </button>
    </div>
  );
};

export default SkillsCard;
