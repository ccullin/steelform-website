import Head from 'next/head';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Portfolio - SteelForm Engineering</title>
        <meta name="description" content="View our portfolio of projects and completed work for mining equipment fabrication." />
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
              <li><Link href="/portfolio"><a className="text-blue-600 font-bold">Portfolio</a></Link></li>
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

      {/* Portfolio Hero */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Portfolio</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our completed projects and successful partnerships in the mining industry
          </p>
        </div>
      </section>

      {/* Portfolio Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img src="/images/portfolio-example.jpg" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Excavator Components</h3>
              <p className="text-gray-600">Fabrication of specialized components for large excavators used in mining operations.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img src="/images/portfolio-example.jpg" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dump Truck Fabrication</h3>
              <p className="text-gray-600">Complete fabrication and welding of dump truck bodies for heavy-duty mining transport.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img src="/images/portfolio-example.jpg" alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mining Equipment Maintenance</h3>
              <p className="text-gray-600">Comprehensive maintenance and repair services for mining machinery.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img src="/images/portfolio-example.jpg" alt="Project 4" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Steel Structures</h3>
              <p className="text-gray-600">Steel structure fabrication for mining infrastructure and support systems.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img src="/images/portfolio-example.jpg" alt="Project 5" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Heavy Equipment Mounting</h3>
              <p className="text-gray-600">Custom mounting solutions for heavy equipment in challenging mining environments.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img src="/images/portfolio-example.jpg" alt="Project 6" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Welding and Fabrication</h3>
              <p className="text-gray-600">Precision welding services for specialized mining equipment components.</p>
            </div>
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