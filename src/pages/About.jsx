import CTA from '../components/CTA'
import PageHero from '../components/PageHero'
import { values } from '../data/site'

export default function About() {
  return <>
    <PageHero eyebrow="About MCS Tech Solutions" title="A technology partner built for" accent="long-term impact." copy="We help growing businesses replace complexity with clear, secure and thoughtfully designed digital systems."/>
    <section className="section story-section"><div className="shell story-grid"><div className="story-image"><img src="/mcs-team-v2.jpg" alt="MCS technology team collaborating on a product plan" width="1536" height="1024"/><span>Strategy · Design · Engineering</span></div><div><div className="eyebrow"><i/>Our story</div><h2>Practical technology. Serious ambition.</h2><p>MCS Tech Solutions is a modern software development and automation company helping businesses grow with smart digital solutions. We build business software, websites, admin systems, ERP platforms, CRM tools, WhatsApp automation and custom applications.</p><p>Our goal is straightforward: help small and medium businesses save time, reduce manual work, serve customers better and create more room for growth.</p><blockquote>“We don’t just build websites—we build digital systems that help businesses run smarter.”</blockquote></div></div></section>
    <section className="section values-section"><div className="shell"><div className="section-head"><div><div className="eyebrow"><i/>What guides us</div><h2>Principles you can see in the work.</h2></div></div><div className="values-grid">{values.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section promise-section"><div className="shell promise-grid"><div><span>OUR MISSION</span><h2>Make powerful technology useful and accessible to every growing business.</h2></div><div><span>OUR VISION</span><h2>A future where better systems give every ambitious company room to thrive.</h2></div></div></section>
    <CTA/>
  </>
}
