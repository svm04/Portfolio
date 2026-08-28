import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="relative bg-ink py-24 md:py-28">
      <div className="container-px">
        <Reveal>
          <span className="text-sm tracking-[0.25em] uppercase text-mint-dim">Selected Work</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl font-display text-balance text-4xl leading-[1.1] text-bone md:text-6xl">
            Projects I’ve <span className="text-mint">designed</span>, built, and deployed.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-lg text-bone-dim">Tap a project for the full case study — the stack, the problems, and what I'd do differently.</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
