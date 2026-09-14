import { useState } from 'react'
import { projects } from '../data/projects'

type Filter = 'all' | 'interior' | 'architecture'

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'interior', label: 'Интерьер' },
  { id: 'architecture', label: 'Архитектура' },
]

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'interior') return p.type === 'Interior' || p.type === 'Turnkey'
    return p.type === 'Architecture'
  })

  return (
    <section id="projects" className="bg-graphite py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <h2 className="text-[34px] md:text-[56px] font-normal leading-[1.05] tracking-tight text-bone">
            Избранные
            <br />
            проекты
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-ash">
            Интерьеры и архитектура, созданные вокруг человека, света и натуральных материалов.
          </p>
        </div>

        <div className="mb-12 md:mb-16 flex items-center gap-8 border-b border-bone/10 pb-5 md:pb-6">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`text-xs md:text-sm tracking-[0.2em] uppercase pb-1 transition-colors duration-700 ease-arch ${
                filter === f.id ? 'text-bone border-b border-sand' : 'text-ash border-b border-transparent hover:text-bone'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div key={filter} className="flex flex-col gap-20 md:gap-28">
          {filtered.map((project, i) => {
            const wide = i % 2 === 0
            return (
              <div
                key={project.id}
                className="group block grid grid-cols-12 items-end gap-y-6 md:gap-x-10"
              >
                <div
                  className={`col-span-12 ${wide ? 'md:col-span-12' : 'md:col-span-8 md:col-start-5'} relative ${
                    wide ? 'aspect-[21/10]' : 'aspect-[16/11]'
                  } bg-stone overflow-hidden`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    sizes={wide ? '(max-width: 768px) 100vw, 100vw' : '(max-width: 768px) 100vw, 66vw'}
                  />
                </div>

                <div
                  className={`col-span-12 ${
                    wide ? 'md:col-span-12' : 'md:col-span-8 md:col-start-5'
                  } flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-bone/10 pt-4`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs text-olive tabular-nums">{project.number}</span>
                    <p className="text-lg md:text-2xl font-medium tracking-[0.05em] text-bone group-hover:text-sand transition-colors duration-700 ease-arch">
                      {project.title}
                    </p>
                  </div>
                  <p className="text-xs md:text-sm text-ash tabular-nums tracking-[0.12em] uppercase">
                    {project.type} · {project.year}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}