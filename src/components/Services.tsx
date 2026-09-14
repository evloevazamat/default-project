import { CONTACTS } from '../config'
import { services } from '../data/services'

export default function Services() {

  return (
    <section id="services" className="bg-stone py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-6 md:px-10 lg:px-16 mb-14 md:mb-20">
          <p className="text-[10px] tracking-[0.32em] text-olive uppercase mb-6">Услуги</p>
          <h2 className="text-[34px] md:text-[56px] font-normal leading-[1.05] tracking-tight text-bone">
            Что мы делаем
          </h2>
        </div>

        <div className="px-0 border-t border-bone/10">
          {services.map((service, i) => (
            <a
              key={service.number}
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={`group grid grid-cols-[44px_1fr_auto] md:grid-cols-[70px_1fr_auto] items-baseline md:items-center gap-2 md:gap-6 px-6 md:px-10 lg:px-16 py-8 md:py-10 border-b border-bone/10 transition-colors duration-700 ease-arch ${
                service.highlight ? 'text-bone' : 'text-bone hover:border-sand/30'
              } ${'opacity-100 translate-y-0'}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="text-xs md:text-sm text-olive tabular-nums group-hover:text-sand transition-colors duration-700 ease-arch">{service.number}</span>
              <div className="grid gap-1">
                <h3 className="text-2xl md:text-4xl font-normal tracking-tight text-bone group-hover:text-sand transition-colors duration-700 ease-arch">
                  {service.title}
                </h3>
                <p className="text-sm md:text-[15px] max-w-xl leading-relaxed text-ash transition-colors duration-700 ease-arch group-hover:text-bone">
                  {service.description}
                </p>
              </div>
              <span
                className={`text-sm transition-all duration-700 ease-arch ${
                  service.highlight
                    ? 'text-sand opacity-60 group-hover:opacity-100 group-hover:translate-x-1'
                    : 'text-olive opacity-0 group-hover:opacity-100 group-hover:text-sand group-hover:translate-x-1'
                }`}
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}