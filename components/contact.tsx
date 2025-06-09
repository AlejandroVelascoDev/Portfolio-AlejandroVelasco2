"use client";

import { useRouter } from 'next/router';
import type React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone,  } from "lucide-react"



export default function HomePage() {
  return (
    <main>
      <Contact />
    </main>
  );
}

export function Contact() {
return (
  <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block"
            whileHover={{ scale: 1.25, rotate: -1.5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get in Touch
          </motion.span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6"></div>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to discuss a potential collaboration? Feel free to reach out to me using the
          contact form below.
        </p>
      </motion.div>
      
      {/* Centrar los items de contacto */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 max-w-md"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-start">
              <div className="p-3 bg-purple-100 dark:bg-gray-700 rounded-lg mr-4">
                <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-1">Email</h3>
                <p className="text-gray-700 dark:text-gray-300">alejandrovdv489@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-start">
              <div className="p-3 bg-purple-100 dark:bg-gray-700 rounded-lg mr-4">
                <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-1">Phone</h3>
                <p className="text-gray-700 dark:text-gray-300">+57 (324) 5075308</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <div className="flex items-start">
              <div className="p-3 bg-purple-100 dark:bg-gray-700 rounded-lg mr-4">
                <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-1">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">Popayán, Cauca, Colombia</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)
}
