import "./utils/fontawesome";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden relative">
      <ParticleBackground />
      <Cursor />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Achievements />
        <Contact />
      </div>
    </main>
  );
}