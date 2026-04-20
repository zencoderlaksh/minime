import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { heroImages, heroVideo } from '../../../data/home.data.js'

function HeroSection() {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const connection = navigator.connection
    const saveData = connection?.saveData
    const slowConnection =
      connection?.effectiveType === 'slow-2g' ||
      connection?.effectiveType === '2g' ||
      connection?.effectiveType === '3g'

    if (prefersReducedMotion || saveData || slowConnection) {
      return undefined
    }

    const loadVideo = () => setShouldLoadVideo(true)
    const idleCallback =
      'requestIdleCallback' in window
        ? window.requestIdleCallback(loadVideo, { timeout: 1500 })
        : window.setTimeout(loadVideo, 800)

    return () => {
      if ('cancelIdleCallback' in window && typeof idleCallback === 'number') {
        window.cancelIdleCallback(idleCallback)
        return
      }

      window.clearTimeout(idleCallback)
    }
  }, [])

  return (
    <section className="video-hero">
      <img
        className="video-hero__media"
        src={heroVideo.poster ?? heroImages.primary}
        alt="MiniMe spring summer collection"
        fetchPriority="high"
        decoding="async"
      />

      {shouldLoadVideo ? (
        <video
          className={isVideoReady ? 'video-hero__media video-hero__media--video is-visible' : 'video-hero__media video-hero__media--video'}
          src={heroVideo.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroVideo.poster}
          onLoadedData={() => setIsVideoReady(true)}
        />
      ) : null}

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
