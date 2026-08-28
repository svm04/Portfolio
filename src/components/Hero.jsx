import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import headshot from '../assets/headshot-cutout.png'
import { profile } from '../data/content'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { scrollToSection } from './SmoothScroll'

export default function Hero() {
  const scrollTo = (href) => (e) => {
    e.preventDefault()
    scrollToSection(href)
  }

  // subtle parallax as the page scrolls past the hero — the photo drifts
  // and scales slightly slower than the rest of the section
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 70])

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden bg-ink pt-32 pb-20 md:pt-40 md:pb-24">
      {/* soft ambient glow, centered behind the whole hero */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-mint/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-coral/10 blur-[130px]" />

      <div className="container-px relative mx-auto grid max-w-6xl items-center gap-y-12 md:grid-cols-[1.05fr_0.95fr] md:gap-x-12 lg:gap-x-20">
        {/* text column — centered on mobile, left-aligned once the photo
            moves beside it at md: */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium tracking-wide text-bone-dim"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            {profile.location} · Open to internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-4xl leading-[1.05] tracking-tight text-bone sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            I&rsquo;m <span className="text-mint">{profile.firstName}</span> Malalanayake
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-bone-dim"
          >
            {profile.role}. {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <a
              href="#projects"
              onClick={scrollTo('#projects')}
              className="rounded-full bg-mint px-7 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              View my work
            </a>
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="rounded-full border border-bone/20 px-7 py-3.5 text-sm text-bone transition-colors hover:border-coral hover:text-coral"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-center justify-center gap-3 md:justify-start"
          >
            <span className="text-xs tracking-wide text-bone-dim">Find me on</span>
            <div className="flex items-center gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 text-bone-dim transition-colors hover:border-mint hover:text-mint"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 text-bone-dim transition-colors hover:border-mint hover:text-mint"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 text-bone-dim transition-colors hover:border-mint hover:text-mint"
              >
                <Mail size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* photo — sits beside the text on md+, background removed and
            blended into the dark ground. Sized off its own container width
            (not a fixed height) so it never overflows its grid column. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: photoY }}
          className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] md:max-w-none md:justify-self-end lg:max-w-[420px]"
        >
          {/* mint aura — a circular glow centered behind her, not masked to
              the photo's rectangular bounds, so it never reads as a boxy
              halo around the whole image */}
          <div
            aria-hidden="true"
            className="photo-aura-mint pointer-events-none absolute left-1/2 top-[38%] z-0 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          />
          {/* floor contact shadow, grounds her feet on the page */}
          <div className="photo-floor pointer-events-none absolute bottom-2 left-1/2 h-16 w-2/3 -translate-x-1/2 blur-2xl" />

          <img
            src={headshot}
            alt="Senithi Malalanayake"
            className="photo-blend relative z-10 h-auto w-full object-contain"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  )
}
