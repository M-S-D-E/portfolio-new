import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { apiGetAchievements } from '../../../services/achievements';
import { apiGetSkills } from '../../../services/skills';
import { apiGetProjects } from '../../../services/projects';
import { apiGetVolunteering } from '../../../services/volunteering';
import { apiGetEducation } from '../../../services/education';
import { apiGetExperiences } from '../../../services/experiences';
import PageLoader from '../../../components/PageLoader';
import CountUp from "react-countup";


const OverviewSection = () => {
  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0,
  });

  const [IsLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getData = async () => {
    setIsLoading(true);
    try {
      const [
        totalSkills,
        totalAchievements,
        totalProjects,
        totalVolunteering,
        totalEducation,
        totalExperiences,
      ] = await Promise.all([
        apiGetSkills(),
        apiGetAchievements(),
        apiGetProjects(),
        apiGetVolunteering(),
        apiGetEducation(),
        apiGetExperiences(),
      ]);
      
      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.data.projects.length,
        achievements: totalAchievements.data.achievements.length,
        volunteering: totalVolunteering.length,
        education: totalEducation.data.education.length,
        experiences: totalExperiences.data.experiences.length,
      };

      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {IsLoading ? (
        <PageLoader />
      ) : (
        <motion.section 
          className="bg-white text-gray-800 h-screen flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto text-center px-6">
            <motion.h2 
              className="text-4xl font-bold mb-12"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our Summary
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div className="bg-blue-600 p-6 rounded-lg shadow-lg px-20">
                <h3 className="text-3xl font-bold mb-2">All Skills</h3>
                <p>{data.skills}</p>
              </motion.div>

              <motion.div className="bg-blue-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-2">All Achievements</h3>
                <p>{data.achievements}</p>
              </motion.div>

              <motion.div className="bg-blue-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-2">All Experiences</h3>
                <p>{data.experiences}</p>
              </motion.div>

              <motion.div className="bg-blue-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-2">All Volunteering</h3>
                <p>{data.volunteering}</p>
              </motion.div>

              <motion.div className="bg-blue-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-amber-400 mb-2">All Projects</h3>
                <p>{data.projects}</p>
              </motion.div>

              <motion.div className="bg-blue-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-2">All Education</h3>
                <p>{data.education}</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-blue-600 p-8 rounded-lg max-w-3xl mx-auto mt-12 shadow-lg text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="text-lg italic mx-4">
                A cumulative representation of your professional journey will appear here
              </p>
            </motion.div>

            <motion.div 
              className="flex justify-center mt-8"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <button
                className="py-2 px-6 bg-blue-800 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                onClick={() => navigate('preview/:username')}
              >
                Preview Page
              </button>
              {/* <CountUp
                  className="text-2xl font-semibold"
                  start={0}
                  end={100}
                /> */}
            </motion.div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default OverviewSection;
