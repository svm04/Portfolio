import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../components/SmoothScroll'
import Hero from '../components/Hero'
import Approach from '../components/Approach'
import About from '../components/About'
import Projects from '../components/Projects'
import Extracurricular from '../components/Extracurricular'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const target = location.state?.scrollTo
    if (target) {
      // wait a tick for the page to mount/render before measuring position
      requestAnimationFrame(() => setTimeout(() => scrollToSection(target), 30))
    } else {
      window.scrollTo(0, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Hero />
      <Approach />
      <About />
      <Projects />
      <Extracurricular />
      <Contact />
    </>
  )
}
