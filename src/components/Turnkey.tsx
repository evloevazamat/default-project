import { ArrowDown } from 'lucide-react'
import { turnkeyImage } from '../data/projects'
import { turnkeyPath } from '../data/process'

export default function Turnkey() {

  return (
    <section id="turnkey" className="bg-graphite py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p
              className={`text-[10px] tracking-[0.32em] text-olive uppercase mb-6 transition-all duration-1000 ease-arch ${
                'opacity-100'
              }`}
            >
              Под ключ
            </p>
            <h2
              className={`text-[32px] md:text-[50px] leading-[1.08] font-normal tracking-tight text-bone transition-all duration-1000 ease-arch ${
                'opacity-100 translate-y-0'
              }`}
            >
              От пустых стен
              <br />
              до готового интерьера.
            </h2>
            <p
              className={`mt-6 max-w-md text-[15px] leading-relaxed text-ash transition-all duration-1000 ease-arch ${
                'opacity-100 translate-y-0'
              }`}
            >
              Мы берём на себя весь процесс реализации проекта — организацию ремонта, работу
              подрядчиков, комплектацию и контроль деталей.
            </p>

            <div
              className={`mt-10 flex flex-col gap-3 transition-all duration-1000 ease-arch ${
                'opacity-100 translate-y-0'
              }`}
            >
              {turnkeyPath.map((step, i) => (
                <div key={step} className="flex flex-col">
                  <span className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-sand">
                    {step}
                  </span>
                  {i < turnkeyPath.length - 1 && (
                    <ArrowDown size={13} className="text-olive mt-3 mb-2 ml-0.5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] md:aspect-[4/4.2] overflow-hidden bg-stone">
              <img
                src={turnkeyImage.src}
                alt={turnkeyImage.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
        </div>
      </div>
    </section>
  )
}