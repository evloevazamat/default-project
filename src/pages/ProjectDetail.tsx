import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { CONTACTS } from '../config'
import Reveal from '../components/Reveal'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const index = projects.findIndex((p) => p.id === id)
  const project = projects[index]

  if (!project) {
    return (
      <section className="min-h-svh bg-coal flex flex-col items-center justify-center gap-6 px-6 pt-24">
        <h1 className="text-3xl text-bone">Проект не найден</h1>
        <Link to="/" className="text-sm text-sand hover:text-bone transition-colors">
          ← Вернуться на главную
        </Link>
      </section>
    )
  }

  const next = projects[(index + 1) % projects.length]

  return (
    <main className="bg-coal pt-24 md:pt-28 page-enter">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="py-6 flex items-center justify-between border-b border-bone/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ash hover:text-bone transition-colors duration-700 ease-arch"
          >
            <ArrowLeft size={16} />
            Все проекты
          </Link>
          <span className="text-[10px] tracking-[0.3em] text-ash uppercase">
            Project {project.number}
          </span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <header className="py-12 md:py-20">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
            <span className="text-sm text-olive tabular-nums">{project.number}</span>
            <h1 className="text-[32px] md:text-[56px] font-normal tracking-tight text-bone leading-[1.05]">
              {project.title}
            </h1>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ash">
            <span>
              Площадь — <span className="text-bone">{project.area}</span>
            </span>
            <span>
              Город — <span className="text-bone">{project.city}</span>
            </span>
            <span>
              Тип — <span className="text-bone">{project.type}</span>
            </span>
            <span>
              Год — <span className="text-bone">{project.year}</span>
            </span>
          </div>
        </header>

<Reveal className="relative max-w-4xl overflow-hidden aspect-[16/9] bg-stone mb-px">
          <img
            src={project.image}
            alt={project.alt}
            loading="eager"
            className="w-full h-full object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </Reveal>

        <div className="py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="text-[10px] tracking-[0.32em] text-olive uppercase mb-4">О проекте</p>
            <p className="text-lg md:text-xl leading-relaxed text-ash max-w-xl">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[10px] tracking-[0.32em] text-olive uppercase mb-4">
              Использованные материалы
            </p>
            <ul className="space-y-3">
              {project.materials.map((material) => (
                <li
                  key={material}
                  className="flex items-baseline justify-between py-3 border-b border-bone/10 text-sm"
                >
                  <span className="text-bone">{material}</span>
                  <span className="text-olive">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {project.gallery.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 2) * 140}
              className={`overflow-hidden bg-stone aspect-[4/3] ${
                i % 2 === 1 ? 'md:mt-16' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Reveal>
          ))}
        </div>

        <div className="py-14 md:py-20 border-t border-bone/10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-[10px] tracking-[0.32em] text-olive uppercase mb-3">
              Следующий проект
            </p>
            <Link
              to={`/project/${next.id}`}
              className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-medium tracking-tight text-bone hover:text-sand transition-colors duration-700 ease-arch"
            >
              {next.title}
              <ArrowRight
                size={26}
                className="text-sand group-hover:translate-x-1 transition-transform duration-700 ease-arch"
              />
            </Link>
          </div>
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sand text-coal text-xs tracking-[0.12em] uppercase px-8 py-4 hover:bg-bone hover:-translate-y-0.5 transition-all duration-700 ease-arch font-medium self-start md:self-auto"
          >
            Обсудить похожий проект
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </main>
  )
}