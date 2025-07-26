
export default function Contact() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700" />
        <textarea rows="5" placeholder="Message" className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700"></textarea>
        <button type="submit" className="w-full py-3 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 transition">Send Message</button>
      </form>
    </section>
  );
}
