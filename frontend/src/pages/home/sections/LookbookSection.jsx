import { Link } from "react-router-dom";
import { lookbookCards } from "../../../data/home.data.js";

function LookbookSection() {
  return (
    <section className="section-space">
      <div className="container">
        <div className="warmth-header">
          <span className="warmth-header__eyebrow">Explore</span>
          <h2 className="warmth-header__title">Stories & Collections</h2>
        </div>

        <div className="lookbook-grid">
          {lookbookCards.map((card) => (
            <Link key={card.id} to={card.href} className="lookbook-card">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                decoding="async"
              />
              <span>{card.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LookbookSection;
