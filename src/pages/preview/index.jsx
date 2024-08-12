import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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

const Preview = () => {
  const data = useLoaderData();
  console.log("🚀 ~ Preview ~ data:", data);
  const [activeTab, setActiveTab] = useState('Education');

  const tabs = [
    { name: 'Education', content: 'Education' },
    { name: 'Experience', content: 'Experience' },
    { name: 'Achievements', content: 'Details about Achievements...' },
  ];

  return (
    <motion.div
      className="min-h-screen bg-[#212428] text-white p-4 flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.main
        className="flex flex-col md:flex-row items-center justify-center text-center mt-8 px-4 md:px-8 w-full max-w-6xl"
        variants={formVariants}
      >
        {/* Profile Information */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-2"
            variants={formVariants}
          >
            <span className="text-blue-400">
              {data.firstName} {data.lastName}
            </span>
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            variants={formVariants}
          >
            {data?.userProfile?.about}
          </motion.h2>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            {data?.userProfile?.bio}
          </motion.p>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            <strong>Location:</strong> {data?.userProfile?.location}
          </motion.p>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            <strong>Contact:</strong> {data?.userProfile?.contact}
          </motion.p>
          {data?.userProfile?.resume && (
            <motion.a
              href={`https://savefiles.org/${data?.userProfile?.resume}?shareable_link=279`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-blue-500 mb-4 hover:underline"
              variants={formVariants}
              download
            >
              Resume
            </motion.a>
          )}
          {data?.userProfile?.languages && (
            <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
              <strong>Languages:</strong> {data?.userProfile?.languages.join(', ')}
            </motion.p>
          )}
          {/* Social Links */}
          <motion.div className="flex space-x-4 mb-4" variants={formVariants}>
            {data?.userProfile?.githubLink && (
              <motion.a
                href={data?.userProfile?.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-gray-600 hover:text-gray-800"
                variants={formVariants}
              >
                <FaGithub className="w-6 h-6 text-white" />
              </motion.a>
            )}
            {data?.userProfile?.linkedinLink && (
              <motion.a
                href={data?.userProfile?.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-blue-700 hover:text-blue-900"
                variants={formVariants}
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
            )}
            {data?.userProfile?.twitterLink && (
              <motion.a
                href={data?.userProfile?.twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-blue-400 hover:text-blue-600"
                variants={formVariants}
              >
                <FaTwitter className="w-6 h-6" />
              </motion.a>
            )}
          </motion.div>
        </div>
        {/* Profile Picture */}
        {data?.userProfile?.profilePicture && (
          <motion.img
            src={`https://savefiles.org/${data?.userProfile?.profilePicture}?shareable_link=279`}
            alt="Profile Picture"
            className="md:w-1/3 w-full h-auto md:ml-8 mt-8 md:mt-0 shadow-lg rounded-2xl"
            variants={formVariants}
          />
        )}
      </motion.main>

      {/* Skills Section */}
      <motion.section
        className="w-full max-w-6xl mx-auto mt-20 px-4 md:px-8 border-t-2 border-gray-600 pt-8 text-center"
        variants={formVariants}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">SKILLS</h1>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto mt-8 px-4 md:px-8"
        variants={formVariants}
      >
        {data.skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center w-full"
            variants={formVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <p>{skill.levelOfProficiency}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="w-full max-w-6xl mx-auto mt-20 px-4 md:px-8 border-t-2 border-gray-600 pt-8"
        variants={formVariants}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Projects
        </h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={formVariants}
        >
          {data.projects.map((project) => (
            <motion.div
              key={project._id}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-xl flex flex-col justify-between w-full"
              variants={formVariants}
            >
              {project.image && (
                <div className="w-full h-48 md:h-64 overflow-hidden rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src={`https://savefiles.org/${project.image}?shareable_link=279`}
                    alt={project.projectName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col justify-between flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    {project.projectName}
                  </h3>
                  <p className="mb-2">{project.description}</p>
                </div>
                <div className="text-sm flex-grow text-blue-400">
                  <p className="mb-1">
                    <strong>Institution:</strong> {project.nameOfInstitution}
                  </p>
                  <p className="mb-1">
                    <strong>Contributors:</strong> {project.contributors}
                  </p>
                  <p className="mb-1">
                    <strong>Skills:</strong> {project.skill}
                  </p>
                  <p>
                    <strong>Duration:</strong> {project.startDate} to{' '}
                    {project.endDate}
                  </p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-blue-400 hover:underline flex justify-center items-center"
                  >
                    <FaGithub size={24} className="text-white" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Tabs Section */}
      <motion.section
        className="w-full max-w-6xl mx-auto mt-20 px-4 md:px-8"
        variants={formVariants}
      >
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 space-y-4 sm:space-y-0">
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              className={`text-lg px-4 py-2 rounded-lg focus:outline-none ${
                activeTab === tab.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-300'
              }`}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={formVariants}
            >
              {tab.name}
            </motion.button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'Education' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              {data.education?.map((edu) => (
                <div key={edu._id} className="mb-8 relative">
                  <div className="absolute left-0 top-2.5 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="ml-8 p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-blue-400">
                      {edu.program}
                    </h3>
                    <p className="text-lg text-white">
                      {edu.schoolName} - {edu.location}
                    </p>
                    <p className="text-md text-blue-400">
                      <strong>Qualification:</strong> {edu.qualification}
                    </p>
                    <p className="text-md text-gray-400">
                      <strong>Duration:</strong> {edu.startDate} to{' '}
                      {edu.endDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Experience' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              {data.experiences?.map((exp) => (
                <div key={exp._id} className="mb-8 relative">
                  <div className="absolute left-0 top-2.5 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="ml-8 p-6 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-blue-400">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-white">
                      {exp.companyName} - {exp.startDate} to {exp.endDate}
                    </p>
                    <p className="text-md text-blue-400">
                      <strong>Location:</strong> {exp.location}
                    </p>
                    <p className="text-md text-blue-400">
                      <strong>Responsibilities:</strong> {exp.responsibility}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Achievements' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                Achievements
              </h2>
              <ul className="list-disc list-inside">
                {data.achievements?.map((achievement) => (
                  <li
                    key={achievement._id}
                    className="text-lg mb-8 relative flex items-start"
                  >
                    <div className="absolute left-0 top-8 w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="ml-8 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row">
                      {achievement.image && (
                        <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg mr-0 md:mr-4 mb-4 md:mb-0">
                          <img
                            src={`https://savefiles.org/${achievement.image}?shareable_link=279`}
                            alt={achievement.awards}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-white">
                          {achievement.awards}
                        </div>
                        <div className="text-sm mb-2 text-gray-400">
                          {achievement.description}
                        </div>
                        <div className="text-xs text-blue-400">
                          <strong>Institution:</strong>{' '}
                          {achievement.nameOfInstitution}
                        </div>
                        <div className="text-xs text-blue-400">
                          <strong>Date:</strong> {achievement.date}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer className="text-center mt-8 mb-4" variants={formVariants}>
        <p>
          &copy; 2024 {data.firstName} {data.lastName}. All rights reserved.
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default Preview;
