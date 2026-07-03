import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function CTA() {
  return <section className="cta-section"><div className="shell cta-box"><div><span>HAVE A PROJECT IN MIND?</span><h2>Let’s turn the next challenge into your advantage.</h2></div><Link className="button button-light" to="/contact">Start a conversation <Icon name="arrow" size={18}/></Link></div></section>
}
