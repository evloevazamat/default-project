import { aboutImage } from '../data/projects'

const disciplines = [
  { number: '01', label: 'Архитектура' },
  { number: '02', label: 'Интерьер' },
  { number: '03', label: 'Материалы' },
  { number: '04', label: 'Реализация' },
]

export default function About() {

  return (
    <section id="about" className="bg-coal py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p
              className={`text-[10px] tracking-[0.32em] text-olive uppercase mb-6 transition-all duration-1000 ease-arch ${
                'opacity-100'
              }`}
            >
              О студии
            </p>
            <h2
              className={`text-[32px] md:text-[50px] leading-[1.08] font-normal tracking-tight text-bone transition-all duration-1000 ease-arch ${
                'opacity-100 translate-y-0'
              }`}
            >
              Мы создаём пространства,
              <br />
              которые ощущаются.
            </h2>
            <p
              className={`mt-6 max-w-lg text-[15px] leading-relaxed text-ash transition-all duration-1000 ease-arch ${
                'opacity-100 translate-y-0'
              }`}
            >
              Contour Studio — архитектурно-дизайнерская студия, создающая жилые пространства от
              концепции до полной реализации.
            </p>

            <div className="mt-10 md:mt-12">
              {disciplines.map((item, i) => (
                <div
                  key={item.number}
                  className={`flex items-baseline gap-4 py-4 border-b border-bone/10 transition-all duration-1000 ease-arch ${
                    'opacity-100 translate-y-0'
                  }`}
                  style={{ transitionDelay: `${i * 90 + 260}ms` }}
                >
                  <span className="text-xs text-olive tabular-nums">{item.number}</span>
                  <span className="text-base md:text-lg font-medium tracking-tight text-bone">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] md:aspect-[3/3.3] bg-stone overflow-hidden">
              <img
                src={aboutImage.src}
                alt={aboutImage.alt}
                loading="lazy"
                className="w-full h-full object-cover object-[50%_10%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}