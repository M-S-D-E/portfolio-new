import React from 'react';
import { Twitter, Facebook, Instagram, LinkedIn } from 'lucide-react';

const SocialsCard = ({ platform, url, icon: Icon, bgColor, textColor }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`flex items-center p-4 rounded-lg shadow-md ${bgColor} ${textColor} hover:shadow-lg transition-shadow duration-300`}>
      <Icon className="w-6 h-6 mr-3" />
      <span className="text-lg font-medium">{platform}</span>
    </a>
  );
};

const Socials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <SocialsCard
        platform="Twitter"
        url="https://twitter.com/yourhandle"
        icon={Twitter}
        bgColor="bg-blue-500"
        textColor="text-white"
      />
      <SocialsCard
        platform="Facebook"
        url="https://facebook.com/yourhandle"
        icon={Facebook}
        bgColor="bg-blue-700"
        textColor="text-white"
      />
      <SocialsCard
        platform="Instagram"
        url="https://instagram.com/yourhandle"
        icon={Instagram}
        bgColor="bg-pink-500"
        textColor="text-white"
      />
      <SocialsCard
        platform="LinkedIn"
        url="https://linkedin.com/in/yourhandle"
        icon={LinkedIn}
        bgColor="bg-blue-800"
        textColor="text-white"
      />
    </div>
  );
};

export default Socials;
