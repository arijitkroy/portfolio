"use client"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const tabData = {
  skills: [
    { title: "Python", desc: "Programming Language for competitive coding" },
    { title: "Java", desc: "Programming Language for developing apps" },
    { title: "MongoDB/Firebase", desc: "NoSQL DBMS for seamless storage of datas" },
    { title: "React.js/Next.js", desc: "Frameworks for frontend designing of websites" },
    { title: "NodeJS/Express", desc: "Backend Programming for web servers" },
    { title: "Blender", desc: "Software for 3D modelling, shading and animation" }
  ],
  education: [
    { title: "2023–27", desc: "B.Tech in Computer Science and Engineering at MCKVIE, Liluah, Howrah" },
    { title: "2021–23", desc: "CBSE Class 10+2 at Aditya Academy Secondary, Barasat" },
    { title: "2019–21", desc: "CBSE Class 10 at Aditya Academy Secondary, Dum Dum" }
  ],
  experience: [
    { title: "36hr Offline Hackathon", desc: "Diversion-2k25 hosted at IEM Gurukul Campus" }
  ]
}

export default function About() {
  const [activeTab, setActiveTab] = useState("skills")

  return (
    <section id="about" className="py-20 text-white scroll-mt-24 pt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="w-full h-full flex justify-center items-start z-50">
          <Image
            src="/assets/profile2.jpeg"
            alt="profile"
            width={400}
            height={400}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl text-red-400 font-bold mb-4">About Me</h2>
          <p className="text-gray-300 mb-6">
            Enthusiastic in the field of Computer Science, likes to explore the vast world of techs.
            Always ready to march ahead grabbing opportunities, learning from past mistakes and improving myself everyday.
            Highly adaptive and a friendly fellow.
          </p>
          <div className="flex gap-6 mb-4 text-red-400">
            {["skills", "education", "experience"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase font-semibold transition duration-200 border-b-2 pb-1 ${
                  activeTab === tab ? "text-accent border-accent" : "text-gray-500 border-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {tabData[activeTab].map((item, index) => (
                <div key={index}>
                  <p className="text-accent text-red-300 font-semibold">{item.title}</p>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}