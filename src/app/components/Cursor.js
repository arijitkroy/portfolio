"use client"
import { useEffect, useRef, useState } from 'react'

const COLORS = ["#FACC15", "#38BDF8", "#F472B6", "#A78BFA", "#34D399"]

export default function Cursor() {
  const cursorRef = useRef(null)
  const [sparkles, setSparkles] = useState([])
  const [visible, setVisible] = useState(true)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const detectTouchDevice = () => {
      setIsTouch(('ontouchstart' in window) || navigator.maxTouchPoints > 0)
    }

    detectTouchDevice()
    window.addEventListener("resize", detectTouchDevice)

    const createSparkle = (x, y) => {
      if (cursorRef.current && !isTouch) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }

      const newSparkle = {
        id: Date.now(),
        x,
        y,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      }

      setSparkles(prev => [...prev.slice(-30), newSparkle])

      const container = document.querySelector(".parallax-container")
      if (container) {
        const { innerWidth: w, innerHeight: h } = window
        const xTilt = (x - w / 2) / w * 20
        const yTilt = (y - h / 2) / h * 20
        container.style.transform = `rotateY(${xTilt}deg) rotateX(${-yTilt}deg)`
      }
    }

    const handleMouseMove = (e) => createSparkle(e.clientX, e.clientY)
    const handleTouchMove = (e) => {
      const touch = e.touches[0]
      if (touch) createSparkle(touch.clientX, touch.clientY)
    }

    const showCursor = () => setVisible(true)
    const hideCursor = () => setVisible(false)

    if (!isTouch) {
      window.addEventListener("mousemove", handleMouseMove)
    } else {
      window.addEventListener("touchmove", handleTouchMove)
    }

    window.addEventListener("focus", showCursor)
    window.addEventListener("blur", hideCursor)
    document.addEventListener("mouseleave", hideCursor)
    document.addEventListener("mouseenter", showCursor)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("focus", showCursor)
      window.removeEventListener("blur", hideCursor)
      document.removeEventListener("mouseleave", hideCursor)
      document.removeEventListener("mouseenter", showCursor)
      window.removeEventListener("resize", detectTouchDevice)
    }
  }, [isTouch])

  return (
    <>
      {/* White cursor dot — desktop only */}
      {!isTouch && (
        <div
          ref={cursorRef}
          className={`fixed top-0 left-0 w-5 h-5 rounded-full z-[99999] pointer-events-none mix-blend-difference transition-opacity duration-200 ${
            visible ? "bg-white border-2 border-red-800 opacity-100" : "opacity-0"
          }`}
        />
      )}


      {/* Glitter effect — all devices */}
      {sparkles.map(({ id, x, y, color }) => (
        <div
          key={id}
          style={{
            left: x + (Math.random() - 0.5) * 30,
            top: y + (Math.random() - 0.5) * 30,
            backgroundColor: color
          }}
          className="fixed w-2 h-2 rounded-full blur-sm z-[9998] opacity-80 pointer-events-none animate-glitter"
        />
      ))}
    </>
  )
}