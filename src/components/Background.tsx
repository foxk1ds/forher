import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Лист бумаги: припылённый фон, неровные водяные разливы
 * и два слоя текстуры — мелкое зерно и крупное волокно.
 */
export function Background() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()

  // Каждый разлив плывёт со своей скоростью — движение не выглядит синхронным.
  const driftFar = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])
  const driftMid = useTransform(scrollYProgress, [0, 1], ['0%', '-11%'])
  const driftNear = useTransform(scrollYProgress, [0, 1], ['0%', '17%'])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper to-paper-deep" />

      <motion.div
        style={reduced ? undefined : { y: driftFar }}
        className="stain absolute -left-[16rem] -top-[12rem] h-[40rem] w-[46rem] bg-terracotta/12"
      />

      <motion.div
        style={reduced ? undefined : { y: driftMid }}
        className="stain absolute -right-[18rem] top-[38rem] h-[38rem] w-[42rem] bg-olive/12"
      />

      <motion.div
        style={reduced ? undefined : { y: driftNear }}
        className="stain absolute -bottom-[14rem] left-[14%] h-[32rem] w-[38rem] bg-rose/14"
      />

      {/* Края листа темнее — старая бумага. */}
      <div className="absolute inset-0 bg-[radial-gradient(128%_96%_at_48%_38%,transparent_52%,rgba(96,72,46,0.11)_100%)]" />

      <div className="paper-overlay tex-fiber opacity-[0.05]" />
      <div className="paper-overlay tex-grain opacity-[0.06]" />
    </div>
  )
}
