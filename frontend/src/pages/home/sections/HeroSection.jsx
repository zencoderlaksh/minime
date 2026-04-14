import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Button from '../../../components/common/Button.jsx'
import { heroImages, trustHighlights } from '../../../data/home.data.js'

function HeroSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        { opacity: 0, y: 42 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: 'power3.out',
          stagger: 0.12,
        },
      )

      gsap.fromTo(
        '.hero-visual-card',
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.18,
        },
      )

      gsap.to('.hero-card--tall img', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className="hero-section">
      <div className="container hero-section__grid">
        <div className="hero-section__content">
          <p className="eyebrow hero-animate">MiniMe Spring Summer 2026</p>
          <h1 className="hero-animate">
            A softer, slower, more beautiful way to shop women and kidswear.
          </h1>
          <p className="hero-section__description hero-animate">
            MiniMe is designed like an editorial fashion experience, with fluid
            scrolling, premium storytelling, and products that feel warm before
            they ever reach the cart.
          </p>

          <div className="hero-section__actions hero-animate">
            <Button as={Link} to="/collections/women">
              Shop Women
            </Button>
            <Button as={Link} to="/collections/kids" variant="secondary">
              Shop Kids
            </Button>
          </div>

          <div className="hero-section__stats hero-animate">
            {trustHighlights.map((highlight) => (
              <div key={highlight.label} className="hero-stat">
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-section__visual">
          <div className="hero-card hero-card--tall hero-visual-card">
            <img src={heroImages.primary} alt="MiniMe campaign look for women and children" />
            <span>Editorial Drop</span>
          </div>
          <div className="hero-card hero-card--wide hero-visual-card">
            <img src={heroImages.secondary} alt="MiniMe fashion detail shot" />
            <span>Comfort-led silhouettes</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
