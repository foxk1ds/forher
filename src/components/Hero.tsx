import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Cross, Sparkle, Squiggle } from './Doodles'
import { Ornament } from './Ornament'
import { useEnter } from '../hooks/useReveal'
import { EASE } from '../lib/motion'

const NAME = 'Adilya'

/**
 * Each letter has a slight jitter and its own timing,
 * so the name feels assembled by hand rather than typed on a rigid grid.
 */
const LETTER_JITTER = [
  { rotate: -2.4, y: 5, delay: 0, duration: 1.08 },
  { rotate: 1.7, y: -4, delay: 0.1, duration: 0.94 },
  { rotate: -0.9, y: 3, delay: 0.06, duration: 1.16 },
  { rotate: 2.2, y: -2, delay: 0.2, duration: 0.9 },
  { rotate: -1.4, y: 6, delay: 0.14, duration: 1.22 },
  { rotate: 1.1, y: -3, delay: 0.18, duration: 0.98 },
]

/** Staggered reveal order for the hero screen. */
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
      <Sparkle className="absolute left-[13%] top-[21%] h-5 w-5 rotate-[14deg] text-gold/50 sm:h-6 sm:w-6" />

      <motion.p {...eyebrow} className="font-hand text-lg text-ink-faint sm:text-xl">
        a card for no reason
      </motion.p>

      <h1
        aria-label={NAME}
        className="mt-4 flex justify-center font-display text-[5rem] leading-[0.92] text-ink sm:mt-6 sm:text-[7.4rem] lg:text-[10rem]"
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

      <div className="relative mt-3 sm:mt-5">
        <motion.p
          {...tagline}
          className="font-hand text-2xl text-rose sm:text-3xl lg:text-4xl"
        >
          you're the best friend
        </motion.p>

        <motion.div {...squiggle}>
          <Squiggle
            delay={DELAY.squiggle}
            className="mx-auto mt-1.5 h-3 w-44 text-terracotta/70 sm:w-56"
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
        I spent a long time thinking about how to say this out loud, and in the end, I just gathered the words here.
        There's no special occasion and no date — just what I've wanted to tell you for so long.
      </motion.p>

      <motion.div {...hint} className="mt-12 flex flex-col items-center gap-1 sm:mt-14">
        <span className="font-hand text-lg text-ink-faint">scroll</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 7, 0] }}
          transition={
            reduced
              ? undefined
              : { duration: 3.8, repeat: Infinity, ease: 'easeInOut', times: [0, 0.55, 1] }
          }
        >
          <ArrowDown delay={DELAY.hint + 0.2} className="h-12 w-7 text-rose/80" />
        </motion.span>
      </motion.div>

      <Cross className="absolute bottom-[15%] right-[12%] h-6 w-6 -rotate-12 text-terracotta/45" />
    </section>
  )
}
