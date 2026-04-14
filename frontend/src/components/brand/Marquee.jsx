function Marquee({ items }) {
  const content = [...items, ...items]

  return (
    <div className="marquee" aria-label="Brand highlights">
      <div className="marquee__track">
        {content.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
