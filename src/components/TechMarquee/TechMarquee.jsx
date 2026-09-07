import './TechMarquee.css'

function TechItem({ name, icon: Icon, className }) {
  return (
    <div className={`marquee__item ${className}`}>
      <span className="marquee__icon">
        <Icon />
      </span>
      <span className="marquee__name">{name}</span>
    </div>
  )
}

function TechMarquee({ items, reverse = false }) {
  const duplicated = [...items, ...items]

  return (
    <div className="marquee">
      <div className={`marquee__track ${reverse ? 'marquee__track--reverse' : ''}`}>
        {duplicated.map((item, index) => (
          <TechItem
            key={`${item.name}-${index}`}
            name={item.name}
            icon={item.icon}
            className={item.className}
          />
        ))}
      </div>
    </div>
  )
}

export default TechMarquee
