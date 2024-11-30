import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa'; // Category icons

const skillCategories = {
  PROGRAMMING: ['Python', 'JavaScript'],
  DATABASES: ['MySQL'],
  TOOLS: ['Android Studio', 'VS Code', 'Git/GitHub'],
};

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure Certified',
    link: 'https://drive.google.com/file/d/1uijMGBFHylNeToIoMuyRa8ThD5WOjxNz/view?usp=sharing'
  },
  {
    name: 'Ideathon Winner',
    link: 'https://drive.google.com/file/d/1EgGP6LT-GI6fkdbQPm-7TPIbaXXX_0gZ/view?usp=drive_link'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categoryIcons = {
    "PROGRAMMING": <FaCode className="text-blue-400 mr-2" />,
    "DATABASES": <FaDatabase className="text-blue-400 mr-2" />,
    "TOOLS": <FaTools className="text-blue-400 mr-2" />,
  };

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <motion.img
              src="src\assert\my photo.jpg"
              alt="Profile"
              className="rounded-full w-48 h-48 mx-auto mb-8 object-cover border-4 border-blue-500 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am a passionate Computer Science student at Amrita Vishwa Vidyapeetham. 
              I thrive on creating impactful software solutions with a focus on cutting-edge 
              technologies like React, Blockchain, and AI.
            </p>

            <div className="flex justify-center gap-6">
              <motion.a
                href="src\assert\Tharuun M Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1-tpNdUmN6zDg3X4TxUWEbBKRhsDDUicr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </div>
          </div>

          <div>
           <div>
              <div className="max-w-3xl mx-auto px-4 py-6">
              <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-8 text-center text-white">
                    SKILLS
                  </h3>

                  {/* PROGRAMMING */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-[#e5e7eb] mb-3">PROGRAMMING</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">
                        JavaScript
                      </span>
                    </div>
                  </div>

                  {/* DATABASES */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-[#e5e7eb] mb-3">DATABASES</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">
                        MySQL
                      </span>
                    </div>
                  </div>

                  {/* TOOLS */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-[#e5e7eb] mb-3">TOOLS</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">
                        Android Studio
                      </span>
                      <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">
                        VS Code
                      </span>
                      <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">
                        Git/GitHub
                      </span>
                    </div>
                  </div>
                </div>


                  <br />

                  {/* Certifications Section */}
                  <h3 className="text-3xl font-bold mb-6 text-center text-white">
                    CERTIFICATIONS
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {certifications.map((cert) => (
                      <motion.a
                        key={cert.name}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 rounded-lg border hover:border-blue-500 transition-all duration-300 
                          backdrop-blur-sm bg-[#1f2937] border-[#2563eb] text-white"
                        whileHover={{ scale: 1.01, y: -2 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-[#2563eb] rounded-lg group-hover:bg-[#1d4ed8] transition-colors">
                            <Download className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white group-hover:text-[#2563eb] transition-colors">
                            {cert.name}
                          </span>
                        </div>
                      </motion.a>
                    ))}
                  </div>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
