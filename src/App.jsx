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
    // Repeat the items several times so there is always
    // content covering the entire screen.
    const repeatedItems = Array(4).fill(items).flat()

    const renderItems = () =>
      repeatedItems.map((item, index) => (
        <div
          className={`tech-item ${item.className}`}
          key={`${item.name}-${index}`}
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
        <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
          <div className="marquee-group">
            {renderItems()}
          </div>

          <div className="marquee-group">
            {renderItems()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <main>
      <section className="tech-section">
        <Marquee items={languages} />
        <Marquee items={technologies} reverse />
      </section>
    </main>
  )
}

export default App