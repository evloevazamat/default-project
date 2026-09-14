import { CONTACTS, NAV, SITE } from '../config'

const socials = [
  { label: 'Telegram', href: CONTACTS.telegram },
  { label: 'WhatsApp', href: CONTACTS.whatsapp },
  { label: 'Instagram', href: CONTACTS.instagram },
]

export default function Footer() {
  return (
    <footer className="bg-coal pt-16 md:pt-20 pb-24 md:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="py-10 md:py-14 border-y border-bone/10 flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div>
            <p className="text-lg md:text-xl font-semibold tracking-[0.25em] text-bone">
              {SITE.name}
            </p>
            <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-ash">{SITE.subtitle}</p>
          </div>

          <nav
            className="flex flex-col flex-wrap gap-x-12 gap-y-4 md:flex-row md:items-start"
            aria-label="Навигация по сайту"
          >
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ash hover:text-bone transition-colors duration-700 ease-arch"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-y-4 md:items-end" aria-label="Социальные сети">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ash hover:text-bone transition-colors duration-700 ease-arch"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ash/70">© 2026 CONTOUR</p>
          <p className="text-[10px] tracking-[0.3em] text-olive uppercase">Architecture · Interior · Turnkey</p>
        </div>
      </div>
    </footer>
  )
}