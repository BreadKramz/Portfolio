import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__label">
          <span></span>
          PORTFOLIO / 2026
        </div>

        <h1 className="hero__title">BreadKramz</h1>

        <div className="hero__construction">
          <span className="hero__status-dot"></span>
          <span>Under Construction Website</span>
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
