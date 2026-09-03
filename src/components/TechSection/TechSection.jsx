import './TechSection.css'
import TechMarquee from '../TechMarquee/TechMarquee'
import { languages } from '../../data/languages'
import { technologies } from '../../data/technologies'

function TechSection() {
  return (
    <section className="tech-section">
      <div className="tech-section__meta">
        <span>01</span>
        <span>LANGUAGES</span>
      </div>

      <TechMarquee items={languages} />

      <div className="tech-section__meta tech-section__meta--second">
        <span>02</span>
        <span>TECHNOLOGIES</span>
      </div>

      <TechMarquee items={technologies} reverse />
    </section>
  )
}

export default TechSection
