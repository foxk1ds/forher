import { motion } from 'framer-motion'
import { Tape } from './Doodles'
import { Ornament } from './Ornament'
import { useScrollReveal } from '../hooks/useReveal'

export function Closing() {
  const eyebrow = useScrollReveal({ delay: 0, distance: 14, duration: 0.8 })
  const letter = useScrollReveal({ delay: 0.14, distance: 24, duration: 1.15 })
  const ornament = useScrollReveal({ delay: 0.3, distance: 10, duration: 0.8 })
  const farewell = useScrollReveal({ delay: 0.44, distance: 18, duration: 1.05, rotate: -0.9 })
  const signature = useScrollReveal({ delay: 0.6, distance: 14, duration: 0.9 })

  return (
    <section className="relative mx-auto w-full max-w-3xl px-5 py-24 sm:px-6 sm:py-32">
      {/* The message sits as a separate sheet, taped down.
          Left-aligned like a real letter, signature on the right. */}
      <div className="tex-scrap relative -rotate-[0.7deg] rounded-[16px 40px 18px 36px] bg-card-warm px-6 py-11 shadow-scrap-c sm:px-12 sm:py-14">
        <Tape className="-left-4 -top-4 h-7 w-28 rotate-[-7deg] text-terracotta" />

        <motion.p {...eyebrow} className="font-hand text-lg text-ink-soft sm:text-xl">
          one last thing
        </motion.p>

        <motion.div
          {...letter}
          className="mt-7 flex flex-col gap-6 font-display text-[1.3rem] leading-[1.72] text-ink sm:mt-9 sm:gap-7 sm:text-[1.55rem] lg:text-[1.7rem]"
        >
          <p className="max-w-[46ch]">
            Thank you for being you. For the laughter, for the conversations about everything and nothing until morning comes,
            for knowing that I can call anytime without having to explain anything.
          </p>
          <p className="max-w-[46ch] italic text-ink-soft">
            Around you, things get quieter inside. That doesn't happen with everyone,
            and I am so grateful that it happened with me.
          </p>
        </motion.div>

        <motion.div {...ornament} className="mt-9 flex justify-start">
          <Ornament />
        </motion.div>

        <motion.p
          {...farewell}
          className="mt-7 max-w-[38ch] font-hand text-xl text-rose sm:text-2xl"
        >
          This isn't an occasion or a date. I just wanted to say it.
        </motion.p>

        <motion.p
          {...signature}
          className="mt-10 text-right font-hand text-lg text-ink-soft sm:text-xl"
        >
          From Anuar
        </motion.p>
      </div>
    </section>
  )
}
