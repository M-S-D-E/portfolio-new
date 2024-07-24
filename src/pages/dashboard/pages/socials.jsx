import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from 'lucide-react';
import PagesLayout from "../layouts/pagesLayout";
import SocialsCard from './SocialsCard'; // Ensure this path is correct

const socialMediaHandles = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/yourprofile',
    icon: <Facebook className="w-6 h-6 text-blue-600" />,
  },
  {
    platform: 'Twitter',
    url: 'https://www.twitter.com/yourprofile',
    icon: <Twitter className="w-6 h-6 text-blue-400" />,
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/yourprofile',
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/yourprofile',
    icon: <LinkedIn className="w-6 h-6 text-blue-700" />,
  },
  {
    platform: 'GitHub',
    url: 'https://www.github.com/yourprofile',
    icon: <GitHub className="w-6 h-6 text-gray-800" />,
  },
];

const Socials = () => {
  return (
    <PagesLayout headerText="Socials">
      <div className="text-center p-12">
        <h2 className="text-2xl font-semibold mb-4">Socials</h2>
        <p className="mb-8">This is the socials of the application.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {socialMediaHandles.map((handle, index) => (
            <SocialsCard key={index} platform={handle.platform} url={handle.url} icon={handle.icon} />
          ))}
        </div>
      </div>
    </PagesLayout>
  );
};

export default Socials;
