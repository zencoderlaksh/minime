import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="section-space">
      <div className="container simple-page">
        <p className="eyebrow">404</p>
        <h1>The page drifted out of the MiniMe collection.</h1>
        <Link className="button button--primary" to="/">
          Back home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
