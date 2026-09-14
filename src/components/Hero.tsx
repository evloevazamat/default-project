import { CONTACTS } from '../config'
import { heroImage } from '../data/projects'

export default function Hero() {
  return (
    <section className="relative min-h-svh bg-coal flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="w-full h-full object-cover"
          loading="eager"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/55 to-coal/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-coal/70 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-10 lg:px-16 pt-36 pb-16 md:pb-20">
        <h1 className="max-w-4xl text-[40px] md:text-[68px] lg:text-[88px] leading-[1.02] font-normal tracking-tight text-bone animate-fade-up" style={{ animationDelay: '150ms' }}>
          Пространство,
          <br />
          созданное для жизни.
        </h1>

        <p
          className="mt-6 md:mt-8 max-w-xl text-[15px] md:text-lg leading-relaxed text-ash animate-fade-up"
          style={{ animationDelay: '280ms' }}
        >
          Проектируем и реализуем интерьеры квартир — от первой идеи до готового пространства.
        </p>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-sand text-coal text-sm tracking-[0.06em] uppercase px-9 py-4 hover:bg-bone transition-colors duration-300 font-medium"
          >
            Начать проект →
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex items-center justify-between max-w-[1400px] mx-6 md:mx-10 lg:mx-16">
        <p className="text-[10px] tracking-[0.35em] text-bone/50 uppercase animate-fade-in" style={{ animationDelay: '520ms' }}>
          Architecture / Interior / Turnkey
        </p>
      </div>
    </section>
  )
}