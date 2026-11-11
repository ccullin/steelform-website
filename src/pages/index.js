import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>SteelForm Engineering - Mining & Earthmoving Equipment Manufacturers</title>
        <meta name="description" content="Established in Melbourne 1999, Steelform Engineering has grown to become a medium sized, well equipped fabrication business in Melbourne." />
      </Head>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/">
            <a>
              <img src="/logo.png" alt="SteelForm Engineering Logo" className="h-12" />
            </a>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="/"><a className="text-gray-700 hover:text-blue-600">Home</a></Link></li>
              <li><Link href="/services"><a className="text-gray-700 hover:text-blue-600">Services</a></Link></li>
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

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SteelForm Engineering</h1>
          <p className="text-xl mb-8">Mining & Earthmoving Equipment Manufacturers</p>
          <p className="max-w-2xl mx-auto mb-8">
            Established in Melbourne 1999, Steelform Engineering has grown to become a medium sized, well equipped fabrication business in Melbourne.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">Custom Fabrication</h3>
              <p>Specialized in creating custom steel structures and components for mining and earthmoving operations.</p>
            </div>
            <div className="border rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">Equipment Manufacturing</h3>
              <p>Manufacturing specialized equipment designed to withstand harsh mining conditions.</p>
            </div>
            <div className="border rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">Maintenance & Repair</h3>
              <p>Comprehensive maintenance services for existing mining and earthmoving equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">About SteelForm Engineering</h2>
              <p className="mb-4">
                With over two decades of experience in the mining and earthmoving industry, 
                we specialize in fabricating high-quality steel components that meet exacting standards.
              </p>
              <p>
                Our team combines technical expertise with a commitment to quality, ensuring 
                every project meets our clients' specific requirements and industry regulations.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/about-image.jpg" alt="About SteelForm Engineering" className="rounded-lg shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <p className="mb-4"><strong>Address:</strong> Melbourne, Australia</p>
              <p className="mb-4"><strong>Phone:</strong> +61 3 XXXX XXXX</p>
              <p className="mb-4"><strong>Email:</strong> info@steelformengineering.com.au</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img src="/logo.png" alt="SteelForm Engineering Logo" className="h-8 mb-2" />
              <p>© {new Date().getFullYear()} SteelForm Engineering. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">Instagram</a>
              <a href="#" className="hover:text-blue-300">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}