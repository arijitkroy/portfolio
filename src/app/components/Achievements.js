export default function Achievements() {
  const achievements = [
    {
      title: "Programming in Java (Top 5%)",
      description: "Secured 5% Topper in MOOCs by NPTEL.",
      date: "May 2024",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS43S95970009730411380"
    },
    {
      title: "Introduction to Internet of Things (Top 5%)",
      description: "Secured 5% Topper in MOOCs by NPTEL.",
      date: "Nov 2024",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS115S75230022103935978"
    }
  ]

  return (
    <section id="achievements" className="py-20 text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-red-400">My Achievements</h2>

        <div className="space-y-6">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{ach.title}</h3>
                <span className="text-sm text-gray-400">{ach.date}</span>
              </div>
              <p className="text-gray-300 mb-2">{ach.description}</p>
              <a
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-medium hover:underline"
              >
                Know more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}