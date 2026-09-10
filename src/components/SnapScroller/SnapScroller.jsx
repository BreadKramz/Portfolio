import { useEffect, useRef, useState } from 'react'
import './SnapScroller.css'

const SECTIONS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'contact', label: 'CONTACT' },
]

function easeInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function smoothScrollTo(el, duration = 900) {
  const scroller = document.querySelector('.snap-scroller')
  if (!scroller) return
  const targetTop = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop
  const start = scroller.scrollTop
  const delta = targetTop - start
  const t0 = performance.now()

  const tick = (now) => {
    const t = Math.min(1, (now - t0) / duration)
    scroller.scrollTop = start + delta * easeInOut(t)
    if (t < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

export default function SnapScroller({ children }) {
  const scrollerRef = useRef(null)
  const activeRef = useRef(0)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showRail, setShowRail] = useState(false)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = null
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = scroller.getBoundingClientRect()
        const max = scroller.scrollHeight - rect.height
        const p = max > 0 ? Math.min(1, Math.max(0, -rect.top / max)) : 0
        setProgress(p)

        const targets = scroller.querySelectorAll('[data-snap]')
        let current = 0
        targets.forEach((t, i) => {
          const r = t.getBoundingClientRect()
          if (r.top <= rect.height * 0.4) current = i
        })
        activeRef.current = current
        setActive(current)
        setShowRail(p > 0.02)
        if (p > 0.1) setShowHint(false)
      })
    }

    const onKeyDown = (e) => {
      const targets = scroller.querySelectorAll('[data-snap]')
      if (targets.length === 0) return

      let next
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        next = Math.min(activeRef.current + 1, targets.length - 1)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        next = Math.max(activeRef.current - 1, 0)
      } else if (e.key === 'Home') {
        next = 0
      } else if (e.key === 'End') {
        next = targets.length - 1
      } else {
        return
      }

      if (next === activeRef.current) return
      e.preventDefault()
      smoothScrollTo(targets[next], 800)
    }

    scroller.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    onScroll()
    return () => {
      scroller.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="snap-scroller" ref={scrollerRef}>
      <div className="snap-scroller__progress" style={{ width: `${progress * 100}%` }} />

      {showRail && (
        <nav className="snap-scroller__rail" aria-label="Section progress">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              className={`snap-scroller__rail-item ${i === active ? 'is-active' : ''}`}
              onClick={() => {
                const el = document.getElementById(s.id)
                if (el) smoothScrollTo(el, 800)
              }}
              aria-label={`Go to ${s.label}`}
            >
              <span className="snap-scroller__rail-dot" />
              <span className="snap-scroller__rail-label">{s.label}</span>
            </button>
          ))}
        </nav>
      )}

      <div className={`snap-scroller__hint ${showHint ? 'show' : ''}`}>
        <span>SCROLL</span>
        <span>↑ ↓ or click dots</span>
      </div>

      <div className="snap-scroller__inner">
        {children}
      </div>
    </div>
  )
}
