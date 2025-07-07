import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full max-w-xl mb-4" />
      <p className="mb-4">{project.description}</p>
      <p className="mb-4">Tech: {project.tech.join(', ')}</p>
      <a href={project.github} className="text-blue-500 underline mr-4">GitHub</a>
      {project.demo && <a href={project.demo} className="text-blue-500 underline">Live Demo</a>}
    </section>
  );
}

export default ProjectDetail;