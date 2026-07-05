import { Link } from 'react-router-dom'
import { navigation, socials } from '../data/site'
import Icon from './Icon'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand"><Logo/><p>Enterprise-minded software and automation for ambitious businesses.</p><div className="socials">{socials.map(([icon,label,url])=><a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}><Icon name={icon} size={18}/></a>)}</div></div>
        <div><h3>Navigate</h3>{navigation.slice(1).map(([label,href])=><Link key={href} to={href}>{label}</Link>)}</div>
        <div><h3>Expertise</h3><Link to="/services">Custom software</Link><Link to="/services">AI automation</Link><Link to="/services">WhatsApp automation</Link><Link to="/solutions">Business systems</Link><Link to="/services">Cloud integration</Link></div>
        <div><h3>Start a conversation</h3><a href="tel:+916379982716">+91 63799 82716</a><a href="mailto:mcstech3010@gmail.com">mcstech3010@gmail.com</a><a className="footer-whatsapp" href="https://wa.me/916379982716" target="_blank" rel="noreferrer">WhatsApp us <Icon name="arrow" size={16}/></a></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 MCS Tech Solution</span><span>Built with clarity, care and purpose.</span></div>
    </footer>
  )
}
