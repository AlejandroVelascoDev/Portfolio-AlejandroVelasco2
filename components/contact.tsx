"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

import TextPressure from "./ui/textPressure"


export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      alert('Mensaje enviado correctamente')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else {
      const error = await res.json()
      alert(`Error: ${error.message}`)
    }
  } catch (err) {
    console.error('Error al enviar:', err)
    alert('Ocurrió un error al enviar el mensaje')
  } finally {
    setIsSubmitting(false)
  }
    
  }

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-1 space-y-8"
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

            <div className=" text-purple-600 dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="p-3 bg-purple-100 dark:bg-gray-700 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-600  mb-1">Location</h3>
                  <p className="text-gray-700 dark:text-gray-300">Popayàn, Cauca, Colombia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2"
          >
            <div style={{position: 'relative', height: '400px'}}>
            <TextPressure
                text="Bye!"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                 minFontSize={36}
                  />
                </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
