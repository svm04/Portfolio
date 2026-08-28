import Reveal from './Reveal'
import { profile, education, certifications } from '../data/content'
import { GraduationCap, Award } from 'lucide-react'
import AboutGraphic from './AboutGraphic'

export default function About() {
  return (
    <section id="about" className="relative bg-ink-2 py-24 md:py-32">
      <div className="container-px">
        <Reveal>
          <span className="text-sm tracking-[0.25em] uppercase text-mint-dim">About</span>
        </Reveal>

        <div className="mt-8 grid gap-10 md:grid-cols-12 md:gap-8">
          <Reveal delay={0.05} className="md:col-span-4">
            <AboutGraphic />
          </Reveal>

          <div className="md:col-span-8">
            <Reveal>
              <h2 className="font-display text-balance text-3xl leading-[1.2] text-bone md:text-4xl">
                Who is <span className="text-mint">{profile.firstName}</span>?
              </h2>
            </Reveal>

            {profile.bio.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.06}>
                <p className="mt-5 text-lg leading-relaxed text-bone-dim">{p}</p>
              </Reveal>
            ))}

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <div className="mb-3 flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-bone-dim">
                  <GraduationCap size={16} className="text-mint" />
                  Education
                </div>
                <ul className="space-y-5 border-l border-line pl-5">
                  {education.map((e) => (
                    <li key={e.school} className="relative">
                      <span className="absolute -left-[23px] top-1.5 h-2 w-2 rounded-full bg-mint" />
                      <p className="text-bone">{e.school}</p>
                      <p className="mt-1 text-sm text-bone-dim">{e.detail}</p>
                      {e.period && <p className="mt-1 text-xs text-bone-dim/70">{e.period}</p>}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mb-3 flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-bone-dim">
                  <Award size={16} className="text-coral" />
                  Certifications
                </div>
                <ul className="space-y-5 border-l border-line pl-5">
                  {certifications.map((c) => (
                    <li key={c.name} className="relative">
                      <span className="absolute -left-[23px] top-1.5 h-2 w-2 rounded-full bg-coral" />
                      <p className="text-bone">{c.name}</p>
                      <p className="mt-1 text-sm text-bone-dim">{c.issuer}</p>
                      <p className="mt-1 text-xs text-bone-dim/70">{c.status}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
