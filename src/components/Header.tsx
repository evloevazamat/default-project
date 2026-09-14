import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { CONTACTS, NAV, SITE } from '../config'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || menuOpen
          ? 'bg-black shadow-[0_1px_0_0_rgba(240,236,228,0.06)]'
          : 'bg-black'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-[72px]">
        <a href="/" className="flex flex-col leading-none select-none" onClick={closeMenu}>
          <span className="text-base md:text-lg font-semibold tracking-[0.25em] text-bone">
            {SITE.name}
          </span>
          <span className="mt-1 text-[8px] md:text-[9px] tracking-[0.3em] text-ash">
            {SITE.subtitle}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[11px] tracking-[0.18em] uppercase text-ash hover:text-bone transition-colors duration-700 ease-arch py-1 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-sand after:transition-all after:duration-700 after:ease-arch hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.14em] uppercase text-coal bg-sand px-6 py-3 hover:bg-bone transition-colors duration-300 font-medium"
          >
            Начать проект →
          </a>
        </nav>

        <button
          className="lg:hidden text-bone p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed right-0 top-16 bottom-0 w-[88%] max-w-[380px] bg-black z-40 flex flex-col border-t border-l border-bone/10 px-6 md:px-8 pt-3 pb-6 animate-slide-in-right">
          <div className="flex items-baseline justify-between mb-1 animate-fade-in">
            <span className="text-xs tracking-[0.34em] text-bone uppercase font-medium">Меню</span>
            <span className="text-[9px] tracking-[0.3em] text-ash uppercase">Menu</span>
          </div>
          <nav className="flex flex-col">
            {NAV.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-baseline gap-4 py-4 border-b border-bone/10"
              >
                <span className="text-[10px] text-olive tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-lg md:text-xl font-light tracking-wide text-bone hover:text-sand transition-colors duration-700 ease-arch leading-tight">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-auto text-xs tracking-[0.14em] uppercase text-coal bg-sand px-7 py-4 text-center hover:bg-bone transition-colors duration-700 ease-arch font-medium"
          >
            Начать проект →
          </a>
          <p className="pt-4 text-[9px] tracking-[0.3em] text-ash uppercase">{SITE.subtitle}</p>
        </div>
      )}
    </header>
  )
}