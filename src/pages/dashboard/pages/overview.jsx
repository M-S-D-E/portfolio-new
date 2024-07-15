import PagesLayout from '../layouts/pagesLayout';

const Overview = () => {
  return (
    <PagesLayout headerText="Overview">
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p>This is the overview of the application.</p>
      </div>
    </PagesLayout>
  );
}

export default Overview;
