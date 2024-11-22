import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart City Management System',
    description: 'Developed a web app to enhance communication and reduce response delays.',
    details: [
      'Used Jira for task management, cutting project cycle time by 50%.',
      'Led all phases: Planning, designing, coding, and testing.'
    ],
    tools: ['MySQL', 'HTML', 'CSS'],
    github: '#'
  },
  {
    title: 'Secure File Storage and Sharing Platform',
    description: 'Developed a decentralized platform using Solidity on Ethereum.',
    details: [
      'Integrated IPFS for unique file identification and secure hosting.',
      'Used MetaMask for seamless and secure transactions.'
    ],
    tools: ['Solidity', 'MetaMask', 'IPFS'],
    github: '#'
  },
  {
    title: 'Fall and Activity Detection System',
    description: 'Built a mobile app using accelerometer data for fall detection.',
    details: [
      'Integrated TensorFlow Lite for real-time activity recognition.',
      'Added a secure login system using SharedPreferences.'
    ],
    tools: ['Android Studio', 'TensorFlow Lite'],
    github: '#'
  },
  {
    title: 'Personalized Rental Matching System',
    description: 'Built a recommendation system to match users with preferred accommodations.',
    details: [
      'Achieved high prediction accuracy for interest levels based on user queries.'
    ],
    tools: ['Regression', 'Classification'],
    github: '#'
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700
                hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  {project.details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-500 dark:text-gray-400">• {detail}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}