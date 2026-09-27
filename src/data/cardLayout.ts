export type PaperTone = 'base' | 'warm' | 'deep'

/** Тип рамки: сплошная, пунктирная, точечная или рваный край. */
export type CardBorder = 'solid' | 'dashed' | 'dotted' | 'torn'

export type CardLayout = {
  /** Сколько колонок коллажа занимает обрывок. */
  span: string
  /** Угол наклона в градусах: листы приклеены на глаз, а не по линейке. */
  rotate: number
  /** Скругления у каждого свои, у рваных — только верхние углы. */
  radius: string
  pad: string
  /** Смещение вниз на широких экранах, чтобы сбить общий ряд. */
  offset: string
  shadow: string
  tone: PaperTone
  border: CardBorder
  /** Задержка, длительность, высота подъёма и сила начального доворота
      подобраны вручную: карточки не должны выходить строем. */
  delay: number
  duration: number
  distance: number
  spin: number
  /** Кусочек скотча сверху. */
  tape?: string
  /** Пунктирный шов по краю. */
  stitch?: boolean
}

/**
 * Раскладка восьми обрывков. Порядок соответствует списку комплиментов,
 * поэтому тексты и оформление правятся независимо друг от друга.
 */
export const cardLayout: CardLayout[] = [
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: -1.7,
    radius: '30px 10px 24px 13px',
    pad: 'px-6 py-6 sm:px-7 sm:py-7',
    offset: 'lg:mt-0',
    shadow: 'shadow-scrap-a',
    tone: 'base',
    border: 'solid',
    delay: 0.04,
    duration: 1.02,
    distance: 30,
    spin: 3.4,
    tape: 'left-7 -top-2 h-6 w-24 -rotate-6 text-terracotta',
  },
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: 1.4,
    radius: '12px 27px 10px 23px',
    pad: 'px-5 py-6 sm:px-6 sm:py-7',
    offset: 'lg:mt-10',
    shadow: 'shadow-scrap-b',
    tone: 'warm',
    border: 'dotted',
    delay: 0.23,
    duration: 1.18,
    distance: 22,
    spin: 2.6,
  },
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: -2.3,
    radius: '14px 11px 0 0',
    pad: 'px-6 pt-6 pb-10 sm:px-7 sm:pt-7 sm:pb-12',
    offset: 'lg:mt-3',
    shadow: 'shadow-scrap-c',
    tone: 'deep',
    border: 'torn',
    delay: 0.09,
    duration: 0.88,
    distance: 42,
    spin: 4.2,
  },
  {
    span: 'sm:col-span-2 lg:col-span-3',
    rotate: 1.2,
    radius: '11px 32px 15px 29px',
    pad: 'px-6 py-7 sm:px-9 sm:py-8',
    offset: 'lg:mt-2',
    shadow: 'shadow-scrap-b',
    tone: 'warm',
    border: 'solid',
    delay: 0.31,
    duration: 1.08,
    distance: 26,
    spin: 3,
    tape: '-left-4 -top-3 h-7 w-28 rotate-[8deg] text-gold',
  },
  {
    span: 'sm:col-span-2 lg:col-span-3',
    rotate: -1.2,
    radius: '32px 13px 27px 10px',
    pad: 'px-6 py-7 sm:px-8 sm:py-8',
    offset: 'lg:mt-12',
    shadow: 'shadow-scrap-a',
    tone: 'base',
    border: 'dashed',
    delay: 0.07,
    duration: 0.96,
    distance: 46,
    spin: 2.4,
  },
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: 2.1,
    radius: '11px 16px 0 0',
    pad: 'px-6 pt-7 pb-11 sm:px-7 sm:pt-8 sm:pb-12',
    offset: 'lg:mt-6',
    shadow: 'shadow-scrap-c',
    tone: 'base',
    border: 'torn',
    delay: 0.19,
    duration: 1.24,
    distance: 20,
    spin: 4.6,
  },
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: -1.1,
    radius: '27px 10px 21px 27px',
    pad: 'px-6 py-7 sm:px-7 sm:py-8',
    offset: 'lg:mt-0',
    shadow: 'shadow-scrap-b',
    tone: 'deep',
    border: 'solid',
    delay: 0.13,
    duration: 0.92,
    distance: 36,
    spin: 3.2,
    stitch: true,
  },
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: 2.5,
    radius: '8px 27px 13px 25px',
    pad: 'px-6 py-6 sm:px-7 sm:py-7',
    offset: 'lg:mt-9',
    shadow: 'shadow-scrap-a',
    tone: 'warm',
    border: 'dashed',
    delay: 0.28,
    duration: 1.14,
    distance: 24,
    spin: 2.8,
    tape: 'right-6 -top-2 h-6 w-20 rotate-[5deg] text-rose',
  },
]
