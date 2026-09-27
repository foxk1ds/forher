import { motion, useReducedMotion } from 'framer-motion'
import type { Transition } from 'framer-motion'
import { EASE } from '../lib/motion'

type InkProps = {
  className?: string
  /** Задержка прорисовки в секундах. */
  delay?: number
}

/**
 * Атрибуты обводки. Все перечисленные свойства наследуются,
 * поэтому их достаточно задать один раз на самом svg.
 */
const INK = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

type DrawAnimation = {
  initial: { pathLength: number }
  whileInView: { pathLength: number }
  viewport: { once: boolean; amount: number }
  transition: Transition
}

/** Линия прочерчивается, когда попадает в кадр. */
function draw(reduced: boolean | null, delay: number): DrawAnimation {
  return {
    initial: { pathLength: reduced ? 1 : 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true, amount: 0.6 },
    transition: reduced ? { duration: 0 } : { duration: 0.9, delay, ease: EASE },
  }
}

/** Неровная волнистая линия. */
export function Squiggle({ className = '', delay = 0 }: InkProps) {
  const reduced = useReducedMotion()

  return (
    <svg viewBox="0 0 200 14" className={className} aria-hidden {...INK}>
      <motion.path
        d="M3 9C20 3.5 34 12.5 52 7.5 68 3.5 82 12 100 8 118 4 132 12.5 150 7.5 166 3.5 182 11 197 7"
        {...draw(reduced, delay)}
      />
    </svg>
  )
}

/** Один уверенный штрих под заголовком. */
export function Underline({ className = '', delay = 0 }: InkProps) {
  const reduced = useReducedMotion()

  return (
    <svg viewBox="0 0 240 12" className={className} aria-hidden {...INK}>
      <motion.path d="M3 8.5C54 3.5 96 2.5 148 5c38 1.8 66 3.2 89 .5" {...draw(reduced, delay)} />
    </svg>
  )
}

/** Короткий штрих для разделителя. */
export function ShortStroke({ className = '' }: InkProps) {
  return (
    <svg viewBox="0 0 60 8" className={className} aria-hidden {...INK}>
      <path d="M3 5C18 3 34 6.5 57 4" />
    </svg>
  )
}

/** Маленькая петелька. */
export function Curl({ className = '' }: InkProps) {
  return (
    <svg viewBox="0 0 40 24" className={className} aria-hidden {...INK}>
      <path d="M4 16C10 4 22 4 22 12s-10 8-10 1S22 6 30 9c3 1 5 2 6 3" />
    </svg>
  )
}

/** Кривая стрелка вниз: левый ус длиннее правого. */
export function ArrowDown({ className = '', delay = 0 }: InkProps) {
  const reduced = useReducedMotion()

  return (
    <svg viewBox="0 0 40 62" className={className} aria-hidden {...INK}>
      <motion.path d="M22 5C30 17 13 26 21 40c3 6 1 10-1 14" {...draw(reduced, delay)} />
      <motion.path
        d="M12 47 20 55 28 45"
        {...draw(reduced, delay + 0.55)}
      />
    </svg>
  )
}

/** Искра в четыре луча. */
export function Sparkle({ className = '' }: InkProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...INK}>
      <path d="M12 2c1.2 5.6 3.4 7.8 10 9.5-6.6 1.7-8.8 3.9-10 9.5-1.2-5.6-3.4-7.8-10-9.5C8.6 9.8 10.8 7.6 12 2Z" />
    </svg>
  )
}

/** Крестик-звёздочка на полях. */
export function Cross({ className = '' }: InkProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...INK}>
      <path d="M4 5c4 3 11 10 16 15M19 6c-4 4-10 9-14 13" />
    </svg>
  )
}

/** Длинная неровная линейка на всю ширину — вместо обычной границы. */
export function Rule({ className = '' }: InkProps) {
  return (
    <svg
      viewBox="0 0 1200 10"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
      {...INK}
    >
      <path d="M4 6C120 3 260 7.5 420 5 600 2.5 780 7 960 5c80-1 150-1.5 236 1" />
    </svg>
  )
}

/** Полоска бумажного скотча. Цвет берётся из класса текста. */
export function Tape({ className = '' }: InkProps) {
  return <span aria-hidden className={`tape pointer-events-none absolute ${className}`} />
}
