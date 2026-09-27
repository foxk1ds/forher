import { motion, useReducedMotion } from 'framer-motion'
import { Sparkle, Tape } from './Doodles'
import type { Compliment } from '../data/compliments'
import type { CardBorder, CardLayout, PaperTone } from '../data/cardLayout'
import { EASE } from '../lib/motion'

/** Три оттенка бумаги, чтобы обрывки не выглядели из одной пачки. */
const TONE: Record<PaperTone, string> = {
  base: 'bg-card',
  warm: 'bg-card-warm',
  deep: 'bg-card-deep',
}

/** Разные типы рамки — по одной на каждый характер обрывка. */
const BORDER: Record<CardBorder, string> = {
  solid: 'border border-edge',
  dashed: 'border border-dashed border-edge/85',
  dotted: 'border border-dotted border-edge/70',
  torn: '',
}

/** Рваному краю box-shadow не подходит: тень должна повторять силуэт. */
const TORN_SHADOW =
  'drop-shadow-[0_12px_22px_rgba(0,0,0,0.55)] transition-[filter] duration-500 hover:drop-shadow-[0_18px_30px_rgba(0,0,0,0.66)]'

type ComplimentCardProps = {
  compliment: Compliment
  layout: CardLayout
}

export function ComplimentCard({ compliment, layout }: ComplimentCardProps) {
  const reduced = useReducedMotion()
  const isTorn = layout.border === 'torn'

  const card = (
    <div
      style={{ borderRadius: layout.radius }}
      className={`tex-scrap relative flex flex-col ${layout.pad} ${TONE[layout.tone]} ${
        BORDER[layout.border]
      } ${isTorn ? 'torn' : `${layout.shadow} transition-shadow duration-500 hover:shadow-scrap-lift`} ${
        layout.stitch ? 'stitch' : ''
      }`}
    >
      {layout.tape ? <Tape className={layout.tape} /> : null}

      <span className="font-hand text-base leading-none text-rose">
        &#8470;{Number(compliment.index)}
      </span>

      <h3 className="mt-3 font-display text-[1.2rem] font-medium leading-snug text-ink sm:text-[1.35rem]">
        {compliment.title}
      </h3>

      <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
        {compliment.note}
      </p>

      {layout.stitch ? (
        <Sparkle className="absolute bottom-3 right-4 h-4 w-4 rotate-12 text-gold/50" />
      ) : null}
    </div>
  )

  return (
    <motion.li
      className={`relative ${layout.span} ${layout.offset}`}
      initial={
        reduced
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: layout.distance,
              rotate: layout.rotate * layout.spin,
              filter: 'blur(7px)',
            }
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
      {isTorn ? <div className={TORN_SHADOW}>{card}</div> : card}
    </motion.li>
  )
}
