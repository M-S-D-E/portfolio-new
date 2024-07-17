import React from 'react';
import { Edit3, Trash2 } from 'lucide-react'; // Example icons, adjust imports as needed

const ProjectsCard = () => {
    return (
        <div className='h-40 w-40 bg-sky-700 rounded-lg shadow-lg p-4 flex flex-col'>
            <div className='flex justify-between items-start mb-4'>
                <div className='flex space-x-2'>
                    <button className='text-white hover:text-gray-300'>
                        <Trash2 size={20} />
                    </button>
                    <button className='text-white hover:text-gray-300'>
                        <Edit3 size={20} />
                    </button>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h3 className='text-white text-lg font-semibold mb-2'>Project Title</h3>
                <p className='text-gray-200 text-sm text-center'>
                    A brief description of the project goes here.
                </p>
            </div>
        </div>
    );
}

export default ProjectsCard;
