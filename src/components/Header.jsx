import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/site'
import Icon from './Icon'
import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 28)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <nav className="nav shell" aria-label="Main navigation">
        <Logo/>
        <div className={`nav-menu ${open ? 'open' : ''}`}>
          {navigation.map(([label, href]) => <NavLink key={href} to={href} end={href === '/'}>{label}</NavLink>)}
          <NavLink className="button nav-mobile-cta" to="/contact">Book a consultation <Icon name="arrow" size={17}/></NavLink>
        </div>
        <NavLink className="button nav-cta" to="/contact">Book a consultation <Icon name="arrow" size={17}/></NavLink>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><Icon name={open ? 'close' : 'menu'}/></button>
      </nav>
    </header>
  )
}
