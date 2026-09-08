import { useEffect } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import TechSection from './components/TechSection/TechSection'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import { Experience, Education } from './components/Timeline/Timeline'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import GameCursor from './components/GameCursor/GameCursor'

function App() {
  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) {
      document.body.classList.add('game-cursor')
    }
  }, [])

  return (
    <main>
      <GameCursor />
      <Header />
      <Hero />
      <TechSection />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
