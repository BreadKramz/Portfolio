import { useEffect, useRef } from 'react'
import ContentSection from '../ContentSection/ContentSection'
import { projects, projectStackIcons } from '../../data/projects'
import './Projects.css'

function useTilt(max = 6) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if ('ontouchstart' in window) return

    let raf = null
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform =
          `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(-5px)`
        el.style.transition = 'transform 0.12s ease-out'
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.transform = ''
      el.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [max])

  return ref
}

function ProjectCard({ project }) {
  const Icon = project.icon
  const tilt = useTilt(6)

  return (
    <article
      ref={tilt}
      className={`project-card ${project.accent}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
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

function Projects({ ...rest }) {
  return (
    <ContentSection
      id="projects"
      kicker="PROJECTS"
      title="Things I've"
      accent="built."
      {...rest}
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
