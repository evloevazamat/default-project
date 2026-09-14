import { Send, MessageCircle } from 'lucide-react'
import { CONTACTS } from '../config'

export default function CTA() {

  return (
    <section id="contact" className="bg-coal border-t border-bone/10 py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`max-w-3xl transition-all duration-700 ${
            'opacity-100 translate-y-0'
          }`}
        >
          <p className="text-[10px] tracking-[0.32em] text-olive uppercase mb-6">Контакты</p>
          <h2 className="text-[34px] md:text-[62px] leading-[1.06] font-normal tracking-tight text-bone">
            Давайте создадим
            <br />
            ваше пространство.
          </h2>
          <p
            className={`mt-6 md:mt-8 max-w-md text-[15px] md:text-lg leading-relaxed text-ash transition-all duration-700 delay-100 ${
              'opacity-100 translate-y-0'
            }`}
          >
            Расскажите о вашей квартире — обсудим задачу, сроки и формат работы.
          </p>

          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-arch ${
              'opacity-100 translate-y-0'
            }`}
          >
            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sand text-coal text-xs tracking-[0.12em] uppercase px-8 py-4 hover:bg-bone transition-all duration-700 ease-arch hover:-translate-y-0.5 font-medium active:translate-y-0"
            >
              <Send size={15} />
              Telegram →
            </a>
            <a
              href={CONTACTS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.12em] uppercase text-bone px-8 py-4 border border-bone/30 hover:border-bone hover:bg-bone/5 transition-all duration-700 ease-arch hover:-translate-y-0.5"
            >
              <MessageCircle size={15} />
              WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}