export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Custom Fabrication</h3>
            <p>Specialized in creating custom steel structures and components for mining and earthmoving operations.</p>
          </div>
          <div className="service-card bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Equipment Manufacturing</h3>
            <p>Manufacturing specialized equipment designed to withstand harsh mining conditions.</p>
          </div>
          <div className="service-card bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Maintenance & Repair</h3>
            <p>Comprehensive maintenance services for existing mining and earthmoving equipment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}