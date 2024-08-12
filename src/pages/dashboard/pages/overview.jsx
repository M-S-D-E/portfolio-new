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
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteering: totalVolunteering.length,
        education: totalEducation.length,
        experiences: totalExperiences.length,
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
          className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-8 text-blue-700"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Overview
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {Object.entries(data).map(([key, value]) => (
                <motion.div
                  key={key}
                  className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </h3>
                  <CountUp
                    className="text-3xl font-bold text-gray-800"
                    start={0}
                    end={value}
                    duration={2.5}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-lg shadow-lg text-center mb-12 mx-auto max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p className="text-lg text-gray-700 italic">
                A cumulative representation of your professional journey will appear here.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <button
                className="py-2 px-6 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                onClick={() => navigate('/preview')}
              >
                Preview Page
              </button>
              <CountUp
                className="text-2xl font-semibold mt-4"
                start={0}
                end={100}
                duration={2.5}
              />
            </motion.div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default OverviewSection;
