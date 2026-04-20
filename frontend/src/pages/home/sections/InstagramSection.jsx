import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { communityTiles } from '../../../data/home.data.js'

function InstagramSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        '.campaign-card',
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 0.95,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        },
      )
    }, sectionRef)

    return () => context.revert()
  }, [])

  const handlePointerMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 18
    const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 18

    card.style.setProperty('--tile-shift-x', `${offsetX}px`)
    card.style.setProperty('--tile-shift-y', `${offsetY}px`)
  }

  const handlePointerEnter = async (event) => {
    const video = event.currentTarget.querySelector('video')

    if (!video) {
      return
    }

    try {
      await video.play()
    } catch {
      // Keep the poster visible when autoplay is blocked.
    }
  }

  const handlePointerLeave = (event) => {
    const card = event.currentTarget

    card.style.setProperty('--tile-shift-x', '0px')
    card.style.setProperty('--tile-shift-y', '0px')

    const video = card.querySelector('video')

    if (!video) {
      return
    }

    video.pause()
    video.currentTime = 0
  }

  return (
    <section ref={sectionRef} className="section-space section-space--lg">
      <div className="container social-strip social-strip--campaign">
        <div className="campaign-grid">
          {communityTiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className={`campaign-card campaign-card--${tile.layout}`}
              onMouseEnter={handlePointerEnter}
              onMouseLeave={handlePointerLeave}
              onMouseMove={handlePointerMove}
              aria-label={tile.title}
            >
              <div className="campaign-card__media">
                <img
                  src={tile.poster ?? tile.image}
                  alt={tile.title}
                  loading="lazy"
                  decoding="async"
                />
                {tile.video ? (
                  <video
                    src={tile.video}
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={tile.poster}
                    aria-hidden="true"
                  />
                ) : null}
              </div>

              <div className="campaign-card__content">
                <p className="campaign-card__eyebrow">{tile.eyebrow}</p>
                <h3>{tile.title}</h3>
                <span>{tile.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramSection
