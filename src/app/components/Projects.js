import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const works = [
  {
    title: "Ez-Viz",
    desc: "A web-based tool for ML data visualization and prediction, built with Streamlit.",
    image: "/assets/ez-viz-logo.jpg",
    link: "https://github.com/arijitkroy/Ez-Viz"
  },
  {
    title: "Get-My-Shirt",
    desc: "AI-powered image-based shirt size predictor using CV + DL + web scraping.",
    image: "/assets/get-my-shirt-logo.png",
    link: "https://github.com/arijitkroy/get-my-shirt"
  },
  {
    title: "Kodikas2k24",
    desc: "Website for intra-college coding competition (September 2024).",
    image: "/assets/kodikas.png",
    link: "https://github.com/arijitkroy/Kodikas2k24"
  }
]

export default function Projects() {
  return (
    <section id="works" className="py-20 scroll-mt-24 pt-12 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-red-400">My Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((w, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={w.image}
                alt={w.title}
                width={400}
                height={200}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">{w.title}</h3>
                <p className="text-sm mb-4 text-center">{w.desc}</p>
                <a
                  href={w.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${w.title} in new tab`}
                  className="text-accent text-2xl hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center underline underline-offset-4 mt-10">
          <a
            href="https://github.com/arijitkroy/"
            className="text-accent text-lg hover:text-white transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            See more →
          </a>
        </div>
      </div>
    </section>
  )
}