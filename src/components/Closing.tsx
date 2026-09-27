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
      {/* Послание лежит отдельным листом, приклеенным скотчем. */}
      <div className="tex-scrap relative -rotate-[0.5deg] rounded-[16px_40px_18px_36px] bg-card px-6 py-11 shadow-scrap-c sm:px-12 sm:py-14">
        <Tape className="-left-4 -top-4 h-7 w-28 rotate-[-7deg] text-terracotta" />

        <div className="flex flex-col items-center text-center">
          <motion.p {...eyebrow} className="font-hand text-lg text-ink-faint sm:text-xl">
            последнее
          </motion.p>

          <motion.div
            {...letter}
            className="mt-8 flex w-full flex-col gap-6 font-display text-[1.15rem] leading-[1.7] text-ink sm:mt-10 sm:gap-7 sm:text-[1.35rem] lg:text-[1.5rem]"
          >
            <p>
              Спасибо, что ты есть. За смех, за разговоры ни о чём до самого утра,
              за то, что можно позвонить в любой момент и ничего не объяснять.
            </p>
            <p className="text-ink-soft">
              Рядом с тобой становится тише внутри. Так получается не с каждым,
              и я очень рад, что это случилось со мной.
            </p>
          </motion.div>

          <motion.div {...ornament}>
            <Ornament className="mt-10" />
          </motion.div>

          <motion.p
            {...farewell}
            className="mt-8 max-w-md text-balance font-hand text-xl text-rose-deep sm:text-2xl"
          >
            Это не повод и не дата. Просто хотел тебе это сказать.
          </motion.p>

          <motion.p
            {...signature}
            className="mt-9 font-hand text-lg text-ink-soft sm:text-xl"
          >
            От Ануара
          </motion.p>
        </div>
      </div>
    </section>
  )
}
