import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-950 border-t border-gray-950 dark:border-gray-950">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            >
              Portfolio
            </Link>
            <p className="text-white dark:text-gray-300 max-w-md">
              Creating beautiful, functional, and user-centered digital experiences through modern full stack development.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/AlejandroVelascoDev"
              className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/alejandro-vs/"
              className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            {/* Puedes agregar otros íconos aquí usando la misma paleta */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-white dark:text-gray-300">
            © {new Date().getFullYear()} Alejandro Velasco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
