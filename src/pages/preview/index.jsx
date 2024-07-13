import React from 'react';
import { motion } from 'framer-motion';
import { Code, LineChart } from 'lucide-react';
import { AdjustmentsIcon } from '@heroicons/react/outline';
import heroImage from '../../assets/images/hero.png';
import fleetzImage from '../../assets/images/fleetz.png';
import imperialImage from '../../assets/images/imperial.png';
import tubeImage from '../../assets/images/tube.png';
import lawyerImage from '../../assets/images/lawyer.png';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
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
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 flex flex-col items-center justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.main className="flex flex-col md:flex-row items-center justify-center text-center mt-8 px-4 md:px-8" variants={formVariants}>
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2" variants={formVariants}>Hi, I'm <span className="text-blue-400">STEPHEN SAPPOR JNR</span></motion.h1>
          <motion.h2 className="text-2xl md:text-3xl font-semibold mb-4" variants={formVariants}>a Front-end Web Developer.</motion.h2>
          <motion.p className="text-lg md:text-xl mb-4" variants={formVariants}>
            A versatile professional with a passion for creativity and innovation. With a background in graphic design, web development, content creation, and AWS cloud computing, I bring a unique blend of skills to every project. Whether it's designing captivating visuals, developing engaging websites, creating compelling content, or crafting effective marketing strategies.
          </motion.p>
          <motion.div className="flex space-x-4 mt-4" variants={formVariants}>
            <a href="#" className="bg-gray-800 text-white p-2 rounded-lg">LinkedIn</a>
            <a href="#" className="bg-gray-800 text-white p-2 rounded-lg">Twitter</a>
            <a href="#" className="bg-gray-800 text-white p-2 rounded-lg">Facebook</a>
          </motion.div>
        </div>
        <motion.img src={heroImage} alt="Gerald Nana Kwame Ampadu" className="md:w-1/3 w-full h-auto md:ml-8 mt-8 md:mt-0 shadow-lg" variants={formVariants} />
      </motion.main>

      <motion.section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto mt-8" variants={formVariants}>
        <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
          <Code className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p>Building with HTML, CSS, JS, React & NodeJs. User-friendly & visually stunning experiences.</p>
        </motion.div>
        <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
          <LineChart className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
          <p>Data analysis with Excel, PowerBi & SQL. Passionate to learn more to unlock deeper insights!</p>
        </motion.div>
        <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
          <div className="w-12 h-12 mx-auto text-blue-500 mb-4">
            <AdjustmentsIcon className="w-full h-full text-blue-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
          <p>I create eye-catching graphics and user interfaces that captivate and connect. Using Photoshop & Canva.</p>
        </motion.div>
        <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
          <div className="w-12 h-12 mx-auto text-blue-500 mb-4">
            <svg className="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10 5.514 0 10-4.486 10-10 0-5.514-4.486-10-10-10zm3.073 15.27l-1.586-1.593c-.412-.414-.416-1.086 0-1.5.41-.414 1.082-.414 1.492 0l1.945 1.954 5.27-5.308c.406-.41 1.086-.41 1.492 0 .406.41.406 1.08 0 1.49l-6.759 6.828c-.203.205-.474.308-.744.308-.266 0-.536-.103-.744-.308z" fill="#FF9900"/>
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
            <h3 className="text-xl font-bold mb-2">Fleets - Fleet of Cars</h3>
            <p>A website showcasing a fleet of cars. Built using React and Tailwind CSS.</p>
          </motion.div>
          {/* Project 2 */}
          <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
            <img src={imperialImage} alt="Project 2" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Imperial - Restaurant Website</h3>
            <p>A restaurant website featuring menu items and online ordering. Developed with HTML, CSS, and JavaScript.</p>
          </motion.div>
          {/* Project 3 */}
          <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
            <img src={tubeImage} alt="Project 3" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">YouTube Clone</h3>
            <p>A clone of YouTube's interface with video playback and user commenting. Created using React and Firebase.</p>
          </motion.div>
          {/* Project 3 */}
          <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
            <img src={lawyerImage} alt="Project 3" className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">YouTube Clone</h3>
            <p>A clone of YouTube's interface with video playback and user commenting. Created using React and Firebase.</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Preview;
