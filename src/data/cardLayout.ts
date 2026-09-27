export type PaperTone = 'light' | 'kraft'

export type CardLayout = {
  /** Сколько колонок коллажа занимает карточка. */
  span: string
  /** Угол наклона в градусах: карточки приклеены на глаз, а не по линейке. */
  rotate: number
  /** Асимметричные скругления — у каждого обрывка свои. */
  radius: string
  pad: string
  /** Смещение вниз на широких экранах, чтобы сбить общий ряд. */
  offset: string
  shadow: string
  tone: PaperTone
  /** Задержка и длительность подобраны вручную и намеренно неровные. */
  delay: number
  duration: number
  /** Кусочек скотча сверху. */
  tape?: string
  /** Пунктирный шов по краю. */
  stitch?: boolean
}

/**
 * Раскладка восьми карточек. Порядок соответствует списку комплиментов,
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
    tone: 'light',
    delay: 0.05,
    duration: 1.0,
    tape: 'left-7 -top-2 h-6 w-24 -rotate-6 text-terracotta',
  },
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: 1.3,
    radius: '12px 27px 10px 23px',
    pad: 'px-5 py-6 sm:px-6 sm:py-7',
    offset: 'lg:mt-10',
    shadow: 'shadow-scrap-b',
    tone: 'kraft',
    delay: 0.22,
    duration: 1.12,
  },
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: -2.2,
    radius: '23px 23px 8px 27px',
    pad: 'px-6 py-7 sm:px-7 sm:py-8',
    offset: 'lg:mt-3',
    shadow: 'shadow-scrap-c',
    tone: 'light',
    delay: 0.09,
    duration: 0.92,
    stitch: true,
  },
  {
    span: 'sm:col-span-2 lg:col-span-3',
    rotate: 0.9,
    radius: '11px 32px 15px 29px',
    pad: 'px-6 py-7 sm:px-9 sm:py-8',
    offset: 'lg:mt-2',
    shadow: 'shadow-scrap-b',
    tone: 'kraft',
    delay: 0.27,
    duration: 1.06,
    tape: '-left-4 -top-3 h-7 w-28 rotate-[8deg] text-olive',
  },
  {
    span: 'sm:col-span-2 lg:col-span-3',
    rotate: -1.2,
    radius: '32px 13px 27px 10px',
    pad: 'px-6 py-7 sm:px-8 sm:py-8',
    offset: 'lg:mt-12',
    shadow: 'shadow-scrap-a',
    tone: 'light',
    delay: 0.07,
    duration: 0.98,
  },
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: 1.9,
    radius: '15px 25px 29px 11px',
    pad: 'px-5 py-6 sm:px-7 sm:py-7',
    offset: 'lg:mt-6',
    shadow: 'shadow-scrap-c',
    tone: 'light',
    delay: 0.19,
    duration: 1.09,
    stitch: true,
  },
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: -0.8,
    radius: '27px 10px 21px 27px',
    pad: 'px-6 py-7 sm:px-7 sm:py-8',
    offset: 'lg:mt-0',
    shadow: 'shadow-scrap-b',
    tone: 'kraft',
    delay: 0.13,
    duration: 0.94,
    tape: 'right-6 -top-2 h-6 w-20 rotate-[5deg] text-rose-deep',
  },
  {
    span: 'sm:col-span-1 lg:col-span-2',
    rotate: 2.4,
    radius: '8px 27px 13px 25px',
    pad: 'px-6 py-6 sm:px-7 sm:py-7',
    offset: 'lg:mt-9',
    shadow: 'shadow-scrap-a',
    tone: 'light',
    delay: 0.31,
    duration: 1.14,
  },
]
