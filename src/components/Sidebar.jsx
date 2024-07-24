import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Mail, LogOut, Cog, BicepsFlexed, Twitter, GraduationCap, CircleUserRound, Scroll, Magnet } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-amber-600 text-sky-700 flex flex-col p-4 shadow-lg border-r border-sky-200">
      <div className="mb-6 flex items-center">
        <div className="text-3xl font-bold text-sky-900">MSDE Portfolio</div>
      </div>
      <div className="flex flex-col flex-grow space-y-2">
        <Link to="/dashboard" className="flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
          <Home className="w-5 h-5 text-sky-700" />
          <span>Overview</span>
        </Link>

        <Link to="/dashboard/profile" className="flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
          <CircleUserRound className="w-5 h-5 text-sky-700" />
          <span>Profile</span>
        </Link>

        <Link to="/dashboard/education" className="flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
          <Scroll className="w-5 h-5 text-sky-700" />
          <span>Education</span>
        </Link>

        <Link to="/dashboard/achievements" className="flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
          <BicepsFlexed className="w-5 h-5 text-sky-700" />
          <span>Achievements</span>
        </Link>

        <Link to="/dashboard/projects" className="flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
          <Briefcase className="w-5 h-5 text-sky-700" />
          <span>Projects</span>
        </Link>

        <Link to="/dashboard/experiences" className="flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
          <GraduationCap className="w-5 h-5 text-sky-700" />
          <span>Experiences</span>
        </Link>

        <Link to="/dashboard/skills" className="flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
          <Cog className="w-5 h-5 text-sky-700" />
          <span>Skills</span>
        </Link>

        <Link to="/dashboard/volunteering" className="flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
          <Magnet className="w-5 h-5 text-sky-700" />
          <span>Volunteering</span>
        </Link>

        <Link to="/dashboard/socials" className="flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
          <Twitter className="w-5 h-5 text-sky-700" />
          <span>Socials</span>
        </Link>

        <Link to="/dashboard/contact" className="flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
          <Mail className="w-5 h-5 text-sky-700" />
          <span>Contact</span>
        </Link>
      </div>
      <div className="mt-auto flex items-center space-x-2 text-sky-900 hover:bg-sky-200 rounded-lg p-2 transition duration-300 font-medium">
        <LogOut className="w-5 h-5 text-sky-700" />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;


