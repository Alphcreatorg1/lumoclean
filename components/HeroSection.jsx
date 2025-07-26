
export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center text-center px-4">
      <div className="bg-black/60 p-10 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold">LumoClean</h1>
        <p className="mt-4 text-xl md:text-2xl">Melbourne’s Premium Solar Panel Cleaning</p>
        <button className="mt-6 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition">Request a Quote</button>
      </div>
    </section>
  );
}
