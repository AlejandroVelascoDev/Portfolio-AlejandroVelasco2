"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
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
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent rounded-md bg-clip-text inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About Me
            </motion.span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <Image
              src="/yoanime.png"
              alt="Alejandro Velasco"
              width={400}
              height={400}
              className="object-cover rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">
              Full Stack Developer & UI/UX designer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hello! I'm a passionate full stack developer with a keen eye for design and a love for creating intuitive,
              responsive web applications. I specialize in React, Next.js, and
              modern CSS frameworks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in web development started when I built my first website in college. Since then, I've worked on
              numerous projects ranging from small business websites to complex web applications for enterprise clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Name:</h4>
                <p className="text-gray-700 dark:text-gray-300">Alejandro Velasco</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Email:</h4>
                <p className="text-gray-700 dark:text-gray-300">alejandrovdv489@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Location:</h4>
                <p className="text-gray-700 dark:text-gray-300">Popayán, Col</p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">Availability:</h4>
                <p className="text-gray-700 dark:text-gray-300"> Full-time</p>
              </div>
            </div>
            <div className="w-64 h-1 relative mx-auto mb-5 bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full animate-shimmer"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
