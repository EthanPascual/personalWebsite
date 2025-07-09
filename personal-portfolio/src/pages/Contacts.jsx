import { useState } from 'react'

export default function Contacts() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
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
    <section className="p-8">
        <div>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-6">
        Have a question or want to work together? Fill out the form below and I’ll get back to you!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Message</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Send Message
        </button>
      </form>

      {status === 'SUCCESS' && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded relative">
          ✅ Your message was sent successfully!
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-green-700 hover:text-green-900 font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {status === 'ERROR' && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded relative">
          ❌ Oops! Something went wrong. Please try again.
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-red-700 hover:text-red-900 font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </div>
    </section>
    
  )
}
