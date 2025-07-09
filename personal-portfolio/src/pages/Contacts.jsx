import { useState, useEffect, useRef } from 'react'

export default function Contacts() {
  const [status, setStatus] = useState('')
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const res = await fetch('https://formspree.io/f/xdkzrear', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: data,
    })

    if (res.ok) {
      setStatus('SUCCESS')
      form.reset()
    } else {
      setStatus('ERROR')
    }
  }

  const handleClose = () => {
    setStatus('')
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      <div className="absolute top-32 right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-20 w-96 h-96 bg-orange-600/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">
              Get in touch
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to work together? My email is ethan.pascual@gmail.com, or you can fill out the form below and I'll get back to you!
          </p>
        </div>

        {/* Contact Form */}
<div className={`transition-all duration-1000 delay-300 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}>
  <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-600/5 rounded-full blur-xl"></div>

    <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
      {/* Name Field */}
      <div className="group">
        <label className="block text-gray-700 font-semibold mb-3 text-lg">
          Your Name
        </label>
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-lg transition-all duration-300 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 group-hover:border-gray-300"
            placeholder="Enter your full name"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      {/* Email Field */}
      <div className="group">
        <label className="block text-gray-700 font-semibold mb-3 text-lg">
          Your Email
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            required
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-lg transition-all duration-300 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 group-hover:border-gray-300"
            placeholder="Enter your email address"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      {/* Message Field */}
      <div className="group">
        <label className="block text-gray-700 font-semibold mb-3 text-lg">
          Your Message
        </label>
        <div className="relative">
          <textarea
            name="message"
            required
            rows="6"
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-lg transition-all duration-300 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/10 group-hover:border-gray-300 resize-none"
            placeholder="Tell me about your project or inquiry..."
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="group relative w-full md:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>Send Message</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </form>
  </div>
</div>


        {/* Status Messages */}
        {status === 'SUCCESS' && (
          <div className="mt-8 mx-auto max-w-md">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 rounded-2xl p-6 relative shadow-lg animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold text-lg">Message sent successfully!</span>
              </div>
              <p className="mt-2 text-green-700">Thank you for reaching out. I'll get back to you soon!</p>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-green-600 hover:text-green-800 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {status === 'ERROR' && (
          <div className="mt-8 mx-auto max-w-md">
            <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 text-red-800 rounded-2xl p-6 relative shadow-lg animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="font-semibold text-lg">Something went wrong</span>
              </div>
              <p className="mt-2 text-red-700">Please try again or contact me directly.</p>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-red-600 hover:text-red-800 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}