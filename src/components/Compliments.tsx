import { motion } from 'framer-motion'
import { ComplimentCard } from './ComplimentCard'
import { Cross, Sparkle, Underline } from './Doodles'
import { cardLayout } from '../data/cardLayout'
import { compliments } from '../data/compliments'
import { useScrollReveal } from '../hooks/useReveal'

export function Compliments() {
  const eyebrow = useScrollReveal({ delay: 0, distance: 14, duration: 0.8 })
  const heading = useScrollReveal({ delay: 0.13, distance: 22, duration: 1.05 })
  const underline = useScrollReveal({ delay: 0.34, distance: 6, duration: 0.7 })

  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-6 sm:py-32">
      <div className="relative flex flex-col items-center text-center">
        <Sparkle className="absolute -top-3 right-[10%] h-5 w-5 -rotate-12 text-olive/40 sm:h-6 sm:w-6" />

        <motion.p {...eyebrow} className="font-hand text-lg text-ink-faint sm:text-xl">
          немного личного
        </motion.p>

        <motion.h2
          {...heading}
          className="mt-4 max-w-2xl -rotate-[0.6deg] text-balance font-display text-[1.9rem] leading-tight text-ink sm:mt-5 sm:text-[2.6rem] lg:text-[3rem]"
        >
          Причины, по которым с тобой хорошо
        </motion.h2>

        <motion.div {...underline}>
          <Underline delay={0.4} className="mt-3 h-3 w-52 text-terracotta/55 sm:w-72" />
        </motion.div>
      </div>

      <ul className="mt-14 grid grid-cols-1 gap-x-5 gap-y-7 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-7 lg:gap-y-9">
        {compliments.map((compliment, i) => (
          <ComplimentCard
            key={compliment.index}
            compliment={compliment}
            layout={cardLayout[i % cardLayout.length]}
          />
        ))}
      </ul>

      <Cross className="absolute bottom-16 left-[6%] h-6 w-6 rotate-[18deg] text-terracotta/30" />
    </section>
  )
}
