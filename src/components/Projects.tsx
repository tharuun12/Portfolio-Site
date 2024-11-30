import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart City Management System',
      tools: ['MySQL', 'HTML', 'CSS'],
      problem: 'Communication inefficiencies in city management.',
      solution: [
        'Developed a web app to enhance communication and reduce response delays.',
        'Used Jira for task management, cutting project cycle time by 50%.',
        'Led all phases: Planning, designing, coding, and testing.'
      ],
      github: 'https://github.com/tharuun12'
    },
    {
      title: 'Secure File Storage and Sharing Platform on Blockchain',
      tools: ['Solidity', 'MetaMask', 'IPFS'],
      problem: 'Insecure file storage and unauthorized access.',
      solution: [
        'Developed a decentralized platform using Solidity on Ethereum.',
        'Integrated IPFS for unique file identification and secure hosting.',
        'Used MetaMask for seamless and secure transactions'
      ],
      github: 'https://github.com/tharuun12'
    },
    {
      title: 'Fall and Activity Detection System',
      tools: ['Android Studio', 'TensorFlow Lite'],
      problem: 'Detecting falls in real-time for elderly individuals.',
      solution: [
        'Built a mobile app using accelerometer data for fall detection.',
        'Integrated TensorFlow Lite for real-time activity recognition.',
        'Added a secure login system using SharedPreferences.'
      ],
      github: 'https://github.com/tharuun12'
    },
    {
      title: 'Personalized Rental Matching System',
      tools: ['Regression', 'Classification'],
      problem: 'Difficulty in matching rental preferences.',
      solution: [
        'Built a recommendation system to match users with preferred accommodations.',
        'Achieved high prediction accuracy for interest levels based on user queries.'
      ],
      github: 'https://github.com/tharuun12'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-custom"> {/* Updated to use bg-custom */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{project.title}</h3>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-indigo-100 dark:bg-blue-600 text-indigo-700 dark:text-indigo-200 rounded text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">Problem:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.problem}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">Solution:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {project.solution.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 dark:text-blue-400 mb-2 hover:text-indigo-700 dark:hover:text-indigo-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
