import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    school: 'Amrita Vishwa Vidyapeetham',
    degree: 'B.Tech in Computer Science',
    period: '2021 - Present',
    details: 'Currently pursuing Bachelor\'s degree with focus on computer science and engineering.'
  },
  {
    school: 'Sunbeam School',
    degree: 'Class 12',
    period: '2019 - 2021',
    details: 'Completed higher secondary education with focus on science and mathematics.'
  },
  {
    school: 'BMD Jain School',
    degree: 'Class 10',
    period: '2018 - 2019',
    details: 'Completed secondary education with distinction.'
  }
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Education</h2>
        
        <div className="space-y-8 ">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:relative md:col-span-1">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-white" />
                </div>
                <div className="hidden md:block h-full w-1 bg-blue-200 dark:bg-blue-900 absolute top-6 left-3" />
              </div>
              
              <div className="md:col-span-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 
      transition-all duration-300 
      hover:scale-105 
      hover:shadow-xl 
      hover:translate-y-[-10px]">
      <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
      <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{edu.degree}</h4>
      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{edu.period}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
    </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}