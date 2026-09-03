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
  const renderGroup = (groupKey) =>
    items.map((item, index) => (
      <TechItem
        key={`${groupKey}-${item.name}-${index}`}
        name={item.name}
        icon={item.icon}
        className={item.className}
      />
    ))

  return (
    <div className="marquee">
      <div className={`marquee__track ${reverse ? 'marquee__track--reverse' : ''}`}>
        <div className="marquee__group">{renderGroup('first')}</div>
        <div className="marquee__group" aria-hidden="true">{renderGroup('second')}</div>
      </div>
    </div>
  )
}

export default TechMarquee
