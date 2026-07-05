import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Icon from './Icon'

export default function Layout() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const titles = {
      '/': 'MCS Tech Solution | Software, Automation & AI',
      '/about': 'About | MCS Tech Solution',
      '/services': 'Services | MCS Tech Solution',
      '/solutions': 'Solutions | MCS Tech Solution',
      '/contact': 'Contact | MCS Tech Solution',
    }
    document.title = titles[location.pathname] || 'Page Not Found | MCS Tech Solution'
  }, [location.pathname])

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      document.documentElement.style.setProperty('--progress', `${max ? (scrollY / max) * 100 : 0}%`)
    }
    update()
    addEventListener('scroll', update, { passive: true })
    return () => removeEventListener('scroll', update)
  }, [])

  return <><a className="skip-link" href="#content">Skip to content</a><div className="scroll-progress"/><Header/><main id="content" key={location.pathname} className="page-enter"><Outlet/></main><Footer/><a className="whatsapp" href="https://wa.me/916379982716" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Icon name="message"/><span>WhatsApp</span></a></>
}
