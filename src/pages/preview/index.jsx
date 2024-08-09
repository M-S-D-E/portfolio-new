import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { motion } from 'framer-motion';
import { Code, LineChart } from 'lucide-react';
import { AdjustmentsIcon } from '@heroicons/react/outline';
import juniorImage from '../../assets/images/junior.png';
import fleetzImage from '../../assets/images/fleetz.png';
import imperialImage from '../../assets/images/imperial.png';
import tubeImage from '../../assets/images/tube.png';
import lawyerImage from '../../assets/images/lawyer.png';
import eventImage from '../../assets/images/event.png';
import recipesImage from '../../assets/images/recipes.png';


const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 3 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const educationData = [
  {
    id: '66a2bfcf9f5f549831d676f1',
    schoolName: 'University of Cape Coast',
    program: 'BSc Molecular Biology & Biotechnology',
    qualification: 'degree',
    location: 'Cape Coast',
    grade: '100000000',
    startDate: '2024-07-09',
    endDate: '2024-07-31',
    createdAt: '2024-07-25T21:12:47.257Z',
    updatedAt: '2024-07-25T21:12:47.257Z',
    user: '66a2babe9f5f549831d676b3',
  },
];



const volunteeringData = [
  {
    title: 'Hackerton',
    institution: 'Amalitech',
    description: 'Application solution',
    location: 'Accra',
  },
];

const experienceData = [
  {
    id: '66a2cc088671d8e32524751c',
    role: 'Full Stack Developer',
    companyName: 'Mest-Africa Ghana',
    startDate: '2024-05-01',
    endDate: 'Present',
    location: 'Accra',
    responsibility: 'Interface development',
  },
];

const achievements = [
  {
    id: '66a3bd7b20deb42688b9c953',
    nameOfInstitution: 'north',
    awards: 'ram',
    description: 'achievements',
    date: '2024-07-09',
    createdAt: '2024-07-26T15:15:07.630Z',
    updatedAt: '2024-07-26T15:15:07.630Z',
    user: '66a2babe9f5f549831d676b3',
    image: 'secure/uploads/15397',
  },
];



