'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    // Show submission coming soon message
    alert('Submission coming soon! Our contact form is currently under development.')
    
    console.log(formData)

    // API implementation later
  }

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Contact Us
      </h2>

      {/* Submission coming soon message */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-800 text-center">
          <span className="font-semibold">Submission coming soon!</span> Our contact form is currently under development. 
          Please reach out to us via phone or email for immediate assistance.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium mb-1"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium mb-1"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}