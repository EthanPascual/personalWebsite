import { useState } from 'react'
import './App.css'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import Contacts from './pages/Contacts.jsx'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <h1>Ethan Pascual</h1>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
    </Routes>
    </>
  )
}

export default App
