import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, Users } from 'lucide-react'
import { projects } from '../data/content'
import { GithubIcon } from '../components/BrandIcons'
import { TechIcon } from '../components/TechIcons'
import Reveal from '../components/Reveal'

const ACCENTS = {
  mint: { text: 'text-mint', dim: 'text-mint-dim', dot: 'bg-mint', border: 'border-mint/30', ring: 'hover:border-mint/40' },
  coral: { text: 'text-coral', dim: 'text-coral-dim', dot: 'bg-coral', border: 'border-coral/30', ring: 'hover:border-coral/40' },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  const project = projects[index]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) return <Navigate to="/" replace />

  const accent = ACCENTS[project.accent] ?? ACCENTS.mint
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="relative bg-ink pt-32 pb-24 md:pt-40">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-mint/10 blur-[130px]" />

      <div className="container-px relative">
        <Reveal>
          <Link
            to="/"
            state={{ scrollTo: '#projects' }}
            className="link-underline inline-flex items-center gap-2 text-sm text-bone-dim hover:text-bone"
          >
            <ArrowLeft size={15} /> Back to projects
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-bone-dim">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {project.period}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={13} /> {project.team}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-5 font-display text-balance text-4xl leading-[1.05] text-bone md:text-6xl">{project.name}</h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className={`mt-4 max-w-2xl text-lg ${accent.text}`}>{project.tagline}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-2xl text-bone-dim">{project.description}</p>
        </Reveal>

        {(project.links.github || project.links.live || project.apiUrl) && (
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
                >
                  <GithubIcon size={16} /> View code
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-6 py-3 text-sm text-bone transition-colors hover:border-coral hover:text-coral"
                >
                  <ArrowUpRight size={16} /> Live site
                </a>
              )}
              {project.apiUrl && (
                <a
                  href={project.apiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1.5 text-sm text-bone-dim hover:text-bone"
                >
                  API <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </Reveal>
        )}

        {/* screenshot gallery — every shot at the same size, only rendered
            once real screenshots exist so a project with none doesn't show
            an empty placeholder grid */}
        {project.images?.length > 0 && (
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((img, i) => (
              <Reveal key={img} delay={0.26 + i * 0.05}>
                <div className="card flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl">
                  <img
                    src={img}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-16 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <span className="text-sm tracking-[0.25em] uppercase text-bone-dim">What I Built</span>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {project.features.map((f, i) => (
                <Reveal key={f.title} delay={0.05 + i * 0.06}>
                  <div className={`card h-full rounded-2xl border p-6 transition-colors ${accent.border} ${accent.ring}`}>
                    <span className={`font-display text-sm ${accent.dim}`}>0{i + 1}</span>
                    <h3 className="mt-2 font-display text-lg text-bone">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-bone-dim">{f.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <span className="text-sm tracking-[0.25em] uppercase text-bone-dim">Tech Stack</span>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-bone-dim">
                    <TechIcon name={s} size={13} />
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* the deeper written case study — only projects with a caseStudy
            object in content.js render this; others stop at the feature
            cards above */}
        {project.caseStudy && (
          <div className="mt-20 border-t border-line pt-14">
            <Reveal>
              <span className="text-sm tracking-[0.25em] uppercase text-bone-dim">Case Study</span>
            </Reveal>

            <Reveal delay={0.05}>
              <h3 className="mt-6 font-display text-2xl text-bone">Overview</h3>
              <p className="mt-3 leading-relaxed text-bone-dim">{project.caseStudy.overview}</p>
            </Reveal>

            {project.caseStudy.sections?.map((s, idx) => (
              <Reveal key={s.heading} delay={0.06 + idx * 0.02}>
                <h3 className="mt-10 font-display text-2xl text-bone">{s.heading}</h3>
                {s.type === 'paragraph' && <p className="mt-3 leading-relaxed text-bone-dim">{s.content}</p>}
                {s.type === 'bullets' && (
                  <ul className="mt-4 space-y-2.5">
                    {s.content.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-bone-dim">
                        <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.type === 'cards' && (
                  <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {s.content.map((c, i) => (
                      <div key={c.title} className={`card h-full rounded-2xl border p-6 ${accent.border}`}>
                        <span className={`font-display text-sm ${accent.dim}`}>0{i + 1}</span>
                        <h4 className="mt-2 font-display text-lg text-bone">{c.title}</h4>
                        <p className="mt-2 leading-relaxed text-bone-dim">{c.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}

            {project.caseStudy.whatItDoes && (
              <Reveal delay={0.08}>
                <h3 className="mt-10 font-display text-2xl text-bone">What It Does</h3>
                <p className="mt-3 leading-relaxed text-bone-dim">{project.caseStudy.whatItDoes}</p>
              </Reveal>
            )}

            {project.caseStudy.problem && (
              <Reveal delay={0.08}>
                <h3 className="mt-10 font-display text-2xl text-bone">The Problem</h3>
                <p className="mt-3 leading-relaxed text-bone-dim">{project.caseStudy.problem}</p>
              </Reveal>
            )}

            {project.caseStudy.situation && (
              <Reveal delay={0.08}>
                <h3 className="mt-10 font-display text-2xl text-bone">Situation</h3>
                <p className="mt-3 leading-relaxed text-bone-dim">{project.caseStudy.situation}</p>
              </Reveal>
            )}

            {project.caseStudy.task?.length > 0 && (
              <Reveal delay={0.09}>
                <h3 className="mt-10 font-display text-2xl text-bone">Task</h3>
                <ul className="mt-4 space-y-2.5">
                  {project.caseStudy.task.map((t) => (
                    <li key={t} className={`flex gap-3 leading-relaxed text-bone-dim`}>
                      <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.caseStudy.action?.length > 0 && (
              <Reveal delay={0.1}>
                <h3 className="mt-10 font-display text-2xl text-bone">Action</h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {project.caseStudy.action.map((c, i) => (
                    <div key={c.title} className={`card h-full rounded-2xl border p-6 ${accent.border}`}>
                      <span className={`font-display text-sm ${accent.dim}`}>0{i + 1}</span>
                      <h4 className="mt-2 font-display text-lg text-bone">{c.title}</h4>
                      <p className="mt-2 leading-relaxed text-bone-dim">{c.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {project.caseStudy.contributions?.length > 0 && (
              <Reveal delay={0.1}>
                <h3 className="mt-10 font-display text-2xl text-bone">My Contributions</h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {project.caseStudy.contributions.map((c, i) => (
                    <div key={c.title} className={`card h-full rounded-2xl border p-6 ${accent.border}`}>
                      <span className={`font-display text-sm ${accent.dim}`}>0{i + 1}</span>
                      <h4 className="mt-2 font-display text-lg text-bone">{c.title}</h4>
                      <p className="mt-2 leading-relaxed text-bone-dim">{c.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {project.caseStudy.beyondCode && (
              <Reveal delay={0.1}>
                <h3 className="mt-10 font-display text-2xl text-bone">Beyond Code</h3>
                <p className="mt-3 leading-relaxed text-bone-dim">{project.caseStudy.beyondCode}</p>
              </Reveal>
            )}

            {project.caseStudy.architecture && (
              <Reveal delay={0.1}>
                <h3 className="mt-10 font-display text-2xl text-bone">Architecture &amp; Stack</h3>
                <p className="mt-3 leading-relaxed text-bone-dim">{project.caseStudy.architecture}</p>
              </Reveal>
            )}

            {project.caseStudy.challenges?.length > 0 && (
              <Reveal delay={0.12}>
                <h3 className="mt-10 font-display text-2xl text-bone">Challenges</h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {project.caseStudy.challenges.map((c, i) => (
                    <div key={c.title} className={`card h-full rounded-2xl border p-6 ${accent.border}`}>
                      <span className={`font-display text-sm ${accent.dim}`}>0{i + 1}</span>
                      <h4 className="mt-2 font-display text-lg text-bone">{c.title}</h4>
                      <p className="mt-2 leading-relaxed text-bone-dim">{c.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {project.caseStudy.security && (
              <Reveal delay={0.14}>
                <h3 className="mt-10 font-display text-2xl text-bone">Security</h3>
                <p className="mt-3 leading-relaxed text-bone-dim">{project.caseStudy.security}</p>
              </Reveal>
            )}

            {project.caseStudy.result?.length > 0 && (
              <Reveal delay={0.15}>
                <h3 className="mt-10 font-display text-2xl text-bone">Result</h3>
                <ul className="mt-4 space-y-2.5">
                  {project.caseStudy.result.map((r) => (
                    <li key={r} className={`flex gap-3 leading-relaxed text-bone-dim`}>
                      <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.caseStudy.reflection && (
              <Reveal delay={0.16}>
                <h3 className="mt-10 font-display text-2xl text-bone">Reflection</h3>
                <p className="mt-3 leading-relaxed text-bone-dim">{project.caseStudy.reflection}</p>
              </Reveal>
            )}

            {project.caseStudy.note && (
              <Reveal delay={0.18}>
                <p className="mt-8 text-sm italic text-bone-dim/70">{project.caseStudy.note}</p>
              </Reveal>
            )}
          </div>
        )}

        <Reveal delay={0.1}>
          <div className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
            <Link
              to={`/project/${prev.id}`}
              className="card card-hover group rounded-2xl p-6"
            >
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-bone-dim">
                <ArrowLeft size={13} /> Previous
              </span>
              <p className="mt-2 font-display text-lg text-bone group-hover:text-mint">{prev.name}</p>
            </Link>
            <Link
              to={`/project/${next.id}`}
              className="card card-hover group rounded-2xl p-6 text-right"
            >
              <span className="flex items-center justify-end gap-1.5 text-xs uppercase tracking-wide text-bone-dim">
                Next <ArrowRight size={13} />
              </span>
              <p className="mt-2 font-display text-lg text-bone group-hover:text-mint">{next.name}</p>
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
