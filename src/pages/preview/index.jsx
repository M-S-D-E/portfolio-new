import React from 'react';
import { motion } from 'framer-motion';
import { Code, LineChart } from 'lucide-react'; 
import { AdjustmentsIcon } from '@heroicons/react/outline'; 
import hero from '../../assets/images/hero.png';

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
      className="min-h-screen bg-gradient-to-br from-[#9F8E7C] to-blue-500 text-white p-4 flex flex-col items-center justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header className="w-full flex justify-between items-start px-4 md:px-8" variants={formVariants}>
        <div className="text-left">
          <motion.h1 className="text-2xl md:text-3xl font-bold" variants={formVariants}>STEPHEN SAPPOR JNR.</motion.h1>
        </div>
        <motion.div className="text-right" variants={formVariants}>
          <motion.p variants={formVariants}>Stephensappor5@gmail.com</motion.p>
          <motion.p variants={formVariants}>(+233) 543218905</motion.p>
          <motion.p variants={formVariants}>Facebook, Instagram, Telegram</motion.p>
        </motion.div>
      </motion.header>

      <motion.main className="flex flex-col items-center justify-center text-center mt-8 px-4 md:px-8" variants={formVariants}>
        <motion.img src={hero} alt="Steve image" className="w-48 h-auto md:w-72 shadow-lg mb-4 md:mb-8" variants={formVariants} />
        <motion.h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4" variants={formVariants}>FRONT-END</motion.h2>
        <motion.h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8" variants={formVariants}>WEB DEVELOPER</motion.h2>
      </motion.main>

      <motion.section className="w-full max-w-6xl mx-auto flex flex-wrap justify-center space-x-4 space-y-8 md:space-y-0 md:space-x-8" variants={formVariants}>
        <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
          <Code className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p>Building with HTML, CSS, JS, React & NodeJs. User-friendly & visually stunning experiences.</p>
        </motion.div>
        <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
          <LineChart className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
          <p>Data analysis with Excel, PowerBi & SQL. Passionate to learn more to unlock deeper insights!</p>
        </motion.div>
        <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
          
          <div className="w-12 h-12 mx-auto text-blue-500 mb-4">
           
            <AdjustmentsIcon className="w-full h-full text-blue-500" />
          </div>
          <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
          <p>I create eye-catching graphics and user interfaces that captivate and connect. Using Photoshop & Canva.</p>
        </motion.div>
       
        <motion.div className="bg-gray-800 text-white p-6 rounded-lg shadow-md text-center flex-grow max-w-xs md:max-w-sm" variants={formVariants}>
         
          <div className="w-12 h-12 mx-auto text-blue-500 mb-4">
            <svg className="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10 5.514 0 10-4.486 10-10 0-5.514-4.486-10-10-10zm3.073 15.27l-1.586-1.593c-.412-.414-.416-1.086 0-1.5.41-.414 1.082-.414 1.492 0l1.945 1.954 5.27-5.308c.406-.41 1.086-.41 1.492 0 .406.41.406 1.08 0 1.49l-6.759 6.828c-.203.205-.474.308-.744.308-.266 0-.536-.103-.744-.308z" fill="#FF9900"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">AWS Cloud Practitioner</h3>
          <p>Basic understanding of AWS services, cloud concepts, and AWS Cloud Practitioner Essentials.</p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Preview;
