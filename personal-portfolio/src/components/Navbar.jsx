
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-300">
          Home
        </Link>
        <Link to="/projects" className="hover:text-blue-300">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-blue-300">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;