import React from 'react';
import { motion } from 'framer-motion';
import type { Experience as ExperienceType, Skill } from '../types';

const experiences: ExperienceType[] = [
  {
    id: 1,
    company: "Tech Corp",
    position: "Senior Frontend Developer",
    duration: "2020 - Present",
    description: "Led the development of multiple high-impact web applications using React and TypeScript.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    id: 2,
    company: "Digital Solutions Inc",
    position: "Frontend Developer",
    duration: "2018 - 2020",
    description: "Developed and maintained client websites and web applications.",
    technologies: ["React", "JavaScript", "SCSS", "Redux"]
  }
];

const skills: Skill[] = [
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Docker", level: 70, category: "tools" }
];

export const Experience: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Experience & Skills
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Work History
            </h3>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-blue-500"
                >
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.position}
                    </h4>
                    <p className="text-blue-500 font-medium mb-2">
                      {experience.company} • {experience.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Skills
            </h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};