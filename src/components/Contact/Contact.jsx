import ContentSection from '../ContentSection/ContentSection'
import './Contact.css'

function Contact() {
  return (
    <ContentSection
      id="contact"
      number="05"
      kicker="CONTACT"
      title="Let's build"
      accent="something."
    >
      <a href="mailto:hello@kramz.dev" className="contact__link">
        GET IN TOUCH
        <span>↗</span>
      </a>
    </ContentSection>
  )
}

export default Contact
