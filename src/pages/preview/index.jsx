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
          <motion.h2 className="text-2xl md:text-3xl font-semibold mb-4" variants={formVariants}>{data?.userProfile?.about}</motion.h2>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            {data?.userProfile?.bio}
          </motion.p>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            Location: {data?.userProfile?.location}
          </motion.p>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            Marital Status: {data?.userProfile?.maritalStatus}
          </motion.p>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            Gender: {data?.userProfile?.sex}
          </motion.p>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            Date of Birth: {data?.userProfile?.dateOfBirth}
          </motion.p>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            Contact: {data?.userProfile?.contact}
          </motion.p>
          <motion.a href={data?.userProfile?.resume} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-blue-500 mb-4" variants={formVariants}>
            Resume
          </motion.a>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            Languages: {data?.userProfile?.languages.join(', ')}
          </motion.p>
          <motion.div className="flex space-x-4 mb-4" variants={formVariants}>
            <motion.a
              href={data?.userProfile?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-gray-600 hover:text-gray-800"
              variants={formVariants}
            >
              <FaGithub className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href={data?.userProfile?.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-blue-700 hover:text-blue-900"
              variants={formVariants}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={data?.userProfile?.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-blue-400 hover:text-blue-600"
              variants={formVariants}
            >
              <FaTwitter className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
        <motion.img
          src={`https://savefiles.org/${data?.userProfile?.profilePicture}?shareable_link=279`}
          alt="Profile Picture"
          className="md:w-1/3 w-full h-auto md:ml-8 mt-8 md:mt-0 shadow-lg rounded-2xl"
          variants={formVariants}
        />

      </motion.main>


      {/* Skills section */}
      <motion.section className="w-full max-w-6xl mx-auto mt-20 px-4 border-t-2 border-gray-600 pt-8 text-center" variants={formVariants}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">SKILLS</h1>
      </motion.section>

      <motion.section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto mt-8" variants={formVariants}>
        {data.skills.map(skill => (
          <motion.div key={skill.id}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm"
            variants={formVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Code className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <p>{skill.levelOfProficiency}</p>
          </motion.div>
        ))}


      </motion.section>

      {/* Project Section */}
      <motion.section className="w-full max-w-6xl mx-auto mt-20 px-4 border-t-2 border-gray-600 pt-8" variants={formVariants}>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h1>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={formVariants}>
          {data.projects.map((project) => (
            <motion.div
              key={project._id}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-xl flex flex-col justify-between max-w-xs md:max-w-sm"
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
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{project.projectName}</h3>
                  <p className="mb-2">{project.description}</p>
                </div>
                <div className="text-sm flex-grow text-blue-400">
                  <p className="mb-1">Institution: {project.nameOfInstitution}</p>
                  <p className="mb-1">Contributors: {project.contributors}</p>
                  <p className="mb-1">Skills: {project.skill}</p>
                  <p>{project.startDate} to {project.endDate}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-blue-400 hover:underline justify-center items-center"
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
              {data.education?.map((edu) => (
                <div key={edu._id} className="mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{edu.program}</h3>
                  <p className="text-lg">{edu.schoolName} - {edu.location}</p>
                  <p className="text-md text-blue-400">Qualification: {edu.qualification}</p>
                  <p className="text-md text-blue-400">Grade: {edu.grade}</p>
                  <p className="text-md">{edu.startDate} to {edu.endDate}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Volunteering' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Volunteering</h2>
              {data.volunteering?.map((vol) => (
                <div key={vol._id} className="mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{vol.projectName}</h3>
                  <p className="text-lg">{vol.organization} - {vol.location}</p>
                  <p className="text-md text-gray-600">Role: {vol.role}</p>
                  <p className="text-md text-gray-600">Skills: {vol.skills}</p>
                  <p className="text-md text-gray-600">{vol.startDate} to {vol.endDate}</p>
                  <p className="mt-2">{vol.description}</p>
                  <p className="text-md">Responsibilities: {vol.responsibility}</p>
                </div>
              ))}
            </div>
          )}



          {activeTab === 'Experience' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              {data.experiences?.map((exp) => (
                <div key={exp._id} className="mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                  <p className="text-lg">{exp.companyName} - {exp.startDate} to {exp.endDate}</p>
                  <p className="text-md text-blue-400 ">Location: {exp.location}</p>
                  <p className="text-md text-blue-400">Responsibilities: {exp.responsibility}</p>
                </div>
              ))}
            </div>
          )}


          {activeTab === 'Achievements' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Achievements</h2>
              <ul className="list-disc list-inside">
                {data.achievements?.map((achievement) => (
                  <li key={achievement._id} className="text-lg mb-4 flex items-start">
                    {achievement.image && (
                      <div className="w-32 h-32 overflow-hidden rounded-lg mr-4">
                        <img
                          src={`https://savefiles.org/${achievement.image}?shareable_link=279`}
                          alt={achievement.awards}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-bold">{achievement.awards}</div>
                      <div className="text-sm mb-2">{achievement.description}</div>
                      <div className="text-xs text-blue-400">Institution: {achievement.nameOfInstitution}</div>
                      <div className="text-xs text-blue-400">Date: {achievement.date}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </motion.section>

      {/* Footer
      <motion.footer className="text-center mt-8 mb-4" variants={formVariants}>
        <p>&copy; 2024 Stephen Sappor. All rights reserved.</p>
      </motion.footer> */}
    </motion.div>
  );
};

export default Preview;