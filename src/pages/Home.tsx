import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const textShadowStyles = `
  .text-shadow {
    text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  }
`;

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <style>{textShadowStyles}</style>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          {t('home.greeting')}{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300 text-transparent bg-clip-text dark:text-shadow">
            Gabriel Renostro
          </span>
        </h1>
        
        <div className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-20">
          <TypeAnimation
            sequence={[
              t('home.role'),
              2000,
              'React, Vite, Tailwind, Node.js, Express, MongoDB etc.',
              2000,
              'UI/UX Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('home.about')}
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="https://github.com/zGabrielR1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={t('home.githubProfile')}
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={t('home.linkedinProfile')}
          >
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="mailto:gabrielrenostro581@gmail.com"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={t('home.emailContact')}
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
        </div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex justify-center"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
