
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-neutral-950 text-white font-sans">
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <footer className="text-center py-8 border-t border-neutral-800">
        © 2025 LumoClean — Melbourne, Australia
      </footer>
    </div>
  );
}
