import { Curl, ShortStroke } from './Doodles'

type OrnamentProps = {
  className?: string
}

/** Разделитель: два штриха и петелька между ними. */
export function Ornament({ className = '' }: OrnamentProps) {
  return (
    <div aria-hidden className={`flex items-center justify-center gap-3 ${className}`}>
      <ShortStroke className="h-2 w-12 text-line sm:w-16" />
      <Curl className="h-4 w-7 text-rose-deep/70" />
      <ShortStroke className="h-2 w-12 -scale-x-100 text-line sm:w-16" />
    </div>
  )
}
