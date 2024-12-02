import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart City Management System',
      tools: ['MySQL', 'HTML', 'CSS'],
      problem: 'Communication inefficiencies in city management.',
      solution: [
        '1. Developed a web app to enhance communication and reduce response delays.',
        '2. Used Jira for task management, cutting project cycle time by 50%.',
        '3. Led all phases: Planning, designing, coding, and testing.'
      ],
      github: 'https://github.com/tharuun12'
    },
    {
      title: 'Secure File Storage and Sharing Platform on Blockchain',
      tools: ['Solidity', 'MetaMask', 'IPFS'],
      problem: 'Insecure file storage and unauthorized access.',
      solution: [
        '1. Developed a decentralized platform using Solidity on Ethereum.',
        '2. Integrated IPFS for unique file identification and secure hosting.',
        '3. Used MetaMask for seamless and secure transactions'
      ],
      github: 'https://github.com/tharuun12/Secure-File-System-'
    },
    {
      title: 'Fall and Activity Detection System',
      tools: ['Android Studio', 'TensorFlow Lite'],
      problem: 'Detecting falls in real-time for elderly individuals.',
      solution: [
        '1. Built a mobile app using accelerometer data for fall detection.',
        '2. Integrated TensorFlow Lite for real-time activity recognition.',
        '3. Added a secure login system using SharedPreferences.'
      ],
      github: 'https://github.com/tharuun12/Fall-and-Activity-Detection-'
    },
    {
      title: 'Personalized Rental Matching System',
      tools: ['Regression', 'Classification'],
      problem: 'Difficulty in matching rental preferences.',
      solution: [
        "1. Developed a recommendation system to match users with personalized accommodations.",
        "2. Achieved high prediction accuracy for user interest based on queries.",
        "3. Utilized machine learning to optimize accommodation suggestions based on preferences."
      ],
      github: 'https://github.com/tharuun12/RENTAL-LISTING-INTEREST-LEVELS'
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
          
          <div className="grid md:grid-cols-2 gap-10">
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
                
                <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900">
                    <div className="group">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-500 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Problem
                      </h4>
                      <p className="text-left leading-relaxed pl-2 relative group transition-all duration-300 hover:translate-x-2 hover:border-l-4 hover:border-blue-500">
                        {project.problem}
                      </p>
                      
                    </div>
                    
                    <div className="group">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-500 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Solution
                      </h4>
                      <ul className=" list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-9 transition-colors group-hover:text-gray-900 dark:group-hover:text-white">
                        {project.solution.map((item, i) => (
                          <ul key={i} className="text-left leading-relaxed pl-2 relative group transition-all duration-300 hover:translate-x-2 hover:border-l-4 hover:border-blue-500">
                            {item}
                          </ul>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 dark:text-blue-400 mb-2 hover:text-indigo-700 dark:hover:text-indigo-300 animate-bounce"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View on GitHub
                    </a>
                </div>
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
