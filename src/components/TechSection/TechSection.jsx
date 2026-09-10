import './TechSection.css'
import TechMarquee from '../TechMarquee/TechMarquee'
import { languages } from '../../data/languages'
import { technologies } from '../../data/technologies'

function TechSection({ ...rest }) {
  return (
    <section className="tech-section" {...rest}>
      <TechMarquee items={languages} />
      <TechMarquee items={technologies} reverse />
    </section>
  )
}

export default TechSection
