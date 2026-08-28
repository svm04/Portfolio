import Reveal from './Reveal'
import { extracurricular } from '../data/content'
import { Users } from 'lucide-react'
import { IEEEIcon, RotaryIcon, LeoIcon } from './BrandIcons'

// Real org marks where one's available (IEEE, Rotary — Rotaract uses the
// same gear-wheel), a plain lettermark for Leo Club, and a generic fallback
// otherwise, each tinted to the organization's own brand color.
function orgLogo(org) {
  if (/ieee/i.test(org)) return { Icon: IEEEIcon, color: '#00629B' }
  if (/rotaract/i.test(org)) return { Icon: RotaryIcon, color: '#F7A81B' }
  if (/leo club/i.test(org)) return { Icon: LeoIcon, color: '#8F3FA8' }
  return { Icon: Users, color: '#e8a63c' }
}

export default function Extracurricular() {
  return (
    <section id="extracurricular" className="relative bg-ink-2 py-24 md:py-32">
      <div className="container-px">
        <Reveal>
          <span className="text-sm tracking-[0.25em] uppercase text-mint-dim">Beyond Code</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl font-display text-balance text-4xl leading-[1.1] text-bone md:text-6xl">
            Leadership beyond the classroom
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {extracurricular.map((item, i) => {
            const { Icon, color } = orgLogo(item.org)
            return (
            <Reveal key={item.org + item.role} delay={i * 0.06}>
              <div className="card card-hover h-full rounded-[1.75rem] p-8">
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${color}26`, color }}
                >
                  <Icon size={18} />
                </div>
                <p className="text-bone">{item.org}</p>
                <p className="mt-1 text-mint-dim">{item.role}</p>
                {item.period && (
                  <p className="mt-1 text-xs tracking-wide text-bone-dim/70">{item.period}</p>
                )}
                <p className="mt-4 text-sm text-bone-dim">{item.detail}</p>
              </div>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
