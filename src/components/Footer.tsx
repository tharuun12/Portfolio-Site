import { Github, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/tharuun12',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/tharuun/',
    label: 'LinkedIn'
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/tharuun__/profilecard/',
    label: 'Instagram'
  }
];

/**
 * Footer component that renders the footer section of the website.
 * It includes copyright information and social media links.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2024 Tharuun M | All Rights Reserved
          </p>
          
          
        </div>
      </div>
    </footer>
  );
}