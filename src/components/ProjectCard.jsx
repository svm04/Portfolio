import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { TechIcon } from './TechIcons'

// Tailwind's scanner needs complete literal class strings, so accent
// variants are pre-built objects rather than assembled at runtime.
const ACCENTS = {
  mint: {
    text: 'text-mint',
    dot: 'bg-mint',
    bar: 'bg-mint',
    border: 'group-hover:border-mint/35',
    groupText: 'group-hover:text-mint',
  },
  coral: {
    text: 'text-coral',
    dot: 'bg-coral',
    bar: 'bg-coral',
    border: 'group-hover:border-coral/35',
    groupText: 'group-hover:text-coral',
  },
}

export default function ProjectCard({ project, index }) {
  const accent = ACCENTS[project.accent] ?? ACCENTS.mint

  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <Link
        to={`/project/${project.id}`}
        className={`card group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 ${accent.border}`}
      >
        {/* a slim accent bar stands in for the old placeholder screenshot
            box — real screenshots only show up once you're on the
            project's own case-study page */}
        <div className={`h-1.5 w-full ${accent.bar}`} />

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-bone-dim">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
            {project.period}
          </div>
          <h3 className="mt-3 font-display text-xl text-bone">{project.name}</h3>
          <p className={`mt-1.5 text-sm ${accent.text}`}>{project.tagline}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-bone-dim line-clamp-3">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((s) => (
              <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] text-bone-dim">
                <TechIcon name={s} size={11} />
                {s}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="rounded-full border border-line px-2.5 py-1 text-[11px] text-bone-dim/60">
                +{project.stack.length - 3}
              </span>
            )}
          </div>

          <span className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-bone transition-colors ${accent.groupText}`}>
            View case study
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}
