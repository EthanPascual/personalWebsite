import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import ProjectDetail from './pages/ProjectDetail'

function MainPage() {
  const projectsRef = useRef(null)
  const location = useLocation()

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('scrollTo') === 'projects') {
      scrollToProjects()
    }
  }, [location])

  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="min-h-screen p-8">
          <Home scrollToProjects={scrollToProjects} />
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
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
