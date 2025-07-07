import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="flex overflow-x-auto space-x-4">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`} className="flex-shrink-0 w-64">
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{project.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;