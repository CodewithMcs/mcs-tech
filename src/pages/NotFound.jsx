import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function NotFound() {
  return <section className="not-found"><div className="shell"><span>404</span><h1>This page took a wrong turn.</h1><p>The link may be outdated, but your next digital project does not have to be.</p><Link className="button" to="/">Back to home <Icon name="arrow" size={18}/></Link></div></section>
}
