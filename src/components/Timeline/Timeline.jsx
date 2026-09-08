import { useEffect, useRef } from 'react'
import { experience, education } from '../../data/timeline'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Timeline.css'

function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }
    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    el.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)'

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}

function TimelineItem({ entry, index }) {
  const reveal = useReveal()

  return (
    <div ref={reveal} className="timeline__item">
      <div className="timeline__marker">
        <span className={`timeline__dot timeline__dot--${entry.type}`}></span>
        {index !== null && <span className="timeline__line"></span>}
      </div>

      <div className="timeline__content">
        <div className="timeline__period">{entry.period}</div>
        <h3 className="timeline__role">{entry.role}</h3>
        <div className="timeline__org">{entry.org}</div>
        <p className="timeline__description">{entry.description}</p>
      </div>
    </div>
  )
}

function Timeline({ title, kicker, entries }) {
  return (
    <section className="content-section timeline">
      <SectionHeading
        kicker={kicker}
        title={title}
      />

      <div className="timeline__list">
        {entries.map((entry, index) => (
          <TimelineItem
            key={`${entry.role}-${entry.org}`}
            entry={entry}
            index={index < entries.length - 1 ? index : null}
          />
        ))}
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <Timeline
      kicker="EXPERIENCE"
      title="Where I've worked"
      entries={experience}
    />
  )
}

export function Education() {
  return (
    <Timeline
      kicker="EDUCATION"
      title="Where I learned"
      entries={education}
    />
  )
}
