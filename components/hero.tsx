"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FloatStyle {
  width: string
  height: string
  top: string
  left: string
  animationDelay: string
  animationDuration: string
}

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [floatStyles, setFloatStyles] = useState<FloatStyle[]>([])

  const scrollToNext = () => {
    if (scrollRef.current) {
      const nextSection = document.getElementById("about")
      nextSection?.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const styles = [...Array(5)].map(() => ({
      width: `${Math.random() * 300 + 100}px`,
      height: `${Math.random() * 300 + 100}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 10 + 15}s`,
    }))
    setFloatStyles(styles)
  }, [])

  return (
    <section
      id="home"
      ref={scrollRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 z-0" />

      {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
        {floatStyles.map((style, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-600/10 dark:to-pink-600/10"
            style={style}
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: (Math.random() * 6 + 6),
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>


      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              <motion.span
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block"
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hello, I'm
              </motion.span>
              <br />
              <motion.span
                className="text-gray-900 dark:text-white inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Alejandro Velasco
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="#projects">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-6 text-lg" size="lg">
                  View My Work
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-gray-800 px-8 py-6 text-lg"
                  size="lg"
                >
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="rounded-full h-12 w-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md"
          >
            <ArrowDown className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
