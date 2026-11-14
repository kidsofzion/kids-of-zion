import type { ReactNode } from 'react'
import { Link } from 'react-router'
import type { ThemeColor } from '../../content/types'
import { cx, themeClasses } from '../../lib/theme'
import { Icon } from './Icon'

type ButtonVariant = 'primary' | 'secondary' | 'ink' | 'ghost' | 'white'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-sun-500 text-ink-900 border-2 border-ink-900 shadow-pop-sm hover:-translate-y-0.5 hover:shadow-pop active:translate-y-0.5 active:shadow-none',
  secondary: 'bg-white text-ink-900 border-2 border-ink-900 shadow-pop-sm hover:-translate-y-0.5 hover:shadow-pop active:translate-y-0.5 active:shadow-none',
  ink: 'bg-ink-900 text-white border-2 border-ink-900 shadow-[0_4px_0_0_var(--color-sun-500)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none',
  ghost: 'bg-transparent text-ink-900 hover:bg-ink-50 border-2 border-transparent',
  white: 'bg-white text-ink-900 border-2 border-white hover:bg-sun-100',
}
const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-base gap-2',
  lg: 'px-7 py-3.5 text-lg gap-2.5',
}

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  iconRight?: string
  className?: string
  children: ReactNode
}

const buttonClass = (variant: ButtonVariant, size: ButtonSize, className?: string) =>
  cx(
    'inline-flex items-center justify-center rounded-full font-display font-semibold transition-all duration-150 select-none disabled:opacity-50 disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

export function ButtonLink({ to, variant = 'primary', size = 'md', icon, iconRight, className, children }: ButtonBaseProps & { to: string }) {
  return (
    <Link to={to} className={buttonClass(variant, size, className)}>
      {icon && <Icon name={icon} />}
      {children}
      {iconRight && <Icon name={iconRight} />}
    </Link>
  )
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  className,
  children,
  ...rest
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={buttonClass(variant, size, className)} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
      {iconRight && <Icon name={iconRight} />}
    </button>
  )
}

export function Pill({ theme = 'ink', children, className, icon }: { theme?: ThemeColor; children: ReactNode; className?: string; icon?: string }) {
  const t = themeClasses[theme]
  return (
    <span className={cx('inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold', t.soft, t.text, className)}>
      {icon && <Icon name={icon} className="h-3.5 w-3.5" />}
      {children}
    </span>
  )
}

/** Shown on any content that has not yet passed theological review. */
export function DraftBadge({ className, long = false }: { className?: string; long?: boolean }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-pom-500 bg-white px-3 py-0.5 text-xs font-bold text-pom-700',
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-pom-500" aria-hidden="true" />
      {long ? 'Draft · awaiting theological review' : 'Draft · in review'}
    </span>
  )
}

export function ComingSoonBadge({ className, children = 'Coming soon' }: { className?: string; children?: ReactNode }) {
  return (
    <span className={cx('inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-0.5 text-xs font-bold text-sun-400', className)}>
      <Icon name="sparkle" className="h-3.5 w-3.5" />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  eyebrowClass = 'text-pom-700',
  className,
  as: As = 'h2',
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  eyebrowClass?: string
  className?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <div className={cx(align === 'center' && 'mx-auto text-center', 'max-w-3xl', className)}>
      {eyebrow && <p className={cx('eyebrow mb-2', eyebrowClass)}>{eyebrow}</p>}
      <As className="text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">{title}</As>
      {description && <p className="mt-4 text-lg text-ink-700">{description}</p>}
    </div>
  )
}

export function ScriptureBox({ reference, text, className, size = 'md' }: { reference: string; text: string; className?: string; size?: 'md' | 'lg' }) {
  return (
    <figure className={cx('relative rounded-3xl border-2 border-ink-900 bg-white p-5 sm:p-6', className)}>
      <span className="absolute -top-3 left-5 rounded-full bg-ink-900 px-3 py-0.5 text-[0.7rem] font-bold tracking-wider text-sun-400 uppercase">
        Scripture
      </span>
      <blockquote className={cx('font-display text-ink-900', size === 'lg' ? 'text-xl sm:text-2xl' : 'text-lg')}>“{text}”</blockquote>
      <figcaption className="mt-3 text-sm font-bold text-jordan-700">— {reference}</figcaption>
    </figure>
  )
}

export function InterpretationNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border-l-4 border-lilac-500 bg-lilac-100/70 p-4 text-[0.97rem] text-ink-900">
      <p className="mb-1 text-xs font-bold tracking-wider text-lilac-700 uppercase">Our teaching (interpretation)</p>
      {children}
    </div>
  )
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-700">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {it.to ? (
              <Link to={it.to} className="font-semibold underline-offset-2 hover:underline">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-bold text-ink-900">
                {it.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
