import { BsGithub, BsLinkedin } from 'react-icons/bs'

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-100 p-4 shadow z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-orange-500">Home</a></li>
          <li><a href="#aboutme" className="hover:text-orange-500">About Me</a></li>
          <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
        </ul>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/EthanPascual"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-orange-500"
          >
            <BsGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/ethanpascual"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-orange-500"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar