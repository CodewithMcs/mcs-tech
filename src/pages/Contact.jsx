import { useState } from 'react'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'

export default function Contact() {
  const [sent,setSent]=useState(false)
  const submit=e=>{e.preventDefault();if(e.currentTarget.checkValidity()){setSent(true);e.currentTarget.reset()}}
  return <>
    <PageHero eyebrow="Contact" title="Let’s discuss what your business" accent="needs next." copy="Share the challenge, idea or opportunity. We will respond with practical next steps—not a generic sales pitch."/>
    <section className="section contact-page"><div className="shell contact-layout"><aside><h2>Start a conversation.</h2><p>Prefer to talk directly? Call or message us Monday to Saturday, 9:00 AM–7:00 PM.</p><a href="tel:+916379982716"><Icon name="phone"/> <span><small>CALL US</small>+91 63799 82716</span></a><a href="mailto:mcstech3010@gmail.com"><Icon name="mail"/> <span><small>EMAIL US</small>mcstech3010@gmail.com</span></a><a href="https://wa.me/916379982716" target="_blank" rel="noreferrer"><Icon name="message"/> <span><small>WHATSAPP</small>Start a chat</span></a><div className="response-note"><i/><span><b>Typical response time</b><small>Within one business day</small></span></div></aside><form onSubmit={submit}><div className="field-row"><label>Full name<input name="name" autoComplete="name" required placeholder="Your name"/></label><label>Work email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com"/></label></div><div className="field-row"><label>Phone number<input name="phone" type="tel" autoComplete="tel" pattern="\+?[0-9][0-9 ]{7,17}" required placeholder="+91 63799 82716"/></label><label>Service<select name="service" required defaultValue=""><option value="" disabled>Select one</option><option>Custom software</option><option>AI & automation</option><option>Website</option><option>Business solution</option><option>Support</option></select></label></div><label>How can we help?<textarea name="message" minLength="10" required rows="5" placeholder="Tell us about the problem, goal or system you have in mind..."/></label><button className="button" type="submit">Send enquiry <Icon name="arrow" size={18}/></button>{sent&&<p className="form-success" role="status">Thank you. Your enquiry is ready for our team.</p>}</form></div></section>
  </>
}
