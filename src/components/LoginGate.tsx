import { motion, useReducedMotion } from 'framer-motion'
import { Sparkle, Tape } from './Doodles'
import { EASE } from '../lib/motion'

type LoginGateProps = {
  onConfirm: () => void
}

export function LoginGate({ onConfirm }: LoginGateProps) {
  const reduced = useReducedMotion()

  const handleDecline = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
        animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.97 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="tex-scrap relative w-full max-w-md -rotate-[0.6deg] rounded-[18px_32px_16px_28px] border border-edge bg-card-warm p-8 shadow-scrap-lift sm:p-10"
      >
        <Tape className="-top-3.5 left-1/2 h-7 w-28 -translate-x-1/2 -rotate-1 text-terracotta" />
        <Sparkle className="absolute -right-2 -top-2 h-5 w-5 rotate-12 text-gold/60" />

        <div className="flex flex-col items-center text-center">
          <p className="font-hand text-base text-ink-faint sm:text-lg">
            a private note
          </p>

          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Are you Adilya?
          </h2>

          <p className="mt-3 max-w-xs text-balance text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
            This page was written for one person and only makes sense for her.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={onConfirm}
              className="flex-1 rounded-xl border border-rose/60 bg-rose/20 px-6 py-3 font-hand text-xl text-ink transition-all duration-300 hover:border-rose hover:bg-rose/30 active:scale-95"
            >
              Yes
            </button>

            <button
              type="button"
              onClick={handleDecline}
              className="flex-1 rounded-xl border border-edge bg-night/70 px-6 py-3 font-hand text-xl text-ink-soft transition-all duration-300 hover:border-ink-faint hover:text-ink active:scale-95"
            >
              No
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
