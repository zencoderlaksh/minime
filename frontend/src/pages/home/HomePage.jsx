import { Helmet } from "react-helmet-async";
import HeroSection from "./sections/HeroSection.jsx";
import CollectionGallerySection from "./sections/CollectionGallerySection.jsx";
import GallerySection from "./sections/GallerySection.jsx";
import { seoDefaults } from "../../lib/seo/seoDefaults.js";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{seoDefaults.title}</title>
        <meta name="description" content={seoDefaults.description} />
      </Helmet>

      <HeroSection />
      <CollectionGallerySection />
      <GallerySection />
    </>
  );
}

export default HomePage;
