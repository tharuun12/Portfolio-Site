import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Java', level: 85 },
  { name: 'MySQL', level: 80 },
  { name: 'Android Studio', level: 75 },
  { name: 'VS Code', level: 95 },
  { name: 'Git/GitHub', level: 85 },
];

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

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
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

            <div className="flex justify-center gap-4">
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
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-600"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  {cert.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}