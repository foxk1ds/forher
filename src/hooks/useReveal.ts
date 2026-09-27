import { useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { REVEAL_VIEWPORT, revealVariants } from '../lib/motion'

/** Пропсы блока, который появляется сразу после загрузки. */
export type EnterProps = {
  variants: Variants
  initial: 'hidden'
  animate: 'visible'
}

/** Пропсы блока, который появляется при попадании в экран. */
export type ScrollRevealProps = {
  variants: Variants
  initial: 'hidden'
  whileInView: 'visible'
  viewport: typeof REVEAL_VIEWPORT
}

type Options = { delay?: number; duration?: number; rotate?: number; distance?: number }

/** Появление при загрузке — для первого экрана, где важен порядок строк. */
export function useEnter(options: Options = {}): EnterProps {
  const reduced = useReducedMotion()

  return {
    variants: revealVariants(reduced, options),
    initial: 'hidden',
    animate: 'visible',
  }
}

/** Появление при скролле — для всего, что ниже первого экрана. */
export function useScrollReveal(options: Options = {}): ScrollRevealProps {
  const reduced = useReducedMotion()

  return {
    variants: revealVariants(reduced, options),
    initial: 'hidden',
    whileInView: 'visible',
    viewport: REVEAL_VIEWPORT,
  }
}
