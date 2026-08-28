import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from './SmoothScroll'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#extracurricular', label: 'Beyond Code' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // section anchors only exist on the home page — from a project detail
  // page, navigate home first and let Home scroll to the target on mount
  const handleClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname === '/') {
      scrollToSection(href)
    } else {
      navigate('/', { state: { scrollTo: href } })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled ? 'border-line bg-ink/90 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between md:h-[70px]">
        <a
          href="#top"
          onClick={(e) => handleClick(e, '#top')}
          className="font-display text-base tracking-tight text-bone"
        >
          Senithi<span className="text-mint">.</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="link-underline text-sm text-bone-dim transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, '#contact')}
          className="hidden items-center rounded-full bg-mint px-5 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.04] md:inline-flex"
        >
          Get in Touch
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="text-bone md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-ink md:hidden"
          >
            <ul className="flex flex-col gap-5 px-6 py-6 text-base text-bone-dim">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleClick(e, link.href)} className="text-bone">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="text-mint">
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
