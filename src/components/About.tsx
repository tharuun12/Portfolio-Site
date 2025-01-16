import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import image from "../static/images/myPhoto.jpg"
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const skills = {
  programming: ["Python", "JavaScript"],
  databases: ["MySQL"],
  tools: ["Android Studio", "VS Code", "Git/GitHub"]
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

  const SkillCategory = ({ title, items, icon: Icon }: { title: string, items: string[], icon: React.ComponentType<{ className?: string }> }) => (
    <motion.div className="mb-6" variants={itemVariants}>
      <motion.h4 className="text-xl font-semibold text-[#e5e7eb] mb-3 flex items-center">
        <Icon className="mr-2" />
        {title}
      </motion.h4>
      <motion.div 
        className="flex flex-wrap gap-2"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 }}
        }}
      >
        {items.map(skill => (
          <motion.span
            key={skill}
            className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gradient"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.img
              src={image}
              alt="Profile"
              className="rounded-full w-60 h-60 mx-auto mb-8 object-cover border-4 border-blue-500 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.5, 
                rotate: 5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
            />
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              I am a passionate Computer Science student at Amrita Vishwa Vidyapeetham. 
              I thrive on creating impactful software solutions with a focus on cutting-edge 
              technologies like React, Blockchain, and AI.
            </motion.p>

            <motion.div 
              className="flex justify-center gap-6"
              variants={itemVariants}
            >
              <motion.a
                href="src\assert\Tharuun_resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                }}
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
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="max-w-3xl mx-auto px-4 py-6">
              <motion.h3 
                className="text-3xl font-bold mb-8 text-center text-white"
                variants={itemVariants}
              >
                SKILLS
              </motion.h3>

              <SkillCategory title="PROGRAMMING" items={skills.programming} icon={FaCode} />
              <SkillCategory title="DATABASES" items={skills.databases} icon={FaDatabase} />
              <SkillCategory title="TOOLS" items={skills.tools} icon={FaTools} />

              <motion.h3 
                className="text-3xl font-bold mb-6 text-center text-white mt-8"
                variants={itemVariants}
              >
                CERTIFICATIONS
              </motion.h3>

              <motion.div 
                className="grid grid-cols-1 gap-6"
                variants={itemVariants}
              >
                {certifications.map((cert) => (
                  <motion.a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 rounded-lg border hover:border-blue-500 transition-all duration-300 backdrop-blur-sm bg-[#1f2937] border-[#2563eb] text-white"
                    whileHover={{ 
                      scale: 1.01, 
                      y: -2,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                    }}
                    variants={itemVariants}
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}