import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Services - SteelForm Engineering</title>
        <meta name="description" content="Our comprehensive range of services offered by SteelForm Engineering." />
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
              <li><Link href="/services"><a className="text-blue-600 font-bold">Services</a></Link></li>
              <li><Link href="/about"><a className="text-gray-700 hover:text-blue-600">About Us</a></Link></li>
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

      {/* Services Hero */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive services tailored to meet the needs of mining and earthmoving operations
          </p>
        </div>
      </section>

      {/* Services Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Custom Fabrication</h2>
            <p className="text-gray-600">
              Precision engineering and fabrication of custom solutions for mining equipment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Maintenance Services</h2>
            <p className="text-gray-600">
              Comprehensive maintenance and repair services for all types of equipment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Consultation</h2>
            <p className="text-gray-600">
              Expert consultation services to optimize your mining operations.
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