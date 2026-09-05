import ContentSection from '../ContentSection/ContentSection'
import { profile } from '../../data/profile'
import './About.css'

function About() {
  return (
    <ContentSection
      id="about"
      number="03"
      kicker="ABOUT"
      title="Hi, I'm"
      accent={profile.name}
      detail={profile.bio}
    >
      <div className="about__extras">
        <div className="about__highlights">
          {profile.highlights.map((h) => (
            <div key={h.label} className="about__highlight">
              <div className="about__highlight-value">{h.value}</div>
              <div className="about__highlight-label">{h.label}</div>
            </div>
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

export default About
