import { useEffect, useRef } from 'react'
import ContentSection from '../ContentSection/ContentSection'
import { profile } from '../../data/profile'
import './About.css'

function useTilt(max = 6) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if ('ontouchstart' in window) return

    let raf = null
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform =
          `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(-3px)`
        el.style.transition = 'transform 0.12s ease-out'
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.transform = ''
      el.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [max])

  return ref
}

function About({ ...rest }) {
  return (
    <ContentSection
      id="about"
      kicker="ABOUT"
      title="Hi, I'm"
      accent={profile.name}
      detail={profile.bio}
      {...rest}
    >
      <div className="about__extras">
        <div className="about__avatar">
          <img src="/profile.jpg" alt={profile.name} />
        </div>

        <div className="about__highlights">
          {profile.highlights.map((h) => (
            <TiltCard key={h.label} className="about__highlight">
              <div className="about__highlight-value">{h.value}</div>
              <div className="about__highlight-label">{h.label}</div>
            </TiltCard>
          ))}
        </div>

        <div className="about__interests">
          <h3 className="about__subheading">What I work on</h3>
          <ul className="about__interest-list">
            {profile.interests.map((interest) => (
              <li key={interest} className="about__interest">
                <span className="about__interest-dot"></span>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentSection>
  )
}

function TiltCard({ children, className }) {
  const tilt = useTilt(8)
  return (
    <div
      ref={tilt}
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

export default About
