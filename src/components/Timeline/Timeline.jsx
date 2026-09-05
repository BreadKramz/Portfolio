import { experience, education } from '../../data/timeline'
import './Timeline.css'

function TimelineItem({ entry, index }) {
  return (
    <div className="timeline__item">
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

function Timeline({ title, kicker, number, entries }) {
  return (
    <section className="content-section timeline">
      <div className="section-heading">
        <div className="section-heading__number">{number}</div>
        <div>
          <span className="section-heading__kicker">{kicker}</span>
          <h2 className="section-heading__title">
            {title}
          </h2>
        </div>
      </div>

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
      number="05"
      kicker="EXPERIENCE"
      title="Where I've worked"
      entries={experience}
    />
  )
}

export function Education() {
  return (
    <Timeline
      number="06"
      kicker="EDUCATION"
      title="Where I learned"
      entries={education}
    />
  )
}
