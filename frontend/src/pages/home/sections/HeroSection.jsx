import { Link } from 'react-router-dom'
import { heroVideo } from '../../../data/home.data.js'

function HeroSection() {
  return (
    <section className="video-hero">
      <video
        className="video-hero__media"
        src={heroVideo.src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroVideo.poster}
      />

      <div className="video-hero__overlay" />

      <div className="container video-hero__content">
        <p>Spring Summer 2026</p>
        <div className="video-hero__actions">
          <Link to="/collections/new-arrivals" className="hero-pill">
            New arrivals
          </Link>
          <Link to="/collections/women" className="hero-pill">
            Shop women
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
