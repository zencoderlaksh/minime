import { Helmet } from 'react-helmet-async'
import HeroSection from './sections/HeroSection.jsx'
import FeaturedCollectionsSection from './sections/FeaturedCollectionsSection.jsx'
import BestsellersSection from './sections/BestsellersSection.jsx'
import InstagramSection from './sections/InstagramSection.jsx'
import LookbookSection from './sections/LookbookSection.jsx'
import { seoDefaults } from '../../lib/seo/seoDefaults.js'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{seoDefaults.title}</title>
        <meta name="description" content={seoDefaults.description} />
      </Helmet>

      <HeroSection />
      <InstagramSection />
      <FeaturedCollectionsSection />
      <LookbookSection />
      <BestsellersSection />
    </>
  )
}

export default HomePage
