import './SectionHeading.css'

function SectionHeading({ number, kicker, title, accent }) {
  return (
    <div className="section-heading">
      <div className="section-heading__number">
        {number}
      </div>

      <div>
        <span className="section-heading__kicker">
          {kicker}
        </span>

        <h2 className="section-heading__title">
          {title}
          {accent && (
            <>
              <br />
              <span>{accent}</span>
            </>
          )}
        </h2>
      </div>
    </div>
  )
}

export default SectionHeading
