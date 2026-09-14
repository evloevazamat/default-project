import { processSteps } from '../data/process'

export default function Process() {

  return (
    <section id="process" className="bg-stone py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-14 md:mb-24">
          <p className="text-[10px] tracking-[0.32em] text-olive uppercase mb-6">Процесс</p>
          <h2 className="text-[34px] md:text-[56px] font-normal leading-[1.05] tracking-tight text-bone">
            От идеи до ключей.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-16">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`border-t border-sand/25 pt-6 transition-all duration-1000 ease-arch ${
                'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-4xl md:text-5xl font-light text-olive tabular-nums">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-medium tracking-tight text-bone">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}