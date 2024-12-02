import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Alstonia Consulting LLP',
    role: 'Intern',
    period: 'July 2023 - Aug 2023',
    description: [
      'Gained insights into backend operations, banking application architecture, and technical issue resolution.',
      'Collaborated with cross-functional teams to enhance backend communication.'
    ]
  },
  {
    company: 'SMAR Technologies Private Limited',
    role: 'Part-Time Developer Intern',
    period: 'Sep 2023 - Nov 2023',
    description: [
      'Designed a CRM system to streamline customer management.',
      'Built React-based webpages, enhancing UI/UX for client tracking.',
      'Prototyped designs in Figma to improve functionality.'
    ]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              <div className={index % 2 === 0 ? 'md:order-1' : 'md:col-start-2'}>
                <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700
                  ${index % 2 === 0 ? 'ml-8 md:ml-0 md:mr-8' : 'ml-8'}`}>
                  <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{exp.role}</h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <ol className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.description.map((item: string, i: number) => (
                      <ul
                        key={i} 
                        className="text-left leading-relaxed pl-2 relative group transition-all duration-300 hover:translate-x-2 hover:border-l-4 hover:border-blue-500"
                      >
                        <span className="block p-2 bg-transparent relative group-hover:bg-blue-50 dark:group-hover:bg-gray-700 rounded-md transition-colors duration-300">
                          {item}
                        </span>
                      </ul>
                    ))}
                  </ol>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6">
                <div className="w-full h-full bg-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}