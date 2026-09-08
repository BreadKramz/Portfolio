import ContentSection from '../ContentSection/ContentSection'
import { projects, projectStackIcons } from '../../data/projects'
import './Projects.css'

function ProjectCard({ project }) {
  const Icon = project.icon

  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-card__header">
        <div className="project-card__icon">
          <Icon />
        </div>
        <span className={`project-card__status project-card__status--${project.status.replace(/\s+/g, '-').toLowerCase()}`}>
          {project.status}
        </span>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      {(project.demo || project.repo) && (
        <div className="project-card__links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              Live <span>↗</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              Code <span>↗</span>
            </a>
          )}
        </div>
      )}

      <div className="project-card__meta">
        <div className="project-card__meta-row">
          <span className="project-card__meta-label">Role</span>
          <span className="project-card__meta-value">{project.role}</span>
        </div>
        <div className="project-card__meta-row">
          <span className="project-card__meta-label">Year</span>
          <span className="project-card__meta-value">{project.year}</span>
        </div>
      </div>

      <div className="project-card__stack">
        {project.stack.map((tech) => {
          const TechIcon = projectStackIcons[tech]
          return (
            <span key={tech} className="project-card__chip">
              {TechIcon && <TechIcon />}
              {tech}
            </span>
          )
        })}
      </div>
    </article>
  )
}

function Projects() {
  return (
    <ContentSection
      id="projects"
      kicker="PROJECTS"
      title="Things I've"
      accent="built."
    >
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </ContentSection>
  )
}

export default Projects
