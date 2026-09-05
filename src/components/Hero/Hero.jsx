import { profile } from '../../data/profile'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__label">
          <span></span>
          PORTFOLIO / 2026
        </div>

        <h1 className="hero__title">
          {profile.handle}
          <span className="hero__title-dot">.</span>
        </h1>

        <p className="hero__subtitle">
          {profile.role}
        </p>

        <p className="hero__tagline">
          {profile.tagline}
        </p>

        <div className="hero__construction">
          <span className="hero__status-dot"></span>
          <span>Open to internships and junior roles</span>
        </div>

        <div className="hero__cta">
          <a href="#projects" className="hero__cta-primary">
            View Projects
            <span>↓</span>
          </a>
          <a href="#contact" className="hero__cta-secondary">
            Get in Touch
          </a>
        </div>

        <div className="hero__scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="hero__scroll-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
