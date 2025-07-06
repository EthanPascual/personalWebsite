import { useState } from 'react'
import './App.css'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import Contacts from './pages/Contacts.jsx'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useRef } from 'react'
import AboutMe from './pages/AboutMe.jsx'


function App() {
  const projectsRef = useRef(null)
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="min-h-screen p-8">
          <Home scrollToProjects={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        </section>

        <section id="aboutme" className="min-h-screen p-8">
          <AboutMe />
        </section>

        <section
          id="projects"
          ref={projectsRef}
          className="min-h-screen p-8"
        >
          <Projects />
        </section>

        <section id="contact" className="min-h-screen p-8">
          <Contacts />
        </section>
      </main>
    </>
  )
}

export default App
