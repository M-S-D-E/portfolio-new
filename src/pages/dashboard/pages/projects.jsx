import PagesLayout from '../layouts/pagesLayout';

const Projects = () => {
  return (
    <PagesLayout headerText="Projects" buttonText="Add New Project">
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">All Projects</h2>
        <p>Here, you can see all your projects.</p>
      </div>
    </PagesLayout>
  );
}

export default Projects;
