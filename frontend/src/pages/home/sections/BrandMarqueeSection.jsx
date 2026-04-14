import Marquee from '../../../components/brand/Marquee.jsx'
import { homeHighlights } from '../../../data/home.data.js'

function BrandMarqueeSection() {
  return (
    <section className="section-space section-space--sm">
      <Marquee items={homeHighlights} />
    </section>
  )
}

export default BrandMarqueeSection
