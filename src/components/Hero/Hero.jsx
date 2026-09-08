import { useEffect, useRef } from 'react'
import { profile } from '../../data/profile'
import './Hero.css'

function useRipple() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if ('ontouchstart' in window) return

    const onClick = (e) => {
      const rect = el.getBoundingClientRect()
      const ripple = document.createElement('span')
      const size = Math.max(rect.width, rect.height)
      ripple.style.width = size + 'px'
      ripple.style.height = size + 'px'
      ripple.style.left = e.clientX - rect.left - size / 2 + 'px'
      ripple.style.top = e.clientY - rect.top - size / 2 + 'px'
      ripple.className = 'ripple'
      el.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    }

    el.addEventListener('click', onClick)
    return () => el.removeEventListener('click', onClick)
  }, [])

  return ref
}

function Hero() {
  const primaryRef = useRipple()
  const secondaryRef = useRipple()

  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__label">
          <span></span>
          PORTFOLIO / 2026
        </div>

        <h1 className="hero__title">
          {profile.handle}
          <span className="hero__title-dot">.</span>
        </h1>

        <p className="hero__subtitle">
          {profile.role}
        </p>

        <p className="hero__tagline">
          {profile.tagline}
        </p>

        <div className="hero__construction">
          <span className="hero__status-dot"></span>
          <span>Open to internships and junior roles</span>
        </div>

        <div className="hero__cta">
          <a
            ref={primaryRef}
            href="#projects"
            className="hero__cta-primary ripple-container"
          >
            View Projects
            <span>↓</span>
          </a>
          <a
            ref={secondaryRef}
            href="#contact"
            className="hero__cta-secondary ripple-container"
          >
            Get in Touch
          </a>
        </div>

        <div className="hero__scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="hero__scroll-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
