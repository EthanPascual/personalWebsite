import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  const projectsRef = useRef(null)

  const MainPage = () => (
    <>
      <Navbar />
      <main>
        <section id="home" className="min-h-screen p-8">
          <Home scrollToProjects={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        </section>

        <section id="aboutme" className="min-h-screen p-8">
          <AboutMe />
        </section>

        <section id="projects" ref={projectsRef} className="min-h-screen p-8">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen p-8">
          <Contacts />
        </section>
      </main>
    </>
  )

  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
  )
}

export default App
