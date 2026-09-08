import './ContentSection.css'
import SectionHeading from '../SectionHeading/SectionHeading'

function ContentSection({ id, kicker, title, accent, detail, children }) {
  return (
    <section id={id} className="content-section">
      <SectionHeading
        kicker={kicker}
        title={title}
        accent={accent}
      />

      {detail && (
        <div className="content-section__detail">
          <span></span>
          <p>{detail}</p>
        </div>
      )}

      {children}
    </section>
  )
}

export default ContentSection
