import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";
import { bestsellerProducts } from "../../../data/home.data.js";
import { formatCurrency } from "../../../lib/utils/formatCurrency.js";
import "swiper/css";
import "swiper/css/free-mode";

function FeaturedCollectionsSection() {
  const slides = [
    ...bestsellerProducts,
    ...bestsellerProducts,
    ...bestsellerProducts,
  ];

  return (
    <section className="section-space warmth-section">
      <div className="container warmth-header">
        <span className="warmth-header__eyebrow">The Collection</span>
        <h2 className="warmth-header__title">A Touch of Warmth</h2>
      </div>

      <div className="warmth-carousel">
        <Swiper
          modules={[FreeMode, Mousewheel, Autoplay]}
          slidesPerView="auto"
          spaceBetween={20}
          freeMode={{
            enabled: true,
            sticky: false,
            momentumRatio: 0.4,
            momentumVelocityRatio: 0.4,
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1.2,
          }}
          grabCursor={true}
          loop={true}
          speed={600}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { spaceBetween: 24 },
            960: { spaceBetween: 28 },
          }}
        >
          {slides.map((product, index) => (
            <SwiperSlide
              key={`${product.id}-${index}`}
              className="warmth-slide"
            >
              <Link to={`/product/${product.slug}`} className="warmth-card">
                <div className="warmth-card__media">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="warmth-card__details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FeaturedCollectionsSection;
