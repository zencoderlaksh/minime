import { useEffect, useRef } from "react";
import gsap from "gsap";
import { storyMoments } from "../../../data/home.data.js";

function MiniMomentsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const panels = gsap.utils.toArray(".story-panel");

      panels.forEach((panel) => {
        const media = panel.querySelector(".story-panel__media");
        const content = panel.querySelector(".story-panel__content");

        gsap.fromTo(
          [media, content],
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: panel,
              start: "top 78%",
            },
          },
        );

        gsap.to(media.querySelector("img"), {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-space">
      <div className="container">
        <div className="warmth-header" style={{ marginBottom: "3.5rem" }}>
          <span className="warmth-header__eyebrow">Stories</span>
          <h2 className="warmth-header__title">In Every Moment</h2>
        </div>

        <div className="story-stack">
          {storyMoments.map((moment, index) => (
            <article
              key={moment.title}
              className={
                index === 1 ? "story-panel story-panel--reverse" : "story-panel"
              }
            >
              <div className="story-panel__media">
                <img
                  src={moment.image}
                  alt={moment.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="story-panel__content">
                <p className="eyebrow">Mini Moments</p>
                <h2>{moment.title}</h2>
                <p>{moment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MiniMomentsSection;
