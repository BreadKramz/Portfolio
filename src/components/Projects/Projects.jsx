import ContentSection from '../ContentSection/ContentSection'
import './Projects.css'

function Projects() {
  return (
    <ContentSection
      id="projects"
      number="04"
      kicker="PROJECTS"
      title="Things I've"
      accent="built."
    >
      <div className="projects__coming-soon">
        <span className="projects__dot"></span>
        PROJECTS COMING SOON
      </div>
    </ContentSection>
  )
}

export default Projects
