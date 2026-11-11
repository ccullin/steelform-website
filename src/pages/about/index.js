import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us - SteelForm Engineering</title>
        <meta name="description" content="Learn more about SteelForm Engineering and our journey in mining equipment fabrication." />
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
              <li><Link href="/about"><a className="text-blue-600 font-bold">About Us</a></Link></li>
              <li><Link href="/portfolio"><a className="text-gray-700 hover:text-blue-600">Portfolio</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-700 hover:text-blue-600">Contact</a></Link></li>
            </ul>
          </nav>
          <Link href="/quote">
            <a className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
              Get a Free Quote
            </a>
          </Link>
        </div>
      </header>

      {/* About Hero */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Established in Melbourne 1999, Steelform Engineering has grown to become a medium sized, well equipped fabrication business.
          </p>
        </div>
      </section>

      {/* About Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Established in Melbourne 1999, Steelform Engineering has grown to become a medium sized, well equipped fabrication business in Melbourne. 
            We have built our reputation on quality work and excellent customer service.
          </p>
          <p className="text-gray-600 mb-4">
            Our team of experienced engineers and fabricators are dedicated to providing solutions for the mining industry's most challenging requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide high-quality fabrication and engineering services to the mining industry with integrity, excellence, and innovation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be recognized as a leading provider of mining equipment fabrication services in Australia.
            </p>
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