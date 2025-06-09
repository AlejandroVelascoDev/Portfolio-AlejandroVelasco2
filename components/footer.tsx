import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"
            >
              Portfolio
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Creating beautiful, functional, and user-centered digital experiences through modern full stack development.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/AlejandroVelascoDev"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/alejandro-vs/"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            {/* <Link
              href="#"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link> */}
            {/* <Link
              href="#"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link> */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Alejandro Velasco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