const Preview = () => {
  const data = useLoaderData();
  console.log("🚀 ~ Preview ~ data:", data);
  const [activeTab, setActiveTab] = useState('Education');

  const tabs = [
    { name: 'Education', content: 'Education' },
    { name: 'Volunteering', content: 'Details about Volunteering...' },
    { name: 'Experience', content: 'Experience' },
    { name: 'Achievements', content: 'Details about Achievements...' },
  ];


  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 flex flex-col items-center justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.main className="flex flex-col md:flex-row items-center justify-center text-center mt-8 px-4 md:px-8" variants={formVariants}>
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2" variants={formVariants}>
            <span className="text-blue-400">{data.firstName} {data.lastName}</span>
          </motion.h1>
          <motion.h2 className="text-2xl md:text-3xl font-semibold mb-4" variants={formVariants}>a Front-end Web Developer.</motion.h2>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            A versatile professional with a passion for creativity and innovation. With a background in graphic design, web development, content creation, and AWS cloud computing, I bring a unique blend of skills to every project. Whether it's designing captivating visuals, developing engaging websites, creating compelling content, or crafting effective marketing strategies.
          </motion.p>
        </div>
        <motion.img src={juniorImage} alt="junior" className="md:w-1/3 w-full h-auto md:ml-8 mt-8 md:mt-0 shadow-lg" variants={formVariants} />
      </motion.main>

      <motion.section className="w-full max-w-6xl mx-auto mt-20 px-4 border-t-2 border-gray-600 pt-8 text-center" variants={formVariants}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">SKILLS</h1>
      </motion.section>

      <motion.section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto mt-8" variants={formVariants}>
        <motion.div
          className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm"
          variants={formVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Code className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p>Building with HTML, CSS, JS, React & NodeJs. User-friendly & visually stunning experiences.</p>
        </motion.div>

        <motion.div
          className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm"
          variants={formVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <LineChart className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
          <p>Data analysis with Excel, PowerBi & SQL. Passionate to learn more to unlock deeper insights!</p>
        </motion.div>

        <motion.div
          className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm"
          variants={formVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-12 h-12 mx-auto text-blue-500 mb-4">
            <AdjustmentsIcon className="w-full h-full text-blue-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
          <p>I create eye-catching graphics and user interfaces that captivate and connect. Using Photoshop & Canva.</p>
        </motion.div>

        <motion.div
          className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm"
          variants={formVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-12 h-12 mx-auto text-blue-500 mb-4">
            <svg className="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10 5.514 0 10-4.486 10-10 0-5.514-4.486-10-10-10zm3.073 15.27l-1.586-1.593c-.412-.414-.416-1.086 0-1.5.41-.414 1.082-.414 1.492 0l1.945 1.954 5.27-5.308c.406-.41 1.086-.41 1.492 0 .406.41.406 1.08 0 1.49l-6.759 6.828c-.203.205-.474.308-.744.308-.266 0-.536-.103-.744-.308z" fill="#FF9900" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">AWS Cloud Practitioner</h3>
          <p>Basic understanding of AWS services, cloud concepts, and AWS Cloud Practitioner Essentials.</p>
        </motion.div>
      </motion.section>

      {/* Project Section */}
      <motion.section className="w-full max-w-6xl mx-auto mt-20 px-4 border-t-2 border-gray-600 pt-8" variants={formVariants}>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h1>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={formVariants}>
          {/* Project 1 */}
          <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
            <img src={fleetzImage} alt="Project 1" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-400">Fleetz</h3>
            <p>A website showcasing a fleet of cars. Built using html, CSS & Js.</p>
          </motion.div>
          {/* Project 2 */}
          <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
            <img src={imperialImage} alt="Project 2" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-400">Imperial</h3>
            <p>A restaurant website featuring menu items and online ordering. Built with React and Node.js.</p>
          </motion.div>
          {/* Project 3 */}
          <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
            <img src={tubeImage} alt="Project 3" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-400">Tube</h3>
            <p>App providing an exceptional platform for managing daily tasks. Built using React and Tailwind CSS.</p>
          </motion.div>
          {/* Project 4 */}
          <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
            <img src={lawyerImage} alt="Project 4" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-400">Lawyer</h3>
            <p>Legal service platform offering consultations and resources. Built using React and Framer Motion.</p>
          </motion.div>
          {/* Project 5 */}
          <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
            <img src={eventImage} alt="Project 5" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-400">Event Planner</h3>
            <p>Event management website facilitating planning and coordination. Built using React and Tailwind CSS.</p>
          </motion.div>
          {/* Project 6 */}
          <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
            <img src={recipesImage} alt="Project 6" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-400">Recipes</h3>
            <p>Recipe sharing platform with user-submitted content. Built using React and Firebase.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Tabs Section */}
      <motion.section className="w-full max-w-6xl mx-auto mt-8" variants={formVariants}>
        <div className="flex justify-center space-x-6">
          {tabs.map(tab => (
            <motion.button
              key={tab.name}
              className={`text-lg px-4 py-2 rounded-lg focus:outline-none ${activeTab === tab.name ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={formVariants}
            >
              {tab.name}
            </motion.button>
          ))}
        </div>
        <div className="mt-8">
          {activeTab === 'Education' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              {data.education?.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{edu.program}</h3>
                  <p className="text-lg">{edu.institution} - {edu.location}</p>
                  <p className="mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Volunteering' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Volunteering</h2>
              {data.volunteering?.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{edu.title}</h3>
                  <p className="text-lg">{edu.institution} - {edu.location}</p>
                  <p className="mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Experience' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              {data.experiences?.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                  <p className="text-lg">{exp.companyName} - {exp.startDate} to {exp.endDate}</p>
                  <p className="text-md text-gray-600">Location: {exp.location}</p>
                  <p className="text-md">Responsibilities: {exp.responsibility}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Achievements' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Achievements</h2>
              <ul className="list-disc list-inside">
                {data.achievements?.map((achievement) => (
                  <li key={achievement.id} className="text-lg mb-1">
                    <div className="font-bold">{achievement.awards}</div>
                    <div className="text-sm">{achievement.description}</div>
                    <div className="text-xs text-gray-500">Date: {achievement.date}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer className="text-center mt-8 mb-4" variants={formVariants}>
        <p>&copy; 2024 Stephen Sappor. All rights reserved.</p>
      </motion.footer>
    </motion.div>
  );
};

export default Preview;