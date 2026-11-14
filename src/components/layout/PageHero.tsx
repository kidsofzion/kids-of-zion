import type { ReactNode } from 'react'
import type { ThemeColor } from '../../content/types'
import { cx, themeClasses } from '../../lib/theme'
import { Blob, Star } from '../art/Scenery'

/** The colourful header band used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  theme = 'sun',
  children,
  art,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  theme?: ThemeColor
  children?: ReactNode
  art?: ReactNode
}) {
  const t = themeClasses[theme]
  return (
    <section className={cx('relative isolate overflow-hidden', t.soft)}>
      <Blob className="absolute -top-24 -right-24 -z-10 h-80 w-80 opacity-70" color="#ffffff" shape={0} />
      <Blob className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 opacity-50" color={t.hex} shape={2} />
      <Star className="absolute top-10 right-[22%] h-5 w-5 motion-safe:animate-twinkle" fill={t.hex} />
      <Star className="absolute right-[8%] bottom-12 h-3 w-3 motion-safe:animate-twinkle [animation-delay:1.4s]" fill="#24154f" />
      <div className={cx('container-koz grid items-center gap-8 py-12 sm:py-16', art ? 'lg:grid-cols-[1.4fr_1fr]' : false)}>
        <div className="max-w-3xl">
          <p className={cx('eyebrow', t.text)}>{eyebrow}</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-4 max-w-2xl text-lg text-ink-700 sm:text-xl">{description}</p>}
          {children}
        </div>
        {art && <div className="relative hidden lg:block">{art}</div>}
      </div>
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="absolute -bottom-px left-0 h-6 w-full sm:h-10" aria-hidden="true">
        <path d="M0 40 C360 0 720 40 1080 16 C1260 6 1380 18 1440 24 V40Z" fill="#fffaf2" />
      </svg>
    </section>
  )
}
