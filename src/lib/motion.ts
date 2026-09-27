import type { Variants } from 'framer-motion'

/**
 * Общая кривая «выдоха»: быстрый старт, длинный спокойный хвост.
 * Одна на весь сайт, чтобы движение читалось как одно движение руки.
 */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

type RevealOptions = {
  /** На сколько пикселей элемент поднимается при появлении. */
  distance?: number
  delay?: number
  /** Длительность намеренно задаётся вручную: блоки не должны идти в ногу. */
  duration?: number
  /** Конечный угол наклона в градусах; элемент приходит к нему чуть перекрученным. */
  rotate?: number
}

/** Появление блока: подъём, лёгкий расфокус и доворот к своему углу. */
export function revealVariants(reduced: boolean | null, options: RevealOptions = {}): Variants {
  const { distance = 26, delay = 0, duration = 0.95, rotate } = options

  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.4, delay, ease: 'easeOut' } },
    }
  }

  const hidden: Record<string, number | string> = {
    opacity: 0,
    y: distance,
    filter: 'blur(6px)',
  }
  const visible: Record<string, number | string> = {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  }

  if (rotate !== undefined) {
    hidden.rotate = rotate * 3
    visible.rotate = rotate
  }

  return {
    hidden,
    visible: { ...visible, transition: { duration, delay, ease: EASE } },
  }
}

/** Viewport для scroll-триггеров: срабатывает один раз, чуть заранее. */
export const REVEAL_VIEWPORT = { once: true, amount: 0.25 } as const
