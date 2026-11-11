import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact - SteelForm Engineering</title>
        <meta name="description" content="Contact SteelForm Engineering for your mining equipment fabrication needs." />
      </Head>

      {/* Header */}
      <header className="header bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/">
            <a>
              <img src="/images/logo.png" alt="SteelForm Engineering Logo" className="h-12" />
            </a>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/"><a className="text-gray-700 hover:text-blue-600">Home</a></Link></li>
              <li><Link href="/services"><a className="text-gray-700 hover:text-blue-600">Services</a></Link></li>
              <li><Link href="/about"><a className="text-gray-700 hover:text-blue-600">About Us</a></Link></li>
              <li><Link href="/portfolio"><a className="text-gray-700 hover:text-blue-600">Portfolio</a></Link></li>
              <li><Link href="/contact"><a className="text-blue-600 font-bold">Contact</a></Link></li>
            </ul>
          </nav>
          <Link href="/quote">
            <a className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
              Get a Free Quote
            </a>
          </Link>
        </div>
      </header>

      {/* Contact Hero */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for inquiries about our services and equipment
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our services? Want to discuss a project? Reach out to us using the contact details below.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">(03) 9876 5432</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@steelformengineering.com.au</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Industrial Drive<br />Melbourne, VIC 3000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Send us a message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src="/images/logo.png" alt="SteelForm Engineering Logo" className="h-12" />
            </div>
            <p className="text-gray-400 text-sm">© 2023 SteelForm Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}