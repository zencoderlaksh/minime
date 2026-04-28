import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { communityTiles } from "../../../data/home.data.js";

function InstagramSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        ".edit-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-space edit-section">
      <div className="container">
        <header className="edit-header">
          <span className="edit-header__eyebrow">The Edit</span>
          <h2 className="edit-header__title">Curated looks for the season</h2>
        </header>

        <div className="edit-grid">
          {communityTiles.map((tile, index) => {
            const isLarge = index === 0;
            return (
              <Link
                key={tile.id}
                to={tile.href}
                className={`edit-card ${isLarge ? "edit-card--large" : ""}`}
                aria-label={tile.title}
              >
                <div className="edit-card__media">
                  <img
                    src={tile.poster ?? tile.image}
                    alt={tile.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="edit-card__overlay" />
                </div>

                <div className="edit-card__content">
                  <span className="edit-card__eyebrow">{tile.eyebrow}</span>
                  <h3 className="edit-card__title">{tile.title}</h3>
                  <span className="edit-card__cta">
                    {tile.cta}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 12l4-4-4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
