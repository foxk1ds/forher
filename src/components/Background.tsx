import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Тёмный лист: тёплые разливы вместо ровных кругов, свет лампы по центру
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
      <div className="absolute inset-0 bg-gradient-to-b from-night-soft via-night to-night" />

      <motion.div
        style={reduced ? undefined : { y: driftFar }}
        className="stain absolute -left-[16rem] -top-[12rem] h-[40rem] w-[46rem] bg-terracotta/10"
      />

      <motion.div
        style={reduced ? undefined : { y: driftMid }}
        className="stain absolute -right-[18rem] top-[38rem] h-[38rem] w-[42rem] bg-gold/9"
      />

      <motion.div
        style={reduced ? undefined : { y: driftNear }}
        className="stain absolute -bottom-[14rem] left-[14%] h-[32rem] w-[38rem] bg-rose/8"
      />

      {/* Свет настольной лампы сверху и затемнение к краям листа. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(201,127,85,0.07),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(132%_100%_at_50%_45%,transparent_42%,rgba(0,0,0,0.55)_100%)]" />

      <div className="paper-overlay tex-fiber opacity-[0.04]" />
      <div className="paper-overlay tex-grain opacity-[0.05]" />
    </div>
  )
}
