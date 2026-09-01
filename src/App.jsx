import './App.css'

import {
  FaJs,
  FaJava,
  FaPhp,
  FaPython,
  FaReact,
  FaLaravel,
  FaSymfony,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'

import {
  SiC,
  SiCplusplus,
  SiMysql,
  SiTailwindcss,
  SiSupabase,
  SiVite,
} from 'react-icons/si'

function App() {
  const languages = [
    { name: 'JavaScript', icon: <FaJs />, className: 'javascript' },
    { name: 'Java', icon: <FaJava />, className: 'java' },
    { name: 'PHP', icon: <FaPhp />, className: 'php' },
    { name: 'Python', icon: <FaPython />, className: 'python' },
    { name: 'C', icon: <SiC />, className: 'c' },
    { name: 'C++', icon: <SiCplusplus />, className: 'cpp' },
    { name: 'SQL', icon: <SiMysql />, className: 'sql' },
  ]

  const technologies = [
    { name: 'React', icon: <FaReact />, className: 'react' },
    { name: 'Laravel', icon: <FaLaravel />, className: 'laravel' },
    { name: 'Symfony', icon: <FaSymfony />, className: 'symfony' },
    { name: 'Node.js', icon: <FaNodeJs />, className: 'node' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, className: 'tailwind' },
    { name: 'Supabase', icon: <SiSupabase />, className: 'supabase' },
    { name: 'Docker', icon: <FaDocker />, className: 'docker' },
    { name: 'Git', icon: <FaGitAlt />, className: 'git' },
    { name: 'GitHub', icon: <FaGithub />, className: 'github' },
    { name: 'Vite', icon: <SiVite />, className: 'vite' },
  ]

  const Marquee = ({ items, reverse = false }) => {
    const renderItems = (group) =>
      items.map((item, index) => (
        <div
          className={`tech-item ${item.className}`}
          key={`${group}-${item.name}-${index}`}
        >
          <span className="tech-icon">
            {item.icon}
          </span>

          <span className="tech-name">
            {item.name}
          </span>
        </div>
      ))

    return (
      <div className="marquee">
        <div
          className={`marquee-track ${
            reverse ? 'reverse' : ''
          }`}
        >
          <div className="marquee-group">
            {renderItems('first')}
          </div>

          <div className="marquee-group">
            {renderItems('second')}
          </div>
        </div>
      </div>
    )
  }

  return (
    <main>

      {/* =========================
          HEADER
      ========================= */}

      <header className="header">
        <div className="header-container">

          <a href="#home" className="logo">
            KRAMZ
          </a>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>


      {/* =========================
          HERO
      ========================= */}

      <section
        className="hero"
        id="home"
      >
        <div className="hero-content">

          <div className="hero-label">
            <span></span>
            PORTFOLIO / 2026
          </div>

          <h1>Kramz</h1>

          <div className="construction">
            <span className="status-dot"></span>

            <span>
              Under Construction Website
            </span>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>

        </div>
      </section>


      {/* =========================
          TECHNOLOGIES
      ========================= */}

      <section className="tech-section">

        <div className="section-meta">
          <span>01</span>
          <span>LANGUAGES</span>
        </div>

        <Marquee items={languages} />

        <div className="section-meta second-meta">
          <span>02</span>
          <span>TECHNOLOGIES</span>
        </div>

        <Marquee
          items={technologies}
          reverse
        />

      </section>


      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className="content-section"
      >

        <div className="section-heading">

          <div className="section-number">
            03
          </div>

          <div>
            <span className="section-kicker">
              ABOUT
            </span>

            <h2>
              Building things
              <br />
              <span>one line at a time.</span>
            </h2>
          </div>

        </div>

        <div className="section-detail">
          <span></span>
          <p>
            A computer science student exploring
            software development, web technologies,
            and everything in between.
          </p>
        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================= */}

      <section
        id="projects"
        className="content-section projects-section"
      >

        <div className="section-heading">

          <div className="section-number">
            04
          </div>

          <div>
            <span className="section-kicker">
              PROJECTS
            </span>

            <h2>
              Things I've
              <br />
              <span>built.</span>
            </h2>
          </div>

        </div>

        <div className="coming-soon">
          <span className="coming-dot"></span>
          PROJECTS COMING SOON
        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="content-section contact-section"
      >

        <div className="section-heading">

          <div className="section-number">
            05
          </div>

          <div>
            <span className="section-kicker">
              CONTACT
            </span>

            <h2>
              Let's build
              <br />
              <span>something.</span>
            </h2>
          </div>

        </div>

        <a
          href="mailto:hello@kramz.dev"
          className="contact-link"
        >
          GET IN TOUCH
          <span>↗</span>
        </a>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <span>
          © 2026 KRAMZ
        </span>

        <span>
          BUILT WITH REACT
        </span>

        <span>
          PHILIPPINES
        </span>

      </footer>

    </main>
  )
}

export default App