export default function Services() {
  const services = [
    {
      icon: "fas fa-code",
      title: "Webpage Designing",
      desc: "Designing interactive web pages using React.js as frontend and NodeJS as backend"
    },
    {
      icon: "fab fa-app-store",
      title: "App Development",
      desc: "Creating functional mobile applications using Android Studio and Java"
    },
    {
      icon: "fab fa-unity",
      title: "3D Modelling",
      desc: "Making real life structures and artifacts in Blender"
    }
  ]

  return (
    <section id="services" className="py-20 bg-black scroll-mt-24 pt-12 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-red-400">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg border-2 border-white text-center space-y-4 hover:scale-105 transition">
              <i className={`${s.icon} text-3xl text-accent`} />
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
        <div className="text-center underline underline-offset-4 mt-10">
            <a href="https://github.com/arijitkroy/" className="btn">See more →</a>
        </div>
    </section>
  )
}