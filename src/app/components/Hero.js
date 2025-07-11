import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen text-white flex items-center justify-center px-6 scroll-mt-24 pt-12 overflow-hidden"
    >

      {/* Foreground text */}
      <div className="text-center space-y-4 relative z-10 parallax-container">
        <p className="text-lg text-accent text-red-400">Passionate Coder</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {"Hey there, I'm"} <span className="text-accent text-red-400">Arijit</span><br />
          Kumar Roy from India
        </h1>
      </div>
    </section>
  )
}
