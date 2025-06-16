"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
    image: "/Ecommercei.png?height=600&width=800",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    githubLink: "#",
    category: "web",
  },
  {
    id: 2,
    title: "MediCitas",
    description: "MediDash is a modern web application for medical appointment management, developed with state-of-the-art technologies such as Laravel ,  BootStrap and MySql. Includes admin panel,  and reusable components for a smooth experience.",
    image: "/Medicitas.jpg?height=600&width=800",
    tags: ["Laravel", "MySql", "BootStrap", ],
    githubLink: "https://github.com/AlejandroVelascoDev/Agenda-citasS",
    category: "app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My portfolio website.",
    image: "/portfolionew.png?height=600&width=800",
    tags: ["Next.js", "Framer Motion", "Next.js", "Tailwind CSS"],
    demoLink: "https://www.dalexdev.online/",
    githubLink: "#",
    category: "web",
  },
  {
    id: 4,
    title: "Wheather App",
    description: "A weather dashboard that displays current and forecasted weather data for any location.",
    image: "/AppClima.png?height=200&width=200",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    githubLink: "https://github.com/AlejandroVelascoDev/AppClima",
    category: "app",
  },
]

export function Projects() {
  const [filter] = useState("all")
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <motion.span
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Projects
            </motion.span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills
            and passion for web development.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
             
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-cyan-100 text-cyan-800 dark:bg-gray-700 dark:text-cyan-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-gray-700"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
        
        </div>
      </div>
    </section>
  )
}
