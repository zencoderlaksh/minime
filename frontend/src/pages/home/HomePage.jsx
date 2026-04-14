import { Helmet } from 'react-helmet-async'
import HeroSection from './sections/HeroSection.jsx'
import BrandMarqueeSection from './sections/BrandMarqueeSection.jsx'
import FeaturedCollectionsSection from './sections/FeaturedCollectionsSection.jsx'
import BestsellersSection from './sections/BestsellersSection.jsx'
import MiniMomentsSection from './sections/MiniMomentsSection.jsx'
import TestimonialsSection from './sections/TestimonialsSection.jsx'
import InstagramSection from './sections/InstagramSection.jsx'
import { seoDefaults } from '../../lib/seo/seoDefaults.js'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{seoDefaults.title}</title>
        <meta name="description" content={seoDefaults.description} />
      </Helmet>

      <HeroSection />
      <BrandMarqueeSection />
      <FeaturedCollectionsSection />
      <BestsellersSection />
      <MiniMomentsSection />
      <TestimonialsSection />
      <InstagramSection />
    </>
  )
}

export default HomePage
