import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { bestsellerProducts } from '../../../data/home.data.js'
import { formatCurrency } from '../../../lib/utils/formatCurrency.js'
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll.js'

function BestsellersSection() {
  const galleryItems = useMemo(() => [...bestsellerProducts, ...bestsellerProducts], [])
  const [activeProductIndex, setActiveProductIndex] = useState(null)
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  const activeProduct =
    activeProductIndex === null
      ? null
      : bestsellerProducts[activeProductIndex % bestsellerProducts.length]
  const activeMedia = activeProduct?.gallery?.[activeMediaIndex] ?? null

  useLockBodyScroll(activeProductIndex !== null)

  useEffect(() => {
    if (activeProductIndex === null || !activeProduct) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProductIndex(null)
      }

      if (event.key === 'ArrowRight') {
        setActiveMediaIndex((current) => (current + 1) % activeProduct.gallery.length)
      }

      if (event.key === 'ArrowLeft') {
        setActiveMediaIndex(
          (current) => (current - 1 + activeProduct.gallery.length) % activeProduct.gallery.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeProduct, activeProductIndex])

  const openProduct = (productIndex) => {
    setActiveProductIndex(productIndex)
    setActiveMediaIndex(0)
  }

  const closeGallery = () => {
    setActiveProductIndex(null)
  }

  const showPrevMedia = () => {
    if (!activeProduct) {
      return
    }

    setActiveMediaIndex(
      (current) => (current - 1 + activeProduct.gallery.length) % activeProduct.gallery.length,
    )
  }

  const showNextMedia = () => {
    if (!activeProduct) {
      return
    }

    setActiveMediaIndex((current) => (current + 1) % activeProduct.gallery.length)
  }

  return (
    <>
      <section className="section-space section-space--gallery">
        <div className="infinite-gallery infinite-gallery--editorial">
          <div className="container infinite-gallery__header infinite-gallery__header--compact">
            <p className="eyebrow">Bestsellers</p>
            <Link to="/collections/bestsellers" className="hero-pill hero-pill--dark">
              View all
            </Link>
          </div>

          <div className="infinite-gallery__viewport">
            <div className="infinite-gallery__track">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  className="infinite-gallery__group"
                  aria-hidden={groupIndex === 1}
                >
                  {galleryItems.map((product, productIndex) => {
                    const baseIndex = productIndex % bestsellerProducts.length

                    return (
                      <button
                        key={`${groupIndex}-${product.id}-${productIndex}`}
                        type="button"
                        className="infinite-gallery__editorial-card"
                        onClick={() => openProduct(baseIndex)}
                        aria-label={`Open gallery for ${product.name}`}
                      >
                        <div className="infinite-gallery__editorial-media">
                          <img src={product.image} alt={product.name} loading="lazy" decoding="async" />
                        </div>
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeProduct ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProduct.name} gallery`}
        >
          <button
            type="button"
            className="gallery-lightbox__backdrop"
            onClick={closeGallery}
            aria-label="Close gallery"
          />

          <div className="gallery-lightbox__stage">
            <button
              type="button"
              className="gallery-lightbox__close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              X
            </button>

            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={showPrevMedia}
              aria-label="Previous media"
            >
              {'<'}
            </button>

            <div className="gallery-lightbox__frame">
              {activeMedia?.type === 'video' ? (
                <video
                  key={activeMedia.src}
                  className="gallery-lightbox__media"
                  src={activeMedia.src}
                  poster={activeMedia.poster}
                  controls
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  className="gallery-lightbox__media"
                  src={activeMedia?.src}
                  alt={activeProduct.name}
                  decoding="async"
                />
              )}

              <div className="gallery-lightbox__product-card">
                <div className="gallery-lightbox__product-meta">
                  <div className="gallery-lightbox__product-thumb">
                    <img src={activeProduct.image} alt={activeProduct.name} decoding="async" />
                  </div>
                  <div>
                    <strong>{activeProduct.name}</strong>
                    <span>{formatCurrency(activeProduct.price)}</span>
                  </div>
                </div>

                <Link
                  to={`/product/${activeProduct.slug}`}
                  className="gallery-lightbox__product-link"
                  onClick={closeGallery}
                >
                  {'>'}
                </Link>
              </div>
            </div>

            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={showNextMedia}
              aria-label="Next media"
            >
              {'>'}
            </button>
          </div>

          <div className="gallery-lightbox__thumbs">
            {activeProduct.gallery.map((media, mediaIndex) => (
              <button
                key={`${activeProduct.id}-${mediaIndex}`}
                type="button"
                className={
                  mediaIndex === activeMediaIndex
                    ? 'gallery-lightbox__thumb is-active'
                    : 'gallery-lightbox__thumb'
                }
                onClick={() => setActiveMediaIndex(mediaIndex)}
                aria-label={`Show media ${mediaIndex + 1}`}
              >
                {media.type === 'video' ? (
                  <video src={media.src} muted playsInline preload="none" poster={media.poster} />
                ) : (
                  <img src={media.src} alt="" decoding="async" />
                )}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default BestsellersSection
