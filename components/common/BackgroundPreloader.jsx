'use client'

import { useEffect, useState, useRef } from 'react'

export default function AuthBackground() {
  const [stars, setStars] = useState([])
  const [nebulae, setNebulae] = useState([])
  const [motionReduced, setMotionReduced] = useState(false)
  const rootRef = useRef(null)

  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const setRm = () => setMotionReduced(mq.matches)
    setRm()
    mq.addEventListener?.('change', setRm)

    const w = window.innerWidth
    const isMobile = w < 640 
    
    // UPDATED: Quantity is now halved
    // Original: 150 / 400 / 1000 -> New: 75 / 200 / 500
    const starCount = mq.matches ? 75 : (isMobile ? 200 : 500)
    const nebulaCount = mq.matches ? 2 : (isMobile ? 3 : 4)

    const arms = 4
    const armSpread = 1.0
  
    const genStars = []
    for (let i = 0; i < starCount; i++) {
      const angle = Math.random() * Math.PI * 2 * arms
      const distance = Math.random() ** 0.8 * 80
      const offsetX = (Math.random() - 0.5) * armSpread * (distance / 80)
      const offsetY = (Math.random() - 0.5) * armSpread * (distance / 80)
      const x = Math.cos(angle) * distance + offsetX
      const y = Math.sin(angle) * distance + offsetY

      genStars.push({
        id: i,
        top: `${50 + y * 0.9}%`,
        left: `${50 + x * 0.9}%`,
        size: +(Math.random() * 1.3 + 0.2).toFixed(2),
        delay: +(Math.random() * 4).toFixed(2), 
        duration: +(Math.random() * 2 + 1.5).toFixed(2), 
        opacity: +(0.3 + Math.random() * 0.6).toFixed(2),
      })
    }
    setStars(genStars)

    const nebulaColors = [
      'rgba(139, 92, 246, 0.04)', 
      'rgba(219, 39, 119, 0.03)', 
      'rgba(206, 146, 27, 0.03)', 
    ]

    const genNebulae = Array.from({ length: nebulaCount }, (_, i) => {
      const angle = Math.random() * Math.PI * 2 * arms
      const distance = Math.random() * 50 + 10
      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance
      const sizeBase = Math.random() * 250 + 200
      return {
        id: i,
        top: `${50 + y * 0.8}%`,
        left: `${50 + x * 0.8}%`,
        size: Math.round(sizeBase),
        color: nebulaColors[i % nebulaColors.length],
        blur: Math.round(sizeBase / 2),
      }
    })
    setNebulae(genNebulae)

    return () => mq.removeEventListener?.('change', setRm)
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    let active = true

    const step = () => {
      if (!active) return
      const ease = 0.06
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * ease
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * ease
      
      root.style.setProperty('--mx', currentRef.current.x.toFixed(3))
      root.style.setProperty('--my', currentRef.current.y.toFixed(3))
      rafRef.current = requestAnimationFrame(step)
    }

    const onPointerMove = (e) => {
      targetRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      targetRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    rafRef.current = requestAnimationFrame(step)

    return () => {
      active = false
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 -z-50 w-screen h-screen overflow-hidden bg-[#000000]"
      style={{ '--mx': 0, '--my': 0 }}
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate(calc(var(--mx) * 20px), calc(var(--my) * 20px)) scale(1.1)`,
          animation: motionReduced ? undefined : 'galaxy-rotate 350s linear infinite',
        }}
      >
        {/* Faint Nebulae */}
        {nebulae.map((n) => (
          <div
            key={n.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${n.size}px`,
              height: `${n.size}px`,
              top: n.top,
              left: n.left,
              backgroundColor: n.color,
              filter: `blur(${n.blur}px)`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}

        {/* Halved Starfield */}
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              width: `${s.size}px`,
              height: `${s.size}px`,
              top: s.top,
              left: s.left,
              opacity: s.opacity,
              animation: motionReduced ? undefined : `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
              boxShadow: s.size > 1 ? '0 0 4px rgba(255,255,255,0.4)' : 'none',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes galaxy-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}