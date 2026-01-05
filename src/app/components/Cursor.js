"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { CURSOR_PRESETS } from "../cursorPresets"

const COLORS = ["#FACC15", "#38BDF8", "#F472B6", "#A78BFA", "#34D399"]

export default function Cursor() {
  const cursorRef = useRef(null)
  const [sparkles, setSparkles] = useState([])
  const [visible, setVisible] = useState(true)
  const [isTouch, setIsTouch] = useState(false)
  const [preset, setPreset] = useState("classic")

  const current = CURSOR_PRESETS[preset]

  useEffect(() => {
    const detectTouch = () => {
      setIsTouch(("ontouchstart" in window) || navigator.maxTouchPoints > 0)
    }

    detectTouch()
    window.addEventListener("resize", detectTouch)

    const move = (x, y) => {
      if (cursorRef.current && !isTouch) {
        cursorRef.current.style.transform =
          `translate3d(${x - current.size / 2}px, ${y - current.size / 2}px, 0)`
      }

      const sparkle = {
        id: crypto.randomUUID(),
        x,
        y,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      }

      setSparkles(p => [...p.slice(-30), sparkle])
    }

    const mouse = e => move(e.clientX, e.clientY)
    const touch = e => e.touches[0] && move(e.touches[0].clientX, e.touches[0].clientY)

    if (!isTouch) window.addEventListener("mousemove", mouse)
    else window.addEventListener("touchmove", touch)

    return () => {
      window.removeEventListener("mousemove", mouse)
      window.removeEventListener("touchmove", touch)
      window.removeEventListener("resize", detectTouch)
    }
  }, [isTouch, current.size])

  return (
    <>
      {/* Cursor Image */}
      {!isTouch && (
        <div
          ref={cursorRef}
          className={`fixed top-0 left-0 z-[99999]
            pointer-events-none transition-opacity duration-200
            ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ 
            width: current.size, 
            height: current.size, 
            
            filter: current.color
              ? `drop-shadow(0 0 8px ${current.color})`
              : "none",
            }}
        >
          <Image
            src={current.src}
            alt={current.label}
            fill
            priority
            draggable={false}
          />
        </div>
      )}

      {/* Sparkles */}
      {sparkles.map(({ id, x, y, color }) => (
        <div
          key={id}
          style={{
            left: x + (Math.random() - 0.5) * 30,
            top: y + (Math.random() - 0.5) * 30,
            backgroundColor: color
          }}
          className="fixed w-2 h-2 rounded-full blur-sm
            z-[9998] opacity-80 pointer-events-none animate-glitter"
        />
      ))}

      {/* Cursor Selector Dropdown */}
      {!isTouch && (
        <div className="fixed bottom-6 right-6 z-[1000]">
          <select
            value={preset}
            onChange={e => setPreset(e.target.value)}
            className="bg-black/80 text-green-400 border border-green-500
              rounded-md px-3 py-2 text-sm backdrop-blur-md
              focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {Object.entries(CURSOR_PRESETS).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  )
}