import CTA from '../components/CTA'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import { solutions } from '../data/site'

export default function Solutions() {
  return <>
    <PageHero eyebrow="Business solutions" title="Proven systems, adapted to" accent="your operation." copy="Start with a dependable foundation and tailor the workflows, integrations and experience to fit your business."/>
    <section className="section solutions-page"><div className="shell">{solutions.map(item=><article className="solution-detail" key={item.number}><div><span>{item.number}</span><h2>{item.title}</h2></div><p>{item.text}</p><strong>{item.outcome}</strong><a href="https://wa.me/916379982716" target="_blank" rel="noreferrer" aria-label={`Discuss ${item.title}`}>Discuss solution <Icon name="arrow" size={17}/></a></article>)}</div></section>
    <section className="section custom-note"><div className="shell"><div className="eyebrow light"><i/>Need something different?</div><h2>Your workflow does not have to fit into somebody else’s template.</h2><p>We can combine capabilities or build a completely custom platform around your operation.</p></div></section>
    <CTA/>
  </>
}
