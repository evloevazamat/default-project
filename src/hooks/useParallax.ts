import { useEffect, useRef } from 'react'

export function useParallax(maxShift = 24) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh + rect.height)
      const max = Math.min(maxShift, vh * 0.05)
      const offset = Math.max(-max, Math.min(max, progress * max * 2))
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
    }

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      cancelAnimationFrame(raf)
    }
  }, [maxShift])

  return ref
}