import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link className="brand" to="/" aria-label="MCS Tech Solution home">
      <span className="brand-mark">MCS</span>
      <span className="brand-name"><strong>MCS Tech Solution</strong><small>Software · Automation · AI</small></span>
    </Link>
  )
}
