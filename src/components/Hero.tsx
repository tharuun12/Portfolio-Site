import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

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

const textVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: Math.random() > 0.5 ? -50 : 50,
    x: Math.random() > 0.5 ? -50 : 50,
    filter: "blur(10px)",
    scale: 0.5,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      delay: i * 0.05,
      duration: 0.8,
    },
  }),
};

export default function Hero() {
  const title = "Hi, I'm Tharuun M";
  const subtitle = "Software Developer | Transforming Ideas into Reality | Problem Solver";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 text-center px-4">
        <div className="mb-4">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        <div>
          {subtitle.split(" ").map((word, i) => (
            <motion.span
              key={i}
              custom={i + title.length}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xl md:text-2xl text-gray-300 inline-block"
            >
              {word + "\u00A0"}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.0 }}
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
              <link.icon className="w-6 h-6 text-white" />
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}