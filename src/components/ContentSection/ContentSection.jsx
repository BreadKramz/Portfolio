import './ContentSection.css'
import SectionHeading from '../SectionHeading/SectionHeading'

function ContentSection({ id, kicker, title, accent, detail, children, ...rest }) {
  return (
    <section id={id} className="content-section" {...rest}>
      <div className="content-section__body">
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
      </div>
    </section>
  )
}

export default ContentSection