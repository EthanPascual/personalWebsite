
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-100 p-4 shadow z-50">
      <ul className="flex justify-center space-x-6">
        <li><a href="#home" className="hover:text-orange-500">Home</a></li>
        <li><a href="#aboutme" className="hover:text-orange-500">About Me</a></li>
        <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar