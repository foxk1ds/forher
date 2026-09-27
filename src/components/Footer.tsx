import { motion } from 'framer-motion'
import { Rule } from './Doodles'
import { useScrollReveal } from '../hooks/useReveal'

export function Footer() {
  const line = useScrollReveal({ delay: 0, distance: 12, duration: 0.8 })

  return (
    <footer className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-2 sm:px-6">
      <Rule className="h-2.5 w-full text-line" />

      <motion.div
        {...line}
        className="flex flex-col items-center gap-4 pt-7 sm:flex-row sm:justify-between"
      >
        <p className="font-hand text-base text-ink-faint sm:text-lg">
          сделано для Адили — и только для неё
        </p>

        <a
          href="#top"
          className="-mx-2 inline-flex items-center px-2 py-3 font-hand text-base text-ink-faint underline decoration-line decoration-dashed underline-offset-4 transition-colors duration-300 hover:text-rose-deep hover:decoration-rose/70 sm:text-lg"
        >
          наверх
        </a>
      </motion.div>
    </footer>
  )
}
