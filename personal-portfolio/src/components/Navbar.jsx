import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {[
            { href: '#home', label: 'Home' },
            { href: '#aboutme', label: 'About' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact' }
          ].map((item, index) => (
            <li key={item.href}>
              <a 
                href={item.href} 
                className="relative text-gray-700 font-medium text-sm tracking-wide hover:text-gray-900 transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/EthanPascual"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 text-gray-600 hover:text-gray-900 transition-all duration-200"
          >
            <BsGithub className="text-xl transition-transform duration-200 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-full bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-sm"></div>
          </a>
          <a 
            href="https://www.linkedin.com/in/ethanpascual"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 text-gray-600 hover:text-gray-900 transition-all duration-200"
          >
            <BsLinkedin className="text-xl transition-transform duration-200 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-full bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-sm"></div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar