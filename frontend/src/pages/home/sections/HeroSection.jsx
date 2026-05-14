import { Link } from "react-router-dom";
import { heroBanner } from "../../../data/home.data.js";
import HeroImageTrail from "./HeroImageTrail.jsx";

function HeroSection() {
  return (
    <section className="video-hero relative">
      <HeroImageTrail />

      <img
        className="video-hero__media"
        src={heroBanner.src}
        alt="MiniMe fashion for you - coastal sky style"
        fetchPriority="high"
        decoding="async"
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
  );
}

export default HeroSection;
