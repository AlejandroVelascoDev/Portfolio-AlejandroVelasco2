"use client"

import { motion } from "framer-motion"
import { Code, Layout, Database, Figma, GitBranch, Smartphone } from "lucide-react"

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    items: [
      { name: "HTML/CSS", level: 90 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      {name: "Angular", level: 70}
    ],
  },
  {
    category: "Backend Development",
    icon: <Code className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    items: [
      { name: "Node.js", level: 70 },
      { name: "Java", level: 75 },
      { name: "TypeScript", level: 60 },
      { name: "Php", level: 60 },
      {name: "Python", level: 70}
    ],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    items: [
      { name: "MongoDB", level: 70 },
      { name: "Sqlite", level: 75 },
      { name: "SQL", level: 65 },
      { name: "PostgreSQL", level: 60 },
    ],
  },
  {
    category: "Design",
    icon: <Figma className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    items: [
      { name: "Figma", level: 80 },
      { name: "UI/UX", level: 75 },
    ],
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    items: [
      { name: "React Native", level: 80 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    category: "Other",
    icon: <GitBranch className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    items: [
      { name: "Git", level: 70 },
      { name: "Docker", level: 60 },
      { name: "Testing", level: 60 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <motion.span
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Skills
            </motion.span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical
            skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 dark:bg-gray-800 rounded-lg mr-4">{skillGroup.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-purple-600 dark:text-purple-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full hover:scale-x-105 transition-transform origin-left"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
