import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Cross, Sparkle, Squiggle } from './Doodles'
import { Ornament } from './Ornament'
import { useEnter } from '../hooks/useReveal'
import { EASE } from '../lib/motion'

const NAME = 'Адиля'

/**
 * Каждая буква имени сидит чуть криво и появляется в своё время:
 * так имя выглядит выложенным руками, а не набранным по сетке.
 */
const LETTER_JITTER = [
  { rotate: -2.4, y: 5, delay: 0, duration: 1.08 },
  { rotate: 1.7, y: -4, delay: 0.1, duration: 0.94 },
  { rotate: -0.9, y: 3, delay: 0.06, duration: 1.16 },
  { rotate: 2.2, y: -2, delay: 0.2, duration: 0.9 },
  { rotate: -1.4, y: 6, delay: 0.14, duration: 1.22 },
]

/** Порядок появления строк на первом экране — сбитый, а не метрономный. */
const DELAY = {
  eyebrow: 0.08,
  letters: 0.32,
  tagline: 0.95,
  squiggle: 1.06,
  ornament: 1.22,
  greeting: 1.38,
  hint: 1.78,
} as const

export function Hero() {
  const reduced = useReducedMotion()
  const eyebrow = useEnter({ delay: DELAY.eyebrow, distance: 14, duration: 0.8 })
  const tagline = useEnter({ delay: DELAY.tagline, distance: 18, duration: 1.05, rotate: -1 })
  const squiggle = useEnter({ delay: DELAY.squiggle, distance: 8, duration: 0.7 })
  const ornament = useEnter({ delay: DELAY.ornament, distance: 12, duration: 0.85 })
  const greeting = useEnter({ delay: DELAY.greeting, distance: 20, duration: 1.1 })
  const hint = useEnter({ delay: DELAY.hint, distance: 16, duration: 0.9 })

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-28 text-center"
    >
      <Sparkle className="absolute left-[14%] top-[22%] h-5 w-5 rotate-[14deg] text-olive/45 sm:h-6 sm:w-6" />

      <motion.p {...eyebrow} className="font-hand text-lg text-ink-faint sm:text-xl">
        открытка без повода
      </motion.p>

      <h1
        aria-label={NAME}
        className="mt-5 flex justify-center font-display text-[4.4rem] leading-[0.98] text-ink sm:mt-7 sm:text-[6.6rem] lg:text-[9rem]"
      >
        {[...NAME].map((letter, i) => {
          const jitter = LETTER_JITTER[i % LETTER_JITTER.length]

          return (
            <motion.span
              key={`${letter}-${i}`}
              aria-hidden
              className="inline-block"
              initial={
                reduced
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      y: jitter.y + 30,
                      rotate: jitter.rotate * 3,
                      filter: 'blur(7px)',
                    }
              }
              animate={
                reduced
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      y: jitter.y,
                      rotate: jitter.rotate,
                      filter: 'blur(0px)',
                    }
              }
              transition={
                reduced
                  ? { duration: 0.4, delay: 0 }
                  : {
                      duration: jitter.duration,
                      delay: DELAY.letters + jitter.delay,
                      ease: EASE,
                    }
              }
            >
              {letter}
            </motion.span>
          )
        })}
      </h1>

      <div className="relative mt-4 sm:mt-6">
        <motion.p
          {...tagline}
          className="font-hand text-2xl text-rose-deep sm:text-3xl lg:text-4xl"
        >
          ты лучшая подруга
        </motion.p>

        <motion.div {...squiggle}>
          <Squiggle
            delay={DELAY.squiggle}
            className="mx-auto mt-1.5 h-3 w-44 text-terracotta/55 sm:w-56"
          />
        </motion.div>
      </div>

      <motion.div {...ornament}>
        <Ornament className="mt-8 sm:mt-10" />
      </motion.div>

      <motion.p
        {...greeting}
        className="mt-8 max-w-xl text-balance text-[0.98rem] leading-relaxed text-ink-soft sm:mt-10 sm:text-lg"
      >
        Я долго думал, как сказать это вслух, и в итоге просто собрал слова здесь.
        Тут нет повода и нет даты — только то, что мне давно хотелось тебе сказать.
      </motion.p>

      <motion.div {...hint} className="mt-12 flex flex-col items-center gap-1 sm:mt-14">
        <span className="font-hand text-lg text-ink-faint">листай</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 7, 0] }}
          transition={
            reduced
              ? undefined
              : { duration: 3.8, repeat: Infinity, ease: 'easeInOut', times: [0, 0.55, 1] }
          }
        >
          <ArrowDown delay={DELAY.hint + 0.2} className="h-12 w-7 text-rose-deep/75" />
        </motion.span>
      </motion.div>

      <Cross className="absolute bottom-[16%] right-[13%] h-6 w-6 -rotate-12 text-terracotta/35" />
    </section>
  )
}
