import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Shared handle to the active Lenis instance, so any component can drive
// a scroll (e.g. nav links, cross-page "scroll to section") through
// Lenis's own smoothing instead of a native scrollIntoView — calling
// scrollIntoView directly fights Lenis's raf loop and produces a janky,
// multi-second drift to the wrong position.
export const lenisRef = { current: null }

// Drives buttery-smooth scroll physics (Lenis) and keeps GSAP's
// ScrollTrigger perfectly in sync with it. This is the same trick
// behind that "inertia" feel on Apple's product pages.
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      lenisRef.current = null
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return children
}

// Scrolls to a section, using Lenis when it's running (respecting reduced
// motion) and falling back to a plain scrollIntoView otherwise.
export function scrollToSection(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return
  if (lenisRef.current) {
    lenisRef.current.scrollTo(el, { offset: 0 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
