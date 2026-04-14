import SectionHeader from '../../../components/common/SectionHeader.jsx'
import ProductRail from '../../../components/product/ProductRail.jsx'
import { bestsellerProducts } from '../../../data/home.data.js'

function BestsellersSection() {
  return (
    <section className="section-space">
      <div className="container">
        <SectionHeader
          eyebrow="Bestsellers"
          title="A premium product rail ready for the main commercial story."
          description="We can replace these placeholders with real product data once the backend contracts are ready."
        />
        <ProductRail products={bestsellerProducts} />
      </div>
    </section>
  )
}

export default BestsellersSection
