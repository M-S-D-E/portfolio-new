import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, LineChart } from 'lucide-react';
import { AdjustmentsIcon } from '@heroicons/react/outline';
import heroImage from '../../assets/images/hero.png';
import fleetzImage from '../../assets/images/fleetz.png';
import imperialImage from '../../assets/images/imperial.png';
import tubeImage from '../../assets/images/tube.png';
import lawyerImage from '../../assets/images/lawyer.png';
import eventImage from '../../assets/images/event.png';
import recipesImage from '../../assets/images/recipes.png';

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

const educationData = [
  {
    title: 'BSc Molecular Biology & Biotechnology',
    institution: 'University of Cape Coast',
    description: 'My expertise spans across various marketing channels, including digital, social media, and traditional mediums, allowing me to develop integrated marketing strategies tailored to meet specific objectives.',
    location: 'Cape Coast',
  },
];

const experienceData = [
  {
    title: 'Front-end Developer Trainee',
    company: 'Mest-Africa Ghana',
    duration: 'May 2024 to date',
    description: [
      'Enthusiastic and detail-oriented front-end web developer with a strong passion for creating intuitive and dynamic user interfaces.',
      'Skilled in HTML, CSS, JavaScript, and modern framework with React.',
      'Adept at translating design mockups into responsive, accessible, and interactive web pages.',
      'Committed to continuous learning and staying updated with the latest trends in web development to deliver cutting-edge solutions.',
      'Proven ability to collaborate effectively with cross-functional teams to achieve project goals and enhance user experience.',
    ],
  },
  {
    title: 'AWS Cloud Practitioner',
    company: 'Amalitech Ghana',
    duration: 'Feb 2024 to April 2024',
    description: [
      'Skilled in designing scalable and secure cloud architectures using AWS services like EC2, S3, RDS, and Lambda.',
      'Proficient in implementing cost-effective strategies, ensuring compliance with security standards.',
      'Experienced in automating tasks using CloudFormation and Lambda.',
      'Known for troubleshooting and resolving issues promptly.',
      'Committed to ongoing learning and integrating the latest advancements in AWS technology.',
    ],
  },
  {
    title: 'IT Officer and Marketing Distributor',
    company: 'Roxy Apps Limited',
    duration: 'Jan 2020 to May 2021',
    description: [
      'Proficient in selling software applications to educational institutions, businesses, and workshops, consistently meeting or exceeding sales targets.',
      'Organized and conducted comprehensive training sessions for clients to ensure effective software operation and troubleshooting.',
      'Addressed and resolved software-related issues promptly, enhancing customer satisfaction and retention.',
      'Proficient in running and installing essential software, including Windows and Microsoft Office. Skilled in diagnosing and resolving common IT errors.',
    ],
  },
];

const certificatesData = [
  'IBM Web Development Certificate',
  'AWS Cloud Practitioner Certificate',
  'Coursera Certificate in Google Data Analytics and Cybersecurity',
  'DataCamp Certificate in Introduction to Python, SQL, and Data Science',
];

const Preview = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const tabs = [
    { name: 'Education', content: 'Education' },
    { name: 'Professional Skills', content: 'Details about Professional Skills...' },
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
          <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2" variants={formVariants}><span className="text-blue-400">STEPHEN SAPPOR JNR</span></motion.h1>
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
              {educationData.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  <p className="text-lg">{edu.institution} - {edu.location}</p>
                  <p className="mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Experience' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              {experienceData.map((exp, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-lg">{exp.company} - {exp.duration}</p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="mb-1">{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'Achievements' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              <ul className="list-disc list-inside">
                {certificatesData.map((certificate, index) => (
                  <li key={index} className="text-lg mb-1">{certificate}</li>
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
