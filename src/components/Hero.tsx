import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

// Define social links array
const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/tharuun12',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/tharuun/',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/tharuun__/profilecard/',
    label: 'Instagram',
  },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background particles */}
      <ParticlesBackground />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Hi, I'm Tharuun M
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Software Developer | Transforming Ideas into Reality | Problem Solver
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="fixed bottom-8 right-8 flex gap-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
            >
              <link.icon className="w-6 h-6" />
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
