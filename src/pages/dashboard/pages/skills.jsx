import PagesLayout from '../layouts/pagesLayout';

const Skills = () => {
  return (
    <PagesLayout headerText="Skills" buttonText="Add New Skill">
      
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">All Skills</h2>
        <p>Here, you can see all your skills.</p>
      </div>
    </PagesLayout>
  );
};

export default Skills;
