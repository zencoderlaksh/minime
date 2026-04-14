import { communityTiles } from '../../../data/home.data.js'

function InstagramSection() {
  return (
    <section className="section-space section-space--lg">
      <div className="container social-strip">
        <div className="section-header">
          <p className="eyebrow">Community</p>
          <h2>Social proof, UGC, and campaign tiles can live here next.</h2>
        </div>

        <div className="social-strip__grid">
          {communityTiles.map((tile) => (
            <article key={tile.id} className="social-tile">
              <img src={tile.image} alt={tile.title} loading="lazy" />
              <span>{tile.title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramSection
