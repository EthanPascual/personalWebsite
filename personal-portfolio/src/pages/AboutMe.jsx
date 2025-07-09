import { useState, useEffect, useRef } from 'react'
import YHack from '../assets/yhack.jpeg'
import Rock from '../assets/rock.jpeg'

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-orange-600/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          } order-1 lg:order-2`}>
            {/* Section Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">
                  Get to know me
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                About Me
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Hi, I'm Ethan — a problem solver at heart. Growing up, I loved puzzles like Rubik's Cubes and chess, so it was only natural for me to find my way into programming — especially with my dad working as a software engineer.
              </p>
              
              <p className="text-lg">
                I hold a Bachelor of Science in Computer Science and Applied Mathematics from Stony Brook University, where I'm now pursuing my Master's in Computer Science. I'm always exploring new technologies and enjoy applying them to real-world projects. Along the way, I've gained experience with tools and frameworks like OpenCV, OpenAI's API, Lark parser, ErgoAI, Django, LangChain, and AWS.
              </p>
              
              <p className="text-lg">
                Outside of coding, I love rock climbing, lifting weights, watching UFC, and anime. I believe in growth — both personally and professionally — and I enjoy taking on new challenges to keep learning and pushing myself forward.
              </p>
            </div>
          </div>

          {/* Images Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          } order-2 lg:order-1`}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {/* YHack Image */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={YHack} 
                    alt="YHack" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/20"></div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="w-8 h-0.5 bg-orange-500 rounded-full"></div>
                  <p className="text-sm text-gray-500 font-medium">
                    Taking a picture with friends after YHack.
                  </p>
                </div>
              </div>

              {/* Rock Climbing Image */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={Rock} 
                    alt="Rock Climbing" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/20"></div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="w-8 h-0.5 bg-orange-500 rounded-full"></div>
                  <p className="text-sm text-gray-500 font-medium">
                    Rock Climbing with friends.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-600/30 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
