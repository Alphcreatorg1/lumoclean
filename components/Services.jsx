
export default function Services() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2">Residential Cleaning</h3>
          <p>Keep your home panels running at top efficiency.</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2">Commercial Solar Cleaning</h3>
          <p>Professional service for business-scale installations.</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2">Maintenance & Reports</h3>
          <p>Performance checks and ongoing care options.</p>
        </div>
      </div>
    </section>
  );
}
