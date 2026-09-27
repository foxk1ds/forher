import { motion, useReducedMotion } from 'framer-motion'
import { Sparkle, Tape } from './Doodles'
import type { Compliment } from '../data/compliments'
import type { CardLayout, PaperTone } from '../data/cardLayout'
import { EASE } from '../lib/motion'

/** Бумага двух оттенков, чтобы обрывки не выглядели из одной пачки. */
const TONE: Record<PaperTone, string> = {
  light: 'bg-card',
  kraft: 'bg-kraft',
}

type ComplimentCardProps = {
  compliment: Compliment
  layout: CardLayout
}

export function ComplimentCard({ compliment, layout }: ComplimentCardProps) {
  const reduced = useReducedMotion()

  return (
    <motion.li
      className={`relative ${layout.span} ${layout.offset}`}
      initial={
        reduced
          ? { opacity: 0 }
          : { opacity: 0, y: 34, rotate: layout.rotate * 3, filter: 'blur(7px)' }
      }
      whileInView={
        reduced
          ? { opacity: 1 }
          : { opacity: 1, y: 0, rotate: layout.rotate, filter: 'blur(0px)' }
      }
      viewport={{ once: true, amount: 0.3 }}
      transition={
        reduced
          ? { duration: 0.4 }
          : { duration: layout.duration, delay: layout.delay, ease: EASE }
      }
      whileHover={
        reduced
          ? undefined
          : { y: -7, rotate: 0, transition: { type: 'spring', stiffness: 190, damping: 22 } }
      }
    >
      <div
        style={{ borderRadius: layout.radius }}
        className={`tex-scrap relative flex flex-col ${layout.pad} ${layout.shadow} ${
          TONE[layout.tone]
        } ${layout.stitch ? 'stitch' : ''} transition-shadow duration-500 hover:shadow-scrap-lift`}
      >
        {layout.tape ? <Tape className={layout.tape} /> : null}

        <span className="font-hand text-base leading-none text-rose-deep">
          &#8470;{Number(compliment.index)}
        </span>

        <h3 className="mt-3 font-display text-[1.0625rem] leading-snug text-ink sm:text-xl">
          {compliment.title}
        </h3>

        <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
          {compliment.note}
        </p>

        {layout.stitch ? (
          <Sparkle className="absolute bottom-3 right-4 h-4 w-4 rotate-12 text-olive/45" />
        ) : null}
      </div>
    </motion.li>
  )
}
