"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faYoutube,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
  return (
    <footer id="contact" className="bg-black scroll-mt-24 pt-12 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-evenly gap-20">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
          <p className="flex items-center text-gray-300">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2 text-accent" />
            arijitkroy16@gmail.com
          </p>

          <a
            href="/assets/My Resume.pdf"
            download
            className="inline-block mt-4 bg-accent bg-red-100 text-black hover:bg-red-800 hover:text-red-100 px-4 py-2 rounded-lg font-semibold"
          >
            Download Resume
          </a>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Follow Me</h2>
          <div className="flex gap-4  text-2xl text-accent">
            <a href="https://github.com/arijitkroy" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.youtube.com/channel/UCyv1kJjLdJ7pak9jBtLSXoQ" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.instagram.com/arijit_k_r0y/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/arijitkumarroy/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10">
        <p>© {new Date().getFullYear()} Arijit Kumar Roy. All rights reserved.</p>
      </div>
    </footer>
  )
}