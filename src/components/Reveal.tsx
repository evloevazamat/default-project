import { type CSSProperties, type ReactNode } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export default function Reveal({ children, className = '', delay = 0, threshold = 0.12 }: RevealProps) {
  const { ref, isVisible } = useScrollAnimation(threshold)
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div ref={ref} style={style} className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
