"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto"
  }, [menuOpen])

  const navLinks = ["About", "Works", "Services", "Achievements", "Contact"]

  const underlineClasses = `
    relative transition-colors duration-200 hover:text-red-400
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:w-0 hover:after:w-full after:bg-red-500 after:rounded-full
    after:transition-all after:duration-300
    after:shadow-[0_0_8px_#f87171] after:blur-sm
  `

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home">
          <Image src="/assets/logo.png" width={120} height={40} alt="logo" className="cursor-pointer" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className={`text-white ${underlineClasses}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-white text-2xl">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white z-[9990] overflow-hidden transition-transform duration-300 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-700">
          <Image src="/assets/logo.png" width={100} height={40} alt="logo" />
          <button onClick={() => setMenuOpen(false)} className="text-white text-2xl">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-6 mt-10 px-6">
          {navLinks.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-xl ${underlineClasses}`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}