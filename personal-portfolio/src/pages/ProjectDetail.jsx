import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <section className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found!</h1>
        <Link
          to="/?scrollTo=projects"
          className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          ← Back to Projects
        </Link>
      </section>
    )
  }

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="w-full max-w-3xl rounded-lg shadow mb-6"
      />

      <p className="text-lg mb-6">{project.description}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <li
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          GitHub Repo
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Live Demo
          </a>
        )}
      </div>

      <Link
        to="/?scrollTo=projects"
        className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        ← Back to Projects
      </Link>
    </section>
  )
}

export default ProjectDetail
