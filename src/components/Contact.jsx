import Reveal from './Reveal'
import { profile } from '../data/content'
import { Mail, Phone, FileDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const LINKS = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: LinkedinIcon, label: 'linkedin.com/in/senithi', href: profile.linkedin },
  { icon: GithubIcon, label: 'github.com/svm04', href: profile.github },
]

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-mint/10 blur-[160px]" />

      <div className="container-px relative">
        <Reveal>
          <span className="text-sm tracking-[0.25em] uppercase text-mint">Contact</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-3xl font-display text-balance text-5xl leading-[1.05] text-bone md:text-7xl">
            Let’s build something together.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-lg text-bone-dim">
            Open to Software Engineering, Business Analysis, and Project Management internships.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-mint px-8 py-4 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} /> Email me
          </a>
          <a
            href="/Senithi_Malalanayake_CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-8 py-4 text-sm text-bone transition-colors hover:border-coral hover:text-coral"
          >
            <FileDown size={16} /> Download CV
          </a>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16 grid gap-x-8 gap-y-5 border-t border-line pt-10 sm:grid-cols-2">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center gap-3 text-bone-dim transition-colors hover:text-bone"
              >
                <Icon size={18} className="text-mint" />
                <span className="link-underline">{label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
