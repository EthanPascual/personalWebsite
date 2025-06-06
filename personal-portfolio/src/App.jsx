import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-4xl font-bold text-blue-600">Ethan Pascual</h1>
      <p className="read-the-docs">
        This will become Ethan Pascual's pesronal portfolio
      </p>
    </>
  )
}

export default App
