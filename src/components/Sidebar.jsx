import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Mail, LogOut, Cog, BicepsFlexed, Twitter } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-sky-500 text-sky-700 flex flex-col p-6 shadow-lg">
      <div className="mb-8">
        <div className="text-3xl font-bold mb-2 text-sky-900 ">MSDE Portfolio</div>
      </div>
      <div className="flex flex-col space-y-4">
        <Link to="/dashboard" className="flex items-center space-x-2 text-sky-900 hover:text-sky-950 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-bold">
          <Home className="w-6 h-6" />
          <span>Overview</span>
        </Link>
        <Link to="/dashboard/about" className="flex items-center space-x-2 text-sky-900 hover:text-sky-950 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-bold">
          <User className="w-6 h-6" />
          <span>About</span>
        </Link>
        <Link to="/dashboard/projects" className="flex items-center space-x-2 text-sky-900 hover:text-sky-950 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-bold">
          <Briefcase className="w-6 h-6" />
          <span>Projects</span>
        </Link>
        <Link to="/dashboard/skills" className="flex items-center space-x-2 text-sky-900 hover:text-sky-950 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-bold">
          <Cog className="w-6 h-6" />
          <span>Skills</span>
        </Link>
        <Link to="/dashboard/achievements" className="flex items-center space-x-2 text-sky-900 hover:text-sky-950 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-bold">
          <BicepsFlexed className="w-6 h-6" />
          <span>Achievements</span>
        </Link>
        <Link to="/dashboard/socials" className="flex items-center space-x-2 text-sky-900 hover:text-sky-950 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-bold">
          <Twitter className="w-6 h-6" />
          <span>Socials</span>
        </Link>
        <Link to="/dashboard/contact" className="flex items-center space-x-2 text-sky-900 hover:text-sky-950 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-bold">
          <Mail className="w-6 h-6" />
          <span>Contact</span>
        </Link>
      </div>
      <div className="mt-auto">
        <div className="flex items-center space-x-2 text-sky-900 hover:text-sky-950 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-bold">
          <LogOut className="w-6 h-6" />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
