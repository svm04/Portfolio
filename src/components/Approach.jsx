import Reveal from './Reveal'
import { strengths } from '../data/content'

export default function Approach() {
  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="container-px">
        <Reveal>
          <span className="text-sm tracking-[0.25em] uppercase text-mint-dim">How I Work</span>
          <h2 className="mt-4 max-w-xl font-display text-balance text-4xl leading-[1.1] text-bone md:text-5xl">
            What I bring to every project
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="h-full">
              <div className="card card-hover flex h-full flex-col rounded-3xl p-7">
                <span className="font-display text-sm text-mint-dim">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl text-bone">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-bone-dim">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-bone-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
