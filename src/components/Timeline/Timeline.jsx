import { experience, education } from '../../data/timeline'
import SectionHeading from '../SectionHeading/SectionHeading'
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
