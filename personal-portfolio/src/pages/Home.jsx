import { useState, useEffect } from 'react'
import EthanPascual from '../assets/EthanPascual.jpeg'

function Home({ scrollToProjects }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-orange-400/4 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-2">
              <p className="text-orange-600 font-medium text-lg tracking-wide">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Ethan Pascual
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              I'm a software engineer passionate about building modern web applications 
              that combine beautiful design with powerful functionality.
            </p>


            <div className="pt-4">
              <button
                onClick={scrollToProjects}
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <svg 
                  className="inline-block ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl"></div>
              
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <img
                  src={EthanPascual}
                  alt="Ethan Pascual"
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute top-8 right-8 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Home