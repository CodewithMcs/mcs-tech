import CTA from '../components/CTA'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import { services } from '../data/site'

export default function Services() {
  return <>
    <PageHero eyebrow="Services" title="From strategy to support," accent="one accountable team." copy="Design, engineering, automation and long-term product care—joined up around the outcomes your business needs."/>
    <section className="section services-page"><div className="shell service-detail-grid">{services.map((service,index)=><article key={service.title}><div className="service-top"><span>0{index+1}</span><div className="icon-box"><Icon name={service.icon} size={24}/></div></div><h2>{service.title}</h2><p>{service.text}</p><ul>{service.tags.map(tag=><li key={tag}><Icon name="check" size={16}/>{tag}</li>)}</ul></article>)}</div></section>
    <section className="section engagement"><div className="shell engagement-grid"><div><div className="eyebrow"><i/>Flexible engagement</div><h2>The right level of support at every stage.</h2></div><div className="engagement-list"><article><b>01</b><span><h3>New product build</h3><p>Take an idea from discovery to a production-ready launch.</p></span></article><article><b>02</b><span><h3>Modernize a system</h3><p>Replace fragile tools and manual processes without disrupting operations.</p></span></article><article><b>03</b><span><h3>Ongoing technology partner</h3><p>Maintain, improve and scale existing software with consistent support.</p></span></article></div></div></section>
    <CTA/>
  </>
}
