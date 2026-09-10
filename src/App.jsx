import { useEffect, useRef } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import { Experience, Education } from './components/Timeline/Timeline'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import GameCursor from './components/GameCursor/GameCursor'
import SnapScroller from './components/SnapScroller/SnapScroller'

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) {
      document.body.classList.add('game-cursor')
    }
  }, [])

  return (
    <div ref={appRef} className="app">
      <GameCursor />
      <SnapScroller>
        <Header />
        <Hero data-snap id="home" />
        <About data-snap id="about" />
        <Projects data-snap id="projects" />
        <Experience data-snap id="experience" />
        <Education data-snap id="education" />
        <Contact data-snap id="contact" />
        <Footer />
      </SnapScroller>
    </div>
  )
}

export default App
