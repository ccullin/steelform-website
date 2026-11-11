import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4 text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">SteelForm Engineering</h1>
        <p className="text-xl mb-8 text-white">Mining & Earthmoving Equipment Manufacturers</p>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-white">
          Established in Melbourne 1999, Steelform Engineering has grown to become a medium sized, well equipped fabrication business in Melbourne.
        </p>
      </div>
    </section>
  );
}