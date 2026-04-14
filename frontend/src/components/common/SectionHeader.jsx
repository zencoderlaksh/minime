function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'section-header section-header--center' : 'section-header'}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}

export default SectionHeader
