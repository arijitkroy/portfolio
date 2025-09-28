import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode, faPaintBrush } from "@fortawesome/free-solid-svg-icons"

export default function Services() {
  const services = [
    {
      icon: faLaptopCode,
      title: "Webpage Designing",
      desc: "Designing interactive web pages using Next.js and TailwindCSS"
    },
    {
      icon: faPaintBrush,
      title: "Photo Editing",
      desc: "Editing pictures using Ibis Paint"
    }
  ]

  return (
    <section id="services" className="py-20 bg-black scroll-mt-24 pt-12 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-red-400">My Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-900 border-2 border-white p-6 rounded-lg text-center space-y-4 hover:scale-105 transition">
              <FontAwesomeIcon icon={s.icon} className="text-3xl text-accent" />
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}