import { useState } from 'react'
import { Link } from 'react-router-dom'
import { challenges } from '../data/site'
import Icon from './Icon'

export default function ChallengeExplorer() {
  const [active, setActive] = useState(0)
  const challenge = challenges[active]

  return (
    <section className="section challenge-section">
      <div className="shell">
        <div className="section-head">
          <div><div className="eyebrow"><i/>Explore by challenge</div><h2>What is holding your business back?</h2></div>
          <p>Choose the issue that sounds most familiar. We will show you where technology can make the biggest practical difference.</p>
        </div>
        <div className="challenge-explorer">
          <div className="challenge-photo">
            <img src="/mcs-impact.jpg" alt="Business owner and technology consultant discussing an improvement plan" width="1776" height="896" loading="lazy"/>
            <div><span>MCS APPROACH</span><strong>Understand first.<br/>Build what matters.</strong></div>
          </div>
          <div className="challenge-panel">
            <div className="challenge-tabs" role="tablist" aria-label="Business challenges">
              {challenges.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  tabIndex={active === index ? 0 : -1}
                  aria-selected={active === index}
                  aria-controls="challenge-content"
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => {
                    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return
                    event.preventDefault()
                    const direction = event.key === 'ArrowRight' ? 1 : -1
                    const next = (index + direction + challenges.length) % challenges.length
                    setActive(next)
                    event.currentTarget.parentElement.children[next].focus()
                  }}
                >
                  <span>0{index + 1}</span>{item.label}
                </button>
              ))}
            </div>
            <div className="challenge-content" id="challenge-content" role="tabpanel" key={challenge.label}>
              <span className="outcome-label">RECOMMENDED DIRECTION</span>
              <h3>{challenge.title}</h3>
              <p>{challenge.text}</p>
              <div className="solution-pill">{challenge.solution}</div>
              <strong className="challenge-metric"><i/><span>{challenge.metric}</span></strong>
              <Link className="text-link" to="/contact">Discuss this challenge <Icon name="arrow" size={16}/></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
