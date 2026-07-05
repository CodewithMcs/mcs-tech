import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import ChallengeExplorer from '../components/ChallengeExplorer'
import Icon from '../components/Icon'
import { industries, process, services, solutions } from '../data/site'

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-art" aria-hidden="true"><img src="/mcs-hero.jpg" alt="" width="1776" height="896"/><span className="visual-note note-one"><i/>Secure by design</span><span className="visual-note note-two"><i/>Built to scale</span></div>
      <div className="shell hero-content">
        <div className="eyebrow light"><i/>Technology that moves business forward</div>
        <h1>Build smarter.<br/>Operate faster.<br/><em>Grow with confidence.</em></h1>
        <p>MCS Tech Solution creates custom software, AI automation and digital systems that turn complex business operations into a competitive advantage.</p>
        <div className="hero-actions"><Link className="button" to="/contact">Start your project <Icon name="arrow" size={18}/></Link><Link className="quiet-link" to="/services">Explore our expertise <Icon name="arrow" size={16}/></Link></div>
        <div className="hero-proof"><span><b>120+</b> projects delivered</span><span><b>98%</b> client satisfaction</span><span><b>24/7</b> support available</span></div>
      </div>
    </section>

    <section className="industry-strip"><div className="shell"><span>TRUSTED ACROSS</span>{industries.map(item=><b key={item}>{item}</b>)}</div></section>

    <section className="section intro-section"><div className="shell intro-grid"><div><div className="eyebrow"><i/>What we solve</div><h2>Technology should remove friction—not add to it.</h2></div><div><p>Disconnected tools, repetitive work and unclear data slow good businesses down. We design connected systems that make daily operations simpler, decisions clearer and growth easier to manage.</p><Link className="text-link" to="/about">Why MCS is different <Icon name="arrow" size={16}/></Link></div></div></section>

    <ChallengeExplorer/>

    <section className="section services-preview"><div className="shell"><div className="section-head"><div><div className="eyebrow"><i/>Our expertise</div><h2>One partner for your digital transformation.</h2></div><Link className="text-link" to="/services">View all services <Icon name="arrow" size={16}/></Link></div><div className="service-grid">{services.slice(0,4).map((service,index)=><article className="service-card" key={service.title}><span>0{index+1}</span><div className="icon-box"><Icon name={service.icon}/></div><h3>{service.title}</h3><p>{service.text}</p><div className="tags">{service.tags.map(tag=><small key={tag}>{tag}</small>)}</div></article>)}</div></div></section>

    <section className="section solution-preview"><div className="shell"><div className="section-head light-head"><div><div className="eyebrow light"><i/>Solutions with purpose</div><h2>Built around real business work.</h2></div><p>Flexible foundations shaped to your process, your people and your next stage of growth.</p></div><div className="solution-list">{solutions.slice(0,4).map(item=><Link to="/solutions" className="solution-row" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.outcome}</p><Icon name="arrow"/></Link>)}</div></div></section>

    <section className="section process-section"><div className="shell"><div className="section-head"><div><div className="eyebrow"><i/>How we work</div><h2>Clear process. Visible progress.</h2></div><p>No black boxes or technical theatre. You always know what we are building, why it matters and what happens next.</p></div><div className="process-grid">{process.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <CTA/>
  </>
}
