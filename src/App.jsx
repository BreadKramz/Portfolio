import './App.css'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import TechSection from './components/TechSection/TechSection'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import { Experience, Education } from './components/Timeline/Timeline'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <main>
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
