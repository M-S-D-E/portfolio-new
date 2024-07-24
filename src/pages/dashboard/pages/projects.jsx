import React, { useState } from 'react';
import { Edit3, Trash2 } from 'lucide-react';
import ProjectsCard from '../../../components/projectsCard';
import PagesLayout from '../layouts/pagesLayout';

const Projects = () => {
  const initialProjects = [
    { id: 1, title: 'HTML Project', description: 'Beginner', proficiency: 'Beginner' },
    { id: 2, title: 'HTML Project', description: 'Intermediate', proficiency: 'Intermediate' },
    { id: 3, title: 'HTML Project', description: 'Advanced', proficiency: 'Advanced' },
    { id: 4, title: 'JavaScript Project', description: 'Beginner', proficiency: 'Beginner' },
    { id: 5, title: 'JavaScript Project', description: 'Intermediate', proficiency: 'Intermediate' },
    { id: 6, title: 'JavaScript Project', description: 'Advanced', proficiency: 'Advanced' },
    { id: 7, title: 'React Project', description: 'Beginner', proficiency: 'Beginner' },
    { id: 8, title: 'React Project', description: 'Intermediate', proficiency: 'Intermediate' },
    { id: 9, title: 'React Project', description: 'Advanced', proficiency: 'Advanced' },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
    setConfirmDelete(false);
  };

  const handleEdit = (project) => {
    setCurrentProject(project);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProjects(projects.map((project) => (project.id === currentProject.id ? currentProject : project)));
    setIsEditing(false);
    setCurrentProject(null);
  };

  const handleConfirmDelete = (project) => {
    setProjectToDelete(project);
    setConfirmDelete(true);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setProjectToDelete(null);
  };

  return (
    <PagesLayout headerText="Projects" buttonText="Add New Project">
      <div className=" bg-gray-100 min-h-screen text-center p-12">
        <h2 className="text-3xl font-semibold mb-6">All Projects</h2>
        <p className="text-lg mb-8">Here, you can see all your projects.</p>
        <div className="gap-x-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-8">
          {projects.map((project) => (
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              proficiency={project.proficiency}
              deleted={<Trash2 onClick={() => handleConfirmDelete(project)} />}
              edit={<Edit3 onClick={() => handleEdit(project)} />}
            />
          ))}
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Edit Project</h2>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              value={currentProject.title}
              onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
            />
            <input
              type="text"
              className="border p-2 w-full mb-4"
              value={currentProject.description}
              onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
            />
            <input
              type="text"
              className="border p-2 w-full mb-4"
              value={currentProject.proficiency}
              onChange={(e) => setCurrentProject({ ...currentProject, proficiency: e.target.value })}
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

      {confirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this project?</p>
            <button className="bg-red-700 text-white p-2 rounded mr-2" onClick={() => handleDelete(projectToDelete.id)}>
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

export default Projects;
