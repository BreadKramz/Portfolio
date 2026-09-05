import ContentSection from '../ContentSection/ContentSection'
import { profile } from '../../data/profile'
import './Contact.css'

const socialIcons = {
  github: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.4 5.6 18.3.5 12 .5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5.3c0-1.3-.5-2-1.5-2s-1.5.7-1.5 2V19h-3V9h3v1.3c.5-.8 1.5-1.5 3-1.5 2.2 0 3 1.3 3 3.7V19z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
}

function Contact() {
  return (
    <ContentSection
      id="contact"
      number="07"
      kicker="CONTACT"
      title="Let's build"
      accent="something."
    >
      <div className="contact__body">
        <p className="contact__intro">
          I'm currently looking for internship and junior software engineering
          opportunities. If you're working on something interesting or just want
          to say hi, my inbox is always open.
        </p>

        <a href="mailto:realmarklesterj@gmail.com" className="contact__link">
          realmarklesterj@gmail.com
          <span>↗</span>
        </a>

        <div className="contact__socials">
          {profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="contact__social"
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.name}
            >
              {socialIcons[social.icon]}
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </ContentSection>
  )
}

export default Contact
