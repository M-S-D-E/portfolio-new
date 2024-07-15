import PagesLayout from '../layouts/pagesLayout';

const Achievements = () => {
  return (
    <PagesLayout headerText="Achievements" buttonText="Add New Achievement">
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">All Achievements</h2>
        <p>Hey, here are your achievements!</p>
      </div>
    </PagesLayout>
  );
}

export default Achievements;
